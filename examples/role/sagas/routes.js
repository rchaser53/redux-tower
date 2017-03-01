// @flow

import React from 'react';
import { put, call, fork, take, select } from 'redux-saga/effects';
import { createBrowserHistory, saga as router, CANCEL, ERROR, INITIAL } from '../../../src/index';
//import {
//  SUCCESS_LOGIN, FAILURE_LOGIN, SUCCESS_LOGOUT, FAILURE_LOGOUT,
//  cancelFetchPosts, updateDirty
//} from '../actions';
//import { isLoggedIn, isDirty } from '../reducers';

//import NotFound from '../pages/not-found';

import type { IOEffect } from 'redux-saga/effects';

const routes = {
//  [INITIAL]: <Loading />,
  '/': '/posts',
//  [ERROR]: <NotFound />,
//  [CANCEL]: function* cancel() {
//    yield put(cancelFetchPosts());
//  }
};

export default function* routesSaga(): Generator<IOEffect,void,*> {
  const offset = '/blog';
  const history = createBrowserHistory();
  yield fork(router, { history, routes, offset });
}
