# Admin Dashboard - URL Shortener SaaS

A modern, scalable admin dashboard built with Next.js 14, Supabase, and shadcn/ui components.

## Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui pattern, Lucide Icons
- **State Management**: Zustand with persistence
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Payments**: Stripe & PayPal ready
- **Architecture**: Microservices-ready

## Features

### Sidebar Navigation
- ✅ Collapsible sidebar with smooth transitions
- ✅ Multi-level navigation with dropdowns
- ✅ Active state indication
- ✅ Badge notifications for pending items
- ✅ Search functionality
- ✅ Quick actions panel
- ✅ Responsive design
- ✅ WCAG 2.1 AA accessible

### Dashboard
- 📊 Statistics cards with trends
- 📈 Chart placeholders (Recharts ready)
- 🔔 Notification system
- 👤 User profile section
- ⚡ Quick action buttons

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Update .env.local with your Supabase credentials

# Run development server
npm run dev
```

Open [http://localhost:3000/admin/dashboard](http://localhost:3000/admin/dashboard)

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── admin/             # Admin routes
│   │   └── dashboard/     # Dashboard page
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/
│   ├── sidebar/           # Sidebar components
│   │   ├── Sidebar.tsx
│   │   ├── SidebarBrand.tsx
│   │   ├── SidebarItem.tsx
│   │   ├── SidebarDropdown.tsx
│   │   ├── SidebarBadge.tsx
│   │   ├── SidebarToggle.tsx
│   │   ├── SidebarSearch.tsx
│   │   ├── SidebarNav.tsx
│   │   ├── QuickActions.tsx
│   │   └── menuConfig.ts
│   └── ui/                # UI components (shadcn pattern)
├── lib/
│   ├── supabase.ts        # Supabase client
│   └── utils.ts           # Utility functions
├── store/
│   └── useSidebarStore.ts # Zustand store
└── types/
    └── index.ts           # TypeScript types
```

## Microservices Readiness

This application is designed to scale into a microservices architecture:

- **API Endpoints**: Structured for easy extraction to separate services
- **Event Bus Ready**: Webhook endpoints for Stripe/PayPal
- **Database Types**: Strongly typed Supabase schema
- **Auth Integration**: Supabase Auth with JWT tokens
- **State Management**: Decoupled Zustand stores

### Future Microservices

When scaling, extract these into separate services:
1. **User Service** - Authentication, profiles, roles
2. **Link Service** - URL shortening, analytics
3. **Payment Service** - Stripe/PayPal integration
4. **Notification Service** - Email, push notifications
5. **Analytics Service** - Click tracking, reports

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## License

MIT
