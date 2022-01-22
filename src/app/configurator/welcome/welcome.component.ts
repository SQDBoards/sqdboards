import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css', '../../tailwind.css']
})
export class WelcomeComponent implements OnInit {

  constructor() {};

  dontShowAgain() {
    localStorage.setItem('skipConfiguratorWelcome', 'true');
  }

  ngOnInit(): void {
  }

}
