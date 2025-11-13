import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import { useLocation } from 'react-router-dom'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const lenisRef = useRef<Lenis | null>(null)
  const rafIdRef = useRef<number | null>(null)

  // Initialize Lenis once
  useEffect(() => {
    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      })

      // Make Lenis available globally for scroll progress
      ;(window as any).lenis = lenisRef.current

      // Animation frame function for smooth scrolling
      function raf(time: number) {
        if (lenisRef.current) {
          lenisRef.current.raf(time)
          rafIdRef.current = requestAnimationFrame(raf)
        }
      }

      rafIdRef.current = requestAnimationFrame(raf)
    }

    // Cleanup on unmount only
    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current)
      }
      if (lenisRef.current) {
        lenisRef.current.destroy()
        lenisRef.current = null
        delete (window as any).lenis
      }
    }
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: false })
    }
  }, [location.pathname])

  return <>{children}</>
}

