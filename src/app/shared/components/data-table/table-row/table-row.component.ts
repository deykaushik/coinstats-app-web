import { Component, Input, OnInit } from '@angular/core';
import { isTemplateRef } from 'src/app/shared/utils/app.utils';
import { ITableCell, ITableRow } from '../data-table.model';

@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss'],
})
export class TableRowComponent implements OnInit {
  isTemplateRef = isTemplateRef;
  @Input() row!: ITableRow;
  @Input() isSelectable = false;

  constructor() {}

  ngOnInit(): void {}
}
