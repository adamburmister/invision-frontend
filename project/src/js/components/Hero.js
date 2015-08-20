import React from 'react';

export default class Hero extends React.Component {

  render() {
    return (
      <div className="hero hero--home">
        <div className="container">

          <div className="hero-content">
            <input type="text" placeholder="What's on your mind?" />
            <a href="#addphoto" className="hero__new__add-photo">Add Photo</a>
            <a href="#addvideo" className="hero__new__add-video">Add Video</a>
          </div>

          <nav className="hero__nav">
            <a href="#all" className="selected">All Posts</a>
            <a href="#photos">Photos</a>
            <a href="#videos">Videos</a>

            <div className="right view-type">
              <a href="#view-list">List</a>
              <a href="#view-grid">Grid</a>
            </div>
          </nav>
        </div>
      </div>
    )
  }

}
