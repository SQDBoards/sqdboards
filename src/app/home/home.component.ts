import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Deal } from '../deal';
import { GetDealsService } from '../services/get-deals.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../tailwind.css']
})
export class HomeComponent implements OnInit {

  constructor(private gds$: GetDealsService) {};

  deals$?: Observable<Deal[]>;
  contentHasLoaded: boolean = false;

  ngOnInit(): void {
    this.gds$.getDeals().subscribe((res: any) => {
      this.contentHasLoaded = true;
      this.deals$ = of(res);
    }, err => {
      console.error(err);
    });
  }

}
