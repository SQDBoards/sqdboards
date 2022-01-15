import {Component, Inject, OnInit} from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import {DOCUMENT} from "@angular/common";
import { annotate } from 'rough-notation';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css', '../tailwind.css']
})
export class UserComponent implements OnInit {

  constructor(public auth: AuthService,
              @Inject(DOCUMENT) public document: Document) { };

  ngOnInit(): void {
  }

}
