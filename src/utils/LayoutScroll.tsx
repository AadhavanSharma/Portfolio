import { useEffect, useState } from "react";

export const useElementScroll = (
  elementRef: React.RefObject<HTMLElement | null>
) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const element = elementRef.current;

  useEffect(() => {
    if (!element) return;

    const handleScroll = () => {
      setScrollPosition(element.scrollTop);
    };

    element.addEventListener("scroll", handleScroll);

    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, [element]);

  return scrollPosition;
};
