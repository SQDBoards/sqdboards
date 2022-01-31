import { AfterViewInit, Component, OnInit } from '@angular/core';
import anime from 'animejs';
import { NotationService } from 'src/app/services/notation.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css', '../../tailwind.css']
})
export class BuilderComponent implements OnInit, AfterViewInit {

  constructor(private notation: NotationService) {};

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const typed = new Typed("#typed-size", {
      strings: ['It all starts with the size...<a class="notate" style="width: fit-content; margin: auto;">So pick yours:</a>'],
      typeSpeed: 35,
      showCursor: false,
      loop: false,
      onComplete: () => {
        this.notation.notate();
        anime({
          targets: '.animateIn',
          opacity: ['0', '1']
        }).restart();
      }
    });
    typed.start();
  }

}
