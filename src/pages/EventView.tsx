import { Navbar } from '@/components/navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Clock, Users, DollarSign, ArrowLeft, Share2, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const eventData = {
  name: 'Weekly Run - Marine Drive',
  community: 'Mumbai Runners Club',
  description: 'Join us for our weekly morning run along the beautiful Marine Drive. All fitness levels welcome! We\'ll start with a warm-up, run for 5-10km, and end with stretching.',
  date: 'Saturday, January 20, 2024',
  time: '6:00 AM - 8:00 AM',
  location: 'Marine Drive, Mumbai, Maharashtra, India',
  price: 'Free',
  type: 'free',
  rsvps: 45,
  capacity: 100,
  organizer: 'Rajesh Kumar',
}

const attendees = [
  { name: 'Priya Sharma', joined: '2 days ago' },
  { name: 'Amit Patel', joined: '3 days ago' },
  { name: 'Sneha Reddy', joined: '4 days ago' },
  { name: 'Rahul Mehta', joined: '5 days ago' },
]

export default function EventView() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 max-w-5xl">
        {/* Back Button */}
        <Link to="/events">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Events
          </Button>
        </Link>

        {/* Event Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card className="border-2 border-gray-200 shadow-lg overflow-hidden">
            <div className="h-64 bg-gradient-to-r from-blue-500 to-blue-700 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Calendar className="h-32 w-32 text-white opacity-30" />
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                  eventData.type === 'paid' 
                    ? 'bg-white/20 backdrop-blur-sm text-white' 
                    : 'bg-green-500/20 backdrop-blur-sm text-white'
                }`}>
                  {eventData.type === 'paid' ? `₹${eventData.price}` : 'Free Event'}
                </span>
              </div>
            </div>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                <div className="flex-1">
                  <div className="mb-4">
                    <Link to="/communities/1" className="text-blue-600 hover:underline text-sm font-medium mb-2 inline-block">
                      {eventData.community}
                    </Link>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">{eventData.name}</h1>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{eventData.description}</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <div className="text-sm text-gray-600">Date</div>
                        <div className="font-semibold text-gray-900">{eventData.date}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <div className="text-sm text-gray-600">Time</div>
                        <div className="font-semibold text-gray-900">{eventData.time}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <div className="text-sm text-gray-600">Location</div>
                        <div className="font-semibold text-gray-900">{eventData.location}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <div className="text-sm text-gray-600">RSVPs</div>
                        <div className="font-semibold text-gray-900">{eventData.rsvps} / {eventData.capacity}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 w-full md:w-auto">
                  <Button variant="gradient" size="lg" className="w-full md:w-auto">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    RSVP Now
                  </Button>
                  <Button variant="outline" size="lg" className="w-full md:w-auto">
                    Add to Calendar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Attendees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border-2 border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Attendees ({eventData.rsvps})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                {attendees.map((attendee, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">
                      {attendee.name.charAt(0)}
                    </div>
                    <div className="font-semibold text-sm text-gray-900">{attendee.name}</div>
                    <div className="text-xs text-gray-500">{attendee.joined}</div>
                  </div>
                ))}
                {eventData.rsvps > 4 && (
                  <div className="text-center p-4 bg-gray-50 rounded-lg flex items-center justify-center">
                    <div className="text-sm text-gray-600">
                      +{eventData.rsvps - 4} more
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
