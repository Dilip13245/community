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
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-blue-900 pt-20 sm:pt-24">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="communitiesGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.8 }} />
              </linearGradient>
            </defs>
            <circle cx="20%" cy="30%" r="60" fill="none" stroke="url(#communitiesGrad)" strokeWidth="2" opacity="0.4">
              <animate attributeName="r" values="60;70;60" dur="6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur="6s" repeatCount="indefinite" />
            </circle>
            <circle cx="80%" cy="70%" r="50" fill="none" stroke="url(#communitiesGrad)" strokeWidth="2" opacity="0.4">
              <animate attributeName="r" values="50;60;50" dur="5.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur="5.5s" repeatCount="indefinite" />
            </circle>
          </svg>
          
          {/* Floating Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.15, y: 0 }}
            transition={{ duration: 2 }}
            className="hidden md:block absolute top-[18%] left-[10%]"
          >
            <Users className="w-12 h-12 md:w-16 md:h-16 text-blue-400 animate-float" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, delay: 0.6 }}
            className="hidden lg:block absolute bottom-[25%] right-[15%]"
          >
            <TrendingUp className="w-20 h-20 lg:w-24 lg:h-24 text-blue-400 animate-float" />
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
                  My Communities
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
                  Manage and grow your communities
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

        {/* Communities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {myCommunities.map((community, index) => (
            <motion.div
              key={community.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <Link to={`/users/communities/${community.id}`}>
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
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 break-words">{community.name}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2 break-words">{community.description}</p>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
                      <div>
                        <div className="flex items-center text-xs sm:text-sm text-gray-600 mb-1">
                          <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-blue-600 flex-shrink-0" />
                          <span className="truncate">Location</span>
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-gray-900 break-words">{community.location}</p>
                      </div>
                      <div>
                        <div className="flex items-center text-xs sm:text-sm text-gray-600 mb-1">
                          <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-blue-600 flex-shrink-0" />
                          <span className="truncate">Members</span>
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-gray-900">{community.members.toLocaleString()}</p>
                      </div>
                      <div>
                        <div className="flex items-center text-xs sm:text-sm text-gray-600 mb-1">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-blue-600 flex-shrink-0" />
                          <span className="truncate">Events</span>
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-gray-900">{community.events}</p>
                      </div>
                      <div>
                        <div className="flex items-center text-xs sm:text-sm text-gray-600 mb-1">
                          <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-blue-600 flex-shrink-0" />
                          <span className="truncate">Revenue</span>
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-gray-900">{community.revenue}</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full min-h-[44px] text-sm sm:text-base">
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
              <Link to="/creators/communities/create">
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
