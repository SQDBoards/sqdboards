import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Deal } from "../models/deal.model";
import { toCMSContext } from "../misc/toCMS.context";
import { withCache } from "@ngneat/cashew";

const Headers = new HttpHeaders({ "Content-Type": "application/json" });

@Injectable({
  providedIn: "root"
})
export class GetDealsService {
  constructor(private http: HttpClient) {}

  getDeals(): Observable<Deal[]> {
    return this.http.get<Deal[]>("/deals", {
      headers: Headers,
      context: withCache({ context: toCMSContext() })
    });
  }
}
