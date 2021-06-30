import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { EmpleadoService } from "./../empleado.service";
import { Empleado } from "./../empleado";
@Component({
  selector: 'app-empleado-lista',
  templateUrl: './empleado-lista.component.html',
  styleUrls: ['./empleado-lista.component.css']
})
export class EmpleadoListaComponent implements OnInit {

  empleados: Observable<Empleado[]> = new Observable;

  constructor(private empleadoService: EmpleadoService) {
    
  }
  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.empleados = this.empleadoService.getEmpleadosList();
  }

}
