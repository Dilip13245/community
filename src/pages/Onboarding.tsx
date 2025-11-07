import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Camera, X, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const interests = [
  'Running & Marathons', 'Cricket', 'Football', 'Yoga & Meditation', 'Cycling',
  'Swimming', 'Tennis', 'Basketball', 'Technology', 'Coding', 'Music', 'Art & Painting',
  'Photography', 'Cooking', 'Reading', 'Travel', 'Business & Networking', 'Food & Dining'
]

export default function Onboarding() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const navigate = useNavigate()

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="border-2 border-gray-200 shadow-xl">
            <CardHeader className="text-center">
              <div className="w-32 h-2 bg-gray-200 rounded-full mx-auto mb-6">
                <div className="w-2/3 h-full bg-blue-600 rounded-full" />
              </div>
              <CardTitle className="text-4xl font-bold mb-2 text-gray-900">Complete Your Profile</CardTitle>
              <p className="text-gray-600">Help us find the perfect communities for you</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Profile Photo */}
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-blue-600 mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                    U
                  </div>
                  <Button type="button" variant="outline" size="sm">
                    <Camera className="mr-2 h-4 w-4" />
                    Upload Photo
                  </Button>
                </div>

                {/* Bio */}
                <div>
                  <label className="text-sm font-medium mb-2 block text-gray-700">Bio</label>
                  <textarea
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Tell us a bit about yourself, your interests, and what you're looking for in communities..."
                  />
                </div>

                {/* Interests */}
                <div>
                  <label className="text-sm font-medium mb-2 block text-gray-700">Interests & Hobbies</label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {selectedInterests.map(interest => (
                      <span
                        key={interest}
                        className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm flex items-center gap-2"
                      >
                        {interest}
                        <button
                          type="button"
                          onClick={() => toggleInterest(interest)}
                          className="hover:bg-white/20 rounded-full p-0.5"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                  <select
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    onChange={(e) => {
                      if (e.target.value) {
                        toggleInterest(e.target.value)
                        e.target.value = ''
                      }
                    }}
                  >
                    <option value="">Add an interest...</option>
                    {interests.filter(i => !selectedInterests.includes(i)).map(interest => (
                      <option key={interest} value={interest}>{interest}</option>
                    ))}
                  </select>
                  <p className="text-xs text-gray-500 mt-2">Select at least 3 interests to get better community recommendations</p>
                </div>

                {/* Buttons */}
                <div className="flex justify-between pt-4">
                  <Button type="button" variant="outline" onClick={() => navigate(-1)}>
                    Back
                  </Button>
                  <Button type="submit" variant="gradient" size="lg">
                    Complete Setup
                    <ArrowRight className="ml-2 h-4 w-4" />
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
