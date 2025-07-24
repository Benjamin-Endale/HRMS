import React from 'react'

import { Outlet,useLocation } from 'react-router-dom'
import MainBody from '../Components/MainBody'
import Header from '../Components/Header'
import LoginPage from '../Components/LoginPage'
import { useState } from 'react'

const RootLayout = () => {
    const location = useLocation()
    
    const path = location.pathname

    const readPath = path === '/' ? 'Dashboard' : path.replace('/', '')
  return (
    <> 
    <div className='flex gap-[4.4375rem] '>
        <MainBody readPath={readPath} />
        <div className='flex flex-col flex-1 gap-[4.25rem]'>
            <div className='flex  pt-[3.5rem]  '>
                <Header  readPath={readPath}/>
            </div>
            <div className='w-[calc(100%-3.0625rem)] '>
                <Outlet />
            </div>
        </div>
    </div>
    </>
)
}

export default RootLayout
