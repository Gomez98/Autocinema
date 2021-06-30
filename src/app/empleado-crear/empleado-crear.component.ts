import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from './../empleado.service';
import { Empleado } from './../empleado';

@Component({
  selector: 'app-empleado-crear',
  templateUrl: './empleado-crear.component.html',
  styleUrls: ['./empleado-crear.component.css']
})
export class EmpleadoCrearComponent implements OnInit {

  empleado: Empleado = new Empleado();
  submitted = false;
  constructor(private empleadoService:EmpleadoService ) {

   }

  ngOnInit(): void {
  }

  nuevoEmpleado():void{
    this.submitted = false;
    this.empleado = new Empleado();
  }

  grabar(){
    this.empleadoService.createEmpleado(this.empleado)
    .subscribe(data=>console.log(data), error=>console.log(error));
    this.empleado = new Empleado();
  }
  onSubmit(){
    this.submitted = true;
    this.grabar();
  }
}
