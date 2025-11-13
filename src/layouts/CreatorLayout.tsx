import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/navbar'
import { FloatingShapes } from '@/components/floating-shapes'

export function CreatorLayout() {
  return (
    <>
      <FloatingShapes />
      <Navbar />
      <Outlet />
    </>
  )
}

