import React from 'react'
import Rootlayout from './layout/rootlayout'
import Superlayout from './layout/superlayout'
import Dashboard from './pages/AsideLinks/Core/Dashboard'
import Organization from './pages/AsideLinks/Core/Organization'
import Employees from './pages/AsideLinks/Core/Employees'
import Attendance from './pages/AsideLinks/Core/Attendance'
import Training from './pages/AsideLinks/Talent/Training'
import LeaveManegment from './pages/AsideLinks/Core/LeaveManagment'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Assets from './pages/AsideLinks/Operation/Assets'
import Announcement from './pages/AsideLinks/Operation/Announcement'
import AddNewemployee from './pages/EmployeeRegistration/AddNewemployee'
import AddNewemployeesecond from './pages/EmployeeRegistration/AddNewemployeesecond'
import Compensation from './pages/EmployeeRegistration/Compensation'
import EmployeeDetail from './pages/EmployeeRegistration/EmployeeDetail'
import System from './pages/EmployeeRegistration/System'
import AllOrganization from './pages/SuperAdmin/Organization/AllOrganization'
import CreateOrganization from './pages/SuperAdmin/Organization/CreateOrganization'
import OrganizationSetting from './pages/SuperAdmin/Organization/OrganizationSettings'
import SuperAdmin from './pages/SuperAdmin/UserManegment/SuperAdmin'
import UserStatics from './pages/SuperAdmin/Report/UserStatics'
import Thirdlayout from './layout/thirdLayout'
import Candidates from './pages/Recruitment/Candidates'
import Interviews from './pages/Recruitment/Interviews'
import Jobposting from './pages/Recruitment/Jobposting'
import FeedBack from './pages/Performance/FeedBack'
import Goals from './pages/Performance/Goals'
import Overview from './pages/Performance/Overview'
import Reviews from './pages/Performance/Reviews'
import Feedback from './pages/Traning/Feedback'
import Enrolment from './pages/Traning/Enrolment'
import Program from './pages/Traning/Program'
import OverviewTraining from './pages/Traning/OverviewTraining'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element = {<Rootlayout/>}>

          <Route index element = {<Dashboard/>} />
          <Route path='organization' element = {<Organization/>}/>
          <Route path='employees' element = {<Employees/>}/>
          <Route path='attendance' element = {<Attendance/>}/>
          <Route path='leaveManagment' element = {<LeaveManegment/>}/>
          
          {/* AddNewEmployee */}
          <Route path='AddNewemployee' element = {<AddNewemployee/>}/>
          <Route path='AddNewemployeesecond' element = {<AddNewemployeesecond/>}/>
          <Route path='Compensation' element = {<Compensation/>}/>
          <Route path='EmployeeDetail' element = {<EmployeeDetail/>}/>
          <Route path='System' element = {<System/>}/>

          {/* OPERATION */}
          <Route path='assets' element = {<Assets/>}/>
          <Route path='announcement' element = {<Announcement/>}/>
        </Route>
        <Route path='/' element = {<Superlayout/>}>
          {/* SuperAdmin */}
          <Route path='allorganization' element = {<AllOrganization/>}/>
          <Route path='createorganization' element = {<CreateOrganization/>}/>
          <Route path='organizationsetting' element = {<OrganizationSetting/>}/>

          {/* User Managment */}
          <Route path='superadmin' element = {<SuperAdmin/>}/>

          {/* REPORT */}
          <Route path='userstatics' element = {<UserStatics/>}/>
        </Route>    
        <Route  element = {<Thirdlayout/>}>
          {/* TALENT */}
          <Route path='performance' element = {<Performance/>}/>
          <Route path='training' element = {<Training/>}/>


          {/*Recruitment*/}
          <Route path='candidates' element = {<Candidates/>}/>
          <Route path='interviews' element = {<Interviews/>}/>
          <Route path='jobposting' element = {<Jobposting/>}/>


          {/*Performance*/}
          <Route path='feedBack' element = {<FeedBack/>}/>
          <Route path='goals' element = {<Goals/>}/>
          <Route path='overview' element = {<Overview/>}/>
          <Route path='reviews' element = {<Reviews/>}/>



          
          {/*Traning*/}
          <Route path='feedBackTraning' element = {<Feedback/>}/>
          <Route path='enrolment' element = {<Enrolment/>}/>
          <Route path='program' element = {<Program/>}/>
          <Route path='overviewtraining' element = {<OverviewTraining/>}/>
        </Route>     

      </>

    )
  )

  return (
      <RouterProvider router={router} />
  )
}

export default App