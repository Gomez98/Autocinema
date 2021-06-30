import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

    private baseUrl = 'http://localhost:8080/api/v1/Clientes';
    constructor(private http: HttpClient) { }
    getCliente(dni: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${dni}`);
    }
    createCliente(Cliente: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, Cliente);
    }
    updateCliente(dni: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${dni}`, value);
    }
    deleteCliente(dni: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${dni}`, { responseType: 'text' });
    }
    getClientesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
    }
  
}
