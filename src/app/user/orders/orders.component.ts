import { AfterViewInit, Component, OnInit } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";
import { annotate } from "rough-notation";
import { Observable, of } from "rxjs";
import { OrderService } from "src/app/services/order.service";
import { Order } from "./order";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.css"]
})
export class OrdersComponent implements OnInit, AfterViewInit {
  constructor(public auth: AuthService, public orderService: OrderService) {}

  userId!: string;
  orders$!: Observable<Order[]>;
  loading: boolean = false;
  fetchFailed: boolean = false;

  retrieveOrders() {
    this.auth.user$.subscribe(
      user => {
        // retrieve userid
        this.loading = true;
        this.orderService.getOrdersByUid(user?.sub?.split("|")[1]!).subscribe(
          data => {
            this.orders$ = of(data);
            this.loading = false;
          },
          err => {
            console.error(err);
            this.fetchFailed = true;
          } // actually retrieve data from api call
        ); // subscription scope
      },
      err => {
        console.error("Failed to retrieve user profile: " + err);
      } // err scope
    ); // subscription scope
  }

  ngOnInit(): void {
    this.retrieveOrders();
  }

  ngAfterViewInit(): void {}
}
