import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AnimateService } from './services/animate.service';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class SQDBoardsMain implements OnInit {
  cart: number = 0;
  userPicLoaded = false;

  _openmenu: boolean = false;

  constructor(
    public anim: AnimateService,
    public auth: AuthService,
    @Inject(DOCUMENT) public document: Document
  ) {}

  initializeLocalStorage() {
    // Cart initialization
    if (localStorage.getItem('cartItems')) {
      this.cart = JSON.parse(localStorage.getItem('cartItems')!);
    } else {
      this.cart = 0;
      localStorage.setItem('cartItems', JSON.stringify(this.cart));
    }

    // Configurator Welcome page initialization
    if (!localStorage.getItem('skipConfiguratorWelcome')) {
      localStorage.setItem('skipConfiguratorWelcome', JSON.parse('false'));
    }
  }

  pictureLoaded() {
    this.userPicLoaded = !this.userPicLoaded;
  }

  changeMenuState(): void {
    this._openmenu = !this._openmenu;
    this.document.getElementById('menu')!.style.display = this._openmenu
      ? 'flex'
      : 'none';
    this.document.body.style.overflow = this._openmenu ? 'hidden' : '';
  }

  ngOnInit(): void {
    this.anim.initAnimations();
    this.initializeLocalStorage();
  }
}
