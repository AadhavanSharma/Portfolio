
// import PillNavbar from "./navbar"
// import { isDesktop, isBrowser } from "react-device-detect"
import { Desktop, NonDesktop } from "./navbar";
import useWindowDimensions from "../hooks/window-dimensions";
// import { useEffect, useState } from "react";
import { useElementScroll } from "@/utils/LayoutScroll";
import TextType from "./TextType";

type HeaderProps = {
 aboutRef : React.RefObject<HTMLDivElement | null>;
 academicsRef : React.RefObject<HTMLDivElement | null>;
 workExpRef : React.RefObject<HTMLDivElement | null>;
 projectsRef : React.RefObject<HTMLDivElement | null>;
 certificatesRef : React.RefObject<HTMLDivElement | null>;
 scrollableRef : React.RefObject<HTMLDivElement | null>;
};

// console.log(isDesktop,"\n isBrowser-> ",isBrowser);
const Header = ({aboutRef,academicsRef, workExpRef, projectsRef, certificatesRef, scrollableRef}:HeaderProps) => {

  const k = useWindowDimensions();
  // console.log("baato bhai -> ",k,"\n");

  const scrollTo = (ref:React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setTimeout(()=>{
    }, 250);
  };

  const scrollPosition = useElementScroll(scrollableRef);
  const isScrolledDown = scrollPosition > 800;

  const contentClass = `
    p-4 rounded text-white z-2000 sticky w-full
    transform transition-all duration-2000 ease-in-out backdrop-blur
    ${isScrolledDown ? 
      "scale-80 top-4 w-full mx-auto bg-black rounded-3xl shadow-white shadow-lg shadow-t-8 shadow-r-3 shadow-b-4 shadow-l-5 " 
      : "top-0 border-gray-800 border-b-2"}
  `;

  return (
        // <header className="sticky top-0 border-gray-500 z-50 w-full backdrop-blur p-4 border-1 supports-[backdrop-filter]:bg-background/60">
        <header id = ""
        className ={contentClass}
        >
            <div className="w-full border-0 border-gray-300 rounded-2xl mx-auto flex items-center justify-between h-20 px-4">
              <div style={{fontFamily:"Michroma"}} className="flex item-center justify-center text-sm lg:text-3xl border-0 p-4 rounded-4xl">
                {/* . Aadhavan Sharma  */}
                {/*:{k.width}px, {k.height}px*/}
                <TextType
                  text={[". Aadhavan Sharma", ". Welcome onboard"]}
                  typingSpeed={50}
                  pauseDuration={3000}
                  showCursor={false}
                  cursorCharacter="|"
                  />
              </div>
              <div className={`flex h-full border-0 items-center justify-center ${k.width>=1015?"w-3/6":`${k.width>=760?"w-65/100":""}`} gap-6`}>
                
                {k.width>=760?
                <Desktop 
                onAbout = {()=> scrollTo(aboutRef)}
                onAcademics = {()=>scrollTo(academicsRef)}
                onWorkExp = {()=>scrollTo(workExpRef)}
                onProjects = {()=>scrollTo(projectsRef)}
                onCertificates = {()=>scrollTo(certificatesRef)}
                />
                :
                <NonDesktop
                aboutRef={aboutRef}
                academicsRef={academicsRef}
                workExpRef={workExpRef}
                projectsRef={projectsRef}
                certificatesRef={certificatesRef}
                />}

                {/* <div onClick={()=>{}} className={`cursor-pointer h-12 rounded-full border flex items-center justify-between px-3 py-2 duration-300 hover:bg-blue-50`}>
                  <Search/>
                </div> */}
              </div>
            </div>
        </header>
  )
}


export default Header