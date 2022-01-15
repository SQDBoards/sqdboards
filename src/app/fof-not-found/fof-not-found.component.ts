import { AfterViewInit, Component, OnInit, Type } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-fof-not-found',
  templateUrl: './fof-not-found.component.html',
  styleUrls: ['./fof-not-found.component.css', '../tailwind.css']
})
export class FofNotFoundComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      var t = new Typed('#fof', {
        strings: ['Page could not be found =(', 'Try navigating again.'],
        typeSpeed: 45,
        backSpeed: 18,
        backDelay: 1500,
        loop: true
      });
  }

}
