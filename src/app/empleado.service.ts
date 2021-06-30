import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

 private baseUrl = 'http://localhost:8080/api/v1/Empleados';
 constructor(private http: HttpClient) { }
 getEmpleado(cod: number): Observable<Object> {
 return this.http.get(`${this.baseUrl}/${cod}`);
 }
 createEmpleado(Empleado: Object): Observable<Object> {
 return this.http.post(`${this.baseUrl}`, Empleado);
 }
 updateEmpleado(cod: number, value: any): Observable<Object> {
 return this.http.put(`${this.baseUrl}/${cod}`, value);
 }
 deleteEmpleado(cod: number): Observable<any> {
 return this.http.delete(`${this.baseUrl}/${cod}`, { responseType: 'text' });
 }
 getEmpleadosList(): Observable<any> {
 return this.http.get(`${this.baseUrl}`);
 }
  
}
