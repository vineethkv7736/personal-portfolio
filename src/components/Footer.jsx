import React from 'react'
import { SocialIcon } from 'react-social-icons'
const Footer = () => {
    return (
        <section id="#footer" className=" h-32 bg-black">
            <div className="p-5 border-t-2 border-blue-300 flex flex-col gap-3 md:gap-5">
                <div className="text-white text-xl md:text-3xl">
                    <h1>Connect With Me</h1>
                </div>
                <div className="text-white flex flex-row gap-5 pl-5 md:pl-20">
                <SocialIcon url="https://whatsapp.com" network="whatsapp"  style={{ width: "30px", height: "30px" }} bgColor="#CBD5E1" fgColor="black"/>
                <SocialIcon url="https://linkedin.com" network="linkedin" style={{ width: "30px", height: "30px" }}  bgColor="#CBD5E1" fgColor="black"/>
                <SocialIcon url="https://github.com/vineethkv7736" network="github" style={{ width: "30px", height: "30px" }} bgColor="#CBD5E1" fgColor="black"/>
                </div>
            </div>
        </section>
    )
}

export default Footer
