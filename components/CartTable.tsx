import { selectItemsList } from '@/store/cartSlice';
import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux';
import CartRow from './CartRow';

type Props = {}

const CartTable = (props: Props) => {

  const itemsList = useSelector( selectItemsList )

  return (
    <div id='table' className='overflow-x-auto'>
      { itemsList.length < 1 ? ( <p className='text-center text-lg font-semibold mt-8 w-full'>No Items in your Cart yet, Please go to <Link href='/shop' className='text-[#088178] underline'>Shop</Link> to add an Item</p> ) :
      <table className="tabl sec-t border-collapse table-fixed whitespace-nowrap w-full">    
    <thead className='border border-[#e2e9e1] border-l-0 border-r-0 p-2'>
      <tr className='my-2 '>
        <th className='py-3 text-[1rem] tracking-[1px]'>REMOVE</th>
        <th className='py-3 text-[1rem] tracking-[1px]'>IMAGE</th>
        <th className='py-3 text-[1rem] tracking-[1px]'>PRODUCT</th>
        <th className='py-3 text-[1rem] tracking-[1px]'>PRICE</th>
        <th className='py-3 text-[1rem] tracking-[1px]'>QUANTITY</th>
        <th className='py-3 text-[1rem] tracking-[1px]'>SUBTOTAL</th>
      </tr>
        </thead>
          <tbody>
            {
              itemsList.map( ( item: any ) => {
                return <CartRow key={ item.id } id={ item.id } img={ item.img } name={ item.name } quantity={ item.quantity } totalPrice={ item.totalPrice } price={ item.price } />;
              } ) }
          </tbody>
        
        
  </table>
            }
    </div>
  )
}

export default CartTable