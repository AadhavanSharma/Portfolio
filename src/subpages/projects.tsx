import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import { forwardRef } from "react";

type ProjectProps = {};

const Projects = forwardRef<HTMLDivElement,ProjectProps>((props, ref) => {
    props;
  return (
    <div ref = {ref} className="w-8/10 mx-auto scroll-mt-[140px] pt-1 mb-8">
        <div style = {{fontFamily:"English Towne"}}
        className="border-y-2 border-gray-400 p-0 w-full absolute left-0 text-center text-3xl md:text-4xl bg-gray-0"
        >
            My Projects
        </div>
        <div className="grid grid-cols-1 border-x-2 border-gray-400 px-2 md:px-0 lg:grid-cols-2 mx-auto py-20 w-full items-center justify-center gap-6">
            {/* Skymate  */}
            {/* patient-reg-portal  */}
            {/* Course Selling Website Backend  */}
            {/* AadyPin  */}
            {/* Portfolio  */}
            {/* Musify  */}
            {/* Computational Offloading  */}
            <Card id="project-card" className="border-1 border-red-200/80 shadow-2xl mx-auto lg:w-7/8 col-span-1 text-red-900">
                <CardHeader>
                    <CardTitle><img className="size-16" src="project-icons/cloudy.png" alt="skymate" /></CardTitle>
                    <CardDescription className="text-lg md:text-3xl">Skymate</CardDescription>
                    <CardAction className="my-auto"><a href="https://skymate-as.netlify.app" target="_blank" ><img className="size-14 p-3 bg-white/20 border-0 rounded-full" src="external-link.png"  alt="external-link" /></a></CardAction>
                </CardHeader>
                <CardContent>
                    <p className=" font-initial">This project facilitates/provides all information regarding climate and weather of any city, using Typescript, TailwindCss, ReactJs, TanStack Query, ShadcnUI, openweathermap api.</p>
                </CardContent>
                <CardFooter className="gap-4">
                    <div>Tech Stack :</div>
                    <div className="*:data-[slot=avatar]:rounded-full *:data-[slot=avatar]:border-2 *:data-[slot=avatar]:border-gray-300 flex -space-x-2">
                        <Avatar>
                            <AvatarImage src="https://github.com/github.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="https://github.com/reactjs.png" alt="@leerob" />
                            <AvatarFallback>LR</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage
                                src="https://raw.githubusercontent.com/github/explore/refs/heads/main/topics/typescript/typescript.png"
                                alt="@evilrabbit"
                            />
                            <AvatarFallback>ER</AvatarFallback>
                        </Avatar>
                    </div>
                </CardFooter>
            </Card>
            <Card id="project-card" className="border-1 border-red-200/80 shadow-2xl mx-auto lg:w-7/8 col-span-1 text-red-900">
                <CardHeader>
                    <CardTitle><img className="size-16" src="project-icons/caduceus.png" alt="skymate" /></CardTitle>
                    <CardDescription className="text-lg md:text-3xl">Patient Registration Portal</CardDescription>
                    <CardAction className="my-auto"><a href="https://patient-reg-portal-medblocks.netlify.app/" target="_blank"><img className="size-14 p-3 bg-white/20 border-0 rounded-full" src="external-link.png"  alt="external-link" /></a></CardAction>
                </CardHeader>
                <CardContent>
                    <p>A modern, client-side web application for managing patient data — built using React, TypeScript, Tailwind CSS, and Shadcn/UI components. Designed for speed, simplicity, and seamless querying.</p>
                </CardContent>
                <CardFooter className="gap-4">
                    <div>Tech Stack :</div>
                    <div className="*:data-[slot=avatar]:rounded-full *:data-[slot=avatar]:border-2 *:data-[slot=avatar]:border-gray-300 flex -space-x-2">
                        <Avatar>
                            <AvatarImage src="https://github.com/github.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="https://github.com/reactjs.png" alt="@leerob" />
                            <AvatarFallback>LR</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage
                                src="https://raw.githubusercontent.com/github/explore/refs/heads/main/topics/typescript/typescript.png"
                                alt="@evilrabbit"
                            />
                            <AvatarFallback>ER</AvatarFallback>
                        </Avatar>
                    </div>
                </CardFooter>
            </Card>
            <Card id="project-card" className="border-1 border-red-200/80 shadow-2xl mx-auto lg:w-7/8 col-span-1 text-red-900">
                <CardHeader>
                    <CardTitle><img className="size-16" src="project-icons/backend.png" alt="skymate" /></CardTitle>
                    <CardDescription className="text-lg md:text-3xl">Coursera Backend</CardDescription>
                    <CardAction className="my-auto"><a href="https://www.github.com/aadhavansharma" target="_blank"><img className="size-14 p-3 bg-white/20 border-0 rounded-full" src="external-link.png"  alt="external-link" /></a></CardAction>
                </CardHeader>
                <CardContent>
                    <p>This project consists of RestAPIs to connect client side requests to access, upload, and modify data at the database.
                        which facilitates users to access available and bought courses and admins to create and upload courses on the website.
                    </p>
                </CardContent>
                <CardFooter className="gap-4">
                    <div>Tech Stack :</div>
                    <div className="*:data-[slot=avatar]:rounded-full *:data-[slot=avatar]:border-2 *:data-[slot=avatar]:border-gray-300 flex -space-x-2">
                        <Avatar>
                            <AvatarImage src="https://github.com/github.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="https://github.com/reactjs.png" alt="@leerob" />
                            <AvatarFallback>LR</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage
                                src="https://raw.githubusercontent.com/github/explore/refs/heads/main/topics/typescript/typescript.png"
                                alt="@evilrabbit"
                            />
                            <AvatarFallback>ER</AvatarFallback>
                        </Avatar>
                    </div>
                </CardFooter>
            </Card>
            <Card id="project-card" className="border-1 border-red-200/80 shadow-2xl mx-auto lg:w-7/8 col-span-1 text-red-900">
                <CardHeader>
                    <CardTitle><img className="size-16" src="project-icons/travel-pin.png" alt="travel-pin-app" /></CardTitle>
                    <CardDescription className="text-lg md:text-3xl">Travel Pin App</CardDescription>
                    <CardAction className="my-auto"><a href="https://github.com/AadhavanSharma/AadyPin" target="_blank" ><img className="size-14 p-3 bg-white/20 border-0 rounded-full" src="external-link.png"  alt="external-link" /></a></CardAction>
                </CardHeader>
                <CardContent>
                    <p>This is a full Stack project which lets visitors to checkout most visited tourisitic locations and reviews about them and can also contribute by joining the community via signing up.</p>
                </CardContent>
                <CardFooter className="gap-4">
                    <div>Tech Stack :</div>
                    <div className="*:data-[slot=avatar]:rounded-full *:data-[slot=avatar]:border-2 *:data-[slot=avatar]:border-gray-300 flex -space-x-2">
                        <Avatar>
                            <AvatarImage src="https://github.com/github.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="https://github.com/reactjs.png" alt="@leerob" />
                            <AvatarFallback>LR</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage
                                src="https://raw.githubusercontent.com/github/explore/refs/heads/main/topics/typescript/typescript.png"
                                alt="@evilrabbit"
                            />
                            <AvatarFallback>ER</AvatarFallback>
                        </Avatar>
                    </div>
                </CardFooter>
            </Card>
            <Card id="project-card" className="border-1 border-red-200/80 shadow-2xl mx-auto lg:w-7/8 col-span-1 text-red-900">
                <CardHeader>
                    <CardTitle><img className="size-12" src="https://raw.githubusercontent.com/AadhavanSharma/Musify/refs/heads/main/musicon.ico" alt="musify" /></CardTitle>
                    <CardDescription className="text-lg md:text-3xl">Musify</CardDescription>
                    <CardAction className="my-auto"><a href="https://musify-by-aadhavan-sharma.netlify.app/" target="_blank" ><img className="size-14 p-3 bg-white/20 border-0 rounded-full" src="external-link.png"  alt="external-link" /></a></CardAction>
                </CardHeader>
                <CardContent>
                    <p>
                        <p className="font-semibold inline">Music Player Web App</p> - A browser-based music player built with HTML, CSS, and JavaScript.
                        Features include custom audio controls, playlist support, play/pause functionality, and a visually appealing UI with real-time progress tracking.
                    </p>
                </CardContent>
                <CardFooter className="gap-4">
                    <div>Tech Stack :</div>
                    <div className="*:data-[slot=avatar]:rounded-full *:data-[slot=avatar]:border-2 *:data-[slot=avatar]:border-gray-300 flex -space-x-2">
                        <Avatar>
                            <AvatarImage src="https://github.com/github.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="https://github.com/reactjs.png" alt="@leerob" />
                            <AvatarFallback>LR</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage
                                src="https://raw.githubusercontent.com/github/explore/refs/heads/main/topics/typescript/typescript.png"
                                alt="@evilrabbit"
                            />
                            <AvatarFallback>ER</AvatarFallback>
                        </Avatar>
                    </div>
                </CardFooter>
            </Card>
            <Card id="project-card" className="border-1 border-red-200/80 shadow-2xl mx-auto lg:w-7/8 col-span-1 text-red-900">
                <CardHeader>
                    <CardTitle><img className="size-16" src="project-icons/portfolio.png" alt="skymate" /></CardTitle>
                    <CardDescription className="text-lg md:text-3xl">Portfolio</CardDescription>
                    <CardAction className="my-auto"><a href="https://aadhavan-sharma.netlify.app" target="_blank" ><img className="size-14 p-3 bg-white/20 border-0 rounded-full" src="external-link.png"  alt="external-link" /></a></CardAction>
                </CardHeader>
                <CardContent>
                    <p><p className="font-semibold inline text-lg">Personal Portfolio Website</p> - A responsive, modern website built with [React/TypeScript] to showcase my projects, skills, and experience. Designed for fast loading and smooth navigation, with clean UI and reusable components.</p>
                </CardContent>
                <CardFooter className="gap-4">
                    <div>Tech Stack :</div>
                    <div className="*:data-[slot=avatar]:rounded-full *:data-[slot=avatar]:border-2 *:data-[slot=avatar]:border-gray-300 flex -space-x-2">
                        <Avatar>
                            <AvatarImage src="https://github.com/github.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="https://github.com/reactjs.png" alt="@leerob" />
                            <AvatarFallback>LR</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage
                                src="https://raw.githubusercontent.com/github/explore/refs/heads/main/topics/typescript/typescript.png"
                                alt="@evilrabbit"
                            />
                            <AvatarFallback>ER</AvatarFallback>
                        </Avatar>
                    </div>
                </CardFooter>
            </Card>
            <Card id="project-card" className="border-1 border-red-200/80 shadow-2xl mx-auto lg:w-7/8 col-span-1 text-red-900">
                <CardHeader>
                    <CardTitle><img className="size-16" src="project-icons/offloading.png" alt="skymate" /></CardTitle>
                    <CardDescription className="text-lg md:text-3xl">Computational Offloading</CardDescription>
                    <CardAction className="my-auto"><a href="https://github.com/AadhavanSharma/Computational_offloading_dec_making" target="_blank" ><img className="size-14 p-3 bg-white/20 border-0 rounded-full" src="external-link.png"  alt="external-link" /></a></CardAction>
                </CardHeader>
                <CardContent>
                    <p>Optimizing Computing Offloading with Q-Learning - based reinforcement learning model in Python using Jupyter Notebook to optimize resource utilization in computing offloading. The algorithm learns optimal decision policies for dynamically selecting offloading strategies, resulting in improved efficiency and reduced computational overhead.</p>
                </CardContent>
                <CardFooter className="gap-4">
                    <div>Tech Stack :</div>
                    <div className="*:data-[slot=avatar]:rounded-full *:data-[slot=avatar]:border-2 *:data-[slot=avatar]:border-gray-300 flex -space-x-2">
                        <Avatar>
                            <AvatarImage src="https://github.com/github.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="https://github.com/reactjs.png" alt="@leerob" />
                            <AvatarFallback>LR</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage
                                src="https://raw.githubusercontent.com/github/explore/refs/heads/main/topics/typescript/typescript.png"
                                alt="@evilrabbit"
                            />
                            <AvatarFallback>ER</AvatarFallback>
                        </Avatar>
                    </div>
                </CardFooter>
            </Card>
            <Card id="project-card" className="border-1 border-red-200/80 shadow-2xl mx-auto lg:w-7/8 col-span-1 text-red-900">
                <CardHeader>
                    <CardTitle className="">
                        {/* <img className="size-16" src="project-icons/offloading.png" alt="skymate" /> */}
                        <MessageCircle className="size-12 text-blue-700 "/>
                    </CardTitle>
                    <CardDescription className="text-lg md:text-3xl">Discourse - Chat Application</CardDescription>
                    <CardAction className="my-auto"><a href="https://github.com/AadhavanSharma/Computational_offloading_dec_making" target="_blank" ><img className="size-14 p-3 bg-white/20 border-0 rounded-full" src="external-link.png"  alt="external-link" /></a></CardAction>
                </CardHeader>
                <CardContent>
                    <p>Optimizing Computing Offloading with Q-Learning - based reinforcement learning model in Python using Jupyter Notebook to optimize resource utilization in computing offloading. The algorithm learns optimal decision policies for dynamically selecting offloading strategies, resulting in improved efficiency and reduced computational overhead.</p>
                </CardContent>
                <CardFooter className="gap-4">
                    <div>Tech Stack :</div>
                    <div className="*:data-[slot=avatar]:rounded-full *:data-[slot=avatar]:border-2 *:data-[slot=avatar]:border-gray-300 flex -space-x-2">
                        <Avatar>
                            <AvatarImage src="https://github.com/github.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="https://github.com/reactjs.png" alt="@leerob" />
                            <AvatarFallback>LR</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage
                                src="https://raw.githubusercontent.com/github/explore/refs/heads/main/topics/typescript/typescript.png"
                                alt="@evilrabbit"
                            />
                            <AvatarFallback>ER</AvatarFallback>
                        </Avatar>
                    </div>
                </CardFooter>
            </Card>
        </div>
        <div className="border-t-2 border-gray-400 mb-0 w-full absolute left-0 "></div>
    </div>
  )
});

export default Projects


// template for testing area

{/* <div ref = {ref} className="scroll-mt-[118px]">
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
</div> */}