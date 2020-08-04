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

  ngOnInit() {

    this.service.test()
    .subscribe( 
      data => console.log('nice'),
      error => console.log('bad')
        //this.router.navigate(['/error'])
    );

  }

  registrazioneForm = new FormGroup({
    nickname: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  url = "http://localhost:8080/account/add";
  postData = {
    nickname: '',
    password: '',
  };

  registraAccount() {
    this.http.post(this.url, this.postData).subscribe();
    this.router.navigate(['/agenda']); //redirect to the agenda
  }

  resetAll() {
    this.postData.nickname = '';
    this.postData.password = '';
  }

}
