import { Navbar } from '@/components/navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Calendar, Shield, AlertTriangle, TrendingUp, CheckCircle, XCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const platformStats = [
  { icon: Users, value: '2,450,000', label: 'Total Members', change: '+12.5%', color: 'bg-blue-600' },
  { icon: Calendar, value: '50,234', label: 'Total Communities', change: '+8.2%', color: 'bg-blue-500' },
  { icon: Calendar, value: '156,789', label: 'Total Events', change: '+15.3%', color: 'bg-blue-700' },
  { icon: TrendingUp, value: '₹2.4M', label: 'Platform Revenue', change: '+22.1%', color: 'bg-blue-600' },
]

const moderationQueue = [
  { type: 'Community', name: 'New Community Request', status: 'pending', time: '2 hours ago' },
  { type: 'Post', name: 'Content Flagged', status: 'pending', time: '5 hours ago' },
  { type: 'User', name: 'User Report', status: 'pending', time: '1 day ago' },
]

const recentActivity = [
  { action: 'Community Approved', item: 'Delhi Foodies', time: '1 hour ago', status: 'approved' },
  { action: 'Post Removed', item: 'Inappropriate Content', time: '3 hours ago', status: 'removed' },
  { action: 'User Warned', item: 'John Doe', time: '5 hours ago', status: 'warning' },
]

export default function AdminDashboard() {
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
              Admin Dashboard
            </h1>
            <p className="text-xl text-gray-600">Platform overview and management</p>
          </motion.div>
          <Link to="/admin/moderation">
            <Button variant="gradient" size="lg">
              <Shield className="mr-2 h-4 w-4" />
              Moderation Queue
            </Button>
          </Link>
        </div>

        {/* Platform Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {platformStats.map((stat, index) => {
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
                    <p className="text-xs text-green-600">{stat.change} from last month</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Moderation Queue */}
          <Card className="lg:col-span-2 border-2 border-gray-200 shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold">Moderation Queue</CardTitle>
                <Link to="/admin/moderation">
                  <Button variant="ghost" size="sm">View All</Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {moderationQueue.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Shield className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                            {item.type}
                          </span>
                          <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full font-medium">
                            {item.status}
                          </span>
                        </div>
                        <p className="font-semibold text-gray-900">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.time}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Review</Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="border-2 border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="pb-4 border-b last:border-0"
                  >
                    <div className="flex items-start gap-3">
                      {activity.status === 'approved' ? (
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      ) : activity.status === 'removed' ? (
                        <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                      ) : (
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                      )}
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{activity.action}</p>
                        <p className="text-xs text-gray-600">{activity.item}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
