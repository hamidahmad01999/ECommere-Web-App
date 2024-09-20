import React, { useState , useEffect} from 'react'
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";

function forgotPassword() {
    const [isOtp, setIsOtp]=useState(false); // to know wheter user clicked on button to get otp or not it will be true if user clicked to send otp
    const [timeLeftToResendOtp, setTimeLeftToResendOtp]=useState(60);
    const [resendOtp, setResendOtp]=useState(false); // by default it will be false and true after clicking button to send otp
    const [changeValidate, setChangeValidate]=useState("");
    const [passwordVisible, setPasswordVisible]=useState(false);
    const [data, setData]=useState({
        email:"",
        password:""
    })

    const onChangeHandle=(e)=>{
        const {name, value}=e.target;
        setData((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const {email, password}=data;
        if(email==="" || password===""|| email.trim()===""){
            setChangeValidate("Empty password or email not allowed");
            setTimeout(() => {
                setChangeValidate("");
            }, 3000);
        }
        console.log(email, " ",password);
    }
  return (
    <>
        <section>
            <div className='container m-auto px-4 md:px-7 py-4 md:py-7 bg-white mt-5 md:max-w-lg max-w-sm rounded-xl shadow-xl'>
                <form className='flex flex-col ' onSubmit={handleSubmit}>
                    <div className='mx-auto text-[50px] md:text-[100px]'>
                    <FaUser />
                    </div>
                    <div className='flex flex-col mt-1' >
                        <label htmlFor="" className=''>Email</label>
                        
                        <div className='flex'>
                        <input name='email' onChange={onChangeHandle} value={data.email} className='w-full  outline-none border border-black rounded-md text-lg pl-2 mt-1 md:py-1' type="text" placeholder='Enter your email...' />
                        <input onClick={
                            ()=>{setIsOtp((prev)=>!prev); 
                                setResendOtp((prev)=>!prev);
                                resendOtpHandle();
                            }} className='bg-blue-500 text-sm md:text-lg hover:text-[15px]
                        hover:md:text-[19px] duration-500 text-white py-[2px] px-1 md:px-2 md:py-1 rounded-xl ml-1 cursor-pointer hover:shadow-2xl ' type="button" value="Send OTP" />
                        </div>
                        <span>{
                            resendOtp?`Time left to resend ${timeLeftToResendOtp} sec`:''
                            }</span>
                    </div>
                    <div className='mt-3 flex'>
                        <input className='text-lg w-full outline-none border border-black rounded-md p-1' type="text" placeholder='Enter OTP to set password....'  disabled={!isOtp}/>
                        <input className=' bg-blue-500 text-sm md:text-lg hover:text-[15px]
                        hover:md:text-[19px] duration-500 text-white py-[2px] px-1 md:px-2 md:py-1 rounded-xl ml-1 cursor-pointer hover:shadow-2xl ' type="button" value="Submit OTP" disabled={!isOtp}/>
                    </div>
                    <div className='flex flex-col mt-3 md:mt-4' >
                        <label htmlFor="" className=''>New Password</label>
                        <div className='flex items-center border border-black rounded-md pr-2'>
                        <input name='password' value={data.password} onChange={onChangeHandle} className='w-full outline-none  text-lg pl-2 md:py-1' type={passwordVisible?'text':'password'}
                        disabled={!isOtp} placeholder='Enter your password...' />
                        <div className='text-lg flex' onClick={()=>{
                            setPasswordVisible((prev)=>!prev)}}>
                            {
                                passwordVisible? <FaRegEye />:<IoMdEyeOff />
                            }
                        
                        </div>
                        </div>
                    </div>
                    <div className='mt-3 md:mt-4 '>
                        <button 
                            className='bg-blue-500 md:w-[50%] mx-auto block w-full text-sm md:text-lg rounded-xl py-1
                            md:py-[6px]
                            '
                        >
                            Change Password
                        </button>
                        <p className='text-center'>{changeValidate}</p>
                    </div>
                </form>
                <div className='mt-1 md:mt-2'>
                <p className='cursor-pointer text-slate-600 flex'>
                        Don't have an accout? <span className='ml-1 text-slate-400'>
                            <Link to={'/signup'}>Sign Up</Link>
                        </span>
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default forgotPassword