import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AnimateService } from './animate.service';
import { Deal } from './deal';
import { GetDealsService } from './get-deals.service';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './tailwind.css']
})
export class SQDBoardsMain implements AfterViewInit, OnInit {

  cart: number = 0;
  lsCart = localStorage.getItem("cartItems");
  deals?: Deal[];

  constructor(public anim: AnimateService,
              private gds: GetDealsService){};
  
  ngOnInit(): void {
    // An exmaple for myself on how to scaffold those link-provided params
    //
    // let product: number;
    // this.route.queryParams.subscribe((params) => {
    //   this.product = params['product'];
    // });
    this.gds.getDeals().subscribe((res: any) => {
      this.deals = res;
    });

    if(this.lsCart) {
      this.cart = JSON.parse(this.lsCart);
    } else {
      this.cart = 0;
      localStorage.setItem("cartItems", JSON.stringify(this.cart));
    }
  }
    
  ngAfterViewInit(): void {
    /* Animations would probably go here */
  }
}
