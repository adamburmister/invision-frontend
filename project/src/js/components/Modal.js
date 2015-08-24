import React from 'react/addons';
import { Link } from 'react-router';

let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class Modal extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.isOpen) {
      return (
        <ReactCSSTransitionGroup transitionName={this.props.transitionName}>
          <div className="modal">
            {this.props.children}
            <button type="button" className="modal--close" onClick={this.props.onClose}>&times;</button>
          </div>
          <div className="modal-bg"></div>
        </ReactCSSTransitionGroup>
      );
    } else {
      return <ReactCSSTransitionGroup transitionName={this.props.transitionName}/>;
    }
  }
}

Modal.propTypes = { transitionName: React.PropTypes.string, onClose: React.PropTypes.func };
Modal.defaultProps = { transitionName: 'modal-anim', onClose: ()=>{} };

export default Modal;
