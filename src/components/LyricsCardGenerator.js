import React, { useRef } from "react";
import LyricsCard from "./LyricsCard";
import saveIcon from "../styles/icons/save.svg";
import cancleIcon from "../styles/icons/cancel.svg";
import * as htmlToImage from "html-to-image";
import toPng from "html-to-image";

const LyricsCardGenerator = ({ selectedlyrics, collapseHandler }) => {
  const domE1 = useRef(null);

  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(domE1.current);
    const link = document.createElement("a");
    link.download = "my-image-name.png";
    link.href = dataUrl;
    link.click();
  };

  // const onButtonClick = useCallback(() => {
  //   toPng(document.getElementById("hehe"), { cacheBust: true })
  //     .then((dataUrl) => {
  //       const link = document.createElement("a");
  //       link.download = "my-image-name.png";
  //       link.href = dataUrl;
  //       link.click();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <div className="lyricsCardGenerator">
      <div ref={domE1}>
        <LyricsCard selectedlyrics={selectedlyrics} />
      </div>
      <div className="btnsflex">
        <button onClick={collapseHandler} className="canclebtn">
          <img src={cancleIcon} alt="cancel" />
        </button>
        <button className="savebtn" onClick={downloadImage}>
          <img src={saveIcon} alt="save" />
        </button>
      </div>
    </div>
  );
};

export default LyricsCardGenerator;
