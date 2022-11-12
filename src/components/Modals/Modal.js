import React from "react";

const Modal = (props) => {
  const { children, shown, close } = props;
  return shown ? (
    <div
      className='modal-backdrop'
      onClick={() => {
        // close modal when outside of modal is clicked
        close();
      }}>
      <div
        className='modal-content container'
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}>
        <div className='modal-body'>{children}</div>
        <button onClick={close}>Close</button>
      </div>
    </div>
  ) : null;
};

export default Modal;
