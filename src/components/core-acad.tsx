// import Squares from "./Squares"
import TimelineAcad from "./timeline-acad"

const CoreAcad = ()=>{
  return (
    <div className="border-0 h-160">
      {/* <Squares
        speed={0.3} 
        squareSize={120}
        direction='diagonal'
        borderColor='#dddddd'
        hoverFillColor='lightgray'                  
        /> */}
      <div className=" absolute border-0 inset-0 flex items-center justify-center z-10">
      <TimelineAcad/>
      </div>
    </div>
  )
}

export default CoreAcad