import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ITableCellConfig, ITemplateConfig } from './data-table.model';
import { DataTableService } from './data-table.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  providers: [DataTableService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableComponent implements OnInit {
  @Input() tableCellConfig!: ITableCellConfig[];
  @Input() tableData!: any[];
  @Input() tableCellTemplateConfig?: ITemplateConfig;

  constructor(public dataTable: DataTableService) {}

  ngOnInit(): void {
    this.tableCellTemplateConfig &&
      this.dataTable.setCellTemplateRefs(
        this.tableCellConfig,
        this.tableCellTemplateConfig
      );
    this.dataTable.buildTable(this.tableCellConfig, this.tableData);
  }
}
