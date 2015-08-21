import React from 'react';
import Post from '../components/Post';

export default class PostsList extends React.Component {

  render() {
    let classes = ['posts-list'];
    if(this.props.view === 'grid') {
      classes.push('posts-list--grid-view');
    }
    if(this.props.view === 'list') {
      classes.push('posts-list--list-view');
    }

    return (
      <section className={classes.join(' ')}>
        <Post expanded={true} />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </section>
    )
  }

}
