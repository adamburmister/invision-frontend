import React from 'react';

export default class Hero extends React.Component {

  render() {
    return (
      <div class="hero">
        <div class="hero__new">
          <input type="text" placeholder="What's on your mind?" />
          <a href="#addphoto" class="hero__new__add-photo">Add Photo</a>
          <a href="#addvideo" class="hero__new__add-video">Add Video</a>
        </div>

        <nav class="page__hero__main-nav">
          <a href="#all" class="selected">All Posts</a>
          <a href="#photos">Photos</a>
          <a href="#videos">Videos</a>

          <div class="right view-type">
            <a href="#view-list">List</a>
            <a href="#view-grid">Grid</a>
          </div>
        </nav>
      </div>
    )
  }

}
