import { TestBed } from '@angular/core/testing';

import { CursorEffect } from './cursor-effect';

describe('CursorEffect', () => {
  let service: CursorEffect;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursorEffect);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
