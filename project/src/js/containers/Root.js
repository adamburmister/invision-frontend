import React from 'react';
import PageNav from '../components/PageNav';
import PageFooter from '../components/PageFooter';
import PostsList from '../components/PostsList';

class Root extends React.Component {

  render() {
    return (
      <div>
        <PageNav />
        <PostsList />
        <PageFooter />
      </div>
    );
  }
}

export default Root;
