import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing } from './../../../Projeto-Korp/src/app/app.routing';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AgendamentosComponent } from './agendamentos/agendamentos.component';
import { UnidadesService } from './unidades/unidades.service';
import { AvaliaUnidadeModule } from './avalia-unidade/avalia-unidade.module';
import { UnidadesModule } from './unidades/unidades.module';
import { LoginModule } from './login/login.module';
//import { CursosModule } from './cursos/cursos.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AgendamentosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    AvaliaUnidadeModule,
    UnidadesModule,
    HttpClientModule,
    LoginModule,
    routing
  ],
  providers: [UnidadesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
