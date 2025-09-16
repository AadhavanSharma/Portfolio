import { Button } from "./ui/button"
import useWindowDimensions from "../hooks/window-dimensions";
import Speeddial from "./animata/fabs/speed-dial";

type HeaderProps = {
 aboutRef : React.RefObject<HTMLDivElement | null>;
 academicsRef : React.RefObject<HTMLDivElement | null>;
 workExpRef : React.RefObject<HTMLDivElement | null>;
 projectsRef : React.RefObject<HTMLDivElement | null>;
 certificatesRef : React.RefObject<HTMLDivElement | null>;
};

export function NonDesktop({aboutRef,academicsRef, workExpRef, projectsRef, certificatesRef}:HeaderProps){
    const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToAcademics = () => {
    academicsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToWorkExp = () => {
    workExpRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToCertificates = () => {
    certificatesRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    // "C:\Users\LENOVO PC\OneDrive\Desktop\assignments\portfolio-f\portfolio\public\about.png"
    return (
        <Speeddial
        direction = "down"
        actionButtons={[
    {
      action: scrollToAbout,
      icon: < img className="w-7.5" src = "about.png"/>,
      key: 'about',
      label: 'About'
    },
    {
      action: scrollToAcademics,
      icon: <img className="w-7.5" src = "academics.png" />,
      key: 'academics',
      label: 'Academics'
    },
    {
      action: scrollToWorkExp,
      icon: <img className="w-7.5" src = "workExp.png"/>,
      key: 'workExp',
      label: 'WorkExp'
    },
    {
      action: scrollToProjects,
      icon: <img className="w-7.5" src="projects.png" />,
      key: 'projects',
      label: 'Projects'
    },
    {
      action: scrollToCertificates,
      icon: <img className="w-7.5" src= "certificates.png" />,
      key: 'certificates',
      label: 'Certificates'
    }
  ]}/>
    )
}

type DesktopProps = {
    onAbout : ()=>void;
    onAcademics : ()=>void;
    onWorkExp : ()=>void;
    onProjects : ()=>void;
    onCertificates : ()=>void;
};

export function Desktop({onAbout, onAcademics, onWorkExp, onProjects, onCertificates}:DesktopProps){
//     const scrollTo = (ref) => {
//     ref.current.scrollIntoView({ behavior: "smooth" });
//   };

    const k = useWindowDimensions();
    const styl = "border-b-2 border-white hover:border-black hover:bg-gray-50 rounded-none h-full m-auto text-md lg:text-md transition-all duration-300 cursor-pointer";
    return(
    <div className="grid h-full grid-cols-5 border-green-800 border-0">
        <Button onClick = {onAbout} className={`${styl}`}>About</Button>
        <Button onClick = {onAcademics} className={`${styl}`}>Academics</Button>
        <Button onClick = {onWorkExp} className={`${styl}`}>{k.width>1400?"Work Experience":"Work Exp"}</Button>
        <Button onClick = {onProjects} className={`${styl}`}>Projects</Button>
        <Button onClick = {onCertificates} className={`${styl}`}>Certificates</Button>
    </div>
    )
}





// --------------------   ***    ------------------------------

// import PillNav from './PillNav';
// import logo from '/logo.png';

// const PillNavbar = () => {
//   return (
//         <PillNav
//         logo={logo}
//         logoAlt="AS"
//         items={[
//             { label: 'About', href: 'https://www.zcxv.com' },
//             { label: 'Academics', href: 'https://www.xyz.com' },
//             { label: 'Projects', href: 'https://www.asd.com' },
//             { label: 'Certifications', href: 'https://www.xyz.com' },
//             { label: 'Contact', href: 'https://www.xyz.com' },
//         ]}
//         activeHref="/"
//         className="custom-nav"
//         ease="power2.easeOut"
//         baseColor="#000000"
//         pillColor="#ffffff"
//         hoveredPillTextColor="#ffffff"
//         pillTextColor="#000000"
//         />
//   )
// }

// export default PillNavbar