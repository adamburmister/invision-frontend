import React from 'react';
import { Link } from 'react-router';
import PostAttachment from './PostAttachment';

export default class PostsHero extends React.Component {

  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div className="hero hero--home">
        <div className="container">
          <form className="hero-content hero-content--solid" action="">
            <input type="text" placeholder="What’s on your mind?" />
            <PostAttachment />
          </form>
        </div>
      </div>
    )
  }

}
