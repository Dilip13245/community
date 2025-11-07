import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { ScrollProgress } from '@/components/scroll-progress'
import { FloatingShapes } from '@/components/floating-shapes'

// Pages
import Landing from '@/pages/Landing'
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'
import Onboarding from '@/pages/Onboarding'
import Discover from '@/pages/Discover'
import Communities from '@/pages/Communities'
import CommunityView from '@/pages/CommunityView'
import CommunityCreate from '@/pages/CommunityCreate'
import Events from '@/pages/Events'
import EventView from '@/pages/EventView'
import EventCreate from '@/pages/EventCreate'
import Dashboard from '@/pages/Dashboard'
import AdminDashboard from '@/pages/AdminDashboard'
import AdminModeration from '@/pages/AdminModeration'
import Pricing from '@/pages/Pricing'
import Profile from '@/pages/Profile'
import Settings from '@/pages/Settings'

function App() {
  return (
    <Router>
      <ScrollProgress />
      <FloatingShapes />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/communities/:id" element={<CommunityView />} />
        <Route path="/communities/create" element={<CommunityCreate />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventView />} />
        <Route path="/events/create" element={<EventCreate />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/moderation" element={<AdminModeration />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App

