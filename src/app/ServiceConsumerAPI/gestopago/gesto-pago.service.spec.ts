import { TestBed } from '@angular/core/testing';

import { GestoPagoService } from './gesto-pago.service';

describe('GestoPagoService', () => {
  let service: GestoPagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestoPagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
