import { Navbar } from '@/components/navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Save, Bell, Shield, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

interface SettingField {
  label: string
  type: string
  placeholder?: string
  value?: string
  checked?: boolean
}

interface SettingSection {
  id: string
  title: string
  icon: React.ComponentType<{ className?: string }>
  fields: SettingField[]
}

const settingsSections: SettingSection[] = [
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
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-blue-900 pt-20 sm:pt-24">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="settingsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.8 }} />
              </linearGradient>
            </defs>
            <circle cx="25%" cy="30%" r="55" fill="none" stroke="url(#settingsGrad)" strokeWidth="2" opacity="0.4">
              <animate attributeName="r" values="55;65;55" dur="6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur="6s" repeatCount="indefinite" />
            </circle>
            <circle cx="75%" cy="70%" r="45" fill="none" stroke="url(#settingsGrad)" strokeWidth="2" opacity="0.4">
              <animate attributeName="r" values="45;55;45" dur="5.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur="5.5s" repeatCount="indefinite" />
            </circle>
          </svg>
          
          {/* Floating Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.12, y: 0 }}
            transition={{ duration: 2 }}
            className="hidden md:block absolute top-[22%] left-[12%]"
          >
            <Shield className="w-12 h-12 md:w-16 md:h-16 text-blue-400 animate-float" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, delay: 0.7 }}
            className="hidden lg:block absolute bottom-[28%] right-[18%]"
          >
            <Bell className="w-20 h-20 lg:w-24 lg:h-24 text-blue-400 animate-float" />
          </motion.div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-2 md:mb-3 leading-tight">
                Settings
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
                Manage your account settings and preferences
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24 max-w-4xl -mt-8 relative z-10">

        {/* Settings Sections */}
        <div className="space-y-6">
          {settingsSections.map((section, sectionIndex) => {
            const Icon = section.icon
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: sectionIndex * 0.1, duration: 0.5 }}
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
