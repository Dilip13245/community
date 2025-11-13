import { Navbar } from '@/components/navbar'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Calendar, MapPin, Users, Clock, DollarSign, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const events = [
  {
    id: 1,
    name: 'Weekly Run - Marine Drive',
    community: 'Mumbai Runners Club',
    date: 'Saturday, Jan 20, 2024',
    time: '6:00 AM',
    location: 'Marine Drive, Mumbai',
    rsvps: 45,
    capacity: 100,
    price: 'Free',
    type: 'free'
  },
  {
    id: 2,
    name: 'Tech Startup Pitch Night',
    community: 'Tech Startup Network',
    date: 'Friday, Jan 19, 2024',
    time: '7:00 PM',
    location: 'Bangalore Tech Hub',
    rsvps: 78,
    capacity: 150,
    price: '₹500',
    type: 'paid'
  },
  {
    id: 3,
    name: 'Food Tour - Old Delhi',
    community: 'Delhi Foodies',
    date: 'Sunday, Jan 21, 2024',
    time: '10:00 AM',
    location: 'Chandni Chowk, Delhi',
    rsvps: 32,
    capacity: 50,
    price: '₹1,200',
    type: 'paid'
  },
  {
    id: 4,
    name: 'Community Meetup',
    community: 'Mumbai Runners Club',
    date: 'Sunday, Jan 21, 2024',
    time: '4:00 PM',
    location: 'Cafe Coffee Day, Bandra',
    rsvps: 28,
    capacity: 40,
    price: 'Free',
    type: 'free'
  },
]

export default function Events() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-blue-900 pt-20 sm:pt-24">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="eventsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.8 }} />
              </linearGradient>
            </defs>
            <circle cx="25%" cy="25%" r="55" fill="none" stroke="url(#eventsGrad)" strokeWidth="2" opacity="0.4">
              <animate attributeName="r" values="55;65;55" dur="6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur="6s" repeatCount="indefinite" />
            </circle>
            <circle cx="75%" cy="75%" r="45" fill="none" stroke="url(#eventsGrad)" strokeWidth="2" opacity="0.4">
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
            <Calendar className="w-12 h-12 md:w-16 md:h-16 text-blue-400 animate-float" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, delay: 0.7 }}
            className="hidden lg:block absolute bottom-[30%] right-[18%]"
          >
            <MapPin className="w-20 h-20 lg:w-24 lg:h-24 text-blue-400 animate-float" />
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
                  Events
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
                  Discover and manage events across communities
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <Link to="/creators/events/create">
                  <Button variant="gradient" size="lg" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Event
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24 max-w-7xl -mt-8 relative z-10">

        {/* Filter Tabs */}
        <div className="flex gap-4 mb-8">
          {['All Events', 'My Events', 'Upcoming', 'Past'].map((tab, index) => (
            <Button
              key={tab}
              variant={index === 0 ? 'gradient' : 'outline'}
              size="sm"
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <Link to={`/users/events/${event.id}`}>
                <Card className="h-full border-2 border-transparent hover:border-blue-300 hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="relative h-32 bg-gradient-to-br from-blue-500 to-blue-700 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Calendar className="h-12 w-12 text-white opacity-30" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.type === 'paid' 
                          ? 'bg-white/20 backdrop-blur-sm text-white' 
                          : 'bg-green-500/20 backdrop-blur-sm text-white'
                      }`}>
                        {event.type === 'paid' ? 'Paid' : 'Free'}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 line-clamp-1">{event.name}</h3>
                    <p className="text-sm text-blue-600 mb-4">{event.community}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2 text-blue-600" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                        <span className="line-clamp-1">{event.location}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-gray-600">
                          <Users className="h-4 w-4 mr-2 text-blue-600" />
                          {event.rsvps}/{event.capacity} RSVPs
                        </div>
                        {event.type === 'paid' && (
                          <div className="flex items-center text-blue-600 font-semibold">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {event.price}
                          </div>
                        )}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
