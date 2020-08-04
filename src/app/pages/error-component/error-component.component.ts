import { Component, OnInit } from '@angular/core';
import { AgendaServiceService } from '../../agenda-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-component',
  templateUrl: './error-component.component.html',
  styleUrls: ['./error-component.component.scss']
})
export class ErrorComponentComponent implements OnInit {

  constructor(private service: AgendaServiceService, private router: Router) { }

  persona: any;

  ngOnInit(): void {
  }

}
