import { Component, OnInit } from '@angular/core';
import { AgendaServiceService } from '../../../agenda-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: AgendaServiceService) { }

  ngOnInit(): void {
  }

  loggedIn = {
    nickname: '',
    password: '',
  };

  login() {
    //chiamata rest per il controllo delle credenziali
    this.service.getAccount(this.loggedIn.nickname, this.loggedIn.password).subscribe(
      (response : any) => {
        if(response == null) {
          //window.location.reload();
          //document.getElementById("name").innerHTML="This is <u>my test</u> sample"
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
