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
  isTrue: boolean = false;

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  changeTheme() {
    this.isTrue = !this.isTrue;
  }

  logOut() {
    //setterò la variabile loggedin a null
    window.location.reload();
  }

}
