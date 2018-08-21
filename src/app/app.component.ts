import { Component, ViewEncapsulation } from '@angular/core';

import {Router} from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(private router: Router) {}
  title = 'app';

  currentLang: any = 'PL';
  isActive: any = true;

  setLang(e) {
    this.currentLang = e.target.innerText;
    this.currentLang === 'PL' ? this.isActive = true : this.isActive = false;
  }
}
