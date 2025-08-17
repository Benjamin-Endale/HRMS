import React from 'react'
import SuperAdminBody from '../Components/SuperAdminBody'
import Header from '../Components/Header'
import { Outlet,useLocation } from 'react-router-dom'

const SuperLayout = () => {
    const location = useLocation()
    
    const path = location.pathname

    const readPath = path === '/' ? 'allorganization' : path.replace('/', '')
  return (
    <>
    <div className='flex gap-[4.4375rem] '>
        {/* SuperAdmin*/}
        <SuperAdminBody  readPath={readPath} />
        <div className='flex flex-col flex-1 gap-[4.25rem]'>
            <div className='flex  pt-[3.5rem]  '>
                <Header  readPath={readPath}/>
            </div>
            <div className='w-[calc(100%-2.75rem)]'>
                <Outlet />
            </div>
        </div>
    </div>
    </>
  )
}

export default SuperLayout