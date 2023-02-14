import Link from 'next/link';
import React from 'react'


type Props = {}

function HomeBanner2({}: Props) {
  return (
    <section id="banner2" className="sec-p flex-col sm:flex-row flex items-center justify-center">
    <article className="flex items-start justify-center flex-col w-full sm:w-[50%] m-[10px] sm:m-[15px] p-[20px] text-white h-[50vh] bg-[url('/assets/banner/b17.jpg')] bg-no-repeat bg-center bg-cover ">
        <span className='text-[1.1rem] font-semibold'>crazy deals</span>
        <h2 className='text-[2.2rem] my-[5px] tracking-[2px]'>buy 1 get 1 free</h2>
        <p className='text-[1.1rem] my-[5px] tracking-[1px] font-semibold'>The best classics dress is on sale at cara</p>
        <Link href="/" className='text-[1.1rem] py-[14px] px-[20px] border border-white font-semibold my-[5px] transition-all duration-500 text-white outline-none hover:bg-[#088178] hover:border-none'>Learn More</Link>
    </article>
    <article className="flex items-start justify-center flex-col bg-[url('/assets/banner/b10.jpg')] bg-no-repeat bg-center bg-cover w-full sm:w-[50%] m-[10px] sm:m-[15px] p-[20px] text-white h-[50vh]">
        <span className='text-[1.1rem] font-semibold'>crazy deals</span>
        <h2 className='text-[2.2rem] my-[5px] tracking-[2px]'>buy 1 get 1 free</h2>
        <p className='text-[1.1rem] my-[5px] tracking-[1px] font-semibold'>The best classics dress is on sale at cara</p>
        <Link href="/" className='text-[1.1rem] py-[14px] px-[20px] border border-white font-semibold my-[5px] transition-all duration-500 text-white outline-none hover:bg-[#088178] hover:border-none'>Learn More</Link>
    </article>
      </section>
      
  )
}

export default HomeBanner2