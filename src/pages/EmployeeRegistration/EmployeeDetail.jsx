import CopyButton from "../../Components/CopyButton";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
const EmployeeDetail = () =>{
    const navigate = useNavigate();

return(
    <div className=" flex main-board">
       <div className="w-[19.125rem] h-[49.375rem] rouneded-[0.625rem] border space-y-[1.25rem] mb-23">
        <div className="flex flex-col items-center w-[19.125rem] h-[24.625rem]  rounded-[1.3125rem] bg-[#1D2015]  ">
               <div className="">
             <img src="/public/image/profile.pic.png" alt="" className="w-[276px] h-[276px] mt-[13px] " />   
           <div className="flex items-center gap-[0.8125rem] mt-[2.125rem] ">
            <h1 className="text-white text-[1rem] font-semibold  ">Bereket Daniel</h1>
            <div className=" flex items-center gap-[0.5625rem] ">
                    <div className="bg-lemongreen w-[0.1875rem] h-[0.1875rem] rounded-[50%]"></div>
                <p className="text-accountColor text-[1rem] font-medium ">2y</p>
            </div>
           </div>
           <div className="flex gap-[3.25rem]  ">
            <h1 className="text-limegray text-[1rem] font-medium">CXO - Senior Designer</h1>
            <h1 className="text-limegray text-[1rem] font-medium">EMP001</h1>
           </div>
            </div>  
           
           
        </div>
        <div className=" w-[19.125rem] h-[4.375rem] flex items-center gap-[0.8125rem]  bg-[#1D2015] rounded-[0.9375rem]">
            <div className="bg-white w-[0.375rem] h-[0.375rem] rounded-[50%] ml-[1.4375rem]"></div>
            <p className="text-limegray text-[1rem] font-medium">Engineering Department</p>
        </div>
        <div className="w-[19.125rem] h-[17.875rem]   space-y-[2.125rem] pt-[1.5rem] pl-[1.4375rem] bg-[#1D2015] rounded-[0.9375rem]">
          <div className="space-y-[0.75rem]">
            <h1 className="text-limegray text-[1rem] font-medium">Email</h1>
            <p className="text-white text-[1rem] font-medium">bereketdaniel25gmail.com </p>
          </div>
          <div className="space-y-[0.75rem]">
            <h1 className="text-limegray text-[1rem] font-medium">Phone</h1>
            <div className="flex gap-[8rem]">
            <p className="text-white text-[1rem] font-medium">+251966442525 </p>
            <CopyButton textToCopy="+251966442525" />
            </div>
          </div>
          <div className=" space-y-[0.75rem]">
            <h1 className="text-limegray text-[1rem] font-medium">Address</h1>
            <p className="text-white text-[1rem] font-medium">Addis Abeba, Bole </p>
          </div>
        </div>
    </div>
    <div className="ml-[4.3125rem] mb-100 border">
        <div className="flex justify-between ">
         <div className="flex gap-[0.9375rem] ">  
            <svg  onClick={()=>navigate('/employees')} className="cursor-pointer"  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="#BEE532" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> 
        <h1 className="textWhite"> Employees Details</h1>
        </div>
        <div className="flex item-center gap-[0.625rem]" >
        <button className="flex" type="button">
            <svg width="20" className="cursor-pointer" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.7085 18.333C2.7085 17.9878 2.98832 17.708 3.3335 17.708H16.6668C17.012 17.708 17.2918 17.9878 17.2918 18.333C17.2918 18.6782 17.012 18.958 16.6668 18.958H3.3335C2.98832 18.958 2.7085 18.6782 2.7085 18.333Z" fill="#BEE532"/>
<path d="M9.60025 12.441L14.5308 7.51034C13.8597 7.23105 13.0649 6.77227 12.3132 6.02059C11.5615 5.26878 11.1027 4.47385 10.8234 3.80273L5.89271 8.73339C5.50797 9.11813 5.31555 9.31055 5.1501 9.52272C4.95492 9.77288 4.78759 10.0436 4.65106 10.3301C4.53532 10.573 4.44928 10.8311 4.27721 11.3474L3.3698 14.0696C3.28511 14.3236 3.35123 14.6037 3.54058 14.7931C3.72994 14.9824 4.01001 15.0486 4.26406 14.9638L6.98628 14.0565C7.50251 13.8844 7.76063 13.7983 8.00348 13.6826C8.28996 13.5461 8.56075 13.3787 8.81091 13.1836C9.02308 13.0181 9.2155 12.8257 9.60025 12.441Z" fill="#BEE532"/>
<path d="M15.899 6.14236C16.9228 5.11856 16.9228 3.45865 15.899 2.43484C14.8752 1.41104 13.2153 1.41104 12.1915 2.43484L11.6001 3.0262C11.6082 3.05066 11.6166 3.07545 11.6253 3.10056C11.8421 3.72533 12.251 4.54433 13.0204 5.31368C13.7898 6.08302 14.6088 6.49198 15.2335 6.70873C15.2585 6.71741 15.2832 6.72578 15.3075 6.73383L15.899 6.14236Z" fill="#BEE532"/>
</svg>
        </button>
        <p className=" text-lemongreen text-[1rem] font-semibold">Edit</p>
        </div>
        </div>
        
        <div className="mt-[2.75rem]">
            <div className="flex items-center gap-[4.9375rem] w-[69.4375rem] h-[7.625rem] bg-[#BEE53200] opacity-93 border border-[#5D61506B] pl-[2.75rem] rounded-[0.9375rem]   ">
                <div className="w-[11.8125rem]">
                    <h1 className="text-limegray text-[1rem] font-medium">Nationality</h1>
            <p className="text-white text-[1rem] font-medium">Ethiopia </p>
                </div>
               <div className="w-[11.8125rem]">
                  <h1 className="text-limegray text-[1rem] font-medium">Date Of Birth</h1>
            <p className="text-white text-[1rem] font-medium">15/08/2002 </p>
                </div> 
                <div className="w-[11.8125rem]">
                    <h1 className="text-limegray text-[1rem] font-medium">Gender</h1>
            <p className="text-white text-[1rem] font-medium">Male </p>
                </div>
                <div className="w-[6.25rem]">
                    <h1 className="text-limegray text-[1rem] font-medium">Marital Status</h1>
            <p className="text-white text-[1rem] font-medium">Single </p>
                </div>
            </div>
                <div className="flex items-center gap-[4.9375rem] w-[69.4375rem] h-[7.625rem] bg-[#BEE53200] opacity-93 border border-[#5D61506B] pl-[2.75rem] rounded-[0.9375rem]  mt-[2.3125rem]  ">
                <div className="w-[11.8125rem]">
                    <h1 className="text-limegray text-[1rem] font-medium">Emergency Contact Name</h1>
            <p className="text-white text-[1rem] font-medium">Daniel Gizachew </p>
                </div>
            <div className="w-[11.8125rem]">
                <h1 className="text-limegray text-[1rem] font-medium">Emergency Contact</h1>
            <p className="text-white text-[1rem] font-medium">+251987654321</p>
                </div> 
                <div className="w-[11.8125rem]">
                    <h1 className="text-limegray text-[1rem] font-medium">Education Status</h1>
            <p className="text-white text-[1rem] font-medium">Degree </p>
                </div>
            </div>
        <div>
            <div className="flex items-center gap-[0.8125rem] mt-[5.0625rem] ">
        <div className="bg-lemongreen w-[0.375rem] h-[0.375rem] rounded-[50%]"></div>
    <h1 className="text-limegray text-[1rem] font-semibold">Employment Details</h1>
        </div>
        <div className="flex items-center gap-[4.9375rem] w-[69.4375rem] h-[7.625rem] bg-[#BEE53200] opacity-93 border  pl-[2.75rem]  border-[#5D61506B] rounded-[0.9375rem] mt-[1.625rem]  ">
                <div className="w-[11.8125rem]">
                    <h1 className="text-limegray text-[1rem] font-medium">Employment Type</h1>
            <p className="text-white text-[1rem] font-medium">Full Time </p>
                </div>
                <div className="w-[11.8125rem]">
                <h1 className="text-limegray text-[1rem] font-medium">Department Head</h1>
            <p className="text-white text-[1rem] font-medium">Roba Kasahun  </p>
                </div> 
                <div className="w-[11.8125rem]">
                    <h1 className="text-limegray text-[1rem] font-medium">Joining Date</h1>
            <p className="text-white text-[1rem] font-medium">15/08/2002 </p>
                </div>
                <div className="w-[11.8125rem]">
                    <h1 className="text-limegray text-[1rem] font-medium">Sub Department</h1>
            <p className="text-white text-[1rem] font-medium">Engineering division 1 </p>
                </div>
            </div>

            <div className="flex items-center gap-[0.8125rem] mt-[5.0625rem] ">
        <div className="bg-lemongreen w-[0.375rem] h-[0.375rem] rounded-[50%]"></div>
    <h1 className="text-limegray text-[1rem] font-bold">Compensation & Legal</h1>
        </div>
        <div className="flex items-center gap-[4.9375rem] w-[69.4375rem] h-[7.625rem] bg-[#BEE53200] opacity-93 border border-[#5D61506B] pl-[2.75rem] rounded-[0.9375rem] mt-[1.625rem]  ">
                <div className="w-[11.8125rem]">
                    <h1 className="text-limegray text-[1rem] font-medium">Salary</h1>
            <p className="text-white text-[1rem] font-medium">25,000.00 </p>
                </div>
                <div className="w-[11.8125rem]">
                <h1 className="text-limegray text-[1rem] font-medium">Currency</h1>
            <p className="text-white text-[1rem] font-medium">USD</p>
                </div> 
                <div className="w-[11.8125rem]">
                    <h1 className="text-limegray text-[1rem] font-medium">Payment Method</h1>
            <p className="text-white text-[1rem] font-medium">Bank Transfer</p>
                </div>
                <div className="w-[11.8125rem]">
                    <h1 className="text-limegray text-[1rem] font-medium">Bank Account Number</h1>
            <p className="text-white text-[1rem] font-medium">1000782634624 </p>
                </div>
            </div>
            <div className="flex items-center gap-[4.9375rem] w-[69.4375rem] h-[7.625rem] bg-[#BEE53200] opacity-93 border border-[#5D61506B] pl-[2.75rem] rounded-[0.9375rem] mt-[1.625rem]">
                <div className="w-[11.8125rem]">
                    <h1 className="text-limegray text-[1rem] font-medium">Tax Identification Number</h1>
            <p className="text-white text-[1rem] font-medium">E09-101-F0D</p>
                </div>
                <div className="w-[11.8125rem]">
                <h1 className="text-limegray text-[1rem] font-medium">Benefits Enrollment</h1>
            <p className="text-white text-[1rem] font-medium">Health Insurance</p>
                </div> 
                <div className="w-[11.8125rem]">
                    <h1 className="text-limegray text-[1rem] font-medium">Passport Number</h1>
            <p className="text-white text-[1rem] font-medium">Bank Transfer</p>
                </div>
                <div className="w-[11.8125rem] text-lemongreen text-[1rem] font-semibold">
                    <h1 >Resume - View</h1>
            <p >Contract File - View</p>
                </div>
            </div>

            <div className="flex items-center gap-[0.8125rem] mt-[5.0625rem] ">
        <div className="bg-lemongreen w-[0.375rem] h-[0.375rem] rounded-[50%]"></div>
    <h1 className="text-limegray text-[1rem] font-bold">System Access & Work Details</h1>
        </div>
        <div className="flex items-center gap-[4.9375rem] w-[69.4375rem] h-[7.625rem] bg-[#BEE53200] opacity-93 border border-[#5D61506B] pl-[2.75rem] rounded-[0.9375rem] mt-[1.625rem]  ">
                <div className="w-[11.8125rem]">
                    <h1 className="text-limegray text-[1rem] font-medium">Username</h1>
            <p className="text-white text-[1rem] font-medium">BereketDan</p>
                </div>
                <div className="w-[11.8125rem]">
                <h1 className="text-limegray text-[1rem] font-medium">Password</h1>
            <p className="text-white text-[1rem] font-medium">admin123 </p>
                </div> 
                <div className="w-[11.8125rem]">
                    <h1 className="text-limegray text-[1rem] font-medium">Role</h1>
            <p className="text-white text-[1rem] font-medium">Employee </p>
                </div>
                <div className="w-[11.8125rem]">
                    <h1 className="text-limegray text-[1rem] font-medium">Work Location</h1>
            <p className="text-white text-[1rem] font-medium">Office</p>
                </div>
            </div>
        <div className="flex items-center gap-[4.9375rem] w-[69.4375rem] h-[7.625rem] bg-[#BEE53200] opacity-93 border border-[#5D61506B] pl-[2.75rem] rounded-[0.9375rem] mt-[1.625rem]  ">
                <div className="w-[11.8125rem]">
                    <h1 className="text-limegray text-[1rem] font-medium">Shift Details</h1>
            <p className="text-white text-[1rem] font-medium">Morning Shift </p>
                </div>
                <div className="w-[11.8125rem] ">
            <h1 className="text-lemongreen text-[1rem] font-bold">Certification - View </h1>
                </div> 
                
            </div>
            </div>
    
        </div>
    </div>
    </div>
    
);
}
export default EmployeeDetail;