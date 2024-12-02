import { useTypewriter, Cursor } from "react-simple-typewriter";
import React from "react";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "opp alle digitale platformen.",
      "op alle digitale diensten.",
      "op alle digitale creaties",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full flex justify-between items-center ">
      <div className="w-full md:w-1/2 flex-1  flex-col justify-center items-center ">
        <div className="border-l-8  border-red-800 md:pl-6 pl-2 text-start">
          <div className="w-full p-4">
            <h2 className="text-white text-xl lg:text-4xl font-semibold">
              We vertellen je verhaal
            </h2>
            <h2 className=" text-xl lg:text-4xl font-bold text-red-800 uppercase">
              <span>{text}</span>
              <Cursor
                cursorBlinking="true"
                cursorStyle="|"
                cursorColor="#B71C1C"
              />
            </h2>
            <p className="text-white text-xl lg:text-2xl">
              Heb je een project of een idee?
            </p>
            <p className="text-white text-xl lg:text-2xl">
              <span className="text-red-800">E-mail</span> of{" "}
              <span className="text-red-800">bel</span> ons voor een afspraak.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 hidden lg:block relative  left-10 w-full">
        <div
          className="absolute text-white bottom-0 top-4 left-56
         w-full transform -rotate-90 md:text-3xl lg:text-5xl font-bold"
        >
          <p className="text-center uppercase ">your vision, our creativity</p>
        </div>
      </div>
    </div>
  );
};
export default Banner;
