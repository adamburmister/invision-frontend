import React from 'react';

export default class PostAttachment extends React.Component {

  render() {
    return (
      <div className="post-attachment left">
        <label htmlFor="fileUpload" className="post-attachment__add-photo">
          <svg width="18" height="13" viewBox="0 0 18 13">
            <circle clip-path="url(#b)" fill="none" stroke="#FFF" stroke-miterlimit="10" cx="9" cy="7.05" r="2.73"/>
            <path clip-path="url(#b)" fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M12.82 2.53H16c.83 0 1.5.83 1.5 1.65V11c0 .83-.67 1.5-1.5 1.5H2c-.82 0-1.5-.67-1.5-1.5V4.18c0-.82.68-1.65 1.5-1.65h3.18M5.18 2.53L7.36.5h3.28l2.18 2.03"/>
          </svg>
          Add Photo
        </label>
        <label htmlFor="fileUpload" className="post-attachment__add-video">
          <svg width="18" height="13" viewBox="0 0 18 13">
            <path clip-path="url(#b)" fill="none" stroke="#FFF" stroke-miterlimit="10" d="M12.86 11.3c0 .66-.35 1.2-.77 1.2H1.27c-.42 0-.77-.54-.77-1.2V1.7c0-.66.35-1.2.77-1.2h10.82c.42 0 .77.54.77 1.2v9.6z"/>
            <path clip-path="url(#b)" fill="none" stroke="#FFF" stroke-linecap="round" stroke-miterlimit="10" d="M2.82 4.1h7.72"/>
            <path clip-path="url(#b)" fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M12.86 8.3l3.92 2.54c.39.25.71-.08.71-.74V2.9c0-.66-.32-.99-.71-.74L12.86 4.7"/>
          </svg>
          Add Video
        </label>
        <input type="file" id="fileUpload" className="post-attachment__file" />
      </div>
    )
  }

}
