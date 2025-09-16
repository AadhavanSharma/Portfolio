import FrontPrint from "./front-page"
import Dot from "../animata/background/dot"
import Footer from "./footer"
import Header from "./header"
import DiagonalLines from "./diagonal-lines"
import InfyLoop from './infy-loop';
import CallMeButton from "./call-me-button"
import About from "../subpages/about"
import Academics from "../subpages/academics"
import { useRef } from 'react'
import WorkExp from "@/subpages/work-exp"
import Projects from "@/subpages/projects"
import Certificates from "@/subpages/certificates"

const Layout = () => {

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
        />
        <main className="min-h-screen max-w-screen">
          <div>
            <Dot children = {<FrontPrint/>}/>            
          </div>
          <div>
            <DiagonalLines/>
          </div>
          <About ref={aboutRef}/>
          {/* About */}
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


// later vala->
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Layout from './components/layout'
// import { Suspense } from 'react'

// function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route  path = "" element = {<Suspense fallback = {<ScreenLoader/>}><Layout/></Suspense>}>
//         {/* <Layout /> */}
//       </Route>
//     </Routes>
//     </BrowserRouter>
//   )
// }

// const ScreenLoader = ()=>{
//   return (
//     <></>
//   )
// }

// export default App