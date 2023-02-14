import getStripe from '@/lib/getStripe';
import { selectItemsList } from '@/store/cartSlice';
import React from 'react'
import { useSelector } from 'react-redux';
import {toast} from 'react-hot-toast'
type Props = {}

const CartCoupons = (props: Props) => {

    const itemsList = useSelector(selectItemsList)
    let all = 0;

    itemsList.forEach((items : any) => {
        all += Number(items.totalPrice)
    } )
    
    const handleCheckout = async () => {
        const stripe = await getStripe()

        const response: Response = await fetch('/api/stripe', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(itemsList)
        } )
        
        if ( response.status === 500 ) return;

        const data = await response.json()
        console.log(data)
        // console.log(itemsList)
        toast.loading('Redirecting')

        stripe.redirectToCheckout({sessionId: data.id})
    }
  return (
    <article id="coupons" className='sec-t sec-p w-full flex items-start justify-center flex-wrap flex-col md:flex-row'>
    <div className="coupons w-full md:w-[43%] mb-8 md:mb-0 md:mr-10">
        <h5 className='text-[1.4rem] md:text-[1.7rem] my-2 font-semibold'>Apply Coupons</h5>
        <form className='w-full'>
            <input type="tel" placeholder='Enter your coupon number' className='w-[80%] p-1 outline-none border border-[#e2e9e1]' />
            <button className='w-[20%] p-1 bg-[#088178] border border-[#088178] text-white outline-none transition-all duration-300 hover:bg-transparent hover:text-[#088178]'>Apply</button>
        </form>
    </div>
    <div className="totals w-full md:w-[50%] border border-[#e2e9e1] h-auto p-4 ">
        <h5 className='text-[1.4rem] md:text-[1.7rem] my-2 font-semibold'>Cart Totals</h5>
        <div>
            <table className='w-full'>
                <tbody>
                    <tr>
                        <td className='w-1/2 border border-[#d5d9d4] p-1 '>Cart total</td>
                        <td className='w-1/2 border border-[#d5d9d4] p-1'>{all}</td>
                    </tr>
                    <tr>
                        <td className='w-1/2 border border-[#d5d9d4] p-1'>Shipping</td>
                        <td className='w-1/2 border border-[#d5d9d4] p-1'>Free</td>
                    </tr>
                    <tr>
                        <td className='w-1/2 border border-[#d5d9d4] p-1'><strong>Total</strong></td>
                        <td className='w-1/2 border border-[#d5d9d4] p-1'>{all}</td>
                    </tr>
                </tbody>
            </table>
            <button className='p-2 mt-2 bg-[#088178] border border-[#088178] text-white outline-none transition-all duration-300 hover:bg-transparent hover:text-[#088178]' onClick={handleCheckout}>Proceed to checkout</button>
        </div>
    </div>
   </article>
  )
}

export default CartCoupons