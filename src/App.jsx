import React from 'react'
import Rootlayout from './layout/rootlayout'
import Dashboard from './pages/AsideLinks/Dashboard'
import Organization from './pages/AsideLinks/Organization'
import Employees from './pages/AsideLinks/Employees'
import Attendance from './pages/AsideLinks/Attendance'
import LeaveManegment from './pages/AsideLinks/LeaveManegment'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element = {<Rootlayout/>}>
        <Route index element = {<Dashboard/>} />
        <Route path='organization' element = {<Organization/>}/>
        <Route path='employees' element = {<Employees/>}/>
        <Route path='attendance' element = {<Attendance/>}/>
        <Route path='leaveManegment' element = {<LeaveManegment/>}/>
      </Route>
    )
  )

  return (
      <RouterProvider router={router} />
  )
}

export default App