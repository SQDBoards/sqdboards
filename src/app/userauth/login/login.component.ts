import { DOCUMENT } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ReplaySubject } from "rxjs";
import { AuthResponseError } from "src/app/user/auth.model";
import { UserAuthService } from "src/app/user/userauth.service";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private auth: UserAuthService,
    @Inject(DOCUMENT) public document: Document,
    public authService: AuthService
  ) {}

  passRevealed: boolean = false;
  loginFailed: ReplaySubject<AuthResponseError> =
    new ReplaySubject<AuthResponseError>();

  loading: boolean = false;

  loginForm: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    passwd: [null, [Validators.required, Validators.minLength(6)]]
  });

  login() {
    this.loading = true;
    let userdata = {
      email: this.loginForm.value.email,
      pass: this.loginForm.value.passwd
    };
    this.auth.login(userdata.email, userdata.pass).subscribe({
      error: (err: AuthResponseError) => {
        this.loading = false;
        this.loginFailed.next(err);
      }
    });
  }

  ngOnInit(): void {}
}
