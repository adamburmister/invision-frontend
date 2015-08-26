import React from 'react';
import { Link } from 'react-router';

// Components
import Modal from '../components/Modal';
import NewPostModalBody from '../components/NewPostModalBody';

export default class PageNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isModalOpen: false};
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    return (
      <nav className="page-nav">
        <div className="container">
          <Link to="/" className="page-nav__logo">
            <img src="img/icons/logo.svg" width="32" height="32" className="icon" />
            <span className="page-nag__logo__text">
              <b>simply</b>social
            </span>
          </Link>

          <form className="right">
            <button type="button" onClick={this.openModal.bind(this)} className="page-nav__btn-new">
              <img src="img/icons/new-message.svg" width="32" height="32" className="icon" />
            </button>

            <Modal isOpen={this.state.isModalOpen}
                   transitionName="modal-anim"
                   onClose={this.closeModal.bind(this)}>
              <NewPostModalBody />
            </Modal>

            <input type="search" name="q" autofocus className="page-nav__search" />

            <div className="page-nav__account">
              <Link to="profile/jessica" className="avatar">
                <img src="img/avatars/jessica.jpg" width="30" height="30" className="avatar" />
                <span className="caret"></span>
              </Link>
              <ul className="dropdown">
                <li>
                  <Link to="profile/jessica">Profile</Link>
                </li>
                <li>
                  <Link to="profile/jessica/followers">Followers</Link>
                </li>
                <li>
                  <Link to="profile/jessica/following">Following</Link>
                </li>
                <li>
                  <Link to="settings">Settings</Link>
                </li>
              </ul>
            </div>{/* /.account */}
          </form>{/* /.right */}
        </div>{/* /.container */}
      </nav>
    )
  }

}
