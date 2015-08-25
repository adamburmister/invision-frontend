import React from 'react';

export default class Icon extends React.Component {

  renderHeart() {
    return (
      <svg className={this.props.className} x="0" y="0" width="14" height="14" viewBox="-485.5 514.5 14 14">
        <g>
        	<path fill="none" stroke="#BEC3CC" strokeLinejoin="round" strokeMiterlimit="10"
                d="M-478.5,528c0,0,6.5-4.827,6.5-9.393c0-4.566-5.769-4.922-6.5-0.352c-0.731-4.57-6.5-4.219-6.5,0.701C-485,523.879-478.5,528-478.5,528z"/>
        </g>
      </svg>
    )
  }

  renderCamera() {
    return (
      <svg className={this.props.className} width="18" height="13" viewBox="0 0 18 13">
        <circle fill="none" stroke="#FFF" strokeMiterlimit="10" cx="9" cy="7.05" r="2.73"/>
        <path fill="none" stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
              d="M12.82 2.53H16c.83 0 1.5.83 1.5 1.65V11c0 .83-.67 1.5-1.5 1.5H2c-.82 0-1.5-.67-1.5-1.5V4.18c0-.82.68-1.65 1.5-1.65h3.18M5.18 2.53L7.36.5h3.28l2.18 2.03"/>
      </svg>
    )
  }

  renderVideo() {
    return (
      <svg className={this.props.className} width="18" height="13" viewBox="0 0 18 13">
        <path fill="none" stroke="#FFF" strokeMiterlimit="10"
              d="M12.86 11.3c0 .66-.35 1.2-.77 1.2H1.27c-.42 0-.77-.54-.77-1.2V1.7c0-.66.35-1.2.77-1.2h10.82c.42 0 .77.54.77 1.2v9.6z"/>
        <path fill="none" stroke="#FFF" strokeLinecap="round" strokeMiterlimit="10"
              d="M2.82 4.1h7.72"/>
        <path fill="none" stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
              d="M12.86 8.3l3.92 2.54c.39.25.71-.08.71-.74V2.9c0-.66-.32-.99-.71-.74L12.86 4.7"/>
      </svg>
    )
  }

  renderReply() {
    return (
      <svg x="0" y="0" width="14px" height="14px" viewBox="14 14 14 14">
        <path fill="none" stroke="#BDC2CB" strokeWidth="1" strokeLinejoin="round" strokeMiterlimit="10"
              d="M19.857,18.201c0,0,7.143-1.2,7.143,8.799c-2.285-6-7.143-3.998-7.143-3.998v3.199L15,20.601L19.857,15V18.201z"/>
      </svg>
    )
  }

  render() {
    switch(this.props.type.toLowerCase()) {
      case 'heart': return this.renderHeart();
      case 'camera': return this.renderCamera();
      case 'video': return this.renderVideo();
      case 'reply': return this.renderReply();
    }
    return (<span />);
  }

}

Icon.propTypes = {
  type: React.PropTypes.string,
  className: React.PropTypes.string
};
Icon.defaultProps = {
  type: '',
  className: ''
};
