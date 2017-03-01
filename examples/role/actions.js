// @flow

import { createAction } from 'redux-actions';
import type { ActionCreator as ActionCreatorBase } from 'redux';

export type ActionType = 'REQUEST_LOGOUT' | 'SUCCESS_LOGOUT' | 'FAILURE_LOGOUT' | 'UPDATE_DIRTY';

export type Action = {
  type: ActionType;
  payload: any;
}

export type _Action<S,T> = {
  type: S;
  payload: T;
}
export type LeafAction<S,T> = _Action<S,T>&Action;

const nyanchu: LeafAction<'REQUEST_LOGOUT', string> = {
  type: 'REQUEST_LOGOUT',
  payload: 'poyo'
}

const abc = (arg: Action) => arg;
abc(nyanchu)

export type ActionCreator = ActionCreatorBase<Action, ActionType>;
//export const cancelFetchPosts: ActionCreator = <Poyo>createAction(CANCEL_FETCH_POSTS);

//export const CANCEL_CREATE_POST: ActionType = 'CANCEL_CREATE_POST';
//export const cancelCreatePost: ActionCreator = createAction(CANCEL_CREATE_POST);
