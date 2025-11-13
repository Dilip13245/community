import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Search, HelpCircle, Book, MessageCircle, Video, FileText } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const categories = [
  {
    icon: Book,
    title: 'Getting Started',
    description: 'New to CommunityHub? Start here to learn the basics.',
    articles: ['Creating Your First Community', 'Setting Up Your Profile', 'Finding Communities'],
  },
  {
    icon: MessageCircle,
    title: 'Community Management',
    description: 'Learn how to build and manage thriving communities.',
    articles: ['Managing Members', 'Creating Events', 'Community Settings'],
  },
  {
    icon: Video,
    title: 'Events & RSVPs',
    description: 'Everything about organizing and attending events.',
    articles: ['Creating Events', 'RSVP Management', 'Event Analytics'],
  },
  {
    icon: FileText,
    title: 'Account & Billing',
    description: 'Manage your account, subscription, and payments.',
    articles: ['Account Settings', 'Subscription Plans', 'Payment Methods'],
  },
]

const faqs = [
  {
    question: 'How do I create a community?',
    answer: 'Click on "Create Community" in your dashboard, fill in the details, and you\'re ready to go! You can customize your community settings, add members, and start organizing events.',
  },
  {
    question: 'Can I make my community private?',
    answer: 'Yes! When creating or editing your community, you can set it to private. Private communities require approval for new members to join.',
  },
  {
    question: 'How do I organize an event?',
    answer: 'Go to your community dashboard, click "Create Event", fill in the event details including date, time, location, and capacity. You can set it as free or paid.',
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept all major credit cards, debit cards, and digital payment methods. Payments are processed securely through our payment partners.',
  },
  {
    question: 'How do I contact support?',
    answer: 'You can reach our support team through the Contact page, or email us at support@communityhub.com. We typically respond within 24 hours.',
  },
]

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-blue-900 pt-20 sm:pt-24">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="helpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.8 }} />
              </linearGradient>
            </defs>
            <circle cx="30%" cy="35%" r="50" fill="none" stroke="url(#helpGrad)" strokeWidth="2" opacity="0.4">
              <animate attributeName="r" values="50;60;50" dur="6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur="6s" repeatCount="indefinite" />
            </circle>
            <circle cx="70%" cy="65%" r="40" fill="none" stroke="url(#helpGrad)" strokeWidth="2" opacity="0.4">
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
            <HelpCircle className="w-12 h-12 md:w-16 md:h-16 text-blue-400 animate-float" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, delay: 0.7 }}
            className="hidden lg:block absolute bottom-[28%] right-[20%]"
          >
            <Book className="w-20 h-20 lg:w-24 lg:h-24 text-blue-400 animate-float" />
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
                Help Center
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-8">
                Find answers to common questions and learn how to get the most out of CommunityHub.
              </p>
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for help..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24 max-w-7xl -mt-8 relative z-10">
        {/* Categories */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                >
                  <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{category.description}</p>
                      <ul className="space-y-2">
                        {category.articles.map((article) => (
                          <li key={article} className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer">
                            → {article}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* FAQs */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="border-2 border-gray-200 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <Button variant="gradient" size="lg" asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}

