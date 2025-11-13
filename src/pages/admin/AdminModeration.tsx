import { Navbar } from '@/components/navbar'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Shield, CheckCircle, XCircle, ArrowLeft, Eye, AlertTriangle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

const moderationItems = [
  {
    id: 1,
    type: 'Community',
    name: 'New Community Request: Delhi Foodies',
    description: 'A community for food lovers in Delhi to discover restaurants and share experiences.',
    submittedBy: 'Rajesh Kumar',
    submittedAt: '2 hours ago',
    status: 'pending',
    reason: 'New community creation request',
  },
  {
    id: 2,
    type: 'Post',
    name: 'Content Flagged: Inappropriate Language',
    description: 'Post contains inappropriate language and has been flagged by 3 members.',
    submittedBy: 'Community: Mumbai Runners',
    submittedAt: '5 hours ago',
    status: 'pending',
    reason: 'Inappropriate content',
  },
  {
    id: 3,
    type: 'User',
    name: 'User Report: Spam Account',
    description: 'User reported for spam behavior and fake profile information.',
    submittedBy: 'Automated System',
    submittedAt: '1 day ago',
    status: 'pending',
    reason: 'Spam account',
  },
  {
    id: 4,
    type: 'Event',
    name: 'Event Review: Tech Meetup',
    description: 'Event requires review due to paid ticketing and large capacity.',
    submittedBy: 'Tech Startup Network',
    submittedAt: '2 days ago',
    status: 'pending',
    reason: 'Paid event review',
  },
]

export default function AdminModeration() {
  const [items, setItems] = useState(moderationItems)

  const handleAction = (id: number, _action: 'approve' | 'reject') => {
    setItems(items.filter(item => item.id !== id))
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-blue-900 pt-20 sm:pt-24">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="moderationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.8 }} />
              </linearGradient>
            </defs>
            <circle cx="30%" cy="35%" r="50" fill="none" stroke="url(#moderationGrad)" strokeWidth="2" opacity="0.4">
              <animate attributeName="r" values="50;60;50" dur="6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur="6s" repeatCount="indefinite" />
            </circle>
            <circle cx="70%" cy="65%" r="40" fill="none" stroke="url(#moderationGrad)" strokeWidth="2" opacity="0.4">
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
            <CheckCircle className="w-20 h-20 lg:w-24 lg:h-24 text-blue-400 animate-float" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.12 }}
            transition={{ duration: 2, delay: 1.2 }}
            className="hidden md:block absolute top-[50%] left-[8%]"
          >
            <AlertTriangle className="w-14 h-14 md:w-18 md:h-18 text-blue-300 animate-float" />
          </motion.div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <Link to="/admin/dashboard">
                <Button variant="ghost" className="text-white hover:bg-white/10 mb-4">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Dashboard
                </Button>
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-2 md:mb-3 leading-tight">
                Moderation Queue
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
                Review and moderate platform content
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24 max-w-7xl -mt-8 relative z-10">

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
          >
            <Card className="border-2 border-transparent hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">{items.length}</div>
                <div className="text-sm text-gray-600">Pending Reviews</div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ y: -4 }}
          >
            <Card className="border-2 border-transparent hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">12</div>
                <div className="text-sm text-gray-600">Approved Today</div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ y: -4 }}
          >
            <Card className="border-2 border-transparent hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-red-600 mb-1">3</div>
                <div className="text-sm text-gray-600">Rejected Today</div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ y: -4 }}
          >
            <Card className="border-2 border-transparent hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">98%</div>
                <div className="text-sm text-gray-600">AI Accuracy</div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Moderation Items */}
        <div className="space-y-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="border-2 border-gray-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row items-start justify-between gap-4 lg:gap-6">
                    <div className="flex-1 w-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Shield className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                              {item.type}
                            </span>
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                              {item.status}
                            </span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 break-words">{item.name}</h3>
                        </div>
                      </div>
                      <p className="text-sm sm:text-base text-gray-600 mb-4 break-words">{item.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Submitted by: </span>
                          <span className="font-medium text-gray-900 break-words">{item.submittedBy}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Reason: </span>
                          <span className="font-medium text-gray-900 break-words">{item.reason}</span>
                        </div>
                        <div className="sm:col-span-2">
                          <span className="text-gray-600">Submitted: </span>
                          <span className="font-medium text-gray-900">{item.submittedAt}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-2 sm:gap-3 w-full sm:w-auto lg:w-auto">
                      <Button variant="outline" size="sm" className="min-h-[44px] text-sm sm:text-base">
                        <Eye className="mr-2 h-4 w-4" />
                        <span className="hidden sm:inline">View Details</span>
                        <span className="sm:hidden">View</span>
                      </Button>
                      <Button
                        variant="gradient"
                        size="sm"
                        className="min-h-[44px] text-sm sm:text-base"
                        onClick={() => handleAction(item.id, 'approve')}
                      >
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Approve
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 border-red-300 hover:bg-red-50 min-h-[44px] text-sm sm:text-base"
                        onClick={() => handleAction(item.id, 'reject')}
                      >
                        <XCircle className="mr-2 h-4 w-4" />
                        Reject
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {items.length === 0 && (
          <Card className="border-2 border-dashed border-gray-300">
            <CardContent className="p-12 text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">All caught up!</h3>
              <p className="text-gray-600">No items pending moderation</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
