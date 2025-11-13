import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { SmoothScroll } from '@/components/smooth-scroll'

// Layouts
import { BasicLayout } from '@/layouts/BasicLayout'
import { CreatorLayout } from '@/layouts/CreatorLayout'
import { UserLayout } from '@/layouts/UserLayout'
import { AdminLayout } from '@/layouts/AdminLayout'

// Basic/Public Pages (Everyone)
import Landing from '@/pages/basic/Landing'
import Login from '@/pages/basic/Login'
import Signup from '@/pages/basic/Signup'
import Discover from '@/pages/basic/Discover'
import Pricing from '@/pages/basic/Pricing'
import About from '@/pages/basic/About'
import Contact from '@/pages/basic/Contact'
import Blog from '@/pages/basic/Blog'
import Help from '@/pages/basic/Help'
import Privacy from '@/pages/basic/Privacy'
import Terms from '@/pages/basic/Terms'
import Cookies from '@/pages/basic/Cookies'
import NotFound from '@/pages/basic/NotFound'

// Creator Pages (Community Creators)
import Dashboard from '@/pages/creators/Dashboard'
import Communities from '@/pages/creators/Communities'
import CommunityCreate from '@/pages/creators/CommunityCreate'
import Events from '@/pages/creators/Events'
import EventCreate from '@/pages/creators/EventCreate'

// User Pages (Regular Users)
import Onboarding from '@/pages/users/Onboarding'
import Profile from '@/pages/users/Profile'
import Settings from '@/pages/users/Settings'
import CommunityView from '@/pages/users/CommunityView'
import EventView from '@/pages/users/EventView'

// Admin Pages
import AdminDashboard from '@/pages/admin/AdminDashboard'
import AdminModeration from '@/pages/admin/AdminModeration'

function App() {
  return (
    <Router>
      <SmoothScroll>
        <Routes>
        {/* Basic/Public Routes - Everyone can access */}
        <Route element={<BasicLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/help" element={<Help />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
        </Route>

        {/* Creator Routes - For community creators/organizers */}
        <Route element={<CreatorLayout />}>
          <Route path="/creators/dashboard" element={<Dashboard />} />
          <Route path="/creators/communities" element={<Communities />} />
          <Route path="/creators/communities/create" element={<CommunityCreate />} />
          <Route path="/creators/events" element={<Events />} />
          <Route path="/creators/events/create" element={<EventCreate />} />
        </Route>

        {/* User Routes - For regular users/members */}
        <Route element={<UserLayout />}>
          <Route path="/users/onboarding" element={<Onboarding />} />
          <Route path="/users/profile" element={<Profile />} />
          <Route path="/users/settings" element={<Settings />} />
          <Route path="/users/communities/:id" element={<CommunityView />} />
          <Route path="/users/events/:id" element={<EventView />} />
        </Route>

        {/* Admin Routes - For platform administrators */}
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/moderation" element={<AdminModeration />} />
        </Route>

        {/* Legacy Routes - Redirect to new structure */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/communities/:id" element={<CommunityView />} />
        <Route path="/communities/create" element={<CommunityCreate />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventView />} />
        <Route path="/events/create" element={<EventCreate />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        
        {/* 404 - Catch all unmatched routes */}
        <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </SmoothScroll>
    </Router>
  )
}

export default App

