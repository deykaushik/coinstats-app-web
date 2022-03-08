import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';

type ChangeIndicatoryType = 'up' | 'down';

@Component({
  selector: 'app-change-indicator',
  templateUrl: './change-indicator.component.html',
  styleUrls: ['./change-indicator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeIndicatorComponent implements OnInit, OnChanges {
  indicator!: ChangeIndicatoryType;
  parsedChangeVal!: number;

  @Input() changeVal!: number;
  @Input() unitSymbol = '%';

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    const { changeVal } = changes;
    if (coerceNumberProperty(changeVal.currentValue)) {
      this.indicator = this.setChangeIndicator(this.changeVal);
      this.parsedChangeVal =
        this.indicator === 'down' ? this.changeVal * -1 : this.changeVal;
    }
  }

  setChangeIndicator(changeVal: number): ChangeIndicatoryType {
    return changeVal < 0 ? 'down' : 'up';
  }
}
