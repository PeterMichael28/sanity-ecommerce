import Link from 'next/link';
import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { BsBagCheckFill } from 'react-icons/bs';
import { resetItemsList } from "@/store/cartSlice";
import { fireworks } from "@/lib/utils";


const Success = () => {
    const dispatch = useDispatch()

    

    useEffect( () => {
        fireworks()   
    }, [])

  return (
    <main className='bg-gray-400 w-[90%] max-w-[800px] mx-auto mt-24 rounded-lg'>
          <div className='px-4 py-8 md:p-8 flex flex-col justify-center items-center'>
              <p>
                  <BsBagCheckFill className="text-[2.5rem] text-[green]" />
              </p>
              <h2 className="font-bold text-[1.1rem] mt-3">Thank You for your order!</h2>
              <p className="text-sm font-semibold">Check your email inbox for your receipt.</p>
              <p className="mt-8 font-semibold text-center">
                  if you have any questions, please email <br />
                  <a href="mailto:enitanpeters28@gmail.com" className="text-red-600">enitanpeters28@gmail.com</a>
              </p>
              <Link href='/' className="mt-8" >
                  <button className="w-[250px] sm:w-[300px] py-3 rounded-lg text-center bg-red-600 text-white text-[1.1rem]">Continue Shopping</button>
              </Link>
        </div>
    </main>
  )
}

export default Success