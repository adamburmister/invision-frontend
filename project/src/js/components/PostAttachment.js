import React from 'react';
import Icon from './Icon';

export default class PostAttachment extends React.Component {

  render() {
    return (
      <div className="post-attachment left">
        <label htmlFor="fileUpload" className="post-attachment__add-photo">
          <Icon type="camera" /> Add Photo
        </label>
        <label htmlFor="fileUpload" className="post-attachment__add-video">
          <Icon type="video" />
          Add Video
        </label>
        <input type="file" id="fileUpload" className="post-attachment__file" />
      </div>
    )
  }

}
