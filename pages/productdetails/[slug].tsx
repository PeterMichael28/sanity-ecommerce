import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import { client, urlFor } from '@/lib/Client';
import { GetStaticPaths } from 'next';
import Product from '@/components/Product';
import { addToCart, removeCart, selectItemsList, subtotalPrice } from '@/store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import {toast} from 'react-hot-toast'

type Props = {}

const ProductDetails = ( { product, moreProducts }: any ) => {
  
  
  const itemsList = useSelector( selectItemsList )
  const [currentProduct, setCurrentProduct] = useState(1)

  const { details, name, brand, image, price, _id:id } = product
  
  useEffect( () => {
    if ( itemsList.length > 0 ) {
      const existingItems = itemsList?.find( ( item: any ) => item.id === id );
      setCurrentProduct( existingItems.quantity)
    
    }
  }, [id, itemsList])



  const [ qty, setQty ] = useState( currentProduct)


  
  const handleChange = (e: any ) => {
    if (e.target.value < 1) e.target.value = 1
    setQty( Number( e.target.value ) )
  }

  useEffect(() => {
    dispatch(subtotalPrice({id, qty}))
    
  }, [qty ] )
  
  const dispatch = useDispatch();
  const handleAddToCArt = async () => {
    await dispatch( addToCart( product ) )
   
    toast.success( `${ product.name } added Cart`, {
      className: 'text-sm',
    })
  }


  
  // console.log( ok )
  const src = urlFor(image && image[0]).url()
  return (
    <>
    <section className='flex flex-col md:flex-row justify-center items-center md:space-x-5 px-5 mt-20'>
      <div className='w-full xs:w-[80%] md:w-[30%] p-3 h-[350px]'>
        <Image loader={() => src} src={src} unoptimized={true} priority alt="" className='w-full h-full rounded-lg' width={200} height={200} />
      </div>
        <div className='w-full xs:w-[80%] md:w-[50%] space-y-2 px-3 md:pr-10'>
            <span className='text-[.7rem] font-semibold'>{brand}</span>
            <p className='text-[1.2rem] font-semibold'>{name}</p>
            <h2 className='font-bold text-[1.8rem]'>{price}</h2>
            <select name="size" id="size" className='w-[120px] border border-black/50 focus:border-black/50 focus:outline-none  p-1 text-[.8rem] font-semibold text-black/80'>
                <option value="select">select size</option>
                <option value="s">Small</option>
                <option value="md" className='text-[.9rem]'>Medium</option>
                <option value="lg" className='text-[1rem]'>Large</option>
                <option value="xl" className='text-[1.1rem]'>Extra Large</option>
            </select>
            <div className='flex space-x-3 items-center'>
                  <input type="number" className='w-[40px] border border-black/50 text-[.8rem] font-semibold p-1' value={qty} onChange={handleChange}/>
                 <button className='text-[.7rem] p-2 text-white bg-[#088178] transition-all duration-500 hover:text-[#088178] cursor-pointer hover:bg-transparent hover:border hover:border-[#088178] font-medium' onClick={handleAddToCArt}>Add To Cart</button> 
            </div>
        <div>
          <h2 className='text-[1.4rem] mb-2 font-semibold'>Product Details</h2>
          <p className='text-[.8rem] text-black/70 font-medium'>{details}</p>
            </div>
        </div>
    </section>

      <article className='mt-20 sec-p sec-t'>
        <h3 className='text-[1.4rem] font-bold'>More Products like this...</h3>
        <div className='products w-full flex justify-center items-center flex-wrap mt-3'>
        { moreProducts.map( ( product: any, i: number ) => {
            return ( <Product product={ product } key={ i } /> );
          } )}
        </div>
      </article>
    </>
  )
}

export default ProductDetails;

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}



export async function getStaticProps({params:{slug}}: any) {
 
  const query = `*[_type == 'products' && slug.current == '${slug}'][0]`;
  const productquery = `*[_type == 'products'][0...6]`;
  const product = await client.fetch( query );
  const moreProducts = await client.fetch( productquery );

  
return {
  props: {
    product,
    moreProducts
  }
}
}