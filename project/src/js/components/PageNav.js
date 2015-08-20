import React from 'react';

export default class PageNav extends React.Component {

  render() {
    return (
      <nav className="page__top-nav">
        <a href="/" className="logo">simplysocial</a>
        <div className="right">
          <a href="#create-new-post" className="page__top-nav__new">New Post</a>
          <input type="search" name="q" />
          <div className="page__top-nav__account">
            <a href="#" className="avatar">
              <img src="avatar.png" />
              <span className="caret"></span>
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
