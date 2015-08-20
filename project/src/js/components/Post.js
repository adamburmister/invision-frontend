import React from 'react';

export default class Post extends React.Component {

  render() {
    return (
      <article class="post">
        <div class="links">
          <a href="#reply">Reply</a>
          <a href="#like">Like</a>
          <time class="post-age" datetime="2011-07-22T13:59:47-04:00">3m</time>
        </div>

        <img src="#" class="avatar" />
        <a href="#samsoffes" rel="author">Sam Soffes</a>

        <div class="post-content">
          How to Get Inspired: the Right Way - Designmodo <a href="http://bit.ly/1IE4uJc">bit.ly/1IE4uJc</a> Good stuff from <a href="#">@designmodo</a>!
        </div>

        <div class="post-replies">
          <div class="post post-reply">
            <div class="links">
              <a href="#reply">Reply</a>
              <a href="#like">Like</a>
              <time class="post-age" datetime="2011-07-22T13:59:47-04:00">1h</time>
            </div>

            <img src="#" class="avatar" />
            <a href="#jeffbridges" rel="author">Jeff Bridges</a>
            <div class="post-content">
              Great way to start the week. Thanks for sharing!
            </div>
          </div>{/* .post-reply */}

          <div class="post-reply-form">
            <input type="text" placeholder="Reply&hellip;" />
          </div>
        </div>{/* .post-replies */}
      </article>
    )
  }

}
