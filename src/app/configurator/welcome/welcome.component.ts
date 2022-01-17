import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css', '../../tailwind.css']
})
export class WelcomeComponent implements OnInit {

  constructor() {};

  checkboxTriggered(target: any) {
    if(target.checked) {
      localStorage.setItem('skipConfiguratorWelcome', 'true');
    } else if (!target.checked) {
      localStorage.setItem('skipConfiguratorWelcome', 'false');
    }
  }

  ngOnInit(): void {
  }

}
