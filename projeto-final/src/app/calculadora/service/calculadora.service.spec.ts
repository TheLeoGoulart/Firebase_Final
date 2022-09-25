import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve garantir que 6 + 4 = 10',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(6, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(10);
    })
  );

  it('Deve garantir que 1 - 4 = -3',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let subtracao = service.calcular(1, 4, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(-3);
    })
  );

  it('Deve garantir que 10 / 2 = 5',
  inject([CalculadoraService], (service: CalculadoraService) => {
    let divisao = service.calcular(10, 2, CalculadoraService.DIVISAO);
    expect(divisao).toEqual(5);
  })
  );

  it('Deve garantir que 2 * 3 = 6',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let multi = service.calcular(2, 3, CalculadoraService.MULTIPLICACAO);
      expect(multi).toEqual(6);
    })
  );
  
  it('Deve retornar 0 para oprecação inválida',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let nada = service.calcular(1, 4, '%');
      expect(nada).toEqual(0);
    })
  );
  
});
