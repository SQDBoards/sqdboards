import { AfterViewInit, Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css', '../../tailwind.css']
})
export class OrdersComponent implements OnInit, AfterViewInit {

  constructor() { }

  mockOrder1 = {
    'orderId': '123',
    'switches': 'Akko Rose Red',
    'pcb': 'Z68 RGB',
    'pcbManuf': 'Satan',
    'case': 'TOFU 65 - Gray Alu',
    'plate': 'Universal Brass Plate',
    'caps': 'SA Tokyo PBT'
  };

  mockOrder2 = {
    'orderId': '124',
    'switches': 'Akko Rose Red',
    'pcb': 'Z68 RGB',
    'pcbManuf': 'Satan',
    'case': 'TOFU 65 - Gray Alu',
    'plate': 'Universal Brass Plate',
    'caps': 'SA Tokyo PBT'
  };

  mockOrders = [this.mockOrder1, this.mockOrder2];

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    anime({
      targets: ''
    })
  }

}
