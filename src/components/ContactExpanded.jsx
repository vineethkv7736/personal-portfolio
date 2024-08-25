import React, { useState } from "react";
import { Input } from "./ui/input";
import {PhoneInput} from "./ui/Phone-input"
import { Button } from "./ui/button";

const Contactexpanded = () => {
  const [value, setValue] = useState();
  return (
    <div className=" flex min-h-screen flex-col justify-center items-center md:flex-row px-3 gap-5 md:gap-0 ">
      <div className="flex flex-col md:w-3/6  text-4xl z-20 bg-clip-text text-transparent bg-gradient-to-r from-vvoielt to-vwhite gap-3">
        <h1>Lets Connect and Create Something Amazing!</h1>
        <p className="text-vwhite opacity-75 pr-2 text-sm">
          Reach out to me for collaborations,or just to say hello.
        </p>
        <p className="text-vwhite opacity-75 pr-2 text-sm flex flex-row items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          Mavelikara,Alapuzha,Kerala,India
        </p>
        <p className="text-vwhite opacity-75 pr-2 text-sm flex flex-row items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          vineethkv7736@gmail.com
        </p>
        <p className="text-vwhite opacity-75 pr-2 text-sm flex flex-row items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          7736384652
        </p>
        <h1 className="text-xl my-3">My loaction from google map</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7875.909402815721!2d76.5559203595504!3d9.248345662397067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMTUnMDYuOSJOIDc2wrAzMyczOS43IkU!5e0!3m2!1sen!2sin!4v1724260502190!5m2!1sen!2sin"
          width="300"
          height="200"
          loading="fast"
          referrerpolicy="no-referrer-when-downgrade"
          className="ml-5 rounded-2xl "
        ></iframe>
      </div>
      <div className="w-full md:w-3/6 h-max my-5 md:my-0 px-2 md:px-32">
        <div className=" gap-5 px-10 w-full h-full rounded-2xl border border-vvoielt flex flex-col justify-center items-center">
          <h1 className="text-vvoielt font-bold text-xl mt-5">Reach Me</h1>
          <div className="text-vwhite flex flex-col justify-start w-full">
            <h1>Fullname</h1>
            <Input
              type="text"
              placeholder="Enter your name"
              className="rounded-xl "
            />
          </div>
          <div className="text-vwhite w-full flex flex-col justify-start">
            <h1>Phone Number</h1>
            {/* <div  className="border rounded-2xl md:w-80 text-black bg-white ">
            
            </div> */}
          <PhoneInput defaultCountry="IN"  />
          </div>
          <div className="text-vwhite w-full flex flex-col justify-start ">
            <h1>Email</h1>
            <Input
              type="email"
              placeholder="Example@gmail.com"
              className="rounded-xl "
            />
          </div>
          <Button
                variant="outline"
                className="mb-2 rounded-xl border-none bg-white text-black"
                // onClick={}
              >
                Submit
              </Button>
        </div>
      </div>
    </div>
  );
};

export default Contactexpanded;
