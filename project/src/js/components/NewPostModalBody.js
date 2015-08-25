import React from 'react';
import PostAttachment from './PostAttachment';

export default class NewPostModalBody extends React.Component {

  render() {
    return (
      <aside className="new-post-modal-body">
        <h4>Create new message</h4>
        <textarea ref="newPostText" rows="4" className="new-post-modal-body--text"/>
        <button type="button" className="new-post-modal-body--btnpost right">Post</button>
        <PostAttachment />
      </aside>
    )
  }

}
