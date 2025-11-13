import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Card, CardContent } from '@/components/ui/card'
import { Shield, Lock, Eye, FileText } from 'lucide-react'

const sections = [
  {
    icon: FileText,
    title: 'Information We Collect',
    content: [
      'We collect information you provide directly to us, such as when you create an account, create or join a community, register for an event, or contact us for support.',
      'We automatically collect certain information about your device when you access our services, including your IP address, browser type, operating system, and usage data.',
      'We may collect information from third-party services if you choose to connect your account with them.',
    ],
  },
  {
    icon: Eye,
    title: 'How We Use Your Information',
    content: [
      'To provide, maintain, and improve our services and features.',
      'To process transactions and send related information, including confirmations and invoices.',
      'To send you technical notices, updates, security alerts, and support messages.',
      'To respond to your comments, questions, and requests and provide customer service.',
      'To monitor and analyze trends, usage, and activities in connection with our services.',
    ],
  },
  {
    icon: Lock,
    title: 'Data Security',
    content: [
      'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
      'However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.',
      'We use industry-standard encryption technologies when transmitting and storing your data.',
    ],
  },
  {
    icon: Shield,
    title: 'Your Rights',
    content: [
      'You have the right to access, update, or delete your personal information at any time through your account settings.',
      'You can opt out of receiving promotional communications from us by following the instructions in those messages.',
      'You may request a copy of your personal data or request that we delete your account and associated data.',
      'If you are located in certain regions, you may have additional rights under applicable data protection laws.',
    ],
  },
]

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-blue-900 pt-20 sm:pt-24">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="privacyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.8 }} />
              </linearGradient>
            </defs>
            <circle cx="30%" cy="35%" r="50" fill="none" stroke="url(#privacyGrad)" strokeWidth="2" opacity="0.4">
              <animate attributeName="r" values="50;60;50" dur="6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur="6s" repeatCount="indefinite" />
            </circle>
            <circle cx="70%" cy="65%" r="40" fill="none" stroke="url(#privacyGrad)" strokeWidth="2" opacity="0.4">
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
            <Shield className="w-12 h-12 md:w-16 md:h-16 text-blue-400 animate-float" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, delay: 0.7 }}
            className="hidden lg:block absolute bottom-[28%] right-[20%]"
          >
            <Lock className="w-20 h-20 lg:w-24 lg:h-24 text-blue-400 animate-float" />
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
                Privacy Policy
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                Your privacy is important to us. Learn how we collect, use, and protect your information.
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
                At CommunityHub, we are committed to protecting your privacy. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you use our platform and services.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By using CommunityHub, you agree to the collection and use of information in accordance with this policy. 
                If you do not agree with our policies and practices, please do not use our services.
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
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> privacy@communityhub.com<br />
                <strong>Address:</strong> CommunityHub Privacy Team, 123 Community Street, City, State 12345
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

