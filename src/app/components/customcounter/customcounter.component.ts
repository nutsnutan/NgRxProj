import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from 'src/app/shared/store/counter.actions';
import { CounterModel } from 'src/app/shared/store/counter.model';
import {
  channelnamesel,
  countersel,
} from 'src/app/shared/store/counter.selector';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrls: ['./customcounter.component.css'],
})
export class CustomcounterComponent implements OnInit {
  customCounterData!: number;
  counterChannel!: string;
  customAction = 'add';
  //counters = 0;
  constructor(private store: Store<{ counters: CounterModel }>) {}

  ngOnInit(): void {
    this.store.select(channelnamesel).subscribe((data) => {
      console.log('channelName display component', data);
      this.counterChannel = data;
    });
  }

  onCustomIncrement() {
    this.store.dispatch(
      customIncrement({
        value: +this.customCounterData,
        action: this.customAction,
      }),
    );
  }
}
