import React from 'react';
import { Link } from 'react-router';

import PostsList from '../components/PostsList';

import postsMock from '../data/posts.json';

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
            <div className="hero-content text-centered">
              <img src="/img/avatars/jessica.jpg" className="avatar" />
              <h1>Jessica Tuan</h1>
              <p>Designer and Developer living in San Diego, CA</p>
              <p><a rel="author" href="http://jessicaturn.com" target="_blank">jessicaturn.com</a></p>
            </div>
          </div>
        </div>

        <div className="container">
          <nav className="posts-hero-nav text-centered">
            <Link to={`/posts`} className="selected">Jessica's Feed</Link>
            <Link to={`/posts`}>2,542 Followers</Link>
            <Link to={`/posts`}>517 Following</Link>
          </nav>
          
          <PostsList posts={postsMock} view='list' />
        </div>
      </div>
    );
  }
}

export default Profile;
