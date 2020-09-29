import { Component, OnInit } from '@angular/core';
import { AgendaServiceService } from '../../../agenda-service.service'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public service: AgendaServiceService, public router: Router, public http: HttpClient) { }

  test: any;

  ngOnInit() {

    this.service.test().subscribe(
      (data) => this.test = data,
      (error) => this.service.handleError(error)
    );

    if(this.service.account != undefined) {
      this.router.navigate(['/agenda']);
    }

  }

  loggedIn = {
    nickname: '',
    password: '',
  };

  login() {
    //chiamata rest per il controllo delle credenziali
    this.service.getAccount(this.loggedIn.nickname, this.loggedIn.password).subscribe(
      (response: any) => {
        if(response != null) {
          let Account = {id: response.id, nickname: response.nickname, email: response.email, activated: response.activated}
          window.localStorage.setItem("Account", JSON.stringify(Account));
          window.location.reload();
        } else {
          document.getElementById("erroreLogin").innerHTML="Errore, nickname o password errati"
        }
      }
    );

  }

  resetAll() {
    this.loggedIn.nickname = '';
    this.loggedIn.password = '';
  }

}
