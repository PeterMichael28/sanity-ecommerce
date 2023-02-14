import React from 'react'

type Props = {}

const HomeBanner3 = (props: Props) => {
  return (
    <section id="banner3" className="sec-p flex-col sm:flex-row flex items-center justify-center flex-wrap">
    <article className="flex items-start justify-center flex-col w-[100%] md:w-[30%] h-[30vh] text-white p-3 m-1 sm:mx-1 bg-[url('/assets/banner/b7.jpg')] bg-no-repeat bg-center bg-cover">
        <h1 className='my-1 font-[600] text-[2rem]'>Seasonal Sale</h1>
        <h4 className='my-1 font-semibold text-[1rem]'>winter collection - 50% 0ff</h4>
    </article>
    <article className="flex items-start justify-center flex-col w-[100%] md:w-[30%] h-[30vh] text-white p-3 m-1 sm:mx-1 flex-grow bg-[url('/assets/banner/b4.jpg')] bg-no-repeat bg-center bg-cover">
        <h1 className='my-1 font-[600] text-[2rem]'>New Footwear Collection</h1>
        <h4 className='my-1 font-semibold text-[1rem]'>Spring / Summer 2022</h4>
    </article>
    <article className="flex items-start justify-center flex-col w-[100%] md:w-[30%] h-[30vh] text-white p-3 m-1 sm:mx-1 bg-[url('/assets/banner/b18.jpg')] bg-no-repeat bg-center bg-cover">
        <h1 className='my-1 font-[600] text-[2rem]'>t-Shirts</h1>
        <h4 className='my-1 font-semibold text-[1rem]'>New Vintages Collections</h4>
    </article>
</section>
  )
}

export default HomeBanner3