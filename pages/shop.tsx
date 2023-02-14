
import GenBanner from '@/components/GenBanner';
import Product from '@/components/Product';
import React from 'react'
import { client, urlFor } from '@/lib/Client';

type Props = {}

const shop = ({products}: any) => {
  return (
    <>
   <main>
    <GenBanner one='#stayhome' two='Save more with coupons & up to 70% off' clas='shop'/>
    <div className="products w-full flex justify-center items-center flex-wrap mt-3 sec-p sec-t">
      
          { products.map( ( product: any, i: number ) => {
            return ( <Product product={ product } key={ i } /> );
          } )}
    
    </div>
   </main>
   </>
  )
}

export default shop;

export async function getServerSideProps() {
  
  const query = `*[_type == "products"]`;
  const products = await client.fetch(query);
return {
  props: {
    products
  }
}
}