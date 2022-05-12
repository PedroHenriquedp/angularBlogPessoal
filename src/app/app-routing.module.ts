import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
// NECESSÁRIO CRIAR A LINHA SEGUINTE PARA COMEÇAR NA PAGINA LOGIN E AI DEPOIS IR PARA REGISTER!!!
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'inicio', component: InicioComponent},


  {path:'login',component:LoginComponent},
  {path:'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
