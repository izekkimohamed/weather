import React, { useState } from "react";

import { FiSearch } from "react-icons/fi";
import { BiChevronRight } from "react-icons/bi";

import { getData } from "../utils/fetchData";
import { ipUrl } from "../utils/urls";
import { saveToLocalStorage } from "../utils/localstorage";

function SearchForm({
  sidebar,
  setSidebar,
  setCoords,
  setLoading,
  noPosition,
}) {
  const recentSearches = JSON.parse(localStorage.getItem("recentSearches"));
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  function handleOpen() {
    setOpen(!open);
  }
  function handleSearch(e, textInput) {
    e.preventDefault();
    if (textInput === "") return;
    saveToLocalStorage(textInput);
    setLoading(true);
    getData(ipUrl, { q: textInput }).then((data) => {
      setCoords({
        lat: data[0].lat,
        lon: data[0].lon,
      });
      setOpen(false);
      setLoading(false);
    });
    setInput("");
  }

  return (
    <div className={`form_search ${sidebar ? "active" : ""}`}>
      <button className="close" id="close" onClick={() => setSidebar(false)}>
        X
      </button>
      <form className="input" onSubmit={(e) => handleSearch(e, input)}>
        <div>
          <label htmlFor="search">
            <FiSearch className="search-btn" />
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search for location"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button type="submit">Search</button>
      </form>

      {!noPosition && (
        <div className={`options ${open ? "open" : ""}`}>
          <div className="first-option" onClick={handleOpen}>
            recent searches
            <BiChevronRight />
          </div>
          <ul id="recent-seraches">
            {recentSearches &&
              recentSearches.map((item, index) => (
                <li key={index}>
                  <button onClick={(e) => handleSearch(e, item)}>{item}</button>
                </li>
              ))}
          </ul>
        </div>
      )}
      {noPosition && (
        <div className="no-position">
          <h1>No position Found</h1>
          <p> Enable The Position or Search For Location </p>
        </div>
      )}
    </div>
  );
}

export default SearchForm;
