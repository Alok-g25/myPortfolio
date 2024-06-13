import React, { useEffect, useRef } from "react";
import pdf from "./pdf/AlokResumeMay2.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";

function Home() {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "I'am Alok kumar Gupta",
        "FullStack Developer",
        "React Developer",
        "Node Developer",
      ],
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl mx-auto md:px-20 px-4" id="home">
        <div className="flex justify-between items-center min-h-[450px] flex-col md:flex-row pt-20">
          <div
            data-aos="fade-up-right"
            data-aos-duration="2000"
            className="w-full md:w-[60%] order-2 md:order-1 text-center p-6 border border-yellow-300 rounded-xl shadow-lg shadow-yellow-300"
          >
            <h2
              ref={typedRef}
              className="text-2xl md:text-4xl mb-4 text-yellow-500 font-bold"
            ></h2>
            <a
              href={pdf}
              download="alokResume"
              className="btn btn-outline btn-warning"
            >
              Download Resume
            </a>
          </div>
          <div
            className="right flex justify-center w-full md:w-[40%] items-center order-1 my-10"
            data-aos="fade-up-left"
            data-aos-duration="2000"
          >
            <img
              className="w-[300px] h-[300px] rounded-full border-[3px] border-yellow-300"
              src={`assets/${hero.imgSrc}`}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
