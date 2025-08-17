import React from 'react'

const Attendance = () => {
  return (
    <div className='font-semibold space-y-[3.5625rem]'>
      <div className='flex flex-col gap-[4.25rem]'>

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
                    <span className='text-formColor'>Total Requests</span>
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
                    <span className='text-formColor'>Pending</span>
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
                        <span className='text-formColor'>Approved</span>
                    </div>
                </div>
            </div>
        </div>
        {/* Maincontainer */}
        <div>
          <div className='between'>
            <div className='flex flex-col'>
              <h1 className='textWhite'>Leave Requests</h1>
              <h4 className='textLimegray'>Showing 3 of 3 requests</h4>
            </div>
            <div className='flex gap-[1.5rem]'>
              {/* filter */}
              <div className='w-[18.125rem] h-[3.4375rem]  between-center  rounded-[0.625rem] bg-[#151812] gap-[4.6875rem] px-[1.5625rem]'>
                <div className='flex items-center gap-[0.625rem]'>
                  <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.8334 1.5H4.16675C2.98824 1.5 2.39898 1.5 2.03286 1.8435C1.66675 2.187 1.66675 2.73985 1.66675 3.84555V4.4204C1.66675 5.28527 1.66675 5.7177 1.88308 6.07618C2.09941 6.43467 2.49464 6.65715 3.2851 7.10213L5.71261 8.46867C6.24296 8.76717 6.50814 8.9165 6.69801 9.08133C7.09341 9.42458 7.33681 9.82792 7.44711 10.3227C7.50008 10.5602 7.50008 10.8382 7.50008 11.3941V13.6187C7.50008 14.3767 7.50008 14.7556 7.71001 15.0511C7.91996 15.3465 8.29281 15.4922 9.03858 15.7838C10.6041 16.3958 11.3868 16.7018 11.9435 16.3537C12.5001 16.0055 12.5001 15.2099 12.5001 13.6187V11.3941C12.5001 10.8382 12.5001 10.5602 12.5531 10.3227C12.6633 9.82792 12.9067 9.42458 13.3022 9.08133C13.492 8.9165 13.7572 8.76717 14.2876 8.46867L16.7151 7.10213C17.5055 6.65715 17.9007 6.43467 18.1171 6.07618C18.3334 5.7177 18.3334 5.28527 18.3334 4.4204V3.84555C18.3334 2.73985 18.3334 2.187 17.9673 1.8435C17.6012 1.5 17.0119 1.5 15.8334 1.5Z" stroke="#5D6150" stroke-width="1.5"/>
                  </svg>
                  <span className='text-white'>All Status</span>
                </div>
                <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 1L8 7L1 1" stroke="#BEE532" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div>
                <button type="button" className='cursor-pointer ' onClick={()=>navigate('/AddNewemployee')}>
                  <div className='center-center w-[10.8125rem] h-[3.125rem] rounded-[0.625rem] gap-[0.625rem] bg-lemongreen'>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12.5C4 16.9183 7.58172 20.5 12 20.5C16.4183 20.5 20 16.9183 20 12.5" stroke="#0D0F11" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M12 14.5V4.5M12 4.5L15 7.5M12 4.5L9 7.5" stroke="#0D0F11" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className='text-black'>Export Report</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* table */}
      <div>
        <table className='w-full'>
          <thead className='border-b border-limegray'>
            <tr className='textFormColor1'>
              <th className='pb-[0.8125rem] pr-[16.5625rem]'>Employee Name</th>
              <th className='pb-[0.8125rem] pr-[13.4375rem]'>Clock In</th>
              <th className='pb-[0.8125rem] pr-[11.875rem]'>Clock Out</th>
              <th className='pb-[0.8125rem] pr-[16.625rem]'>Total Hours</th>
              <th className='pb-[0.8125rem] pr-[10.375rem]'>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='pt-[2.25rem]'>
                <h4 className='text-limegray'>Mikiyas Mulugeta</h4>
              </td>
              <td className='pt-[2.25rem]'>
                <h4 className='text-limegray'>09:00:00</h4>
              </td>
              <td className='pt-[2.25rem]'>
                <h4 className='text-limegray'>12:00:00</h4>
                </td>
              <td className='pt-[2.25rem]'>
                <h4 className='text-limegray'>7.5h</h4>
                </td>
              <td className='pt-[2.25rem]'>
                <div>
                  <span className='bg-[rgba(190,229,50,0.05)] text-sm px-[20px] py-[8px] rounded-full text-lemongreen'>Present</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className='pt-[2.25rem]'>
                <h4 className='text-limegray'>Mikiyas Mulugeta</h4>
              </td>
              <td className='pt-[2.25rem]'>
                <h4 className='text-limegray'>09:00:00</h4>
              </td>
              <td className='pt-[2.25rem]'>
                <h4 className='text-limegray'>12:00:00</h4>
                </td>
              <td className='pt-[2.25rem]'>
                <h4 className='text-limegray'>7.5h</h4>
                </td>
              <td className='pt-[2.25rem]'>
                <div>
                  <span className='bg-[rgba(190,229,50,0.05)] text-sm px-[20px] py-[8px] rounded-full text-yellowCust'>late</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className='pt-[2.25rem]'>
                <h4 className='text-limegray'>Mikiyas Mulugeta</h4>
              </td>
              <td className='pt-[2.25rem]'>
                <h4 className='text-limegray'>--</h4>
              </td>
              <td className='pt-[2.25rem]'>
                <h4 className='text-limegray'>--</h4>
                </td>
              <td className='pt-[2.25rem]'>
                <h4 className='text-limegray'>--</h4>
                </td>
              <td className='pt-[2.25rem]'>
                <div>
                  <span className='bg-[rgba(190,229,50,0.05)] text-sm px-[20px] py-[8px] rounded-full text-Error'>Absent</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default Attendance