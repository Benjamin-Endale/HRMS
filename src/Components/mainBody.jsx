import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const MainBody = () => {

    const [visible, setVisible] = useState('Dashboard')
    
  return (
    <>
    <main className='flex'>
        <aside className='w-[20.5rem] h-screen flex flex-col gap-[50px] pl-[2.75rem]  border border-amber-300'>
            <div className=' flex items-center gap-[1.25rem] '>
                <img className='w-[2.0625rem] h-[2.3125rem]' src="/image/logo.png" alt="" />
                <div>
                    <h1 className='text-[1.4rem] text-white'>HRMS Platforms</h1>
                    <h4 className='text-limegray text-[1rem]]'>Multi-Tenant HR System</h4>
                </div>
            </div>
            <nav>
            <section className=''> 
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

            </section>
            </nav>
        </aside>
        <div className='flex flex-1 items-center h-[3.8125rem] border border-amber-500 '>
            <header className=''>
                <h4  className='text-white'>Benjamin</h4>
            </header>
        </div>
    </main>
    </>
  )
}

export default MainBody