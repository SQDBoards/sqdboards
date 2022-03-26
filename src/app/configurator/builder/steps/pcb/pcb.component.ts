import {
  AfterViewInit,
  Component,
  HostListener,
  OnDestroy,
  OnInit
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable, ReplaySubject, takeUntil } from "rxjs";

import { ScrollService } from "src/app/services/scroll.service";
import { NotationService } from "src/app/services/notation.service";
import { BuilderService } from "../../builder.service";
import { pcb } from "../../models/pcb.model";

import Typed from "typed.js";

import SwiperCore, { Lazy, Pagination } from "swiper";
import Zoomist from "zoomist";

SwiperCore.use([Pagination, Lazy]);

@Component({
  selector: "app-pcb",
  templateUrl: "./pcb.component.html",
  styleUrls: ["./pcb.component.scss"]
})
export class PcbComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(
    private notation: NotationService,
    private formbuilder: FormBuilder,
    private builderService: BuilderService,
    public scroll: ScrollService
  ) {}

  @HostListener("document:click", ["$event"]) clicklistener(event: any) {
    if (
      !event.target.id.includes("Dropdown") &&
      !event.target.id.includes("DropdownToggle") &&
      !event.target.parentElement.id.includes("Dropdown") &&
      !event.target.parentElement.parentElement.id.includes("Dropdown")
    ) {
      this.closeAllDropdowns();
    } else if (
      event.target.id.includes("Dropdown") ||
      event.target.id.includes("DropdownToggle")
    ) {
      if (
        event.target.dataset["dropdown"].toString() + "Toggle" ===
        event.target.id.toString()
      )
        this.closeAllDropdowns();
      this.toggleDropdown(event.target.dataset["dropdown"]);
    }
  }

  toggleDropdown(id: any) {
    document.getElementById(id)?.classList.toggle("show");
  }
  closeAllDropdowns() {
    const dd_list = document.getElementsByClassName("dd");
    for (let i = 0; i < dd_list.length; i++) {
      dd_list.item(i)?.classList.remove("show");
    }
  }

  stringify(obj: Object) {
    return JSON.stringify(obj);
  }

  globalDropdownState: boolean = false;
  triggerDropdown(el: HTMLElement) {
    this.globalDropdownState = !this.globalDropdownState;
    document
      .getElementById(el.dataset["dropdownel"]!)!
      .classList.toggle("show");
  }

  // step 1 - pcb size
  availSizes: string[] = [];
  pcbFilters: FormGroup = this.formbuilder.group({
    size: [null],
    hotswap: [null],
    rgb: [null]
  });

  getPcbs() {
    this.pcbs = this.builderService.getObjects("/pcbs");
    this.pcbs.subscribe(data => {
      this.showPcbs = data.data;
    });
  }

  getPcbSizes() {
    this.pcbs?.subscribe(data => {
      this.availSizes = this.builderService.getUniques(data.data, "size");
    });
  }

  clearFilter(filterName: string) {
    let filters: any = {};
    filters[filterName] = null;

    this.pcbFilters.patchValue(filters);
  }

  applyFilters(filters: any) {
    let filteredPcbs: pcb[] = [];
    this.pcbs?.subscribe(data => (filteredPcbs = data.data));

    if (filters.size) filteredPcbs = this.choosePcbSize(filters)!;
    if (filters.hotswap != null)
      filteredPcbs = this.applyFilter(
        filteredPcbs,
        "hotswap_support",
        filters.hotswap
      );
    if (filters.rgb != null)
      filteredPcbs = this.applyFilter(filteredPcbs, "rgb_support", filters.rgb);

    this.showPcbs = filteredPcbs;
    return;
  }

  applyFilter(filterIn: any[], filter: string, filterValue: any) {
    let returnItems: any[] = [];

    filterIn.forEach(item => {
      switch (filter) {
        case "hotswap_support": {
          if (item.attributes.features.hotswap_support === filterValue)
            returnItems.push(item);
          break;
        }
        case "rgb_support": {
          if (item.attributes.features.rgb_support === filterValue)
            returnItems.push(item);
          break;
        }
      }
    });

    return returnItems;
  }

  choosePcbSize(data: any) {
    if (this.pcbFilters.value.size.length === 0) {
      this.pcbs?.subscribe(data => (this.showPcbs = data.data));
      return this.showPcbs;
    }
    this.loading = true;
    this.showPcbs = [];
    data.size.forEach((sz: string) => {
      this.pcbs?.subscribe(pcbs => {
        pcbs.data.forEach(pcb => {
          pcb.attributes.size === sz ? this.showPcbs.push(pcb) : null;
        });
        this.loading = false;
      });
    });
    return this.showPcbs;
  }

  // step 2 - pcb itself
  pcbs?: Observable<{ data: pcb[] }>;
  showPcbs: pcb[] = [];
  loading: boolean = false;
  pcbChoice: FormGroup = this.formbuilder.group({
    pcb: [null, [Validators.required]]
  });
  btnLabel: string = "Pick";

  submitPcb(val: any) {
    console.log("submitted:", val);
  }

  ngOnInit(): void {
    this.getPcbs();
    this.getPcbSizes();
  }

  // listen to esc
  // to close zoomist container
  @HostListener("document:keydown.escape") closeZoomist(close?: boolean) {
    const container = document.getElementById("zoomist-container");

    if (close) {
      this.zoomist?.destroy();
      container?.classList.toggle("show");
      return;
    } else if (container?.classList.contains("show")) {
      this.zoomist?.destroy();
      container?.classList.toggle("show");
      return;
    }
  }

  zoomist?: Zoomist;

  openZoomist(el: HTMLElement) {
    const container = document.getElementById("zoomist-container");
    container?.classList.toggle("show");
    container?.setAttribute("data-zoomist-src", el.getAttribute("src")!);

    this.zoomist = new Zoomist(container!, {
      fill: "cover",
      bounds: false,
      height: "0%",
      zoomRatio: 0.2,
      maxRatio: 2.25,
      on: {
        ready: () => {
          this.zoomist!.image.setAttribute("draggable", "false");
          this.zoomist!.image.style.maxWidth = "none";
          this.zoomist!.image.style.cursor = "grab";
          document.body.style.touchAction = "none";
        },
        dragStart: () => {
          this.zoomist!.image.style.cursor = "grabbing";
        },
        dragEnd: () => {
          this.zoomist!.image.style.cursor = "grab";
        },
        destroy: () => {
          document.body.style.touchAction = "";
        }
      }
    });
  }

  // notifiers and destroyables
  typed: any;
  compDestroyed$: ReplaySubject<void> = new ReplaySubject<void>();

  ngAfterViewInit(): void {
    this.typed = new Typed("#typed-size", {
      strings: [
        'It all starts with the size...<p class="notate" style="width: fit-content; margin: auto;">So pick yours:</p>'
      ],
      typeSpeed: 35,
      showCursor: false,
      loop: false,
      onComplete: () => {
        this.notation.notate();
        document.getElementById("pcbChoice")!.style.display = "flex";
        document.getElementById("pcbsContainer")!.style.display = "flex";
      }
    });
    this.typed.start();

    this.pcbFilters.valueChanges
      .pipe(takeUntil(this.compDestroyed$))
      .subscribe(data => this.applyFilters(data));
  }

  ngOnDestroy(): void {
    // destroy all async/timed-out events
    // so they don't cause any problems
    this.typed.destroy();

    this.compDestroyed$.next();
    this.compDestroyed$.complete();
  }
}
