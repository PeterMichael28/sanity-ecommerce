import Link from "next/link";


const HomeBanner1 = () => {
    return ( 
        <section id="banner1" className="bg-center p-[10px] py-[20px] sm:py-0 h-[35vh] bg-no-repeat w-full flex justify-center items-center flex-col text-white bg-[url('/assets/banner/b2.jpg')] mt-14">
        <h5 className="text-[1rem] font-semibold mx-auto my-[5px]">Repair Services</h5>
        <h2 className="text-[1.6rem] text-center sm:text-[2.3rem] font-semibold mx-auto my-[10px]">Up to <span className="text-[#ff0101]">70% off</span> - All t-Shirts & Accessories</h2>
        <Link href="/shop" className="py-[10px] px-[20px] text-black bg-white mx-auto my-[5px] transition-all hover:bg-[#088178] hover:text-white rounded-md font-semibold duration-500">Explore More</Link>
        </section>
     );
}
 
export default HomeBanner1;