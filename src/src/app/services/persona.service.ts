import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Empresas } from '../models/empresas.models';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  public url: string = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-type', 'application/json');

  constructor(public shttp: HttpClient) { }

  obtenerEmpresas(): Observable<any> {
    return this.shttp.get(this.url + '/obtener', { headers: this.headersVariable});
  }

  agregarEmpresas(usuarioModel: Empresas): Observable<any> {
    let parametros = JSON.stringify(usuarioModel);

    return this.shttp.post(this.url + '/registrar', parametros, {headers: this.headersVariable});
  }

}
