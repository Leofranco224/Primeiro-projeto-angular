import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UnidadesService } from '../unidades/unidades.service';
import { AvaliaUnidadeComponent } from './avalia-unidade.component';
import { RecebeAvaliacaoComponent } from '../recebe-avaliacao/recebe-avaliacao.component';

@NgModule({
  declarations: [
    AvaliaUnidadeComponent,
    RecebeAvaliacaoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [AvaliaUnidadeComponent],
  //providers: [UnidadesService]
})
export class AvaliaUnidadeModule { }
