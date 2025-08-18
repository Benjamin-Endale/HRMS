import React from 'react'

import { Outlet,useLocation } from 'react-router-dom'
import MainBody from '../Components/mainBody'
import Header from '../Components/Header'
import Reclayout from './recLayout'

const Thirdlayout = () => {
    const location = useLocation()
    
    const path = location.pathname

    const readPath = path === '/' ? 'recruitment' : path.replace('/', '')
  return (
    <div className='flex gap-[4.4375rem] '>
        {/* <LoginPage/> */}
        <MainBody  readPath={readPath} />
        <div className='flex flex-col flex-1 gap-[4.25rem]'>
            <div className='flex  pt-[3.5rem]  '>
                <Header  readPath={readPath}/>
            </div>
            <div className='flex flex-col gap-[1.0625rem]'>
                <div>
                    <Reclayout readPath={readPath}/>
                </div>
                <div className='w-[calc(100%-2.75rem)] '>
                    <Outlet />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Thirdlayout