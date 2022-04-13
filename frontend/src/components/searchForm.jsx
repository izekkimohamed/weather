import React, { useState, useContext } from "react";
import { context } from "../context";

import { FiSearch } from "react-icons/fi";
import { BiChevronRight } from "react-icons/bi";

import { ipUrl } from "../utils/urls";
import { saveToLocalStorage } from "../utils/localstorage";

import { StyledSearchForm } from "../styles/AppStyles";
import axios from "axios";

function SearchForm() {
  const { sidebar, setSidebar, coords, setCoords } = useContext(context);
  const recentSearches = JSON.parse(localStorage.getItem("recentSearches"));
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const show = Object.keys(coords).length === 0 ? true : false;

  function handleOpen() {
    setOpen(!open);
  }
  function handleSearch(e, textInput) {
    e.preventDefault();
    if (textInput === "") return;
    saveToLocalStorage(textInput);
    axios.get(ipUrl, { params: { q: textInput } }).then((data) => {
      setCoords({
        lat: data.data[0].lat,
        lon: data.data[0].lon,
      });
      setOpen(false);
      setSidebar(false);
    });
    setInput("");
  }

  return (
    <StyledSearchForm sidebar={sidebar}>
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

      {!show && (
        <div className={`options ${open ? "open" : ""}`}>
          <div className="first-option" onClick={handleOpen}>
            recent searches
            <BiChevronRight />
          </div>
          <button>
            <ul id="recent-seraches">
              {recentSearches &&
                recentSearches.map((item, index) => (
                  <li key={index}>
                    <span onClick={(e) => handleSearch(e, item)}>{item}</span>
                  </li>
                ))}
            </ul>
          </button>
        </div>
      )}

      {show && (
        <div className="no-position">
          <h1>No position Found</h1>
          <p> Please Enable The Position or Search For Location </p>
        </div>
      )}
    </StyledSearchForm>
  );
}

export default SearchForm;
