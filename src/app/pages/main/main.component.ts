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
  identifier: string;
  persona: any;

  displayedColumns: string[] = ['id', 'nome', 'cognome', 'numero', 'email', 'azioni'];

  constructor(private service: AgendaServiceService, public router: Router) { }

  ngOnInit() {
    this.service.getTuttiContatti()
      .subscribe((data) => this.persona = data,
        error => this.router.navigate(['/error']));
  }

  getContatti() {
    this.service.getContatti(this.key).subscribe((data) => this.persona = data);
  }

  eliminaContatto() {
    this.service.deleteContatto(this.identifier).subscribe();
    //window.location.reload(); //Reload page
  }

}
