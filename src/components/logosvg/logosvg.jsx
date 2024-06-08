import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function Logosvg({ logos: elementsToCompare }) {
  const [dataLogos, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/assets/database.json");
        const logosData = await response.json();

        // Trier les éléments par "title" en ordre alphabétique
        logosData.logos.sort((a, b) => a.title.localeCompare(b.title));

        // Effectuer un mappage avec tous les éléments du tableau dans logo
        const logoElements = logosData.logos.map((logo) => {
          if (elementsToCompare.includes(logo.title)) {
            return logo;
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
