import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-coronavirus',
  templateUrl: './coronavirus.component.html',
  styleUrls: ['./coronavirus.component.scss']
})
export class CoronavirusComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

      this.http.get('https://api.covid19api.com/summary').subscribe(
        data => {
          let coronaDati = JSON.stringify(data);
          this.datiCoronaVirus = JSON.parse(coronaDati);
          console.log(this.datiCoronaVirus);
        }
      );
      
  }

  datiCoronaVirus;

  displayedColumns: string[] = ['NewConfirmed', 'TotalConfirmed', 'NewDeaths', 'TotalDeaths', 'NewRecovered', 'TotalRecovered'];

}
