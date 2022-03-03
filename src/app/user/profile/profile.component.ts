import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserModel } from './model/userProfile';
import { ProfileManipulationService } from './services/profile-manipulation.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public auth: AuthService,
              private pm: ProfileManipulationService) {};

  // model: UserModel = new UserModel();
  // userId: string | undefined;

  // updateUser(model: UserModel) {
  //   // console.log(JSON.stringify(model));
  //   this.pm.updateAccount(JSON.stringify(model), this.userId);
  // }

  ngOnInit(): void {
    // this.auth.user$.subscribe((data) => {
    //   this.model.name = data?.name;
    //   this.model.email = data?.email;
    //   this.userId = data?.sub;
    // })
  }

}
