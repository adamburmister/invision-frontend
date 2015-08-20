import React from 'react';

export default class PageNav extends React.Component {

  render() {
    return (
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
    )
  }

}
