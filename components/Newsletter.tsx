const Newsletter = () => {

    return (
        <section id="news-letter" className="sec-p sec-t flex flex-col justify-center h-auto p-4 md:p-8 md:flex-row md:justify-between md:items-center text-white md:h-[25vh] bg-[rgb(3,3,24)]">
        <div className="w-[100%] md:w-[46%]">
            <h1 className="font-semibold text-[1.3rem] tracking-[1px] my-[5px] md:text-[1.9rem]">Sign Up For Newsletters</h1>
            <p className="font-semibold tracking-[2px] my-1 text-white/70 text-sm">Get E-mail updates about latest shop and <span className="text-[rgb(227, 227, 7)]">special offers</span></p>
        </div>
        <form className="flex justify-center items-center w-[100%] md:w-[46%] my-4 md:my-0">
            <input type="text" placeholder="Your email address" className="w-[70%] border-none outline-none p-3 placeholder:text-black/70 text-sm tracking-[1.5px]" />
            <button className="border-none outline-none p-3 bg-[#088178] text-white text-sm w-[30%]">Sign Up</button>
        </form>
    </section>
    )
}

export default Newsletter