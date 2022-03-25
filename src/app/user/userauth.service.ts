import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, ReplaySubject } from "rxjs";
import { toCMSContext } from "../misc/toCMS.context";
import { AuthResponseError, AuthResponseSuccess } from "./auth.model";
import { UserModel } from "./user-model";

@Injectable({
  providedIn: "root"
})
export class UserAuthService {
  User$: BehaviorSubject<UserModel> | undefined = new BehaviorSubject<any>(
    null
  );
  isAuth$?: ReplaySubject<boolean> = new ReplaySubject<boolean>();
  jwt: string | null = localStorage.getItem("token");

  constructor(private http: HttpClient) {
    if (!this.jwt) this.isAuth$?.next(false);
    else
      http
        .get<UserModel>("/users/me", {
          headers: {
            Authorization: `Bearer ${this.jwt}`
          },
          context: toCMSContext()
        })
        .subscribe({
          next: user => {
            this.User$?.next(user);
            this.isAuth$?.next(true);
          },
          error: () => {
            this.User$ = undefined;
            this.isAuth$?.next(false);
            localStorage.removeItem("token");
          }
        });
  }

  login(
    id: string,
    pass: string
  ): ReplaySubject<AuthResponseError | AuthResponseSuccess> {
    let loginSucceed: ReplaySubject<AuthResponseError | AuthResponseSuccess> =
      new ReplaySubject<AuthResponseError | AuthResponseSuccess>();
    this.http
      .post<AuthResponseSuccess>(
        "/auth/local",
        {
          identifier: id,
          password: pass
        },
        {
          context: toCMSContext()
        }
      )
      .subscribe({
        next: res => {
          localStorage.setItem("token", res.jwt);
          this.getUser();
          loginSucceed?.next(res);
        },
        error: err => {
          loginSucceed.error(err);
        }
      });
    return loginSucceed;
  }

  getUser(): void {
    this.updateLocalJwt();
    this.http
      .get<UserModel>("/users/me", {
        headers: {
          Authorization: `Bearer ${this.jwt}`
        },
        context: toCMSContext()
      })
      .subscribe({
        next: user => {
          this.User$?.next(user);
          this.isAuth$?.next(true);
        },
        error: () => {
          this.User$ = undefined;
        }
      });
  }

  logout(): void {
    localStorage.removeItem("token");
    window.location.href = "/home";
  }

  updateLocalJwt() {
    this.jwt = localStorage.getItem("token");
  }
}
