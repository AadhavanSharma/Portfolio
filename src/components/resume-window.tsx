"use client"
import * as React from "react"
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import useWindowDimensions from "@/hooks/window-dimensions"
import {MyResume} from "./my-resume"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import {MyResumeDesktop} from "./my-resume"

function DrawerDialogDemo() {
    
  const [open, setOpen] = React.useState(false)
  const {width} = useWindowDimensions();
  const isDesktop = width>=760;

  if(!isDesktop)
  {
    return (
        <Drawer open={open} onOpenChange={setOpen}>
        <Tooltip>
            <TooltipTrigger>
                <DrawerTrigger asChild>
                    <div className="flex items-center cursor-pointer border-spacing-0 rounded-2xl underline bg-blue-200/40 py-2 px-1 gap-1 relative right-2">Open Resume<img className="size-6" src="popup.png"></img></div>
                </DrawerTrigger>
            </TooltipTrigger>
            <TooltipContent className=" bg-black text-white h-10 p-3 flex rounded-2xl items-center">
                Click to Open PDF
            </TooltipContent>
        </Tooltip>
        <div>
            <DrawerContent className="z-3000 backdrop-blur">
                <div className="grid min-w-screen items-center grid-cols-1 justify-center">
                    <DrawerHeader className="text-left">
                        <DrawerTitle className="flex items-center justify-center rounded-2xl mx-auto bg-gray-100/60 text-white text-xl cursor-pointer w-60 h-10">My Resume</DrawerTitle>
                    </DrawerHeader>
                </div>
                <div className="h-full overflow-auto border-0 border-pink-300">
                <MyResume/>
                </div>
                <DrawerFooter className="pt-2 flex justify-center">
                    <DrawerClose className="" asChild>
                            <img src="cancel3.png" alt="close" className="bg-red-800/90 size-10 mx-auto rounded-full cursor-pointer" />
                    </DrawerClose>
                </DrawerFooter>                      
            </DrawerContent>
        </div>
    </Drawer>
    )
  }

  return (
      
      <Drawer open={open} onOpenChange={setOpen}>
        <Tooltip>
            <TooltipTrigger>
                <DrawerTrigger asChild>
                    <div className="cursor-pointer border-1 rounded-2xl underline bg-blue-100/40 px-4 py-1 flex gap-2 items-center">Open Resume <img className="size-6" src="popup.png"></img></div>
                </DrawerTrigger>
            </TooltipTrigger>
            <TooltipContent className=" bg-black text-white h-10 p-3 flex rounded-2xl items-center">
                Click to Open PDF
            </TooltipContent>
        </Tooltip>
        <div className={` ${open?"min-h-screen":""}`}>
            <DrawerContent className="z-3000 min-h-screen backdrop-blur ">
                <div className="grid border-0 min-w-screen grid-cols-3 justify-center">
                    <div className="mx-auto flex items-center border-0"></div>
                <DrawerHeader className="text-left">
                <DrawerTitle className="flex items-center justify-center rounded-2xl mx-auto bg-gray-300/80 cursor-pointer w-60 h-10 text-black text-xl">My Resume</DrawerTitle>
                </DrawerHeader>
            
                    <Tooltip >
                        <TooltipTrigger >
                            <DrawerFooter className="pt-2 flex justify-center">
                            <DrawerClose className="" asChild>
                                <img src="cancel3.png" alt="close" className="bg-red-800/80 size-10 mx-auto rounded-full cursor-pointer" />
                            </DrawerClose>
                            </DrawerFooter>
                        </TooltipTrigger>
                        <TooltipContent className=" z-3000 flex items-center justify-center bg-black text-white text-md h-9 w-16 rounded-2xl">
                            Close
                        </TooltipContent>
                    </Tooltip>
                </div>
                <div className="h-full overflow-y-auto border-0 border-pink-300">
                <MyResumeDesktop/>
                </div>
            </DrawerContent>
        </div>
    </Drawer>
  )
}



const ResumeWindow = () => {
    return (
        <DrawerDialogDemo></DrawerDialogDemo>
    )
}

export default ResumeWindow

//   if (!isDesktop) {
//     return (
//       <Dialog  open={open} onOpenChange={setOpen}>
//         <DialogTrigger asChild>
//         <Button variant="link" className="bg-yellow-50/60 cursor-pointer border-1 rounded-2xl underline">Read CV<img className="size-6" src="popup.png"></img></Button>
//         </DialogTrigger>

//         <DialogContent className=" items-center justify-center bg-gray-500/90 border-2 rounded-3xl h-95/100 min-w-screen">

//             <DialogHeader className="border-0 h-min">
//                 <DialogTitle className="bg-blue-50 rounded-2xl h-8 w-1/2 mx-auto flex items-center justify-center">My Resume</DialogTitle>
//             </DialogHeader>

//             <DialogDescription className="h-12/13 border-green-0 mx-auto border-0 overflow-y-auto">
//             <MyResume/>
//             </DialogDescription>

//             <DialogClose className="bg-red-700/60 text-white border-black rounded-2xl border-2 h-10">
//                 Close PDF
//             </DialogClose>
//         </DialogContent>

//       </Dialog>
//     )
//   }