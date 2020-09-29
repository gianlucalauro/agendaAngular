import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendaServiceService } from 'src/app/agenda-service.service';

@Component({
  selector: 'app-updateaccount',
  templateUrl: './updateaccount.component.html',
  styleUrls: ['./updateaccount.component.scss']
})
export class UpdateaccountComponent implements OnInit {

  constructor(public service: AgendaServiceService, public router: Router, private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.recoverData.id = this.route.snapshot.queryParamMap.get("id");

  }

  updateForm = new FormGroup({
    password: new FormControl('', Validators.required),
    passwordconfirm: new FormControl('', Validators.required)
  })

  recoverData = {
    id: '',
    password: '',
    passwordconfirm: ''
  };

  update() {
    if (this.recoverData.password == this.recoverData.passwordconfirm) {
      this.http.put(`${this.service.herokuURLAccount}`, this.recoverData).subscribe(
        (data) => document.getElementById("modificato").innerHTML = "La password è stata modificata",
        (error) => document.getElementById("errore").innerHTML = "Errore, la password non è stata modificata"
      );
    } else {
      document.getElementById("noMatch").innerHTML = "La password deve coincidere";
    }
  }

}
