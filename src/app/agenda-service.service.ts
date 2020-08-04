import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AgendaServiceService {

  details: any;

  userLoggedin = {
    id: "",
    nickname: "",
  };

  constructor(private http: HttpClient, public router: Router) { }

  public getContatti(id_contatto = this.userLoggedin.id ,key) {
    return this.http.get(`http://localhost:8080/contacts/${id_contatto}?keyword=${key}`);
  }

  public getTuttiContatti(id_contatto = this.userLoggedin.id) {
    return this.http.get(`http://localhost:8080/contacts/${id_contatto}`);
  }

  public deleteContatto(identifier) {
    return this.http.delete(`http://localhost:8080/contacts/${identifier}`);
  }

  public getAccount(nickname, password) {
    return this.http.get(`http://localhost:8080/account/?nickname=${nickname}&password=${password}`);
  }

  public test() {
    return this.http.get('http://localhost:8080/contacts/test');
  }

}
