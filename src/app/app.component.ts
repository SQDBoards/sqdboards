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

  constructor(public anim: AnimateService,
              public auth: AuthService,
              @Inject(DOCUMENT) public document: Document) {};
  
    initializeLocalStorage() {
      // Cart initialization
      if(localStorage.getItem("cartItems")) {
        this.cart = JSON.parse(localStorage.getItem("cartItems")!);
      } else {
        this.cart = 0;
        localStorage.setItem("cartItems", JSON.stringify(this.cart));
      }

      // Configurator Welcome page initialization
      if(!localStorage.getItem('skipConfiguratorWelcome')) {
        localStorage.setItem('skipConfiguratorWelcome', JSON.parse("false"));
      }
    }

  ngOnInit(): void {
    this.initializeLocalStorage();
  }
    
  ngAfterViewInit(): void {}
}
