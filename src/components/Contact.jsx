import React from "react";
import { Meteors } from "./ui/meteors";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
const Contact = () => {
  return (
    <section id="#contact" className=" h-screen bg-black">
        <div>
            <p className=" text-white"> Contact Me</p>
           
        {/* <ShootingStars className="relative h-screen" /> */}
      <StarsBackground  className="relative h-screen "/>
     {/* <Meteorss number={20} className="relative" /> */}
        </div>
    </section>
  );
};

export default Contact;
