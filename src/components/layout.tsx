import FrontPrint from "./front-page"
// import Dot from "../animata/background/dot"
import Footer from "./footer"
import Header from "./header"
// import DiagonalLines from "./diagonal-lines"
import InfyLoop from './infy-loop';
import CallMeButton from "./call-me-button"
import About from "../subpages/about"
import Academics from "../subpages/academics"
import { useRef } from 'react'
import WorkExp from "@/subpages/work-exp"
import Projects from "@/subpages/projects"
import Certificates from "@/subpages/certificates"
import { Card } from "./ui/card";
import ProfileCard from "./ProfileCard";
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

          <div>
            {/* <Dot children = {<FrontPrint/>}/>             */}
            <div className="mt-12 h-180 border-y-0 border-white text-white flex items-center justify-center">
              <Card 
              className="border-4 rounded-3xl h-9/10 w-4/5
               border-gray-300 backdrop-blur-3xl">
                <div className="grid grid-cols-10 m-auto md:w-9/10 border-4 border-white">
                  <ProfileCard
                    className="col-span-10 md:col-span-4 border-4 border-white flex justify-center"
                    name="Aadhavan Sharma"
                    title="Software Engineer"
                    handle="Software Engineer"
                    status="One Click Away ☎️ ->"
                    contactText="Call Now"
                    avatarUrl="pfp.jpg"
                    showUserInfo={true}
                    enableTilt={true}
                    enableMobileTilt={false}
                    onContactClick={() => console.log('Contact clicked')}
                  />
                  <Card className="border-2 col-span-10 md:col-span-6"></Card>
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

        <Footer/>
        
        <CallMeButton/>
    </div>
  )
}

export default Layout


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