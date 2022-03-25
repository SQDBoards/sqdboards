import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  passRevealed: boolean = false;

  constructor(@Inject(DOCUMENT) public document: Document) {}

  revealPass() {
    if (!this.passRevealed) {
      this.document.getElementById("password")?.setAttribute("type", "text");
      this.passRevealed = !this.passRevealed;
    } else {
      this.document
        .getElementById("password")
        ?.setAttribute("type", "password");
      this.passRevealed = !this.passRevealed;
    }
  }
}
