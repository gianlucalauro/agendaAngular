import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AgendaServiceService {

  details: any;

  constructor(private http: HttpClient, public router: Router) { }

  public getContatti(key) {
    return this.http.get(`http://localhost:8080/agenda/all/?keyword=${key}`);
  }

  public getTuttiContatti() {
    return this.http.get(`http://localhost:8080/agenda/all`);
  }

  public deleteContatto(identifier) {
    return this.http.delete(`http://localhost:8080/agenda/delete/${identifier}`);
  }

  public getAccount(nickname, password) {
    return this.http.get(`http://localhost:8080/account/findaccount/?nickname=${nickname}&password=${password}`);
  }


}
