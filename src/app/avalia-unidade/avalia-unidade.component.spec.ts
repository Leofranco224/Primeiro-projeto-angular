import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliaUnidadeComponent } from './avalia-unidade.component';

describe('AvaliaUnidadeComponent', () => {
  let component: AvaliaUnidadeComponent;
  let fixture: ComponentFixture<AvaliaUnidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliaUnidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliaUnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
