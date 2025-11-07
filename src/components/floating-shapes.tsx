export function FloatingShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-blue-100 rounded-full opacity-20 animate-float blur-3xl" />
      <div className="absolute top-[60%] right-[10%] w-48 h-48 bg-blue-50 rounded-full opacity-30 animate-float blur-3xl" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[20%] left-[50%] w-36 h-36 bg-blue-100 rounded-full opacity-20 animate-float blur-3xl" style={{ animationDelay: '4s' }} />
    </div>
  )
}

