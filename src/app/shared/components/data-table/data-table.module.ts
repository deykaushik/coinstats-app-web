import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
import { TableRowComponent } from './table-row/table-row.component';

@NgModule({
  declarations: [DataTableComponent, TableRowComponent],
  imports: [CommonModule],
  exports: [DataTableComponent],
})
export class DataTableModule {}
