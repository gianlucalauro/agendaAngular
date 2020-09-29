import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'agenda';
  showFiller = false;
  isTrue: boolean = JSON.parse(window.localStorage.getItem("isTrue"));

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  changeTheme() {
    this.isTrue = !this.isTrue;
    window.localStorage.setItem("isTrue", JSON.stringify(this.isTrue));
  }

  logOut() {
    window.localStorage.removeItem("Account");
    window.location.reload();
  }
  
}
