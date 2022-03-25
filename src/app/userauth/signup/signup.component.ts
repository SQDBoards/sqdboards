import { AfterViewInit, Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import anime from "animejs";
import { ReplaySubject } from "rxjs";
import { AuthResponseError } from "src/app/user/auth.model";
import { AuthService } from "../auth.service";
import { SignupService } from "./signup.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements AfterViewInit {
  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private service_signup: SignupService
  ) {
    this.signupForm.addControl("email", this.email);
  }

  step1?: HTMLElement | null;
  step2?: HTMLElement | null;

  signupFailed: ReplaySubject<AuthResponseError> =
    new ReplaySubject<AuthResponseError>();
  loading: boolean = false;

  email: FormControl = this.fb.control(null, [
    Validators.required,
    Validators.email
  ]);

  signupForm: FormGroup = this.fb.group({
    username: [null, [Validators.required, Validators.minLength(4)]],
    passwd: [null, [Validators.required, Validators.minLength(6)]]
  });

  nextStep() {
    anime({
      targets: this.step1,
      translateX: ["0", `-${this.step1?.clientWidth! + 32}px`],
      autoplay: false
    }).restart();

    anime({
      targets: this.step2,
      translateX: ["0", `-${this.step2?.clientWidth! + 32}px`],
      autoplay: false
    }).restart();
  }

  prevStep() {
    anime({
      targets: this.step1,
      translateX: [`-${this.step1?.clientWidth! + 32}px`, "0"],
      autoplay: false
    }).restart();

    anime({
      targets: this.step2,
      translateX: [`-${this.step2?.clientWidth! + 32}px`, "0"],
      autoplay: false
    }).restart();
  }

  signup() {
    this.loading = true;
    let user = {
      username: this.signupForm.value.username,
      password: this.signupForm.value.passwd,
      email: this.email.value
    };
    this.service_signup.signUp(user).subscribe({
      error: (err: AuthResponseError) => {
        this.loading = false;
        this.signupFailed.next(err);
      }
    });
  }

  ngAfterViewInit() {
    this.step1 = document.getElementById("step-1");
    this.step2 = document.getElementById("step-2");
  }
}
