import React from 'react';
import Post from '../components/Post';

export default class PostsList extends React.Component {

  render() {
    return (
      <section className="posts posts--list-view">
        <Post />
        <Post />
      </section>
    )
  }

}
