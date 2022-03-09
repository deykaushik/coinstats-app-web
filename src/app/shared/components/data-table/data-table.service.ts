import { Injectable } from '@angular/core';
import {
  ITableCell,
  ITableCellConfig,
  ITableRow,
  ITemplateConfig,
} from './data-table.model';

@Injectable()
export class DataTableService {
  tableHeaderRow!: ITableRow;
  tableBodyRows!: ITableRow[];

  setCellTemplateRefs(
    cellConfig: ITableCellConfig[],
    cellTemplateConfig: ITemplateConfig
  ): ITableCellConfig[] {
    const config = [...cellConfig];
    config.forEach((item) => {
      item.cellTemplate = cellTemplateConfig[item.key] || null;
    });
    return config;
  }

  buildTable(tableCellConfig: ITableCellConfig[], tableData: any[]) {
    this.tableHeaderRow = this.mapTableHeader(tableCellConfig);
    this.tableBodyRows = this.mapTableBody(tableCellConfig, tableData);
  }

  private mapTableHeader(tableCellConfig: ITableCellConfig[]): ITableRow {
    const headerRow: ITableRow = {
      classMap: { [`table-header`]: true },
      colCells: [],
    };
    tableCellConfig.forEach((config) => {
      const cell: ITableCell = {
        key: config.key,
        label: config.headerLabel,
        classMap: {
          [`${config.key}`]: true,
          [`${config.className}`]: !!config.className,
        },
        value: config.headerLabel,
      };
      headerRow.colCells.push(cell);
    });
    return headerRow;
  }

  private mapTableBody(tableCellConfig: ITableCellConfig[], tableData: any[]) {
    const tableRows: ITableRow[] = [];
    tableData.forEach((item) => {
      const tableRow: ITableRow = {
        classMap: { [`table-row`]: true },
        colCells: [],
      };
      tableCellConfig.forEach((config) => {
        const cell: ITableCell = {
          key: config.key,
          headerLabel: config.headerLabel,
          label: item[`${config.key}`] || '',
          classMap: {
            [`${config.className}`]: !!config.className,
          },
          value: item,
          cellRender: config.cellTemplate || null,
        };
        tableRow.colCells.push(cell);
      });
      tableRows.push(tableRow);
    });
    return tableRows;
  }
}
