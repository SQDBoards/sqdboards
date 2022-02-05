import { Directive, ElementRef } from '@angular/core';
import mediumZoom from 'medium-zoom';

@Directive({
  selector: '[zoomable]'
})
export class ZoomableDirective {

  constructor(private el: ElementRef) {
    mediumZoom(el.nativeElement, {
      margin: 8,
      scrollOffset: 100,
      background: '#3b3b3b'
    });
  };

}
