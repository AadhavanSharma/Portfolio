"use client";

import React, { useState } from "react";
import { Rows3 } from "lucide-react";
import { isMobileOnly } from "react-device-detect";
import useWindowDimensions from "@/hooks/window-dimensions";


interface SpeedialProps {
  direction: string;
  actionButtons: Array<{
    icon: React.ReactNode;
    label: string;
    key: string;
    action: () => void;
  }>;
}

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  direction: string;
  handleMouseLeave : ()=>void;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children, direction,handleMouseLeave }) => {
  const [visible, setVisible] = useState(true);
    const {width} = useWindowDimensions();
  const showTooltip = () => {
    setVisible(true);
    console.log(width<760);
    if(isMobileOnly)
    {handleMouseLeave();}   
    }
//   const hideTooltip = () => setVisible(false);
//   const closeNav = ()=>{};

{/*
  ${
            direction === "up" || direction === "down"
              ? "absolute right-full top-1/2 z-10 mr-2 -translate-y-1/2"
              : "absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2"
          }
  */}
  return (
    <div onMouseEnter={showTooltip} className="relative ">
      {children}
      {visible && (
        <div
          className={`transform px-2 py-1 bg-gray-200 text-sm font-semibold ${
            direction === "up" || direction === "down"
              ? " w-[100%] px-10 mt-1 absolute border-0 z-10 h-5 flex items-center justify-center"
              : "absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2"
          } text-black rounded border-y-1 text-center`}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default function Speeddial({ direction, actionButtons }: SpeedialProps) {
    const [isHovered, setIsHovered] = useState(false);

  const getAnimation = () => {
    switch (direction) {
      case "up":
        return "origin-down flex-col order-0";
      case "down":
        return "origin-top flex-col order-2";
      case "left":
        return "origin-right order-0";
      case "right":
        return "origin-left order-2";
      default:
        return "";
    }
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const getGlassyClasses = () => {
    return "backdrop-filter text-white backdrop-blur-xl bg-black rounded-2xl transition-all duration-300";
  };

  //customize your action buttons here

  return (
    <div
      onMouseLeave={handleMouseLeave}
      className={`absolute top-0 right-10 flex w-fit items-center gap-3 ${
        direction === "up" || direction === "down" ? "flex-col" : "flex-row"
      }`}
    >
      <button
        onMouseEnter={handleMouseEnter}
        className={`${getGlassyClasses()} ${/*order-0*/''}hover:text-black cursor-pointer relative bottom-90 order-10 flex items-center p-3 text-gray-900 transition-all duration-300 hover:bg-slate-100`}
      >
        {/* <Plus className="" size={20} /> */}
        <Rows3 className= "w-7.5" />
      </button>

      {/* Speed Dial Actions */}
      <div
        className={`${
          isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0 "
        } relative top-25 flex items-center gap-7 transition-all duration-500 ease-in-out ${getAnimation()}`}
      >
        {actionButtons.map((action, index) => (
          <Tooltip text={action.label} key={index} direction={direction} handleMouseLeave = {handleMouseLeave}>
            <button
              key={index}
              onClick={action.action}
              className={`${getGlassyClasses()} hover:text-black flex items-center p-3 text-gray-800 transition-all duration-300 cursor-pointer`}
            >
              {action.icon}
            </button>
            </Tooltip>
        ))}
      </div>
    </div>
  );
}
