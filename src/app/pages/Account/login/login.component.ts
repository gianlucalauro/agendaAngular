import { Component, OnInit } from '@angular/core';
import { AgendaServiceService } from '../../../agenda-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public service: AgendaServiceService, public router: Router) { }

  ngOnInit() {

    

  }

  loggedIn = {
    nickname: '',
    password: '',
  };

  login() {
    //chiamata rest per il controllo delle credenziali
    this.service.getAccount(this.loggedIn.nickname, this.loggedIn.password).subscribe(
      (response : any) => {
        if(response != null) {
          this.service.userLoggedin.id = response.id;
          this.service.userLoggedin.nickname = response.nickname;
          this.router.navigate(['/agenda']);
        } else {
          document.getElementById("erroreLogin").innerHTML="Errore, nickname o password errati"
        }
      }
    );

    /* se la risposta è positiva allora l'utente verrà reinderizzato all'agenda con tutti i suoi contatti */
    /* altrimenti verrà avvisato delle credenziali errate */
  }

  resetAll() {
    this.loggedIn.nickname = '';
    this.loggedIn.password = '';
  }

}
