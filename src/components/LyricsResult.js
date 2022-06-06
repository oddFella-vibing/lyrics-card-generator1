import React from "react";
import CustomMenu from "./CustomMenu";

const LyricsResult = ({ lyrics, collapseHandler, anchorPoint, show }) => {
  return (
    <>
      <div className={lyrics === " " ? "" : "lyricsresult"}>
        <pre>{lyrics}</pre>
      </div>
      {show  ? (
        <CustomMenu
          collapseHandler={collapseHandler}
          anchorPoint={anchorPoint}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default LyricsResult;
