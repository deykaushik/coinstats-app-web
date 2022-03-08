import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptocurrenciesTableComponent } from './cryptocurrencies-table.component';

describe('CryptocurrenciesTableComponent', () => {
  let component: CryptocurrenciesTableComponent;
  let fixture: ComponentFixture<CryptocurrenciesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptocurrenciesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptocurrenciesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
