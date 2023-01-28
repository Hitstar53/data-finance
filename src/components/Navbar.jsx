import React, { useState } from 'react'
import {
  AiOutlineClose,
  AiOutlineMenu,
} from 'react-icons/ai'
import logo from '../assets/logo.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      {/* div for logo image, make it fit the header */}
      <div className='mt-6 w-28 h-28 md:mt-28 md:w-48 md:h-48'>
        <img src={logo} alt="/" />
      </div>
      <h1 className='hidden w-full text-3xl font-bold text-[#00df9a] md:block'>DATA FINANCE</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <button className='text-black bg-[#00df9a] hover:bg-white duration-200 w-[200px] rounded-md font-medium mx-auto px-4 py-2'>Sign In</button>
      <div className='block md:hidden'>
        {isOpen ? (
          <AiOutlineClose size={20} onClick={toggle} />
        ) : (
          <AiOutlineMenu size={20} onClick={toggle} />
        )}
      </div>
      <div className={
        isOpen ? 'fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-8'>DATA FINANCE</h1>
        <ul className='p-4 uppercase'>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar