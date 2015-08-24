import React from 'react';

export default class PageFooter extends React.Component {

  render() {
    return (
      <aside className="new-post-modal-body">
        <h4>Create new message</h4>
        <textarea ref="newPostText" rows="4" className="new-post-modal-body--text"/>

        <div className="upload">
          <label for="fileUpload" className="hero__new__add-photo">
            <img src="/img/icons/camera.svg" height="13" />
            Add Photo
          </label>
          <label for="fileUpload" className="hero__new__add-video">
            <img src="/img/icons/video.svg" height="13" />
            Add Video
          </label>
          <input type="file" id="fileUpload" style={{'display':'none'}} />
        </div>
        <button type="button" className="new-post-modal-body--post right">Post</button>
      </aside>
    )
  }

}
