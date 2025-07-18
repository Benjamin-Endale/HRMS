import React, { useState } from 'react'

import { Outlet } from 'react-router-dom'
import MainBody from '../Components/MainBody'
import Header from '../Components/Header'
import LoginPage from '../Components/LoginPage'

const RootLayout = () => {
    const [visible, setVisible] = useState('Dashboard')
  return (
    <> 
    <div className='flex gap-[4.4375rem] '>
        <MainBody visible={visible} setVisible={setVisible} />
        <div className='flex flex-col flex-1 gap-[4.25rem]'>
            <div className='flex  pt-[3.5rem]  '>
                <Header  visible={visible}/>
            </div>
            <div className='flex-1'>
                <Outlet />
            </div>
        </div>
    </div>
    </>
)
}

export default RootLayout
