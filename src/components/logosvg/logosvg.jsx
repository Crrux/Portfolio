import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function Logosvg({ logos: elementsToCompare }) {
  const [dataLogos, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/assets/logosvg.json");
        const logosData = await response.json();

        const logoElements = elementsToCompare.map((element) => {
          if (logosData[element]) {
            return logosData[element];
          }
          return null;
        });

        setData(logoElements);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [elementsToCompare]);

  return (
    <>
      {dataLogos.map((logo, index) => {
        if (logo) {
          return (
            <img
              key={index}
              className="logo"
              src={logo.URL}
              alt={logo.alt}
              title={logo.title}
              width="100"
              height="100"
            />
          );
        }
        return null;
      })}
    </>
  );
}

Logosvg.propTypes = {
  logos: PropTypes.array.isRequired,
};

export default Logosvg;
