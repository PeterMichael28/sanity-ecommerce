import Image from 'next/image';
import React, {useState} from 'react'
import Navlinks from './Navlinks';
import { GiHamburgerMenu} from "react-icons/gi";
import { MdOutlineClose} from "react-icons/md";
import { BsCart4} from "react-icons/bs";
import Link from 'next/link';
import { selectItemsList, selectTotalQty } from '@/store/cartSlice';
import { useSelector } from 'react-redux';


type Props = {}

const Header = ( props: Props ) => {
  const totalQty = useSelector(selectTotalQty)

  const [ mobileMenu, setMobileMenu ] = useState<boolean>( false )
  
  //mobile menu handler
  const handleMobileMenu:() => void = () => {
    setMobileMenu( !mobileMenu)
    // console.log(mobileMenu)
  }
  return (
    <header className='bg-[#e3e6f3] px-6 pr- md:px-16 py-4 flex items-center justify-between w-[77%] fixed top-0 left-0 shadow-md shadow-[rgba(0,0,0,.4)] z-40 '>
        <Link href='/'>

      <Image src='/assets/logo.png' alt='logo' width={100} height={100} />
        </Link>
        
        <div className='flex items-center justify-between space-x-3 md:space-x-8 '>
     
        {!mobileMenu ? <GiHamburgerMenu className='md:hidden cursor-pointer text-[1.5rem] relative z-20' onClick={handleMobileMenu}/> : <MdOutlineClose className='md:hidden cursor-pointer text-[1.8rem] font-bold relative z-20' onClick={handleMobileMenu}/>}
        <Navlinks handleMobileMenu={handleMobileMenu} mobileMenu={mobileMenu} />
        <Link href='/cart' className='nav-link text-[1.4rem] md:text-[1.2rem] relative z-20 cart'>
          <BsCart4 className='nav-link text-[1.4rem] md:text-[1.2rem] relative z-20' />
          <small className="flex items-center justify-center">{ totalQty }</small>
        </Link>

        
        </div>
    </header>
  )
}

export default Header