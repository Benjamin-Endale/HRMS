import React from 'react'
import { Outlet } from 'react-router-dom'
import MainBody from '../Components/MainBody'

const RootLayout = () => {
  return (
    <div className="mt-[3.5rem] flex h-[calc(100vh-3.5rem)]">
      {/* Sidebar */}
      <MainBody />
      <div className="flex-1 overflow-y-auto p-4">
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
