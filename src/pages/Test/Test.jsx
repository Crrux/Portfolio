import { useState } from "react";

import Modal from "react-modal";

Modal.setAppElement("#root");

function Test() {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        portalClassName={"portal_test"}
        overlayClassName={"overlay_test"}
        id={"idmodal"}
      >
        oui
      </Modal>
    </div>
  );
}
export default Test;
