import React from "react";
import "./card.css";

function Card({ src, link, profile, person, id, portfolio }) {
  const [open, setOpen] = React.useState({
    expand: "",
    isPC: 0,
    pointer:""
  });
  function expand(event) {
    setOpen({ ...open, expand: "expand", pointer: "auto"});
  }
  if(window.innerWidth >= 1000){
    setOpen({ ...open, pointer: "none"})
  }
  
  return (
    <div className="card">
      <div
        className={`card__profile ${open.expand}`}
        onClick={expand}
      >
      <h4>{person}: </h4>
        <a
          href={profile}
          target="_blank"
          rel="noreferrer"
          className="card__profile-link"
          style={{pointerEvents: open.pointer}}
        >
          <h4>profile</h4>
        </a>
        <a
          href={portfolio}
          className="card__portfolio-link"
          rel="noreferrer"
          target="_blank"
          style={{pointerEvents: open.pointer}}
        >
          <h4>portfolio</h4>
        </a>
      </div>
      <a href={link} target="_blank" rel="noreferrer" className="card__link">
        <img src={src} alt="" className="card__link-img" />
      </a>
    </div>
  );
}

export default Card;
