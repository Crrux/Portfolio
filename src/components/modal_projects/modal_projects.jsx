import { useState } from "react";
import PropTypes from "prop-types";

import Modal from "react-modal";

Modal.setAppElement("#root");

function ModalCmpnt({ project, dataLogos }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <button className="Button_ModalProject" onClick={openModal}>
        <div className="Button_ModalProject_Background">
          <img src={project.imageURL} alt={`Image of ${project.name}`}></img>
        </div>
        <div className="Button_ModalProject_Hover">
          <p>
            <i className="fa-solid fa-up-right-from-square"></i>
          </p>
        </div>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        portalClassName={"Modal_portal_test"}
        overlayClassName={"Modal_overlay_test"}
        id={"modalcontent"}
        style={{
          overlay: { zIndex: "98" },
          content: {
            position: "static",
            border: "0px solid #ccc",
            background: "#2e2e2e",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            height: "80vh",
            padding: "20px",
            width: "70%",
            zIndex: "99",
          },
        }}
      >
        <header className="Modal_Header">
          <h3>{project.name}</h3>
          <button onClick={closeModal} className="button_exit_modal">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </header>

        <img src={project.imageURL}></img>
        <p>{project.description}</p>
        {project.used.map((logoName, index) => {
          const logo = dataLogos.find((l) => l.title === logoName);
          return (
            <img
              key={index}
              className="logo"
              src={logo.URL}
              alt={logo.alt}
              title={logo.title}
            />
          );
        })}
      </Modal>
    </>
  );
}

// <a
//   href={project.lienGithub}
//   target="_blank"
//   key={index}
//   className="Cards_Container"
// >
//   <article>
//     <h3>{project.name}</h3>
//     <div className="Cards_Container_Info">
//       <div className="Cards_Container_Info_Image">
//         <img
//           src={project.imageURL}
//           alt={`Image of ${project.name}`}
//         />
//       </div>
//       <div className="Cards_Container_Info_Description">
//         <p>{project.description}</p>
//         <div className="Cards_Container_Info_Description_imgcontainer">
//           {project.used.map((logoName, index) => {
//             const logo = logos.find((l) => l.title === logoName);
//             return (
//               <img
//                 key={index}
//                 className="logo"
//                 src={logo.URL}
//                 alt={logo.alt}
//                 title={logo.title}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   </article>
// </a>

ModalCmpnt.propTypes = {
  project: PropTypes.object.isRequired,
  dataLogos: PropTypes.array.isRequired,
};

export default ModalCmpnt;
