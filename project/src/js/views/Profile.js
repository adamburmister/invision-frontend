import React from 'react';
import { Link } from 'react-router';

import PostsList from '../components/PostsList';

import profileMock from '../data/jessica.json'; // @TODO: Extract to Store

class Profile extends React.Component {

  constructor(props, context) {
    super(props);
    let username = context.router.state.params.username;
    this.state = profileMock;
  }

  render() {
    return (
      <div>
        <div className="hero hero--profile">
          <div className="container">
            <div className="hero-content text-centered">
              <img src={`img/avatars/${this.state.handle}.jpg`} className="avatar" />
              <h1>{this.state.name}</h1>
              <p>{this.state.byline}</p>
              <p><a rel="author" href={this.state.link} target="_blank">{this.state.link.replace('http://','')}</a></p>
            </div>
          </div>
        </div>

        <div className="container">
          <nav className="posts-hero-nav text-centered">
            <Link to={`profile/${this.state.handle}/`} className="selected">Jessica's Feed</Link>
            <Link to={`profile/${this.state.handle}/followers`}>2,542 Followers</Link>
            <Link to={`profile/${this.state.handle}/following`}>517 Following</Link>
          </nav>

          <PostsList posts={this.state.posts} view="list" />
        </div>
      </div>
    );
  }
}
Profile.contextTypes = {
  router: React.PropTypes.func.isRequired
};
export default Profile;
