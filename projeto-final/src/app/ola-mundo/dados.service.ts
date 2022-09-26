import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DadosService {

  readonly dados;
  
  constructor() { }

  /**
   * Retorna um observable contendo os dados a serem
   * exibidos no gráfico
   * 
   * @return Observable<any>
   */
  obterDados(): Observable<any> {
    return new Observable(observable => {
      observable.next(this.dados);
      observable.complete();
    });
  }
}
