// @flow

import React from 'react';
import { put, call, fork, take, select } from 'redux-saga/effects';
import { createBrowserHistory, saga as router, CANCEL, ERROR, INITIAL } from '../../../src/index';
import { response } from '../api';
//import {
//  SUCCESS_LOGIN, FAILURE_LOGIN, SUCCESS_LOGOUT, FAILURE_LOGOUT,
//  cancelFetchPosts, updateDirty
//} from '../actions';
//import { isLoggedIn, isDirty } from '../reducers';

import Login from '../pages/login';
import Loading from '../pages/loading';
import type { IOEffect } from 'redux-saga/effects';

const routes = {
  *[INITIAL](){
    yield <Loading />;
    yield response();
  },
  '/': [function* () {
    console.log('something to verify user');
  },{
    '/': <Login />
  }]
};

//  [ERROR]: <NotFound />,
//  [CANCEL]: function* cancel() {
//    yield put(cancelFetchPosts());
//  }

export default function* routesSaga(): Generator<IOEffect,void,*> {
  const offset = '/role';
  const history = createBrowserHistory();
  yield fork(router, { history, routes, offset });
}
