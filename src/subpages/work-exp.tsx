import AnimatedBeam from "@/animata/background/animated-beam";
import {Circle} from "lucide-react";
import { forwardRef } from "react";

type WorkExpProps = {};
const WorkExp = forwardRef<HTMLDivElement,WorkExpProps>((props, ref) => {
    props;
  return (
    <div ref = {ref} className="scroll-mt-[118px]"> 
        <AnimatedBeam>
            <InsideWorkExp/>
        </AnimatedBeam>
    </div>
  )
});

const InsideWorkExp = ()=>{
    return (
        <div className="border-0 flex items-center justify-around grid-cols-3 h-128">
            
            <div className="w-1/12 md:w-1/4 border-0 h-full bg-gray-50/60"></div>

            <div className="w-5/6 md:w-2/4 border-0 border-red-700 h-full bg-gray-50/60 grid grid-rows-110">
                <div style = {{fontFamily:"English Towne"}} className="row-span-10 border-0 flex items-center justify-center text-4xl">Work Experience</div>
                <div className="border-0 m-1 border-green-500 grid grid-cols-100 row-span-50">
                    <div className="col-span-10 border-0 grid justify-center w-fit items-center">
                        <Circle className="bg-gray-400 rounded-full text-gray-500 size-4"></Circle>
                    </div>
                    <div className=" col-span-90 border-0 grid grid-rows-10">
                        <div className="row-span-3 border-1 rounded-2xl p-2 font-serif h-fit bg-gray-50/60">
                            <p className="border-0 flex justify-start font-engtowne">
                            BackEnd Development Intern
                            </p>
                            <p className="border-0 flex justify-end text-sm text-gray-600">
                              6Mo @ Delwish | Aug'24 - Dec'24
                            </p>                             
                        </div>
                        <div style={{position: 'relative'}} className=" row-span-7 h-40">
                            <div className="border-1 rounded bg-gray-50/60 border-gray-400 px-2 h-full scrollbar overflow-y-scroll scroll-smooth scrollbar-thumb-green-700/60 scrollbar-track-white scrollbar-thin">
                                <p>
                                    Worked as a backend developer using the MERN (MongoDB, Express.js, React.js, Node.js) stack, building RESTful APIs, implementing authentication/ authorization, and optimizing database operations. Collaborated with frontend teams to ensure smooth data handling and efficient debugging. Applied best practices for writing scalable, maintainable code, improving performance, and deploying real-world projects. Gained practical experience with Express.js, MongoDB, and Node.js while enhancing problem-solving and teamwork skills.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-0 m-1 border-green-500 grid grid-cols-100 row-span-50">
                    <div className="col-span-10 border-0 grid justify-center w-fit items-center">
                        <Circle className="bg-gray-400 rounded-full text-gray-500 size-4"></Circle>
                    </div>
                    <div className=" col-span-90 border-0 grid grid-rows-10">
                        <div className="row-span-3 rounded-2xl border-1 p-2 font-serif h-fit bg-gray-50/60">
                            <p className=" border-0 flex justify-start">
                            Teaching Assistant
                            </p>
                            <p className="border-0 flex justify-end text-sm text-gray-600">
                              3Mo @ Coding Ninjas | Aug'22 - Nov'22
                            </p>                             
                        </div>
                        <div style={{position: 'relative'}} className=" row-span-7 h-40">
                            <div className="border-1 rounded bg-gray-50/60 border-gray-400 px-2 h-full scrollbar overflow-y-scroll scroll-smooth scrollbar-thumb-green-700/60 scrollbar-track-white scrollbar-thin">
                                <p>
                                    Worked as a remote Teaching Assistant for the Data Structure and Algorithm course in C++, supporting over 400 students by resolving doubts and clarifying concepts. Provided guidance to more than 300 students through one-on-one sessions and discussion forums, helping them strengthen problem-solving skills and coding practices. Maintained an average rating of 4.4/5, reflecting effective communication, patience, and a strong understanding of algorithms and data structures. Gained valuable experience in mentoring, explaining complex topics clearly, and improving students' confidence in programming.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/12 md:w-1/4 border-0 h-full bg-gray-50/60"></div>
        </div>
    )
}

export default WorkExp