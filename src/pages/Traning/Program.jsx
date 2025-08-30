import React , {useState} from 'react'
import { ProgressDashTraining } from '../../Components/ProgressDashTraining'
import ModalContainerProgram from '../Modals/AddProgram/ModalContainerProgram';
import ModalContainerMaterial from '../Modals/AddProgram/ModalContainerMaterial';
import AddProgram from '../Modals/AddProgram/AddProgram';
import AddProgramMaterial from '../Modals/AddProgram/AddProgramMaterial';

const Program = () => {
    const [isOpen,setisOpen] = useState(false)
    const [isOpen2,setisOpen2] = useState(false)
    const Tranining = [
    { Progress:'Enrollment',Header: "Advanced React Development", parag: 'Comprehensive course covering advanced React patterns, hooks, and performance optimization', name:'John Smith', time: '20', process: 'Technical', attended: '30', max:'30'},
    ];
  return (
    <div>
        <div className='space-y-[2.25rem] '>
            <div className='flex w-full flex-col gap-[3.625rem]'>
                <div className='space-y-[2.25rem]'>
                    {/* header */}
                    <div className='between'>
                        <div className='flex flex-col'>
                            <h1 className='textFormColor'>Training Programs</h1>
                            <h4 className='textLimegray'>Manage training courses and learning paths</h4>
                        </div>
                        <div>
                            <button type="button" className='cursor-pointer' onClick={()=>setisOpen(true)}>
                                <div className='center-center w-[12.125rem] h-[3.125rem] rounded-[0.625rem] gap-[0.625rem] bg-lemongreen'>
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 20C16.0228 20 20.5 15.5228 20.5 10C20.5 4.47715 16.0228 0 10.5 0C4.97715 0 0.5 4.47715 0.5 10C0.5 15.5228 4.97715 20 10.5 20ZM11.25 7C11.25 6.58579 10.9142 6.25 10.5 6.25C10.0858 6.25 9.75 6.58579 9.75 7V9.25H7.5C7.08579 9.25 6.75 9.5858 6.75 10C6.75 10.4142 7.08579 10.75 7.5 10.75H9.75V13C9.75 13.4142 10.0858 13.75 10.5 13.75C10.9142 13.75 11.25 13.4142 11.25 13V10.75H13.5C13.9142 10.75 14.25 10.4142 14.25 10C14.25 9.5858 13.9142 9.25 13.5 9.25H11.25V7Z" fill="#0D0F11"/>
                                    </svg>
                                    <span className='text-black font-semibold'>Create Program</span>
                                </div>
                            </button>
                            {/* Modal */}
                            <ModalContainerProgram  open={isOpen}>
                                <AddProgram onClose={() => setisOpen(false)} />
                            </ModalContainerProgram>
                        </div>
                    </div>
                    {/* SearchArea */}
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
                            <span className='text-white'>Category </span>
                        </div>
                            <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 1L8 7L1 1" stroke="#BEE532" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            
                <div className='h-[25rem] space-y-12 pb-12 overflow-y-auto scrollBarDash'>
                    {Tranining.map((per, idx) => (
                        <React.Fragment key={idx}>
                            <div className='flex flex-col gap-[2.25rem] '>
                                {/* MaincontainerHeader */}
                                <div className='flex w-full justify-between '>
                                    {/* Container */}
                                    <div className='space-y-[0.8125rem] '>
                                        {/* Header */}
                                        <div className='w-full flex gap-[0.875rem] items-center '>               
                                            <h1 className='textFormColor1'>{per.Header}</h1>
                                            <div className='flex items-center gap-[0.5rem]'>
                                                <span className='bg-[rgba(190,229,50,0.05)] text-sm px-[20px] py-[7px] rounded-full text-Error'>Advance</span>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-[1.6875rem]'>
                                            <h4 className='textLimegray'> {per.parag}</h4>
                                            <div className='flex gap-[3.25rem] '>
                                                <div className='flex items-center gap-[0.75rem]'>
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6668 19.25V17.4167C14.6668 16.4442 14.2805 15.5116 13.5929 14.8239C12.9053 14.1363 11.9726 13.75 11.0002 13.75H5.50016C4.5277 13.75 3.59507 14.1363 2.90744 14.8239C2.2198 15.5116 1.8335 16.4442 1.8335 17.4167V19.25M14.6668 2.86733C15.4531 3.07117 16.1494 3.53033 16.6465 4.17272C17.1436 4.81512 17.4133 5.6044 17.4133 6.41667C17.4133 7.22894 17.1436 8.01821 16.6465 8.66061C16.1494 9.30301 15.4531 9.76216 14.6668 9.966M20.1668 19.25V17.4167C20.1662 16.6042 19.8958 15.815 19.3981 15.173C18.9003 14.5309 18.2034 14.0723 17.4168 13.8692M11.9168 6.41667C11.9168 8.44171 10.2752 10.0833 8.25016 10.0833C6.22512 10.0833 4.5835 8.44171 4.5835 6.41667C4.5835 4.39162 6.22512 2.75 8.25016 2.75C10.2752 2.75 11.9168 4.39162 11.9168 6.41667Z" stroke="#899072" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                    <span className='textLimegray'>Instructor: {per.name}</span>
                                                </div>
                                                <div className='flex items-center gap-[0.75rem]'>
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.1665 1.83398H12.8332M10.9998 12.834L13.7498 10.084M18.3332 12.834C18.3332 16.8841 15.0499 20.1673 10.9998 20.1673C6.94975 20.1673 3.6665 16.8841 3.6665 12.834C3.6665 8.7839 6.94975 5.50065 10.9998 5.50065C15.0499 5.50065 18.3332 8.7839 18.3332 12.834Z" stroke="#899072" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                    <span className='textLimegray'>{per.time} Hour</span>
                                                </div>
                                                <div className='flex items-center gap-[0.75rem]'>
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.5 18.3327V9.16602M11 18.3327V3.66602M5.5 18.3327V12.8327" stroke="#899072" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                    <span className='textLimegray'>{per.process}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ActionBtn */}
                                    <div className='flex items-start gap-[2.5625rem] '>
                                        <div>
                                            <button type="button" onClick={()=>setisOpen2(true)} className='cursor-pointer'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12" stroke="#BEE532" stroke-width="1.5" stroke-linecap="round"/>
                                                <path d="M12 14V4M12 4L15 7M12 4L9 7" stroke="#BEE532" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </button>
                                            {/* Modal */}
                                            <ModalContainerMaterial  open={isOpen2}>
                                                <AddProgramMaterial onClose={() => setisOpen2(false)} />
                                            </ModalContainerMaterial>
                                        </div>
                                        <button type="button" className='cursor-pointer'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 22C3.25 21.5858 3.58579 21.25 4 21.25H20C20.4142 21.25 20.75 21.5858 20.75 22C20.75 22.4142 20.4142 22.75 20 22.75H4C3.58579 22.75 3.25 22.4142 3.25 22Z" fill="#BEE532"/>
                                            <path d="M11.5201 14.9284L17.4368 9.01163C16.6315 8.67648 15.6777 8.12594 14.7757 7.22393C13.8736 6.32176 13.323 5.36784 12.9879 4.5625L7.07106 10.4793C6.60937 10.941 6.37846 11.1719 6.17992 11.4265C5.94571 11.7267 5.74491 12.0516 5.58107 12.3954C5.44219 12.6868 5.33894 12.9966 5.13245 13.6161L4.04356 16.8827C3.94194 17.1876 4.02128 17.5237 4.2485 17.7509C4.47573 17.9781 4.81182 18.0575 5.11667 17.9558L8.38334 16.867C9.00281 16.6605 9.31256 16.5572 9.60398 16.4183C9.94775 16.2545 10.2727 16.0537 10.5729 15.8195C10.8275 15.6209 11.0584 15.3901 11.5201 14.9284Z" fill="#BEE532"/>
                                            <path d="M19.0786 7.37044C20.3071 6.14188 20.3071 4.14999 19.0786 2.92142C17.85 1.69286 15.8581 1.69286 14.6296 2.92142L13.9199 3.63105C13.9296 3.6604 13.9397 3.69015 13.9502 3.72028C14.2103 4.47 14.701 5.45281 15.6243 6.37602C16.5475 7.29923 17.5303 7.78999 18.28 8.05009C18.31 8.0605 18.3396 8.07054 18.3688 8.08021L19.0786 7.37044Z" fill="#BEE532"/>
                                            </svg>
                                        </button>
                                        <button type="button" className='cursor-pointer'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 6.38597C3 5.90152 3.34538 5.50879 3.77143 5.50879L6.43567 5.50832C6.96502 5.49306 7.43202 5.11033 7.61214 4.54412C7.61688 4.52923 7.62232 4.51087 7.64185 4.44424L7.75665 4.05256C7.8269 3.81241 7.8881 3.60318 7.97375 3.41617C8.31209 2.67736 8.93808 2.16432 9.66147 2.03297C9.84457 1.99972 10.0385 1.99986 10.2611 2.00002H13.7391C13.9617 1.99986 14.1556 1.99972 14.3387 2.03297C15.0621 2.16432 15.6881 2.67736 16.0264 3.41617C16.1121 3.60318 16.1733 3.81241 16.2435 4.05256L16.3583 4.44424C16.3778 4.51087 16.3833 4.52923 16.388 4.54412C16.5682 5.11033 17.1278 5.49353 17.6571 5.50879H20.2286C20.6546 5.50879 21 5.90152 21 6.38597C21 6.87043 20.6546 7.26316 20.2286 7.26316H3.77143C3.34538 7.26316 3 6.87043 3 6.38597Z" fill="#BEE532"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5956 22.0006H12.4044C15.1871 22.0006 16.5785 22.0006 17.4831 21.1147C18.3878 20.2288 18.4803 18.7756 18.6654 15.8691L18.9321 11.6812C19.0326 10.1042 19.0828 9.31573 18.6289 8.81607C18.1751 8.31641 17.4087 8.31641 15.876 8.31641H8.12404C6.59127 8.31641 5.82488 8.31641 5.37105 8.81607C4.91722 9.31573 4.96744 10.1042 5.06788 11.6812L5.33459 15.8691C5.5197 18.7756 5.61225 20.2288 6.51689 21.1147C7.42153 22.0006 8.81289 22.0006 11.5956 22.0006ZM10.2463 12.1891C10.2051 11.7553 9.83753 11.4387 9.42537 11.4821C9.01321 11.5255 8.71251 11.9124 8.75372 12.3462L9.25372 17.6094C9.29494 18.0432 9.66247 18.3598 10.0746 18.3164C10.4868 18.273 10.7875 17.8861 10.7463 17.4523L10.2463 12.1891ZM14.5746 11.4821C14.9868 11.5255 15.2875 11.9124 15.2463 12.3462L14.7463 17.6094C14.7051 18.0432 14.3375 18.3598 13.9254 18.3164C13.5132 18.273 13.2125 17.8861 13.2537 17.4523L13.7537 12.1891C13.7949 11.7553 14.1625 11.4387 14.5746 11.4821Z" fill="#BEE532"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className='space-y-[1.1875rem]'>
                                    <div className='between-center'>
                                        <div className='flex space-x-[1.375rem]'>
                                            <span className='text-formColor text-[1rem] font-medium'>{per.Progress}</span>
                                        </div>
                                        <div>
                                            <ul className='text-white flex gap-[1.75rem]'>
                                                <li className='text-limeLight'>
                                                    {per.attended}/{per.max}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Progress bar */}
                                    <ProgressDashTraining attended={per.attended} max = {per.max} low={'bg-[#E3694A]'} high={'bg-[#BEE532]'} medium={'bg-[#F7AB1E]'}/>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}            
                </div>
        </div>
    </div>
  )
}

export default Program