import React from 'react';
import PostAttachment from './PostAttachment';

export default class NewPostModalBody extends React.Component {

  render() {
    return (
      <aside className="new-post-modal-body">
        <h4>Create new message</h4>
        <textarea rows="4" className="new-post-modal-body__text"/>
        <button type="button" className="new-post-modal-body__btnpost right">Post</button>
        <PostAttachment />
      </aside>
    )
  }

}
