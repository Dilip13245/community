import { Navbar } from '@/components/navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowLeft, Calendar, MapPin, Clock, DollarSign, Users } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function EventCreate() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    community: 'Mumbai Runners Club',
    date: '',
    time: '',
    endTime: '',
    location: '',
    capacity: '',
    price: '0',
    type: 'free',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    navigate('/events')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link to="/events">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Button>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-gray-900">
              Create Event
            </h1>
            <p className="text-xl text-gray-600">Organize an event for your community</p>
          </motion.div>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="border-2 border-gray-200 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Event Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Event Name */}
                <div>
                  <Label className="text-sm font-medium mb-2 block">Event Name *</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      placeholder="e.g., Weekly Run - Marine Drive"
                      className="pl-10"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <Label className="text-sm font-medium mb-2 block">Description *</Label>
                  <textarea
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Describe your event, what attendees can expect, and any requirements..."
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>

                {/* Community */}
                <div>
                  <Label className="text-sm font-medium mb-2 block">Community *</Label>
                  <select
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                    value={formData.community}
                    onChange={(e) => setFormData({ ...formData, community: e.target.value })}
                  >
                    <option value="Mumbai Runners Club">Mumbai Runners Club</option>
                    <option value="Tech Startup Network">Tech Startup Network</option>
                    <option value="Delhi Foodies">Delhi Foodies</option>
                  </select>
                </div>

                {/* Date & Time */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Date *</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type="date"
                        className="pl-10"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Start Time *</Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type="time"
                        className="pl-10"
                        required
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-2 block">End Time *</Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type="time"
                        className="pl-10"
                        required
                        value={formData.endTime}
                        onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <Label className="text-sm font-medium mb-2 block">Location *</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      placeholder="e.g., Marine Drive, Mumbai"
                      className="pl-10"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>
                </div>

                {/* Capacity & Pricing */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Capacity *</Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type="number"
                        placeholder="100"
                        className="pl-10"
                        required
                        value={formData.capacity}
                        onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Event Type *</Label>
                    <select
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    >
                      <option value="free">Free Event</option>
                      <option value="paid">Paid Event</option>
                    </select>
                  </div>
                </div>

                {formData.type === 'paid' && (
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Price (₹) *</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type="number"
                        placeholder="500"
                        className="pl-10"
                        required={formData.type === 'paid'}
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      />
                    </div>
                  </div>
                )}

                {/* Submit Buttons */}
                <div className="flex justify-end gap-4 pt-4 border-t">
                  <Link to="/events">
                    <Button type="button" variant="outline" size="lg">
                      Cancel
                    </Button>
                  </Link>
                  <Button type="submit" variant="gradient" size="lg">
                    Create Event
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
