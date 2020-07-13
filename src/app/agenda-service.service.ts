import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgendaServiceService {

  constructor(private http: HttpClient) { }

  public getContatti(key) {
    return this.http.get(`http://localhost:8080/agenda/all/?keyword=${key}`);
  }

  public getTuttiContatti() {
    return this.http.get(`http://localhost:8080/agenda/all`);
  }

}
