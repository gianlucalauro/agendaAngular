import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AgendaServiceService {

  details: any;

  account = JSON.parse(localStorage.getItem("Account"));

  constructor(private http: HttpClient, public router: Router) { }

  public getContatti(id_account = this.account.id ,key) {
    return this.http.get(`https://agendaspring.herokuapp.com/${id_account}?keyword=${key}`);
  }

  public getTuttiContatti(id_account = this.account.id) {
    return this.http.get(`https://agendaspring.herokuapp.com/${id_account}`);
  }

  public deleteContatto(identifier) {
    return this.http.delete(`https://agendaspring.herokuapp.com/${identifier}`);
  }

  public getAccount(nickname, password) {
    return this.http.get(`http://localhost:8080/account/?nickname=${nickname}&password=${password}`);
  }

  public test() {
    return this.http.get('https://agendaspring.herokuapp.com/test');
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

}
