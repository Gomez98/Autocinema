import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoListaComponent } from './empleado-lista/empleado-lista.component';
import { EmpleadoCrearComponent } from './empleado-crear/empleado-crear.component';
import { FormCompraComponent } from './form-compra/form-compra.component';
import { PrincipalComponent } from './principal/principal.component';
import { RepertorioComponent } from './repertorio/repertorio.component';
import { DetallePeliculaComponent } from './detalle-pelicula/detalle-pelicula.component';

const routes: Routes = [
  { path: '', redirectTo: 'principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'empleado', component: EmpleadoListaComponent },
  { path: 'crear', component: EmpleadoCrearComponent },
  { path: 'compra', component: FormCompraComponent },
  { path: 'repertorio', component: RepertorioComponent },
  { path: 'detalle', component: DetallePeliculaComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
