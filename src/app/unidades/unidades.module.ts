import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UnidadesService } from '../unidades/unidades.service';
import { UnidadesComponent } from './unidades.component';
import { AvaliaUnidadeModule } from '../avalia-unidade/avalia-unidade.module';

@NgModule({
  declarations: [
    UnidadesComponent
  ],
  imports: [
    CommonModule,
    AvaliaUnidadeModule
  ],
  exports: [UnidadesComponent],
  providers: [UnidadesService]
})
export class UnidadesModule { }
