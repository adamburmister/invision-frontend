import React from 'react';

class Post extends React.Component {

  constructor(props) {
    super();
    this.state = props;
  }

  handleExpandToggleClick() {
    this.setState({ isCollapsed: !this.state.isCollapsed });
  }

  renderThumbnail(includeVideoPlayButton=false) {
    return (
      <a href="#" className="post-thumbnail">
        <img src={this.state.thumbnailUrl} />
      </a>
    );
  }

  renderReplies() {
    return (
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
      </div>
    );
  }

  render() {
    // Optional elements to be built up and included in render
    let thumbnailEl;
    let expandToggleEl;
    let repliesEl;

    // Collect CSS classes and elements
    let cssClasses = ['post'];
    if(this.state.isCollapsed) {
      cssClasses.push('post--collapsed');
    }
    if(this.state.replies && this.state.replies.length) {
      cssClasses.push('post--has-replies');
      expandToggleEl = (<a href="#" className="post-collapsible-toggle" onClick={this.handleExpandToggleClick.bind(this)}>Expand <span class="caret"></span></a>);
      repliesEl = this.renderReplies();
    }
    if(this.state.thumbnailUrl) {
      if(this.state.isVideo) {
        cssClasses.push('post--has-video');
      } else {
        cssClasses.push('post--has-photo');
      }
      thumbnailEl = this.renderThumbnail(this.state.isVideo);
    }

    return (
      <article className={cssClasses.join(' ')}>
        <div className="post-padding">
          <img src="/img/avatars/sam.jpg" className="avatar" width="40" height="40" />

          <a href="#samsoffes" rel="author" className="post-author">Sam Soffes</a>

          <div className="post-content">
            <p>How to Get Inspired: the Right Way - Designmodo <a href="http://bit.ly/1IE4uJc">bit.ly/1IE4uJc</a> Good stuff from <a href="#">@designmodo</a>!</p>
          </div>

          {thumbnailEl}

          <div className="post-footer">
            {expandToggleEl}

            <div className="post-utils">
              <a href="#reply">Reply</a>
              <a href="#like">Like</a>
              <time className="post-age" datetime="2011-07-22T13:59:47-04:00">3m</time>
            </div>
          </div>
        </div>

        {repliesEl}
      </article>
    )
  }

}

Post.propTypes = { data: React.PropTypes.object, isCollapsed: React.PropTypes.bool };
Post.defaultProps = { data: {}, isCollapsed: true };

export default Post;
