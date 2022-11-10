import React from "react";
import "./card.css";

function Card({ src, link }) {
  return (
    <div className="card">
      <a href={link} target="_blank" rel="noreferrer" className="card__link">
        <img src={src} alt="" className="card__link-img" loading="lazy" />
      </a>
    </div>
  );
}

export default Card;
