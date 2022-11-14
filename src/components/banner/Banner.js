import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { imageData } from "../../data/imageData";
import "./banner.css";

function Banner({ string, handleChange, sendSearch, res }) {
  const [state] = useState({
    images: imageData,
    count: 0,
    resCount: 0,
    show: ""
  });

  const loadedImages = res[0].urls.regular;
  const localImages = state.images[0];
  let resolve;
  if (res.length > 1) {
    resolve = loadedImages;
  } else {
    resolve = localImages;
  }

  return (
    <div className={`banner  `}>
      <div
        className={`banner__slide ${state.show}`}
        style={{
          backgroundImage: "url(" + resolve + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      ></div>
      <div className="banner__filter"></div>
      <form
        action="submit"
        onSubmit={(event) => {
          event.preventDefault();
        }}
        className="banner__form"
      >
        <div className="contain">
          <input
            type="search"
            className="banner__input"
            value={string}
            onChange={handleChange}
            placeholder="Search"
          />
          <button className="banner__input-send" onClick={sendSearch}>
            <FaSearch />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Banner;
