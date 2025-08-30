import React , { useState } from 'react'
import ModalContainerRequest from '../Modals/AddRequest/ModalContainerRequest'
import AddRequest from '../Modals/AddRequest/AddRequest'

const FeedBack = () => {
  const [isOpen , setisOpen] = useState(false)
  return (
    <div className='font-semibold space-y-[2.5625rem]'>
        {/* header */}
        <div className='between'>
            <div className='flex flex-col'>
                <h1 className='textFormColor'>360° Feedback System</h1>
                <h4 className='textLimegray'>Collect and manage multi-source feedback</h4>
            </div>
            <div>
                <button type="button" className='cursor-pointer' onClick={()=>setisOpen(true)}>
                    <div className='center-center w-[12.125rem] h-[3.125rem] rounded-[0.625rem] gap-[0.625rem] bg-lemongreen'>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 20C16.0228 20 20.5 15.5228 20.5 10C20.5 4.47715 16.0228 0 10.5 0C4.97715 0 0.5 4.47715 0.5 10C0.5 15.5228 4.97715 20 10.5 20ZM11.25 7C11.25 6.58579 10.9142 6.25 10.5 6.25C10.0858 6.25 9.75 6.58579 9.75 7V9.25H7.5C7.08579 9.25 6.75 9.5858 6.75 10C6.75 10.4142 7.08579 10.75 7.5 10.75H9.75V13C9.75 13.4142 10.0858 13.75 10.5 13.75C10.9142 13.75 11.25 13.4142 11.25 13V10.75H13.5C13.9142 10.75 14.25 10.4142 14.25 10C14.25 9.5858 13.9142 9.25 13.5 9.25H11.25V7Z" fill="#0D0F11"/>
                        </svg>
                        <span className='text-black'>Request Feedback</span>
                    </div>
                </button>
                {/* Modal */}
                <ModalContainerRequest  open={isOpen}>
                    <AddRequest onClose={() => setisOpen(false)} />
                </ModalContainerRequest>
            </div>
        </div>
        
        <div className='flex flex-col gap-[3.375rem] h-[25rem] overflow-y-auto scrollBarDash'>
          <div className='text-formColor flex items-center gap-[5.1875rem]'>
            <div className= 'flex gap-[4.25rem] items-center'>
              <div className='flex gap-[1.0625rem] items-center'>
                <div><h1>John Smith</h1></div>
                <div className=''><h4 className='px-[1.53125rem] text-[14px] border-0 text-center rounded-[2.0625rem] bg-bgColor py-[0.5rem]'>Manager Feedback</h4></div>
              </div>
              <div className='text-formColor'>
                <div className='flex gap-[10px] '>
                    <div>
                      <h4 className='text-limegray'>From: <span className='text-limeLight'>Mike Chen</span></h4>
                    </div>
                    <h4 className="before:content-['•'] before:mr-1 text-limegray">Jan 20, 2024</h4>
                </div>  
              </div>
            </div>
            <div className=' text-limegray w-[49.6875rem]   '>
              <p>John has been doing excellent work on the new architecture. His attention to detail and problem-solving skills are outstanding.John has been doing excellent work on the new architecture. His attention to detail and problem-solving skills are outstanding.</p>
            </div>
          </div>

          
          <div className='text-formColor flex items-center gap-[5.1875rem] '>
            <div className= 'flex gap-[4.25rem] items-center'>
              <div className='flex gap-[1.0625rem] items-center'>
                <div><h1>John Smith</h1></div>
                <div className=''><h4 className='px-[1.53125rem] text-[14px] border-0 text-center rounded-[2.0625rem] bg-bgColor py-[0.5rem]'>Manager Feedback</h4></div>
              </div>
              <div className='text-formColor'>
                <div className='flex gap-[10px] '>
                    <div>
                      <h4 className='text-limegray'>From: <span className='text-limeLight'>Mike Chen</span></h4>
                    </div>
                    <h4 className="before:content-['•'] before:mr-1 text-limegray">Jan 20, 2024</h4>
                </div>  
              </div>
            </div>
            <div className=' text-limegray w-[49.6875rem]   '>
              <p>John has been doing excellent work on the new architecture. His attention to detail and problem-solving skills are outstanding.John has been doing excellent work on the new architecture. His attention to detail and problem-solving skills are outstanding.</p>
            </div>
          </div>
    
          <div className='text-formColor flex items-center gap-[5.1875rem]'>
            <div className= 'flex gap-[4.25rem] items-center'>
              <div className='flex gap-[1.0625rem] items-center'>
                <div><h1>John Smith</h1></div>
                <div className=''><h4 className='px-[1.53125rem] text-[14px] border-0 text-center rounded-[2.0625rem] bg-bgColor py-[0.5rem]'>Manager Feedback</h4></div>
              </div>
              <div className='text-formColor'>
                <div className='flex gap-[10px] '>
                    <div>
                      <h4 className='text-limegray'>From: <span className='text-limeLight'>Mike Chen</span></h4>
                    </div>
                    <h4 className="before:content-['•'] before:mr-1 text-limegray">Jan 20, 2024</h4>
                </div>  
              </div>
            </div>
            <div className=' text-limegray w-[49.6875rem]   '>
              <p>John has been doing excellent work on the new architecture. His attention to detail and problem-solving skills are outstanding.John has been doing excellent work on the new architecture. His attention to detail and problem-solving skills are outstanding.</p>
            </div>
          </div>

          
          <div className='text-formColor flex items-center gap-[5.1875rem]'>
            <div className= 'flex gap-[4.25rem] items-center'>
              <div className='flex gap-[1.0625rem] items-center'>
                <div><h1>John Smith</h1></div>
                <div className=''><h4 className='px-[1.53125rem] text-[14px] border-0 text-center rounded-[2.0625rem] bg-bgColor py-[0.5rem]'>Manager Feedback</h4></div>
              </div>
              <div className='text-formColor'>
                <div className='flex gap-[10px] '>
                    <div>
                      <h4 className='text-limegray'>From: <span className='text-limeLight'>Mike Chen</span></h4>
                    </div>
                    <h4 className="before:content-['•'] before:mr-1 text-limegray">Jan 20, 2024</h4>
                </div>  
              </div>
            </div>
            <div className=' text-limegray w-[49.6875rem]   '>
              <p>John has been doing excellent work on the new architecture. His attention to detail and problem-solving skills are outstanding.John has been doing excellent work on the new architecture. His attention to detail and problem-solving skills are outstanding.</p>
            </div>
          </div>
      
          <div className='text-formColor flex items-center gap-[5.1875rem]'>
            <div className= 'flex gap-[4.25rem] items-center'>
              <div className='flex gap-[1.0625rem] items-center'>
                <div><h1>John Smith</h1></div>
                <div className=''><h4 className='px-[1.53125rem] text-[14px] border-0 text-center rounded-[2.0625rem] bg-bgColor py-[0.5rem]'>Manager Feedback</h4></div>
              </div>
              <div className='text-formColor'>
                <div className='flex gap-[10px] '>
                    <div>
                      <h4 className='text-limegray'>From: <span className='text-limeLight'>Mike Chen</span></h4>
                    </div>
                    <h4 className="before:content-['•'] before:mr-1 text-limegray">Jan 20, 2024</h4>
                </div>  
              </div>
            </div>
            <div className=' text-limegray w-[49.6875rem]   '>
              <p>John has been doing excellent work on the new architecture. His attention to detail and problem-solving skills are outstanding.John has been doing excellent work on the new architecture. His attention to detail and problem-solving skills are outstanding.</p>
            </div>
          </div>

          
          <div className='text-formColor flex items-center gap-[5.1875rem]'>
            <div className= 'flex gap-[4.25rem] items-center'>
              <div className='flex gap-[1.0625rem] items-center'>
                <div><h1>John Smith</h1></div>
                <div className=''><h4 className='px-[1.53125rem] text-[14px] border-0 text-center rounded-[2.0625rem] bg-bgColor py-[0.5rem]'>Manager Feedback</h4></div>
              </div>
              <div className='text-formColor'>
                <div className='flex gap-[10px] '>
                    <div>
                      <h4 className='text-limegray'>From: <span className='text-limeLight'>Mike Chen</span></h4>
                    </div>
                    <h4 className="before:content-['•'] before:mr-1 text-limegray">Jan 20, 2024</h4>
                </div>  
              </div>
            </div>
            <div className=' text-limegray w-[49.6875rem]   '>
              <p>John has been doing excellent work on the new architecture. His attention to detail and problem-solving skills are outstanding.John has been doing excellent work on the new architecture. His attention to detail and problem-solving skills are outstanding.</p>
            </div>
          </div>
        </div>
    
    </div>
  )
}

export default FeedBack