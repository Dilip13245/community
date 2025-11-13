import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/navbar'
import { FloatingShapes } from '@/components/floating-shapes'

export function UserLayout() {
  return (
    <>
      <FloatingShapes />
      <Navbar />
      <Outlet />
    </>
  )
}

