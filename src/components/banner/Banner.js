import React from "react";
import { FaSearch } from "react-icons/fa";
import "./banner.css";

function Banner({ string, handleChange, sendSearch,res }) {
  return (
    <div className="banner">
      <div className="banner__filter">
      <img src="" alt="" />
        <form
          action="submit"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input
            type="search"
            className="banner__input"
            value={string}
            onChange={handleChange}
          />
          <button className="banner__input-send" onClick={sendSearch}>
            <FaSearch />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Banner;
