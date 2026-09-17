const Hero = () => {
  return (
    <>
      <section className="px-4 md:px-8 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid justify-center items-center gap-x-12 gap-y-16 lg:grid-cols-2">
            <div>
              <div className="max-w-3xl mx-auto text-center lg:mx-0 lg:text-left">
                <p className="mb-2 font-medium text-blue-700 text-sm uppercase">
                  <span className="rotate-90 inline-block mr-2">|</span> Built
                  for Developers
                </p>
                <h1 className="text-4xl text-slate-900 font-bold !leading-tight mb-6 md:text-5xl">
                  Build a Portfolio That Gets You Noticed
                </h1>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Create a professional developer portfolio without starting
                  from scratch. Showcase your projects, skills, experience, and
                  achievements with a modern portfolio builder designed to help
                  you stand out.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                  <a
                    href="#"
                    className="py-2.5 px-4 text-sm rounded-md font-semibold text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    Build Your Portfolio
                  </a>
                  <a
                    href="#"
                    className="py-2.5 px-4 text-slate-900 text-sm font-semibold rounded-md bg-white border border-slate-300 transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    Explore Templates
                  </a>
                </div>
              </div>

              <div className="mt-12">
                <div className="grid gap-x-4 gap-y-6 text-center sm:grid-cols-3 lg:text-left">
                  <div className="flex flex-col">
                    <h5 className="text-blue-700 font-semibold text-2xl mb-2">
                      10+
                    </h5>
                    <p className="text-base text-slate-600 font-medium">
                      Portfolio Templates
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <h5 className="text-blue-700 font-semibold text-2xl mb-2">
                      5 min
                    </h5>
                    <p className="text-base text-slate-600 font-medium">
                      To Build
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <h5 className="text-blue-700 font-semibold text-2xl mb-2">
                      100%
                    </h5>
                    <p className="text-base text-slate-600 font-medium">
                      Customizable
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="columns-2 space-y-4">
              <div className="break-inside-avoid">
                <img
                  src="https://readymadeui.com/images/face-primer-category.webp"
                  alt="face-primer-category"
                  className="w-full h-full object-cover object-top rounded-lg max-h-[360px]"
                />
              </div>
              <div className="break-inside-avoid">
                <img
                  src="https://readymadeui.com/images/product6.webp"
                  alt="product6"
                  className="w-full h-full object-cover object-top rounded-lg max-h-[360px]"
                />
              </div>
              <div className="break-inside-avoid">
                <img
                  src="https://readymadeui.com/images/product2.webp"
                  alt="product2"
                  className="w-full h-full object-cover object-top rounded-lg max-h-[360px]"
                />
              </div>
              <div className="break-inside-avoid">
                <img
                  src="https://readymadeui.com/images/skin-glow-category.webp"
                  alt="skin-glow-category"
                  className="w-full h-full object-cover object-top rounded-lg max-h-[360px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
