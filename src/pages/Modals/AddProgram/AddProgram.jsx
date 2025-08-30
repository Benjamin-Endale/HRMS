import React , {useState} from 'react'
import { Dropdown } from '../../../Components/DropDown';

export default function AddProgram({ onClose }) {
    const [selectedLevel, setSelectedLevel] = useState(''); 
    const [selectedProgram, setSelectedProgram] = useState('');
    const [selectedCategory,setSelectedCategory] = useState('');    






  return ( 
    <div className='px-[3rem] py-[2.875rem]  space-y-[3.125rem] font-semibold w-full  ' >
        <div className='flex justify-between'>
            <div>
                <h1 className='textFormColor'>Create Training Program</h1>
                <h4 className='text-limegray'>Set up a new training program or course</h4>
            </div>
            <button onClick={onClose} className='rounded-full center-center cursor-pointer'>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.5 13C25.5 19.9035 19.9035 25.5 13 25.5C6.09644 25.5 0.5 19.9035 0.5 13C0.5 6.09644 6.09644 0.5 13 0.5C19.9035 0.5 25.5 6.09644 25.5 13ZM9.21204 9.21206C9.57815 8.84595 10.1717 8.84595 10.5379 9.21206L13 11.6741L15.462 9.21209C15.8281 8.84597 16.4218 8.84597 16.7879 9.21209C17.154 9.5782 17.154 10.1718 16.7879 10.5379L14.3258 13L16.7879 15.462C17.154 15.8281 17.154 16.4218 16.7879 16.7879C16.4218 17.154 15.8281 17.154 15.462 16.7879L13 14.3259L10.5379 16.7879C10.1718 17.154 9.57818 17.154 9.21206 16.7879C8.84595 16.4218 8.84595 15.8281 9.21206 15.4621L11.6741 13L9.21204 10.5379C8.84591 10.1718 8.84591 9.57818 9.21204 9.21206Z" fill="#BEE532"/>
                </svg>
            </button>
        </div>
        <form action="" className='flex flex-col gap-[2.4375rem]'>
            <div className='space-y-[2.0625rem]'>
                <div className='flex gap-[1.125rem]'>
                    <div className=' w-[15.5625rem] flex flex-col gap-[1.75rem]'>
                        {/* Program Title   */}
                        <div>
                            <Dropdown
                            label="Program Title  "
                            options={['Engineering', 'Marketing', 'Finance']}
                            selected={selectedProgram}
                            onSelect={setSelectedProgram}
                            placeholder="Select employee"
                            />
                        </div>
                        {/* Level */}
                        <div>
                            <Dropdown
                            label="Level"
                            options={['Engineering', 'Marketing', 'Finance']}
                            selected={selectedLevel}
                            onSelect={setSelectedLevel}
                            placeholder="Select Level "
                            />
                        </div>

                        {/* Instructor  */}
                        <div className='flex flex-col w-full gap-[1rem]'>
                            <label htmlFor="" className='textFormColor1'>Instructor </label>
                            <input type="number" placeholder='Instructor Name' className='inputMod pr-[1.5625rem] ' />
                        </div>

                        {/* Date  */}
                        <div className='flex flex-col w-full gap-[1rem]'>
                            <label htmlFor="" className='textFormColor1'>Start Date</label>
                            <input type="date" placeholder='' className='inputMod pr-[1.5625rem] ' />
                        </div>
                    </div>
                    <div className='w-[15.5625rem] flex flex-col gap-[1.75rem]'>
                        <div>
                            <Dropdown
                            label="Category "
                            options={['Engineering', 'Marketing', 'Finance']}
                            selected={selectedCategory}
                            onSelect={setSelectedCategory}
                            placeholder="Select category"
                            />
                        </div>
                        {/* Duration  */}
                        <div className='flex flex-col w-full gap-[1rem]'>
                            <label htmlFor="" className='textFormColor1'>Duration </label>
                            <input type="text" placeholder='e.x 5 Hours' className='inputMod pr-[1.5625rem] ' />
                        </div>

                        {/* Enrollment  */}
                        <div className='flex flex-col w-full gap-[1rem]'>
                            <label htmlFor="" className='textFormColor1'>Max Enrollment</label>
                            <input type="number" placeholder='30' className='inputMod pr-[1.5625rem] ' />
                        </div>
                
                        {/* Date  */}
                        <div className='flex flex-col w-full gap-[1rem]'>
                            <label htmlFor="" className='textFormColor1'>End Date </label>
                            <input type="date" placeholder='' className='inputMod pr-[1.5625rem] ' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-[1rem]'>
                    <label htmlFor="" className='text-formColor'>Description </label>
                    <textarea name="" id=""  placeholder='Detailed description of the Program and  expected  outcomes..'  className='text-formColor bg-inputBack rounded-[10px] placeholder-input pt-[0.59375rem] pl-[1.1875rem] resize-none  h-[5.5rem]'></textarea>
                </div>
            </div>
          <div className='w-full h-[3.4375rem] mt-[0.5rem]'>
              <button type="submit" onClick={()=>navigate('/')} className='w-full h-full bg-lemongreen rounded-[10px] cursor-pointer'>Create Program</button>
          </div>
        </form>
    </div>
  )
}
