
import { GCPIcon, GCPPopUp } from "@/components/gcp-certificate";
import { PMIcon, PMPopUp } from "@/components/pm-certificate";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { forwardRef } from "react";
import '../index.css'
import CycleText from "@/components/animata/text/cycle-text";

type CertificatesProps = {};

const Certificates = forwardRef<HTMLDivElement,CertificatesProps>((props, ref) => {
    props;
  return (
    <div ref = {ref} className="scroll-mt-[118px] border-0">
        <div style = {{fontFamily:"English Towne"}} className="border-0 text-gray-300 flex items-center justify-center h-10 text-5xl my-4">
            Certifications
        </div>
        <div className=" grid md:flex md:items-center md:justify-evenly grid-cols-1 md:grid-cols-2 p-4 gap-4 border-y-0 border-gray-300 bg-gray-0 h-128 md:h-fit">

            <div className="w-fit bg-gray-300/80 p-2 rounded text-center shine-effect shadow-2xl">
                <Dialog>
                    <DialogTrigger>
                        <div className="uppercase lg:text-lg text-gray-600/60 font-bold font-mono">
                            Click on Pdf for Pop Up</div>
                        <PMIcon/>
                    </DialogTrigger>
                    <div>
                    <DialogContent className="z-3000 md:min-h-[80%] backdrop-blur-xl min-w-[80%] bg-gray-300/20 flex-row items-center">
                        <DialogHeader className="border-1 md:px-6 rounded bg-gray-300/40 mx-auto">
                            <DialogTitle style = {{fontFamily:"mono"}} className="text-black text-xl md:text-3xl">
                                Product Management Certificate!
                            </DialogTitle>
                        </DialogHeader>
                        <DialogDescription className="text-gray-200 flex-row items-center justify-center mx-auto border-0 rounded border-black">
                            <PMPopUp/>
                            <p className="border-1 rounded-2xl my-1 text-gray-200 p-2 text-left md:text-lg bg-gray-500/40">
                                Completed a specialized program focused on breaking into product management roles. Learned core skills like roadmap planning, stakeholder management, and prioritization. Gained practical insights into building user-centric products and working cross-functionally with engineering and design teams.
                            </p>
                        </DialogDescription>
                </DialogContent>
                    </div>
                </Dialog>
            </div>
                        <div className="w-fit bg-gray-300/80 p-2 rounded text-center shine-effect shadow-2xl ">
                <Dialog>
                    <DialogTrigger className="border-green-500">
                        <CycleText />
                        {/* <div className="uppercase lg:text-2xl text-gray-600/60 font-mono font-bold">
                            Click on Pdf for Pop Up</div> */}
                        <GCPIcon/>
                        {/* <div className="uppercase text-gray-500/90 font-bold">
                            Tap On barcode &gt; visit My Profile
                        </div> */}
                    </DialogTrigger>
                    <div>
                    <DialogContent className="z-3000 md:min-h-[80%] backdrop-blur-xl min-w-[80%] bg-gray-300/20 flex-row items-center">
                        <DialogHeader className="border-1 md:px-6 rounded bg-gray-300/40 mx-auto">
                            <DialogTitle style = {{fontFamily:"mono"}} className="text-black text-xl md:text-3xl">
                                Google Cloud Platform Certificate!
                            </DialogTitle>
                        </DialogHeader>
                        <DialogDescription className="text-gray-200 flex-row items-center justify-center mx-auto border-0 border-black ">
                            <GCPPopUp/>
                            <p className="border-1 rounded-2xl my-1 text-gray-200 p-2 text-left md:text-lg bg-gray-500/40">
                                Completed the Google Cloud Computing Foundations series, gaining hands-on experience with core Google Cloud services. Developed proficiency in managing infrastructure, and utilizing cloud-native tools. Acquired foundational knowledge in cloud computing, big data, and machine learning, aligning with industry best practices.
                            </p>
                        </DialogDescription>
                </DialogContent>
                    </div>
                    
                </Dialog>
            </div>
        </div>
    </div>
  )
});

export default Certificates