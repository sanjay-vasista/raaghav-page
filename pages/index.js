import socialLinks from "./data/social-links.json";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen ">
      <div className="flex flex-col justify-start lg:justify-end lg:mb-[10dvh] px-6 pt-12 lg:pt-0 lg:pl-[20dvw] xl:pl-[20dvw] 2xl:pl-[24dvw]">
        <h1 className="text-6xl sm:text-7xl md:text-8xl leading-tight">raaghav</h1>
        <h2 className="text-5xl sm:text-6xl leading-tight">belavadi</h2>
        <div className="flex gap-4 mt-6">
          <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
            <FaInstagram className="duration-300 cursor-pointer size-7 hover:scale-110" />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin className="duration-300 cursor-pointer size-7 hover:scale-110" />
          </a>
        </div>
      </div>

      <div className="  flex items-end justify-center mt-0  lg:justify-start lg:pl-[5vw]">
        <img 
          src="./raaghu.png" 
          alt="Raaghav Belavadi" 
          className="h-auto max-h-[90dvh] md:max-h-[90dvh] lg:max-h-[90dvh] w-auto object-contain"
        />
      </div>
    </div>
  );
}