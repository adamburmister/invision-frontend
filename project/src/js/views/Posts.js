import React from 'react';
import { Link } from 'react-router';

import PostsListViewSwitcher from '../components/PostsListViewSwitcher';
import PostsHero from '../components/PostsHero';
import PostsList from '../components/PostsList';

// Mock data
import postsMock from '../data/posts.json';

class Posts extends React.Component {

  constructor(props) {
    super(props);
    this.state = { view: 'list' };
  }

  onViewTypeChange(newViewType) {
    if(this.state.view === newViewType) return;

    console.log('PostsList::onViewTypeChange - Switched grid view', this.state.view, 'to', newViewType);
    this.setState({ view: newViewType });
  }

  render() {
    return (
      <div>
        <PostsHero />

        <nav className="posts-hero-nav">
          <Link to={`/posts`} className="selected">All Posts</Link>
          <a href="#posts/photos">Photos</a>
          <a href="#posts/videos">Videos</a>
          <PostsListViewSwitcher onChange={this.onViewTypeChange.bind(this)} />
        </nav>

        <div className="container">
          <PostsList posts={postsMock} view={this.state.view} />
        </div>
      </div>
    );
  }
}

export default Posts;
