import { DOCUMENT } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";
import { UserAuthService } from "./user/userauth.service";

@Component({
  selector: "root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class SQDBoardsMain implements OnInit {
  cart: number = 0;

  _openmenu: boolean = false;

  constructor(
    public auth: UserAuthService,
    @Inject(DOCUMENT) public document: Document
  ) {}

  initializeLocalStorage() {
    // Cart initialization
    if (localStorage.getItem("cartItems"))
      this.cart = JSON.parse(localStorage.getItem("cartItems")!);
    else {
      this.cart = 0;
      localStorage.setItem("cartItems", JSON.stringify(this.cart));
    }

    // Configurator Welcome page initialization
    if (!localStorage.getItem("skipConfiguratorWelcome"))
      localStorage.setItem("skipConfiguratorWelcome", JSON.parse("false"));
  }

  toggleById(id: string): void {
    this._openmenu = !this._openmenu;
    this.document.getElementById(id)!.classList.toggle("show");
  }

  ngOnInit(): void {
    this.initializeLocalStorage();
  }
}
