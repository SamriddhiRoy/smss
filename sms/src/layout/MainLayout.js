

import { DashboardLayout } from '@/dashboard/Layout'
import { DashboardProvider } from '@/dashboard/Provider'
import { TopBar } from '@/dashboard/TopBar'
import React from 'react'

function MainLayout({children}) {
  return (
    <div>
       <DashboardLayout>{children}</DashboardLayout> 
    </div>
  )
}

export default MainLayout