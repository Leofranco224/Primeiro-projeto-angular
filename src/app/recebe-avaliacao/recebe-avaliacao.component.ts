import { UnidadesService } from './../unidades/unidades.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recebe-avaliacao',
  templateUrl: './recebe-avaliacao.component.html',
  styleUrls: ['./recebe-avaliacao.component.css']
})
export class RecebeAvaliacaoComponent implements OnInit {

  avaliacao: string | undefined;

  constructor(private unidadesService: UnidadesService) { 
    
  }

  ngOnInit(): void {
    this.unidadesService.emitirAvaliacao.subscribe(
      avalicao => this.avaliacao = avalicao
    );
  }

}
