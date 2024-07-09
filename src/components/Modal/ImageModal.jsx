import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import css from './ImageModal.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

class ImageModal extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    tags: PropTypes.string,
    onClose: PropTypes.func.isRequired,
  };

  render() {
    const { image, tags } = this.props;
    return (
      <Modal
        isOpen={true}
        style={customStyles}
        shouldCloseOnOverlayClick={false}
      >
        <img
          src={image}
          alt={tags}
          className={css.ImageModalStyle}
          loading="lazy"
        />
      </Modal>
    );
  }
}

export default ImageModal;
