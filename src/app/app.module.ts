import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { AcoesComponent } from './acoes/acoes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AuthService } from './auth.service';
import { AcaoService } from './acao.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { MaterialModule } from './material.module';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecuperarSenhaEmailComponent } from './recuperar-senha-email/recuperar-senha-email.component';
import { DialogAcoesComponent } from './dialog-acoes/dialog-acoes.component';
import { DialogAcoesExcluirComponent } from './dialog-acoes-excluir/dialog-acoes-excluir.component';
import { UsuarioService } from './usuario.service';
import { DialogUsuariosExcluirComponent } from './dialog-usuarios-excluir/dialog-usuarios-excluir.component';
import { DialogUsuariosComponent } from './dialog-usuarios/dialog-usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AcoesComponent,
    UsuariosComponent,
    RecuperarSenhaComponent,
    RecuperarSenhaEmailComponent,
    DialogAcoesComponent,
    DialogAcoesExcluirComponent,
    DialogUsuariosComponent,
    DialogUsuariosExcluirComponent
  ], // declarations
  entryComponents: [DialogAcoesComponent, DialogAcoesExcluirComponent, DialogUsuariosComponent, DialogUsuariosExcluirComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    NoopAnimationsModule
  ], // imports
  providers: [AuthService, AuthGuard, AcaoService, UsuarioService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }], // providers
  bootstrap: [AppComponent]
}) // NgModule
export class AppModule { }
