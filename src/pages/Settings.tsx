import { Navbar } from '@/components/navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Save, Bell, Shield, CreditCard, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

const settingsSections = [
  {
    id: 'profile',
    title: 'Profile Settings',
    icon: Globe,
    fields: [
      { label: 'First Name', type: 'text', value: 'John', placeholder: 'Enter first name' },
      { label: 'Last Name', type: 'text', value: 'Doe', placeholder: 'Enter last name' },
      { label: 'Email', type: 'email', value: 'john.doe@example.com', placeholder: 'Enter email' },
      { label: 'Location', type: 'text', value: 'Mumbai, India', placeholder: 'Enter location' },
      { label: 'Bio', type: 'textarea', value: 'Passionate runner and tech enthusiast...', placeholder: 'Tell us about yourself' },
    ]
  },
  {
    id: 'notifications',
    title: 'Notifications',
    icon: Bell,
    fields: [
      { label: 'Email Notifications', type: 'checkbox', checked: true },
      { label: 'Event Reminders', type: 'checkbox', checked: true },
      { label: 'New Member Alerts', type: 'checkbox', checked: false },
      { label: 'Community Updates', type: 'checkbox', checked: true },
    ]
  },
  {
    id: 'security',
    title: 'Security & Privacy',
    icon: Shield,
    fields: [
      { label: 'Current Password', type: 'password', placeholder: 'Enter current password' },
      { label: 'New Password', type: 'password', placeholder: 'Enter new password' },
      { label: 'Confirm Password', type: 'password', placeholder: 'Confirm new password' },
      { label: 'Two-Factor Authentication', type: 'checkbox', checked: false },
    ]
  },
]

export default function Settings() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-gray-900">
            Settings
          </h1>
          <p className="text-xl text-gray-600">Manage your account settings and preferences</p>
        </motion.div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {settingsSections.map((section, sectionIndex) => {
            const Icon = section.icon
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIndex * 0.1 }}
              >
                <Card className="border-2 border-gray-200 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold">{section.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {section.fields.map((field, fieldIndex) => (
                      <div key={fieldIndex}>
                        {field.type === 'checkbox' ? (
                          <div className="flex items-center justify-between">
                            <Label className="text-sm font-medium">{field.label}</Label>
                            <input
                              type="checkbox"
                              defaultChecked={field.checked}
                              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600"
                            />
                          </div>
                        ) : field.type === 'textarea' ? (
                          <div>
                            <Label className="text-sm font-medium mb-2 block">{field.label}</Label>
                            <textarea
                              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-600"
                              placeholder={field.placeholder}
                              defaultValue={field.value}
                            />
                          </div>
                        ) : (
                          <div>
                            <Label className="text-sm font-medium mb-2 block">{field.label}</Label>
                            <Input
                              type={field.type}
                              placeholder={field.placeholder}
                              defaultValue={field.value}
                              className="focus:ring-2 focus:ring-blue-600"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                    <div className="pt-4 border-t">
                      <Button variant="gradient" size="lg">
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
