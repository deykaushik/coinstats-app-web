import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { combineLatest, map, of, Subject, takeUntil, tap } from 'rxjs';
import { CoinsApiService } from 'src/app/core/services/coins-api.service';
import { ITemplateConfig } from 'src/app/shared/components/data-table/data-table.model';
import { CryptoCurrienciesCellConfig } from './cryptocurrencies-table-config';

@Component({
  selector: 'app-cryptocurrencies-table',
  templateUrl: './cryptocurrencies-table.component.html',
  styleUrls: ['./cryptocurrencies-table.component.scss'],
})
export class CryptocurrenciesTableComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  destroy$ = new Subject<void>();
  globalAvgPricedCoinList$ = this.coinsService.globalAvgPricedCoinList$();
  cryptoCurrenciesCellConfig$ = of(CryptoCurrienciesCellConfig);
  tableCellTemplateConfig: ITemplateConfig = {};

  @ViewChild('currencyNameTmp') currencyNameTmp!: TemplateRef<any>;
  @ViewChild('changeTemp') changeTemp!: TemplateRef<any>;

  constructor(private coinsService: CoinsApiService) {}

  vm$ = combineLatest([
    this.cryptoCurrenciesCellConfig$,
    this.globalAvgPricedCoinList$,
  ]).pipe(
    takeUntil(this.destroy$),
    map(([tableCellConfig, tableData]) => ({ tableCellConfig, tableData }))
  );

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.tableCellTemplateConfig['name'] = this.currencyNameTmp;
    ['priceChange1h', 'priceChange1d', 'priceChange1w'].forEach((item) => {
      this.tableCellTemplateConfig[item] = this.changeTemp;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
