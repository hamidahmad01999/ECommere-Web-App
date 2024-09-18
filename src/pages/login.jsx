import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";

function login() {
    const [validPassword, setValidPassword]=useState("Password length minimum 8 character.");

    const onPasswordChange=(e)=>{
        const password = e.target.value;
        if(password.length<8){
            setValidPassword("Password length minimum 8 character.")
        }else{
            setValidPassword("")
        }
    }

  return (
    <>
        <section>
            <div className='container m-auto px-4 md:px-7 py-4 md:py-7 bg-white mt-5 md:max-w-lg max-w-sm rounded-xl shadow-xl'>
                <form className='flex flex-col '>
                    <div className='mx-auto text-[50px] md:text-[100px]'>
                    <FaUser />
                    </div>
                    <div className='flex flex-col mt-1' >
                        <label htmlFor="" className=''>Email</label>
                        <input className='w-full  outline-none border border-black rounded-md text-lg pl-2 mt-1 md:py-1' type="text" placeholder='Enter your email...' />
                    </div>
                    <div className='flex flex-col mt-3 md:mt-4' >
                        <label htmlFor="" className=''>Password</label>
                        <div className='flex items-center border border-black rounded-md pr-2'>
                        <input onChange={onPasswordChange} className='w-full outline-none  text-lg pl-2 md:py-1' type="password" placeholder='Enter your password...' />
                        <FaRegEye />
                        </div>
                        
                        <span className='text-[14px] text-purple-400'>{validPassword}</span>
                        <span className='text-blue-500 cursor-pointer float-right'>forgot password <Link to={'/forgot-password'}></Link></span>
                    </div>
                    <div className='mt-3 md:mt-5 '>
                        <button 
                            className='bg-blue-500 md:w-[50%] mx-auto block w-full text-sm md:text-lg rounded-xl py-1
                            md:py-[6px]
                            '
                        >
                            Login
                        </button>
                    </div>
                </form>
                <div className='mt-1 md:mt-2'>
                    <p className='cursor-pointer text-slate-600'>
                        Don't have an accout?
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default login