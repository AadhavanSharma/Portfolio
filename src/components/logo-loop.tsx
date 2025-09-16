import LogoLoop from './ui/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiAgora } from 'react-icons/si';
import { isDesktop } from 'react-device-detect';
const techLogos = [
//   { node: <SiReact />, title: "React", href: "https://react.dev" },
//   { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
//   { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
//   { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
//   { node: <SiAgora />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiReact color="#61DAFB" />, title: "React", href: "https://react.dev" },
{ node: <SiNextdotjs color="#000000" />, title: "Next.js", href: "https://nextjs.org" },
{ node: <SiTypescript color="#3178C6" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
{ node: <SiTailwindcss color="#38BDF8" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
{ node: <SiAgora color="#005EFF" />, title: "Agora", href: "https://agora.io" }
];


// Alternative with image sources
// const imageLogos = [
//   { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
//   { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
//   { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
// ];

function LogoCircle() {
  return (
    <div className='border-0 border-red-400 ' style={{ position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        // logos={imageLogos}
        logos={techLogos}
        speed={80}
        direction="left"
        logoHeight={50}
        gap={isDesktop?60:40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
}

export default LogoCircle;