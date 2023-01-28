import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 px-8 text-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='text-2xl font-bold py-2 md:text-4xl sm:text-3xl'>Want tips & tricks to optimise your flow?</h1>
                <p className='text-gray-400'>Subscribe to our newsletter to stay upto date</p>
            </div>
            <div className='my-4'>
                <div className='flex justify-between items-center w-full flex-row'>
                    <input className='w-full flex rounded-md p-3' type="text" placeholder='Enter your email address' />
                      <button className='text-black font-medium w-[180px] rounded-md px-4 py-3 ml-4 my-6 bg-[#00df9a] hover:bg-white duration-200'>Subscribe!</button>
                </div>
                <p className='text-gray-400 text-xs md:text-base'>
                    We care about the protection of your data. Read our <span className='underline text-[#00df9a]'>Privacy Policy</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter