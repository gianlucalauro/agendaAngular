import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { RegistraContattoComponent } from './pages/registra-contatto/registra-contatto.component'
import { ErrorComponentComponent } from './pages/error-component/error-component.component'
import { ModificaContattoComponent } from './pages/modifica-contatto/modifica-contatto.component';
import { RegistraAccountComponent } from './pages/Account/registra-account/registra-account.component';
import { LoginComponent } from './pages/Account/login/login.component';
import { LogoutComponent } from './pages/Account/logout/logout.component';
import { CoronavirusComponent } from './coronavirus/coronavirus.component';
import { CheckactivatedComponent } from './pages/Account/checkactivated/checkactivated.component';
import { ActiveaccountComponent } from './pages/Account/activeaccount/activeaccount.component';
import { RecuperoaccountComponent } from './pages/Account/recuperoaccount/recuperoaccount.component';
import { UpdateaccountComponent } from './pages/Account/updateaccount/updateaccount.component';
import { Error404Component } from './pages/error404/error404.component';


const routes: Routes = [
  {path: "", redirectTo:"agenda", pathMatch:"full"},
  {path: "agenda", component: MainComponent},
  {path: "form", component: RegistraContattoComponent},
  {path: "error", component: ErrorComponentComponent},
  {path: "modifica", component: ModificaContattoComponent},
  {path: "registrazione", component: RegistraAccountComponent},
  {path: "login", component: LoginComponent},
  {path: "logout", component: LogoutComponent},
  {path: "coronavirus", component: CoronavirusComponent},
  {path: "checkactivated", component: CheckactivatedComponent},
  {path: "active", component: ActiveaccountComponent},
  {path: "recupero", component: RecuperoaccountComponent},
  {path: "updateaccount", component: UpdateaccountComponent},
  {path: "**", component:  Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
