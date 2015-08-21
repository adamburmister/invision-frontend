import React from 'react';
import PostsListViewSwitcher from 'js/components/PostsListViewSwitcher';

export default class Hero extends React.Component {

  render() {
    return (
      <div className="hero hero--home">
        <div className="container">

          <form className="hero-content" action="#">
            <input type="text" placeholder="What’s on your mind?" />
            <a href="#addphoto" className="hero__new__add-photo">Add Photo</a>
            <a href="#addvideo" className="hero__new__add-video">Add Video</a>
          </form>

          <nav className="hero__nav">
            <a href="#all" className="selected">All Posts</a>
            <a href="#photos">Photos</a>
            <a href="#videos">Videos</a>

            <PostsListViewSwitcher />
          </nav>
        </div>
      </div>
    )
  }

}
