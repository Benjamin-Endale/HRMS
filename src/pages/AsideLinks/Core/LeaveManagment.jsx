import React from 'react'

const Leave_Managment = () => {
  return (
    <>
      <div className='flex items-start space-x-[1.25rem]  '>
        {/* card1 */}
          <div className='w-[29.94rem] h-[14.8125rem] bg-[#BEE5320D]  rounded-[30px]'>
            <div className='ml-[2.25rem] mt-[2.1875rem]   space-x-[1.25rem]'>
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.35352 10.5C11.5627 10.5 13.3535 8.70914 13.3535 6.5C13.3535 4.29086 11.5627 2.5 9.35352 2.5C7.14438 2.5 5.35352 4.29086 5.35352 6.5C5.35352 8.70914 7.14438 10.5 9.35352 10.5Z" stroke="white" stroke-width="1.5"/>
              <path d="M15.3535 9.5C17.0104 9.5 18.3535 8.15685 18.3535 6.5C18.3535 4.84315 17.0104 3.5 15.3535 3.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M9.35352 21.5C13.2195 21.5 16.3535 19.7091 16.3535 17.5C16.3535 15.2909 13.2195 13.5 9.35352 13.5C5.48752 13.5 2.35352 15.2909 2.35352 17.5C2.35352 19.7091 5.48752 21.5 9.35352 21.5Z" stroke="white" stroke-width="1.5"/>
              <path d="M18.3535 14.5C20.1077 14.8847 21.3535 15.8589 21.3535 17C21.3535 18.0293 20.3398 18.9229 18.8535 19.3704" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
            <div className=' ml-[2.25rem] mt-[3.9375rem]'>
              <h1 className='txt-[48px] text-[#DFDFDF] text-[48px] font-semibold'>234</h1>
              <p className='font-semibold text-[#DFDFDF]'>Total Requests</p>
            </div>
          </div> 
          {/* card2 */}
            <div className='w-[29.94rem] h-[14.8125rem] bg-[#BEE5320D] rounded-[30px]'>
            <div className='ml-[2.25rem] mt-[2.1875rem]   space-x-[1.25rem]'>
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.3526 22.5C17.8754 22.5 22.3526 18.0228 22.3526 12.5C22.3526 6.97715 17.8754 2.5 12.3526 2.5C6.82975 2.5 2.3526 6.97715 2.3526 12.5C2.3526 18.0228 6.82975 22.5 12.3526 22.5Z" stroke="white" stroke-width="1.5"/>
                <path d="M14.8526 10L9.85262 15M9.8526 10L14.8526 15" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
            </div>
            <div className=' ml-[2.25rem] mt-[3.9375rem]'>
              <h1 className='txt-[48px] text-[#DFDFDF] text-[48px] font-semibold'>2</h1>
              <p className='font-semibold text-[#DFDFDF]'>Pending</p>
            </div>
          </div> 
          {/* card3 */}
            <div className='w-[29.94rem] h-[14.8125rem] bg-[#BEE5320D] rounded-[30px]'>
            <div className='ml-[2.25rem] mt-[2.1875rem]   space-x-[1.25rem]'>
              <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.10254 6.125H2.10254" stroke="#DFDFDF" stroke-width="1.3125" stroke-linecap="round"/>
                <path d="M7.35254 10.5H2.10254" stroke="#DFDFDF" stroke-width="1.3125" stroke-linecap="round"/>
                <path d="M9.10254 14.875H2.10254" stroke="#DFDFDF" stroke-width="1.3125" stroke-linecap="round"/>
                <path d="M15.2275 14.875C17.6438 14.875 19.6025 12.9162 19.6025 10.5C19.6025 8.08375 17.6438 6.125 15.2275 6.125C12.8113 6.125 10.8525 8.08375 10.8525 10.5C10.8525 12.9162 12.8113 14.875 15.2275 14.875Z" stroke="#DFDFDF" stroke-width="1.3125"/>
                <path d="M15.2275 8.75V10.3654L16.1025 11.375" stroke="#DFDFDF" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className=' ml-[2.25rem] mt-[3.9375rem]'>
              <h1 className='txt-[48px] text-[#DFDFDF] text-[48px] font-semibold'>12</h1>
              <p className='font-semibold text-[#DFDFDF]'>Approved</p>
            </div>
          </div> 
      </div>
      {/* Text & button */}
      <div className='flex mt-[4.25rem] justify-between item-center'>
        <div className=' mr-[46.3125rem]'>
          <h4 className='text-white font-semibold txt-[20px]'>Leave Requests</h4>
          <p className='text-limegray font-medium'>Showing 3 of 3 requests</p>
        </div>
        <div className='w-[290px] h-[55px] bg-[#151812] rounded-[10px]  flex items-center mr-[1.9375rem] '>
            <svg className='ml-[25px] ' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.8333 2.5H4.16663C2.98812 2.5 2.39886 2.5 2.03274 2.8435C1.66663 3.187 1.66663 3.73985 1.66663 4.84555V5.4204C1.66663 6.28527 1.66663 6.7177 1.88296 7.07618C2.09929 7.43467 2.49452 7.65715 3.28498 8.10213L5.71249 9.46867C6.24284 9.76717 6.50802 9.9165 6.69788 10.0813C7.09328 10.4246 7.33669 10.8279 7.44699 11.3227C7.49996 11.5602 7.49996 11.8382 7.49996 12.3941V14.6187C7.49996 15.3767 7.49996 15.7556 7.70989 16.0511C7.91983 16.3465 8.29269 16.4922 9.03846 16.7838C10.604 17.3958 11.3867 17.7018 11.9434 17.3537C12.5 17.0055 12.5 16.2099 12.5 14.6187V12.3941C12.5 11.8382 12.5 11.5602 12.553 11.3227C12.6632 10.8279 12.9066 10.4246 13.302 10.0813C13.4919 9.9165 13.757 9.76717 14.2875 9.46867L16.715 8.10213C17.5054 7.65715 17.9006 7.43467 18.117 7.07618C18.3333 6.7177 18.3333 6.28527 18.3333 5.4204V4.84555C18.3333 3.73985 18.3333 3.187 17.9672 2.8435C17.601 2.5 17.0118 2.5 15.8333 2.5Z" stroke="#5D6150" stroke-width="1.5"/>
            </svg>
            <p className='text-white font-semibold txt-[16px] ml-[10px] mr-[75px] '>All Status</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 9L12 15L5 9" stroke="#BEE532" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
          <div className='flex items-center w-[204px] h-[55px] bg-lemongreen rounded-[10px] gap-[10px]  text-[#0D0F11] font-semibold txt-[16px]'>
          <svg className='ml-[20px]' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12.5C4 16.9183 7.58172 20.5 12 20.5C16.4183 20.5 20 16.9183 20 12.5" stroke="#0D0F11" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M12 14.5V4.5M12 4.5L15 7.5M12 4.5L9 7.5" stroke="#0D0F11" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
         <p>Export Report</p>  
            </div>
      </div>
      <div className='flex '>
      
      {/* col1 */}
      <div className='flex flex-col gap-[50px] mt-[57px] mr-[174px] '>
        <div className='text-white font-semibold txt-[16px] '>
          
          <h2>Employee Name</h2>
           
        </div>
        <div className='space-y-[37px]'>
          <p className='text-limegray font-semibold'>Mikiyas Mulugeta</p>
          <p className='text-limegray font-semibold'>Mikiyas Mulugeta</p>
          <p className='text-limegray font-semibold'>Mikiyas Mulugeta</p>
          <p className='text-limegray font-semibold'>Mikiyas Mulugeta</p>
        </div>
      </div>
      {/* col2 */}
      <div className='flex flex-col gap-[50px] mt-[57px] mr-[166px]'>
        <div className='text-white font-semibold txt-[16px]'>
          <h2>Leave Type</h2>
        </div>
        <div className='space-y-[37px]'>
          <p className='text-limegray font-semibold'>Annual Leave</p>
          <p className='text-limegray font-semibold'>Sick Leave</p>
          <p className='text-limegray font-semibold'>Personal Leave</p>
          <p className='text-limegray font-semibold'>Personal Leave</p>
        </div>
      </div>
      {/* col3 */}
      <div className='flex flex-col gap-[50px] mt-[57px] mr-[138px]'>
        <div className='text-white font-semibold txt-[16px]'>
          <h2>Duration</h2>
        </div>
        <div className='space-y-[37px]'>
          <p className='text-limegray font-semibold'>5 days</p>
          <p className='text-limegray font-semibold'>3 days</p>
          <p className='text-limegray font-semibold'>3 days</p>
          <p className='text-limegray font-semibold'>1 day</p>
        </div>
      </div>
      {/* col4 */}
      <div className='flex flex-col gap-[50px] mt-[57px] mr-[112px]'>
        <div className='text-white font-semibold txt-[16px]'>
          <h2>Reason</h2>
        </div>
        <div className='space-y-[37px]'>
          <p className='text-limegray font-semibold'>Family vacation</p>
          <p className='text-limegray font-semibold'>Medical appointment</p>
          <p className='text-limegray font-semibold'>Personal matters</p>
          <p className='text-limegray font-semibold'>Personal matters</p>
        </div>
      </div>
      {/* col5 */}
      <div className='flex flex-col gap-[48px] mt-[57px] mr-[127px]'>
        <div className='text-white font-semibold txt-[16px]'>
          <h2>Status</h2>
        </div>
        <div className='space-y-[25px]'>
          <div className='w-[99px] h-[32px] flex justify-center items-center bg-[#BEE5320D] rounded-[33px] text-lemongreen font-semibold txt-[14px]'>Approved</div>
          <div className='w-[99px] h-[32px] flex justify-center items-center bg-[#BEE5320D] rounded-[33px] text-[#F7AB1E] font-semibold txt-[14px]'>Pending</div>
          <div className='w-[99px] h-[32px] flex justify-center items-center bg-[#BEE5320D] rounded-[33px] text-[#F7AB1E] font-semibold txt-[14px]'>Pending</div>
          <div className='w-[99px] h-[32px] flex justify-center items-center bg-[#BEE5320D] rounded-[33px] text-[#E3694A] font-semibold txt-[14px]'>Rejected</div>
        </div>
      </div>
       <div className='flex flex-col gap-[50px] mt-[57px]'>
        <div className='text-white font-semibold txt-[16px]'>
          <h2>Actions</h2>
        </div>
        <div className='space-y-[37px]'>
          <p className='text-limegray font-semibold'>blabla</p>
          <p className='text-limegray font-semibold'>blabla</p>
          <p className='text-limegray font-semibold'>blabla</p>
          <p className='text-limegray font-semibold'>blabla</p>
        </div>
      </div>
    </div>
    </>
  )
}
export default Leave_Managment