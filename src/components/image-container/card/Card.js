import React from "react";
import "./card.css";

function Card({ src, link, profile, person, id, portfolio }) {
  let open = React.useRef({
    expand: "",
    isPC: true,
    pointer: "none",
  });
  const [update, setUpdate] = React.useState();
  function expand(event) {
    if (open.current.isPC) {
      setUpdate("");
      open.current = { ...open, expand: "expand", pointer: "auto" };
    }
  }
  React.useEffect(() => {
    if (window.innerWidth >= 1000) {
      open.current = { ...open, pointer: "none", isPC: true };
    } else {
      open.current = { ...open, pointer: "auto", isPC: false };
    }
  }, [update]);

  return (
    <div className="card">
      <div className={`card__profile ${open.current.expand}`} onClick={expand}>
        <h4>{person}: </h4>
        <a
          href={profile}
          target="_blank"
          rel="noreferrer"
          className="card__profile-link"
          style={{ pointerEvents: !open.current.isPC ? "auto" : open.current.pointer }}
        >
          <h4>profile</h4>
        </a>
        <a
          href={portfolio}
          className="card__portfolio-link"
          rel="noreferrer"
          target="_blank"
          style={{ pointerEvents: !open.current.isPC ? "auto" : open.current.pointer }}
        >
          {portfolio !== null && <h4>portfolio</h4>}
        </a>
      </div>
      <a href={link} target="_blank" rel="noreferrer" className="card__link">
        <img src={src} alt="" className="card__link-img" />
      </a>
    </div>
  );
}

export default Card;
