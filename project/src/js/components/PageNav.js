import React from 'react';

export default class PageNav extends React.Component {

  render() {
    return (
      <nav className="page-nav">
        <div className="container">
          <a href="/" className="page-nav__logo">simplysocial</a>
          <div className="right">
            <a href="#create-new-post" className="page-nav__new-post">New Post</a>
            <input type="search" name="q" />
            <div className="page-nav__account">
              <a href="#" className="avatar">
                <img src="avatar.png" width="30" height="30" />
                <span className="caret"></span>
              </a>
              <ul className="dropdown">
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
            </div>{/* /.account */}
          </div>{/* /.right */}
        </div>{/* /.container */}
      </nav>
    )
  }

}
