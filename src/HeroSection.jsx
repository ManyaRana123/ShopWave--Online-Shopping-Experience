function HeroSection(){
    return (
        <>
        <section>
            <div className="px-10 py-20 mt-16 flex justify-center items-center flex-col gap-10 bg-gradient-to-r from-purple-100 via-blue-100 to-purple-100">
                <div className="flex gap-2 justify-center items-center bg-blue-200 h-8 p-2 rounded-full">
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokewidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide text-blue-600 lucide-sparkles h-4 w-4"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg></div>
                    <div className="text-blue-600 text-sm font-medium ">Fresh arrivals every week</div>
                </div>
                <h1 className="text-6xl font-bold text-center w-200">Discover products you'll <span className="text-blue-600">love</span></h1>
                <p className="text-lg text-gray-600 text-center">Curated essentials from clothing to electronics — shop the modern way.</p>
                <form className="w-full flex justify-center">
                    <div className="relative w-full max-w-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                        <input className="w-full bg-white rounded-full py-2 pl-12 pr-4 shadow-xl" type="text" placeholder="Search products..." />
                    </div>
                </form>
            </div>
        </section>
        </>
    )

}

export default HeroSection;