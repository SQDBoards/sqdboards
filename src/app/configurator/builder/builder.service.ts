import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { withCache } from "@ngneat/cashew";
import { Observable } from "rxjs";
import { toCMSContext } from "src/app/misc/toCMS.context";

const Headers = new HttpHeaders({ "Content-Type": "application/json" });

@Injectable({
  providedIn: "root"
})
export class BuilderService {
  constructor(private http: HttpClient) {}

  getUniques(parseIn: any[], parseProperty: string): string[] {
    let uniques: string[] = [];
    for (let i = 0; i < parseIn.length; i++) {
      if (parseIn[i].attributes) {
        uniques.includes(parseIn[i].attributes[parseProperty])
          ? null
          : uniques.push(parseIn[i].attributes[parseProperty]);
      } else {
        uniques.includes(parseIn[i][parseProperty])
          ? null
          : uniques.push(parseIn[i][parseProperty]);
      }
    }
    return uniques.sort();
  }

  getObjects(name: string): Observable<any> {
    return this.http.get(name, {
      headers: Headers,
      context: withCache({ context: toCMSContext() })
    });
  }
}
