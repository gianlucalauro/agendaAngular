import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgendaServiceService } from 'src/app/agenda-service.service';

@Component({
  selector: 'app-activeaccount',
  templateUrl: './activeaccount.component.html',
  styleUrls: ['./activeaccount.component.scss']
})
export class ActiveaccountComponent implements OnInit {

  constructor(public service: AgendaServiceService, public router: Router, private http: HttpClient) { }

  id: string;

  ngOnInit(): void {
  }

}
