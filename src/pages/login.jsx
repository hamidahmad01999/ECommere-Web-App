import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";

function login() {
    const [loginValidate, setLoginValidate]=useState("");
    const [passwordVisible, setPasswordVisible]=useState("false");
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
    const onClickHandle=(e)=>{
        e.preventDefault();
        const {email, password}=data;
        if(email==="" || password===""|| email.trim()===""){
            setLoginValidate("Empty password or email not allowed");
            setTimeout(() => {
                setLoginValidate("");
            }, 3000);
        }
        console.log(email, " ",password);
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
                        <input name='email' onChange={onChangeHandle} value={data.email} className='w-full  outline-none border border-black rounded-md text-lg pl-2 mt-1 md:py-1' type="text" placeholder='Enter your email...' />
                    </div>
                    <div className='flex flex-col mt-3 md:mt-4' >
                        <label htmlFor="" className=''>Password</label>
                        <div className='flex items-center border border-black rounded-md pr-2'>
                        <input name='password' value={data.password} onChange={onChangeHandle} className='w-full outline-none  text-lg pl-2 md:py-1' type={passwordVisible?'password':'text'} placeholder='Enter your password...' />
                        <div className='text-lg flex' onClick={()=>{
                            setPasswordVisible((prev)=>!prev)}}>
                            {
                                passwordVisible? <IoMdEyeOff />: <FaRegEye />
                            }
                        
                        </div>
                        </div>
                        <div className=''>
                        <span className='text-blue-500 cursor-pointer float-right'>forgot password <Link to={'/forgot-password'}></Link></span>

                        </div>
                    </div>
                    <div className='mt-3 md:mt-4 '>
                        <button 
                            className='bg-blue-500 md:w-[50%] mx-auto block w-full text-sm md:text-lg rounded-xl py-1
                            md:py-[6px]
                            '
                            onClick={onClickHandle}
                        >
                            Login
                        </button>
                        <p className='text-center'>{loginValidate}</p>
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