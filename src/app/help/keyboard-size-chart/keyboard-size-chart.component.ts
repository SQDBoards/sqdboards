import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NotationService } from 'src/app/services/notation.service';

@Component({
  selector: 'app-keyboard-size-chart',
  templateUrl: './keyboard-size-chart.component.html',
  styleUrls: ['./keyboard-size-chart.component.css', '../../tailwind.css']
})
export class KeyboardSizeChartComponent implements OnInit, AfterViewInit {

  constructor(private notation: NotationService) {};

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.notation.notate();
    
  }

}
