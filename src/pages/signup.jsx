import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import imageToBase64 from '../helper/imageToBase64';

function signup() {
    const [loginValidate, setLoginValidate]=useState("");
    const [passwordVisible, setPasswordVisible]=useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible]=useState(false);
    const [isSamePasswords, setIsSamePasswords]=useState(true);
    const [data, setData]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        profilePic:""
    })

    const onChangeHandle=(e)=>{
        const {name, value}=e.target;
        console.log(name," ", value)
        setData((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const {name,confirmPassword,email, password}=data;
        if(email==="" || password==="" || name===""||confirmPassword===""){
            setLoginValidate("Empty password or email not allowed");
            setTimeout(() => {
                setLoginValidate("");
            }, 3000);
        }else if(email.trim()==="" || name.trim() || password.trim()||confirmPassword.trim()){
            setLoginValidate("Invalid input");
            setTimeout(() => {
                setLoginValidate("");
            }, 3000);
        }
    }

    const passwordsSameHandler=(e)=>{
        if(e.name=="password"){
            const {confirmPassword}=data;
            if(e.target.value==confirmPassword){
                setIsSamePasswords(true);
            }else{
                setIsSamePasswords(false);

            }
        }else{
            const {password}=data;
            if(e.target.value==password){
                setIsSamePasswords(true);
            }else{
                setIsSamePasswords(false);

            }
        }
    }

    const imageUploadHandle=async(e)=>{
        const file=e.target.files[0];
        const imagePic=await imageToBase64(file);
        console.log("File ", imagePic);
        setData((prev)=>{
            return{
                ...prev,
                profilePic:imagePic
            }
        })
    }

  return (
    <>
        <section>
            <div className='container m-auto px-4 md:px-7 py-4 md:py-7 bg-white mt-5 md:max-w-lg max-w-sm rounded-xl shadow-xl'>
            <div className='w-20 h-20 md:w-28 md:h-28 mx-auto relative overflow-hidden rounded-full flex flex-col justify-center border border-black'>
                        <div className='text-[70px] md:pt-3 md:text-[105px] text-center mx-auto'>
                            {/* <img src={data.profilePic || <FaUser/>} alt='login icons'/> */}
                            {data.profilePic?<img src={data.profilePic} alt='login icons'/>:<FaUser/> }
                            {/* <FaUser/> */}
                        </div>
                        <form>
                          <label>
                            <div className='text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'>
                              Upload  Photo
                            </div>
                            <input type='file' name='profilePic' className='hidden' onChange={imageUploadHandle} />
                          </label>
                        </form>
                    </div>
                <form className='flex flex-col ' onSubmit={handleSubmit}>
                    
                    <div className='flex flex-col mt-1' >
                        <label htmlFor="" className=''>Name</label>
                        <input name='name' onChange={onChangeHandle} value={data.name} className='w-full  outline-none border border-black rounded-md text-lg pl-2 mt-1 md:py-1' type="text" placeholder='Enter your name...' maxLength={50} />
                    </div>
                    <div className='flex flex-col mt-1' >
                        <label htmlFor="" className=''>Email</label>
                        <input name='email' onChange={onChangeHandle} value={data.email} className='w-full  outline-none border border-black rounded-md text-lg pl-2 mt-1 md:py-1' type="text" placeholder='Enter your email...' maxLength={50} />
                    </div>
                    <div className='flex flex-col mt-3 md:mt-4' >
                        <label htmlFor="" className=''>Password</label>
                        <div className='flex items-center border border-black rounded-md pr-2'>
                        <input name='password' value={data.password} onChange={
                            (e)=>{onChangeHandle(e); passwordsSameHandler(e)}
                            } className='w-full outline-none  text-lg pl-2 md:py-1' type={passwordVisible?'text':'password'} placeholder='Enter your password...' maxLength={50} />
                        <div className='text-lg flex' onClick={()=>{
                            setPasswordVisible((prev)=>!prev)}}>
                            {
                                passwordVisible? <FaRegEye />:<IoMdEyeOff />
                            }
                        
                        </div>
                        </div>
                    </div>
                    <div className='flex flex-col mt-3 md:mt-4' >
                        <label htmlFor="" className=''>Confirm Password</label>
                        <div className='flex items-center border border-black rounded-md pr-2'>
                        <input name='confirmPassword' value={data.confirmPassword} onChange={
                            (e)=>{onChangeHandle(e); passwordsSameHandler(e)}
                        }
                         className='w-full outline-none  text-lg pl-2 md:py-1' type={confirmPasswordVisible?'text':'password'} placeholder='Enter your confirm password...' maxLength={50} />
                        <div className='text-lg flex' onClick={()=>{
                            setConfirmPasswordVisible((prev)=>!prev)}}>
                            {
                                confirmPasswordVisible? <FaRegEye />:<IoMdEyeOff />
                            }
                        
                        </div>
                        </div>
                        <p>{isSamePasswords?'':'Passwords are not same.'}</p>
                    </div>
                    <div className='mt-3 md:mt-4 '>
                        <button 
                            className='bg-blue-500 md:w-[50%] mx-auto block w-full text-sm md:text-lg rounded-xl py-1
                            md:py-[6px]
                            '
                        >
                            Sign Up
                        </button>
                        <p className='text-center'>{loginValidate}</p>
                    </div>
                </form><p className='cursor-pointer text-slate-600 flex'>
                        Already have an accout? <span className='ml-1 text-slate-400'>
                            <Link to={'/login'}>Login</Link>
                        </span>
                    </p>
            </div>
        </section>
    </>
  )
}

export default signup