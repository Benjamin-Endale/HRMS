import CopyButton from "../../Components/CopyButton";
import { useNavigate } from "react-router-dom";
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
    <div className="ml-[4.3125rem] border">
        <div className="flex gap-[0.9375rem] ">
           <svg  onClick={()=>navigate('/employees')} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="#BEE532" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              <h1 className="textWhite"> Employees Details</h1>
        </div>
        <div className="mt-[2.75rem]">
            <div className="flex gap-[4.9375rem] w-[69.4375rem] h-[7.625rem] bg-[#BEE53200] opacity-93 border border-[#5D61506B] p-[2.75rem] rounded-[0.9375rem]   ">
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
             <div className="flex gap-[4.9375rem]  w-[69.4375rem] h-[7.625rem] bg-[#BEE53200] opacity-93 border border-[#5D61506B] p-[2.75rem] rounded-[0.9375rem]  mt-[2.3125rem]">
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
        <div className="flex gap-[4.9375rem] w-[69.4375rem] h-[7.625rem] bg-[#BEE53200] opacity-93 border border-[#5D61506B] p-[2.75rem] rounded-[0.9375rem] mt-[1.625rem]  ">
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
        <div className="flex gap-[4.9375rem] w-[69.4375rem] h-[7.625rem] bg-[#BEE53200] opacity-93 border border-[#5D61506B] p-[2.75rem] rounded-[0.9375rem] mt-[1.625rem]  ">
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
            <div className="flex gap-[4.9375rem] w-[69.4375rem] h-[7.625rem] bg-[#BEE53200] opacity-93 border border-[#5D61506B] p-[2.75rem] rounded-[0.9375rem] mt-[1.625rem]  ">
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
        <div className="flex gap-[4.9375rem] w-[69.4375rem] h-[7.625rem] bg-[#BEE53200] opacity-93 border border-[#5D61506B] p-[2.75rem] rounded-[0.9375rem] mt-[1.625rem]  ">
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
            <div className="flex gap-[4.9375rem] w-[69.4375rem] h-[7.625rem] bg-[#BEE53200] opacity-93 border border-[#5D61506B] p-[2.75rem] rounded-[0.9375rem] mt-[1.625rem]  ">
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