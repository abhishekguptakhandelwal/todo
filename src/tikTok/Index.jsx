import React from "react";

const Index = () => {
  return (
    <>
      <div className="h-full w-full mx-auto my-auto flex justify-center items-center  container flex-col">
        <p className="text-3xl font-extrabold ">Welcome Tic Tac Tok Game</p>
        <div className="flex justify-center items-center  -top-16   px-4 py-4 flex-col bg-gray-200 shadow-2xl  mx-auto my-auto rounded-3xl">
          <div className="flex gap">
            <span className=" border p-8 border-solid border-lime-950 cursor-pointer w-8 h-8 items-center  flex justify-center">
              X
            </span>
            <span className=" border p-8 border-solid border-lime-950 cursor-pointer w-8 h-8 items-center  flex justify-center">
              O
            </span>
            <span className=" border p-8 border-solid border-lime-950 cursor-pointer w-8 h-8 items-center  flex justify-center">
              X
            </span>
          </div>
          <div className="flex ">
            <span className=" border p-8 border-solid border-lime-950 cursor-pointer w-8 h-8 items-center  flex justify-center ">
              O
            </span>
            <span className=" border p-8 border-solid border-lime-950 cursor-pointer w-8 h-8 items-center  flex justify-center ">
              X
            </span>
            <span className=" border p-8 border-solid border-lime-950 cursor-pointer w-8 h-8 items-center  flex justify-center ">
              O
            </span>
          </div>
          <div className="flex ">
            <span className=" border p-8 border-solid border-lime-950 cursor-pointer w-8 h-8 items-center  flex justify-center ">
              X
            </span>
            <span className=" border p-8 border-solid border-lime-950 cursor-pointer w-8 h-8 items-center  flex justify-center ">
              O
            </span>
            <span className=" border p-8 border-solid border-lime-950 cursor-pointer w-8 h-8 items-center  flex justify-center ">
              X
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
