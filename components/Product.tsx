import { urlFor } from '@/lib/Client';
import { addToCart, selectItemsList } from '@/store/cartSlice';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {toast} from 'react-hot-toast'



type Props = {
    brand: string
    price: number
  name: string
    image: any
    
}

const Product = ( { product }: any ) => {
  const  { brand, name, price, image, slug } = product


  const dispatch = useDispatch();
  const itemsList = useSelector(selectItemsList)
  
  const src = urlFor( image && image[ 0 ] ).url()
  
  const handleAddToCArt = () => {
    dispatch(addToCart(product))
    toast.success(`${product.name} added Cart`, {
      className: 'text-sm',
    })
  }

  return (
    <div className="pro flex justify-center items-center flex-col">
      <Link href={`/productdetails/${slug.current}`} className='w-[100%] rounded-xl h-[230px] cursor-pointer'>
      <Image loader={() => src} src={src} unoptimized={true} priority width={200} height={200} alt="img" className='w-[100%] rounded-xl h-[230px] cursor-pointer' />
      </Link>
    <div className="pro-text space-y-1 w-full relative text-left mt-[5px]">
    <span className='text-black/70 text-[.8rem] font-semibold'>{brand}</span>
    <h5 className='text-[#088178] text-[1rem] font-bold tracking-[1px]' >{name}</h5>
    <div className='flex'>
        <AiFillStar className='text-[.8rem] text-[#ffd700]'/>
        <AiFillStar className='text-[.8rem] text-[#ffd700]'/>
        <AiFillStar className='text-[.8rem] text-[#ffd700]'/>
        <AiFillStar className='text-[.8rem] text-[#ffd700]'/>
        <AiFillStar className='text-[.8rem] text-[#ffd700]'/>
    </div>
    <h4 className='text-[#088178] text-[1.2rem] font-semibold'>{`$${price}`}</h4>
    <div className="cart cursor-pointer bg-[#088178] px-[9px] py-[9px] rounded-full absolute right-0 bottom-0" onClick={handleAddToCArt}>
        <div><BsCart4 className='text-white text-[1.1rem]'/></div>
    </div>
</div>
</div>
  )
}

export default Product