import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AgendaServiceService } from '../../agenda-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifica-contatto',
  templateUrl: './modifica-contatto.component.html',
  styleUrls: ['./modifica-contatto.component.scss']
})
export class ModificaContattoComponent implements OnInit {

  agendaForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    cognome: new FormControl('', Validators.required),
    numero: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    email: new FormControl('', [Validators.required, Validators.email])
  })

  putData = {
    id: this.service.details.id,
    nome: this.service.details.nome,
    cognome: this.service.details.cognome,
    numero: this.service.details.numero,
    email: this.service.details.email,
  };

  constructor(private http: HttpClient, private service: AgendaServiceService, public router: Router) { }

  ngOnInit(): void {
  }

  resetAll() {
    this.putData.nome = '';
    this.putData.cognome = '';
    this.putData.numero = '';
    this.putData.email = '';
  }

  updateContatto() {
    this.http.put(`http://localhost:8080/contacts/`, this.putData).subscribe();
    this.router.navigate(['/agenda']); //redirect to the agenda
  }

}
