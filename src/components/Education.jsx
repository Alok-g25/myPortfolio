import React from "react";
import experience from "./data/experience.json";
import { IoSchoolSharp } from "react-icons/io5";


function Education() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto md:px-20 px-4" id="education">
        <h1 className="text-2xl md:text-4xl uppercase text-center my-12 underline">
          Education
        </h1>
        <div className="flex justify-center items-center flex-col">
          {experience.reverse().map((data, index) => {
            return (
              <>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  key={index}
                  className="text-center flex justify-center items-center mb-7 w-full md:w-[700px] border-[1px] border-yellow-300 rounded-lg p-6 shadow-lg shadow-yellow-300"
                >
                  <div className="left w-1/4">
                    {/* <img
                      className="w-[100px] h-[100px]"
                      src={`assets/${data.imageSrc}`}
                      alt="" 
                     /> */}
                     <IoSchoolSharp  className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]"/>
                  </div>
                  <div className="right w-3/4">
                    <p className="text-2xl text-yellow-300">{data.organisation}</p>
                    <p className="text-xl">{data.education}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Education;
