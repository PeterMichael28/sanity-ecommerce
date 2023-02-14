import Image from "next/image";
import React from "react";


const Features = () => {
    return ( 
        <section id="services" className="flex justify-center items-center flex-wrap mt-14">
        <div className="card flex flex-col justify-center items-center rounded-md shad ">
            <Image className="w-100" width={200} height={200} src='/assets/features/f1.png' alt="f1" />
            <h4 className="bg-[#fddde4] service-h4">Free Shipping</h4>
        </div>
        <div className="card flex flex-col justify-center items-center rounded-md shad ">
            <Image className="w-100" width={200} height={200} src='/assets/features/f2.png' alt="f1" />
            <h4 className="bg-lime-100 service-h4">Online Order</h4>
        </div>
        <div className="card flex flex-col justify-center items-center rounded-md shad ">
            <Image className="w-100" width={200} height={200} src='/assets/features/f3.png' alt="f1" />
            <h4 className="bg-red-100 service-h4"> Save Money</h4>
        </div>
        <div className="card flex flex-col justify-center items-center rounded-md shad ">
            <Image className="w-100" width={200} height={200} src='/assets/features/f4.png' alt="f1" />
            <h4 className="bg-orange-100 service-h4">Promotions</h4>
        </div>
        <div className="card flex flex-col justify-center items-center rounded-md shad ">
            <Image className="w-100" width={200} height={200} src='/assets/features/f5.png' alt="f1" />
            <h4 className="bg-yellow-100 service-h4">Happy Sell</h4>
        </div>
        <div className="card flex flex-col justify-center items-center rounded-md shad ">
            <Image className="w-100" width={200} height={200} src='/assets/features/f6.png' alt="f1" />
            <h4 className="bg-teal-100 service-h4">24/7 Support</h4>
        </div>
            
    </section>
     );
}
 
export default Features;