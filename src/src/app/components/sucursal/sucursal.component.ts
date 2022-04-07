import { Component, OnInit } from '@angular/core';
import { sucursales } from 'src/app/models/sucursales.models';
import { SucursalesService } from 'src/app/services/sucursales.service';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.scss'],
  providers: [SucursalesService]
})
export class SucursalComponent implements OnInit {

  public sucursalModelGet: sucursales;
  public sucursalModelPost: sucursales;

  constructor(private ssucursalesService: SucursalesService) {
    this.sucursalModelPost = new sucursales(
      '',
      '',
      '',
      [{idEmpresa: ''}]
    )
   }

  ngOnInit(): void {
    this.getSucursales();
  }

  getSucursales(){

    this.ssucursalesService.ObtenerSucursal().subscribe(
      (response) => {
        this.sucursalModelGet = response.sucursales;
        console.log(this.sucursalModelGet)
      },(error)=>{
        console.log(<any> error)
      }
    )
  }


  postSucursal(){
    this.ssucursalesService.agregarSucursal(this.sucursalModelPost).subscribe(
      (response)=>{
        console.log(response);
        this.getSucursales();
        this.sucursalModelPost.nombre='';
        this.sucursalModelPost.direccion='';
        this.sucursalModelPost.imagen='';
        this.sucursalModelPost.usuario=[{idEmpresa: ''}];

      },(error)=>{
        console.log(<any> error)
      }
    )
  }

}
