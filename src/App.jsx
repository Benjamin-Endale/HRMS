import React from 'react'
import Rootlayout from './layout/rootlayout'
import Dashboard from './pages/AsideLinks/Core/Dashboard'
import Organization from './pages/AsideLinks/Core/Organization'
import Employees from './pages/AsideLinks/Core/Employees'
import Attendance from './pages/AsideLinks/Core/Attendance'
import Recruitment from './pages/AsideLinks/Talent/Recruitment'
import Performance from  './pages/AsideLinks/Talent/Performance'
import Training from './pages/AsideLinks/Talent/Training'
import LeaveManegment from './pages/AsideLinks/Core/LeaveManagment'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Assets from './pages/AsideLinks/Operation/Assets'
import Announcement from './pages/AsideLinks/Operation/Announcement'
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element = {<Rootlayout/>}>

        <Route index element = {<Dashboard/>} />
        <Route path='organization' element = {<Organization/>}/>
        <Route path='employees' element = {<Employees/>}/>
        <Route path='attendance' element = {<Attendance/>}/>
        <Route path='leaveManagment' element = {<LeaveManegment/>}/>

        {/* TALENT */}
        <Route path='recruitment' element = {<Recruitment/>}/>
        <Route path='performance' element = {<Performance/>}/>
        <Route path='training' element = {<Training/>}/>

        {/* OPERATION */}
        <Route path='assets' element = {<Assets/>}/>
        <Route path='announcement' element = {<Announcement/>}/>



      </Route>
    )
  )

  return (
      <RouterProvider router={router} />
  )
}

export default App