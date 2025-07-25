import React from 'react'

const Header = ({ readPath }) => {
  // Object with code-friendly keys
  const parag = {
    Dashboard: "Welcome back! Here's what's happening at your organization today.",
    Organization: "Manage company structure, departments, and organizational hierarchy.",
    Employee: "Manage employee profile, roles, and organizational structure.",
    Attendance: "Monitor employee attendance, working hours, and presence status.",
    Leave_Management: "Manage employee leave requests, balances, and policies.",
    Recruitment: "",
    Performance:"",
    Training:"",
    Announcement:"",
    Assets:""


  }

  // Map human-readable titles to object keys
  const keyMap = {
    "Dashboard": "Dashboard",
    "organization": "Organization",
    "employees": "Employee",
    "attendance": "Attendance",
    "leaveManagment": "Leave_Management",
    "recruitment": "Recruitment",
    "performance":"Performance",
    "training":"Training",
    "announcement":"Announcement",
    "assets":"Assets"
  }

  // Safely access the right key
  const description = parag[keyMap[readPath]] || ""

  return (
    <div className='flex items-center w-full'>
      <header className='w-[calc(100%-3.0625rem)] flex items-center justify-between'>
        <div className='flex flex-col  leading-none space-y-[0.4375rem]'>
          <h1 className='text-white text-[2rem] font-semibold'>{(keyMap[readPath]) === 'Leave_Management' ? 'Leave Managment' :  `${keyMap[readPath]}` }</h1>
          <h4 className='text-limegray text-[1rem font-medium'>{description}</h4>
        </div>
        <div className='h-full w-[13.375rem] text-nowrap'>
          <div className='flex items-center  justify-between'>
            <div className='w-[138px]'>
              <span className='text-accountColor font-medium'>Welcome, Benjamin</span>
            </div>
            <div className='border rounded-full flex p-[15px] items-center justify-center bg-black'>
              <svg  width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 8.75C12.433 8.75 14 7.183 14 5.25C14 3.317 12.433 1.75 10.5 1.75C8.567 1.75 7 3.317 7 5.25C7 7.183 8.567 8.75 10.5 8.75Z" stroke="#BEE532" stroke-width="1.5"/>
<path d="M10.5 18.375C13.8827 18.375 16.625 16.808 16.625 14.875C16.625 12.942 13.8827 11.375 10.5 11.375C7.11726 11.375 4.375 12.942 4.375 14.875C4.375 16.808 7.11726 18.375 10.5 18.375Z" stroke="#BEE532" stroke-width="1.5"/>
              </svg>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
