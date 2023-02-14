import { removeCart, subtotalPrice } from '@/store/cartSlice';
import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import { TiDelete} from "react-icons/ti";
import { useDispatch } from 'react-redux';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import {toast} from 'react-hot-toast'

type Props = {}

const CartRow = ( { price, id, name, totalPrice, quantity, img }: any ) => {
  
  // console.log('row', totalPrice)

  const [ qty, setQty ] = useState( quantity )

  const dispatch = useDispatch()


  
  const handleChange = (e: any ) => {
    if (e.target.value < 1) e.target.value = 1
    setQty( Number( e.target.value ) )
  }

  useEffect(() => {
    dispatch(subtotalPrice({id, qty}))
    
  }, [qty])

  const handleClick = (id: any) => {
    dispatch(removeCart(id))
    // console.log(removeCart(id))
    toast.success(`${name} removed from Cart`, {
      className: 'text-sm',
    })
  }

  
  //confirm delete function
  const confirmDelete = (id: any) => {
    confirmAlert({
      title: "Remove Product",
      message: "Are you sure you want to remove this product from your cart.",
      buttons: [
        {
          label: "Remove",
          onClick: () => handleClick(id),
        },
        {
          label: "Cancel",
          // onClick: () => alert('Click No')
        },
      ],
    });
  };

  return (
    <tr>
    <td className='flex justify-center items-center text-[1.3rem] font-semibold py-2 md:ml-14'>
        <TiDelete className='cursor-pointer'  onClick={() => confirmDelete(id)}/>
        {/* <i onClick={handleClick} className='bi bi-x-circle delete-icon'></i> */}
        </td>
    <td className=' td-img text-[1rem] font-semibold py-2 tracking-[1px]'><Image loader={() => img} src={img} unoptimized={true} width={100} height={50} className='w-[50px] inline-flex' alt="" /></td>
    <td className='text-[1rem] font-semibold py-2 tracking-[1px]'>{name}</td>
    <td className='text-[1rem] font-semibold py-2 tracking-[1px]'>{price}</td>
    <td className='td-inputs flex justify-center items-center text-[1rem] font-semibold py-2 tracking-[1px]'>
        <input type="number" className='flex justify-center items-center p-1 w-[40px] border' value={qty} onChange={handleChange} />
        </td>
    <td className='text-[1rem] font-semibold py-2 tracking-[1px]'>{totalPrice}</td>
  </tr>
  )
}

export default CartRow