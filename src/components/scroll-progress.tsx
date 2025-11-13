import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      // Get scroll position - works with both Lenis and native scroll
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(Math.min(100, Math.max(0, scrollPercent)))
    }

    // Update on scroll with requestAnimationFrame for smooth updates
    const handleScroll = () => {
      requestAnimationFrame(updateScrollProgress)
    }

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Also update on resize
    window.addEventListener('resize', handleScroll, { passive: true })

    // Initial update
    updateScrollProgress()

    // Update periodically to catch Lenis smooth scroll
    const interval = setInterval(updateScrollProgress, 16) // ~60fps

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      clearInterval(interval)
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

