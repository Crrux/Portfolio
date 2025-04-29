import { useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from 'react-i18next';

import Modal from "react-modal";
import Logosvg from "../logosvg/logosvg";

Modal.setAppElement("#root");

function Project({ project, dataLogos }) {
  const { t } = useTranslation();
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={openModal} role="button" aria-label="Open Modal for this project" className="Button_ModalProject">
        <img src={project.imageURL} alt={`Image of ${project.name}`} />
        <div className="Button_ModalProject_Title">
          <p>{t(`projects.${project.name}.title`)}</p>
          <p>{t(`projects.${project.name}.origin`)}</p>
        </div>
        <div className="Button_ModalProject_Hover">
          <i className="fa-solid fa-up-right-from-square"></i>
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
            <h3>{t(`projects.${project.name}.title`)}</h3>
            <p>{t(`projects.${project.name}.origin`)}</p>
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
              {
                project.GithubLink && Array.isArray(project.GithubLink) ?
                  project.GithubLink.map((link, index) => (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={link}                    >
                      <img
                        src={dataLogos.find((logo) => logo.title === "Github").URL}
                        className="Modal_Header_LinksContainer_External_GithubLogo"
                        alt="Github Logo"
                      />
                    </a>
                  ))

                  :
                  ''
              }
              {
                project.GithubLink && typeof project.GithubLink === "string" ?
                  <a
                    href={project.GithubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={project.GithubLink}
                  >
                    <img
                      src={dataLogos.find((logo) => logo.title === "Github").URL}
                      className="Modal_Header_LinksContainer_External_GithubLogo"
                      alt="Github Logo"
                    />
                  </a>
                  :
                  ''
              }
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
            <img
              src={project.imageURL}
              alt="Project screenshot"
              title={project.name}
            ></img>
          </div>
          <div className="Modal_Project_Info">
            <div className="Modal_Project_Info_Description">
              <h4>Description :</h4>
              <p>{t(`projects.${project.name}.description`)}</p>
            </div>

            <div className="Modal_Project_Info_Logos">
              <h4>{t("projects.languages")}</h4>
              <div className="Modal_Project_Info_Logos_Container">
                <Logosvg logos={project.used} />
              </div>
            </div>
          </div>
        </section>
      </Modal>
    </>
  )
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
  dataLogos: PropTypes.array.isRequired,
};

export default Project;
