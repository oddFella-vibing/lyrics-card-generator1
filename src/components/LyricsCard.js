import React from "react";
import background from "../styles/icons/oddFellas.png";
const LyricsCard = ({ selectedlyrics }) => {

  return (
    <div
      className="lyricsCard"
      style={{ backgroundImage: `url(${background})` }}
    >
     
      <pre className="lyricslines">{selectedlyrics}</pre>
    </div>
  );
};

export default LyricsCard;
