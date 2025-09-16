"use client";

import { useEffect, useRef, useState } from "react";

import '../../index.css'

import { cn } from "@/lib/utils";
import { Sun } from "lucide-react";

function Beam({ index }: { index: number }) {
  const flag = index % 8 === 0;
  return (
    <div
      // className={cn("h-full text-black border-0 bg-red-0", {
      //   "[--delay:4s]": flag,
      //   "[--delay:3s]": !flag,
      // })}
      className="h-48 w-6 border-0 animate-meteor"
      style={{
        width: "6px",
        transform: "translateY(-40%) translateX(-50%)",
        animationDelay: `${index*2}s`,
        animationDuration: flag ? "3s" : "6s",
      } as React.CSSProperties}
    >
      <div
        style={{
          clipPath: "polygon(54% 0, 54% 0, 90% 100%, 20% 100%)",
        }}
        className={cn("w-full border-1", {
          "h-8": flag,
          "h-12": !flag,
        })}
      >
        <div className={`h-full w-full ${flag?"bg-blue-700":"bg-yellow-500"}`} />
        {/* bg-gradient-to-b from-slate-900 via-slate-950 via-75% to-slate-900 */}
        {/*bg-gradient-to-b from-neutral-50/50 via-neutral-100 via-75% to-neutral-50 */}
      </div>
        <Sun className={`size-4 ${flag?"text-cyan-600":"text-yellow-600"}`} style = {{transform: "translateY(-50%) translateX(-38%)",}}></Sun>
    </div>
  );
}   

function useGridCount() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) {
        return;
      }
      const width = rect.width;
      const cellSize = 40;
      setCount(Math.ceil(width / cellSize));
    };

    updateCount();

    // Can be debounced if needed
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  return {
    count,
    containerRef,
  };
}

function Background() {
  const { count, containerRef } = useGridCount();

  return (
    <div
      ref={containerRef}
      className="-z-1 absolute inset-0 flex h-full w-full flex-row justify-between"
        // bg-gradient-to-t from-indigo-500 to-indigo-950
    >
      <div
        // style={{
        //   background:
        //     "linear-gradient(50% 50% at 50% 50%,#072a39 0%,rgb(7,42,57) 50%,rgba(7,42,57,0) 100%)",
        // }}
        className="absolute inset-0 top-1/2 h-full w-full rounded-full opacity-40"
      />
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="relative h-full w-px rotate-12 bg-gray-200 bg-opacity-10">
          {(1 + i) % 4 === 0 && <Beam index={i + 1} />}
        </div>
      ))}
    </div>
  );
}

export default function AnimatedBeam({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(" relative w-full overflow-hidden", className)}>
      <Background />
      <div className="relative h-full w-full">{children}</div>
    </div>
  );
}
