import GenBanner from '@/components/GenBanner';
import Image from 'next/image';
import React from 'react'
import { ImLocation2} from "react-icons/im";
import { FaEnvelope } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import {BsTelephoneFill } from "react-icons/bs";

type Props = {}

const contact = (props: Props) => {
  return (
    <>
    <main>
    <GenBanner one="#let's_talk" two='LEAVE A MESSAGE. We love to hear from you' clas='about-banner'/>

    <article className='sec-t sec-p flex items-center justify-center flex-col sm:flex-row'>
    <div className="w-full sm:w-[40%] mr-0 mb-5 p-3 sm:mr-8">
            <span className="text-black/70 text-[.9rem]">GET IN TOUCH</span>
            <h2 className='text-[1.6rem] leading-tight font-semibold'>Visit one of our agency locations or contact us today</h2>
            <h4 className='text-[.9rem] mb-3 mt-1 font-semibold'>Head Office</h4>
            <ul className='space-y-3'>
                <li className='flex space-x-2 items-center'>
                    <ImLocation2 className='text-[.9rem]' />
                    <p className='text-[.9rem] font-semibold'>Ibadan, Oyo State, Nigeria</p>
                </li>
                <li className='flex space-x-2 items-center'>
                    <FaEnvelope className='text-[.9rem]' />
                    <p className='text-[.9rem] font-semibold'>enitanpeters28@gmail.com</p>
                </li>
                <li className='flex space-x-2 items-center'>
                    <BsTelephoneFill className='text-[.9rem]' />
                    <p className='text-[.9rem] font-semibold'>+2348036314163</p>
                </li>
                <li className='flex space-x-2 items-center'>
                    <BiTimeFive className='text-[1.1rem]' />
                    <p className='text-[.9rem] font-semibold'>Monday to Saturday. 9:00 to 16:00</p>
                </li>
            </ul>
        </div>
        <div className="w-full sm:w-1/2 h-[350px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.6030300019984!2d3.9061372146209328!3d7.398298499877104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039934455b323dd%3A0x1fb6e548a4151b0b!2sIbadan%20Oyo%20State!5e0!3m2!1sen!2sng!4v1653702954068!5m2!1sen!2sng" width="600" height="450"  loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-full'></iframe>
        </div>
    </article>
    <article className="sec-t sec-p flex flex-col items-start sm:items-stretch sm:flex-row justify-center sm:justify-around border border-black/40 py-[2rem] px-[1rem] sm:px-[3rem] my-[2rem] mx-[1rem] sm:my-[4rem] sm:mx-[2rem] sm:space-x-5 md:space-x-8">
        <form className="w-full mb-5 sm:w-[60%] flex flex-col items-start ">
            <span className="text-[.8rem] mt-1">LEAVE A MESSAGE</span>
            <h2 className='text-[1.3rem] tracking-[1px] my-1'>We love to hear from you</h2>
            <input type="text" placeholder="Your Name" className='w-full p-3 my-1 bg-gray-200 rounded-md placeholder:text-[.8rem] placeholder:text-black/70 focus:outline-none focus:border-black/40'/>
            <input type="email" placeholder="E-mail" className='w-full p-3 my-1 bg-gray-200 rounded-md placeholder:text-[.8rem] placeholder:text-black/70 focus:outline-none focus:border-black/40'/>
            <input type="text" placeholder="Subject" className='w-full p-3 my-1 bg-gray-200 rounded-md placeholder:text-[.8rem] placeholder:text-black/70 focus:outline-none focus:border-black/40'/>
            <textarea rows={6} placeholder="Your Message" className='w-full p-3 my-1 bg-gray-200 rounded-md placeholder:text-[.8rem] placeholder:text-black/70 focus:outline-none focus:border-black/40'></textarea>
            <button className="px-4 py-3 bg-[#088178] text-white border-none text-[1.1rem] cursor-pointer transition-all duration-300 hover:scale-90 rounded-md">Send Message</button>
        </form>
        <div className="clients space-y-5 flex flex-col justify-center">
        <div className="details flex justify-center space-x-3">
        <Image src='/assets/people/3.png' alt="" width={50} height={50} className='w-[45px] h-[45px]'/>
        <div className="clients-details">
            <h3 className='text-[1.1rem] font-semibold'>John Doe</h3>
            <p className='text-[.6rem] -mt-1'>Senior Marketing Manager</p>
            <p className='text-[.8rem]'>Phone: +2349030297281</p>
            <p className='text-[.8rem] -mt-1'>Email: example@email.com</p>
        </div>
        </div>
        <div className="details flex justify-center">
            <Image space-x-3ge src='/assets/people/3.png' alt="img" width={50} height={50} className='w-[45px] h-[45px]'/>
            <div className="clients-details">
                <h3 className='text-[1.1rem] mb-1'>John Doe</h3>
                <p className='text-[.6rem] -mt-1'>Senior Marketing Manager</p>
                <p className='text-[.8rem]'>Phone: +2349030297281</p>
                <p className='text-[.8rem] -mt-1'>Email: example@email.com</p>
            </div>
        </div>
        <div className="details flex justify-center">
            <Image space-x-3ge src='/assets/people/1.png' alt="img" width={50} height={50} className='w-[45px] h-[45px]'/>
            <div className="clients-details">
                <h3 className='text-[1.1rem] mb-1'>John Doe</h3>
                <p className='text-[.6rem] -mt-1'>Senior Marketing Manager</p>
                <p className='text-[.8rem]'>Phone: +2349030297281</p>
                <p className='text-[.8rem] -mt-1'>Email: example@email.com</p>
            </div>
        </div>
        <div className="details flex justify-center space-x-3">
    <Image src='/assets/people/2.png' alt="img" width={50} height={50} className='w-[45px] h-[45px]'/>
    <div className="clients-details">
        <h3 className='text-[1.1rem] mb-1'>John Doe</h3>
        <p className='text-[.6rem] -mt-1'>Senior Marketing Manager</p>
        <p className='text-[.8rem]'>Phone: +2349030297281</p>
        <p className='text-[.8rem] -mt-1'>Email: example@email.com</p>
    </div>
        </div>
        </div>
    </article>
    </main>

    </>
  )
}

export default contact