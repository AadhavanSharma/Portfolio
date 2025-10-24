import TextType from "./TextType";

export const CursorText = ()=>{
    return (
        <>
        {/* <p className="text-4xl font-extrabold text-green-900 border-0 absolute left-[22%]">&gt;</p> */}
    <TextType
        text={[". Aadhavan Sharma |", ".  .  . Software Engineer |", ".  .  .  Welcome onboard |"]}
        typingSpeed={60}
        pauseDuration={1200}
        showCursor={true}
        cursorCharacter="|"
        style={{fontFamily:"Michroma", color:"white"}}
        // className='Michroma text-5xl'
        className=' text-white absolute left-[20%] lg:left-[30%] border-0 sm:text-lg md:text-2xl lg:text-5xl font-bold shadow-xs'
        />
        </>)
    }