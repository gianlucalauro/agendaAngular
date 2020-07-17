import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { AgendaServiceService } from '../../agenda-service.service'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  key: string;
  persona: any;

  displayedColumns: string[] = ['nome', 'cognome', 'numero', 'email', 'azioni'];

  constructor(private service: AgendaServiceService, public router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.service.getTuttiContatti()
      .subscribe((data) => this.persona = data,
        error => this.router.navigate(['/error']));
  }

  getContatti() {
    this.service.getContatti(this.key).subscribe((data) => this.persona = data);
  }

  eliminaContatto(idSelected: any) {
    this.service.deleteContatto(idSelected.id).subscribe();
    window.location.reload(); //Reload page
  }

  passaContatto(person: any) {
    this.service.details = person; 
    this.router.navigate(['/modifica'])
  }

}
