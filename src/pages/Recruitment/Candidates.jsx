import React from 'react'

const Candidates = () => {
  return (
    <div className='font-semibold space-y-[3.1875rem]'>
      <div className='flex flex-col gap-[2.0625rem]'>
        <div className='flex flex-col'>
          <h1 className='textFormColor'>Candidate Management</h1>
          <h4 className='textLimegray'>Track and manage job applications</h4>
        </div>
        <div className='flex gap-[2.125rem]'>
          <div className='w-[71.9375rem] h-[3.4375rem]  flex items-center gap-[1.1875rem] bg-[#1D2015] rounded-[0.625rem] px-[1.4375rem] '>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.0625 18.375C14.6534 18.375 18.375 14.6534 18.375 10.0625C18.375 5.47163 14.6534 1.75 10.0625 1.75C5.47163 1.75 1.75 5.47163 1.75 10.0625C1.75 14.6534 5.47163 18.375 10.0625 18.375Z" stroke="#5D6150" stroke-width="1.3125"/>
  <path d="M17.5 17.5L19.25 19.25" stroke="#5D6150" stroke-width="1.3125" stroke-linecap="round"/>
            </svg>
            <input type="search" placeholder="Search employee by name,email or ID" className='placeholder-input text-white  w-full h-full outline-0' name="" id="" />
          </div>

          {/* filter */}
          <div className='w-[18.125rem] h-[3.4375rem]  between-center  rounded-[0.625rem] bg-[#151812] gap-[4.6875rem] px-[1.5625rem]'>
            <div className='flex items-center gap-[0.625rem]'>
              <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.8334 1.5H4.16675C2.98824 1.5 2.39898 1.5 2.03286 1.8435C1.66675 2.187 1.66675 2.73985 1.66675 3.84555V4.4204C1.66675 5.28527 1.66675 5.7177 1.88308 6.07618C2.09941 6.43467 2.49464 6.65715 3.2851 7.10213L5.71261 8.46867C6.24296 8.76717 6.50814 8.9165 6.69801 9.08133C7.09341 9.42458 7.33681 9.82792 7.44711 10.3227C7.50008 10.5602 7.50008 10.8382 7.50008 11.3941V13.6187C7.50008 14.3767 7.50008 14.7556 7.71001 15.0511C7.91996 15.3465 8.29281 15.4922 9.03858 15.7838C10.6041 16.3958 11.3868 16.7018 11.9435 16.3537C12.5001 16.0055 12.5001 15.2099 12.5001 13.6187V11.3941C12.5001 10.8382 12.5001 10.5602 12.5531 10.3227C12.6633 9.82792 12.9067 9.42458 13.3022 9.08133C13.492 8.9165 13.7572 8.76717 14.2876 8.46867L16.7151 7.10213C17.5055 6.65715 17.9007 6.43467 18.1171 6.07618C18.3334 5.7177 18.3334 5.28527 18.3334 4.4204V3.84555C18.3334 2.73985 18.3334 2.187 17.9673 1.8435C17.6012 1.5 17.0119 1.5 15.8334 1.5Z" stroke="#5D6150" stroke-width="1.5"/>
              </svg>
              <span className='text-white'>Position</span>
            </div>
            <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 1L8 7L1 1" stroke="#BEE532" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Table */}
      <div>
        <table className='w-full pt-[4rem]'>
          <thead className='border-b border-limegray'>
            <tr className='textFormColor1'>
              <th className='pb-[0.8125rem] pr-[7.5rem]'>Candidate</th>
              <th className='pb-[0.8125rem] pr-[7.875rem]'>Contact Information </th>
              <th className='pb-[0.8125rem] pr-[13.1875rem]'>Applied For</th>
              <th className='pb-[0.8125rem] pr-[7.5625rem]'>Applications</th>
              <th className='pb-[0.8125rem] pr-[8.9375rem]'>Application Submitted</th>
              <th className='pb-[0.8125rem] pr-[9.4375rem]'>Action</th>
            </tr>
          </thead>
          <tbody className='space-y-[1.375rem]'>
            <tr>
              <td className='pt-[1.4375rem]'>
                <h4 className='textLimegray1'>Engineering</h4>
              </td>
              <td className='pt-[1.4375rem]'>
                <div className='flex flex-col'>
                  <h1 className='text-limeLight'>sarah.johnson@email.com</h1>
                  <h4 className='textLimegray'>+1 (555) 987-6543</h4>
                </div>
              </td>
              <td className='pt-[1.4375rem]'>
                <h4 className='textLimegray1'>Senior Software Engineer</h4>
              </td>
              <td className='pt-[1.4375rem]'>
                <h4 className='textLimegray1'>45</h4>
              </td>
              <td className='pt-[1.4375rem]'>
                <h4 className='textLimegray1'>Jan 15, 2025</h4>
              </td>
              <td className='flex items-center gap-[2.5625rem] pt-[1.4375rem]'>
                <button type="button" className='cursor-pointer'>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.33333 1.83398V5.50065M14.6667 1.83398V5.50065M2.75 9.16732H19.25M4.58333 3.66732H17.4167C18.4292 3.66732 19.25 4.48813 19.25 5.50065V18.334C19.25 19.3465 18.4292 20.1673 17.4167 20.1673H4.58333C3.57081 20.1673 2.75 19.3465 2.75 18.334V5.50065C2.75 4.48813 3.57081 3.66732 4.58333 3.66732Z" stroke="#BEE532" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <button type="button" className='cursor-pointer'>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.1668 15.5833C20.1668 16.0696 19.9737 16.5359 19.6299 16.8797C19.286 17.2235 18.8197 17.4167 18.3335 17.4167H6.25916C5.77297 17.4168 5.30673 17.61 4.963 17.9538L2.9445 19.9723C2.85348 20.0633 2.73752 20.1253 2.61128 20.1504C2.48504 20.1755 2.35419 20.1626 2.23528 20.1134C2.11636 20.0641 2.01472 19.9807 1.94321 19.8737C1.87169 19.7667 1.83351 19.6409 1.8335 19.5122V4.58333C1.8335 4.0971 2.02665 3.63079 2.37047 3.28697C2.71428 2.94315 3.1806 2.75 3.66683 2.75H18.3335C18.8197 2.75 19.286 2.94315 19.6299 3.28697C19.9737 3.63079 20.1668 4.0971 20.1668 4.58333V15.5833Z" stroke="#BEE532" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <button type="button" className='cursor-pointer'>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 13.75V2.75M11 13.75L6.41667 9.16667M11 13.75L15.5833 9.16667M19.25 13.75V17.4167C19.25 17.9029 19.0568 18.3692 18.713 18.713C18.3692 19.0568 17.9029 19.25 17.4167 19.25H4.58333C4.0971 19.25 3.63079 19.0568 3.28697 18.713C2.94315 18.3692 2.75 17.9029 2.75 17.4167V13.75" stroke="#BEE532" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Candidates