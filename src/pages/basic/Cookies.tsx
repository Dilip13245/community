import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Cookie, Settings, Shield, Info } from 'lucide-react'

const cookieTypes = [
  {
    icon: Settings,
    title: 'Essential Cookies',
    description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
    examples: ['Authentication cookies', 'Session management', 'Security features'],
  },
  {
    icon: Info,
    title: 'Analytics Cookies',
    description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
    examples: ['Page views', 'User behavior', 'Performance metrics'],
  },
  {
    icon: Shield,
    title: 'Functional Cookies',
    description: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences.',
    examples: ['Language preferences', 'Theme settings', 'User preferences'],
  },
]

export default function Cookies() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-blue-900 pt-20 sm:pt-24">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cookiesGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.8 }} />
              </linearGradient>
            </defs>
            <circle cx="30%" cy="35%" r="50" fill="none" stroke="url(#cookiesGrad)" strokeWidth="2" opacity="0.4">
              <animate attributeName="r" values="50;60;50" dur="6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur="6s" repeatCount="indefinite" />
            </circle>
            <circle cx="70%" cy="65%" r="40" fill="none" stroke="url(#cookiesGrad)" strokeWidth="2" opacity="0.4">
              <animate attributeName="r" values="40;50;40" dur="5.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur="5.5s" repeatCount="indefinite" />
            </circle>
          </svg>
          
          {/* Floating Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.15, y: 0 }}
            transition={{ duration: 2 }}
            className="hidden md:block absolute top-[22%] left-[15%]"
          >
            <Cookie className="w-12 h-12 md:w-16 md:h-16 text-blue-400 animate-float" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, delay: 0.7 }}
            className="hidden lg:block absolute bottom-[28%] right-[20%]"
          >
            <Settings className="w-20 h-20 lg:w-24 lg:h-24 text-blue-400 animate-float" />
          </motion.div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-3 md:mb-4 leading-tight">
                Cookie Policy
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                Learn about how we use cookies and similar technologies on our platform.
              </p>
              <p className="text-sm text-white/60 mt-4">Last updated: January 15, 2024</p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24 max-w-5xl -mt-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Card className="border-2 border-gray-200 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                CommunityHub uses cookies and similar tracking technologies to track activity on our platform 
                and hold certain information. Cookies are files with a small amount of data which may include 
                an anonymous unique identifier.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Cookies are sent to your browser from a website and stored on your device. Tracking technologies 
                also used are beacons, tags, and scripts to collect and track information and to improve and 
                analyze our Service.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="space-y-8 mb-12">
          {cookieTypes.map((type, index) => {
            const Icon = type.icon
            return (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="border-2 border-gray-200 shadow-lg">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{type.title}</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">{type.description}</p>
                        <div>
                          <p className="text-sm font-semibold text-gray-700 mb-2">Examples include:</p>
                          <ul className="space-y-2">
                            {type.examples.map((example, exampleIndex) => (
                              <li key={exampleIndex} className="text-gray-600 flex items-start">
                                <span className="text-blue-600 mr-2 mt-1">•</span>
                                <span>{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12"
        >
          <Card className="border-2 border-gray-200 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Managing Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
                However, if you do not accept cookies, you may not be able to use some portions of our Service.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You can manage your cookie preferences through your browser settings. Most browsers allow you to 
                control cookies through their settings preferences. However, limiting cookies may impact your 
                experience of our Service.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Cookie Preferences</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                You can manage your cookie preferences at any time through your account settings or by contacting us.
              </p>
              <Button variant="gradient" size="lg">
                Manage Cookie Settings
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

