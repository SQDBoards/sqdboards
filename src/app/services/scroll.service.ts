import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor() {}

  mouseDown = false;

  pos = { left: 0, x: 0 };

  startDragging(e: MouseEvent, el: HTMLElement) {
    this.pos = {
      left: el.scrollLeft,
      x: e.clientX,
    };

    this.mouseDown = true;
    el.style.scrollSnapType = 'none';
  }
  stopDragging(e: MouseEvent, el: HTMLElement) {
    this.mouseDown = false;
    el.style.cursor = 'grab';
    el.style.userSelect = '';
    el.style.scrollSnapType = '';
  }
  moveEvent(e: MouseEvent, el: HTMLElement) {
    if (!this.mouseDown) {
      return;
    }

    el.style.cursor = 'grabbing';
    el.style.userSelect = 'none';

    const dx = e.clientX - this.pos.x;
    el.scrollLeft = this.pos.left - dx;
  }
}
