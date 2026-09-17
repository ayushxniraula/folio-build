
const Pricing = () => {
  return (
    <>
    <section className="mt-24 px-4 md:px-8">
   <div className="max-w-6xl max-lg:max-w-3xl mx-auto">
      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
         <h2 className="text-3xl font-bold text-slate-900 mb-6 md:text-4xl">
            Choose the right plan for you
         </h2>
         <p className="text-base leading-relaxed text-slate-600">
            Flexible plans designed for individuals, teams, and growing businesses.
         </p>
      </div>

      <div
         className="flex mx-auto bg-white border border-slate-300 rounded-full w-max p-1 mb-12">
         <button type="button" id="btn-monthly"
            className="text-white font-medium w-full text-sm bg-blue-600 py-2 px-3.5 rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
            Monthly</button>
         <button type="button" id="btn-yearly"
            className="text-slate-900 font-medium w-full text-sm py-2 px-3.5 rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
            Yearly</button>
      </div>

      <div className="grid gap-6 max-w-md mx-auto lg:grid-cols-3 md:grid-cols-2 md:max-w-full">

         <div
            className="bg-white shadow-xs rounded-3xl p-6 border border-slate-300">
            <div className="relative h-full">
               <h3 className="text-slate-900 text-lg font-medium mb-4">Basic</h3>
               <div className="text-slate-900 text-4xl font-semibold">
                  <span className="price-value">$4.50</span><sub
                     className="price-duration text-slate-600 font-medium text-sm ml-1">/ month</sub>
               </div>

               <hr className="my-6 border-slate-300" />

               <div>
                  <ul className="space-y-4 text-sm text-slate-800 font-medium">
                     <li className="flex items-center gap-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg"
                           className="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                           viewBox="0 0 511.985 511.985" aria-hidden="true">
                           <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000" />
                        </svg>
                        50 Image generations
                     </li>
                     <li className="flex items-center gap-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg"
                           className="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                           viewBox="0 0 511.985 511.985" aria-hidden="true">
                           <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000" />
                        </svg>
                        500 Credits
                     </li>
                     <li className="flex items-center gap-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg"
                           className="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                           viewBox="0 0 511.985 511.985" aria-hidden="true">
                           <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000" />
                        </svg>
                        Monthly 100 Credits Free
                     </li>
                     <li className="flex items-center gap-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg"
                           className="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                           viewBox="0 0 511.985 511.985" aria-hidden="true">
                           <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000" />
                        </svg>
                        Customer Support
                     </li>
                     <li className="flex items-center gap-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg"
                           className="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                           viewBox="0 0 511.985 511.985" aria-hidden="true">
                           <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000" />
                        </svg>
                        Dedicated Server
                     </li>
                     <li className="flex items-center gap-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg"
                           className="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                           viewBox="0 0 511.985 511.985" aria-hidden="true">
                           <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000" />
                        </svg>
                        Priority Generations
                     </li>
                  </ul>
                  <div className="min-h-[38px] mt-8">
                     <a href="#"
                        className="absolute bottom-0 left-0 right-0 w-full text-center py-2.5 px-4 text-sm rounded-md font-semibold text-blue-700 border border-blue-300 bg-white hover:border-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                        Get Started
                     </a>
                  </div>
               </div>
            </div>
         </div>

         <div
            className="bg-white shadow-xs rounded-3xl p-6 border border-slate-300">
            <div className="relative h-full">
               <h3 className="text-slate-900 text-lg font-medium mb-4">Startup</h3>
               <div className="text-slate-900 text-4xl font-semibold">
                  <span className="price-value">14.50</span><sub
                     className="price-duration text-slate-600 font-medium text-sm ml-1">/ month</sub>
               </div>

               <hr className="my-6 border-slate-300" />

               <div>
                  <ul className="space-y-4 text-sm text-slate-800 font-medium">
                     <li className="flex items-center gap-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg"
                           className="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                           viewBox="0 0 511.985 511.985" aria-hidden="true">
                           <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000" />
                        </svg>
                        200 Image generations
                     </li>
                     <li className="flex items-center gap-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg"
                           className="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                           viewBox="0 0 511.985 511.985" aria-hidden="true">
                           <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000" />
                        </svg>
                        1200 Credits
                     </li>
                     <li className="flex items-center gap-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg"
                           className="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                           viewBox="0 0 511.985 511.985" aria-hidden="true">
                           <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000" />
                        </svg>
                        Monthly 1000 Credits Free
                     </li>
                     <li className="flex items-center gap-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg"
                           className="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                           viewBox="0 0 511.985 511.985" aria-hidden="true">
                           <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000" />
                        </svg>
                        Customer Support
                     </li>
                     <li className="flex items-center gap-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg"
                           className="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                           viewBox="0 0 511.985 511.985" aria-hidden="true">
                           <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000" />
                        </svg>
                        Dedicated Server
                     </li>
                     <li className="flex items-center gap-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg"
                           className="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                           viewBox="0 0 511.985 511.985" aria-hidden="true">
                           <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000" />
                        </svg>
                        Priority Generations
                     </li>
                     <li className="flex items-center gap-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg"
                           className="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                           viewBox="0 0 511.985 511.985" aria-hidden="true">
                           <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000" />
                        </svg>
                        150GB Cloud Storage
                     </li>
                  </ul>
                  <div className="min-h-[38px] mt-8">
                     <a href="#"
                        className="absolute bottom-0 left-0 right-0 w-full text-center py-2.5 px-4 text-sm rounded-md font-semibold text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                        Get Started
                     </a>
                  </div>
               </div>
            </div>
         </div>

         <div
            className="bg-white shadow-xs rounded-3xl p-6 border border-slate-300">
            <div className="relative h-full">
               <h3 className="text-slate-900 text-lg font-medium mb-4">Enterprise</h3>
               <div className="text-slate-900 text-4xl font-semibold">
                  <span className="price-value">24.50</span><sub
                     className="price-duration text-slate-600 font-medium text-sm ml-1">/ month</sub>
               </div>

               <hr className="my-6 border-slate-300" />

               <div>
                  <ul className="space-y-4 text-sm text-slate-800 font-medium">
                     <li className="flex items-center gap-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg"
                           className="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                           viewBox="0 0 511.985 511.985" aria-hidden="true">
                           <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000" />
                        </svg>
                        400 Image generations
                     </li>
                     <li className="flex items-center gap-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg"
                           className="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                           viewBox="0 0 511.985 511.985" aria-hidden="true">
                           <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000" />
                        </svg>
                        2000 Credits
                     </li>
                     <li className="flex items-center gap-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg"
                           className="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                           viewBox="0 0 511.985 511.985" aria-hidden="true">
                           <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000" />
                        </svg>
                        Monthly 1500 Credits Free
                     </li>
                     <li className="flex items-center gap-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg"
                           className="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                           viewBox="0 0 511.985 511.985" aria-hidden="true">
                           <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000" />
                        </svg>
                        Customer Support
                     </li>
                     <li className="flex items-center gap-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg"
                           className="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                           viewBox="0 0 511.985 511.985" aria-hidden="true">
                           <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000" />
                        </svg>
                        Dedicated Server
                     </li>
                     <li className="flex items-center gap-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg"
                           className="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                           viewBox="0 0 511.985 511.985" aria-hidden="true">
                           <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000" />
                        </svg>
                        Priority Generations
                     </li>
                     <li className="flex items-center gap-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg"
                           className="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                           viewBox="0 0 511.985 511.985" aria-hidden="true">
                           <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000" />
                        </svg>
                        500GB Cloud Storage
                     </li>
                  </ul>
                  <div className="min-h-[38px] mt-8">
                     <a href="#"
                        className="absolute bottom-0 left-0 right-0 w-full text-center py-2.5 px-4 text-sm rounded-md font-semibold text-blue-700 border border-blue-300 bg-white hover:border-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                        Get Started
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
    </>
  )
}

export default Pricing