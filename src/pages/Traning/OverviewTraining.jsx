import React from 'react'

const OverviewTraining = () => {
    const recentActivity = [
    { name: "React Hooks Deep Dive", date: 'Feb 01, 2024"' , hour: '5 hours ago' },
    { name: "Performance Optimization", date: 'Feb 08, 2024' , hour: '2 hours ago' },
    { name: "Testing Strategies", date: 'Feb 15, 2024' , hour: '1 hours ago' },
    { name: "Testing Strategies", date: 'Feb 15, 2024' , hour: '1 hours ago' },
    ];

    const recentProgram = [
    { name: "Advanced React Development", Technical: 'Technical' , difficulty: 'Advanced' , members: '24' , rating: '4.7' },
    { name: "Advanced React Development", Technical: 'Technical' , difficulty: 'Advanced' , members: '24' , rating: '4.7' },
    { name: "Advanced React Development", Technical: 'Technical' , difficulty: 'Advanced' , members: '24' , rating: '4.7' },
    { name: "Advanced React Development", Technical: 'Technical' , difficulty: 'Advanced' , members: '24' , rating: '4.7' },
    ];



  return (
    <div className='font-semibold mt-[3.1875rem]'>
        <div className='flex gap-[5.0625rem]'>
            <div className='w-[43.625rem] '>
                <div>
                    {/* firstContainer */}
                    <div className='flex flex-col gap-[2.375rem]'>
                        <div>
                            <h1 className='textFormColor '>Upcoming Sessions</h1>
                            <h4 className='textLimegray'>Training sessions scheduled for this week</h4>
                        </div>
                        <div>
                            <ul className='space-y-[1.3125rem] '>
                                {recentActivity.map((act,id) =>(
                                    <div key={id} className='pl-4 customBorder1'>
                                        <li className=' list-disc marker:text-lemongreen'>
                                            <div className='between  pb-[1.5rem]'>
                                                <div className='flex  flex-col gap-[0.5rem]'>
                                                    <h1 className='text-limeLight font-semibold'>{act.name}</h1>
                                                    <h4 className='textLimegray'>{act.date}</h4>
                                                </div>
                                                <div className='items-start '>
                                                    <span className='text-formColor text-[14px] rounded-[2.0625rem] backgroundColor px-[1.125rem] py-[0.5rem]'>{act.hour}</span>
                                                </div>
                                            </div>                            
                                        </li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[43.625rem]'>
                <div>
                    {/* firstContainer */}
                    <div className='flex flex-col gap-[2.375rem]'>
                        <div>
                            <h1 className='textFormColor '>Popular Programs</h1>
                            <h4 className='textLimegray'>Most enrolled training programs</h4>
                        </div>
                        <div>
                            <ul className='space-y-[1.3125rem] '>
                                {recentProgram.map((act,id) =>(
                                    <div key={id} className='pl-4 customBorder1'>
                                        <li className=' list-disc marker:text-lemongreen'>
                                            <div className='between  pb-[1.5rem]'>
                                                <div className='flex  flex-col gap-[0.5rem]'>
                                                    <h1 className='text-limeLight font-semibold'>{act.name}</h1>
                                                    <div className='flex gap-1'>
                                                        <h4 className='textLimegray'>{act.Technical}</h4>
                                                        <h4 className="textLimegray before:content-['•'] before:mr-1">{act.difficulty}</h4>
                                                    </div>
                                                </div>
                                                <div className='items-start '>
                                                    <div className='flex gap-[0.5625rem]'>
                                                        <h4 className='text-formColor'>{act.members}</h4>
                                                        <h4 className='text-formColor'>Enrolled</h4>
                                                    </div>
                                                    <div className='flex gap-[0.5625rem]'>
                                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.12384 1.81744C9.15853 1.74735 9.21212 1.68835 9.27857 1.6471C9.34502 1.60584 9.42167 1.58398 9.49988 1.58398C9.57809 1.58398 9.65474 1.60584 9.72119 1.6471C9.78763 1.68835 9.84123 1.74735 9.87592 1.81744L11.7047 5.52165C11.8251 5.76546 12.003 5.97639 12.2229 6.13634C12.4428 6.2963 12.6983 6.40049 12.9674 6.43998L17.0571 7.03848C17.1346 7.04971 17.2074 7.0824 17.2673 7.13285C17.3272 7.1833 17.3718 7.2495 17.396 7.32396C17.4202 7.39843 17.4231 7.47818 17.4043 7.5542C17.3856 7.63023 17.3459 7.69949 17.2899 7.75415L14.3322 10.6342C14.1372 10.8243 13.9912 11.0589 13.907 11.3179C13.8227 11.5769 13.8026 11.8525 13.8485 12.121L14.5468 16.1902C14.5604 16.2676 14.5521 16.3473 14.5226 16.4203C14.4931 16.4932 14.4438 16.5564 14.3801 16.6026C14.3165 16.6488 14.2412 16.6762 14.1627 16.6817C14.0842 16.6872 14.0058 16.6704 13.9364 16.6335L10.2805 14.7113C10.0396 14.5848 9.77156 14.5187 9.49948 14.5187C9.2274 14.5187 8.95939 14.5848 8.7185 14.7113L5.06338 16.6335C4.99397 16.6702 4.91565 16.6868 4.83732 16.6812C4.75899 16.6756 4.68379 16.6482 4.62028 16.602C4.55677 16.5558 4.5075 16.4927 4.47806 16.4199C4.44863 16.3471 4.44022 16.2675 4.45379 16.1902L5.15125 12.1218C5.19733 11.8532 5.17737 11.5774 5.0931 11.3183C5.00883 11.0591 4.86278 10.8244 4.66755 10.6342L1.70988 7.75494C1.65335 7.70034 1.61329 7.63096 1.59427 7.55471C1.57524 7.47845 1.57802 7.39839 1.60227 7.32363C1.62653 7.24888 1.6713 7.18244 1.73147 7.13189C1.79165 7.08133 1.86481 7.04869 1.94263 7.03769L6.03159 6.43998C6.30096 6.4008 6.55677 6.29674 6.77701 6.13677C6.99725 5.97679 7.17531 5.7657 7.29588 5.52165L9.12384 1.81744Z" stroke="#BEE532" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </svg>
                                                        <span className='text-limegray'>{act.rating}</span>
                                                    </div>
                                                </div>
                                            </div>                            
                                        </li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OverviewTraining