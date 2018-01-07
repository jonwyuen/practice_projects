import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { store } from '../index';
import { Provider } from 'react-redux';

const modalRoot = document.querySelector(".container")

class NewModal extends Component {
  constructor(props) {
    super(props);
    this.modalTarget = document.createElement('div');
    this.modalTarget.className = 'modal';
  }

  componentDidMount() {
    modalRoot.appendChild(this.modalTarget);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.modalTarget);
  }

  render() {
    return ReactDOM.createPortal(<Provider store={store}>
        <div>{this.props.children}</div>
      </Provider>, this.modalTarget);
  }
}

export default NewModal;
