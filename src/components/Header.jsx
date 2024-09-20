import React from 'react'
import Logo from './Logo'
import {GrSearch} from 'react-icons/gr'
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header className='h-16  shadow-xl bg-white'>
        <div className='h-full flex items-center justify-between lg:px-7 md:px-5'>
        <div className='lg:pl-5 md:pl-4 cursor-pointer basis-[10%]'>
          <Link to={''}>
          <Logo width={70} h={50} />
          </Link>
        </div>
        <div className='hidden md:flex  min-w-96 max-w-md  justify-center items-center border-black border-solid border-[1px] rounded-full'>
          <div className='w-full  text-lg pl-3 pr-1'>
            <input className='w-full outline-none shadow-inner' type="search" name="" id="" placeholder='Search here...' />
          </div>
          <div className='bg-blue-500 text-white text-lg rounded-r-full h-8 flex justify-center items-center p-3 cursor-pointer'>
            <GrSearch/>
          </div>
        </div>
        <div className='flex gap-3 md:gap-5 items-center '>
          <div className='rounded-full border border-black p-1 md:p-[10px] text-lg  bg-blue-500 hover:cursor-pointer hover:shadow-2xl duration-500 hover:bg-gray-700 '>
          <FaUser />
          </div>
          <div className='rounded-full border border-black p-1 md:p-[10px] text-lg  bg-blue-500 relative hover:cursor-pointer hover:shadow-2xl duration-500 hover:bg-gray-700 '>
          <FaShoppingCart />
          <span className='text-sm bg-pink-800 text-white absolute -top-[8px] -right-1 
          py-[2px] px-[6px] rounded-full'>0</span>
          </div>
          <div>
            <Link className='rounded-full bg-blue-500 text-white text-sm hover:text-[16px] md:text-lg border-1 border-black py-1 px-2 md:px-4 hover:bg-gray-700 duration-500 md:hover:text-[20px] hover:shadow-xl
            ' to={'/login'} >Login</Link>
          </div>
          <div>
          <Link className='rounded-full bg-blue-500 text-white hover:text-[16px] text-sm md:text-lg border-1 border-black py-1 px-2 md:px-4 hover:bg-gray-700 duration-500 md:hover:text-[20px] hover:shadow-xl' to={'/signup'} >Sign Up</Link>
          </div>
        </div>
        </div>
      </header>
    </>
  )
}

export default Header