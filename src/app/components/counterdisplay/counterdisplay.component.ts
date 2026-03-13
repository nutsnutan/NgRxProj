import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, StoreConfig } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterModel } from 'src/app/shared/store/counter.model';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.css'],
})
export class CounterdisplayComponent implements OnInit, OnDestroy {
  counterDisplay!: number;
  counterChannel!: string;

  counterDisplayData$!: Observable<CounterModel>;
  counterSubscription!: Subscription;
  constructor(private store: Store<{ counters: CounterModel }>) {}
  //constructor(private store: Store<{ counters: { counters: number } }>) {}

  ngOnInit(): void {
    this.counterSubscription = this.store
      .select('counters')
      .subscribe((data) => {
        this.counterDisplay = data.counters;
        // this.counterChannel = data.channelName;
        console.log('counter display component');
      });
    this.counterDisplayData$ = this.store.select('counters');
  }
  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe(); // prevent memory leaks in subscription
  }
}
