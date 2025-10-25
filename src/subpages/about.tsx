// import Grid from "@/animata/background/grid";
// import GradualBlurMemo from "@/components/GradualBlur";
import useWindowDimensions from "@/hooks/window-dimensions";
// import type { ForwardRefComponent } from "framer-motion";
import { forwardRef, useEffect, useRef, useState } from "react"

// type SectionProps={
//     aboutRef:React.RefObject<HTMLDivElement|null>;
// };
// scroll-mt-[118px]
const About = forwardRef<HTMLDivElement,{}>((props, ref) => {
    props;
  return (
    <>
        {/* <Grid
        color="#c2c2c2"
        size={50}
        className="border-b-3 border-gray-300 relative mb-8 scroll-mt-[218px]"
        children = {<MainAbout/>}
        deg={0}
        ref = {ref}
        /> */}
        <MainAbout ref={ref}/>
    </>
  )
})

interface MainAboutProps{
    ref?: React.ForwardedRef<HTMLDivElement|null>;
}
// const MainAbout = forwardRef<HTMLDivElement,SectionProps>((props, ref)=>{
const MainAbout = ({ref}:MainAboutProps)=>{
    const divRef = useRef<HTMLDivElement|null>(null);
    const [isScrolledEnough, setIsScrolledEnough] = useState(false);

    const handleScroll = ()=>{
        if(divRef.current){
            const {scrollHeight, scrollTop, clientHeight} = divRef.current;
            const scrollPosition = scrollTop + clientHeight;
            const scrollPercent = (scrollPosition/scrollHeight)*100;
            if(scrollPercent >= 96){setIsScrolledEnough(true)}
            else{setIsScrolledEnough(false);}
        }
    };

    useEffect(()=>{
        const currentDiv = divRef.current;
            currentDiv?.addEventListener("scroll",handleScroll);
        return ()=>{
            currentDiv?.removeEventListener("scroll",handleScroll);
        }
    },[divRef]);

    return (
        <div className="text-white scroll-mt-[150px]" ref={ref}>
            <div className="border-0 border-red-500 flex items-center justify-around grid-cols-3">
                <div className="w-1/6 lg:w-1/4 border-0 h-full "></div>
                <div className="grid grid-rows-10 w-90/100 lg:w-2/4 border-0 h-full bg-gray-0/80">
                    <div className="row-span-1 border-1 rounded-3xl border-yellow-400 text-blue-500/88 grid lg:text-2xl font-semibold  place-items-center justify-items-center backdrop-blur-lg bg-gray-0/30 shine-effect-2 shadow-xl">About Me</div>
                    <div style={{position: 'relative',overflow: 'hidden'}} className="row-span-9 overflow-auto border-0 w-full lg:px-2 justify-center lg:text-xl/10 lg:font-semibold">
                        <div ref={divRef} className="h-full select-none scrollbar-thin scroll-smooth scrollbar-thumb-blue-900/60
                        hover:scrollbar-thumb-blue-700/60">
                            <Content/>                        
                        </div>
                        {/* {!isScrolledEnough && <GradualBlurMemo
                            target="parent"
                            position="bottom"
                            height="6rem"
                            strength={1}
                            divCount={2}
                            curve="bezier"
                            exponential={true}
                            opacity={1}
                            className="border-0"
                            />} */}
                            
                    </div>
                </div>
                <div className="w-1/6 lg:w-1/4 border-0 h-full"></div>
            </div>
        </div>
    )
}

const Content = ()=>
{
    const k = useWindowDimensions();

    return(
        <p className={`font-thin text-center ${k.width>768?"leading-[2.5]":"text-lg"}`}>
            • I'm Aadhavan Sharma, a B.Tech graduate in Information Technology from NIT Allahabad 2024 under C.S.E. department with a solid foundation in Software Development and problem-solving. I've interned as a Backend Development Intern, where I designed RESTful APIs and worked on middleware integration. My technical expertise includes JavaScript, TypeScript, ReactJS, and backend frameworks, alongside experience with tools like Git and cloud services enhancing my understanding of scalable applications and technology-driven solutions.I'm passionate about building efficient and user-friendly software, continuously learning new technologies, and contributing to impactful projects. My goal is to grow as a Software Development Engineer, focusing on innovative solutions and collaborating with teams that drive digital transformation.
        </p>
    )
}

export default About





{/* <div className="border-1 flex items-center justify-around grid-cols-3 h-64 mb-1">
    <div className="w-1/4 border-1 h-full bg-yellow-400"></div>
    <div className="w-1/2 border-1 h-full bg-green-600 grid grid-cols-2">
        <div className="border-2 h-full w-full"></div>
        <div className="border-2 h-full w-full"></div>
        <div className="border-2 h-full w-full"></div>
        <div className="border-2 h-full w-full"></div>
    </div>
    <div className="w-1/4 border-1 h-full bg-blue-500"></div>
</div> */}