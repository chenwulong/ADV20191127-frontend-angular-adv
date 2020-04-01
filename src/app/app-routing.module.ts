import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcoesComponent } from './acoes/acoes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { RecuperarSenhaEmailComponent } from './recuperar-senha-email/recuperar-senha-email.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }, // ''
  {
    path: 'acoes',
    component: AcoesComponent,
    canActivate: [AuthGuard]
  }, // acoes
  {
    path: 'usuarios',
    component: UsuariosComponent,
    canActivate: [AuthGuard]
  }, // usuarios
  {
    path: 'login',
    component: LoginComponent
  }, // login
  {
    path: 'recuperar-senha',
    component: RecuperarSenhaComponent
  }, // recuperar-senha
  {
    path: 'email',
    component: RecuperarSenhaEmailComponent
  } // email
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) // NgModule
export class AppRoutingModule { }
