import React from 'react';
import PostContent from './PostContent';

export default class PostPhotoModalBody extends React.Component {

  render() {
    return (
      <aside className="post-photo-modal-body">
        <div className="post-photo-modal-body--full">
          <img src={this.props.url} width="975" height="582" />
        </div>
        <div className="post-padding">
          <PostContent
              id={this.props.id}
              authorHandle={this.props.authorHandle}
              authorAvatarUrl={this.props.authorAvatarUrl}
              authorName={this.props.authorName}
              text={this.props.text} />
        </div>
        <form className="post-reply-form">
          <input type="text" placeholder="Reply&hellip;" />
        </form>
      </aside>
    )
  }

}

PostPhotoModalBody.propTypes = {
  url: React.PropTypes.string,
  authorHandle: React.PropTypes.string,
  authorAvatarUrl: React.PropTypes.string,
  authorName: React.PropTypes.string,
  text: React.PropTypes.string,
};
