import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceSuffix',
})
export class PriceSuffixPipe implements PipeTransform {
  transform(number: string, digits?: number, prefix?: string): any {
    const val = +number;
    if (isNaN(+val)) return null;
    if (val === null) return null;
    if (val === 0) return null;

    let absolute = Math.abs(val);
    const rounder = digits ? Math.pow(10, digits) : Math.pow(10, 1);
    const isNegative = val < 0;
    let key = '';

    const powers = [
      { key: 'Q', value: Math.pow(10, 15) },
      { key: 'T', value: Math.pow(10, 12) },
      { key: 'B', value: Math.pow(10, 9) },
      { key: 'M', value: Math.pow(10, 6) },
      { key: 'K', value: Math.pow(10, 3) },
    ];

    for (let i = 0; i < powers.length; i++) {
      let reduced = absolute / powers[i].value;
      reduced = Math.round(reduced * rounder) / rounder;
      if (reduced >= 1) {
        absolute = reduced;
        key = powers[i].key;
        break;
      }
    }

    return (prefix ? prefix : '') + (isNegative ? '-' : '') + absolute + key;
  }
}
