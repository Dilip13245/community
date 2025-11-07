# CommunityHub - CaaS Platform

A modern, full-featured React.js platform for building and joining communities. Built with the latest technologies and best practices.

## 🚀 Tech Stack

- **React 18** - Latest React with hooks
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS
- **Shadcn/ui** - Beautiful component library (Radix UI based)
- **Framer Motion** - Smooth animations
- **React Router** - Navigation
- **Lucide React** - Modern icons

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Features

### Core Features
- ✅ Landing Page with Hero Section
- ✅ User Authentication (Login/Signup)
- ✅ Onboarding Flow
- ✅ Discover Communities
- ✅ Community Management
- ✅ Event Management
- ✅ User Dashboard
- ✅ Admin Dashboard
- ✅ Moderation System
- ✅ Pricing Plans
- ✅ User Profile & Settings

### UI/UX Features
- ✅ Fully Responsive Design
- ✅ Modern UI with Animations
- ✅ Mobile-First Approach
- ✅ Accessible Components
- ✅ Smooth Transitions

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/          # Reusable UI components (Shadcn/ui)
│   ├── navbar.tsx   # Navigation component
│   ├── scroll-progress.tsx
│   └── floating-shapes.tsx
├── pages/           # Page components
│   ├── Landing.tsx
│   ├── Login.tsx
│   ├── Signup.tsx
│   ├── Dashboard.tsx
│   ├── Discover.tsx
│   ├── Communities.tsx
│   ├── Events.tsx
│   ├── Pricing.tsx
│   ├── Profile.tsx
│   ├── Settings.tsx
│   └── Admin*.tsx
├── lib/             # Utilities
└── App.tsx          # Main app with routing
```

## 🌐 Routes

### Public Routes
- `/` - Landing Page
- `/discover` - Discover Communities
- `/communities` - Browse Communities
- `/events` - Browse Events
- `/pricing` - Pricing Plans
- `/login` - Login
- `/signup` - Sign Up

### User Routes
- `/dashboard` - User Dashboard
- `/profile` - User Profile
- `/settings` - Account Settings
- `/communities/create` - Create Community
- `/events/create` - Create Event

### Admin Routes
- `/admin` - Admin Dashboard
- `/admin/moderation` - Moderation Queue

## 🚀 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Vite
5. Deploy!

### Build Command
```bash
npm run build
```

### Output Directory
```
dist
```

## 🛠️ Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📝 Environment Variables

Create a `.env` file for environment variables (if needed):
```
VITE_API_URL=your_api_url
```

## 🎯 Next Steps

- [ ] Add backend API integration
- [ ] Implement authentication
- [ ] Add database integration
- [ ] Implement payment gateway
- [ ] Add real-time features
- [ ] Add search functionality
- [ ] Add map integration

## 📄 License

Private - All rights reserved

## 👥 Team

CommunityHub Development Team

