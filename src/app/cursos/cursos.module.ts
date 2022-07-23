import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosComponent } from './cursos.component';
import { CursoInfoComponent } from './curso-info/curso-info.component';
import { CursosRoutingModule } from './cursos.routing.module';

@NgModule({
  imports: [
      CommonModule,
      CursosRoutingModule
  ],
  exports: [],
  declarations: [
    CursosComponent, 
    CursoInfoComponent
],
  providers: [],
})
export class CursosModule { }