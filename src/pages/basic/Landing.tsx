import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { 
  MapPin, 
  Calendar, 
  Users, 
  Shield, 
  MessageCircle, 
  TrendingUp,
  Trophy,
  Laptop,
  Palette,
  Briefcase,
  Coffee,
  Plane,
  Book,
  Heart,
  Search,
  ArrowRight
} from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Communities',
    description: 'Create and manage communities at any scale - local, national, or global. From city clubs to worldwide movements.',
    stat: '50K+ Communities',
  },
  {
    icon: Calendar,
    title: 'Events & RSVPs',
    description: 'Organize events with RSVP management, ticketing, check-ins, and reminders. Support both free and paid events.',
    stat: '100K+ Events/Month',
  },
  {
    icon: MapPin,
    title: 'Location-Based',
    description: 'City and country-based discovery. Find communities near you or explore globally with advanced search.',
    stat: '150+ Cities',
  },
  {
    icon: TrendingUp,
    title: 'Analytics & Revenue',
    description: 'Track engagement, growth, and monetize through paid events, memberships, and commission tracking.',
    stat: 'Real-time Insights',
  },
  {
    icon: MessageCircle,
    title: 'Real-time Communication',
    description: 'Built-in chat, group messaging, and notifications to keep your community connected and engaged.',
    stat: 'Instant Updates',
  },
  {
    icon: Shield,
    title: 'Moderation & Safety',
    description: 'AI-powered moderation, content flagging, trust levels, and community guidelines for safe environments.',
    stat: 'AI Protected',
  },
]

const categories = [
  { icon: Trophy, name: 'Sports & Fitness', desc: 'Running, Cricket, Football, Yoga' },
  { icon: Laptop, name: 'Technology', desc: 'Coding, AI, Web Dev, Startups' },
  { icon: Palette, name: 'Arts & Culture', desc: 'Music, Painting, Dance, Theater' },
  { icon: Briefcase, name: 'Business', desc: 'Networking, Entrepreneurship' },
  { icon: Coffee, name: 'Food & Dining', desc: 'Cooking, Food Tours, Restaurants' },
  { icon: Plane, name: 'Travel & Adventure', desc: 'Hiking, Travel Groups, Tours' },
  { icon: Book, name: 'Education', desc: 'Learning, Workshops, Courses' },
  { icon: Heart, name: 'Social & Lifestyle', desc: 'Meetups, Friends, Hobbies' },
]

const stats = [
  { value: 50, suffix: 'K+', label: 'Active Communities' },
  { value: 2, suffix: 'M+', label: 'Members' },
  { value: 100, suffix: 'K+', label: 'Events Monthly' },
  { value: 150, suffix: '+', label: 'Cities' },
]

export default function Landing() {

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-blue-900 pt-20 sm:pt-24">
        {/* CaaS Business Module Background - Communities, Events, Locations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Community Groups Visualization */}
          <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="communityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.8 }} />
              </linearGradient>
            </defs>
            
            {/* Community Circles - Representing Different Community Groups */}
            {/* Top Left - Sports Community */}
            <g className="community-group" transform="translate(10%, 15%)">
              <circle cx="0" cy="0" r="40" fill="none" stroke="url(#communityGrad)" strokeWidth="2" opacity="0.4">
                <animate attributeName="r" values="40;50;40" dur="6s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.2;0.5;0.2" dur="6s" repeatCount="indefinite" />
              </circle>
              <circle cx="0" cy="0" r="25" fill="url(#communityGrad)" opacity="0.3">
                <animate attributeName="opacity" values="0.2;0.4;0.2" dur="4s" repeatCount="indefinite" />
              </circle>
              {/* People in community */}
              <circle cx="-15" cy="-10" r="4" fill="#3b82f6">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="15" cy="-10" r="4" fill="#3b82f6">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="0" cy="15" r="4" fill="#3b82f6">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.2s" repeatCount="indefinite" />
              </circle>
            </g>
            
            {/* Top Right - Tech Community */}
            <g className="community-group" transform="translate(85%, 20%)">
              <circle cx="0" cy="0" r="35" fill="none" stroke="url(#communityGrad)" strokeWidth="2" opacity="0.4">
                <animate attributeName="r" values="35;45;35" dur="5.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.2;0.5;0.2" dur="5.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="0" cy="0" r="22" fill="url(#communityGrad)" opacity="0.3">
                <animate attributeName="opacity" values="0.2;0.4;0.2" dur="4.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="-12" cy="-8" r="4" fill="#3b82f6">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.3s" repeatCount="indefinite" />
              </circle>
              <circle cx="12" cy="-8" r="4" fill="#3b82f6">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.7s" repeatCount="indefinite" />
              </circle>
              <circle cx="0" cy="12" r="4" fill="#3b82f6">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.4s" repeatCount="indefinite" />
              </circle>
            </g>
            
            {/* Bottom Left - Local Community */}
            <g className="community-group" transform="translate(15%, 80%)">
              <circle cx="0" cy="0" r="38" fill="none" stroke="url(#communityGrad)" strokeWidth="2" opacity="0.4">
                <animate attributeName="r" values="38;48;38" dur="6.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.2;0.5;0.2" dur="6.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="0" cy="0" r="24" fill="url(#communityGrad)" opacity="0.3">
                <animate attributeName="opacity" values="0.2;0.4;0.2" dur="4.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="-14" cy="-9" r="4" fill="#3b82f6">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.6s" repeatCount="indefinite" />
              </circle>
              <circle cx="14" cy="-9" r="4" fill="#3b82f6">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="0" cy="14" r="4" fill="#3b82f6">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.1s" repeatCount="indefinite" />
              </circle>
            </g>
            
            {/* Bottom Right - Global Community */}
            <g className="community-group" transform="translate(82%, 75%)">
              <circle cx="0" cy="0" r="42" fill="none" stroke="url(#communityGrad)" strokeWidth="2" opacity="0.4">
                <animate attributeName="r" values="42;52;42" dur="5.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.2;0.5;0.2" dur="5.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="0" cy="0" r="26" fill="url(#communityGrad)" opacity="0.3">
                <animate attributeName="opacity" values="0.2;0.4;0.2" dur="4.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="-16" cy="-11" r="4" fill="#3b82f6">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.9s" repeatCount="indefinite" />
              </circle>
              <circle cx="16" cy="-11" r="4" fill="#3b82f6">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="0" cy="16" r="4" fill="#3b82f6">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.5s" repeatCount="indefinite" />
              </circle>
            </g>
            
            {/* Center Platform Hub */}
            <g className="platform-hub" transform="translate(50%, 50%)">
              <circle cx="0" cy="0" r="50" fill="none" stroke="url(#communityGrad)" strokeWidth="3" opacity="0.5">
                <animate attributeName="r" values="50;65;50" dur="8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.6;0.3" dur="8s" repeatCount="indefinite" />
              </circle>
              <circle cx="0" cy="0" r="35" fill="url(#communityGrad)" opacity="0.4">
                <animate attributeName="opacity" values="0.3;0.5;0.3" dur="6s" repeatCount="indefinite" />
              </circle>
              <circle cx="0" cy="0" r="20" fill="#3b82f6" opacity="0.6">
                <animate attributeName="r" values="20;25;20" dur="5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0.8;0.5" dur="5s" repeatCount="indefinite" />
              </circle>
            </g>
            
            {/* Connection Paths - Communities connecting to platform */}
            <g stroke="url(#communityGrad)" strokeWidth="2" fill="none" opacity="0.25">
              <path d="M 10% 15% Q 30% 32% 50% 50%">
                <animate attributeName="opacity" values="0.15;0.4;0.15" dur="4s" repeatCount="indefinite" />
                <animate attributeName="stroke-dasharray" values="0,200;100,200;0,200" dur="4s" repeatCount="indefinite" />
              </path>
              <path d="M 85% 20% Q 70% 35% 50% 50%">
                <animate attributeName="opacity" values="0.15;0.4;0.15" dur="4.5s" repeatCount="indefinite" />
                <animate attributeName="stroke-dasharray" values="0,200;100,200;0,200" dur="4.5s" repeatCount="indefinite" />
              </path>
              <path d="M 15% 80% Q 32% 65% 50% 50%">
                <animate attributeName="opacity" values="0.15;0.4;0.15" dur="5s" repeatCount="indefinite" />
                <animate attributeName="stroke-dasharray" values="0,200;100,200;0,200" dur="5s" repeatCount="indefinite" />
              </path>
              <path d="M 82% 75% Q 68% 62% 50% 50%">
                <animate attributeName="opacity" values="0.15;0.4;0.15" dur="4.2s" repeatCount="indefinite" />
                <animate attributeName="stroke-dasharray" values="0,200;100,200;0,200" dur="4.2s" repeatCount="indefinite" />
              </path>
            </g>
          </svg>
          
          {/* Floating Business Icons - CaaS Specific - Hidden on mobile for better performance */}
          {/* Location Pins - Representing Local Communities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.15, y: 0 }}
            transition={{ duration: 2 }}
            className="hidden md:block absolute top-[12%] left-[8%]"
          >
            <MapPin className="w-12 h-12 md:w-16 md:h-16 text-blue-400 animate-float" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.12, y: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="hidden md:block absolute top-[18%] right-[12%]"
          >
            <MapPin className="w-10 h-10 md:w-12 md:h-12 text-blue-300 animate-float" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.15, y: 0 }}
            transition={{ duration: 2, delay: 1 }}
            className="hidden md:block absolute bottom-[15%] left-[10%]"
          >
            <MapPin className="w-12 h-12 md:w-14 md:h-14 text-blue-400 animate-float" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.12, y: 0 }}
            transition={{ duration: 2, delay: 1.5 }}
            className="hidden md:block absolute bottom-[20%] right-[8%]"
          >
            <MapPin className="w-8 h-8 md:w-10 md:h-10 text-blue-300 animate-float" />
          </motion.div>
          
          {/* Calendar Icons - Representing Events */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            className="hidden lg:block absolute top-[25%] left-[25%]"
          >
            <Calendar className="w-16 h-16 lg:w-20 lg:h-20 text-blue-400 animate-float" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
            className="hidden lg:block absolute bottom-[25%] right-[25%]"
          >
            <Calendar className="w-14 h-14 lg:w-18 lg:h-18 text-blue-300 animate-float" />
          </motion.div>
          
          {/* User Groups - Representing Community Members */}
          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 0.12, rotate: 0 }}
            transition={{ duration: 2, delay: 0.6 }}
            className="hidden lg:block absolute top-[35%] right-[15%]"
          >
            <Users className="w-20 h-20 lg:w-24 lg:h-24 text-blue-400 animate-float" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: 10 }}
            animate={{ opacity: 0.12, rotate: 0 }}
            transition={{ duration: 2, delay: 1.2 }}
            className="hidden lg:block absolute bottom-[35%] left-[15%]"
          >
            <Users className="w-18 h-18 lg:w-22 lg:h-22 text-blue-300 animate-float" />
          </motion.div>
          
          {/* Message Circles - Representing Community Communication */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2, delay: 0.9 }}
            className="hidden md:block absolute top-[50%] left-[5%]"
          >
            <MessageCircle className="w-12 h-12 md:w-16 md:h-16 text-blue-400 animate-float" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2, delay: 1.4 }}
            className="hidden md:block absolute top-[50%] right-[5%]"
          >
            <MessageCircle className="w-10 h-10 md:w-14 md:h-14 text-blue-300 animate-float" />
          </motion.div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-6 md:mb-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-2 md:px-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Users className="h-3 w-3 md:h-4 md:w-4 text-white flex-shrink-0" />
                <span className="text-xs md:text-sm text-white/90 font-medium text-center">Join 2M+ members across 150+ cities</span>
              </div>
            </motion.div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Headline */}
                <div className="mb-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-3 md:mb-4 leading-tight">
                    Build or Join
                    <br />
                    <span className="text-blue-200">Communities That Matter</span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-xl">
                    Create and manage your community, or discover and join existing ones. From local meetups to global movements.
                  </p>
                </div>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-8"
                >
                  <div className="text-center p-2 sm:p-3 md:p-4 bg-white/5 rounded-lg md:rounded-xl border border-white/10">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">50K+</div>
                    <div className="text-[10px] sm:text-xs text-white/70 mt-0.5 md:mt-1">Communities</div>
                  </div>
                  <div className="text-center p-2 sm:p-3 md:p-4 bg-white/5 rounded-lg md:rounded-xl border border-white/10">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">2M+</div>
                    <div className="text-[10px] sm:text-xs text-white/70 mt-0.5 md:mt-1">Members</div>
                  </div>
                  <div className="text-center p-2 sm:p-3 md:p-4 bg-white/5 rounded-lg md:rounded-xl border border-white/10">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">100K+</div>
                    <div className="text-[10px] sm:text-xs text-white/70 mt-0.5 md:mt-1">Events/Month</div>
                  </div>
                </motion.div>
              
                {/* Search Box */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="mb-6"
                >
                  <div className="bg-white rounded-xl md:rounded-2xl p-1.5 md:p-2 shadow-2xl">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                      <div className="flex items-center gap-2 sm:gap-3 flex-1 px-3 sm:px-4">
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 flex-shrink-0" />
                        <input
                          type="text"
                          placeholder="Search by city, country..."
                          className="flex-1 py-2 sm:py-3 md:py-4 outline-none text-gray-700 placeholder-gray-400 text-sm sm:text-base"
                        />
                      </div>
                      <Button variant="gradient" size="lg" className="px-4 sm:px-6 md:px-8 w-full sm:w-auto">
                        <Search className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="hidden sm:inline">Search</span>
                        <span className="sm:hidden">Go</span>
                      </Button>
                    </div>
                  </div>
                  <div className="mt-3 md:mt-4 flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span className="text-white/70 text-xs sm:text-sm">Popular cities:</span>
                    {['Mumbai', 'Delhi', 'Bangalore', 'New York', 'London'].map((city) => (
                      <button
                        key={city}
                        className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-xs sm:text-sm font-medium transition-all"
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* CTA Buttons - Two User Types */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="space-y-3 md:space-y-4"
                >
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
                    <Link to="/signup" className="w-full sm:w-auto">
                      <Button variant="gradient" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-xl w-full sm:w-auto">
                        Build a Community
                        <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                      </Button>
                    </Link>
                    <Link to="/discover" className="w-full sm:w-auto">
                      <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 w-full sm:w-auto">
                        Join Communities
                      </Button>
                    </Link>
                  </div>
                  <p className="text-white/70 text-xs sm:text-sm text-center sm:text-left">Free to start • No credit card required</p>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="mt-6 md:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-white/70"
                >
                  <div className="flex items-center gap-2">
                    <Shield className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>Verified Communities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>2M+ Active Members</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Side - Visual Elements */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="relative hidden lg:block"
              >
                {/* Community Preview Cards */}
                <div className="space-y-4">
                  {/* Card 1 */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                        <Trophy className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white">Mumbai Runners</h3>
                        <p className="text-sm text-white/70">2,450 members</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <Calendar className="h-4 w-4" />
                      <span>12 events this month</span>
                    </div>
                  </motion.div>

                  {/* Card 2 */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                        <Laptop className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white">Tech Meetup</h3>
                        <p className="text-sm text-white/70">8,900 members</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <Calendar className="h-4 w-4" />
                      <span>45 events this month</span>
                    </div>
                  </motion.div>

                  {/* Card 3 */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0, duration: 0.6 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                        <Heart className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white">Fitness Club</h3>
                        <p className="text-sm text-white/70">5,200 members</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <Calendar className="h-4 w-4" />
                      <span>28 events this month</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Split for Builders & Joiners */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 md:mb-4 text-gray-900 leading-tight">
              Built for
              <br />
              <span className="text-blue-600">Both Sides</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto px-4">
              Powerful tools for community builders. Seamless discovery for community members. One platform, two experiences.
            </p>
          </motion.div>

          {/* Two Columns - Builders vs Joiners */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* For Community Builders */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">For Community Builders</h3>
              </div>
              <div className="space-y-4">
                {features.filter((_, i) => i < 3).map((feature) => {
                  const Icon = feature.icon
                  return (
                    <div key={feature.title} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="mt-6 pt-6 border-t border-blue-200">
                <Link to="/signup">
                  <Button variant="gradient" size="lg" className="w-full">
                    Start Building
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* For Community Members */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                  <Search className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">For Community Members</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Discover Communities</h4>
                    <p className="text-sm text-gray-600">Find local, national, or global communities by location, category, or interest.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Calendar className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Join Events</h4>
                    <p className="text-sm text-gray-600">RSVP to events, get reminders, check in on-site, and connect with attendees.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Connect & Engage</h4>
                    <p className="text-sm text-gray-600">Chat with members, share posts, and build meaningful connections within communities.</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link to="/discover">
                  <Button variant="outline" size="lg" className="w-full">
                    Explore Communities
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section - Clean Grid */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 leading-tight">
              Explore by
              <br />
              <span className="text-blue-600">Category</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Find communities that match your interests. From local meetups to global movements.
            </p>
          </motion.div>

            {/* Categories Grid - Clean Layout */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <Link to="/discover">
                    <div className="h-full bg-white rounded-xl p-6 border-2 border-transparent hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-pointer">
                      <div className="flex flex-col items-center text-center">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors duration-300"
                        >
                          <Icon className="h-6 w-6 text-white" />
                        </motion.div>
                        <h3 className="font-bold text-base mb-1.5 text-gray-900 group-hover:text-blue-600 transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-xs text-gray-500 leading-snug">
                          {category.desc}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center"
          >
            <Link to="/discover">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View all categories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Business Metrics */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 leading-tight">
              Trusted by
              <br />
              <span className="text-blue-600">thousands</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Join a growing network of communities making real impact worldwide.
            </p>
          </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => {
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <div className="bg-gray-50 rounded-xl p-6 border-2 border-transparent hover:border-blue-300 hover:bg-white transition-all duration-300 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200, damping: 15 }}
                      className="text-4xl md:text-5xl lg:text-6xl font-black mb-2 leading-none text-gray-900"
                    >
                      {stat.value}
                      <span className="text-blue-600">{stat.suffix}</span>
                    </motion.div>
                    <div className="text-sm font-medium text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold">CommunityHub</div>
                  <div className="text-xs text-gray-400">Find your people. Anywhere.</div>
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mt-4">
                The complete platform for building and joining communities. From local meetups to global movements.
              </p>
            </div>

            {/* For Builders */}
            <div>
              <h4 className="font-bold text-white mb-4">For Builders</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/signup" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Create Community
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/creators/dashboard" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/creators/communities/create" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Start Building
                  </Link>
                </li>
              </ul>
            </div>

            {/* For Members */}
            <div>
              <h4 className="font-bold text-white mb-4">For Members</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/discover" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Discover
                  </Link>
                </li>
                <li>
                  <Link to="/creators/communities" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Communities
                  </Link>
                </li>
                <li>
                  <Link to="/creators/events" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Join Free
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()} CommunityHub. All rights reserved.
              </div>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms
                </Link>
                <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

