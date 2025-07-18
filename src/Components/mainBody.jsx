import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Leave_Management from '../pages/AsideLinks/LeaveManegment'
import Attendance from '../pages/AsideLinks/Attendance'


const MainBody = ({visible,setVisible}) => {

    
  return (
    <>
        <aside className='w-[20.5rem]  h-screen flex flex-col gap-[4.25rem] pl-[2.75rem] pt-[3.5rem] border border-r-gray-700'>
            <div className=' flex items-center gap-[1.25rem] '>
                <img className='w-[2.0625rem] h-[2.3125rem]' src="/image/logo.png" alt="" />
                <div>
                    <h1 className='text-[1.4rem] text-white'>HRMS Platforms</h1>
                    <h4 className='text-limegray text-[1rem]]'>Multi-Tenant HR System</h4>
                </div>
            </div>
            <nav>
            <section className='space-y-[1.5625rem]'> 
                <div>
                    <h4 className='text-white'>Core</h4>
                </div>
                <div className='flex items-center  h-[2.0625rem]   '>
                    <div  className={`${visible === 'Dashboard' ? 'flex' : 'hidden'} absolute  left-0  navBarhover `}></div>
                    <div onClick={() => setVisible('Dashboard')} className='navLinkconfig'>
                        <svg  width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" stroke= {visible === 'Dashboard' ? 'white' : '#5D6150'} stroke-width="1.3125">
        <path d="M2.1875 5.6875C2.1875 4.03758 2.1875 3.21262 2.70007 2.70007C3.21262 2.1875 4.03758 2.1875 5.6875 2.1875C7.33742 2.1875 8.16238 2.1875 8.67493 2.70007C9.1875 3.21262 9.1875 4.03758 9.1875 5.6875V15.3125C9.1875 16.9624 9.1875 17.7873 8.67493 18.2999C8.16238 18.8125 7.33742 18.8125 5.6875 18.8125C4.03758 18.8125 3.21262 18.8125 2.70007 18.2999C2.1875 17.7873 2.1875 16.9624 2.1875 15.3125V5.6875Z" />
        <path d="M11.8125 13.5625C11.8125 11.9126 11.8125 11.0877 12.3251 10.5751C12.8377 10.0625 13.6626 10.0625 15.3125 10.0625C16.9624 10.0625 17.7873 10.0625 18.2999 10.5751C18.8125 11.0877 18.8125 11.9126 18.8125 13.5625V15.3125C18.8125 16.9624 18.8125 17.7873 18.2999 18.2999C17.7873 18.8125 16.9624 18.8125 15.3125 18.8125C13.6626 18.8125 12.8377 18.8125 12.3251 18.2999C11.8125 17.7873 11.8125 16.9624 11.8125 15.3125V13.5625Z"/>
        <path d="M11.8125 4.8125C11.8125 3.99711 11.8125 3.58941 11.9457 3.2678C12.1233 2.83901 12.464 2.49833 12.8928 2.32071C13.2144 2.1875 13.6221 2.1875 14.4375 2.1875H16.1875C17.0029 2.1875 17.4106 2.1875 17.7322 2.32071C18.161 2.49833 18.5017 2.83901 18.6793 3.2678C18.8125 3.58941 18.8125 3.99711 18.8125 4.8125C18.8125 5.62789 18.8125 6.03559 18.6793 6.3572C18.5017 6.78599 18.161 7.12667 17.7322 7.30429C17.4106 7.4375 17.0029 7.4375 16.1875 7.4375H14.4375C13.6221 7.4375 13.2144 7.4375 12.8928 7.30429C12.464 7.12667 12.1233 6.78599 11.9457 6.3572C11.8125 6.03559 11.8125 5.62789 11.8125 4.8125Z"/>
                        </svg>
                        <div>
                            <Link to='/'><h4 className={`${visible === 'Dashboard' ? 'text-white' : 'text-limegray'}`}>Dashboard</h4></Link>
                        </div>
                    </div>
                </div>
                {/* Organization */}
                <div className='flex items-center  h-[2.0625rem]   '>
                    <div  className={`${visible === 'Organization' ? 'flex' : 'hidden'} absolute  left-0  navBarhover `}></div>
                    <div onClick={() => setVisible('Organization')} className='navLinkconfig'>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" stroke= {visible === 'Organization' ? 'white' : '#5D6150'} stroke-width="1.3125">
        <path d="M19.25 19.25H1.75"  stroke-linecap="round"/>
        <path d="M14.875 19.25V5.25C14.875 3.60008 14.875 2.77512 14.3624 2.26257C13.8498 1.75 13.0249 1.75 11.375 1.75H9.625C7.97508 1.75 7.15012 1.75 6.63757 2.26257C6.125 2.77512 6.125 3.60008 6.125 5.25V19.25" />
        <path d="M18.375 19.25V10.0625C18.375 8.83356 18.375 8.21915 18.08 7.77775C17.9524 7.58667 17.7883 7.42261 17.5972 7.29493C17.1559 7 16.5414 7 15.3125 7" />
        <path d="M2.625 19.25V10.0625C2.625 8.83356 2.625 8.21915 2.91993 7.77775C3.04761 7.58667 3.21167 7.42261 3.40275 7.29493C3.84415 7 4.4586 7 5.6875 7" />
        <path d="M10.5 19.25V16.625"  stroke-linecap="round"/>
        <path d="M8.75 4.375H12.25"  stroke-linecap="round"/>
        <path d="M8.75 7H12.25"  stroke-linecap="round"/>
        <path d="M8.75 9.625H12.25"  stroke-linecap="round"/>
        <path d="M8.75 12.25H12.25"  stroke-linecap="round"/>
                        </svg>
                        <div>
                            <Link to='/organization'><h4 className={`${visible === 'Organization' ? 'text-white' : 'text-limegray'}`}>Organization</h4></Link>
                        </div>
                    </div>
                </div>
                {/* Employee */}
                <div className='flex items-center  h-[2.0625rem]   '>
                    <div  className={`${visible === 'Employee' ? 'flex' : 'hidden'} absolute  left-0  navBarhover `}></div>
                    <div onClick={() => setVisible('Employee')} className='navLinkconfig'>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={visible  === 'Employee' ? 'white' : '#5D6150'} stroke-width="1.5">
                        <path d="M7.875 8.75C9.808 8.75 11.375 7.183 11.375 5.25C11.375 3.317 9.808 1.75 7.875 1.75C5.942 1.75 4.375 3.317 4.375 5.25C4.375 7.183 5.942 8.75 7.875 8.75Z"  stroke-width="1.5"/>
                        <path d="M13.125 7.875C14.5748 7.875 15.75 6.69974 15.75 5.25C15.75 3.80026 14.5748 2.625 13.125 2.625"  stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M7.875 18.375C11.2577 18.375 14 16.808 14 14.875C14 12.942 11.2577 11.375 7.875 11.375C4.49226 11.375 1.75 12.942 1.75 14.875C1.75 16.808 4.49226 18.375 7.875 18.375Z"  stroke-width="1.5"/>
                        <path d="M15.75 12.25C17.2849 12.5866 18.375 13.439 18.375 14.4375C18.375 15.3381 17.488 16.12 16.1875 16.5116"  stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                        <div>
                            <Link to='/employees'><h4 className={`${visible === 'Employee' ? 'text-white' : 'text-limegray'}`}>Employee</h4></Link>
                        </div>
                    </div>
                </div>
                {/* Attendance */}
                <div className='flex items-center  h-[2.0625rem]   '>
                    <div  className={`${visible === 'Attendance' ? 'flex' : 'hidden'} absolute  left-0  navBarhover `}></div>
                    <div onClick={() => setVisible('Attendance')} className='navLinkconfig'>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={visible === "Attendance" ? 'white' : '#5D6150'} stroke-width='1.3125'>
                        <path d="M8.75 6.125H1.75"   stroke-linecap="round"/>
                        <path d="M7 10.5H1.75"   stroke-linecap="round"/>
                        <path d="M8.75 14.875H1.75"   stroke-linecap="round"/>
                        <path d="M14.875 14.875C17.2912 14.875 19.25 12.9162 19.25 10.5C19.25 8.08375 17.2912 6.125 14.875 6.125C12.4588 6.125 10.5 8.08375 10.5 10.5C10.5 12.9162 12.4588 14.875 14.875 14.875Z"  />
                        <path d="M14.875 8.75V10.3654L15.75 11.375"   stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div>
                            <Link to='/Attendance'><h4 className={`${visible === 'Attendance' ? 'text-white' : 'text-limegray'}`}>Attendance</h4></Link>
                        </div>
                    </div>
                </div>

                {/* Leave Management */}
                <div className='flex items-center  h-[2.0625rem]   '>
                    <div  className={`${visible === 'Leave Management' ? 'flex' : 'hidden'} absolute  left-0  navBarhover `}></div>
                    <div onClick={() => setVisible('Leave Management')} className='navLinkconfig'>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={visible === "Leave Management" ? 'white' : '#5D6150'}>
<path d="M1.75 10.5C1.75 7.20017 1.75 5.55026 2.77512 4.52512C3.80026 3.5 5.45017 3.5 8.75 3.5H12.25C15.5498 3.5 17.1998 3.5 18.2248 4.52512C19.25 5.55026 19.25 7.20017 19.25 10.5V12.25C19.25 15.5498 19.25 17.1998 18.2248 18.2248C17.1998 19.25 15.5498 19.25 12.25 19.25H8.75C5.45017 19.25 3.80026 19.25 2.77512 18.2248C1.75 17.1998 1.75 15.5498 1.75 12.25V10.5Z" />
<path d="M6.125 3.5V2.1875"  stroke-linecap="round"/>
<path d="M14.875 3.5V2.1875"  stroke-linecap="round"/>
<path d="M2.1875 7.875H18.8125"  stroke-linecap="round"/>
                        </svg>
                        <div>
                            <Link to='/leaveManegment'><h4 className={`${visible === 'Leave Management' ? 'text-white' : 'text-limegray'}`}>Leave Management</h4></Link>
                        </div>
                    </div>
                </div>
            </section>
            </nav>
        </aside>

    </>
  )
}

export default MainBody