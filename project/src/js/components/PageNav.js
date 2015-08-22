import React from 'react';

export default class PageNav extends React.Component {

  render() {
    return (
      <nav className="page-nav">
        <div className="container">
          <a href="/" className="page-nav__logo">
            <img src="/img/icons/logo.svg" width="32" height="32" className="icon" />
            <span className="page-nag__logo__text">
              <b>simply</b>social
            </span>
          </a>

          <form className="right">
            <a href="#create-new-post" className="page-nav__btn-new">
              <img src="/img/icons/new-message.svg" width="32" height="32" className="icon" />
            </a>

            <input type="search" name="q" autofocus className="page-nav__search" />

            <div className="page-nav__account">
              <a href="#" className="avatar">
                <img src="/img/avatars/jessica.jpg" width="30" height="30" className="avatar" />
                <span className="caret"></span>
              </a>
              <ul className="dropdown">
                <li>
                  <a href="#profile">Profile</a>
                </li>
                <li>
                  <a href="#profile/followers">Followers</a>
                </li>
                <li>
                  <a href="#profile/following">Following</a>
                </li>
                <li>
                  <a href="#settings">Settings</a>
                </li>
              </ul>
            </div>{/* /.account */}
          </form>{/* /.right */}
        </div>{/* /.container */}
      </nav>
    )
  }

}
