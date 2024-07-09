import React, { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';
import Modal from 'react-modal';

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

class Loader extends Component {
  render() {
    return (
      <Modal isOpen={true} style={customStyles}>
        {/* <div className={css.loaderStyles}> */}
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#3f51b5"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />

        {/* </div> */}
      </Modal>
    );
  }
}

export default Loader;
