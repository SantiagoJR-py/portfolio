import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeGenerator } from './shape-generator';

describe('ShapeGenerator', () => {
  let component: ShapeGenerator;
  let fixture: ComponentFixture<ShapeGenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShapeGenerator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShapeGenerator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
