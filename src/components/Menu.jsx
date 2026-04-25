import React from "react";

export default function Menu() {
  return (
    <>
      <section
        id="menu"
        className="code-section bg-[#FFF5F2] py-20 lg:py-28 relative overflow-hidden"
      >
        {/* <!-- Background Decorations --> */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#FF6B35]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#4ADE80]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FCD34D]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* <!-- Section Header --> */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md mb-6">
              <span className="w-2 h-2 bg-[#4ADE80] rounded-full animate-pulse"></span>
              <span className="text-[#6B7280] font-medium text-sm">
                Handcrafted with love
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-4">
              Our
              <span className="relative inline-block">
                <span className="text-[#FF6B35]">Menu</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 10C50 2 150 2 198 10"
                    stroke="#FF6B35"
                    stroke-width="4"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
            </h2>
            <p className="text-[#6B7280] text-lg sm:text-xl max-w-2xl mx-auto">
              Fresh ingredients • Bold flavors • Unforgettable taste
            </p>
          </div>

          {/* <!-- Featured Items - Large Cards --> */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* <!-- Fresh Juices - Featured Large Card --> */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all  cursor-pointer lg:flex  translate-y-8 duration-700 ease-out delay-0">
              <div className="relative lg:w-1/2 aspect-video lg:aspect-auto">
                <img
                  src="https://assets.ls-assets.com/uploads/6ebd4e97-ac9c-41a2-b137-0b64e9efff34/461782a1-f8e0-47ee-ac45-17c60dc86b94.webp?w=800"
                  alt="A tall glass with yellow-green liquid and a red straw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#4ADE80] text-white text-xs font-bold px-3 py-1 rounded-full">
                  BESTSELLER
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 lg:hidden"></div>
              </div>
              <div className="relative lg:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FCD34D] to-[#F59E0B] rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                    🥤
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A]">
                      Fresh Juices
                    </h3>
                    <p className="text-[#6B7280]">Refreshing &amp; Healthy</p>
                  </div>
                </div>
                <p className="text-[#6B7280] mb-6 leading-relaxed">
                  Hand-squeezed mango, avocado, pineapple &amp; exotic mixed
                  fruit blends. Pure refreshment in every sip!
                </p>
                {/* <div className="flex items-center justify-between">
                  <span className="text-sm text-[#6B7280]">
                    Starting from
                    <span className="font-bold text-[#FF6B35]">$3.99</span>
                  </span>
                  <a
                    href="/menu"
                    className="inline-flex items-center gap-2 text-[#FF6B35] font-bold hover:gap-4 transition-all"
                  >
                    Explore{" "}
                    <i
                      className="fa-solid fa-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div> */}
              </div>
            </div>

            {/* <!-- Burgers - Featured Large Card --> */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all  cursor-pointer lg:flex  translate-y-8 duration-700 ease-out delay-100">
              <div className="relative lg:w-1/2 aspect-video lg:aspect-auto">
                <img
                  src="https://assets.ls-assets.com/uploads/6ebd4e97-ac9c-41a2-b137-0b64e9efff34/de364980-9a55-4d45-b04b-fa79312e56d7.webp?w=800"
                  alt="A burger with fries stacked high on a white plate"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#FF6B35] text-white text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 lg:hidden"></div>
              </div>
              <div className="relative lg:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B35] to-[#E85A28] rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                    🍔
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A]">
                      Gourmet Burgers
                    </h3>
                    <p className="text-[#6B7280]">Juicy &amp; Delicious</p>
                  </div>
                </div>
                <p className="text-[#6B7280] mb-6 leading-relaxed">
                  Premium beef patties, melted cheese, fresh veggies &amp;
                  secret sauces. Pure burger heaven!
                </p>
                {/* <div className="flex items-center justify-between">
                  <span className="text-sm text-[#6B7280]">
                    Starting from
                    <span className="font-bold text-[#FF6B35]">$7.99</span>
                  </span>
                  <a
                    href="/menu"
                    className="inline-flex items-center gap-2 text-[#FF6B35] font-bold hover:gap-4 transition-all"
                  >
                    Explore{" "}
                    <i
                      className="fa-solid fa-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div> */}
              </div>
            </div>
          </div>

          {/* <!-- Secondary Menu Items - Compact Cards --> */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* <!-- Pizza Card --> */}
            <div className="group relative bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all  hover:-translate-y-1 cursor-pointer  translate-y-8 duration-700 ease-out delay-200">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://assets.ls-assets.com/provider/istock/1074255410.jpg?w=600"
                  alt="Fresh pizza with cheese and toppings"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🍕</span>
                  <h4 className="text-white font-bold text-lg lg:text-xl">
                    Hot Pizza
                  </h4>
                </div>
                <p className="text-white/70 text-xs lg:text-sm hidden sm:block">
                  Cheesy &amp; crispy perfection
                </p>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center  group-hover:opacity-100 transition-opacity">
                <i
                  className="fa-solid fa-plus text-[#FF6B35] text-sm"
                  aria-hidden="true"
                ></i>
              </div>
            </div>

            {/* <!-- Fast Food Card --> */}
            <div className="group relative bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all  hover:-translate-y-1 cursor-pointer  translate-y-8 duration-700 ease-out delay-300">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://assets.ls-assets.com/provider/istock/2200770262.jpg?w=600"
                  alt="Fast food combos"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🍟</span>
                  <h4 className="text-white font-bold text-lg lg:text-xl">
                    Fast Food
                  </h4>
                </div>
                <p className="text-white/70 text-xs lg:text-sm hidden sm:block">
                  Crispy &amp; satisfying
                </p>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center group-hover:opacity-100 transition-opacity">
                <i
                  className="fa-solid fa-plus text-[#FF6B35] text-sm"
                  aria-hidden="true"
                ></i>
              </div>
            </div>

            {/* <!-- Combo Meals Card --> */}
            <div className="group relative bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all  hover:-translate-y-1 cursor-pointer o translate-y-8 duration-700 ease-out delay-400">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://assets.ls-assets.com/provider/istock/2160023759.jpg?w=600"
                  alt="Assorted fast food combo meals"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🍱</span>
                  <h4 className="text-white font-bold text-lg lg:text-xl">
                    Combos
                  </h4>
                </div>
                <p className="text-white/70 text-xs lg:text-sm hidden sm:block">
                  Best value meals
                </p>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center  group-hover:opacity-100 transition-opacity">
                <i
                  className="fa-solid fa-plus text-[#FF6B35] text-sm"
                  aria-hidden="true"
                ></i>
              </div>
            </div>

            {/* <!-- Desserts Card --> */}
            <div className="group relative bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all  hover:-translate-y-1 cursor-pointer translate-y-8 duration-700 ease-out delay-500">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://assets.ls-assets.com/provider/istock/2248730310.jpg?w=600"
                  alt="Delicious desserts and treats"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🍰</span>
                  <h4 className="text-white font-bold text-lg lg:text-xl">
                    Desserts
                  </h4>
                </div>
                <p className="text-white/70 text-xs lg:text-sm hidden sm:block">
                  Sweet endings
                </p>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center  group-hover:opacity-100 transition-opacity">
                <i
                  className="fa-solid fa-plus text-[#FF6B35] text-sm"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>

          {/* <!-- Bottom CTA --> */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-4 shadow-xl">
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-2xl">🔥</span>
                <span className="text-[#6B7280]">New items every week!</span>
              </div>
              <a
                href="/menu"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#FF6B35] to-[#E85A28] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[#FF6B35]/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>View Full Menu</span>
                <i className="fa-solid fa-book-open" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
