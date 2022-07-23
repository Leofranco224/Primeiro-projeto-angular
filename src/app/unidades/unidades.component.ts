import { UnidadesService } from './unidades.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css']
})

export class UnidadesComponent implements OnInit {

  unidades: string[] = []
  unidadesService: UnidadesService;

  constructor(_unidadesService: UnidadesService) {
    this.unidadesService = _unidadesService;
   }

  ngOnInit(): void {
    this.unidades = this.unidadesService.getUnidades();

    this.unidadesService.emitirAvaliacao.subscribe(
      avalicao => console.log(avalicao)
    );
  }

}
