import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Calendar, TrendingUp, DollarSign, Plus, MessageCircle, MapPin, ArrowRight } from 'lucide-react'
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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 max-w-7xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-gray-900">
              Dashboard
            </h1>
            <p className="text-xl text-gray-600">Manage your communities and track performance</p>
          </motion.div>
          <Link to="/communities/create">
            <Button variant="gradient" size="lg">
              <Plus className="mr-2 h-4 w-4" />
              Create Community
            </Button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
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
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
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
                <Link to="/communities/create" className="block">
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Community
                  </Button>
                </Link>
                <Link to="/events/create" className="block">
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
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
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
                <Link to="/events" className="mt-4 block">
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
