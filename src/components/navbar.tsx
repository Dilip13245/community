import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Users, Menu, X, Search, Bell, User, LayoutDashboard, Settings, LogOut, Shield, Home, Compass, Calendar, DollarSign } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const location = useLocation()
  
  // TODO: Replace with actual auth state
  const isLoggedIn = location.pathname.startsWith('/dashboard') || 
                     location.pathname.startsWith('/profile') || 
                     location.pathname.startsWith('/settings') ||
                     location.pathname.startsWith('/communities') ||
                     location.pathname.startsWith('/events')
  const isAdmin = location.pathname.startsWith('/admin')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside or on route change
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.user-menu-container')) {
        setUserMenuOpen(false)
      }
    }
    if (userMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [userMenuOpen])

  // All main navigation links
  const mainNavLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/discover', label: 'Discover', icon: Compass },
    { path: '/communities', label: 'Communities', icon: Users },
    { path: '/events', label: 'Events', icon: Calendar },
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/pricing', label: 'Pricing', icon: DollarSign },
    { path: '/admin', label: 'Admin', icon: Shield },
  ]

  // User-specific links
  const userNavLinks = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/profile', label: 'Profile', icon: User },
    { path: '/settings', label: 'Settings', icon: Settings },
  ]

  // Admin links
  const adminNavLinks = [
    { path: '/admin', label: 'Admin Dashboard', icon: Shield },
    { path: '/admin/moderation', label: 'Moderation', icon: Shield },
  ]

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-200/50'
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo - Responsive */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-gray-900 leading-none">CommunityHub</span>
              <span className="hidden sm:block text-[10px] text-gray-500 font-normal leading-none mt-0.5">Find your people. Anywhere.</span>
            </div>
          </Link>

          {/* Desktop Navigation - All Main Routes */}
          <div className="hidden lg:flex items-center space-x-1 flex-1 justify-center max-w-2xl mx-8">
            {mainNavLinks.map((link) => {
              const Icon = link.icon
              const active = isActive(link.path)
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-3 py-2 rounded-lg transition-colors text-sm font-medium"
                >
                  <span className={`relative z-10 flex items-center gap-1.5 ${
                    active
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}>
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </span>
                  {active && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-blue-50 rounded-lg"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Right Side Actions - Desktop */}
          <div className="hidden lg:flex items-center space-x-2 flex-shrink-0">
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900">
              <Search className="h-5 w-5" />
            </button>
            {isLoggedIn && (
              <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900 relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-blue-600 rounded-full" />
              </button>
            )}
            {isAdmin && (
              <Link to="/admin">
                <Button variant="outline" size="sm" className="text-sm font-medium">
                  <Shield className="mr-2 h-4 w-4" />
                  Admin
                </Button>
              </Link>
            )}
            {isLoggedIn ? (
              // User Menu Dropdown
              <div className="relative user-menu-container">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900"
                >
                  <User className="h-5 w-5" />
                </button>
                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border-2 border-gray-200 py-2 z-50"
                    >
                      {userNavLinks.map((link) => {
                        const Icon = link.icon
                        return (
                          <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setUserMenuOpen(false)}
                            className={`flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-sm ${
                              isActive(link.path) ? 'text-blue-600 bg-blue-50' : ''
                            }`}
                          >
                            <Icon className="h-4 w-4" />
                            {link.label}
                          </Link>
                        )
                      })}
                      {!isAdmin && (
                        <Link
                          to="/admin"
                          onClick={() => setUserMenuOpen(false)}
                          className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-sm"
                        >
                          <Shield className="h-4 w-4" />
                          Admin Panel
                        </Link>
                      )}
                      <div className="border-t my-2" />
                      <Link
                        to="/"
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-sm text-red-600"
                      >
                        <LogOut className="h-4 w-4" />
                        Logout
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              // Login/Signup Buttons
              <>
                <Link to="/login">
                  <Button variant="ghost" size="sm" className="text-sm font-medium">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button variant="gradient" size="sm" className="text-sm font-medium">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation - Fixed Position Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/30 z-40 lg:hidden"
                style={{ top: '3.5rem', left: 0, right: 0, bottom: 0 }}
              />
              {/* Menu - Fixed below navbar */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden fixed top-14 sm:top-16 left-0 right-0 bg-white border-t border-gray-200 shadow-xl z-50"
                style={{ maxHeight: 'calc(100vh - 3.5rem)' }}
              >
                <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 3.5rem)' }}>
                  {/* Main Navigation Links */}
                  <div className="py-2">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Main Menu
                    </div>
                    {mainNavLinks.map((link) => {
                      const Icon = link.icon
                      const active = isActive(link.path)
                      return (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-lg text-sm font-medium transition-colors ${
                            active
                              ? 'bg-blue-50 text-blue-600'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <Icon className="h-5 w-5 flex-shrink-0" />
                          <span>{link.label}</span>
                        </Link>
                      )
                    })}
                  </div>

                  {/* User Links (if logged in) - Only show if not already in main nav */}
                  {isLoggedIn && (
                    <>
                      <div className="border-t border-gray-200 my-2" />
                      <div className="py-2">
                        <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          Account
                        </div>
                        {userNavLinks.filter(link => !mainNavLinks.some(mainLink => mainLink.path === link.path)).map((link) => {
                          const Icon = link.icon
                          const active = isActive(link.path)
                          return (
                            <Link
                              key={link.path}
                              to={link.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-lg text-sm font-medium transition-colors ${
                                active
                                  ? 'bg-blue-50 text-blue-600'
                                  : 'text-gray-700 hover:bg-gray-50'
                              }`}
                            >
                              <Icon className="h-5 w-5 flex-shrink-0" />
                              <span>{link.label}</span>
                            </Link>
                          )
                        })}
                      </div>
                    </>
                  )}

                  {/* Admin Links (if admin) - Only show if not already in main nav */}
                  {isAdmin && (
                    <>
                      <div className="border-t border-gray-200 my-2" />
                      <div className="py-2">
                        <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          Admin Tools
                        </div>
                        {adminNavLinks.filter(link => !mainNavLinks.some(mainLink => mainLink.path === link.path)).map((link) => {
                          const Icon = link.icon
                          const active = isActive(link.path)
                          return (
                            <Link
                              key={link.path}
                              to={link.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-lg text-sm font-medium transition-colors ${
                                active
                                  ? 'bg-blue-50 text-blue-600'
                                  : 'text-gray-700 hover:bg-gray-50'
                              }`}
                            >
                              <Icon className="h-5 w-5 flex-shrink-0" />
                              <span>{link.label}</span>
                            </Link>
                          )
                        })}
                      </div>
                    </>
                  )}

                  {/* Action Buttons */}
                  <div className="border-t border-gray-200 my-2" />
                  <div className="px-4 py-4 space-y-3 pb-6">
                    {isLoggedIn ? (
                      <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block">
                        <Button variant="ghost" size="sm" className="w-full text-sm text-red-600 justify-start">
                          <LogOut className="mr-2 h-4 w-4" />
                          Logout
                        </Button>
                      </Link>
                    ) : (
                      <>
                        <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="block">
                          <Button variant="outline" size="sm" className="w-full text-sm">
                            Login
                          </Button>
                        </Link>
                        <Link to="/signup" onClick={() => setMobileMenuOpen(false)} className="block">
                          <Button variant="gradient" size="sm" className="w-full text-sm">
                            Get Started
                          </Button>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
