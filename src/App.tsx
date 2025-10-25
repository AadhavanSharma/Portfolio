import { useRef } from 'react'
// import LoadingPage from './components/loading-page'
// import { AnimatePresence } from 'framer-motion';
import {motion} from 'framer-motion';
// import Beams from './components/Beams';
import Layout from './components/layout'
import Plasma from './components/Plasma';

// function delayForDemo<T>(promise: Promise<T>): Promise<T> {
//   return new Promise<void>(resolve => {
//     setTimeout(resolve, 500);
//   }).then(() => promise);
// }

// const Layout = lazy(() => delayForDemo(import('./components/layout')));

const App:React.FC =()=> {
  
  const scrollableRef = useRef<HTMLDivElement | null>(null);
  
  return (
    //<Suspense >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className='h-screen w-screen bg-[#0a0d1d]'>
          {/* <Beams                
            beamWidth={60}
            beamHeight={36}
            beamNumber={1}
            lightColor="#2274c2"
            speed={3}
            noiseIntensity={0}
            scale={0.2}
            rotation={180}
          /> */}
          <Plasma
            color="#0c1366"        // Custom color (hex)
            speed={0.8}            // Animation speed
            direction="forward"    // 'forward' | 'reverse' | 'pingpong'
            scale={3}            // Zoom level
            opacity={0.8}          // Transparency
            mouseInteractive={false} // Mouse interaction
          />
          <div ref = {scrollableRef} className='scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-[#0a0d1d] absolute inset-0 overflow-y-scroll'>
            <Layout scrollableRef = {scrollableRef}/>
          </div>
        </div>
      </motion.div>
    //</Suspense>
  )
}

// const ConditionalPage = ()=>{
//   return (
//     <AnimatePresence>
//       <LoadingPage/>
//     </AnimatePresence>
//   )
// }

export default App
