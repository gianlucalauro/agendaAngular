import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AgendaServiceService } from '../../../agenda-service.service'

@Component({
  selector: 'app-registra-account',
  templateUrl: './registra-account.component.html',
  styleUrls: ['./registra-account.component.scss']
})
export class RegistraAccountComponent implements OnInit {

  constructor(private http: HttpClient, public router: Router, public service: AgendaServiceService) { }

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

  registrazioneForm = new FormGroup({
    nickname: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  })

  postData = {
    nickname: '',
    password: '',
    email: ''
  };

  accountreg: any;

  registraAccount() {
    this.http.post(this.service.herokuURLAccount, this.postData).subscribe(
      (response: any) => {
        let Account = {id: response.id, nickname: response.nickname, email: response.email, activated: response.activated}
        window.localStorage.setItem("Account", JSON.stringify(Account))
        window.location.reload()
        this.router.navigate(['/agenda'])
      },
      (error) => document.getElementById("erroreReg").innerHTML = "Errore, nickname o email già preso"
    );
  }

  resetAll() {
    this.postData.nickname = '';
    this.postData.password = '';
    this.postData.email= '';
  }

}
