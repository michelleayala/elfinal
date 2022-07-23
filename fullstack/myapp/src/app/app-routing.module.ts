import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavComponent } from './componentes/nav/nav.component';
import { PanelComponent } from './componentes/panel/panel.component';
import { PoliticasComponent } from './componentes/politicas/politicas.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { TerminosCondicionesComponent } from './componentes/terminos-condiciones/terminos-condiciones.component';
import { TiendaComponent } from './componentes/tienda/tienda.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'terminos', component:TerminosCondicionesComponent},
  {path:'condiciones', component:PoliticasComponent},
  {path:'tienda', component:TiendaComponent},
  {path:'login', component:LoginComponent},
  {path:'nav', component: NavComponent},
  {path:'panel', component: PanelComponent},
  {path:'categorias', component: CategoriasComponent},
  {path:'productos', component: ProductosComponent},
  {path:'usuarios', component: UsuariosComponent},
  {path:'configuracion', component: ConfiguracionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule {}
