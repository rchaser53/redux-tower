// @flow

import { combineReducers } from 'redux';
//import {
//  UPDATE_DIRTY,
//} from './actions';
import { reducer as router } from '../../src/index';
import type { Action } from './actions';

export type WholeState = {
  user: UserState
}

export type UserState = {
  current: string;
};

const initialUser: UserState = {
  current: 'normal'
};

function user(state:UserState = initialUser, { type, payload }: Action):UserState {
  switch (type) {
  default:
    return { ...state, dirty: payload };
  }
}

export default combineReducers(
  { user, router }
);
