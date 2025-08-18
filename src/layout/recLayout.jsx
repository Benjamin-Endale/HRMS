import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const RecLayout = ({ readPath }) => {
  const navigate = useNavigate()
  const location = useLocation()

    const NavRecruitment = [
    { label: "Job Posting", path: "/jobposting" },
    { label: "Candidates", path: "/candidates" },
    { label: "Interviews", path: "/interviews" }
  ]


  
    const NavPerformance = [
    { label: "Overview", path: "/overview" },
    { label: "Goals & KPIs", path: "/goals" },
    { label: "Reviews ", path: "/reviews" },
    { label: "360 Feedback ", path: "/feedBack" }
  ]


  return (
    <div>
        <div className={`${readPath === 'recruitment' || readPath === 'jobposting' || readPath === 'candidates' || readPath === 'interviews' ? 'block' : 'hidden'} cursor-pointer flex flex-col gap-[3.3125rem]`}>
            {/* InformationContainers */}
            <div className='flex gap-[1.25rem]'>
                <div className='carDash2'>
                    <div className='h-full between flex-col'>
                    <div className='flex justify-between'>
                        <div>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.35254 10.5C11.5617 10.5 13.3525 8.70914 13.3525 6.5C13.3525 4.29086 11.5617 2.5 9.35254 2.5C7.1434 2.5 5.35254 4.29086 5.35254 6.5C5.35254 8.70914 7.1434 10.5 9.35254 10.5Z" stroke="white" stroke-width="1.5"/>
                        <path d="M15.3525 9.5C17.0094 9.5 18.3525 8.15685 18.3525 6.5C18.3525 4.84315 17.0094 3.5 15.3525 3.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M9.35254 21.5C13.2185 21.5 16.3525 19.7091 16.3525 17.5C16.3525 15.2909 13.2185 13.5 9.35254 13.5C5.48655 13.5 2.35254 15.2909 2.35254 17.5C2.35254 19.7091 5.48655 21.5 9.35254 21.5Z" stroke="white" stroke-width="1.5"/>
                        <path d="M18.3525 14.5C20.1067 14.8847 21.3525 15.8589 21.3525 17C21.3525 18.0293 20.3388 18.9229 18.8525 19.3704" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-5xl text-formColor'>12</span>
                        <span className='text-formColor'>Active Jobs</span>
                    </div>
                    </div>
                </div>
                <div className='carDash2'>
                    <div className='h-full between flex-col'>
                    <div className='flex justify-between'>
                        <div>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3525 22.5C17.8754 22.5 22.3525 18.0228 22.3525 12.5C22.3525 6.97715 17.8754 2.5 12.3525 2.5C6.82969 2.5 2.35254 6.97715 2.35254 12.5C2.35254 18.0228 6.82969 22.5 12.3525 22.5Z" stroke="white" stroke-width="1.5"/>
                        <path d="M14.8526 10L9.85256 15M9.85254 10L14.8526 15" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-5xl text-formColor'>234</span>
                        <span className='text-formColor'>Total Applications</span>
                    </div>
                    </div>
                </div>
                <div className='carDash2'>
                    <div className='h-full between flex-col'>
                        <div className='flex justify-between'>
                            <div>
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.75 6.125H1.75" stroke="#DFDFDF" stroke-width="1.3125" stroke-linecap="round"/>
                            <path d="M7 10.5H1.75" stroke="#DFDFDF" stroke-width="1.3125" stroke-linecap="round"/>
                            <path d="M8.75 14.875H1.75" stroke="#DFDFDF" stroke-width="1.3125" stroke-linecap="round"/>
                            <path d="M14.875 14.875C17.2912 14.875 19.25 12.9162 19.25 10.5C19.25 8.08375 17.2912 6.125 14.875 6.125C12.4588 6.125 10.5 8.08375 10.5 10.5C10.5 12.9162 12.4588 14.875 14.875 14.875Z" stroke="#DFDFDF" stroke-width="1.3125"/>
                            <path d="M14.875 8.75V10.3654L15.75 11.375" stroke="#DFDFDF" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-5xl text-formColor'>8</span>
                            <span className='text-formColor'>Interviews Today</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="center-center gap-[1.75rem]">
                {NavRecruitment.map(item => (
                <div
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    className={`w-[8.875rem]  text-center py-[0.875rem] relative px-[1.875rem]  text-nowrap  ${location.pathname === item.path ? 'text-lemongreen' : 'textLimegray1'}`}>
                    {item.label}
                    <div className={`${location.pathname === item.path ? 'absolute left-0 h-[3px] w-full bottom-0 rounded-[0.375rem] bg-lemongreen' : ''}`}></div>
                </div>
                ))}
                
            </div>
        </div>
        <div className={`${readPath === 'performance' || readPath === 'feedBack' || readPath === 'goals' || readPath === 'overview' || readPath === 'reviews' ? 'block' : 'hidden'} cursor-pointer flex flex-col gap-[3.3125rem]`}>
            {/* InformationContainers */}
            <div className='flex gap-[1.25rem]'>
            <div className='carDash2'>
                <div className='h-full between flex-col'>
                <div className='flex justify-between'>
                    <div>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.35254 10.5C11.5617 10.5 13.3525 8.70914 13.3525 6.5C13.3525 4.29086 11.5617 2.5 9.35254 2.5C7.1434 2.5 5.35254 4.29086 5.35254 6.5C5.35254 8.70914 7.1434 10.5 9.35254 10.5Z" stroke="white" stroke-width="1.5"/>
                    <path d="M15.3525 9.5C17.0094 9.5 18.3525 8.15685 18.3525 6.5C18.3525 4.84315 17.0094 3.5 15.3525 3.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M9.35254 21.5C13.2185 21.5 16.3525 19.7091 16.3525 17.5C16.3525 15.2909 13.2185 13.5 9.35254 13.5C5.48655 13.5 2.35254 15.2909 2.35254 17.5C2.35254 19.7091 5.48655 21.5 9.35254 21.5Z" stroke="white" stroke-width="1.5"/>
                    <path d="M18.3525 14.5C20.1067 14.8847 21.3525 15.8589 21.3525 17C21.3525 18.0293 20.3388 18.9229 18.8525 19.3704" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <span className='text-5xl text-formColor'>12</span>
                    <span className='text-formColor'>Active Jobs</span>
                </div>
                </div>
            </div>
            <div className='carDash2'>
                <div className='h-full between flex-col'>
                <div className='flex justify-between'>
                    <div>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3525 22.5C17.8754 22.5 22.3525 18.0228 22.3525 12.5C22.3525 6.97715 17.8754 2.5 12.3525 2.5C6.82969 2.5 2.35254 6.97715 2.35254 12.5C2.35254 18.0228 6.82969 22.5 12.3525 22.5Z" stroke="white" stroke-width="1.5"/>
                    <path d="M14.8526 10L9.85256 15M9.85254 10L14.8526 15" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <span className='text-5xl text-formColor'>234</span>
                    <span className='text-formColor'>Total Applications</span>
                </div>
                </div>
            </div>
            <div className='carDash2'>
                <div className='h-full between flex-col'>
                <div className='flex justify-between'>
                    <div>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.75 6.125H1.75" stroke="#DFDFDF" stroke-width="1.3125" stroke-linecap="round"/>
                    <path d="M7 10.5H1.75" stroke="#DFDFDF" stroke-width="1.3125" stroke-linecap="round"/>
                    <path d="M8.75 14.875H1.75" stroke="#DFDFDF" stroke-width="1.3125" stroke-linecap="round"/>
                    <path d="M14.875 14.875C17.2912 14.875 19.25 12.9162 19.25 10.5C19.25 8.08375 17.2912 6.125 14.875 6.125C12.4588 6.125 10.5 8.08375 10.5 10.5C10.5 12.9162 12.4588 14.875 14.875 14.875Z" stroke="#DFDFDF" stroke-width="1.3125"/>
                    <path d="M14.875 8.75V10.3654L15.75 11.375" stroke="#DFDFDF" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <span className='text-5xl text-formColor'>8</span>
                    <span className='text-formColor'>Interviews Today</span>
                </div>
                </div>
            </div>
            </div>
            <div className="center-center gap-[1.75rem]">
                {NavPerformance.map(item1 => (
                <div
                    key={item1.path}
                    onClick={() => navigate(item1.path)}
                    className={`w-[8.875rem]  text-center py-[0.875rem] relative px-[1.875rem]  text-nowrap  ${location.pathname === item1.path ? 'text-lemongreen' : 'textLimegray1'}`}>
                    {item1.label}
                    <div className={`${location.pathname === item1.path ? 'absolute left-0 h-[3px] w-full bottom-0 rounded-[0.375rem] bg-lemongreen' : ''}`}></div>
                </div>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default RecLayout