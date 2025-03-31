---
title: "Layout"
---
# Guía de Componentes de Layout

## NavBar
```jsx
import { NavBar } from '@/components/layout/NavBar'

// Uso básico
<NavBar
  user={currentUser}
  onLogout={handleLogout}
  notifications={userNotifications}
/>

// Props necesarias
interface NavBarProps {
  user: {
    name: string
    avatar: string
    role: string
  }
  onLogout: () => void
  notifications?: Notification[]
}
```

## Sidebar
```jsx
import { AppSidebar } from '@/components/layout/sidebar/AppSidebar'

// Uso básico
<AppSidebar
  items={navigationItems}
  currentPath={router.pathname}
  onNavigate={handleNavigation}
/>

// Estructura de navigationItems
interface NavigationItem {
  id: string
  label: string
  icon: ReactNode
  path: string
  children?: NavigationItem[]
}
```

