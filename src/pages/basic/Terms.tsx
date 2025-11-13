import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Card, CardContent } from '@/components/ui/card'
import { Scale, FileCheck, AlertTriangle, Gavel } from 'lucide-react'

const sections = [
  {
    icon: FileCheck,
    title: 'Acceptance of Terms',
    content: [
      'By accessing and using CommunityHub, you accept and agree to be bound by the terms and provision of this agreement.',
      'If you do not agree to abide by the above, please do not use this service.',
      'We reserve the right to modify these terms at any time, and such modifications shall be effective immediately upon posting.',
    ],
  },
  {
    icon: Scale,
    title: 'User Responsibilities',
    content: [
      'You are responsible for maintaining the confidentiality of your account and password.',
      'You agree to provide accurate, current, and complete information during registration.',
      'You are responsible for all activities that occur under your account.',
      'You agree not to use the service for any unlawful purpose or in any way that could damage, disable, or impair the platform.',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Prohibited Activities',
    content: [
      'Posting or transmitting any content that is illegal, harmful, threatening, abusive, or violates any laws.',
      'Impersonating any person or entity or falsely stating or misrepresenting your affiliation with a person or entity.',
      'Collecting or storing personal data about other users without their express permission.',
      'Engaging in any automated use of the system, such as using scripts to send comments or messages.',
    ],
  },
  {
    icon: Gavel,
    title: 'Intellectual Property',
    content: [
      'The service and its original content, features, and functionality are owned by CommunityHub and are protected by international copyright, trademark, and other intellectual property laws.',
      'You may not modify, reproduce, distribute, create derivative works, or publicly display any content from our service without prior written permission.',
      'User-generated content remains the property of the user, but by posting content, you grant us a license to use, modify, and display such content on our platform.',
    ],
  },
]

export default function Terms() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-blue-900 pt-20 sm:pt-24">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="termsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.8 }} />
              </linearGradient>
            </defs>
            <circle cx="30%" cy="35%" r="50" fill="none" stroke="url(#termsGrad)" strokeWidth="2" opacity="0.4">
              <animate attributeName="r" values="50;60;50" dur="6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur="6s" repeatCount="indefinite" />
            </circle>
            <circle cx="70%" cy="65%" r="40" fill="none" stroke="url(#termsGrad)" strokeWidth="2" opacity="0.4">
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
            <Scale className="w-12 h-12 md:w-16 md:h-16 text-blue-400 animate-float" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, delay: 0.7 }}
            className="hidden lg:block absolute bottom-[28%] right-[20%]"
          >
            <Gavel className="w-20 h-20 lg:w-24 lg:h-24 text-blue-400 animate-float" />
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
                Terms of Service
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                Please read these terms carefully before using our platform.
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
                Welcome to CommunityHub. These Terms of Service ("Terms") govern your access to and use of our 
                website, mobile application, and services (collectively, the "Service") operated by CommunityHub.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree 
                with any part of these terms, then you may not access the Service.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {sections.map((section, index) => {
          const Icon = section.icon
          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="mb-8"
            >
              <Card className="border-2 border-gray-200 shadow-lg">
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                  <ul className="space-y-4 ml-16">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600 leading-relaxed flex items-start">
                        <span className="text-blue-600 mr-3 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12"
        >
          <Card className="border-2 border-gray-200 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> legal@communityhub.com<br />
                <strong>Address:</strong> CommunityHub Legal Team, 123 Community Street, City, State 12345
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

