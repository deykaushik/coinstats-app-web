import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { CryptocurrenciesTableComponent } from './cryptocurrencies-table/cryptocurrencies-table.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LandingComponent,
    HeroBannerComponent,
    CryptocurrenciesTableComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
