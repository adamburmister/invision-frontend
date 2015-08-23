import React from 'react';
import PageNav from '../components/PageNav';
import Hero from '../components/Hero';
import PostsList from '../components/PostsList';
import PageFooter from '../components/PageFooter';

// Mock data
import postsMock from '../data/posts.json';

class Root extends React.Component {

  render() {
    return (
      <div>
        <header className="page">
          <PageNav />
          <Hero />
        </header>
        <div className="container">
          <PostsList posts={postsMock}/>
        </div>
        <PageFooter />
      </div>
    );
  }
}

export default Root;
