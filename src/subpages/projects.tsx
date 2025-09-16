import { forwardRef } from "react";

type ProjectProps = {};

const Projects = forwardRef<HTMLDivElement,ProjectProps>((props, ref) => {
    props;
  return (
    <div ref = {ref} className="scroll-mt-[118px]">
                <div className="border-1 flex items-center justify-around grid-cols-3 h-64 -mb-1">
            <div className="w-1/4 border-1 h-full bg-yellow-400"></div>
            <div className="w-1/2 border-1 h-full bg-green-600 grid grid-cols-2">
                <div className="border-2 h-full w-full">projects</div>
                <div className="border-2 h-full w-full"></div>
                <div className="border-2 h-full w-full"></div>
                <div className="border-2 h-full w-full"></div>
            </div>
            <div className="w-1/4 border-1 h-full bg-blue-500"></div>
        </div>
        <div className="border-1 flex items-center justify-around grid-cols-3 h-64 mb-1">
            <div className="w-1/4 border-1 h-full bg-yellow-400"></div>
            <div className="w-1/2 border-1 h-full bg-green-600 grid grid-cols-2">
                <div className="border-2 h-full w-full"></div>
                <div className="border-2 h-full w-full"></div>
                <div className="border-2 h-full w-full"></div>
                <div className="border-2 h-full w-full"></div>
            </div>
            <div className="w-1/4 border-1 h-full bg-blue-500"></div>
        </div>
    </div>
  )
});

export default Projects