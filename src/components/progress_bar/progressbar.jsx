import PropTypes from "prop-types";

function ProgressBar({ progress, color }) {
  const progressBarValueStyle = {
    width: `${progress}%`,
  };

  const colorProgressBar = {
    backgroundColor: `#${color}`,
  };

  const mergedStyles = { ...progressBarValueStyle, ...colorProgressBar };

  return (
    <div className="ProgressBar">
      <div className="ProgressBarValue" style={mergedStyles}></div>
    </div>
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default ProgressBar;
