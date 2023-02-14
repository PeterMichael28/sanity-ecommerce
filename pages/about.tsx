
import GenBanner from '@/components/GenBanner';
import Image from 'next/image';
import React from 'react'
import Service from '@/components/Service'

type Props = {}

const about = (props: Props) => {
  return (
    <>
    <main>
        <GenBanner one='#KnowUs' two='Get to know more about us' clas='about-banner' />
        <section className="sec-t sec-p flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-1/2 mx-auto mt-1 mb-9 md:mr-9 md:mb-0 md:mt-0">
            <Image src='/assets/about/a6.jpg' alt="logo" width={100} height={100} className='w-full' />
        </div>
        <div className="w-full md:w-1/2">
            <h1 className='text-[2.4rem] md:text-[3rem] my-2 text-black/70 font-semibold'>Who We Are?</h1>
            <p className='text-sm md:text-base my-2' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur blanditiis temporibus, laudantium voluptas nam facere eaque labore laboriosam beatae ipsam pariatur delectus! Numquam officiis dolores consectetur magni iusto quae asperiores voluptate nihil sunt, deserunt dolorem temporibus aperiam esse nostrum corporis adipisci autem? Vero vel mollitia, eum rerum maxime ab quibusdam.</p>

            <p>Lorem ipsum dolor sit amet ctur  officiis eius animi vero earum, libero eveniet omnis ab provident.l Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium eum, necessitatibus molestias et dolor quod!</p>
            <br></br>

            <div className="marquee">
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Molestiae quod exercitationem aliquid consectetur ullam? Tempora vitae quam natus
                     ab officia quis maxime esse. Omnis, recusandae.
                </p>
            </div>
               
        </div>
        </section>
        <section className="sec-t sec-p text-center">
        <h2 className='text-[2rem] md:text-[2.5rem] font-semibold'>Download Our <a href="#/">App</a></h2>
        <div className="w-full md:w-[70%] px-2 mt-4 mx-auto">
            <video autoPlay muted loop src='/assets/about/1.mp4' className='w-full rounded-3xl h-full'></video>
        </div>
    </section>
    <Service />

    </main>
    </>
  )
}

export default about