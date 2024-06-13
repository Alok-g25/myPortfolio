import React from "react";
import project from "./data/projects.json";

function Project() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto md:px-20 p-2" id="project">
        <h1 className="text-center text-2xl md:text-4xl underline my-10 uppercase">
          Project
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {project.map((data) => {
            return (
              <>
                <div 
                data-aos="flip-right"
                  data-aos-duration="2000"
                   className="my-5 p-4 card w-full md:w-80 border-[2px] border-yellow-300 shadow-lg shadow-yellow-200">
                  <figure className="border-[1px] border-yellow-300 rounded-lg overflow-hidden">
                    <img className="w-full h-48 object-cover"
                      src={data.imageSrc}
                      alt="project"
                    />
                  </figure>
                  <div className="my-3">
                    <h2 className="card-title text-xl text-yellow-400">{data.title}</h2>
                    <p>{data.description}</p>
                    <div className="card-actions justify-end mt-6">
                      <a href={data.source} target="_blank" className="px-2 py-1 border-[1px] border-yellow-300 btn-outline btn-warning rounded-lg duration-300">Code</a>
                    </div>
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

export default Project;
