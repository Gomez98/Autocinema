import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoListaComponent } from './empleado-lista/empleado-lista.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { EmpleadoCrearComponent } from './empleado-crear/empleado-crear.component';
import { FormCompraComponent } from './form-compra/form-compra.component';
import { PrincipalComponent } from './principal/principal.component';
import { RepertorioComponent } from './repertorio/repertorio.component';
import { FooterComponent } from './footer/footer.component';
import { DetallePeliculaComponent } from './detalle-pelicula/detalle-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoListaComponent,
    NavHeaderComponent,
    EmpleadoCrearComponent,
    FormCompraComponent,
    PrincipalComponent,
    RepertorioComponent,
    FooterComponent,
    DetallePeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
