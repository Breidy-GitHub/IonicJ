import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HojaDeVidaPage } from './hoja-de-vida.page';

describe('HojaDeVidaPage', () => {
  let component: HojaDeVidaPage;
  let fixture: ComponentFixture<HojaDeVidaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HojaDeVidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
