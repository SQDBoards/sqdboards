import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { withCache } from "@ngneat/cashew";
import { Deal } from "../models/deal.model";
import { toCMSContext } from "../toCMS.context";

const Headers = new HttpHeaders({ "Content-Type": "application/json" });

@Injectable({
  providedIn: "root"
})
export class GetDealsService {
  constructor(private http: HttpClient) {}

  getDeals(): Observable<Deal[]> {
    this.http
      .get<Deal[]>("/deals?populate=*", {
        headers: Headers,
        context: toCMSContext()
      })
      .subscribe(res => {
        console.log(res);
      });
    return this.http.get<Deal[]>("/deals?populate=*", {
      headers: Headers,
      context: toCMSContext()
    });
  }
}
