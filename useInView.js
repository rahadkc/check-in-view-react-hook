import { useEffect, useState } from 'react'

export const useInView = (elRef, offset = 0) => {
  const [inView, setInView] = useState(true)
  const [lastYPos, setLastYPos] = useState(0)
  const [scrollUp, setScrollUp] = useState(false)

  useEffect(() => {
    const elOffsetTop = elRef.current?.offsetTop
    const el = elRef.current?.getBoundingClientRect()
    const topTo = elOffsetTop + el?.height
    const vH = window.innerHeight

    
    function handleScroll() {
      const yPos = window.scrollY
      const isInView = ((lastYPos < topTo) && ((el.y + offset) < vH)) 
      const isScrollingUp = yPos < lastYPos
      setInView(isInView)
      setLastYPos(yPos)
      setScrollUp(isScrollingUp)
    }
    
    window.addEventListener('scroll', handleScroll, false)
    return () => {
      window.removeEventListener('scroll', handleScroll, false)
    }
  }, [lastYPos])

  return {inView, scrollUp, lastYPos}
}

export default useInView
