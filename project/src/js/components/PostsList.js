import React from 'react';
import Post from '../components/Post';

export default class PostsList extends React.Component {

  render() {
    return (
      <section className="posts-list posts-list--list-view">
        <Post />
        <Post />
      </section>
    )
  }

}
