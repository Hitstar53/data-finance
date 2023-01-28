import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub,
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl text-center md:text-start font-bold text-[#00df9a]'>DATA FINANCE</h1>
                <p className='py-4 text-center md:text-start text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa facilis quae facere obcaecati rerum repudiandae.</p>
                <div className='w-[50%] mx-auto flex justify-between md:mx-0 md:w-[75%] my-6'>
                    <FaFacebook className='text-2xl cursor-pointer' />
                    <FaInstagram className='text-2xl cursor-pointer' />
                    <FaTwitter className='text-2xl cursor-pointer' />
                    <FaLinkedin className='text-2xl cursor-pointer' />
                    <FaGithub className='text-2xl cursor-pointer' />
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-2'>
                <div>
                    <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>Commerce</li>
                        <li className='py-2 text-sm'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Documentation</li>
                        <li className='py-2 text-sm'>Guides</li>
                        <li className='py-2 text-sm'>API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm'>Blog</li>
                        <li className='py-2 text-sm'>Jobs</li>
                        <li className='py-2 text-sm'>Press</li>
                        <li className='py-2 text-sm'>Careers</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm'>Claim</li>
                        <li className='py-2 text-sm'>Policy</li>
                        <li className='py-2 text-sm'>Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer