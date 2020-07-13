import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agenda';
  showFiller = false;

  router: Router;
  goToGitHub() {
    this.router.navigate(['https://www.google.it/']);
  }

}
