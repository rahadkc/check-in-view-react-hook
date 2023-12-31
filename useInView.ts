import {  RefObject, useEffect, useState } from "react";

interface UseInViewProps {
  inView: boolean;
  scrollUp: boolean;
  lastYPos: number;
  currentEle?: RefObject<HTMLElement>;
}

export const useInView = (elRef: RefObject<HTMLElement>, offset = 0): UseInViewProps => {
  const [inView, setInView] = useState(false);
  const [lastYPos, setLastYPos] = useState(0);
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    const elOffsetTop = elRef.current?.offsetTop;
    const vH = window.innerHeight;

    const handleScroll = () => {
      const ele = elRef.current?.getBoundingClientRect();

      if (elOffsetTop !== undefined && ele !== undefined) {
        const topTo = elOffsetTop + ele.height;
        const yPos = window.scrollY;

        const isInView = lastYPos < topTo && ele.y + offset < vH;
        const isScrollingUp = yPos < lastYPos;
        setInView(isInView);
        setLastYPos(yPos);
        setScrollUp(isScrollingUp);
      }
    };

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [elRef, lastYPos, offset]);

  return { inView, scrollUp, lastYPos, currentEle: elRef };
};

export default useInView;
