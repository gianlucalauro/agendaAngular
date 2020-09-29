import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AgendaServiceService } from '../../../agenda-service.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperoaccount',
  templateUrl: './recuperoaccount.component.html',
  styleUrls: ['./recuperoaccount.component.scss']
})
export class RecuperoaccountComponent implements OnInit {

  constructor(public router: Router, public http: HttpClient, private service: AgendaServiceService) { }

  ngOnInit(): void {

    if(this.service.account != undefined) {
      this.router.navigate(['/agenda']);
    }

  }

  formEmail = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  })

  recover = {
    email: ''
  };

  recupera() {
    this.http.get(`https://agendaspring.herokuapp.com/activate/recover?email=${this.recover.email}`).subscribe(
      (data) => document.getElementById("ok").innerHTML="Email inviata",
      (error) => document.getElementById("error").innerHTML="Email non inviata"
    );
  }

}
