import { AfterViewInit, Component, OnInit } from "@angular/core";
import { ScrollService } from "src/app/scroll.service";
import { NotationService } from "src/app/services/notation.service";

@Component({
  selector: "app-keyboard-size-chart",
  templateUrl: "./keyboard-size-chart.component.html",
  styleUrls: ["./keyboard-size-chart.component.css"]
})
export class KeyboardSizeChartComponent implements OnInit, AfterViewInit {
  constructor(
    private notation: NotationService,
    public scroll: ScrollService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.notation.notate();
  }
}
