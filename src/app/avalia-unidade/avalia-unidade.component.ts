import { Component, OnInit } from '@angular/core';

import { UnidadesService } from '../unidades/unidades.service';

@Component({
  selector: 'app-avalia-unidade',
  templateUrl: './avalia-unidade.component.html',
  styleUrls: ['./avalia-unidade.component.css'],
  providers: [UnidadesService]
})

export class AvaliaUnidadeComponent implements OnInit {

  public avaliacoes : string[] = []

  public avaliaInput : string = '';

  constructor(private UnidadesService: UnidadesService) { 
  }

  ngOnInit(): void {
    this.avaliacoes = this.UnidadesService.getAvaliacoes();
  }

  onAvaliaPositivo() {
    this.UnidadesService.avaliaPositivo(this.avaliaInput);
  }

  onAvaliaNegativo() {
    this.UnidadesService.avaliaNegativo(this.avaliaInput);
  }

}
