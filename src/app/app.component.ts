import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AnimateService } from './services/animate.service';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './tailwind.css']
})
export class SQDBoardsMain implements AfterViewInit, OnInit {

  cart: number = 0;
  lsCart = localStorage.getItem("cartItems");

  constructor(public anim: AnimateService,
              public auth: AuthService,
              @Inject(DOCUMENT) public document: Document) {};
  
  ngOnInit(): void {
    if(this.lsCart) {
      this.cart = JSON.parse(this.lsCart);
    } else {
      this.cart = 0;
      localStorage.setItem("cartItems", JSON.stringify(this.cart));
    }
  }
    
  ngAfterViewInit(): void {}
}
