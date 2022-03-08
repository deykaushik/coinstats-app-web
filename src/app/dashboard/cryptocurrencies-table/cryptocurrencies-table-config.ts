import { ITableCellConfig } from 'src/app/shared/components/data-table/data-table.model';

export const CryptoCurrienciesCellConfig: ITableCellConfig[] = [
  { key: 'rank', headerLabel: '#' },
  { key: 'name', headerLabel: 'Name' },
  { key: 'priceChange1h', headerLabel: '1h Change' },
  { key: 'priceChange1d', headerLabel: 'Change(24h)' },
  { key: 'priceChange1w', headerLabel: '7d Change' },
  { key: 'price', headerLabel: 'Price' },
  { key: 'priceBtc', headerLabel: 'Price in BTC' },
  { key: 'marketCap', headerLabel: 'Market Cap' },
  { key: 'volume', headerLabel: 'Volume 24h' },
];
