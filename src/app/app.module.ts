import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { AgendaServiceService } from '../app/agenda-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav';
import { RegistraContattoComponent } from './pages/registra-contatto/registra-contatto.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ErrorComponentComponent } from './pages/error-component/error-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModificaContattoComponent } from './pages/modifica-contatto/modifica-contatto.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RegistraContattoComponent,
    ErrorComponentComponent,
    ModificaContattoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    RouterModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [AgendaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
