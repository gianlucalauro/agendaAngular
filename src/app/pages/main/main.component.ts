import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { AgendaServiceService } from '../../agenda-service.service'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  key: string;
  persona: any;

  displayedColumns: string[] = ['nome', 'cognome', 'numero', 'email', 'azioni'];

  constructor(public service: AgendaServiceService, public router: Router, private http: HttpClient) { }

  ngOnInit() {

    if (this.service.account != undefined) {
      this.service.getTuttiContatti()
      .subscribe((data) => this.persona = data,
        error => this.service.handleError(error));
    } else {
      this.router.navigate(['/logout']);
    }

  }

  getContatti() {
    this.service.getContatti(this.service.account.id ,this.key).subscribe((data) => this.persona = data);
  }

  eliminaContatto(idSelected: any) {
    this.service.deleteContatto(idSelected.id).subscribe();
    window.location.reload();
  }

  passaContatto(person: any) {
    this.service.details = person; 
    this.router.navigate(['/modifica'])
  }

}
