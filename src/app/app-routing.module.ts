import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { RegistraContattoComponent } from './pages/registra-contatto/registra-contatto.component'
import { ErrorComponentComponent } from './pages/error-component/error-component.component'

const routes: Routes = [
  {path: "", redirectTo:"agenda", pathMatch:"full"},
  {path: "agenda", component: MainComponent},
  {path: "form", component: RegistraContattoComponent},
  {path: "error", component: ErrorComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
