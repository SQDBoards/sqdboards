import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotationService } from 'src/app/services/notation.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, AfterViewInit {

  constructor(private notation: NotationService) {};

  dontShowAgain() {
    localStorage.setItem('skipConfiguratorWelcome', 'true');
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.notation.notate();
  }

}
