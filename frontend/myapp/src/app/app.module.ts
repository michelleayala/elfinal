import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { TerminosCondicionesComponent } from './componentes/terminos-condiciones/terminos-condiciones.component';
import { PoliticasComponent } from './componentes/politicas/politicas.component';
import { TiendaComponent } from './componentes/tienda/tienda.component';
import { LoginComponent } from './componentes/login/login.component';
import { PanelComponent } from './componentes/panel/panel.component';
import { NavComponent } from './componentes/nav/nav.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { CerrarComponent } from './componentes/cerrar/cerrar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TerminosCondicionesComponent,
    PoliticasComponent,
    TiendaComponent,
    LoginComponent,
    PanelComponent,
    NavComponent,
    ProductosComponent,
    CategoriasComponent,
    UsuariosComponent,
    ConfiguracionComponent,
    CerrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
