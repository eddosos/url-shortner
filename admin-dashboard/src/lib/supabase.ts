import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
})

// Types for database
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          role: 'admin' | 'user' | 'moderator'
          created_at: string
          updated_at: string
        }
      }
      links: {
        Row: {
          id: string
          user_id: string
          short_url: string
          original_url: string
          clicks: number
          status: 'active' | 'archived' | 'reported' | 'expired'
          created_at: string
        }
      }
      subscriptions: {
        Row: {
          id: string
          user_id: string
          plan: 'free' | 'pro' | 'business' | 'enterprise'
          status: 'active' | 'canceled' | 'past_due'
          stripe_subscription_id?: string
          created_at: string
        }
      }
    }
  }
}

// API helpers for microservices readiness
export const apiEndpoints = {
  // Menu and navigation
  getMenuConfig: () => '/api/menu',
  getBadgeCounts: () => '/api/badges',
  
  // User preferences
  getUserPreferences: () => '/api/user/preferences',
  updateUserPreferences: () => '/api/user/preferences',
  
  // Admin endpoints
  adminStats: () => '/api/admin/stats',
  adminUsers: () => '/api/admin/users',
  adminLinks: () => '/api/admin/links',
  
  // Payment webhooks (for microservices)
  stripeWebhook: () => '/api/webhooks/stripe',
  paypalWebhook: () => '/api/webhooks/paypal',
}

export async function fetchWithAuth<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const { data: { session } } = await supabase.auth.getSession()
  
  const headers = new Headers(options?.headers)
  if (session) {
    headers.set('Authorization', `Bearer ${session.access_token}`)
  }
  
  const response = await fetch(endpoint, {
    ...options,
    headers,
  })
  
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }
  
  return response.json()
}
