import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Search, MapPin, Users, Calendar, Filter, Trophy, Laptop, Palette, Briefcase, Coffee, Plane, Book, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

const communities = [
  {
    id: 1,
    name: 'Mumbai Runners Club',
    location: 'Mumbai, India',
    members: 2450,
    events: 12,
    category: 'Sports & Fitness',
    tags: ['Running', 'Fitness', 'Marathons'],
    description: 'Join Mumbai\'s largest running community. Weekly runs, marathons, and fitness events.'
  },
  {
    id: 2,
    name: 'Delhi Cricket League',
    location: 'Delhi, India',
    members: 5200,
    events: 28,
    category: 'Sports & Fitness',
    tags: ['Cricket', 'Sports', 'Tournaments'],
    description: 'Premier cricket community organizing tournaments and matches across Delhi.'
  },
  {
    id: 3,
    name: 'Bangalore Tech Meetup',
    location: 'Bangalore, India',
    members: 8900,
    events: 45,
    category: 'Technology',
    tags: ['Technology', 'Networking', 'Startups'],
    description: 'Connect with tech professionals, founders, and developers in Bangalore.'
  },
  {
    id: 4,
    name: 'Pune Food Lovers',
    location: 'Pune, India',
    members: 3200,
    events: 18,
    category: 'Food & Dining',
    tags: ['Food', 'Restaurants', 'Cooking'],
    description: 'Discover the best food spots and cooking experiences in Pune.'
  },
  {
    id: 5,
    name: 'Hyderabad Business Network',
    location: 'Hyderabad, India',
    members: 4100,
    events: 22,
    category: 'Business',
    tags: ['Business', 'Networking', 'Entrepreneurship'],
    description: 'Network with entrepreneurs and business professionals in Hyderabad.'
  },
  {
    id: 6,
    name: 'Chennai Arts Collective',
    location: 'Chennai, India',
    members: 2800,
    events: 15,
    category: 'Arts & Culture',
    tags: ['Arts', 'Music', 'Theater'],
    description: 'Celebrate arts and culture through events, workshops, and performances.'
  },
]

const categories = [
  { icon: Trophy, name: 'Sports & Fitness', count: 124 },
  { icon: Laptop, name: 'Technology', count: 89 },
  { icon: Palette, name: 'Arts & Culture', count: 67 },
  { icon: Briefcase, name: 'Business', count: 92 },
  { icon: Coffee, name: 'Food & Dining', count: 54 },
  { icon: Plane, name: 'Travel & Adventure', count: 38 },
  { icon: Book, name: 'Education', count: 76 },
  { icon: Heart, name: 'Social & Lifestyle', count: 103 },
]

export default function Discover() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-gray-900">
            Discover
            <br />
            <span className="text-blue-600">Communities</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Find communities that match your interests. From local meetups to global movements.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <Card className="border-2 border-gray-200 shadow-lg">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <label className="text-sm font-medium mb-2 block text-gray-700">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input placeholder="Search communities, events, or locations..." className="pl-10" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-gray-700">Location</label>
                  <select className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600">
                    <option>All Locations</option>
                    <option>Mumbai, India</option>
                    <option>Delhi, India</option>
                    <option>Bangalore, India</option>
                    <option>Pune, India</option>
                    <option>Hyderabad, India</option>
                    <option>Chennai, India</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-gray-700">Category</label>
                  <select className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600">
                    <option>All Categories</option>
                    <option>Sports & Fitness</option>
                    <option>Technology</option>
                    <option>Arts & Culture</option>
                    <option>Business</option>
                    <option>Food & Dining</option>
                  </select>
                </div>
              </div>
              <Button variant="gradient" className="mt-4" size="lg">
                <Filter className="mr-2 h-4 w-4" />
                Apply Filters
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Categories Quick Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                >
                  <Card className="cursor-pointer border-2 border-transparent hover:border-blue-300 transition-all duration-300">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                      <p className="text-xs text-gray-500">{category.count} communities</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Communities Grid */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">All Communities</h2>
            <span className="text-gray-600">{communities.length} communities found</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communities.map((community, index) => (
              <motion.div
                key={community.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Link to={`/communities/${community.id}`}>
                  <Card className="h-full border-2 border-transparent hover:border-blue-300 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
                    <div className="relative h-48 bg-gradient-to-br from-blue-500 to-blue-700 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Users className="h-20 w-20 text-white opacity-30" />
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                          {community.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{community.name}</h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{community.description}</p>
                      <div className="flex items-center text-gray-600 text-sm mb-4 space-x-4">
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-blue-600" />
                          {community.location}
                        </span>
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1 text-blue-600" />
                          {community.members.toLocaleString()}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-blue-600" />
                          {community.events}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {community.tags.map(tag => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button variant="gradient" className="w-full">
                        View Community
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
