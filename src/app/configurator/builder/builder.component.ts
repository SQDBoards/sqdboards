import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import anime from 'animejs';
import Typed from 'typed.js';

import { NotationService } from 'src/app/services/notation.service';
import { pcb } from './models/pcb.model';
import { BuilderService } from './builder.service';
import { ScrollService } from 'src/app/scroll.service';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css'],
})
export class BuilderComponent implements AfterViewInit {
  constructor(
    private notation: NotationService,
    private formbuilder: FormBuilder,
    private builderService: BuilderService,
    public scroll: ScrollService
  ) {}

  // step 1 - pcb
  availSizes: string[] = [];
  pcbs?: Observable<pcb[]>;
  showPcbs: pcb[] = [];
  pcbSizeGroup: FormGroup = this.formbuilder.group({
    pcbSize: [null, [Validators.required]],
  });
  loading: boolean = false;

  ngAfterViewInit(): void {
    const typed = new Typed('#typed-size', {
      strings: [
        'It all starts with the size...<p class="notate" style="width: fit-content; margin: auto;">So pick yours:</p>',
      ],
      typeSpeed: 35,
      showCursor: false,
      loop: false,
      onComplete: () => {
        this.notation.notate();
        document.getElementById('pcbChoice')!.style.display = 'flex';
      },
    });
    typed.start();

    this.pcbs = this.builderService.getObjects('pcbs');
    this.pcbs.subscribe((data) => {
      this.availSizes = this.builderService.getUniques(data, 'size');
    });

    this.pcbSizeGroup.valueChanges.subscribe((data) => {
      this.loading = true;
      this.showPcbs = [];
      this.pcbs?.subscribe((pcbs) => {
        pcbs.forEach((pcb) => {
          pcb.size === data.pcbSize ? this.showPcbs.push(pcb) : null;
        });
        this.loading = false;
      });
    });
  }
}
