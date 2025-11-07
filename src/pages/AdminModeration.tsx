import { Navbar } from '@/components/navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Shield, CheckCircle, XCircle, AlertTriangle, ArrowLeft, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

const moderationItems = [
  {
    id: 1,
    type: 'Community',
    name: 'New Community Request: Delhi Foodies',
    description: 'A community for food lovers in Delhi to discover restaurants and share experiences.',
    submittedBy: 'Rajesh Kumar',
    submittedAt: '2 hours ago',
    status: 'pending',
    reason: 'New community creation request',
  },
  {
    id: 2,
    type: 'Post',
    name: 'Content Flagged: Inappropriate Language',
    description: 'Post contains inappropriate language and has been flagged by 3 members.',
    submittedBy: 'Community: Mumbai Runners',
    submittedAt: '5 hours ago',
    status: 'pending',
    reason: 'Inappropriate content',
  },
  {
    id: 3,
    type: 'User',
    name: 'User Report: Spam Account',
    description: 'User reported for spam behavior and fake profile information.',
    submittedBy: 'Automated System',
    submittedAt: '1 day ago',
    status: 'pending',
    reason: 'Spam account',
  },
  {
    id: 4,
    type: 'Event',
    name: 'Event Review: Tech Meetup',
    description: 'Event requires review due to paid ticketing and large capacity.',
    submittedBy: 'Tech Startup Network',
    submittedAt: '2 days ago',
    status: 'pending',
    reason: 'Paid event review',
  },
]

export default function AdminModeration() {
  const [items, setItems] = useState(moderationItems)

  const handleAction = (id: number, action: 'approve' | 'reject') => {
    setItems(items.filter(item => item.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <Link to="/admin/dashboard">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-gray-900">
              Moderation Queue
            </h1>
            <p className="text-xl text-gray-600">Review and moderate platform content</p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-2 border-gray-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">{items.length}</div>
              <div className="text-sm text-gray-600">Pending Reviews</div>
            </CardContent>
          </Card>
          <Card className="border-2 border-gray-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">12</div>
              <div className="text-sm text-gray-600">Approved Today</div>
            </CardContent>
          </Card>
          <Card className="border-2 border-gray-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-red-600 mb-1">3</div>
              <div className="text-sm text-gray-600">Rejected Today</div>
            </CardContent>
          </Card>
          <Card className="border-2 border-gray-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">98%</div>
              <div className="text-sm text-gray-600">AI Accuracy</div>
            </CardContent>
          </Card>
        </div>

        {/* Moderation Items */}
        <div className="space-y-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-2 border-gray-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                          <Shield className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                              {item.type}
                            </span>
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                              {item.status}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Submitted by: </span>
                          <span className="font-medium text-gray-900">{item.submittedBy}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Reason: </span>
                          <span className="font-medium text-gray-900">{item.reason}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Submitted: </span>
                          <span className="font-medium text-gray-900">{item.submittedAt}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <Button variant="outline" size="sm">
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </Button>
                      <Button
                        variant="gradient"
                        size="sm"
                        onClick={() => handleAction(item.id, 'approve')}
                      >
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Approve
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 border-red-300 hover:bg-red-50"
                        onClick={() => handleAction(item.id, 'reject')}
                      >
                        <XCircle className="mr-2 h-4 w-4" />
                        Reject
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {items.length === 0 && (
          <Card className="border-2 border-dashed border-gray-300">
            <CardContent className="p-12 text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">All caught up!</h3>
              <p className="text-gray-600">No items pending moderation</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
