# CommunityHub Navigation Guide

## 🏠 Public Pages (No Login Required)

### Main Pages
- **`/`** - Landing Page (Home)
- **`/discover`** - Discover Communities (Public browsing)
- **`/communities`** - Browse All Communities
- **`/events`** - Browse All Events
- **`/pricing`** - Pricing Plans

### Authentication
- **`/login`** - Login Page
- **`/signup`** - Sign Up Page
- **`/onboarding`** - Complete Profile (After signup)

---

## 👤 User Pages (After Login)

### Main User Dashboard
- **`/dashboard`** - User Dashboard (Your communities, events, stats)

### Communities
- **`/communities`** - My Communities (List of your communities)
- **`/communities/create`** - Create New Community
- **`/communities/:id`** - View Community Details

### Events
- **`/events`** - My Events (List of your events)
- **`/events/create`** - Create New Event
- **`/events/:id`** - View Event Details

### Profile & Settings
- **`/profile`** - Your Profile
- **`/settings`** - Account Settings

---

## 🛡️ Admin Pages (Admin Access Only)

### Admin Dashboard
- **`/admin`** or **`/admin/dashboard`** - Admin Dashboard (Platform overview)
- **`/admin/moderation`** - Moderation Queue (Review content, communities, users)

---

## 📍 Quick Access Guide

### For Regular Users:
1. Start at **`/`** (Landing Page)
2. Sign up at **`/signup`**
3. Complete profile at **`/onboarding`**
4. Go to **`/dashboard`** to see your dashboard
5. Create communities at **`/communities/create`**
6. Create events at **`/events/create`**

### For Admins:
1. Login first
2. Access **`/admin`** for admin dashboard
3. Go to **`/admin/moderation`** for content moderation

### Navigation Tips:
- **Navbar** changes based on whether you're:
  - Public user (not logged in)
  - Regular user (logged in)
  - Admin user
- **User Menu** (top right) appears when logged in
- **Admin Panel** link appears in user menu for admins

---

## 🔗 Route Structure

```
/                          → Landing (Public)
├── /discover              → Discover Communities (Public)
├── /communities           → Browse/My Communities
│   ├── /create            → Create Community
│   └── /:id               → View Community
├── /events                → Browse/My Events
│   ├── /create            → Create Event
│   └── /:id               → View Event
├── /pricing               → Pricing (Public)
├── /login                 → Login (Public)
├── /signup                → Sign Up (Public)
├── /onboarding            → Complete Profile
├── /dashboard             → User Dashboard
├── /profile               → User Profile
├── /settings              → User Settings
└── /admin                 → Admin Section
    ├── /dashboard         → Admin Dashboard
    └── /moderation        → Moderation Queue
```

