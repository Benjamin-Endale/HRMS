
import React , {useState} from 'react'
import AddSchedule from '../Modals/AddSchedule/AddSchedule'
import ModalContainerSchedule from '../Modals/AddSchedule/ModalContainerSchedule'


const Interviews = () => {
    const [isOpen,setisOpen] = useState(false)
  return (
    <div className='font-semibold space-y-[3.3125rem]'>
      <div className='between'>
        <div className='flex flex-col'>
          <h1 className='textFormColor'>Interview Management</h1>
          <h4 className='textLimegray'>Schedule and track interviews</h4>
        </div>
          {/* Schedule Interview */}
          <button type="button" className='cursor-pointer ' onClick={()=>setisOpen(true)}>
            <div className='center-center w-[14.0625rem] h-[3.125rem] rounded-[0.625rem] gap-[0.625rem] bg-lemongreen'>
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 20C16.0228 20 20.5 15.5228 20.5 10C20.5 4.47715 16.0228 0 10.5 0C4.97715 0 0.5 4.47715 0.5 10C0.5 15.5228 4.97715 20 10.5 20ZM11.25 7C11.25 6.58579 10.9142 6.25 10.5 6.25C10.0858 6.25 9.75 6.58579 9.75 7V9.25H7.5C7.08579 9.25 6.75 9.5858 6.75 10C6.75 10.4142 7.08579 10.75 7.5 10.75H9.75V13C9.75 13.4142 10.0858 13.75 10.5 13.75C10.9142 13.75 11.25 13.4142 11.25 13V10.75H13.5C13.9142 10.75 14.25 10.4142 14.25 10C14.25 9.5858 13.9142 9.25 13.5 9.25H11.25V7Z" fill="#0D0F11"/>
              </svg>
              <span className='text-black'>Schedule Interview</span>
            </div>
          </button>
          {/* Modal */}
          <ModalContainerSchedule  open={isOpen}>
            <AddSchedule  onClose={() => setisOpen(false)} />
          </ModalContainerSchedule >
      </div>
      {/* table */}
      <div>
        <table>
          <thead className='border-b border-limegray'>
            <tr className='textFormColor1'>
              <th className='pb-[0.8125rem] pr-[7.125rem]'>Candidate</th>
              <th className='pb-[0.8125rem] pr-[13.9375rem]'>Position</th>
              <th className='pb-[0.8125rem] pr-[7.3125rem]'>Interviewer</th>
              <th className='pb-[0.8125rem] pr-[6.8125rem]'>Date & Time</th>
              <th className='pb-[0.8125rem] pr-[10.8125rem]'>Type</th>
              <th className='pb-[0.8125rem] pr-[8.625rem]'>Status</th>
              <th className='pb-[0.8125rem] pr-[10.125rem]'>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='pt-[1.4375rem]'>
                <h4 className='textLimegray1'>Engineering</h4>
              </td>
              <td className='pt-[1.4375rem]'>
                <h4 className='textLimegray1'>Senior Software Engineer</h4>
              </td>
              <td className='pt-[1.4375rem]'>
                <h4 className='textLimegray1'>Bereket Daniel</h4>
              </td>
              <td className='pt-[1.4375rem]'>
                <div className='flex flex-col'>
                  <h1 className='text-limeLight'>Jan 25, 2024</h1>
                  <h4 className='textLimegray'>2:00 PM</h4>
                </div>
              </td>
              <td className='pt-[1.4375rem]'>
                <h4 className='textLimegray1'>Technical Interview</h4>
              </td>
              <td className='pt-[1.4375rem]'>
                <div>
                  <span className='bg-[rgba(190,229,50,0.05)] text-sm px-[20px] py-[8px] rounded-full text-lemongreen'>Scheduled</span>
                </div>
              </td>
              <td className='pt-[2.0625rem] flex items-center gap-[2.5625rem]'>
                <button type="button" className='cursor-pointer'>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 2.74923H4.58333C4.0971 2.74923 3.63079 2.94239 3.28697 3.2862C2.94315 3.63002 2.75 4.09633 2.75 4.58256V17.4159C2.75 17.9021 2.94315 18.3684 3.28697 18.7123C3.63079 19.0561 4.0971 19.2492 4.58333 19.2492H17.4167C17.9029 19.2492 18.3692 19.0561 18.713 18.7123C19.0568 18.3684 19.25 17.9021 19.25 17.4159V10.9992M16.8438 2.40548C17.2084 2.04081 17.703 1.83594 18.2188 1.83594C18.7345 1.83594 19.2291 2.04081 19.5938 2.40548C19.9584 2.77015 20.1633 3.26476 20.1633 3.78048C20.1633 4.29621 19.9584 4.79081 19.5938 5.15548L11.3318 13.4183C11.1142 13.6358 10.8453 13.795 10.5499 13.8812L7.91633 14.6512C7.83746 14.6742 7.75384 14.6756 7.67425 14.6552C7.59466 14.6348 7.52201 14.5934 7.46391 14.5353C7.40581 14.4772 7.3644 14.4046 7.34401 14.325C7.32362 14.2454 7.32499 14.1618 7.348 14.0829L8.118 11.4493C8.20465 11.1542 8.36416 10.8856 8.58183 10.6683L16.8438 2.40548Z" stroke="#BEE532" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <button type="button" className='cursor-pointer'>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.51792 4.5189L17.4805 17.4824M20.1663 11.0007C20.1663 16.0633 16.0623 20.1673 10.9997 20.1673C5.93706 20.1673 1.83301 16.0633 1.83301 11.0007C1.83301 5.93804 5.93706 1.83398 10.9997 1.83398C16.0623 1.83398 20.1663 5.93804 20.1663 11.0007Z" stroke="#BEE532" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </td>
            </tr>
            <tr>
              <td className='pt-[1.4375rem]'>
                <h4 className='textLimegray1'>Engineering</h4>
              </td>
              <td className='pt-[1.4375rem]'>
                <h4 className='textLimegray1'>Senior Software Engineer</h4>
              </td>
              <td className='pt-[1.4375rem]'>
                <h4 className='textLimegray1'>Bereket Daniel</h4>
              </td>
              <td className='pt-[1.4375rem]'>
                <div className='flex flex-col'>
                  <h1 className='text-limeLight'>Jan 25, 2024</h1>
                  <h4 className='textLimegray'>2:00 PM</h4>
                </div>
              </td>
              <td className='pt-[1.4375rem]'>
                <h4 className='textLimegray1'>HR Interview</h4>
              </td>
              <td className='pt-[1.4375rem]'>
                <div>
                  <span className='bg-[rgba(190,229,50,0.05)] text-sm px-[20px] py-[8px] rounded-full text-Error'>Completed</span>
                </div>
              </td>
              <td className='pt-[2.0625rem] flex items-center gap-[2.5625rem]'>
                <button type="button" className='cursor-pointer'>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 2.74923H4.58333C4.0971 2.74923 3.63079 2.94239 3.28697 3.2862C2.94315 3.63002 2.75 4.09633 2.75 4.58256V17.4159C2.75 17.9021 2.94315 18.3684 3.28697 18.7123C3.63079 19.0561 4.0971 19.2492 4.58333 19.2492H17.4167C17.9029 19.2492 18.3692 19.0561 18.713 18.7123C19.0568 18.3684 19.25 17.9021 19.25 17.4159V10.9992M16.8438 2.40548C17.2084 2.04081 17.703 1.83594 18.2188 1.83594C18.7345 1.83594 19.2291 2.04081 19.5938 2.40548C19.9584 2.77015 20.1633 3.26476 20.1633 3.78048C20.1633 4.29621 19.9584 4.79081 19.5938 5.15548L11.3318 13.4183C11.1142 13.6358 10.8453 13.795 10.5499 13.8812L7.91633 14.6512C7.83746 14.6742 7.75384 14.6756 7.67425 14.6552C7.59466 14.6348 7.52201 14.5934 7.46391 14.5353C7.40581 14.4772 7.3644 14.4046 7.34401 14.325C7.32362 14.2454 7.32499 14.1618 7.348 14.0829L8.118 11.4493C8.20465 11.1542 8.36416 10.8856 8.58183 10.6683L16.8438 2.40548Z" stroke="#BEE532" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <button type="button" className='cursor-pointer'>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.51792 4.5189L17.4805 17.4824M20.1663 11.0007C20.1663 16.0633 16.0623 20.1673 10.9997 20.1673C5.93706 20.1673 1.83301 16.0633 1.83301 11.0007C1.83301 5.93804 5.93706 1.83398 10.9997 1.83398C16.0623 1.83398 20.1663 5.93804 20.1663 11.0007Z" stroke="#BEE532" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
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

export default Interviews