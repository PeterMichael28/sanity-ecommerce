import React from 'react'

type Props = {
    one: string
    two:string
    clas: string
}

const GenBanner = ({one, two, clas}: Props) => {
  return (
    <section id="gen-banner" className={`${clas} w-full h-[44vh] flex flex-col justify-center items-center text-white`}>
    <h1 className='text-[2.8rem] tracking-[3px] mx-auto mt-[2rem]'>{one}</h1>
    <p className='text-[.9rem] tracking-[1.5px] text-white/90'>{two}</p>
</section>
  )
}

export default GenBanner