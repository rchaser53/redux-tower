import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Container, Form, Button, Message } from 'semantic-ui-react';
//import { actions } from '../../../../src/index';
//import { requestLogin } from '../../actions';

import type { UserState } from '../reducers';

type Props = {
  currentUser: string;
}

export class Login extends Component {
  props: Props;

  render() {
    return <div>{this.props.currentUser}</div>;
  }
}

export const mapStateToProps = (state: UserState) => {
  return {
    currentUser: state.user.current
  };
};
export default connect(mapStateToProps)(Login);
