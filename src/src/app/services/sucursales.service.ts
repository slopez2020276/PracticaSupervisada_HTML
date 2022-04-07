import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { sucursales } from '../models/sucursales.models';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {
  public url: string = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-type', 'application/json');

  constructor(public shttp: HttpClient) { }

  ObtenerSucursal(): Observable<any> {
    return this.shttp.get(this.url + '/obtenerSucursal', { headers: this.headersVariable});
  }

  agregarSucursal(sucursalesModel: sucursales): Observable<any> {
  let parametros = JSON.stringify(sucursalesModel)

    return this.shttp.get(this.url + '/agregarSucursal', { headers: this.headersVariable})
  }
}
