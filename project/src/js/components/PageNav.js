import React from 'react';

export default class PageNav extends React.Component {

  render() {
    return (
      <header class="page">
        <nav class="page__top-nav">
          <a href="/" class="logo">simplysocial</a>
          <div class="right">
            <a href="#create-new-post" class="page__top-nav__new">New Post</a>
            <input type="search" name="q" />
            <div class="page__top-nav__account">
              <a href="#" class="avatar">
                <img src="avatar.png" />
                <span class="caret"></span>
              </a>
              <ul>
                <li>
                  <a href="#">Profile</a>
                </li>
                <li>
                  <a href="#">Followers</a>
                </li>
                <li>
                  <a href="#">Following</a>
                </li>
                <li>
                  <a href="#">Settings</a>
                </li>
              </ul>
            </div>{/* .account */}
          </div>{/* .right */}
        </nav>

        {/* Hero */}
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
        </div>{/* .hero */}
      </header>
    )
  }

}
