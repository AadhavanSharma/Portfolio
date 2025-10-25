// import FrontPrint from "./front-page"
// import Dot from "../animata/background/dot"
import Footer from "./footer"
import Header from "./header"
// import DiagonalLines from "./diagonal-lines"
import InfyLoop from './infy-loop';
// import CallMeButton from "./call-me-button"
import About from "../subpages/about"
// import AboutAtTop from "./front-page"
import Academics from "../subpages/academics"
import { useRef } from 'react'
import WorkExp from "@/subpages/work-exp"
import Projects from "@/subpages/projects"
import Certificates from "@/subpages/certificates"
import { Card } from "./ui/card";
import ProfileCard from "./ProfileCard";
import useWindowDimensions from "@/hooks/window-dimensions";
import ResumeWindow from "./resume-window";
import TextType from "./TextType";
import { Download } from "lucide-react";
// import Plasma from './Plasma';

type LayoutProps = {
  scrollableRef:React.RefObject<HTMLDivElement | null>;
}

const Layout = ({scrollableRef}:LayoutProps) => {

  const aboutRef= useRef<HTMLDivElement | null>(null);
  const academicsRef= useRef<HTMLDivElement | null>(null);
  const workExpRef= useRef<HTMLDivElement | null>(null);
  const projectsRef= useRef<HTMLDivElement | null>(null);
  const certificatesRef= useRef<HTMLDivElement | null>(null);
  const footerRef= useRef<HTMLDivElement | null>(null);
  
  const {width} = useWindowDimensions();
  return (
    <div>
        <Header 
        aboutRef={aboutRef} 
        academicsRef={academicsRef} 
        workExpRef={workExpRef} 
        projectsRef={projectsRef} 
        certificatesRef={certificatesRef}
        scrollableRef = {scrollableRef}
        />
        <main className="min-h-screen max-w-screen space-y-40">

          <div className="mb-150 md:mb-170 lg:mb-60">
            {/* <Dot children = {<FrontPrint/>}/> */}
            <div className="mt-12 h-180 border-y-0 border-white text-white flex items-center justify-center">
              <Card 
              className="h-9/10 w-4/5 border-gray-900 border-0 backdrop-blur-0">
                <div className="grid grid-cols-10 m-auto md:w-9/10 border-0 border-white">
                  <ProfileCard
                    className="col-span-10 lg:col-span-4 border-0 border-white flex justify-center"
                    name="Aadhavan Sharma"
                    title="Software Engineer"
                    handle="Software Engineer"
                    status={`${width>768?"Let's Connect 📲":"📞 One Click Away"}`}
                    contactText={`${width>768?"Contact Me":"Call Now"}`}
                    avatarUrl="pfp.jpg"
                    showUserInfo={true}
                    enableTilt={true}
                    enableMobileTilt={false}
                    onContactClick={() => {
                      if(width>768){
                        // console.log("\n\n\nIt's working \n\n\n")
                        setTimeout(()=>{
                          footerRef.current?.scrollIntoView({behavior:"smooth"})
                        },250);
                      }}}
                  />
                  <Card className="border-0 py-auto border-amber-500 min-h-200 md:min-h-[50em] col-span-10 lg:col-span-6">
                    <div className=" min-h-10/100 md:min-h-22/100 border-0 border-red-500">
                      <TextType
                      style = {{fontFamily :"Parkinsans"}}
                        className="tracking-widest bg-gradient-to-b from-[#f5ffbd] via-[#d7d8d0] to-[#9c9b6a] bg-clip-text text-transparent font-sans
                        px-2 mx-2 text-3xl flex items-center border-0 border-amber-300 md:text-5xl lg:text-5xl xl:text-7xl"
                        text={["Hi there!", "Namaste!", "Sat Srī Akāl!", "Hola AmiGo!"]}
                        typingSpeed={50}
                        pauseDuration={2000}
                        showCursor={false}
                        cursorCharacter="|"
                      />
                    </div>
                    
                    <div className="border-0 relative bottom-6 space-y-8 py-4 border-green-500">
                      <div className=" text-gray-500 text-center font-thin px-2 mx-2 text-4xl md:text-4xl lg:text-7xl">I'm Aadhavan Sharma</div>
                      <p className="text-lg md:text-2xl px-2 mx-2 text-gray-400 text-center md:text-left font-mono">
                        A Software Engineer passionate about designing, developing, testing, and deploying applications, from small projects to large-scale, high-performance architectures capable of serving a vast user base. 
                        </p>
                    </div>

                    <div className=" text-gray-500 border-0 h-24 border-blue-300 grid grid-cols-2 space-y-8 md:space-y-0">
                      {/* Resumes Open and Download Buttons */}
                      <div className="border-0  border-amber-200 flex items-center justify-center col-span-2 md:col-span-1">
                        <ResumeWindow/>
                      </div>
                      <div className="border-0 border-amber-200 flex items-center justify-center col-span-2 md:col-span-1">
                        {/* <ResumeWindow/> */}
                        <a target = "_blank" href="https://drive.google.com/file/d/10e--TUda8SSHu03GhRdvN3zCBF-LpcZA/view?usp=sharing" 
                        // className="cursor-pointer scale-140 border-0 shine-effect-2 rounded-xl underline px-4 py-1 flex gap-2 items-center"
                          className="flex md:text-2xl items-center cursor-pointer rounded-2xl underline underline-offset-1 py-3 px-2 gap-2 relative right-2">

                          Download Resume
                          <Download className="text-gray-300"/>
                          {/* <img className="size-6" src="popup.png" alt="pdf"></img> */}
                        </a>
                      </div>
                    </div>
                  </Card>
                </div>
              </Card>
            </div>
          </div>

          {/* <div>
            <DiagonalLines/>
          </div> */}
          
          {/* About */}
          <About ref={aboutRef}/>
          
          
          {/* Academics */}
          <Academics ref={academicsRef}/>


          {/* Work ex */}
          <WorkExp ref={workExpRef}/>


          <div className="relative">        
            <InfyLoop/>
          </div>


          {/* Projects */}
          <Projects ref = {projectsRef}/>


          {/* Certificates */}
          <Certificates ref={certificatesRef}/>
        </main>

        <Footer ref={footerRef}/>
        
        {/* <CallMeButton/> */}
    </div>
  )
}


export default Layout;


// return (
//   <div>
//       <Header 
//       aboutRef={aboutRef} 
//       academicsRef={academicsRef} 
//       workExpRef={workExpRef} 
//       projectsRef={projectsRef} 
//       certificatesRef={certificatesRef}
//       />
//       <main className="min-h-screen max-w-screen">
//         <div>
//           <Dot children = {<FrontPrint/>}/>            
//         </div>
//         <div>
//           <DiagonalLines/>
//         </div>

        
//         <About ref={aboutRef}/>
//         {/* About */}
//         {/* Academics */}
//         <Academics ref={academicsRef}/>

//         {/* Work ex */}
//         <WorkExp ref={workExpRef}/>
//         <div className="relative">        
//           <InfyLoop/>
//         </div>
//         {/* Projects */}
//         <Projects ref = {projectsRef}/>
//           {/* Certificates */}
//           <Certificates ref={certificatesRef}/>
//       </main>
//       <Footer/>
//       <CallMeButton/>
//   </div>
// )