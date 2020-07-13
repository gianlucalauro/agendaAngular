import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-registra-contatto',
  templateUrl: './registra-contatto.component.html',
  styleUrls: ['./registra-contatto.component.css']
})
export class RegistraContattoComponent implements OnInit {

  url = "http://localhost:8080/agenda/add";
  postData = {
    nome: '',
    cognome: '',
    numero: '',
    email: '',
  };
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  creaContatto() {
    console.log(this.postData);
    return this.http.post(this.url, this.postData).subscribe();
  }

}
