import React from "react";

export default function Vibe() {
  return (
    <>
      <section
        id="social-proof"
        className="code-section bg-[#1A1A1A] py-20 lg:py-28 relative overflow-hidden"
      >
        {/* <!-- Animated Background Elements --> */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#4ADE80]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FCD34D]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* <!-- Section Header --> */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#FF6B35]"></div>
              <span className="text-[#FF6B35] font-bold text-sm uppercase tracking-widest">
                The Vibe
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#FF6B35]"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
              Experience the
              <br />
              <span className="bg-gradient-to-r from-[#FF6B35] via-[#FCD34D] to-[#FF6B35] bg-clip-text text-transparent bg-[length:200%_100%] animate-pulse">
                Efrata Feeling
              </span>
            </h2>
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto">
              Where great food meets great atmosphere. Every visit is a mood.
            </p>
          </div>

          {/* <!-- Immersive Image Grid --> */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {/* <!-- Large Feature Image --> */}
            <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden group cursor-pointer  translate-y-8 transition-all duration-700 ease-out">
              <img
                src="https://assets.ls-assets.com/uploads/6ebd4e97-ac9c-41a2-b137-0b64e9efff34/e535ada8-78b2-4381-b91c-4ea3576000d1.webp?w=1200"
                alt="Covered outdoor patio with black wicker chairs"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-4 py-2 bg-[#FF6B35] text-white text-sm font-bold rounded-full mb-4">
                  OPEN AIR
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  Dine with a View
                </h3>
                <p className="text-white/70">Beautiful garden surroundings</p>
              </div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <i
                  className="fa-solid fa-up-right-from-square text-white"
                  aria-hidden="true"
                ></i>
              </div>
            </div>

            {/* <!-- Small Grid Images --> */}
            <div className="relative rounded-3xl overflow-hidden group cursor-pointer  translate-y-8 transition-all duration-700 ease-out">
              <img
                src="https://assets.ls-assets.com/uploads/6ebd4e97-ac9c-41a2-b137-0b64e9efff34/de364980-9a55-4d45-b04b-fa79312e56d7.webp?w=600"
                alt="Gourmet burger with fries on white plate"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-bold">🍔 Burgers</p>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden group cursor-pointer  translate-y-8 transition-all duration-700 ease-out">
              <img
                src="https://assets.ls-assets.com/uploads/6ebd4e97-ac9c-41a2-b137-0b64e9efff34/461782a1-f8e0-47ee-ac45-17c60dc86b94.webp?w=600"
                alt="Fresh juice with red straw"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-bold">🥤 Fresh Juices</p>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden group cursor-pointer  translate-y-8 transition-all duration-700 ease-out">
              <img
                src="https://assets.ls-assets.com/uploads/6ebd4e97-ac9c-41a2-b137-0b64e9efff34/62db4be3-ce25-4d6a-8485-3ef3aae3e1e6.webp?w=600"
                alt="Kitchen counter with maple syrup and fresh produce"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-bold">🥗 Fresh</p>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden group cursor-pointer  translate-y-8 transition-all duration-700 ease-out">
              <img
                src="https://assets.ls-assets.com/uploads/6ebd4e97-ac9c-41a2-b137-0b64e9efff34/5aff957b-1c5b-4ac5-a593-e36ed691bcdf.webp?w=600"
                alt="Dark cola drink on black table"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-bold">🥤 Drinks</p>
              </div>
            </div>
          </div>

          {/* <!-- Stats Bar --> */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 mb-12 border border-white/10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="group  translate-y-8 transition-all duration-700 ease-out">
                <div className="text-4xl lg:text-5xl font-bold text-[#FF6B35] mb-2 group-hover:scale-110 transition-transform">
                  1000+
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wide">
                  Happy Customers
                </div>
              </div>
              <div className="group  translate-y-8 transition-all duration-700 ease-out">
                <div className="text-4xl lg:text-5xl font-bold text-[#4ADE80] mb-2 group-hover:scale-110 transition-transform">
                  5⭐
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wide">
                  Customer Rating
                </div>
              </div>
              <div className="group  translate-y-8 transition-all duration-700 ease-out">
                <div className="text-4xl lg:text-5xl font-bold text-[#FCD34D] mb-2 group-hover:scale-110 transition-transform">
                  50+
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wide">
                  Menu Items
                </div>
              </div>
              <div className="group  translate-y-8 transition-all duration-700 ease-out">
                <div className="text-4xl lg:text-5xl font-bold text-[#FF6B35] mb-2 group-hover:scale-110 transition-transform">
                  24/7
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wide">
                  Online Support
                </div>
              </div>
            </div>
          </div>

          {/* <!-- CTA Buttons --> */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/gallery"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#E85A28] text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-[#FF6B35]/40 transition-all duration-300 hover:-translate-y-1"
            >
              <i className="fa-solid fa-camera text-xl" aria-hidden="true"></i>
              <span>See Our Gallery</span>
              <i
                className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              ></i>
            </a>
            <a
              href="https://www.tiktok.com/@efratajuicee"
              target="_blank"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-2xl hover:bg-white hover:text-[#1A1A1A] transition-all duration-300"
            >
              <i className="fa-brands fa-tiktok text-xl" aria-hidden="true"></i>
              <span>Follow @efratajuicee</span>
              <i
                className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
