import { useState } from "react";
import GradientText from "./GradientText"
import { SiGithub } from "react-icons/si";

const Footer = () => {

  const [copy,setCopied] = useState(false);
  const [isEmailCopied,setIsEmailCopied] = useState(false);
  const mobileNumber = "8447103820";
  const emailId = "aadhavansharma5700@gmail.com";
  const copyMobile = async ()=>{
    try{
      await navigator.clipboard.writeText(mobileNumber);
      // alert('Mobile Number Copied Successfully!');
      setCopied(true);
      setTimeout(()=>setCopied(false),1000);
    }
    catch(err)
    {
      alert(`Failed to Copy text -> ${err}`);
    }
  }
  const copyEmail = async ()=>{
    try{
      await navigator.clipboard.writeText(emailId);
      // alert('Mobile Number Copied Successfully!');
      setIsEmailCopied(true);
      setTimeout(()=>setIsEmailCopied(false),1000);
    }
    catch(err)
    {
      alert(`Failed to Copy text -> ${err}`);
    }
  }
  return (
    <footer
        className='border-3 h-fit p-4 bg-[#160627] flex justify-center'>
        <div className='grid grid-cols-1 items-center justify-center border-0 w-full h-full grid-rows-100'>
            <div className="grid items-center sm:grid-cols-100 lg:grid-cols-120 border-0 col-span-full row-span-90 w-full h-full">
              <div className="col-span-20 md:col-span-40 border-0 border-gray-200 h-full w-full p-4 flex-row items-stretch justify-center">
                <div className="border-0 flex justify-start mx-auto my-6">
                  <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={3}
                  showBorder={false}
                  className="border-0 text-2xl md:text-6xl lowercase flex "
                  >Aadhavan Sharma;
                  </GradientText>
                </div>
                <div className="border-0 m-6 font-serif w-[90%] text-gray-400 text-center">
                  {/* little desc  */}
                  Software Engineer | NIT Allhbad'24 Grad C.S.E. Dept. (I.T. Branch) | MERN Stack Developer | Java Developer | Problem Solving Oriented |
                </div>
              </div>
              <div className="col-span-40 grid grid-rows-5 border-0 border-blue-400 h-full w-full">
                {/* 
                    contact me list -
                    Contact Number
                    Email Id
                    LinkedIn Profile
                    Github Profile
                  */}
                  <div className="border-0 row-span-1 flex items-center justify-start border-green-400 underline-offset-4 underline text-purple-700">
                    <div>
                      <GradientText
                      colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                      animationSpeed={3}
                      showBorder={false}
                      className="border-0 p-2 text-lg md:text-3xl italic"
                      >Let's Connect
                      </GradientText>
                    </div>
                  </div>
                <div className="border-0 row-span-4 grid items-center bg-green-0 text-gray-400 font-serif h-full w-full">
                  <div className=" border-0 m-2 p-1 flex items-center justify-between">
                    <p>
                      Moblie Number 
                      <p className="text-xs">
                        (+91 844 710 3820)
                      </p>
                    </p>
                    <div onClick = {copyMobile} className="flex gap-2 cursor-pointer">
                      <p className={`text-xs flex items-center hover:underline ${copy?"text-green-500":"text-blue-500"}`}>{copy?"copied!":"copy"}</p>
                      <img src="copy.png" className="bg-gray-200 size-7 rounded" alt="" />
                    </div>
                  </div>
                  <div className=" border-0 m-2 p-1 flex items-center justify-between">
                    <p>
                      Email Id 
                      <p className="text-xs">  
                      (aadhavansharma5700@gmail.com)
                      </p>
                    </p>
                    <div onClick={copyEmail} className="flex cursor-pointer gap-2">
                      <p className={`text-xs flex hover:underline items-center ${isEmailCopied?"text-green-500":"text-blue-500"}`}>{isEmailCopied?"copied!":"copy"}</p>
                      <img className="size-7 rounded bg-gray-300" src = "copy.png"></img>
                    </div>
                  </div>
                  <div className=" border-0 m-2 flex items-center justify-between">
                    <a className="flex border-0 p-1 w-full items-center justify-between" href="https://www.linkedin.com/in/aadhavan-sharma" target="_blank">
                      <div className="flex items-center gap-1">
                        LinkedIn Profile
                        <img src="hyperlink.png" className="size-4" alt="" />
                      </div>
                      <img src="linkedin.png" className="size-9 border-0" alt="" />
                    </a>
                  </div>
                  <div className=" border-0 m-2 flex items-center justify-between">
                    <a className="flex border-0 p-1 w-full items-center justify-between" href="https://www.github.com/aadhavansharma" target="_blank">
                      <div className="flex items-center gap-1">
                        GitHub Profile
                        <img src="hyperlink.png" className="size-4" alt="" />
                      </div>
                        <SiGithub className="size-9 border-0"/>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-span-40 border-0 h-fit w-full border-green-500 p-4 flex items-center">
                {/* maybe collg image , idk  */}
                <img className="border-2 border-gray-600 rounded" src="main-building.jpg" alt="MNNIT" />
              </div>
            </div>
            <div className="border-0 row-span-10 flex items-center justify-center text-sm md:text-xl text-gray-400 h-full w-fit mx-auto">
                Made with ❤️ by &copy; Aadhavan Sharma
            </div>            
        </div>
    </footer>
  )
}

export default Footer