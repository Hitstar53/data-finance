import React,{ useRef,useEffect } from 'react'
import Typed from 'typed.js'

const Hero = () => {
    const el = useRef(null)
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['BTB', 'D2C', 'BTC', 'SASS'],
            typeSpeed: 120,
            backSpeed: 140,
            loop: true,
        })
        return () => {
            typed.destroy()
        }
    }, [])
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold text-sm pb-3 md:text-2xl'>GROWING WITH DATA ANALYTICS</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-4'>Grow with Data.</h1>
                <div>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                        Fast, flexible financing for <span className='text-gray-700' ref={el}></span>
                    </p>
                </div>
                <p className='md:w-[75%] md:mx-auto md:text-xl text-sm font-bold text-gray-500'>
                    Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.
                </p>
                <button className='text-black w-[200px] rounded-md font-medium mx-auto px-6 my-6 py-3  bg-[#00df9a] hover:bg-white duration-200'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero