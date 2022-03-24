import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { withCache } from "@ngneat/cashew";
import { Observable } from "rxjs";
import { toCMSContext } from "../misc/toCMS.context";
import { Order } from "../user/orders/order";

@Injectable({
  providedIn: "root"
})
export class OrderService {
  constructor(private http: HttpClient) {}

  orders(token: string | null): Observable<{ data: Order[] }> {
    return this.http.get<{ data: Order[] }>("/orders", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      context: withCache({
        context: toCMSContext()
      })
    });
  }
}
