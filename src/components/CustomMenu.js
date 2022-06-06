import React from "react";


const CustomMenu = ({ collapseHandler, anchorPoint }) => {
  const clickHandler = (e) => {
    e.preventDefault();
  
    collapseHandler(e);
  };
  return (
    <button
      className="customMenu"
      style={{
        top: anchorPoint.y,
        left: anchorPoint.x,
      }}
      onClick={clickHandler}
    >
      generate
    </button>
  );
};

export default CustomMenu;
