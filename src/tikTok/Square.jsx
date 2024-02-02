import React from "react";

const Square = (props) => {
  return (
    <>
      <span
        className=" border p-8 border-solid border-lime-950 cursor-pointer w-8 h-8 items-center  flex justify-center"
        onClick={props.onClick}
      >
        {props.value}
      </span>
    </>
  );
};

export default Square;
