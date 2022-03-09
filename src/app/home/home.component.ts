import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { Deal } from "../deal";
import { GetDealsService } from "../services/get-deals.service";
import { NotationService } from "../services/notation.service";

import { ScrollService } from "../scroll.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(
    private gds$: GetDealsService,
    private notation: NotationService,
    public scroll: ScrollService
  ) {}

  deals$?: Observable<Deal[]>;
  contentHasLoaded: boolean = false;
  contentFailedToLoad: boolean = false;

  retrieveDeals() {
    this.gds$.getDeals().subscribe(
      (res: any) => {
        this.deals$ = of(res);
        this.contentHasLoaded = true;
        this.contentFailedToLoad = false;
        this.notation.notate();
      },
      err => {
        this.contentFailedToLoad = true;
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    this.retrieveDeals();
  }
}
