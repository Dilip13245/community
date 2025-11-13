import { Navbar } from '@/components/navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, ArrowRight, DollarSign } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Free',
    price: '₹0',
    period: '/forever',
    description: 'Perfect for getting started',
    features: [
      'Create 1 community',
      'Up to 100 members',
      'Unlimited free events',
      'Basic analytics',
      'Community chat',
      'Mobile app access',
    ],
    buttonText: 'Get Started Free',
    buttonVariant: 'outline' as const,
  },
  {
    name: 'Premium',
    price: '₹999',
    period: '/month',
    description: 'For growing communities',
    featured: true,
    features: [
      'Create unlimited communities',
      'Unlimited members',
      'Unlimited events (free & paid)',
      'Advanced analytics dashboard',
      'Paid events & memberships',
      'Revenue tracking',
      'Custom branding',
      'Priority support',
      '5% platform commission',
    ],
    buttonText: 'Upgrade to Premium',
    buttonVariant: 'gradient' as const,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations',
    features: [
      'Everything in Premium',
      'White-label solution',
      'API access',
      'Custom integrations',
      'Dedicated account manager',
      'SLA guarantee',
      'Custom commission rates',
      '24/7 support',
      'On-premise deployment',
    ],
    buttonText: 'Contact Sales',
    buttonVariant: 'outline' as const,
  },
]

export default function Pricing() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-blue-900 pt-20 sm:pt-24">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="pricingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.8 }} />
              </linearGradient>
            </defs>
            <circle cx="30%" cy="30%" r="50" fill="none" stroke="url(#pricingGrad)" strokeWidth="2" opacity="0.4">
              <animate attributeName="r" values="50;60;50" dur="6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur="6s" repeatCount="indefinite" />
            </circle>
            <circle cx="70%" cy="70%" r="40" fill="none" stroke="url(#pricingGrad)" strokeWidth="2" opacity="0.4">
              <animate attributeName="r" values="40;50;40" dur="5.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur="5.5s" repeatCount="indefinite" />
            </circle>
          </svg>
          
          {/* Floating Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.12, y: 0 }}
            transition={{ duration: 2 }}
            className="hidden md:block absolute top-[22%] left-[15%]"
          >
            <DollarSign className="w-12 h-12 md:w-16 md:h-16 text-blue-400 animate-float" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
            className="hidden lg:block absolute bottom-[28%] right-[20%]"
          >
            <Check className="w-20 h-20 lg:w-24 lg:h-24 text-blue-400 animate-float" />
          </motion.div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-3 md:mb-4 leading-tight">
                Simple
                <br />
                <span className="text-blue-200">Pricing</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                Start free, upgrade when you're ready to grow. No credit card required.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24 max-w-7xl -mt-8 relative z-10">

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <Card className={`h-full border-2 ${plan.featured ? 'border-blue-600 shadow-2xl' : 'border-gray-200 hover:border-blue-300'} transition-all duration-300`}>
                <CardHeader className="text-center pb-4">
                  {plan.featured && (
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full mb-3">
                      Most Popular
                    </span>
                  )}
                  <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                  <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-5xl font-black text-gray-900">{plan.price}</span>
                    {plan.period && <span className="text-gray-600 ml-2">{plan.period}</span>}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/signup">
                    <Button
                      variant={plan.buttonVariant}
                      className="w-full"
                      size="lg"
                    >
                      {plan.buttonText}
                      {plan.buttonVariant === 'gradient' && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Can I change plans later?',
                a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, debit cards, UPI, and bank transfers for Indian customers.'
              },
              {
                q: 'Is there a setup fee?',
                a: 'No, there are no setup fees. You only pay for your chosen plan.'
              },
              {
                q: 'What happens if I exceed my plan limits?',
                a: 'We\'ll notify you when you\'re approaching limits. You can upgrade anytime to continue growing.'
              },
            ].map((faq, index) => (
              <Card key={index} className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-sm text-gray-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
