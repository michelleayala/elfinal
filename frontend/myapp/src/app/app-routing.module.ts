import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavComponent } from './componentes/nav/nav.component';
import { PoliticasComponent } from './componentes/politicas/politicas.component';
import { TerminosCondicionesComponent } from './componentes/terminos-condiciones/terminos-condiciones.component';
import { TiendaComponent } from './componentes/tienda/tienda.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'terminos', component:TerminosCondicionesComponent},
  {path:'condiciones', component:PoliticasComponent},
  {path:'tienda', component:TiendaComponent},
  {path:'login', component:LoginComponent},
  {path:'nav', component: NavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
