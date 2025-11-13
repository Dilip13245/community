import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      // Use Lenis scroll position if available, otherwise fallback to window
      const scrollTop = (window as any).lenis?.scroll || window.pageYOffset || document.documentElement.scrollTop
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(Math.min(100, Math.max(0, scrollPercent)))
    }

    // Update on scroll
    const handleScroll = () => {
      requestAnimationFrame(updateScrollProgress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Also listen to Lenis scroll events if available
    const lenis = (window as any).lenis
    if (lenis) {
      lenis.on('scroll', updateScrollProgress)
    }

    // Initial update
    updateScrollProgress()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (lenis) {
        lenis.off('scroll', updateScrollProgress)
      }
    }
  }, [])

  return (
    <div 
      className="scroll-progress" 
      style={{ width: `${scrollProgress}%` }}
      aria-hidden="true"
    />
  )
}

