import React from 'react';
import ReactDOM from 'react-dom';

/* From Modernizr */
function whichTransitionEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    }

    for(t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}
const TRANSITION_EVENT = whichTransitionEvent();

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = props;
  }

  componentDidMount() {
    let postCollapsibleEl = ReactDOM.findDOMNode(this.refs.postCollapsible);

    /* Listen for a transition! */
    TRANSITION_EVENT && postCollapsibleEl.addEventListener(TRANSITION_EVENT, (e) => {
      if(e.propertyName === 'max-height') {
        this.props.onExpanded(this);
      }
    });
  }

  handleExpandToggleClick(e) {
    this.props.onBeforeExpand(ReactDOM.findDOMNode(this));
    e.preventDefault();
    this.setState({ isCollapsed: !this.state.isCollapsed });
    // this.props.onExpanded(this); will be triggered by the transition event in componentDidMount
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
      <div className="post-collapsible" ref="postCollapsible">
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
    let data = this.state.data;
    let optionalExpandToggleEl;

    // Collect CSS classes and elements
    let cssClasses = ['post'];
    if(this.state.isCollapsed) {
      cssClasses.push('post--collapsed');
    }
    if(this.state.isLiked) {
      cssClasses.push('post--liked');
    }
    if(data.replies.length) {
      cssClasses.push('post--has-replies');
      optionalExpandToggleEl = (
        <a href="#" className="post-collapsible-toggle"
            onClick={(e) => this.handleExpandToggleClick(e)}>
            {this.state.isCollapsed ? 'Expand' : 'Collapse'} <span className="caret"></span>
        </a>
      );
    }
    if(data.content.photo.thumbnailUrl) {
      cssClasses.push('post--has-photo');
    }
    if(data.content.video.thumbnailUrl) {
      cssClasses.push('post--has-video');
    }

    return (
      <article className={cssClasses.join(' ')}>
        <div className="post-padding">
          {this.renderContent(data)}

          <div className="post-footer">
            {optionalExpandToggleEl}
            {this.renderPostUtils(data.age)}
          </div>
        </div>

        {this.renderReplies(data.replies)}
      </article>
    )
  }

}

Post.propTypes = {
  data: React.PropTypes.object,
  onBeforeExpand: React.PropTypes.func,
  onExpanded: React.PropTypes.func,
  isCollapsed: React.PropTypes.bool
};
Post.defaultProps = {
  data: {},
  isCollapsed: true,
  onBeforeExpand: () => {},
  onExpanded: () => {}
};

export default Post;
