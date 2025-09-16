import LogoCircle from "./logo-loop"
import Squares from "./Squares"

const InfyLoop = () => {
  return (
    <div className="h-24 my-6">
        <Squares 
              speed={0.5} 
              squareSize={60}
              direction='diagonal'
              borderColor='gray'
              hoverFillColor='red'
              
            />
            <div className="absolute border-y-2 inset-0 flex items-center justify-center z-10">
              <LogoCircle></LogoCircle>
            </div>
    </div>
  )
}

export default InfyLoop