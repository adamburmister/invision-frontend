import React from 'react';
import { Link } from 'react-router';
import PostPhoto from './PostPhoto';

export default class PostContent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let thumbnailEl;
    if(this.props.thumbnailUrl) {
      thumbnailEl = (<PostPhoto
        thumbnailUrl={this.props.thumbnailUrl}
        fullUrl={this.props.fullUrl}
        authorHandle={this.props.authorHandle}
        authorAvatarUrl={this.props.authorAvatarUrl}
        authorName={this.props.authorName}
        text={this.props.text} />);
    }

    return (
      <div className="post-content">
        <Link to={`/profile/${this.props.authorHandle}`} rel="author" className="post-author">
          <img src={this.props.authorAvatarUrl} className="avatar" width="40" height="40" />
          {this.props.authorName}
        </Link>

        <div className="post-text" dangerouslySetInnerHTML={{ __html: this.props.text }}></div>

        {thumbnailEl}
      </div>
    )
  }
}

PostContent.propTypes = {
  id: React.PropTypes.string,
  thumbnailUrl: React.PropTypes.string,
  fullUrl: React.PropTypes.string,
  authorHandle: React.PropTypes.string,
  authorAvatarUrl: React.PropTypes.string,
  authorName: React.PropTypes.string,
  text: React.PropTypes.string,
};

PostContent.defaultProps = {
  id: null,
  thumbnailUrl: null,
  fullUrl: null,
  authorHandle: null,
  authorAvatarUrl: null,
  authorName: null,
  text: null
};
