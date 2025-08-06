import React from "react";

const Background = () => {
  return (
    <>
      <div className="fixed w-full h-screen z-20">
        <nav className="absolute cursive top-4 w-full py-10 flex justify-center text-zinc-400 font-semibold text-xl">
          Documents.
        </nav>
        <h1 className="absolute cursive top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl leading-none tracking-tighter font-semibold text-zinc-800">
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Background;
