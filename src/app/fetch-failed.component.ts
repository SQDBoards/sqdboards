import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-fetch-failed",
  template: `
    <div
      class="flex flex-col place-self-center items-center justify-center prose"
    >
      <h2>Oops... Something failed to load.</h2>
      <p>This may have happend due to a few reasons:</p>
      <ul>
        <li>A problem on our end (broken API),</li>
        <li>
          A problem on your end (API endpoint address blocked, or inaccessible
          due to firewall settings),
        </li>
        <li>Sudden internet connection loss.</li>
      </ul>
      <p class="font-semibold text-center">
        Try to reload the page and see if the error is gone. We are sorry for
        the inconveniences =(
      </p>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `
  ]
})
export class FetchFailedComponent implements OnInit {
  constructor() {}

  @Input() callbackFn: any;

  ngOnInit(): void {}
}
