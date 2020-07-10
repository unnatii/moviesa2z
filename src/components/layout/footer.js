import React from "react";
import "./footer.css";

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-copyright text-center py-3">
        Developed by:
        <a href="https://www.github.com/unnatii"> Unnatii Tibrewal </a>
        <span>
          Using{" "}
          <a href="http://www.omdbapi.com/">
            {" "}
            <span className="fab fa-imdb fa-2x" />
          </a>{" "}
          Api
        </span>
      </div>
    </div>
  );
};

export default footer;
