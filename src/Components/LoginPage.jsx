import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
//import { number } from 'zod/v3';
const schema = z.object({
  username: z.string()
    .min(6, "Username must be at least 6 characters")
    .max(20, "Username must not exceed 20 characters")
    .regex(/^[a-zA-Z][a-zA-Z0-9._]*$/, "Username must start with a letter and only contain letters, numbers, underscores, or dots"),
  password:z.string()
  .min(8, "Password must be at least 8 characters")
   .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  "Password must be characters, include uppercase, lowercase, number, and special character"),
})
const result = schema.safeParse({
  username: "hello",
  password: "1234",
});
const LoginPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English')
  const languages = ['Amharic', 'Oromic', 'Afan oromo','English']
  const {register , handleSubmit,setError,
    formState:{errors, isSubmitting},
  }=useForm({
    resolver:zodResolver(schema),
  });
  const onSubmit = async (data) => {
    await new Promise((resolve,) => setTimeout (resolve,1000));
    console.log(data);
  };
  return (
    <main className='h-screen w-screen flex items-center justify-center font-semibold '>
      <div className="flex justify-between items-center">
        <div className=" w-[40.875rem] h-[42.4375rem] relative ">
          <section className="flex flex-col gap-[4.78125rem] relative">
            <div>
              <h1 className="text-white text-[2.5rem]">HRMS Login Page</h1>
              <h4 className="text-graysh text-[1rem]">Human Resource Management System</h4>
            </div>
            <div className="maindivider">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 10C11.2091 10 13 8.20914 13 6C13 3.79086 11.2091 2 9 2C6.79086 2 5 3.79086 5 6C5 8.20914 6.79086 10 9 10Z" stroke="#BEE532" stroke-width="1.5"/>
  <path d="M15 9C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3" stroke="#BEE532" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M9 21C12.866 21 16 19.2091 16 17C16 14.7909 12.866 13 9 13C5.13401 13 2 14.7909 2 17C2 19.2091 5.13401 21 9 21Z" stroke="#BEE532" stroke-width="1.5"/>
  <path d="M18 14C19.7542 14.3847 21 15.3589 21 16.5C21 17.5293 19.9863 18.4229 18.5 18.8704" stroke="#BEE532" stroke-width="1.5" stroke-linecap="round"/>
              </svg>

            <div className="halfdivider">
              <h1 className="headertxt self-start">Multi-Tenant Architecture</h1>
              <h4 className="text-graysh">Isolated data, custom branding, and flexible multi- <br/>tenant support with schema or database separation.</h4>
            </div>
            </div>
            <div className="maindivider">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z" stroke="#BEE532" stroke-width="1.5"/>
  <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#BEE532" stroke-width="1.5"/>
              </svg>
            <div className="halfdivider">
              <h1 className="headertxt self-start">End-to-End Employee Lifecycle Management</h1>
              <h4 className="text-graysh">End-to-end HR: onboarding to offboarding, with custom <br/> workflows and document management.</h4>
            </div>
            </div>
            <div className="maindivider">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.67981 13L3.15157 13.5324C3.44398 13.8225 3.91565 13.8225 4.20805 13.5324L3.67981 13ZM5.88787 11.8657C6.18191 11.574 6.18377 11.0991 5.89203 10.8051C5.60029 10.511 5.12542 10.5092 4.83138 10.8009L5.88787 11.8657ZM2.52824 10.8009C2.2342 10.5092 1.75933 10.511 1.46759 10.8051C1.17585 11.0991 1.17772 11.574 1.47176 11.8657L2.52824 10.8009ZM18.6156 7.39279C18.8325 7.74565 19.2944 7.85585 19.6473 7.63892C20.0001 7.42199 20.1103 6.96007 19.8934 6.60721L18.6156 7.39279ZM12.0789 2.25C7.03155 2.25 2.92981 6.3112 2.92981 11.3333H4.42981C4.42981 7.15072 7.84884 3.75 12.0789 3.75V2.25ZM2.92981 11.3333V13H4.42981V11.3333H2.92981ZM4.20805 13.5324L5.88787 11.8657L4.83138 10.8009L3.15157 12.4676L4.20805 13.5324ZM4.20805 12.4676L2.52824 10.8009L1.47176 11.8657L3.15157 13.5324L4.20805 12.4676ZM19.8934 6.60721C18.287 3.99427 15.3873 2.25 12.0789 2.25V3.75C14.8484 3.75 17.2727 5.20845 18.6156 7.39279L19.8934 6.60721Z" fill="#BEE532"/>
  <path d="M20.3139 11L20.8411 10.4666C20.549 10.1778 20.0788 10.1778 19.7867 10.4666L20.3139 11ZM18.1004 12.1333C17.8058 12.4244 17.8031 12.8993 18.0942 13.1939C18.3854 13.4885 18.8603 13.4913 19.1549 13.2001L18.1004 12.1333ZM21.4729 13.2001C21.7675 13.4913 22.2424 13.4885 22.5335 13.1939C22.8247 12.8993 22.822 12.4244 22.5274 12.1332L21.4729 13.2001ZM5.31794 16.6061C5.1004 16.2536 4.6383 16.1442 4.28581 16.3618C3.93331 16.5793 3.82391 17.0414 4.04144 17.3939L5.31794 16.6061ZM11.8827 21.75C16.9451 21.75 21.0639 17.6915 21.0639 12.6667H19.5639C19.5639 16.8466 16.1332 20.25 11.8827 20.25V21.75ZM21.0639 12.6667V11H19.5639V12.6667H21.0639ZM19.7867 10.4666L18.1004 12.1333L19.1549 13.2001L20.8411 11.5334L19.7867 10.4666ZM19.7867 11.5334L21.4729 13.2001L22.5274 12.1332L20.8411 10.4666L19.7867 11.5334ZM4.04144 17.3939C5.65405 20.007 8.56403 21.75 11.8827 21.75V20.25C9.10023 20.25 6.66584 18.7903 5.31794 16.6061L4.04144 17.3939Z" fill="#BEE532"/>
              </svg>
            <div className="halfdivider">
              <h1 className="headertxt self-start">Advanced Automation</h1>
              <h4 className="text-graysh">Secure RBAC access, localized payroll/tax, and <br/>real-time audit logs.</h4>
            </div>
            </div>
            <div className="self-baseline">
              <ul className="marker:text-graysh list-disc list-inside text-graysh flex gap-[1.25rem]">
                <li className="list-none hover:text-lemongreen cursor-pointer">Term</li>
                <li className='hover:text-lemongreen cursor-pointer'>Privacy</li>
                <li className='hover:text-lemongreen cursor-pointer'>Docs</li>
                <li className='hover:text-lemongreen cursor-pointer'>Helps</li>
                <li className="flex gap-4">
                  <div>
                    <div className='flex space-x-[0.9375rem]'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 13.3132 21.7413 14.6136 21.2388 15.8268C20.7362 17.0401 19.9997 18.1425 19.0711 19.0711C18.1425 19.9997 17.0401 20.7362 15.8268 21.2388C14.6136 21.7413 13.3132 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C4.00035 18.1425 3.26375 17.0401 2.7612 15.8268C2.25866 14.6136 2 13.3132 2 12C2 10.6868 2.25866 9.38642 2.76121 8.17316C3.26375 6.95991 4.00035 5.85752 4.92893 4.92893C5.85752 4.00035 6.95991 3.26375 8.17317 2.7612C9.38642 2.25866 10.6868 2 12 2C13.3132 2 14.6136 2.25866 15.8268 2.76121C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12Z" stroke="#737767" stroke-width="1.5"/>
<path d="M16 12C16 13.3132 15.8965 14.6136 15.6955 15.8268C15.4945 17.0401 15.1999 18.1425 14.8284 19.0711C14.457 19.9997 14.016 20.7362 13.5307 21.2388C13.0454 21.7413 12.5253 22 12 22C11.4747 22 10.9546 21.7413 10.4693 21.2388C9.98396 20.7362 9.54301 19.9997 9.17157 19.0711C8.80014 18.1425 8.5055 17.0401 8.30448 15.8268C8.10346 14.6136 8 13.3132 8 12C8 10.6868 8.10346 9.38642 8.30448 8.17316C8.5055 6.95991 8.80014 5.85752 9.17157 4.92893C9.54301 4.00035 9.98396 3.26375 10.4693 2.7612C10.9546 2.25866 11.4747 2 12 2C12.5253 2 13.0454 2.25866 13.5307 2.76121C14.016 3.26375 14.457 4.00035 14.8284 4.92893C15.1999 5.85752 15.4945 6.95991 15.6955 8.17317C15.8965 9.38642 16 10.6868 16 12Z" stroke="#737767" stroke-width="1.5"/>
<path d="M2 12H22" stroke="#737767" stroke-width="1.5" stroke-linecap="round"/>
                      </svg>
                      <button type="button" onClick={() => setDropdownOpen(!dropdownOpen)}>{selectedLanguage}</button>
                      <svg onClick={() => setDropdownOpen(!dropdownOpen)}  className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 9L12 15L5 9" stroke="#737767" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                      <div className={`${dropdownOpen ? 'flex' : 'hidden'}   border-2  w-[8rem] absolute z-10 bottom-[2.8125rem]  items-center justify-center rounded-[8px] bg-[#0D0F11] border-[#1E1E1E] pt-[14px] pb-[14px] `}>
                        <ul className='flex flex-col gap-[1.1875rem]'>
                          {languages.map(lang => (
                          <li key={lang} className={`cursor-pointer w-full text-center ${selectedLanguage === lang ? 'text-lemongreen font-bold' : ''}`}
                          onClick={() => {
                              setSelectedLanguage(lang)
                              setDropdownOpen(false)
                            }}>
                            {lang}
                          </li>
                        ))}
                        </ul>
                      </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div className="border-[0.4px] border-graysh backdrop-blur-[0.3874999880790710625rem]   bg-[linear-gradient(109deg,rgba(27,31,14,0.05)_0%,rgba(136,136,136,0.01)_102.73%)] rounded-[29px]  w-[659px] h-[679px]">
            <section className="flex flex-col gap-[3.5625rem] mt-[74px] mb-[74px] ml-[79px] mr-[79px]">
              <div className="flex  flex-col gap-[0.75rem]">
                <h1 className="text-white text-2xl">Get Started</h1>
                <h4 className="text-graysh text-base">Welcome to HRMS - Signup with your account</h4>
              </div>





              {/* {form validation} */}
              <div>
                <form  className="flex flex-col gap-[4.75rem]" action="" onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col gap-[2.4375rem]">
                    <div className="flex flex-col gap-[1rem]">
                      <label className="text-white" htmlFor="username">Username</label>
                      <div className="relative flex flex-col justify-center w-[31.0625rem] h-[3.4375rem]">
                        <div className="absolute z-10 pl-[1.1875rem]">
                          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 10.5C14.2091 10.5 16 8.70914 16 6.5C16 4.29086 14.2091 2.5 12 2.5C9.79086 2.5 8 4.29086 8 6.5C8 8.70914 9.79086 10.5 12 10.5Z" stroke="#3F4236" stroke-width="1.5"/>
        <path d="M12 21.5C15.866 21.5 19 19.7091 19 17.5C19 15.2909 15.866 13.5 12 13.5C8.13401 13.5 5 15.2909 5 17.5C5 19.7091 8.13401 21.5 12 21.5Z" stroke="#3F4236" stroke-width="1.5"/>
                          </svg>
                        </div>
                        <input
                        {...register("username", )}
                        className="pl-[66px] h-full w-full  rounded-[5px] border-2 border-[#1D2015] text-white  focus:outline-none focus:border-lemongreen  focus:ring-lemongreen bg-[#1D2015]" name="username"  type="text" placeholder='ex. John Don'
                        />           
                      </div>
                        {errors.username && (
                          <div className='text-Error'>{errors.username.message}</div>
                        )}
                    </div>
    
                    <div className="flex flex-col gap-[1rem]">
                      <label className="text-white" htmlFor="password">Password</label>
                      <div className="relative flex items-center w-[31.0625rem] h-[3.4375rem]">
                        <div className="absolute z-10 pl-[1.1875rem]">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 16.5C2 13.6716 2 12.2574 2.87868 11.3787C3.75736 10.5 5.17157 10.5 8 10.5H16C18.8284 10.5 20.2426 10.5 21.1213 11.3787C22 12.2574 22 13.6716 22 16.5C22 19.3284 22 20.7426 21.1213 21.6213C20.2426 22.5 18.8284 22.5 16 22.5H8C5.17157 22.5 3.75736 22.5 2.87868 21.6213C2 20.7426 2 19.3284 2 16.5Z" stroke="#3F4236" stroke-width="1.5"/>
  <path d="M6 10.5V8.5C6 5.18629 8.68629 2.5 12 2.5C14.7958 2.5 17.1449 4.41216 17.811 7" stroke="#3F4236" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M8 16.5H8.009M11.991 16.5H12M15.991 16.5H16" stroke="#3F4236" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                      <input
                      type={showPassword ? "text" : "password"}
                        {...register("password" ,)}
                        className="pl-[4.125rem] h-full w-full  rounded-[0.3125rem] border-2 border-[#1D2015] text-white  focus:outline-none focus:border-lemongreen  focus:ring-lemongreen bg-[#1D2015]" name="password" placeholder='*******************'/>
                    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="pr-[1.1875rem] absolute right-0 z-10"
    >
      {showPassword ? (
  <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.2935 1.93888C9.69399 1.89617 10.0968 1.87484 10.5 1.875C14.9308 1.875 18.48 4.41513 20 8C19.632 8.87199 19.1349 9.69293 18.5227 10.4395M5.294 3.20413C3.356 4.2935 1.855 5.98138 1 8C2.52 11.5849 6.0692 14.125 10.5 14.125C12.3355 14.1339 14.1377 13.6735 15.706 12.795M8.486 6.145C8.22133 6.38878 8.01138 6.67818 7.86815 6.99668C7.72491 7.31519 7.65118 7.65656 7.65118 8.00131C7.65118 8.34606 7.72491 8.68744 7.86815 9.00594C8.01138 9.32445 8.22133 9.61385 8.486 9.85763C8.75067 10.1014 9.06488 10.2948 9.41068 10.4267C9.75649 10.5586 10.1271 10.6265 10.5014 10.6265C10.8757 10.6265 11.2464 10.5586 11.5922 10.4267C11.938 10.2948 12.2522 10.1014 12.5168 9.85763" stroke="#BEE532" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.90039 1L18.1004 15" stroke="#BEE532" stroke-width="1.5" stroke-linecap="round"/>
</svg>


      ) : (
       <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.88933 11.3191C1.81293 11.1133 1.81293 10.8869 1.88933 10.6811C2.63339 8.87695 3.89638 7.33437 5.5182 6.24891C7.14002 5.16345 9.04762 4.58398 10.9992 4.58398C12.9507 4.58398 14.8583 5.16345 16.4801 6.24891C18.1019 7.33437 19.3649 8.87695 20.109 10.6811C20.1854 10.8869 20.1854 11.1133 20.109 11.3191C19.3649 13.1232 18.1019 14.6658 16.4801 15.7513C14.8583 16.8367 12.9507 17.4162 10.9992 17.4162C9.04762 17.4162 7.14002 16.8367 5.5182 15.7513C3.89638 14.6658 2.63339 13.1232 1.88933 11.3191Z" stroke="#BEE532" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.9992 13.7501C12.5179 13.7501 13.7492 12.5189 13.7492 11.0001C13.7492 9.4813 12.5179 8.25009 10.9992 8.25009C9.48038 8.25009 8.24916 9.4813 8.24916 11.0001C8.24916 12.5189 9.48038 13.7501 10.9992 13.7501Z" stroke="#BEE532" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      )}
    </button>
                      </div>
                        {errors.password && (
                          <div className='text-Error'>{errors.password.message}</div>
                        )}
                      
                    </div>
                      <div className="flex gap-[12.625rem]">
                        <label className="inline-flex items-center cursor-pointer">
                          <input className="peer hidden after" type="checkbox"/>
                          <span className="w-[1.3125rem] h-[1.3125rem] inline-block border rounded-[5px] border-[#1D2015] bg-[#1D2015] peer-checked:bg-[#BEE532] peer-checked:border-[#BEE532]"></span>
                          <span className="text-graysh ml-[0.75rem]">Keep me logged in</span> 
                        </label>
                        <div>
                          <button  className='text-lemongreen cursor-pointer' type="button">Forget Password?</button>
                        </div>
                      </div>
                  </div>
                  {/* {Login} */}
                  <div className="bg-lemongreen w-full h-[3.4375rem] flex items-center justify-center rounded-[0.3125rem] ">
                    <button className=" w-full h-[3.4375rem] rounded-[0.3125rem] border-3 outline-2 border-t-[hidden]   hover:outline-lemongreen cursor-pointer" 
                    disabled={isSubmitting}
                    type="submit">
                      {isSubmitting ? "Loading..." : "Login"}</button>
                  </div>
                </form>
              </div>
            </section>
      </div>
      </div>
    </main>
  )
}

export default LoginPage
