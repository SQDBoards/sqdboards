import { Component, OnInit } from '@angular/core';
import { Deal } from '../deal';
import { GetDealsService } from '../services/get-deals.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../tailwind.css']
})
export class HomeComponent implements OnInit {

  constructor(private gds: GetDealsService) {};

  deals?: Deal[];

  ngOnInit(): void {
    this.gds.getDeals().subscribe((res: any) => {
      this.deals = res;
    });
  }

}
