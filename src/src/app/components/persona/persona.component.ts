import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Empresas } from 'src/app/models/empresas.models'

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss'],
  providers: [PersonaService]
})
export class PersonaComponent implements OnInit {

  public personaModelGet: Empresas;
  public personaModelPost: Empresas;

  constructor(private sempresasService: PersonaService) {
    this.personaModelPost = new Empresas(
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    )
   }

  ngOnInit(): void {
    this.getEmpresa();
  }

  getEmpresa(){

    this.sempresasService.obtenerEmpresas().subscribe(
      (response) => {
        this.personaModelGet = response.persona;
        console.log(this.personaModelGet)

      }, (error) => {
        console.log(<any> error);
      })
  }

  postPersona(){
    this.sempresasService.agregarEmpresas(this.personaModelPost).subscribe(
      (response)=>{
        console.log(response);
        this.getEmpresa();
        this.personaModelPost.nombre='';
        this.personaModelPost.apellido='';
        this.personaModelPost.email='';
        this.personaModelPost.password='';
        this.personaModelPost.rol='';
        this.personaModelPost.imagen='';
      },(error)=> {
        console.log(<any>error)
      }
    )
  }

}
