import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Container } from 'semantic-ui-react';
import { updateDirty, requestStorePosts } from '../../../actions';
import { actions } from '../../../../../src/index';
import Form from './form';

class AdminPostsEdit extends Component {
  handleSubmit(post) {
    this.props.dispatch(requestStorePosts(post));
    this.props.dispatch(actions.push(`/admin/posts/${post.id}/update`));
  }

  render() {
    const { post: { id, title, body } } = this.props;
    return <Container>
      <Header as='h1'>Edit Post</Header>
      <Form id={id} title={title} body={body} onSubmit={this.handleSubmit.bind(this)} />
    </Container>;
  }
}

function select({ posts: { list, entities } }) {
  const posts = list.map(id => entities[id]);
  return { post: posts[0] };
}

export default connect(select)(AdminPostsEdit);
