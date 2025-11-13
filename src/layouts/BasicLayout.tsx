import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/navbar'
import { FloatingShapes } from '@/components/floating-shapes'

export function BasicLayout() {
  return (
    <>
      <FloatingShapes />
      <Navbar />
      <Outlet />
    </>
  )
}

