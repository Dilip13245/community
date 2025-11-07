import { Navbar } from '@/components/navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowLeft, Users, MapPin, Tag, Image as ImageIcon } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

const categories = [
  'Sports & Fitness', 'Technology', 'Arts & Culture', 'Business',
  'Food & Dining', 'Travel & Adventure', 'Education', 'Social & Lifestyle'
]

export default function CommunityCreate() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    location: '',
    tags: [] as string[],
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    navigate('/communities')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link to="/communities">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Communities
            </Button>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-gray-900">
              Create Community
            </h1>
            <p className="text-xl text-gray-600">Start building your community today</p>
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
              <CardTitle className="text-2xl font-bold">Community Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Community Name */}
                <div>
                  <Label className="text-sm font-medium mb-2 block">Community Name *</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      placeholder="e.g., Mumbai Runners Club"
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
                    placeholder="Describe your community, its purpose, and what members can expect..."
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>

                {/* Category */}
                <div>
                  <Label className="text-sm font-medium mb-2 block">Category *</Label>
                  <select
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="">Select a category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Location */}
                <div>
                  <Label className="text-sm font-medium mb-2 block">Location *</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      placeholder="e.g., Mumbai, India"
                      className="pl-10"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <Label className="text-sm font-medium mb-2 block">Tags</Label>
                  <div className="relative">
                    <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      placeholder="Add tags (comma separated)"
                      className="pl-10"
                      value={formData.tags.join(', ')}
                      onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(',').map(t => t.trim()).filter(t => t) })}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Separate tags with commas</p>
                </div>

                {/* Community Image */}
                <div>
                  <Label className="text-sm font-medium mb-2 block">Community Image</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-sm text-gray-600 mb-2">Upload a community image</p>
                    <Button type="button" variant="outline" size="sm">
                      Choose File
                    </Button>
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex justify-end gap-4 pt-4 border-t">
                  <Link to="/communities">
                    <Button type="button" variant="outline" size="lg">
                      Cancel
                    </Button>
                  </Link>
                  <Button type="submit" variant="gradient" size="lg">
                    Create Community
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
