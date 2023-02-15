import Link from 'next/link';

const Hero = () => {
    return ( 
        <section id="hero" className="flex flex-col justify-center w-full bg-[url('/assets/hero4.png')] bg-no-repeat bg-center bg-cover px-3 md:px-16 md:mt-14 h-[100vh] ">
            <h4 className='text-[1.1rem] text-black/70 mb-1 font-semibold tracking-[2px]'>Trade-in-offer</h4>
            <h2 className='hero-h2'>Super value deals</h2>
            <h2 className="text-[#088178] hero-h2">On all products</h2>
            <p className='text-[1rem]  text-black/70 my-[3px] tracking-[1px] font-semibold'>Save more with coupons and up to 70% off!</p>
            <Link href="/shop" className="hero-btn text-[#088178] my-[9px] text-[1.1rem] w-[180px] font-semibold flex justify-center items-center py-[10px] px-[20px]">Shop now</Link>
        </section>
     );
}
 
export default Hero;