import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  ICoinApiRespose,
  ICoinListApiRespose,
  IGlobalAvgPricedCoin,
} from '../models';
import { ParamsType } from './api';
import { ApiBaseService } from './api-base.service';

@Injectable({ providedIn: 'root' })
export class CoinsApiService {
  private coinApi = 'coins';

  constructor(private apiBase: ApiBaseService) {}

  globalAvgPricedCoinList$(
    queryParms?: ParamsType
  ): Observable<IGlobalAvgPricedCoin[]> {
    return this.apiBase
      .getAll<ICoinListApiRespose>(this.coinApi, queryParms)
      .pipe(map((res) => res.coins));
  }

  globalAvgPricedCoin$(
    id: string,
    queryParms: ParamsType
  ): Observable<IGlobalAvgPricedCoin> {
    return this.apiBase
      .get<ICoinApiRespose>(id, this.coinApi, queryParms)
      .pipe(map((res) => res.coin));
  }
}
