import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white text-black'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-200'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="/" />
                <h2 className='text-2xl font-bold py-4 text-center mt-4'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 User Allowed</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                  <button className='w-[200px] mx-auto rounded-md bg-[#00df9a] font-medium text-black my-6 py-3 px-6 hover:bg-white hover:border-2 hover:border-black duration-200'>Learn More</button>
            </div>
            <div className='w-full bg-gray-100 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-200'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={double} alt="/" />
                <h2 className='text-2xl font-bold py-4 text-center mt-4'>Partnership</h2>
                <p className='text-center text-4xl font-bold'>$199</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
                    <p className='py-2 border-b mx-8'>2 Users Allowed</p>
                    <p className='py-2 border-b mx-8'>Send up to 10 GB</p>
                </div>
                  <button className='w-[200px] mx-auto rounded-md bg-[#000300] font-medium text-white my-6 py-3 px-6 hover:bg-white hover:border-2 hover:border-black hover:text-black duration-200'>Start Trial</button>
            </div>
            <div className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-200'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="/" />
                <h2 className='text-2xl font-bold py-4 text-center mt-2'>Group Account</h2>
                <p className='text-center text-4xl font-bold'>$299</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>5 TB Storage</p>
                    <p className='py-2 border-b mx-8'>10 Users Allowed</p>
                    <p className='py-2 border-b mx-8'>Send up to 20 GB</p>
                </div>
                  <button className='w-[200px] mx-auto rounded-md bg-[#00df9a] font-medium text-black my-6 py-3 px-6 hover:bg-white hover:border-2 hover:border-black duration-200'>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default Cards