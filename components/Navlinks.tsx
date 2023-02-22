import Link from 'next/link';
import React from 'react'
import { BsCart4 } from "react-icons/bs";

type Props = {
  handleMobileMenu: () => void
  mobileMenu: boolean
}




const Navlinks = ({handleMobileMenu, mobileMenu}: Props) => {
  return (
    // <nav className={`${mobileMenu ? 'nav-ul' :'flex space-x-5' }`}>
         <ul className={`flex md:items-center md:space-x-8 nav-ul ${mobileMenu ? 'change' : ''} `}>
            <li className='relative'>
                <Link className='text-[1.2rem] nav-link font-semibold text-black/70 transition-all duration-300 hover:text-[#088178]' href="/" onClick={handleMobileMenu}>Home</Link>
            </li>
            <li className='relative'>
                <Link className='text-[1.2rem] nav-link font-semibold text-black/70 transition-all duration-300 hover:text-[#088178]' href="/shop" onClick={handleMobileMenu}>Shop</Link>
            </li>
  
            <li className='relative'>
                <Link className='text-[1.2rem] nav-link font-semibold text-black/70 transition-all duration-300 hover:text-[#088178]' href='/about' onClick={handleMobileMenu}>About</Link>
            </li>
            <li className='relative'>
                <Link className='text-[1.2rem] nav-link font-semibold text-black/70 transition-all duration-300 hover:text-[#088178]' href='/contact' onClick={handleMobileMenu}>Contact</Link>
            </li>
          </ul>
    // </nav>
  )
}

export default Navlinks