import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanSchneiderComponent } from './danSchneider.component';

describe('DanSchneiderComponent', () => {
  let component: DanSchneiderComponent;
  let fixture: ComponentFixture<DanSchneiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DanSchneiderComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DanSchneiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
