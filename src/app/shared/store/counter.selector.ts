import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterModel } from './counter.model';

const getcounterstate = createFeatureSelector<CounterModel>('counters');

export const countersel = createSelector(getcounterstate, (state) => {
  return state.counters;
});
export const channelnamesel = createSelector(getcounterstate, (state) => {
  return state.channelName;
});
