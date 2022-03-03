import { Component, Input } from '@angular/core';
import { Order } from '../order';

@Component({
  selector: 'app-order-preview',
  templateUrl: './order-preview.component.html',
  styleUrls: ['./order-preview.component.css']
})
export class OrderPreviewComponent {

  constructor() { }

  @Input('orderList') order!: Order;

}
