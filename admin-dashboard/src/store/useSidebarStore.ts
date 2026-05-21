import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { SidebarState } from '@/types'

export const useSidebarStore = create<SidebarState>()(
  persist(
    (set) => ({
      collapsed: false,
      activeItem: 'dashboard',
      expandedItems: [],
      
      toggleCollapsed: () => 
        set((state) => ({ collapsed: !state.collapsed })),
      
      setActiveItem: (id: string) => 
        set({ activeItem: id }),
      
      toggleExpanded: (id: string) => 
        set((state) => ({
          expandedItems: state.expandedItems.includes(id)
            ? state.expandedItems.filter(item => item !== id)
            : [...state.expandedItems, id]
        }))
    }),
    {
      name: 'sidebar-storage',
      partialize: (state) => ({ 
        collapsed: state.collapsed,
        expandedItems: state.expandedItems 
      }),
    }
  )
)
