import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { UserAuthService } from './userauth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(
    public auth: UserAuthService,
    @Inject(DOCUMENT) public document: Document
  ) {}

  ngOnInit(): void {}
}
