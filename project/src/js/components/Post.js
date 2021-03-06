import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Icon from './Icon';
import PostContent from './PostContent';

const isIE9 = document.getElementsByTagName('html')[0].className == 'ie9';

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
    this.state = {...props};
  }

  componentDidMount() {
    let postCollapsibleEl = ReactDOM.findDOMNode(this.refs.postCollapsible);

    /* Listen for a transition! */
    TRANSITION_EVENT && postCollapsibleEl.addEventListener(TRANSITION_EVENT, (e) => {
      if(e.propertyName === 'max-height') {
        this.props.onAnimDone(this.state.isCollapsed, ReactDOM.findDOMNode(this));
      }
    });
  }

  handleExpandToggleClick(e) {
    e.preventDefault();

    let el = ReactDOM.findDOMNode(this);
    if(this.state.isCollapsed) {
      this.props.onBeforeExpand(el);
    } else {
      this.props.onBeforeCollapse(el);
    }

    const isCollapsed = !this.state.isCollapsed;

    this.setState({ isCollapsed: isCollapsed });

    // Hackery! IE9 doesn't support transitions, so the event won't trigger, instead
    // let's just do this callback at the end of the callstack
    if(isIE9) {
      setTimeout(() => { this.props.onAnimDone(isCollapsed, ReactDOM.findDOMNode(this)); }, 0);
    }
    // this.props.onAnimDone(this); will be triggered by the transition event in componentDidMount
  }

  handleLikeClick(e) {
    e.preventDefault();
    this.setState({ isLiked: !this.state.isLiked });
    // store.dispatch(likePost(this.data));
  }

  renderContent(data) {
    return (
      <PostContent
          id={data.id}
          thumbnailUrl={data.content.photo.thumbnailUrl}
          fullUrl={data.content.photo.url}
          authorHandle={data.author.handle}
          authorAvatarUrl={data.author.avatarUrl}
          authorName={data.author.name}
          text={data.content.text} />
    )
  }

  renderPostUtils(age='3m') {
    return (
      <div className="post-utils">
        <a href="#reply" onClick={(e) => this.handleExpandToggleClick(e)}>
          <Icon type="reply" />
        </a>
        <a href="#like" onClick={(e) => this.handleLikeClick(e)}>
          <Icon type="heart" className="like" />
        </a>
        <time className="post-age" dateTime="2011-07-22T13:59:47-04:00">{age}</time>
      </div>
    );
  }

  renderReplies(replies) {
    return (
      <div className="post-collapsible" ref="postCollapsible">
        {replies.map((reply) => {
          return (<div className="post-padding post-reply">{this.renderContent(reply)}</div>);
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
      let expandText = this.state.isCollapsed ? (<div>Expand <span className="caret down"></span></div>) :
                                                (<div>Collapse <span className="caret up"></span></div>);
      optionalExpandToggleEl = (
        <a href="#" className="post-collapsible-toggle" onClick={(e) => this.handleExpandToggleClick(e)}>
          {expandText}
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
        <div className="post-inner-wrapper">
          <div className="post-padding">
            {this.renderContent(data)}

            <div className="post-footer">
              {optionalExpandToggleEl}
              {this.renderPostUtils(data.age)}
            </div>
          </div>

          {this.renderReplies(data.replies)}
        </div>
      </article>
    )
  }

}

Post.propTypes = {
  data: React.PropTypes.object,
  onBeforeExpand: React.PropTypes.func,
  onBeforeCollapse: React.PropTypes.func,
  onAnimDone: React.PropTypes.func,
  isCollapsed: React.PropTypes.bool
};

Post.defaultProps = {
  data: {},
  isCollapsed: true,
  onBeforeExpand: () => {},
  onBeforeCollapse: () => {},
  onAnimDone: () => {}
};

export default Post;
