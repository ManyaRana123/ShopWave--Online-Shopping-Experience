function CategoriesSection() {
    return (
        <>
           <section className="px-20 py-15">
             <div className="flex gap-2 items-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide text-gray-500 lucide-sliders-horizontal h-4 w-4"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line></svg>
                <span className="text-gray-500 text-sm font-medium">Filter by Category</span>
             </div>
             <div className="flex gap-2">
                <button className="hover:bg-blue-500 py-2 px-4 border border-gray-300 text-sm font-medium rounded-full">All</button>
                <button className="hover:bg-blue-500 py-2 px-4 border border-gray-300 text-sm font-medium rounded-full">Electronics</button>
                <button className="hover:bg-blue-500 py-2 px-4 border border-gray-300 text-sm font-medium rounded-full">Jewelery</button>
                <button className="hover:bg-blue-500 py-2 px-4 border border-gray-300 text-sm font-medium rounded-full">Men's Clothing</button>
                <button className="hover:bg-blue-500 py-2 px-4 border border-gray-300 text-sm font-medium rounded-full">Women's Clothing</button>
             </div>
             <div className="grid grid-cols-4 grid-rows-5 gap-8 p-7 mt-6">
                {/* Men's Clothing */}
                    <article className="bg-white rounded-lg p-4 shadow-lg transition-transform hover:scale-105">
                        <div className="flex flex-col items-start gap-3">
                            <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium">Men's Clothing</div>
                            <div className="flex justify-center items-center h-auto w-full">
                            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" loading="lazy" className="h-60 w-auto object-contain transition-smooth group-hover:scale-110"></img>
                            </div>
                        </div>
                        <div className="mt-4 space-y-3">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="h-4 w-4 text-yellow-600"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                <span>3.9</span>
                                <span>(120)</span>
                            </div>
                            <h3 className="text-base font-semibold">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h3>
                            <div className="flex items-center justify-between">
                                <span className="text-lg text-blue-600 font-semibold">$109.95</span>
                                <button className="bg-blue-600 text-white py-2 px-3 rounded-full text-sm font-medium">View</button>
                            </div>
                        </div>
                    </article>
                     <article className="bg-white rounded-lg p-4 shadow-lg transition-transform hover:scale-105">
                        <div className="flex flex-col items-start gap-3">
                            <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium">Men's Clothing</div>
                            <div className="flex justify-center items-center h-auto w-full">
                            <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png" alt="Mens Casual Premium Slim Fit T-Shirts " loading="lazy" class="h-60 w-auto object-contain transition-smooth group-hover:scale-110"></img>
                            </div>
                        </div>
                        <div className="mt-4 space-y-3">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="h-4 w-4 text-yellow-600"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                <span>4.1</span>
                                <span>(259)</span>
                            </div>
                            <h3 className="text-base font-semibold">Mens Casual Premium Slim Fit T-Shirts</h3>
                            <div className="flex items-center justify-between">
                                <span className="text-lg text-blue-600 font-semibold">$22.30</span>
                                <button className="bg-blue-600 text-white py-2 px-3 rounded-full text-sm font-medium">View</button>
                            </div>
                        </div>
                    </article>
                     <article className="bg-white rounded-lg p-4 shadow-lg transition-transform hover:scale-105">
                        <div className="flex flex-col items-start gap-3">
                            <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium">Men's Clothing</div>
                            <div className="flex justify-center items-center h-auto w-full">
                           <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png" alt="Mens Cotton Jacket" loading="lazy" class="h-60 w-auto object-contain transition-smooth group-hover:scale-110"></img>
                            </div>
                        </div>
                        <div className="mt-4 space-y-3">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="h-4 w-4 text-yellow-600"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                <span>4.7</span>
                                <span>(500)</span>
                            </div>
                            <h3 className="text-base font-semibold">Mens Cotton Jacket</h3>
                            <div className="flex items-center justify-between">
                                <span className="text-lg text-blue-600 font-semibold">$55.99</span>
                                <button className="bg-blue-600 text-white py-2 px-3 rounded-full text-sm font-medium">View</button>
                            </div>
                        </div>
                    </article>
                     <article className="bg-white rounded-lg p-4 shadow-lg transition-transform hover:scale-105">
                        <div className="flex flex-col items-start gap-3">
                            <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium">Men's Clothing</div>
                            <div className="flex justify-center items-center h-auto w-full">
                            <img src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png" alt="Mens Casual Slim Fit" loading="lazy" class="h-60 w-auto object-contain transition-smooth group-hover:scale-110"></img>
                            </div>
                        </div>
                        <div className="mt-4 space-y-3">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="h-4 w-4 text-yellow-600"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                <span>4.1</span>
                                <span>(259)</span>
                            </div>
                            <h3 className="text-base font-semibold">Mens Casual Slim Fit</h3>
                            <div className="flex items-center justify-between">
                                <span className="text-lg text-blue-600 font-semibold">$22.30</span>
                                <button className="bg-blue-600 text-white py-2 px-3 rounded-full text-sm font-medium">View</button>
                            </div>
                        </div>
                    </article>
                    {/*Jewelry*/}
                     <article className="bg-white rounded-lg p-4 shadow-lg transition-transform hover:scale-105">
                        <div className="flex flex-col items-start gap-3">
                            <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium">Jewelry</div>
                            <div className="flex justify-center items-center h-auto w-full">
                           <img src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png" alt="John Hardy Women's Legends Naga Gold &amp; Silver Dragon Station Chain Bracelet" loading="lazy" class="h-60 w-auto object-contain transition-smooth group-hover:scale-110"></img>
                            </div>
                        </div>
                        <div className="mt-4 space-y-3">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="h-4 w-4 text-yellow-600"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                <span>4.9</span>
                                <span>(600)</span>
                            </div>
                            <h3 className="text-base font-semibold">John Hardy Women's Legends Naga Gold &amp; Silver Dragon Station Chain Bracelet</h3>
                            <div className="flex items-center justify-between">
                                <span className="text-lg text-blue-600 font-semibold">$600.95</span>
                                <button className="bg-blue-600 text-white py-2 px-3 rounded-full text-sm font-medium">View</button>
                            </div>
                        </div>
                    </article>
                     <article className="bg-white rounded-lg p-4 shadow-lg transition-transform hover:scale-105">
                        <div className="flex flex-col items-start gap-3">
                            <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium">Jewelry</div>
                            <div className="flex justify-center items-center h-auto w-full">
                            <img src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png" alt="Solid Gold Petite Micropave " loading="lazy" class="h-60 w-auto object-contain transition-smooth group-hover:scale-110"></img>
                            </div>
                        </div>
                        <div className="mt-4 space-y-3">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="h-4 w-4 text-yellow-600"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                <span>4.1</span>
                                <span>(259)</span>
                            </div>
                            <h3 className="text-base font-semibold">Solid Gold Petite Micropave</h3>
                            <div className="flex items-center justify-between">
                                <span className="text-lg text-blue-600 font-semibold">$500.95</span>
                                <button className="bg-blue-600 text-white py-2 px-3 rounded-full text-sm font-medium">View</button>
                            </div>
                        </div>
                    </article>
                     <article className="bg-white rounded-lg p-4 shadow-lg transition-transform hover:scale-105">
                        <div className="flex flex-col items-start gap-3">
                            <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium">Jewelry</div>
                            <div className="flex justify-center items-center h-auto w-full">
                            <img src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png" alt="White Gold Plated Princess" loading="lazy" class="h-60 w-auto object-contain transition-smooth group-hover:scale-110"></img>
                            </div>
                        </div>
                        <div className="mt-4 space-y-3">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="h-4 w-4 text-yellow-600"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                <span>4.1</span>
                                <span>(999)</span>
                            </div>
                            <h3 className="text-base font-semibold">White Gold Plated Princess</h3>
                            <div className="flex items-center justify-between">
                                <span className="text-lg text-blue-600 font-semibold">$529.95</span>
                                <button className="bg-blue-600 text-white py-2 px-3 rounded-full text-sm font-medium">View</button>
                            </div>
                        </div>
                    </article>
                     <article className="bg-white rounded-lg p-4 shadow-lg transition-transform hover:scale-105">
                        <div className="flex flex-col items-start gap-3">
                            <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium">Jewelry</div>
                            <div className="flex justify-center items-center h-auto w-full">
                            <img src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png" alt="Pierced Owl Rose Gold Plated Stainless Steel Double" loading="lazy" class="h-60 w-auto object-contain transition-smooth group-hover:scale-110"></img>
                            </div>
                        </div>
                        <div className="mt-4 space-y-3">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="h-4 w-4 text-yellow-600"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                <span>4.1</span>
                                <span>(999)</span>
                            </div>
                            <h3 className="text-base font-semibold">Pierced Owl Rose Gold Plated Stainless Steel Double</h3>
                            <div className="flex items-center justify-between">
                                <span className="text-lg text-blue-600 font-semibold">$500.95</span>
                                <button className="bg-blue-600 text-white py-2 px-3 rounded-full text-sm font-medium">View</button>
                            </div>
                        </div>
                    </article>
                    {/*electronics*/}
                     <article className="bg-white rounded-lg p-4 shadow-lg transition-transform hover:scale-105">
                        <div className="flex flex-col items-start gap-3">
                            <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium">Electronics</div>
                            <div className="flex justify-center items-center h-auto w-full">
                           <img src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png" alt="WD 2TB Elements Portable External Hard Drive - USB 3.0 " loading="lazy" class="h-60 w-auto object-contain transition-smooth group-hover:scale-110"></img>
                            </div>
                        </div>
                        <div className="mt-4 space-y-3">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="h-4 w-4 text-yellow-600"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                <span>4.1</span>
                                <span>(999)</span>
                            </div>
                            <h3 className="text-base font-semibold">WD 2TB Elements Portable External Hard Drive - USB 3.0 </h3>
                            <div className="flex items-center justify-between">
                                <span className="text-lg text-blue-600 font-semibold">$1000.95</span>
                                <button className="bg-blue-600 text-white py-2 px-3 rounded-full text-sm font-medium">View</button>
                            </div>
                        </div>
                    </article>
                     <article className="bg-white rounded-lg p-4 shadow-lg transition-transform hover:scale-105">
                        <div className="flex flex-col items-start gap-3">
                            <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium">Electronics</div>
                            <div className="flex justify-center items-center h-auto w-full">
                            <img src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png" alt="SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s" loading="lazy" class="h-60 w-auto object-contain transition-smooth group-hover:scale-110"></img>
                            </div>
                        </div>
                        <div className="mt-4 space-y-3">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="h-4 w-4 text-yellow-600"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                <span>3.9</span>
                                <span>(899)</span>
                            </div>
                            <h3 className="text-base font-semibold">SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s</h3>
                            <div className="flex items-center justify-between">
                                <span className="text-lg text-blue-600 font-semibold">$300.95</span>
                                <button className="bg-blue-600 text-white py-2 px-3 rounded-full text-sm font-medium">View</button>
                            </div>
                        </div>
                    </article>
                     <article className="bg-white rounded-lg p-4 shadow-lg transition-transform hover:scale-105">
                        <div className="flex flex-col items-start gap-3">
                            <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium">Electronics</div>
                            <div className="flex justify-center items-center h-auto w-full">
                           <img src="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png" alt="Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5" loading="lazy" class="h-60 w-auto object-contain transition-smooth group-hover:scale-110"></img>
                            </div>
                        </div>
                        <div className="mt-4 space-y-3">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="h-4 w-4 text-yellow-600"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                <span>3.9</span>
                                <span>(829)</span>
                            </div>
                            <h3 className="text-base font-semibold">Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5</h3>
                            <div className="flex items-center justify-between">
                                <span className="text-lg text-blue-600 font-semibold">$1000.95</span>
                                <button className="bg-blue-600 text-white py-2 px-3 rounded-full text-sm font-medium">View</button>
                            </div>
                        </div>
                    </article>
                     <article className="bg-white rounded-lg p-4 shadow-lg transition-transform hover:scale-105">
                        <div className="flex flex-col items-start gap-3">
                            <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium">Electronics</div>
                            <div className="flex justify-center items-center h-auto w-full">
                           <img src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png" alt="Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin" loading="lazy" class="h-60 w-auto object-contain transition-smooth group-hover:scale-110"></img>
                            </div>
                        </div>
                        <div className="mt-4 space-y-3">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="h-4 w-4 text-yellow-600"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                <span>5.0</span>
                                <span>(829)</span>
                            </div>
                            <h3 className="text-base font-semibold">Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin</h3>
                            <div className="flex items-center justify-between">
                                <span className="text-lg text-blue-600 font-semibold">$1099.95</span>
                                <button className="bg-blue-600 text-white py-2 px-3 rounded-full text-sm font-medium">View</button>
                            </div>
                        </div>
                    </article>
                    {/*Women's Clothing*/}
                     <article className="bg-white rounded-lg p-4 shadow-lg transition-transform hover:scale-105">
                        <div className="flex flex-col items-start gap-3">
                            <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium">Women's Clothing</div>
                            <div className="flex justify-center items-center h-auto w-full">
                          <img src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png" alt="BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats" loading="lazy" class="h-60 w-auto object-contain transition-smooth group-hover:scale-110"></img>
                            </div>
                        </div>
                        <div className="mt-4 space-y-3">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="h-4 w-4 text-yellow-600"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                <span>5.0</span>
                                <span>(829)</span>
                            </div>
                            <h3 className="text-base font-semibold">BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats</h3>
                            <div className="flex items-center justify-between">
                                <span className="text-lg text-blue-600 font-semibold">$1099.95</span>
                                <button className="bg-blue-600 text-white py-2 px-3 rounded-full text-sm font-medium">View</button>
                            </div>
                        </div>
                    </article>
                     <article className="bg-white rounded-lg p-4 shadow-lg transition-transform hover:scale-105">
                        <div className="flex flex-col items-start gap-3">
                            <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium">Women's Clothing</div>
                            <div className="flex justify-center items-center h-auto w-full">
                            <img src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png" alt="Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket" loading="lazy" class="h-60 w-auto object-contain transition-smooth group-hover:scale-110"></img>
                        </div>
                        <div className="mt-4 space-y-3">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="h-4 w-4 text-yellow-600"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                <span>5.0</span>
                                <span>(829)</span>
                            </div>
                            <h3 className="text-base font-semibold">Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket</h3>
                            <div className="flex items-center justify-between">
                                <span className="text-lg text-blue-600 font-semibold">$40.95</span>
                                <button className="bg-blue-600 text-white py-2 px-3 rounded-full text-sm font-medium">View</button>
                            </div>
                        </div>
                        </div>
                    </article>
                     <article className="bg-white rounded-lg p-4 shadow-lg transition-transform hover:scale-105">
                        <div className="flex flex-col items-start gap-3">
                            <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium">Women's Clothing</div>
                            <div className="flex justify-center items-center h-auto w-full">
                           <img src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png" alt="Rain Jacket Women Windbreaker Striped Climbing Raincoats" loading="lazy" class="h-60 w-auto object-contain transition-smooth group-hover:scale-110"></img>
                            </div>
                        </div>
                        <div className="mt-4 space-y-3">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="h-4 w-4 text-yellow-600"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                <span>5.0</span>
                                <span>(1200)</span>
                            </div>
                            <h3 className="text-base font-semibold">Rain Jacket Women Windbreaker Striped Climbing Raincoats</h3>
                            <div className="flex items-center justify-between">
                                <span className="text-lg text-blue-600 font-semibold">$400.95</span>
                                <button className="bg-blue-600 text-white py-2 px-3 rounded-full text-sm font-medium">View</button>
                            </div>
                        </div>
                    </article>
                     <article className="bg-white rounded-lg p-4 shadow-lg transition-transform hover:scale-105">
                        <div className="flex flex-col items-start gap-3">
                            <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium">Women's Clothing</div>
                            <div className="flex justify-center items-center h-auto w-full">
                            <img src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png" alt="MBJ Women's Solid Short Sleeve Boat Neck V " loading="lazy" class="h-60 w-auto object-contain transition-smooth group-hover:scale-110"></img>
                        </div>
                        <div className="mt-4 space-y-3">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="h-4 w-4 text-yellow-600"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                <span>3.9</span>
                                <span>(120)</span>
                            </div>
                            <h3 className="text-base font-semibold">MBJ Women's Solid Short Sleeve Boat Neck V </h3>
                            <div className="flex items-center justify-between">
                                <span className="text-lg text-blue-600 font-semibold">$109.95</span>
                                <button className="bg-blue-600 text-white py-2 px-3 rounded-full text-sm font-medium">View</button>
                            </div>
                        </div>
                        </div>
                    </article>
                     <article className="bg-white rounded-lg p-4 shadow-lg transition-transform hover:scale-105">
                        <div className="flex flex-col items-start gap-3">
                            <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium">Women's Clothing</div>
                            <div className="flex justify-center items-center h-auto w-full">
                            <img src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png" alt="Opna Women's Short Sleeve Moisture" loading="lazy" class="h-60 w-auto object-contain transition-smooth group-hover:scale-110"></img>
                            </div>
                        </div>
                        <div className="mt-4 space-y-3">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="h-4 w-4 text-yellow-600"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                <span>3.9</span>
                                <span>(120)</span>
                            </div>
                            <h3 className="text-base font-semibold">Opna Women's Short Sleeve Moisture</h3>
                            <div className="flex items-center justify-between">
                                <span className="text-lg text-blue-600 font-semibold">$109.95</span>
                                <button className="bg-blue-600 text-white py-2 px-3 rounded-full text-sm font-medium">View</button>
                            </div>
                        </div>
                    </article>
                     <article className="bg-white rounded-lg p-4 shadow-lg transition-transform hover:scale-105">
                        <div className="flex flex-col items-start gap-3">
                            <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium">Women's Clothing</div>
                            <div className="flex justify-center items-center h-auto w-full">
                           <img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png" alt="DANVOUY Womens T Shirt Casual Cotton Short" loading="lazy" class="h-60 w-auto object-contain transition-smooth group-hover:scale-110"></img>
                            </div>
                        </div>
                        <div className="mt-4 space-y-3">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="h-4 w-4 text-yellow-600"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                <span>3.9</span>
                                <span>(120)</span>
                            </div>
                            <h3 className="text-base font-semibold">DANVOUY Womens T Shirt Casual Cotton Short</h3>
                            <div className="flex items-center justify-between">
                                <span className="text-lg text-blue-600 font-semibold">$109.95</span>
                                <button className="bg-blue-600 text-white py-2 px-3 rounded-full text-sm font-medium">View</button>
                            </div>
                        </div>
                    </article>
                    {/*Men's Clothing*/}
                     <article className="bg-white rounded-lg p-4 shadow-lg transition-transform hover:scale-105">
                        <div className="flex flex-col items-start gap-3">
                            <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium">Men's Clothing</div>
                            <div className="flex justify-center items-center h-auto w-full">
                            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" loading="lazy" className="h-60 w-auto object-contain transition-smooth group-hover:scale-110"></img>
                            </div>
                        </div>
                        <div className="mt-4 space-y-3">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="h-4 w-4 text-yellow-600"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                <span>3.9</span>
                                <span>(120)</span>
                            </div>
                            <h3 className="text-base font-semibold">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h3>
                            <div className="flex items-center justify-between">
                                <span className="text-lg text-blue-600 font-semibold">$109.95</span>
                                <button className="bg-blue-600 text-white py-2 px-3 rounded-full text-sm font-medium">View</button>
                            </div>
                        </div>
                    </article>
                     <article className="bg-white rounded-lg p-4 shadow-lg transition-transform hover:scale-105">
                        <div className="flex flex-col items-start gap-3">
                            <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium">Men's Clothing</div>
                            <div className="flex justify-center items-center h-auto w-full">
                            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" loading="lazy" className="h-60 w-auto object-contain transition-smooth group-hover:scale-110"></img>
                            </div>
                        </div>
                        <div className="mt-4 space-y-3">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="h-4 w-4 text-yellow-600"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                <span>3.9</span>
                                <span>(120)</span>
                            </div>
                            <h3 className="text-base font-semibold">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h3>
                            <div className="flex items-center justify-between">
                                <span className="text-lg text-blue-600 font-semibold">$109.95</span>
                                <button className="bg-blue-600 text-white py-2 px-3 rounded-full text-sm font-medium">View</button>
                            </div>
                        </div>
                    </article>
                    
            </div>
           </section>
        </>
    )
}
export default CategoriesSection;