import CartCoupons from '@/components/CartCoupons';
import { client } from '@/lib/Client';
import React from 'react'
import CartTable from '../components/CartTable';
import GenBanner from '../components/GenBanner';




type Props = {}

const Cart = () => {
  // console.log(book)
  // console.log(product)
  return (
    <main className='w-full overflow-hidden'>
          <GenBanner one="#Cart" two='Add your coupon code & SAVE up to 70%' clas='about-banner' />
          <CartTable />
          <CartCoupons />
    </main>
  )
}

export default Cart

// export async function getServerSideProps() {
//   const query = '*';
//   const products = await client.fetch(`*[_type == "products"]`);

//   return {
//     props: {
//       book: 'ok',
//       product: products
//     }
//   }
// }
