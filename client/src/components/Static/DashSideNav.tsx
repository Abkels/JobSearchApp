import React from 'react'
import {FaTachometerAlt, FaRegSun, FaChevronRight, FaWrench} from "react-icons/fa"

const DashSideNav = () => {
  return (
    <div className='basis-[12%] border bg-[#4E73df] h-[100vh] '>
      <div className='px-[15px] py-[30px] flex  justify-center border-b-[1px] border-#EDEDED'>
        <h1 className='text-white text-[20px] leading-[24px] font-extrabold cursor-pointer'>Admin Panel</h1>
      </div>
      
      <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border #EDEDED'>
        <FaTachometerAlt color = "white"/>
        <p className='text-[14px] lading-[20px] font-bold text-white'>Dashboard</p>
      </div>

      <div className='pt-[15px] border-b-[1px] border-[#EDEDED]'>
        <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'>Interface</p>
        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer '>
          <div className='flex items-center gap-[10px]'>
            <FaRegSun color="white"/>
            <p className='text-[14px] leading-[20px] font-normal text-white'>Components</p>
          </div>
          <FaChevronRight color="white"/>
        </div>

        <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'>Interface</p>
        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer '>
          <div className='flex items-center gap-[10px]'>
            <FaWrench color="white"/>
            <p className='text-[14px] leading-[20px] font-normal text-white'>Utilities</p>
          </div>
          <FaChevronRight color="white"/>
        </div>
      </div>

      <div className='pt-[15px] border-b-[1px] border-[#EDEDED]'>
        <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'>Interface</p>
        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer '>
          <div className='flex items-center gap-[10px]'>
            <FaRegSun color="white"/>
            <p className='text-[14px] leading-[20px] font-normal text-white'>Components</p>
          </div>
          <FaChevronRight color="white"/>
        </div>

        <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'>Interface</p>
        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer '>
          <div className='flex items-center gap-[10px]'>
            <FaWrench color="white"/>
            <p className='text-[14px] leading-[20px] font-normal text-white'>Utilities</p>
          </div>
          <FaChevronRight color="white"/>
        </div>
      </div>
    </div> 
  )
}

export default DashSideNav