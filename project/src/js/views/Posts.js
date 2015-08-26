import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import PostsListViewSwitcher from '../components/PostsListViewSwitcher';
import PostsHero from '../components/PostsHero';
import PostsList from '../components/PostsList';

// Mock data
import postsMock from '../data/posts.json';

class Posts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      view: 'list',
      filter: null
    };
  }

  handleViewTypeChange(newViewType) {
    if(this.state.view === newViewType) return;
    this.setState({ view: newViewType });
  }

  handleTabClick(e, newFilter) {
    e.preventDefault();
    this.setState({ filter: newFilter });
  }

  render() {
    return (
      <div>
        <PostsHero />

        <div className="container">
          <nav className="posts-hero-nav">
            <PostsListViewSwitcher onChange={this.handleViewTypeChange.bind(this)} />
            <a href="#/posts" onClick={(e) => this.handleTabClick(e, null)}
                className={this.state.filter === null ? 'selected':''}>All Posts</a>
            <a href="#posts/photos" onClick={(e) => this.handleTabClick(e, 'photo')}
                 className={this.state.filter === 'photo' ? 'selected':''}>Photos</a>
            <a href="#posts/videos" onClick={(e) => this.handleTabClick(e, 'video')}
                 className={this.state.filter === 'video' ? 'selected':''}>Videos</a>
          </nav>

          <PostsList posts={postsMock} view={this.state.view} filter={this.state.filter} />
        </div>
      </div>
    );
  }
}

export default Posts;
