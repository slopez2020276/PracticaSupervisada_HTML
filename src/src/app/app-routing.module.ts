import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaComponent } from './components/persona/persona.component';
import { SucursalComponent } from './components/sucursal/sucursal.component';

const routes: Routes = [
  {path: 'Empresas', component: PersonaComponent},
  {path: 'Sucursales', component: SucursalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
