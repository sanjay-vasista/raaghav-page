import socialLinks from "./data/social-links.json";
import {  FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home(){
  return <div className="sm:flex  ">
  <div className="sm:mt-[60dvh] sm:ml-[50dvh] ml-[10dvh] mt-[5dvh] mb-0 ">
    <h1 className="text-6xl sm:text-8xl">raaghav</h1>
    <h2 className="text-6xl sm:text-6xl">belavadi</h2>
    <div className="flex gap-x-5 mt-5">
              <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
                <FaInstagram
                  className="duration-700 cursor-pointer size-10 hover:scale-105  "
                />
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noreferrer">
                <FaXTwitter
                  className="duration-700 cursor-pointer size-10 hover:scale-105  "
                />
              </a> 
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin
                  className="duration-700 cursor-pointer size-10 hover:scale-105  "
                />
              </a>
              </div>
  </div>
  <img src="./raaghu.png" alt="" className="sm:h-[100dvh] sm:ml-[20dvh] sm:mt-0 mx-auto mt-[-5dvh]"/>

  
  </div>
}


