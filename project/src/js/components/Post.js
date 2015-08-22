import React from 'react';

class Post extends React.Component {

  constructor(props) {
    super();
    this.state = props;
  }

  handleExpandToggleClick(e) {
    e.preventDefault();
    this.setState({ isCollapsed: !this.state.isCollapsed });
  }

  handleLikeClick(e) {
    e.preventDefault();
    this.setState({ isLiked: !this.state.isLiked });
  }

  renderContent(data) {
    let thumbnailEl;
    if(data.content.photo && data.content.photo.thumbnailUrl) {
      thumbnailEl = this.renderThumbnail(data.content.photo.thumbnailUrl, false);
    }

    return (
      <div className="post-content">{/* not happy about extra element */}
        <a href={data.author.handle} rel="author" className="post-author">
          <img src={data.author.avatarUrl} className="avatar" width="40" height="40" />
          {data.author.name}
        </a>

        <div className="post-text" dangerouslySetInnerHTML={{ __html: data.content.text }}></div>

        {thumbnailEl}
      </div>
    )
  }

  renderThumbnail(thumbnailUrl, includeVideoPlayButton=false) {
    return (
      <a href="#" className="post-thumbnail">
        <img src={thumbnailUrl} />
      </a>
    );
  }

  renderPostUtils(age='3m') {
    return (
      <div className="post-utils">
        <a href="#reply" onClick={(e) => this.handleExpandToggleClick(e)}>
          <img src="/img/icons/reply.svg" width="13" height="13" />
        </a>
        <a href="#like" onClick={(e) => this.handleLikeClick(e)}>
          <img src="/img/icons/like.svg" width="13" height="13" />
        </a>
        <time className="post-age" datetime="2011-07-22T13:59:47-04:00">{age}</time>
      </div>
    );
  }

  renderReplies(replies) {
    return (
      <div className="post-collapsible">
        {replies.map((reply) => {
          return (
            <div className="post-padding post-reply">{this.renderContent(reply)}</div>
          );
        })}

        <form className="post-reply-form">
          <input type="text" placeholder="Reply&hellip;" />
        </form>
      </div>
    );
  }

  render() {
    // Optional elements to be built up and included in render
    let postContentEl;
    let expandToggleEl;

    // Collect CSS classes and elements
    let cssClasses = ['post'];
    if(this.state.isCollapsed) {
      cssClasses.push('post--collapsed');
    }
    if(this.state.data.replies.length) {
      cssClasses.push('post--has-replies');
      expandToggleEl = (<a href="#" className="post-collapsible-toggle" onClick={(e) => this.handleExpandToggleClick(e)}>Expand <span class="caret"></span></a>);
    }
    if(this.state.thumbnailUrl) {
      if(this.state.isVideo) {
        cssClasses.push('post--has-video');
      } else {
        cssClasses.push('post--has-photo');
      }
    }

    postContentEl = this.renderContent(this.state.data);

    return (
      <article className={cssClasses.join(' ')}>
        <div className="post-padding">
          {postContentEl}

          <div className="post-footer">
            {expandToggleEl}
            {this.renderPostUtils(this.state.data.age)}
          </div>
        </div>

        {this.renderReplies(this.state.data.replies)}
      </article>
    )
  }

}

Post.propTypes = { data: React.PropTypes.object, isCollapsed: React.PropTypes.bool };
Post.defaultProps = { data: {}, isCollapsed: true };

export default Post;
