import { AfterViewInit, Component, OnInit } from "@angular/core";
import { OrderService } from "src/app/services/order.service";
import { UserAuthService } from "../userauth.service";
import { Order } from "./order";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.css"]
})
export class OrdersComponent implements OnInit, AfterViewInit {
  constructor(
    public auth: UserAuthService,
    public orderService: OrderService
  ) {}

  userId!: string;
  orders!: { data: Order[] };
  loading: boolean = false;
  fetchFailed: boolean = false;

  retrieveOrders() {
    if (!this.auth.isAuth$) return;
    this.loading = true;
    this.orderService.orders(this.auth.jwt).subscribe({
      next: res => {
        this.orders = res;
        this.loading = false;
      },
      error: () => {}
    });
  }

  ngOnInit(): void {
    this.retrieveOrders();
  }

  ngAfterViewInit(): void {}
}
