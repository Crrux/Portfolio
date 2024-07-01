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
        portalClassName={"Modal_portal_test"}
        overlayClassName={"Modal_overlay_test"}
        id={"modalcontent"}
        style={{
          content: {
            position: "static",
            // top: "40px",
            // left: "40px",
            // right: "40px",
            // bottom: "40px",
            border: "0px solid #ccc",
            background: "blue",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }}
      >
        oui
      </Modal>
    </div>
  );
}
export default Test;
