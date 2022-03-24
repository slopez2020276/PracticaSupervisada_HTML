import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent} from './component/dashboard/dashboard.component'
import { RegistrosComponent } from './component/registros/registros.component';
import { LoginComponent} from './component/login/login.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'registros', component: RegistrosComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
