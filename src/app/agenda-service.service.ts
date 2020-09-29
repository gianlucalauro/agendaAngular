import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AgendaServiceService {

  details: any;

  account = JSON.parse(window.localStorage.getItem("Account"));

  herokuURLContacts = "https://agendaspring.herokuapp.com/contacts/";
  herokuURLAccount = "https://agendaspring.herokuapp.com/account/";

  constructor(private http: HttpClient, public router: Router) { }

  public getContatti(id_account = this.account.id ,key) {
    return this.http.get(`${this.herokuURLContacts}${id_account}?keyword=${key}`);
  }

  public getTuttiContatti(id_account = this.account.id) {
    return this.http.get(`${this.herokuURLContacts}${id_account}`);
  }

  public deleteContatto(identifier) {
    return this.http.delete(`${this.herokuURLContacts}${identifier}`);
  }

  public getAccount(nickname, password) {
    return this.http.get(`${this.herokuURLAccount}?nickname=${nickname}&password=${password}`);
  }

  public test() {
    return this.http.get(`${this.herokuURLContacts}test`);
  }

  public handleError(error: Response | any) {
    if(error.status == 0) {
      this.router.navigate(['error']);
    }
  }

  public checkConnection(response: Response | any) {
    if(response.status == 200) {
      this.router.navigate(['/agenda']);
    }
  }

  public checkIfActivated() {
    if (this.account.activated == false || this.account.activated == "") {
      this.router.navigate(['/checkactivated']);
    }
  }

}
