import React from 'react';

export default class Hero extends React.Component {

  render() {
    return (
      <div className="hero hero--home">
        <div className="container">
          <form className="hero-content" action="#add">
            <input type="text" placeholder="What’s on your mind?" />
            <a href="#posts/new/photo" className="hero__new__add-photo">
              <img src="/img/icons/camera.svg" height="13" />
              Add Photo
            </a>
            <a href="#posts/new/video" className="hero__new__add-video">
              <img src="/img/icons/video.svg" height="13" />
              Add Video
            </a>
          </form>
        </div>
      </div>
    )
  }

}
