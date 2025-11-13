import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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
    navigate('/creators/dashboard')
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-blue-900 pt-20 sm:pt-24">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="onboardingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.8 }} />
              </linearGradient>
            </defs>
            <circle cx="30%" cy="35%" r="50" fill="none" stroke="url(#onboardingGrad)" strokeWidth="2" opacity="0.4">
              <animate attributeName="r" values="50;60;50" dur="6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur="6s" repeatCount="indefinite" />
            </circle>
            <circle cx="70%" cy="65%" r="40" fill="none" stroke="url(#onboardingGrad)" strokeWidth="2" opacity="0.4">
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
            <Camera className="w-12 h-12 md:w-16 md:h-16 text-blue-400 animate-float" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
            className="hidden lg:block absolute bottom-[30%] right-[20%]"
          >
            <ArrowRight className="w-20 h-20 lg:w-24 lg:h-24 text-blue-400 animate-float" />
          </motion.div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12 sm:py-16 md:py-20">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-2 md:mb-3 leading-tight">
                Complete Your Profile
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
                Help us find the perfect communities for you
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24 max-w-3xl -mt-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
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
