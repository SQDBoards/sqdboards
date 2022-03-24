import { Component } from "@angular/core";

@Component({
  selector: "loading",
  template: `<div class="spin" [ngStyle]="styles"></div>`,
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .spin {
        display: inline-block;
        border: 3px solid;
        border-radius: 50%;
        animation: spin 1s cubic-bezier(0.76, 0, 0.24, 1) infinite;
        -webkit-animation: spin 1s cubic-bezier(0.76, 0, 0.24, 1) infinite;
      }
      @keyframes spin {
        to {
          -webkit-transform: rotate(360deg);
        }
      }
      @-webkit-keyframes spin {
        to {
          -webkit-transform: rotate(360deg);
        }
      }
    `
  ]
})
export class LoadingComponent {
  constructor() {}

  styles!: {};
}
