import React from 'react';
import { Link } from 'react-router';

export default class PostsHero extends React.Component {

  constructor(props) {
    super();
    this.state = props;
  }

  render() {
    return (
      <div className="hero hero--home">
        <div className="container">
          <form className="hero-content" action="#add">
            <input type="text" placeholder="What’s on your mind?" />
            <label className="hero__new__add-photo">
              <img src="/img/icons/camera.svg" height="13" />
              Add Photo
            </label>
            <label className="hero__new__add-video">
              <img src="/img/icons/video.svg" height="13" />
              Add Video
            </label>
          </form>
        </div>
      </div>
    )
  }

}
