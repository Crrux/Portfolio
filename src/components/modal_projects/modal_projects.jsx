import { useState } from "react";
import PropTypes from "prop-types";

import Modal from "react-modal";
import Logosvg from "../logosvg/logosvg";

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
      <button
        className="Button_ModalProject"
        onClick={openModal}
        role="button"
        aria-label="Open Modal for this project"
      >
        <div className="Button_ModalProject_Background">
          <img src={project.imageURL} alt={`Image of ${project.name}`}></img>
        </div>
        <div className="Button_ModalProject_Title">
          <p>{project.name}</p>
          {project.origin ? <p>{project.origin}</p> : ""}
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
        portalClassName={"Modal_portal"}
        overlayClassName={"Modal_overlay"}
        className={"Modal_ContentContainer"}
      >
        <header className="Modal_Header">
          <div className="Modal_Header_TitleContainer">
            <h3>{project.name}</h3>
            {project.origin ? <p>{project.origin}</p> : ""}
          </div>

          <div className="Modal_Header_LinksContainer">
            <div className="Modal_Header_LinksContainer_External">
              {project.WebLink ? (
                <a
                  href={project.WebLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-globe Modal_Header_LinksContainer_External_WebLogo"></i>
                </a>
              ) : (
                ""
              )}
              <a
                href={project.GithubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={dataLogos.find((logo) => logo.title === "Github").URL}
                  className="Modal_Header_LinksContainer_External_GithubLogo"
                  alt="Github Logo"
                />
              </a>
            </div>

            <button
              onClick={closeModal}
              className="Modal_Header_LinksContainer_ExitModal"
              role="button"
              aria-label="Exit Modal"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </header>
        <section className="Modal_Project">
          <div className="Modal_Project_ImgContainer">
            <img src={project.imageURL} alt="Project screenshot"></img>
          </div>
          <div className="Modal_Project_Info">
            <div className="Modal_Project_Info_Description">
              <h4>Description :</h4>
              <p>{project.description}</p>
            </div>

            <div className="Modal_Project_Info_Logos">
              <h4>Language / framework used :</h4>
              <div className="Modal_Project_Info_Logos_Container">
                <Logosvg logos={project.used} />
              </div>
            </div>
          </div>
        </section>
      </Modal>
    </>
  );
}

ModalCmpnt.propTypes = {
  project: PropTypes.object.isRequired,
  dataLogos: PropTypes.array.isRequired,
};

export default ModalCmpnt;
