import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ReplaySubject } from "rxjs";
import { AuthResponseError } from "../auth.model";
import { UserAuthService } from "../userauth.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  constructor(public auth: UserAuthService, private fb: FormBuilder) {}

  saveFailed: ReplaySubject<AuthResponseError> =
  new ReplaySubject<AuthResponseError>();

  customizeGroup: FormGroup = this.fb.group({
    profilePicture: [],
    username: [null, [Validators.required, Validators.minLength(4)]]
  });

  save() {
    console.log(this.customizeGroup.value);
  }

  ngOnInit(): void {
    this.customizeGroup.valueChanges.subscribe({
      next: val => {
        console.log(val);
        if (val.profilePicture) console.log(new FileReader());
      }
    });
  }
}
