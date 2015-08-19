import React from 'react';
// import { Provider } from 'react-redux';
// import { Router, Route } from 'react-router';

class Root extends React.Component {

  render() {
    return (
      <div>
        /* Header navigation */
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
              </div>// .account
            </div>// .right
          </nav>

          /* Hero */
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
          </div>// .hero
        </header>

        /* Posts list */
        <section class="posts posts--list-view">

          <article class="post">
            <div class="links">
              <a href="#reply">Reply</a>
              <a href="#like">Like</a>
              <time class="post-age" datetime="2011-07-22T13:59:47-04:00">3m</time>
            </div>

            <img src="#" class="avatar" />
            <a href="#samsoffes" rel="author">Sam Soffes</a>

            <div class="post-content">
              How to Get Inspired: the Right Way - Designmodo <a href="http://bit.ly/1IE4uJc">bit.ly/1IE4uJc</a> Good stuff from <a href="#">@designmodo</a>!
            </div>

            <div class="post-replies">
              <div class="post post-reply">
                <div class="links">
                  <a href="#reply">Reply</a>
                  <a href="#like">Like</a>
                  <time class="post-age" datetime="2011-07-22T13:59:47-04:00">1h</time>
                </div>

                <img src="#" class="avatar" />
                <a href="#jeffbridges" rel="author">Jeff Bridges</a>
                <div class="post-content">
                  Great way to start the week. Thanks for sharing!
                </div>
              </div>// .post-reply

              <div class="post-reply-form">
                <input type="text" placeholder="Reply&hellip;" />
              </div>
            </div>// .post-replies
          </article>// .post

        </section>

        <footer class="page">
          <hr />
          <nav>
            <a href="#about-us">About Us</a>
            <a href="#support">Support</a>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <span class="copyright">&copy; 2014 simplysocial</span>
          </nav>
        </footer>
      </div>
    );
  }
}

export default Root;
