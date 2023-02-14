import { client, urlFor } from '@/lib/Client';
import React from 'react'
import { MdPets } from 'react-icons/md';
import Product from './Product';





const NewProducts = ( { products}: any) => {
  
  return (
    <section id="products" className="sec-p sec-t w-full flex justify-center items-center flex-col">
      
    <h1 className="sec-title">New Products</h1>
    <p>Summer Collection New Model Design</p>
      <div className="products w-full flex justify-center items-center flex-wrap mt-3">
        { products.map( ( product: any, i: number ) => {
          return (<Product product={product} key={i} />)
        })}
    </div>
</section>
  )
}

export default NewProducts;



