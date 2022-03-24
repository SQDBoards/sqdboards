import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { toCMSContext } from "src/app/misc/toCMS.context";
import {
  AuthResponseError,
  AuthResponseSuccess
} from "src/app/user/auth.model";
import { UserAuthService } from "src/app/user/userauth.service";

@Injectable({
  providedIn: "root"
})
export class SignupService {
  constructor(private http: HttpClient, private auth: UserAuthService) {}

  signUp(user: {
    username: string;
    password: string;
    email: string;
  }): ReplaySubject<AuthResponseError | AuthResponseSuccess> {
    let signupReturn = new ReplaySubject<
      AuthResponseError | AuthResponseSuccess
    >();

    this.http
      .post<AuthResponseSuccess>(
        "/auth/local/register",
        {
          ...user
        },
        {
          context: toCMSContext()
        }
      )
      .subscribe({
        next: res => {
          localStorage.setItem("token", res.jwt);
          this.auth.getUser();
          signupReturn?.next(res);
        },
        error: (err: AuthResponseError) => {
          signupReturn.error(err);
        }
      });

    return signupReturn;
  }
}
