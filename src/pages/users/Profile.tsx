import { Navbar } from '@/components/navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Calendar, Users, Mail, Edit } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const userStats = [
  { label: 'Communities Joined', value: '8' },
  { label: 'Events Attended', value: '24' },
  { label: 'Events Organized', value: '5' },
  { label: 'Connections', value: '156' },
]

const myCommunities = [
  { name: 'Mumbai Runners Club', role: 'Member', joined: 'Jan 2023' },
  { name: 'Tech Startup Network', role: 'Organizer', joined: 'Mar 2023' },
  { name: 'Delhi Foodies', role: 'Member', joined: 'Jun 2023' },
]

export default function Profile() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-blue-900 pt-20 sm:pt-24">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="profileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.8 }} />
              </linearGradient>
            </defs>
            <circle cx="30%" cy="35%" r="50" fill="none" stroke="url(#profileGrad)" strokeWidth="2" opacity="0.4">
              <animate attributeName="r" values="50;60;50" dur="6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur="6s" repeatCount="indefinite" />
            </circle>
            <circle cx="70%" cy="65%" r="40" fill="none" stroke="url(#profileGrad)" strokeWidth="2" opacity="0.4">
              <animate attributeName="r" values="40;50;40" dur="5.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur="5.5s" repeatCount="indefinite" />
            </circle>
          </svg>
          
          {/* Floating Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.12, y: 0 }}
            transition={{ duration: 2 }}
            className="hidden md:block absolute top-[25%] left-[15%]"
          >
            <Users className="w-12 h-12 md:w-16 md:h-16 text-blue-400 animate-float" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, delay: 0.6 }}
            className="hidden lg:block absolute bottom-[30%] right-[20%]"
          >
            <MapPin className="w-20 h-20 lg:w-24 lg:h-24 text-blue-400 animate-float" />
          </motion.div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-2 md:mb-3 leading-tight">
                Profile
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
                Your community journey and achievements
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24 max-w-7xl -mt-8 relative z-10">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Card className="border-2 border-gray-200 shadow-lg overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-blue-500 to-blue-700" />
            <CardContent className="p-6 -mt-16">
              <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
                <div className="w-32 h-32 rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl font-bold border-4 border-white shadow-lg">
                  JD
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">John Doe</h1>
                      <div className="flex items-center gap-4 text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-blue-600" />
                          Mumbai, India
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-blue-600" />
                          Member since Jan 2023
                        </div>
                      </div>
                    </div>
                    <Link to="/users/settings">
                      <Button variant="outline" size="sm">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Profile
                      </Button>
                    </Link>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Passionate runner and tech enthusiast. Love connecting with like-minded people and building communities.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Running', 'Technology', 'Networking', 'Fitness'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Stats */}
          <div className="lg:col-span-1">
            <Card className="border-2 border-gray-200 shadow-lg mb-6">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {userStats.map((stat) => (
                    <div key={stat.label} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="border-2 border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Mail className="h-4 w-4 mr-2 text-blue-600" />
                  john.doe@example.com
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                  Mumbai, Maharashtra, India
                </div>
              </CardContent>
            </Card>
          </div>

          {/* My Communities */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold">My Communities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myCommunities.map((community, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                          {community.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{community.name}</h3>
                          <div className="flex items-center gap-3 text-sm text-gray-600">
                            <span className="flex items-center">
                              <Users className="h-3 w-3 mr-1" />
                              {community.role}
                            </span>
                            <span>•</span>
                            <span>Joined {community.joined}</span>
                          </div>
                        </div>
                      </div>
                      <Link to={`/users/communities/${index + 1}`}>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
