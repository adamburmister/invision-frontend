import React from 'react';

export default class Post extends React.Component {

  render() {
    return (
      <article className="post post--collapsed post--has-replies post--has-photo post--has-video">
        <img src="/img/avatars/sam.jpg" className="avatar" width="40" height="40" />

        <a href="#samsoffes" rel="author" className="post-author">Sam Soffes</a>

        <div className="post-content">
          How to Get Inspired: the Right Way - Designmodo <a href="http://bit.ly/1IE4uJc">bit.ly/1IE4uJc</a> Good stuff from <a href="#">@designmodo</a>!
        </div>

        <a href="#" className="post-collapsible-toggle">Expand <span class="caret"></span></a>

        <div className="post-utils">
          <a href="#reply">Reply</a>
          <a href="#like">Like</a>
          <time className="post-age" datetime="2011-07-22T13:59:47-04:00">3m</time>
        </div>

        <div className="post-collapsible">
          <div className="post post-reply">
            <div className="links">
              <a href="#reply">Reply</a>
              <a href="#like">Like</a>
              <time className="post-age" datetime="2011-07-22T13:59:47-04:00">1h</time>
            </div>

            <img src="/img/avatars/sam.jpg" className="avatar" width="30" height="30" />
            <a href="#jeffbridges" rel="author">Jeff Bridges</a>
            <div className="post-content">
              Great way to start the week. Thanks for sharing!
            </div>
          </div>{/* .post-reply */}

          <div className="post-reply-form">
            <input type="text" placeholder="Reply&hellip;" />
          </div>
        </div>{/* .post-replies */}
      </article>
    )
  }

}
