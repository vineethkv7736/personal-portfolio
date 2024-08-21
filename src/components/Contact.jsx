import React, { useState } from "react";
import { Meteors } from "./ui/meteors";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

import Contactexpanded from "./ContactExpanded";

const Contact = () => {
  const [isclick, setIsclick] = useState(false);

  const handleClick = () => {
    setIsclick(true);
  };

  return (
    <section
      id="#contact"
      className="h-screen bg-black flex justify-center items-center px-5 md:px-0"
    >
      {isclick ? (
        <div>
          <Contactexpanded />
        </div>
      ) : (
        <div className="  bg-gradient-to-r from-vdblue to-vvoielt rounded-3xl flex flex-col md:flex-row py-5 pl-5 gap-4">
          <div className="  flex flex-col justify-center items-start  gap-4  md:my-5 pr-1 md:pr-0">
            <h1 className="text-2xl font-bold text-vwhite md:text-3xl">
              Let's Connect and Create Something Amazing!
            </h1>

            <p className="text-vwhite opacity-75 pr-2">
              Reach out to me for collaborations,or just to say hello.
            </p>
          </div>
          <div className="md:w-1/4 flex justify-center md:justify-end mr-5 items-center">
            <Button
              variant="outline"
              className="w-3/6  rounded-2xl border-none bg-white text-black"
              onClick={handleClick}
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
