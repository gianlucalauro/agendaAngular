import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { AgendaServiceService } from '../../agenda-service.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registra-contatto',
  templateUrl: './registra-contatto.component.html',
  styleUrls: ['./registra-contatto.component.scss']
})
export class RegistraContattoComponent implements OnInit {
  persona: any;

  url = "https://agendaspring.herokuapp.com/";
  postData = {
    nome: '',
    cognome: '',
    numero: '',
    email: '',
    idAccount: '',
  };

  agendaForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    cognome: new FormControl('', Validators.required),
    numero: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    email: new FormControl('', [Validators.required, Validators.email])
  })
  
  constructor(private http: HttpClient, public router: Router, private service: AgendaServiceService) { }

  ngOnInit() {

    if (this.service.account == undefined) {
      this.router.navigate(['/logout']);
    } else {
      this.postData.idAccount = this.service.account.id;
    }

  }

  creaContatto() {
    this.http.post(this.url, this.postData).subscribe();
    this.router.navigate(['/agenda']);
  }

  resetAll() {
    this.postData.nome = '';
    this.postData.cognome = '';
    this.postData.numero = '';
    this.postData.email = '';
  }

}
