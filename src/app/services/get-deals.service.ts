import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Deal } from "../deal";
import { Observable, of } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";
import { withCache } from "@ngneat/cashew";

const Headers = new HttpHeaders({ "Content-Type": "application/json" });

@Injectable({
  providedIn: "root"
})
export class GetDealsService {
  constructor(private http: HttpClient) {}

  getDeals(): Observable<Deal[]> {
    return this.http.get<Deal[]>("/api/deals", {
      headers: Headers,
      context: withCache()
    });
  }
}
