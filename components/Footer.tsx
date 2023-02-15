import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { SocialIcon } from "react-social-icons";

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="sec-t sec-p flex justify-center items-center w-full flex-col">
        <div className="flex items-start  w-full flex-col sm:flex-row px-[20px] md:px-24">
            <div className="mt-5 mb-10 sm:mt-0 sm:mb-0 md:w-[50%]">
                <Image src='/assets/logo.png' width={200} height={200} className='mb-4 p-0' alt="logo" />
                <div className=''>
                    <h1 className='text-[1rem] mb-4 font-semibold'>Contact</h1>
                    <p className='text-[.8rem] my-1 tracking-[1px]'><strong>Address:</strong> Ibadan, Oyo state, Nigeria</p>
                    <p className='text-[.8rem] my-1 tracking-[1px]'><strong>Phone:</strong> +2348036314163</p>
                    <p className='text-[.8rem] my-1 tracking-[1px]'><strong>Hours:</strong> 09:00 - 18:00 Mon-Sat</p>
                    <p className='text-[.8rem] my-1 tracking-[1px]'><strong>Email:</strong> enitanpeters28@gmail.com</p>
                </div>
                <div className='mt-5'>
                    <h2 className="text-[1rem] mb-2 font-semibold">Follow Us</h2>
                    <div className='space-x-2'>
                    <SocialIcon
                        url="https://github.com/PeterMichael28"
                        network="github"
                        style={{width:'40px', height:'40px'}}
                    />
                    <SocialIcon
                        network="instagram"
                        className='text-[.5rem]'
                        style={{width:'40px', height:'40px'}}
                    />
                    <SocialIcon
                        network="twitter"
                        className='text-[.5rem]'
                        style={{width:'40px', height:'40px'}}
                    />
                    <SocialIcon
                        network="whatsapp"
                        className='text-[.5rem]'
                        style={{width:'40px', height:'40px'}}
                    />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center space-x-9 md:space-x-20 sm:w-full">
            <div className="flex flex-col mb-7 sm:mb-0">
                <h1 className='text-[1rem] mb-4 font-semibold'>About</h1>
                <Link href="/about" className='my-1 text-black/80 text-[.8rem] tracking-[1px]'>About Us</Link>
                <a href="#/" className='my-1 text-black/80 text-[.8rem] tracking-[1px]'>Delivery Information</a>
                <a href="#/" className='my-1 text-black/80 text-[.8rem] tracking-[1px]'>Privacy Policy</a>
                <a href="#/" className='my-1 text-black/80 text-[.8rem] tracking-[1px]'>Terms & Conditions</a>
                <Link href="/contact" className='my-1 text-black/80 text-[.8rem] tracking-[1px]'>Contact Us</Link>
            </div>
            <div className="flex flex-col mb-7 sm:mb-0">
                <h1 className='text-[1rem] mb-4 font-semibold'>My Account</h1>
                <a href="#/" className='my-1 text-black/80 text-[.8rem] tracking-[1px]'>Sign In</a>
                <Link href="/cart" className='my-1 text-black/80 text-[.8rem] tracking-[1px]'>View Cart</Link>
                <a href="#/" className='my-1 text-black/80 text-[.8rem] tracking-[1px]'>My Wishlist</a>
                <a href="#/" className='my-1 text-black/80 text-[.8rem] tracking-[1px]'>Track My Order</a>
                <a href="#/" className='my-1 text-black/80 text-[.8rem] tracking-[1px]'>Help</a>
            </div>
            </div>
            <div className="w-[30rem]">
                <h1 className='text-[1rem] mb-4 font-semibold'>Install Apps</h1>
                <p className='my-3 text-[.8rem] text-black/80'>From App Store or Google Play</p>
                <div className="img">
                    <Image src='/assets/pay/app.jpg' width={200} height={200} alt="logo" className='border border-[#088178] py-[2px] px-[10px] rounded-xl m-0 '/>
                    <Image src='/assets/pay/play.jpg' width={200} height={200} alt="logo" className='border border-[#088178] py-[2px] px-[10px] rounded-xl m-0 '/>
                </div>
                <p className='my-3 text-[.8rem] text-black/80'>Secure Payment Gateways</p>
                <Image src='/assets/pay/pay.png' width={100} height={100} alt="logo" />
            </div>
        </div>
        <p className="text-[.7rem] tracking-[1.5px] my-1 mt-7">@2023 Copyright PeterMichael</p>
    </footer>
  )
}

export default Footer