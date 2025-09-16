import { forwardRef } from "react";
type AcadProps = {};
import '../index.css'
import '../App.css'
// import TimelineAcad from '../components/timeline-acad'
// import Grid from "@/animata/background/grid";
// import Squares from "@/components/Squares";
import CoreAcad from "@/components/core-acad";
import Grid from "@/animata/background/grid";
const Academics = forwardRef<HTMLDivElement,AcadProps>((p,ref) => {
    p;
  return (
      <Grid ref = {ref} size={90} deg={45} className="border-0 border-black my-8 scroll-mt-[118px]" children = {<Yup/>}>
      </Grid>
  )
});

const Yup = ()=>{
 
  return (
    <div className=" border-0 scroll-mt-[118px] grid-rows-10">
        <p style = {{fontFamily:"English Towne"}} className="bg-white/50 mx-auto w-5/6 lg:w-1/2 border-2 border-black row-span-1 text-center text-2xl lg:text-5xl">My Academic Journey So far</p>
      <div className="border-0 border-red-300 row-span-9 flex items-center justify-around mb-0">
          <div className="w-1/12 lg:w-1/4 border-0 h-full "></div>

          <div className="relative w-5/6 lg:w-1/2 border-0 h-full bg-blue-0">
              <CoreAcad/>
          </div>
          <div className="w-1/12 lg:w-1/4 border-0 h-full"></div>
      </div>
    </div>
  )
}

// const CoreAcad = ()=>{
//   return (
//     <div className="border-1 h-160">
//       <Squares
//         speed={0.2} 
//         squareSize={40}
//         direction='diagonal'
//         borderColor='#f1f1f1'
//         hoverFillColor='lightgray'                  
//         />
//       <div className="absolute border-2 inset-0 flex items-center justify-center z-10 mx-0.5">
//       <TimelineAcad/>
//       </div>
//     </div>
//   )
// }

export default Academics