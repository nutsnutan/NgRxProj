//reducers are like pure functions that take inital state and actions for calculating fincal value
// REDUCERS = PURE FUNCTIONS

import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import {
  customIncrement,
  decrement,
  increment,
  reset,
  rename,
} from './counter.actions';

// REDUCERS <--- INITAL STATE + ACTIONS (CALCULATE = FINAL STATE)
export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counters: state.counters + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counters: state.counters - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counters: 0,
    };
  }),
  on(customIncrement, (state, action) => {
    return {
      ...state,
      counters:
        action.action == 'add'
          ? state.counters + action.value
          : state.counters - action.value,
    };
  }),
  on(rename, (state, action) => {
    return {
      ...state,
      channelName: action.channel,
    };
  }),
);
