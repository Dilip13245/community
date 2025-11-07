import { Navbar } from '@/components/navbar'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Users, Calendar, MapPin, TrendingUp, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const myCommunities = [
  {
    id: 1,
    name: 'Mumbai Runners Club',
    location: 'Mumbai, India',
    members: 2450,
    events: 12,
    revenue: '₹8,500',
    growth: '+12%',
    description: 'Mumbai\'s largest running community with weekly runs and marathons.'
  },
  {
    id: 2,
    name: 'Tech Startup Network',
    location: 'Bangalore, India',
    members: 890,
    events: 8,
    revenue: '₹12,300',
    growth: '+28%',
    description: 'Connect with tech entrepreneurs and startup founders in Bangalore.'
  },
  {
    id: 3,
    name: 'Delhi Foodies',
    location: 'Delhi, India',
    members: 1200,
    events: 15,
    revenue: '₹5,200',
    growth: '+8%',
    description: 'Discover the best food experiences and restaurants in Delhi.'
  },
]

export default function Communities() {
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
              My Communities
            </h1>
            <p className="text-xl text-gray-600">Manage and grow your communities</p>
          </motion.div>
          <Link to="/communities/create">
            <Button variant="gradient" size="lg">
              <Plus className="mr-2 h-4 w-4" />
              Create Community
            </Button>
          </Link>
        </div>

        {/* Communities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {myCommunities.map((community, index) => (
            <motion.div
              key={community.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Link to={`/communities/${community.id}`}>
                <Card className="h-full border-2 border-transparent hover:border-blue-300 hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="relative h-40 bg-gradient-to-br from-blue-500 to-blue-700 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users className="h-16 w-16 text-white opacity-30" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                        {community.growth}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{community.name}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{community.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="flex items-center text-sm text-gray-600 mb-1">
                          <MapPin className="h-4 w-4 mr-1 text-blue-600" />
                          Location
                        </div>
                        <p className="text-xs font-medium text-gray-900">{community.location}</p>
                      </div>
                      <div>
                        <div className="flex items-center text-sm text-gray-600 mb-1">
                          <Users className="h-4 w-4 mr-1 text-blue-600" />
                          Members
                        </div>
                        <p className="text-xs font-medium text-gray-900">{community.members.toLocaleString()}</p>
                      </div>
                      <div>
                        <div className="flex items-center text-sm text-gray-600 mb-1">
                          <Calendar className="h-4 w-4 mr-1 text-blue-600" />
                          Events
                        </div>
                        <p className="text-xs font-medium text-gray-900">{community.events}</p>
                      </div>
                      <div>
                        <div className="flex items-center text-sm text-gray-600 mb-1">
                          <TrendingUp className="h-4 w-4 mr-1 text-blue-600" />
                          Revenue
                        </div>
                        <p className="text-xs font-medium text-gray-900">{community.revenue}</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Manage Community
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Empty State (if no communities) */}
        {myCommunities.length === 0 && (
          <Card className="border-2 border-dashed border-gray-300">
            <CardContent className="p-12 text-center">
              <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No communities yet</h3>
              <p className="text-gray-600 mb-6">Create your first community to start building your network</p>
              <Link to="/communities/create">
                <Button variant="gradient" size="lg">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Your First Community
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
