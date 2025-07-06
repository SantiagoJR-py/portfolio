import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursorWave } from './cursor-wave';

describe('CursorWave', () => {
  let component: CursorWave;
  let fixture: ComponentFixture<CursorWave>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursorWave]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursorWave);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
