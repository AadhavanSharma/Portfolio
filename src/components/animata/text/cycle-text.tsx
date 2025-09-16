import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function CycleText() {
  const words = ["Click on Pdf for Pop Up", "Tap On barcode > visit My Profile"];
  const [index, setIndex] = useState(0);

  const total = words.length;
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 1300);
    return () => clearInterval(interval);
  }, [total]);

  return (
    <div>
      <span className="">
        <AnimatePresence mode="wait">
          <motion.h1
            key={`words_${index}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.1 }}
            className={`uppercase duration-500 text-sm border-0 h-6 flex items-center justify-center ${index===1?'md:text-sm':'md:text-xl'} text-gray-600/60 font-mono font-bold`}
          >
            {words[index]}
          </motion.h1>
        </AnimatePresence>
      </span>
    </div>
  );
}
