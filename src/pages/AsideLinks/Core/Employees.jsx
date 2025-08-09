import React from 'react'
import {useNavigate} from 'react-router-dom'
const Employees = () => {

const navigate = useNavigate();

  return (
    <div className='font-semibold flex flex-col gap-[3.9375rem]'>
      {/* headerSearcharea */}
      <div className='flex items-center gap-[2.125rem]'>
          <div className='w-[71.9375rem] h-[3.4375rem]  flex items-center gap-[1.1875rem] bg-[#1D2015] rounded-[0.625rem] pl-[1.4375rem] '>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0625 18.375C14.6534 18.375 18.375 14.6534 18.375 10.0625C18.375 5.47163 14.6534 1.75 10.0625 1.75C5.47163 1.75 1.75 5.47163 1.75 10.0625C1.75 14.6534 5.47163 18.375 10.0625 18.375Z" stroke="#5D6150" stroke-width="1.3125"/>
<path d="M17.5 17.5L19.25 19.25" stroke="#5D6150" stroke-width="1.3125" stroke-linecap="round"/>
            </svg>
            <input type="text" placeholder="Search employee by name,email or ID" className='text-input  w-full h-full outline-0' name="" id="" />
          </div>
          <div className='w-[18.125rem] h-[3.4375rem]  flex items-center justify-center rounded-[0.625rem] bg-[#151812] gap-[4.6875rem]'>
            <div className='flex items-center gap-[0.625rem]'>
              <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.8334 1.5H4.16675C2.98824 1.5 2.39898 1.5 2.03286 1.8435C1.66675 2.187 1.66675 2.73985 1.66675 3.84555V4.4204C1.66675 5.28527 1.66675 5.7177 1.88308 6.07618C2.09941 6.43467 2.49464 6.65715 3.2851 7.10213L5.71261 8.46867C6.24296 8.76717 6.50814 8.9165 6.69801 9.08133C7.09341 9.42458 7.33681 9.82792 7.44711 10.3227C7.50008 10.5602 7.50008 10.8382 7.50008 11.3941V13.6187C7.50008 14.3767 7.50008 14.7556 7.71001 15.0511C7.91996 15.3465 8.29281 15.4922 9.03858 15.7838C10.6041 16.3958 11.3868 16.7018 11.9435 16.3537C12.5001 16.0055 12.5001 15.2099 12.5001 13.6187V11.3941C12.5001 10.8382 12.5001 10.5602 12.5531 10.3227C12.6633 9.82792 12.9067 9.42458 13.3022 9.08133C13.492 8.9165 13.7572 8.76717 14.2876 8.46867L16.7151 7.10213C17.5055 6.65715 17.9007 6.43467 18.1171 6.07618C18.3334 5.7177 18.3334 5.28527 18.3334 4.4204V3.84555C18.3334 2.73985 18.3334 2.187 17.9673 1.8435C17.6012 1.5 17.0119 1.5 15.8334 1.5Z" stroke="#5D6150" stroke-width="1.5"/>
              </svg>
              <span className='text-white'>All Department</span>
            </div>
            <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 1L8 7L1 1" stroke="#BEE532" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
      </div>

      {/* headerSection2 */}
      <div className='between'>
        <div>
          <h1 className='text-white'>Employees Directory</h1>
          <h4 className='textLimegray'>Manage employee profiles roles, and organization structure</h4>
        </div>
        <button type="button" className='cursor-pointer ' onClick={()=>navigate('/organization')}>
          <div className='center-center w-[12.75rem] h-[3.125rem] rounded-[0.625rem] gap-[0.625rem] bg-lemongreen'>
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 20C16.0228 20 20.5 15.5228 20.5 10C20.5 4.47715 16.0228 0 10.5 0C4.97715 0 0.5 4.47715 0.5 10C0.5 15.5228 4.97715 20 10.5 20ZM11.25 7C11.25 6.58579 10.9142 6.25 10.5 6.25C10.0858 6.25 9.75 6.58579 9.75 7V9.25H7.5C7.08579 9.25 6.75 9.5858 6.75 10C6.75 10.4142 7.08579 10.75 7.5 10.75H9.75V13C9.75 13.4142 10.0858 13.75 10.5 13.75C10.9142 13.75 11.25 13.4142 11.25 13V10.75H13.5C13.9142 10.75 14.25 10.4142 14.25 10C14.25 9.5858 13.9142 9.25 13.5 9.25H11.25V7Z" fill="#0D0F11"/>
            </svg>
            <span className='text-black'>Add Employees</span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Employees