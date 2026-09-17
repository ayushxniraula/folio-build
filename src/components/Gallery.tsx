import React from 'react'

const Gallery = () => {
  return (
   <>
   <section className="px-4 md:px-8 mt-24">
   <div className="max-w-7xl mx-auto">
      <div className="grid sm:grid-cols-9 gap-6">
         <div className="sm:col-span-3">
            <img className="max-w-full h-full rounded-lg object-cover object-top"
               src="https://readymadeui.com/images/gallery-img-1.webp" alt="" />
         </div>
         <div className="sm:col-span-6">
            <img className="max-w-full h-full rounded-lg object-cover object-top"
               src="https://readymadeui.com/images/furniture-img.webp" alt="" />
         </div>
      </div>

      <div className="grid gap-6 mt-6 sm:grid-cols-3">
         <div>
            <img className="max-w-full h-full rounded-lg object-cover object-top"
               src="https://readymadeui.com/images/gallery-img-6.webp" alt="" />
         </div>
         <div>
            <img className="max-w-full h-full rounded-lg object-cover object-top"
               src="https://readymadeui.com/images/gallery-img-4.webp" alt="" />
         </div>
         <div>
            <img className="max-w-full h-full rounded-lg object-cover object-top"
               src="https://readymadeui.com/images/gallery-img-5.webp" alt="" />
         </div>
      </div>
   </div>
</section>
   </>
  )
}

export default Gallery