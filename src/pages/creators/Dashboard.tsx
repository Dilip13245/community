import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Calendar, TrendingUp, DollarSign, Plus, MessageCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const stats = [
  { icon: Users, value: '5', label: 'My Communities', color: 'bg-blue-600', change: '+2 this month' },
  { icon: Calendar, value: '12', label: 'Upcoming Events', color: 'bg-blue-500', change: '3 this week' },
  { icon: Users, value: '1,240', label: 'Total Members', color: 'bg-blue-700', change: '+45 this week' },
  { icon: DollarSign, value: '₹12,500', label: 'Revenue (This Month)', color: 'bg-blue-600', change: '+18% from last month' },
]

const recentActivity = [
  { type: 'member', message: 'Raj Kumar joined Mumbai Runners Club', time: '2 hours ago', icon: Users },
  { type: 'event', message: 'New event: Weekly Run scheduled for Saturday', time: '5 hours ago', icon: Calendar },
  { type: 'revenue', message: 'Payment received: ₹2,500 from event tickets', time: '1 day ago', icon: DollarSign },
  { type: 'message', message: 'New message in Mumbai Runners chat', time: '2 days ago', icon: MessageCircle },
]

const upcomingEvents = [
  { name: 'Weekly Run - Marine Drive', date: 'Saturday, Jan 20', time: '6:00 AM', rsvps: 45 },
  { name: 'Community Meetup', date: 'Sunday, Jan 21', time: '4:00 PM', rsvps: 32 },
  { name: 'Fitness Workshop', date: 'Wednesday, Jan 24', time: '7:00 PM', rsvps: 28 },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-blue-900 pt-20 sm:pt-24">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="dashboardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.8 }} />
              </linearGradient>
            </defs>
            <circle cx="25%" cy="25%" r="55" fill="none" stroke="url(#dashboardGrad)" strokeWidth="2" opacity="0.4">
              <animate attributeName="r" values="55;65;55" dur="6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur="6s" repeatCount="indefinite" />
            </circle>
            <circle cx="75%" cy="75%" r="45" fill="none" stroke="url(#dashboardGrad)" strokeWidth="2" opacity="0.4">
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
            <TrendingUp className="w-12 h-12 md:w-16 md:h-16 text-blue-400 animate-float" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="hidden lg:block absolute top-[35%] right-[18%]"
          >
            <Users className="w-20 h-20 lg:w-24 lg:h-24 text-blue-400 animate-float" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2, delay: 1 }}
            className="hidden md:block absolute bottom-[25%] left-[10%]"
          >
            <Calendar className="w-14 h-14 md:w-18 md:h-18 text-blue-300 animate-float" />
          </motion.div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-2 md:mb-3 leading-tight">
                  Dashboard
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
                  Manage your communities and track performance
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <Link to="/creators/communities/create">
                  <Button variant="gradient" size="lg" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Community
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24 max-w-7xl -mt-8 relative z-10">

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <Card className="border-2 border-transparent hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-xs text-blue-600">{stat.change}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <Card className="lg:col-span-2 border-2 border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => {
                  const Icon = activity.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-start gap-4 pb-4 border-b last:border-0"
                    >
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{activity.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions & Upcoming Events */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="border-2 border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/creators/communities/create" className="block">
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Community
                  </Button>
                </Link>
                <Link to="/creators/events/create" className="block">
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <Calendar className="mr-2 h-4 w-4" />
                    Create Event
                  </Button>
                </Link>
                <Link to="/discover" className="block">
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Discover Communities
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="border-2 border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="pb-4 border-b last:border-0"
                    >
                      <h4 className="font-semibold text-gray-900 mb-1">{event.name}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                        <span>•</span>
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-blue-600">
                        <Users className="h-4 w-4" />
                        <span>{event.rsvps} RSVPs</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <Link to="/creators/events" className="mt-4 block">
                  <Button variant="ghost" className="w-full">
                    View All Events
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
