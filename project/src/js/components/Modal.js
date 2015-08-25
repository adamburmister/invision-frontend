import React from 'react/addons';
import { Link } from 'react-router';

let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if(this.props.isOpen) {
      return (
        <ReactCSSTransitionGroup transitionName={this.props.transitionName}>
          <div className="modal-bg">
            <div className={`modal ${this.props.className}`}>
              {this.props.children}
              <button type="button" className="modal--close" onClick={this.props.onClose}>&times;</button>
            </div>
          </div>
        </ReactCSSTransitionGroup>
      );
    } else {
      return <ReactCSSTransitionGroup transitionName={this.props.transitionName}/>;
    }
  }
}

Modal.propTypes = {
  transitionName: React.PropTypes.string,
  className: React.PropTypes.string,
  onClose: React.PropTypes.func
};

Modal.defaultProps = {
  transitionName: 'modal-anim',
  className: null,
  onClose: ()=>{}
};

export default Modal;
