import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {CgProfile} from 'react-icons/cg'

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const handleNav = () =>{
    setOpenNav(!openNav)
  }
  return (
    <div className=' fixed flex-col top-0 flex min-w-full p-2 bg-slate-200 dark:text-white dark:bg-slate-800 text-black font-bold mb-4'>
      <div className='flex justify-between'>
      <h1 className='capitalize my-2 text-xl sm:text-2xl sm:ml-4 md:text-3xl lg:text-4xl xl:text-5xl'>
        <Link to="/">muscle fuel</Link>
      </h1>
      <div className=' hidden sm:flex -translate-x-16 md:-translate-x-28 lg:-translate-x-32 xl:-translate-x-44'>
        <h2 className=' mx-4 my-auto text-lg md:text-xl lg:text-2xl xl:text-3xl'>
          <Link to={"home"} >Home</Link>
        </h2>
        <h2 className=' mx-4 my-auto text-lg md:text-xl lg:text-2xl xl:text-3xl'>
          Contact Us
        </h2>
      </div>
      <Link to={'me'} >
        <CgProfile className=' hidden sm:block sm:text-2xl my-3 md:text-3xl lg:text-4xl mx-4 md:my-3 lg:my-4 xl:text-5xl xl:mr-4 xl:my-3'/>
      </Link>
      <GiHamburgerMenu onClick={handleNav} size={26} className=' my-auto mx-1 cursor-pointer sm:hidden' />
      </div>
      <div className={''+(openNav?"flex-col":"hidden")}>
        <hr />
        <h1 className='text-xl my-5 text-center'>
          <Link to={"home"} >Home</Link>
        </h1>
        <hr className=' w-4/5 mx-auto' />
        <h1 className='text-xl my-5 text-center'>
          Contact Us
        </h1>
        <hr className=' w-4/5 mx-auto' />
        <Link to={'me'} >
          <CgProfile className='mx-auto my-5' size={22}/>
        </Link>
      </div>
    </div>
  )
}

export default Header