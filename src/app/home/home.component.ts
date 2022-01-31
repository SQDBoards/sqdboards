import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Deal } from '../deal';
import { GetDealsService } from '../services/get-deals.service';
import { NotationService } from '../services/notation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../tailwind.css']
})
export class HomeComponent implements OnInit {

  constructor(private gds$: GetDealsService,
              private notation: NotationService) {};

  deals$?: Observable<Deal[]>;
  contentHasLoaded: boolean = false;

  ngOnInit(): void {
    this.gds$.getDeals().subscribe((res: any) => {
      this.deals$ = of(res);
      this.contentHasLoaded = true;
      this.notation.notate();
    }, err => {
      console.error(err);
    });
  }

}
