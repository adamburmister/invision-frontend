import React from 'react';
import Modal from './Modal';
import PostPhotoModalBody from './PostPhotoModalBody';

export default class PostPhoto extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  handleClickThumbnail(e) {
    this.openModal();
  }

  render() {
    return (
      <div className="post-photo">
        <img className="post-photo__thumbnail" onClick={(e) => this.handleClickThumbnail(e)} src={this.props.thumbnailUrl} />
        <Modal className="modal--photo"
               transitionName="modal-anim"
               isOpen={this.state.isModalOpen}
               onClose={this.closeModal.bind(this)}>
          <PostPhotoModalBody
              url={this.props.fullUrl}
              id={this.props.id}
              authorHandle={this.props.authorHandle}
              authorAvatarUrl={this.props.authorAvatarUrl}
              authorName={this.props.authorName}
              text={this.props.text} />
        </Modal>
      </div>
    )
  }

}

PostPhoto.propTypes = {
  thumbnailUrl: React.PropTypes.string,
  fullUrl: React.PropTypes.string,
  authorHandle: React.PropTypes.string,
  authorAvatarUrl: React.PropTypes.string,
  authorName: React.PropTypes.string,
  text: React.PropTypes.string,
};

PostPhoto.defaultProps = {};
