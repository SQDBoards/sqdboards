import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { withCache } from "@ngneat/cashew";
import { Observable, retry } from "rxjs";

const Headers = new HttpHeaders({ "Content-Type": "application/json" });

@Injectable({
  providedIn: "root"
})
export class BuilderService {
  constructor(private http: HttpClient) {}

  getUniques(parseIn: any[], parseProperty: string): string[] {
    let uniques: string[] = [];
    for (let i = 0; i < parseIn.length; i++) {
      uniques.includes(parseIn[i][parseProperty])
        ? null
        : uniques.push(parseIn[i][parseProperty]);
    }
    return uniques.sort();
  }

  getObjects(name: string): Observable<any> {
    return this.http
      .get("/api/" + name, { headers: Headers, context: withCache() })
      .pipe(retry(2));
  }
}
