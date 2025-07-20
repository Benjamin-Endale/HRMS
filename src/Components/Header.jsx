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
    Training:""


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
    "training":"Training"
  }

  // Safely access the right key
  const description = parag[keyMap[readPath]] || ""

  return (
    <div className='flex items-center w-full'>
      <header className='flex-1'>
        <div className='flex flex-col  leading-none space-y-[0.4375rem]'>
          <h1 className='text-white text-[2rem]'>{(keyMap[readPath]) === 'Leave_Management' ? 'Leave Managment' :  `${keyMap[readPath]}` }</h1>
          <h4 className='text-limegray text-[1rem]'>{description}</h4>
        </div>
      </header>
    </div>
  )
}

export default Header
