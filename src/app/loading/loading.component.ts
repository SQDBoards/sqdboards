import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loading',
  template: `<div class="spin"></div>`,
  styles: [
    `
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
      .spin {
        display: inline-block;
        width: 50px;
        height: 50px;
        border: 3px solid white;
        border-radius: 50%;
        border-top-color: #000000;
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
    `,
  ],
})
export class LoadingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
