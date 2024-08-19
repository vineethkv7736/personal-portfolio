import React from "react";
import { Meteors } from "./ui/meteors";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"


const Contact = () => {
  return (
    <section id="#contact" className=" h-screen bg-black">
      <div className=" flex justify-center items-center h-screen ">
        <div className=" w-full relative max-w-xs  md:max-w-sm">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative gap-10 shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start text-white ">
            <div className=" text-2xl md:text-3xl ">
              <h1>Contact Me</h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 pl-8 pr-5 w-full">
              <Input className="bg-slate-300 text-black " placeholder="Name" />
              <Input className="bg-slate-300 text-black" placeholder="Email" type="email" />
              <Input className="bg-slate-300 text-black" placeholder="Subject" />
              <Textarea className="bg-slate-300 text-black" placeholder="Type your message here." />
              <Button variant="outline" className="bg-slate-300 text-black px-10 md:px-20">Submit</Button>

            </div>

            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
