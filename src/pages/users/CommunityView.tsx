import { Navbar } from '@/components/navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Calendar, MapPin, Settings, Share2, ArrowLeft, Trophy, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const communityData = {
  name: 'Mumbai Runners Club',
  description: 'Mumbai\'s largest running community. We organize weekly runs, marathons, and fitness events across the city. Join us to stay fit, meet new people, and explore Mumbai on foot!',
  location: 'Mumbai, Maharashtra, India',
  members: 2450,
  events: 12,
  category: 'Sports & Fitness',
  tags: ['Running', 'Fitness', 'Marathons', 'Health'],
  created: 'January 2022',
  organizer: 'Rajesh Kumar',
}

const upcomingEvents = [
  { name: 'Weekly Run - Marine Drive', date: 'Saturday, Jan 20', time: '6:00 AM', rsvps: 45 },
  { name: 'Marathon Training Session', date: 'Sunday, Jan 21', time: '7:00 AM', rsvps: 32 },
  { name: 'Community Meetup', date: 'Wednesday, Jan 24', time: '6:30 PM', rsvps: 28 },
]

const recentPosts = [
  { author: 'Rajesh Kumar', content: 'Great run this morning! Thanks to everyone who joined. Next week we\'ll be at Juhu Beach.', time: '2 hours ago' },
  { author: 'Priya Sharma', content: 'Looking for running partners for early morning runs in Bandra area. Anyone interested?', time: '5 hours ago' },
  { author: 'Amit Patel', content: 'Just completed my first 10K! Thanks to this amazing community for the motivation.', time: '1 day ago' },
]

export default function CommunityView() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-blue-900 pt-20 sm:pt-24">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="communityViewGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.8 }} />
              </linearGradient>
            </defs>
            <circle cx="25%" cy="30%" r="55" fill="none" stroke="url(#communityViewGrad)" strokeWidth="2" opacity="0.4">
              <animate attributeName="r" values="55;65;55" dur="6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur="6s" repeatCount="indefinite" />
            </circle>
            <circle cx="75%" cy="70%" r="45" fill="none" stroke="url(#communityViewGrad)" strokeWidth="2" opacity="0.4">
              <animate attributeName="r" values="45;55;45" dur="5.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur="5.5s" repeatCount="indefinite" />
            </circle>
          </svg>
          
          {/* Floating Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.15, y: 0 }}
            transition={{ duration: 2 }}
            className="hidden md:block absolute top-[20%] left-[12%]"
          >
            <Users className="w-12 h-12 md:w-16 md:h-16 text-blue-400 animate-float" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, delay: 0.6 }}
            className="hidden lg:block absolute bottom-[25%] right-[18%]"
          >
            <Trophy className="w-20 h-20 lg:w-24 lg:h-24 text-blue-400 animate-float" />
          </motion.div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/discover">
                <Button variant="ghost" className="text-white hover:bg-white/10">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Discover
                </Button>
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-2 md:mb-3 leading-tight">
                {communityData.name}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl">
                {communityData.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24 max-w-7xl -mt-8 relative z-10">
        {/* Community Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Card className="border-2 border-gray-200 shadow-lg overflow-hidden">
            <div className="h-32 sm:h-40 md:h-48 bg-gradient-to-r from-blue-500 to-blue-700 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Users className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 text-white opacity-30" />
              </div>
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
                <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm text-xs sm:text-sm">
                  <Share2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Share</span>
                </Button>
              </div>
            </div>
            <CardContent className="p-4 sm:p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 sm:gap-6">
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 break-words">{communityData.name}</h1>
                    <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium self-start sm:self-center">
                      {communityData.category}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{communityData.description}</p>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-blue-600 flex-shrink-0" />
                      <span className="break-words">{communityData.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-blue-600 flex-shrink-0" />
                      <span>{communityData.members.toLocaleString()} members</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-blue-600 flex-shrink-0" />
                      <span>{communityData.events} events</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {communityData.tags.map(tag => (
                      <span key={tag} className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-row sm:flex-col gap-2 sm:gap-3 w-full md:w-auto mt-4 md:mt-0">
                  <Button variant="gradient" size="lg" className="flex-1 sm:flex-none sm:w-full md:w-auto text-sm sm:text-base">
                    Join Community
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1 sm:flex-none sm:w-full md:w-auto text-sm sm:text-base">
                    <Settings className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Manage
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Posts & Activity */}
          <div className="lg:col-span-2 space-y-6 order-1">
            {/* Community Posts */}
            <Card className="border-2 border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-bold">Community Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 sm:space-y-6">
                  {recentPosts.map((post, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="pb-4 sm:pb-6 border-b last:border-0"
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                          {post.author.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
                            <span className="font-semibold text-gray-900 text-sm sm:text-base">{post.author}</span>
                            <span className="text-xs text-gray-500">{post.time}</span>
                          </div>
                          <p className="text-sm sm:text-base text-gray-700 break-words">{post.content}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2 p-3 sm:p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      U
                    </div>
                    <input
                      type="text"
                      placeholder="Write a post..."
                      className="flex-1 bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 min-w-0"
                    />
                    <Button variant="gradient" size="sm" className="w-full sm:w-auto">Post</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6 order-2">
            {/* Upcoming Events */}
            <Card className="border-2 border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl font-bold">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 sm:space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="pb-3 sm:pb-4 border-b last:border-0">
                      <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 break-words">{event.name}</h4>
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 mb-2">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                        <span>{event.date}</span>
                        <span>•</span>
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-600">
                        <Users className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                        <span>{event.rsvps} RSVPs</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/discover">
                  <Button variant="ghost" className="w-full mt-3 sm:mt-4 text-sm">
                    Discover More Events
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Community Stats */}
            <Card className="border-2 border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl font-bold">Community Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-600">Active Members</span>
                    </div>
                    <span className="font-bold text-sm sm:text-base text-gray-900">2,450</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-600">Total Events</span>
                    </div>
                    <span className="font-bold text-sm sm:text-base text-gray-900">156</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-600">Growth Rate</span>
                    </div>
                    <span className="font-bold text-sm sm:text-base text-green-600">+12%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
