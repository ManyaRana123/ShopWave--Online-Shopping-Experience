function Header(){
    return(
        <>
        <header className="fixed top-0 left-0 right-0 z-50 opacity-95">
              <div className="mx-auto flex h-16 items-center justify-between px-4 lg:px-40 bg-white shadow-sm">
              <div className="flex gap-3 items-center">
                <div className="h-8 w-8 rounded-lg flex justify-center items-center bg-gradient-to-r from-blue-600 to-purple-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-store h-5 w-5 text-white"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path><path d="M2 7h20"></path><path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"></path>
                    </svg>
                    </div>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-xl font-bold">ShopWave</div>
              </div>
              <div className="flex gap-10">
                <a href="/" className="text-sm font-medium text-gray-500 hover:text-blue-600">Home</a>
                <a href="/cart" className="text-sm font-medium text-gray-500 hover:text-blue-600">Cart</a>
              </div>
              <div className="flex gap-10">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon h-4 w-4"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
                    </button>
                <a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart h-4 w-4"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                    </a>
              </div>
              </div>
        </header>
        </>
    )
}



export default Header