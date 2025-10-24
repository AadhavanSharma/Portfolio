import LogoLoop from './ui/LogoLoop';
import { isDesktop } from 'react-device-detect';

import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiSpringboot,
  SiGradle,
  SiHibernate,
  SiVite,
  SiRabbitmq,
  SiGooglecloud,
  SiGit,
  SiGithub,
  SiMysql,
  SiReactquery // using this as a close icon for tanstack query
} from "react-icons/si";

const techLogos = [
{ node: <SiC color="#A8B9CC" />, title: "C", href: "https://learn.microsoft.com/en-us/cpp/c-language/?view=msvc-170" },
  { node: <SiCplusplus color="#00599C" />, title: "C++", href: "https://isocpp.org/" },
  { node: <SiJavascript color="#F7DF1E" />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiTypescript color="#3178C6" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiPython color="#3776AB" />, title: "Python", href: "https://www.python.org" },
  { node: <SiMongodb color="#47A248" />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiExpress color="#000000" />, title: "Express.js", href: "https://expressjs.com" },
  { node: <SiNodedotjs color="#339933" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiReact color="#61DAFB" />, title: "React.js", href: "https://react.dev" },
  { node: <SiTailwindcss color="#38BDF8" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiHtml5 color="#E34F26" />, title: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss3 color="#1572B6" />, title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiSpringboot color="#6DB33F" />, title: "Spring Boot", href: "https://spring.io/projects/spring-boot" },
  { node: <SiGradle color="#02303A" />, title: "Gradle", href: "https://gradle.org" },
  { node: <SiHibernate color="#59666C" />, title: "Hibernate", href: "https://hibernate.org" },
  { node: <SiVite color="#646CFF" />, title: "Vite", href: "https://vitejs.dev" },
  { node: <SiRabbitmq color="#FF6600" />, title: "RabbitMQ", href: "https://www.rabbitmq.com" },
  { node: <SiGooglecloud color="#4285F4" />, title: "GCP", href: "https://cloud.google.com" },
  { node: <SiGit color="#F05032" />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub color="#181717" />, title: "GitHub", href: "https://github.com" },
  { node: <SiMysql color="#4479A1" />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiReactquery color="#FF4154" />, title: "Tanstack Query", href: "https://tanstack.com/query/latest/" }
];

// java
// maven
// aws


function LogoCircle() {
  return (
    <div className='' style={{ position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        // logos={imageLogos}
        logos={techLogos}
        speed={80}
        direction="left"
        logoHeight={50}
        gap={isDesktop?60:40}
        pauseOnHover
        scaleOnHover
        // fadeOut
        // fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
}

export default LogoCircle;