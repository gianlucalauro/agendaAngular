import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { AgendaServiceService } from '../../agenda-service.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registra-contatto',
  templateUrl: './registra-contatto.component.html',
  styleUrls: ['./registra-contatto.component.css']
})
export class RegistraContattoComponent implements OnInit {
  persona: any;

  url = "http://localhost:8080/agenda/add";
  postData = {
    nome: '',
    cognome: '',
    numero: '',
    email: '',
  };

  agendaForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    cognome: new FormControl('', Validators.required),
    numero: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    email: new FormControl('', [Validators.required, Validators.email])
  })
  
  constructor(private http: HttpClient, public router: Router, private service: AgendaServiceService) { }

  ngOnInit() {
    this.service.getTuttiContatti() //control if the back-end service is off
      .subscribe((data) => this.persona = data,
        error => this.router.navigate(['/error']));
  }

  creaContatto() {
    this.http.post(this.url, this.postData).subscribe();
    this.router.navigate(['/agenda']); //redirect to the agenda
  }

  resetAll() {
    this.postData.nome = '';
    this.postData.cognome = '';
    this.postData.numero = '';
    this.postData.email = '';
  }

}
