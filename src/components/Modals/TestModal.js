import React from "react";

import Modal from "./Modal";

const TestModal = (props) => {
  const { modalShown, setModalShown } = props;
  return (
    <Modal
      shown={modalShown}
      close={() => {
        setModalShown(false);
      }}>
      <h1>Look! I'm inside the modal!</h1>
    </Modal>
  );
};

export default TestModal;
