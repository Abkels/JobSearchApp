import React from 'react'
import lyfecareLogo from "../../assets/lyfecareLogo.jpg"
import logo from "../../assets/logo.jpg"
import logo2 from "../../assets/logo2.jpg"

const ValueComp = () => {
  return (
    <div className='mb-[4rem] mt-[6rem] m-auto w-[95%]'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px block] mx-[20px]'>The value that holds us true and to account</h1>

      <div className='grid gap-[10rem] grid-cols-3 items-center'>
        
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className='flex items-center gap-3'>
            <div className="imgDiv p-[4px] rounded-[8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={lyfecareLogo} alt=""  className='w-70%'/>
            </div>

            <span className='font-semibold text-textColor text-[18px]'>
              Simplicity
            </span>    
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[irem] font-semibold'>
            We believe in making things better for everyone, even if it is just a little bit!
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className='flex items-center gap-3'>
            <div className="imgDiv p-[4px] rounded-[8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={logo2} alt=""  className='w-70%'/>
            </div>

            <span className='font-semibold text-textColor text-[18px]'>
              Simplicity
            </span>    
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[irem] font-semibold'>
            We work on the basis of creating trust which can be nurtured through authenticity and transparency
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className='flex items-center gap-3'>
            <div className="imgDiv p-[4px] rounded-[8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={logo} alt=""  className='w-70%'/>
            </div>

            <span className='font-semibold text-textColor text-[18px]'>
              Simplicity
            </span>    
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[irem] font-semibold'>
            Things being made beautifully simple are at the heart of everything we do
          </p>
        </div>
      </div>

      <div className="card mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px] mx-[23px]">

        <div>
          <h1 className='text-blueColor text-[30px] font-bold'>Ready to switch a career</h1>
          <h2 className='text-textColor text-[25px] font-bold'>Let's get started</h2>
        </div>

        <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor'>
            Get started
          </button>

      </div>
    </div>
  )
}

export default ValueComp