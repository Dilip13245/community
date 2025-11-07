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
              Events
            </h1>
            <p className="text-xl text-gray-600">Discover and manage events across communities</p>
          </motion.div>
          <Link to="/events/create">
            <Button variant="gradient" size="lg">
              <Plus className="mr-2 h-4 w-4" />
              Create Event
            </Button>
          </Link>
        </div>

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
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Link to={`/events/${event.id}`}>
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
