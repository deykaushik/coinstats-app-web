import { TemplateRef } from '@angular/core';

export interface ITemplateConfig {
  [key: string]: TemplateRef<any>;
}

export interface ITableCellConfig {
  className?: string;
  key: string;
  headerLabel: string;
  width?: number;
  trackBy?: string;
  cellTemplate?: TemplateRef<any> | null;
}

export interface ITableCell {
  trackByIndex?: any;
  cellRender?: TemplateRef<any> | null;
  label: string;
  key: string;
  headerLabel?: string; // Set the cell config header label, can be used for mobile mode
  classMap: object;
  value: any;
}

export interface ITableRow {
  trackByIndex?: any;
  colCells: ITableCell[];
  isSelected?: boolean;
  classMap: object;
}
