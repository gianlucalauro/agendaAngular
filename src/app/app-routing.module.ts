import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { RegistraContattoComponent } from './pages/registra-contatto/registra-contatto.component'

const routes: Routes = [
  {path: "", redirectTo:"agenda", pathMatch:"full"},
  {path: "agenda", component: MainComponent},
  {path: "form", component: RegistraContattoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
