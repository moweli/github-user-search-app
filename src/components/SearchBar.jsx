import React from "react";
import { SearchBarStyled } from "./styles/SearchBar.styled";
import searchIcon from "../assets/icon-search.svg";

function SearchBar() {
  return (
    <SearchBarStyled>
      <form action="" className="content">
        <img src={searchIcon} alt="search icon" />
        <input type="text" placeholder="Search Github username..." />
        <button>Search</button>
      </form>
    </SearchBarStyled>
  );
}

export default SearchBar;
