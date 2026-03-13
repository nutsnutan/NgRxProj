import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from 'src/app/shared/store/counter.actions';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrls: ['./customcounter.component.css'],
})
export class CustomcounterComponent {
  customCounterData!: number;
  customAction = 'add';
  constructor(private store: Store<{ counter: { counter: number } }>) {}
  onCustomIncrement() {
    this.store.dispatch(
      customIncrement({
        value: +this.customCounterData,
        action: this.customAction,
      }),
    );
  }
}
