import React from "react";
import { doc, getDoc } from "firebase/firestore";
import {db} from "../../firebase/config" 

const getData = async () => {
  const docRef = doc(db, "test", "vineeth");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log(docSnap.data()); 
  } else {
    console.log("No such document!");
  }
};

export function  Home() {
 getData();
  return (
    <section id="#home" className=" h-screen"> 
     <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className=" flex flex-col justify-center items-center text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
      <div>Vineeth K V</div>
        <div className="text-sm md:text-2xl">Web Develpoer</div> 
      </p>
    </div>
    </section>
  );
}
export default Home;