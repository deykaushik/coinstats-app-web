import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from './components/data-table/data-table.module';
import { ChangeIndicatorModule } from './components/change-indicator/change-indicator.module';
import { PriceSuffixPipe } from './pipes/price-suffix.pipe';

@NgModule({
  declarations: [PriceSuffixPipe],
  imports: [
    CommonModule,
    DataTableModule,
    ChangeIndicatorModule,
    ChangeIndicatorModule,
    ChangeIndicatorModule,
  ],
  exports: [DataTableModule, ChangeIndicatorModule, PriceSuffixPipe],
})
export class SharedModule {}
