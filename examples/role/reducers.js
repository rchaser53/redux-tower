// @flow

import { combineReducers } from 'redux';
//import {
//  UPDATE_DIRTY,
//} from './actions';
import { reducer as router } from '../../src/index';
import type { Action } from './actions';

export type State = {
};

const initial: State = {};

function posts(state = initial, { type, payload }: Action) {
  switch (type) {
  default:
    return { ...state, dirty: payload };
  }
}

export default combineReducers(
  { posts }
);
