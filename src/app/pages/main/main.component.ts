import { Component, OnInit, ViewChild } from '@angular/core';
import { AgendaServiceService } from '../../agenda-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  key: string;
  persona: any;

  displayedColumns: string[] = ['nome', 'cognome', 'numero', 'email'];

  constructor(private service: AgendaServiceService) { }

  ngOnInit() {
    this.service.getTuttiContatti()
      .subscribe((data) => this.persona = data,
        error => console.log("Gestire l'errore per la chiamata back-end"));
  }

  getContatti() {
    this.service.getContatti(this.key).subscribe((data) => this.persona = data);
  }

}
