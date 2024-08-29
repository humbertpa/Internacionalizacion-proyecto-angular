import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarIdiomaComponent } from './cambiar-idioma.component';

describe('CambiarIdiomaComponent', () => {
  let component: CambiarIdiomaComponent;
  let fixture: ComponentFixture<CambiarIdiomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiarIdiomaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambiarIdiomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
