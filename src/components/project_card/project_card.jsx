import PropTypes from "prop-types";

function ProjectCard({ description, imageURL, components }) {
  console.log(description, imageURL, components);
  return <article></article>;
}

ProjectCard.propTypes = {
  description: PropTypes.string,
  imageURL: PropTypes.string.isRequired,
  components: PropTypes.array.isRequired,
};

export default ProjectCard;
