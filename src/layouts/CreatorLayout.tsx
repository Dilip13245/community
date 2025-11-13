import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/navbar'
import { ScrollProgress } from '@/components/scroll-progress'
import { FloatingShapes } from '@/components/floating-shapes'

export function CreatorLayout() {
  return (
    <>
      <ScrollProgress />
      <FloatingShapes />
      <Navbar />
      <Outlet />
    </>
  )
}

