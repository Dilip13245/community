import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Mail, Lock, MapPin, Users } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/users/onboarding')
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-blue-900 pt-20 sm:pt-24">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="signupGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.8 }} />
              </linearGradient>
            </defs>
            <circle cx="25%" cy="35%" r="55" fill="none" stroke="url(#signupGrad)" strokeWidth="2" opacity="0.4">
              <animate attributeName="r" values="55;65;55" dur="6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur="6s" repeatCount="indefinite" />
            </circle>
            <circle cx="75%" cy="65%" r="45" fill="none" stroke="url(#signupGrad)" strokeWidth="2" opacity="0.4">
              <animate attributeName="r" values="45;55;45" dur="5.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur="5.5s" repeatCount="indefinite" />
            </circle>
          </svg>
          
          {/* Floating Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.15, y: 0 }}
            transition={{ duration: 2 }}
            className="hidden md:block absolute top-[12%] left-[8%]"
          >
            <Users className="w-12 h-12 md:w-16 md:h-16 text-blue-400 animate-float" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="hidden lg:block absolute top-[25%] right-[12%]"
          >
            <Mail className="w-20 h-20 lg:w-24 lg:h-24 text-blue-400 animate-float" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.12 }}
            transition={{ duration: 2, delay: 1 }}
            className="hidden md:block absolute bottom-[20%] left-[10%]"
          >
            <MapPin className="w-14 h-14 md:w-18 md:h-18 text-blue-300 animate-float" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.1, y: 0 }}
            transition={{ duration: 2, delay: 1.5 }}
            className="hidden lg:block absolute bottom-[15%] right-[8%]"
          >
            <Lock className="w-10 h-10 md:w-12 md:h-12 text-blue-300 animate-float" />
          </motion.div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-lg mx-auto"
          >
          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Users className="w-8 h-8 text-white" />
              </motion.div>
              <CardTitle className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">Create Your Account</CardTitle>
              <CardDescription className="text-base sm:text-lg text-gray-600">Join thousands of communities worldwide</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="grid grid-cols-2 gap-4"
                >
                  <div>
                    <label className="text-sm font-medium mb-2 block text-gray-700">First Name</label>
                    <Input placeholder="John" className="focus:ring-2 focus:ring-blue-600" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block text-gray-700">Last Name</label>
                    <Input placeholder="Doe" className="focus:ring-2 focus:ring-blue-600" required />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <label className="text-sm font-medium mb-2 block text-gray-700">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input type="email" placeholder="your@email.com" className="pl-10 focus:ring-2 focus:ring-blue-600" required />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <label className="text-sm font-medium mb-2 block text-gray-700">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a strong password"
                      className="pl-10 pr-10 focus:ring-2 focus:ring-blue-600"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:opacity-70 transition-opacity"
                    >
                      {showPassword ? '👁️' : '👁️‍🗨️'}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <label className="text-sm font-medium mb-2 block text-gray-700">Location (City, Country)</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input placeholder="Mumbai, India" className="pl-10 focus:ring-2 focus:ring-blue-600" required />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-600" required />
                    <span className="text-sm text-gray-700">I agree to the Terms of Service and Privacy Policy</span>
                  </label>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <Button variant="gradient" className="w-full shadow-lg hover:shadow-xl transition-shadow" size="lg" type="submit">
                    Create Account
                  </Button>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="text-center text-sm text-gray-600"
                >
                  Already have an account?{' '}
                  <Link to="/login" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    Login
                  </Link>
                </motion.p>
              </form>
            </CardContent>
          </Card>
        </motion.div>
        </div>
      </section>
    </div>
  )
}

