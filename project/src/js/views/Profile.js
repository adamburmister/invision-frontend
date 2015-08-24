import React from 'react';
import { Link } from 'react-router';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="hero hero--profile">
          <div className="container">
            <img src="/img/avatars/jessica.jpg" class="avatar" />
            <h1>Jessica Tuan</h1>
            <h2>Designer and Developer living in San Diego, CA</h2>
            <a rel="author">jessicaturn.com</a>
          </div>
        </div>

        <nav className="posts-hero-nav">
          <Link to={`/posts`}>Jessica's Feed</Link>
          <Link to={`/posts`}>2,542 Followers</Link>
          <Link to={`/posts`}>517 Following</Link>
        </nav>

        <div className="container">
          <h1>Profile</h1>
        </div>
      </div>
    );
  }
}

export default Profile;
