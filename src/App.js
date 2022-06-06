import Axios from "axios";
import { useState } from "react";

import Header from "./components/Header";
import LyricsCardGenerator from "./components/LyricsCardGenerator";
import LyricsResult from "./components/LyricsResult";

function App() {
  const [show, setShow] = useState(false);
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [collapse, setCollapse] = useState(false);
  const [lyrics, setLyrics] = useState(" ");
  const [selectedlyrics, setSelectedlyrics] = useState("");

  function searchLyrics(artist, song) {
    Axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`).then((res) => {
      setLyrics(res.data.lyrics);
    });
  }
  const selectHandler = (e) => {
    e.preventDefault();
    const lines = window.getSelection().toString();
    if (lines.length !== 0) {
      setSelectedlyrics(lines);
      console.log(lines);
      setAnchorPoint({ x: e.pageX, y: e.pageY });
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const collapseHandler = (e) => {
    e.preventDefault();
    setCollapse((prev) => !prev);
    setShow(false);
  };
  return (
    <div className="App">
      <Header searchLyrics={searchLyrics} />

      <div onMouseUp={(e) => selectHandler(e)}>
        <LyricsResult
          lyrics={lyrics}
          collapseHandler={collapseHandler}
          anchorPoint={anchorPoint}
          show={show}
        />
      </div>
      {collapse ? (
        <LyricsCardGenerator
          collapseHandler={collapseHandler}
          selectedlyrics={selectedlyrics}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
