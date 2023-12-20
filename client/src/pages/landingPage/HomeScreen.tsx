import React from 'react'
import Hero from './Hero'
import SearchComp from './SearchComp'
import JobComp from './JobComp'
import ValueComp from './ValueComp'


const HomeScreen = () => {
  return (
    <div className='w-[95%] m-auto bg-white'>
        {/* <Hero /> */} 
        <SearchComp />
        <JobComp />
        <ValueComp />
    </div>
  )
}

export default HomeScreen