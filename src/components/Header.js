import React, { useState } from "react";


const Header = ({ searchLyrics }) => {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    if (artist === "" || song === "") {
      return;
    }
    searchLyrics(artist, song);
  };
  return (
    <div className="Header">
      <h1>Lyrics Card Maker</h1>
      <form onSubmit={handleSearch}>
        <input
          className="inputbar"
          type="text"
          placeholder="Artist name"
          onChange={(e) => {
            setArtist(e.target.value);
          }}
        />
        <input
          className="inputbar"
          type="text"
          placeholder="Song name"
          onChange={(e) => {
            setSong(e.target.value);
          }}
        />
        <input type="submit" value=" &#x1F50D;" className="searchBtn" />
      </form>
    </div>
  );
};

export default Header;
