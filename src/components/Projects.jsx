import React from "react";

const Projects = () => {
  return (
    <section id="#projects" className=" h-screen ">
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="flex flex-col justify-center items-center text-4xl border border-black sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          <div>Projects</div>
         
        </p>
      </div>
    </section>
  );
};

export default Projects;
