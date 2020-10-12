import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgendaServiceService } from '../../../agenda-service.service'

@Component({
  selector: 'app-checkactivated',
  templateUrl: './checkactivated.component.html',
  styleUrls: ['./checkactivated.component.scss']
})
export class CheckactivatedComponent implements OnInit {

  constructor(public service: AgendaServiceService, public router: Router, private http: HttpClient) { }

  ngOnInit(): void {

    if (this.service.account.activated == true) {
      this.router.navigate(['/agenda']);
    } else {
      this.http.get(`https://agendaspring.herokuapp.com/activate?email=${this.service.account.email}&id=${this.service.account.id}`).subscribe();
      window.localStorage.removeItem("Account");
      window.location.reload();
    }

  }

}
