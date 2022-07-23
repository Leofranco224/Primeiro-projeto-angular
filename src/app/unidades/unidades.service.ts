import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable(
  //providedIn: 'root'
)

export class UnidadesService {

  public emitirAvaliacao = new Subject<string>();

  private Unidades: string[] = ["Santos, Curitiba"];
  private Avaliacoes: string[] = [];
  
  getUnidades() {
    return this.Unidades;
  }

  getAvaliacoes() {
    return this.Avaliacoes;
  }

  avaliaPositivo(avaliacao: string) {
    this.Avaliacoes.push("Positivo");
    this.emitirAvaliacao.next(avaliacao);
  }

  avaliaNegativo(avaliacao: string) {
    this.Avaliacoes.push("Negativo");
    this.emitirAvaliacao.next(avaliacao);
  }
  
}
