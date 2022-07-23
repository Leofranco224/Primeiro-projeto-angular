import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecebeAvaliacaoComponent } from './recebe-avaliacao.component';

describe('RecebeAvaliacaoComponent', () => {
  let component: RecebeAvaliacaoComponent;
  let fixture: ComponentFixture<RecebeAvaliacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecebeAvaliacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecebeAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
