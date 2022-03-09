import { AfterViewInit, Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

import { ScrollService } from "src/app/scroll.service";
import { NotationService } from "src/app/services/notation.service";
import { BuilderService } from "../../builder.service";
import { pcb } from "../../models/pcb.model";

import Typed from "typed.js";
import anime from "animejs";

@Component({
  selector: "app-pcb",
  templateUrl: "./pcb.component.html",
  styleUrls: ["./pcb.component.scss"]
})
export class PcbComponent implements AfterViewInit {
  constructor(
    private notation: NotationService,
    private formbuilder: FormBuilder,
    private builderService: BuilderService,
    public scroll: ScrollService
  ) {}

  stringify(obj: Object) {
    return JSON.stringify(obj);
  }
  printOut(msg: any) {
    console.log("Print:", msg);
  }

  globalDropdownState: boolean = false;
  triggerDropdown(el: HTMLElement) {
    this.globalDropdownState = !this.globalDropdownState;
    document
      .getElementById(el.dataset["dropdownel"]!)!
      .classList.toggle("show");
  }

  // step 1 - pcb size
  typedFinish: boolean = false;
  availSizes: string[] = [];
  pcbFilters: FormGroup = this.formbuilder.group({
    size: [null],
    hotswap: [null],
    rgb: [null],
    usbType: [null],
    firmware: [null]
  });

  getPcbs() {
    this.pcbs = this.builderService.getObjects("pcbs");
    this.pcbs.subscribe(data => {
      this.showPcbs = data;
    });
  }

  getPcbSizes() {
    this.pcbs?.subscribe(data => {
      this.availSizes = this.builderService.getUniques(data, "size");
    });
  }

  choosePcbSize(data: any) {
    if (this.pcbFilters.value.size.length === 0) {
      this.pcbs?.subscribe(data => (this.showPcbs = data));
      return;
    }
    this.loading = true;
    this.showPcbs = [];
    data.size.forEach((sz: string) => {
      this.pcbs?.subscribe(pcbs => {
        pcbs.forEach(pcb => {
          pcb.size === sz ? this.showPcbs.push(pcb) : null;
        });
        this.loading = false;
      });
    });
  }

  // step 2 - pcb itself
  pcbs?: Observable<pcb[]>;
  showPcbs: pcb[] = [];
  loading: boolean = false;
  pcbChoice: FormGroup = this.formbuilder.group({
    pcb: [null, [Validators.required]]
  });
  btnLabel: string = "Pick";

  printChosenPcb(data: any) {
    // console.log("Chosen:", data.pcb);
  }

  submitPcb(val: any) {
    console.log("submitted:", val);
  }

  ngAfterViewInit(): void {
    const typed = new Typed("#typed-size", {
      strings: [
        'It all starts with the size...<p class="notate" style="width: fit-content; margin: auto;">So pick yours:</p>'
      ],
      typeSpeed: 35,
      showCursor: false,
      loop: false,
      onComplete: () => {
        this.notation.notate();
        document.getElementById("pcbChoice")!.style.display = "flex";
        anime({
          targets: ".animateIn",
          opacity: [0, 1],
          duration: 350,
          easing: "easeOutQuart"
        });
        this.typedFinish = true;
      }
    });
    typed.start();

    this.getPcbs();
    this.getPcbSizes();
    this.pcbFilters.valueChanges.subscribe(data => this.choosePcbSize(data));

    this.pcbChoice.valueChanges.subscribe(data => this.printChosenPcb(data));
  }
}
