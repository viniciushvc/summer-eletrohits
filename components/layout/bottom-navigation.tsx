import React from 'react'

import { BOTTOM_NAVIGATION } from '@/constants/menu'
import { NavLink } from '../ui/nav-link'

export const BottomNavigation = () => {
  return (
    <div
      className="fixed inset-x-0 z-50 flex items-center justify-between border-t bg-background p-4 shadow sm:hidden"
      style={{
        bottom: 'env(safe-area-inset-bottom)',
      }}
    >
      {BOTTOM_NAVIGATION.map(({ label, href, icon }) => (
        <div className="flex flex-1 justify-center" key={href}>
          <NavLink
            href={href}
            className="text-muted-foreground [&.active]:text-foreground"
          >
            {React.createElement(icon, {
              className: 'size-5',
            })}

            <span className="sr-only">{label}</span>
          </NavLink>
        </div>
      ))}
    </div>
  )
}
