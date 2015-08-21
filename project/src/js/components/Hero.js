import React from 'react';
import PostsListViewSwitcher from 'js/components/PostsListViewSwitcher';

export default class Hero extends React.Component {

  render() {
    return (
      <div className="hero hero--home">
        <div className="container">

          <form className="hero-content" action="#add">
            <input type="text" placeholder="What’s on your mind?" />
            <a href="#add/photo" className="hero__new__add-photo">Add Photo</a>
            <a href="#add/video" className="hero__new__add-video">Add Video</a>
          </form>

          <nav className="hero__nav">
            <a href="#posts" className="selected">All Posts</a>
            <a href="#posts/photos">Photos</a>
            <a href="#posts/videos">Videos</a>

            <PostsListViewSwitcher />
          </nav>
        </div>
      </div>
    )
  }

}
