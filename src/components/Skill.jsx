import React from "react";
import skill from "./data/skills.json";

function Skill() {
  return (
    <>
      <div className="w-[800px] mx-auto md:px-20 px-4" id="skills">
        <h2 className="text-center text-2xl uppercase md:text-4xl my-10 underline">
          Skill
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skill.map((data, index) => {
            return (
              <>
                <div data-aos="flip-left"
                  data-aos-duration="2000"
                  
                 className="w-80 p-6 border-[1px] border-yellow-300 shadow-md shadow-yellow-300 rounded-lg">
                  <div className="flex justify-center items-center flex-col ">
                    <img
                      className="w-[100px] h-[100px]"
                      src={`assets/${data.imageSrc}`}
                      alt=""
                    />
                    <h2 className="text-xl text-yellow-300">{data.title}</h2>
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

export default Skill;
