
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useState, useEffect } from 'react';
import Hero from '@/components/Hero'
import Service from '@/components/Service'
import HomeBanner1 from '@/components/HomeBanner1';
import NewProducts from '@/components/NewProducts';
import HomeBanner2 from '@/components/HomeBanner2';
import HomeBanner3 from '@/components/Homebanner3';
import { client, urlFor } from '@/lib/Client';
import { useDispatch, useSelector } from 'react-redux';
import { addItemsList, selectItemsList } from '@/store/cartSlice';



const inter = Inter({ subsets: ['latin'] })

export default function Home( { products }: any ) {
  
  const itemsList = useSelector( selectItemsList );

  const dispatch = useDispatch()

  // useEffect( () => {
  //   localStorage.setItem( 'cart', JSON.stringify( itemsList ) );
  //   // console.log(itemsList)
  // }, [ itemsList ] );
  // // console.log(products)


  
  
  
  // useEffect( () => {
  //   const it = JSON.parse( localStorage.getItem( 'cart' ) || '' )
  //   if ( it.length > 0 ) {
      
  //     dispatch( addItemsList(it))
  //   }
  // }, [itemsList])

  

  
  

  return (
    <>
      
      <main className=''>
        <Hero />
        <Service />
        <HomeBanner1 />
        <NewProducts products={products}/>
        <HomeBanner2 />
        <HomeBanner3 />
      </main>
    </>
  )
}

export async function getServerSideProps() {
 

    const query = `*[_type == "products"]`;
    const products = await client.fetch(query);
  return {
    props: {
      products
    }
  }
}
