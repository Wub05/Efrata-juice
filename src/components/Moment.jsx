import React from "react";

export default function Moment() {
  return (
    <>
      <section
        id="moment"
        className="code-section py-20 lg:py-28 bg-[#FFF5F2] relative overflow-hidden"
      >
        {/* <!-- Decorative Elements --> */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#4ADE80]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* <!-- Content Side --> */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md mb-6">
                <span className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse"></span>
                <span className="text-[#6B7280] font-medium text-sm">
                  More Than Just Food
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 leading-tight">
                The Perfect
                <span className="relative inline-block">
                  <span className="text-[#FF6B35]">Vibe</span>
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                  >
                    <path
                      d="M2 10C50 2 150 2 198 10"
                      stroke="#FF6B35"
                      stroke-width="4"
                      stroke-linecap="round"
                    ></path>
                  </svg>{" "}
                </span>
                <br />
                for Every Moment
              </h2>

              <p className="text-[#6B7280] text-lg mb-8 leading-relaxed">
                Whether you're catching up with friends, treating your family to
                a treat, or simply taking a moment for yourself — Efrata Juice
                is the place where
                <span className="text-[#FF6B35] font-semibold">
                  good vibes
                </span>{" "}
                and
                <span className="text-[#FF6B35] font-semibold">
                  great food
                </span>{" "}
                come together.
              </p>

              {/* <!-- Vibe Cards --> */}
              <div className="space-y-4 mb-8">
                <div className="group flex items-start gap-4 p-4 bg-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-x-1 transition-all cursor-pointer  translate-y-8 duration-700 ease-out">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B35] to-[#E85A28] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all">
                    <i
                      className="fa-solid fa-users text-white text-xl"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] text-lg mb-1">
                      Family Time
                    </h4>
                    <p className="text-[#6B7280] text-sm">
                      Kids love it, parents relax. It's our specialty.
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-4 bg-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-x-1 transition-all d cursor-pointer  translate-y-8 duration-700 ease-out">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#4ADE80] to-[#10B981] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all">
                    <i
                      className="fa-solid fa-sun text-white text-xl"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] text-lg mb-1">
                      Fresh Air Vibes
                    </h4>
                    <p className="text-[#6B7280] text-sm">
                      G+1 building with beautiful views &amp; garden atmosphere.
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-4 bg-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-x-1 transition-all  cursor-pointer  translate-y-8 duration-700 ease-out">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FCD34D] to-[#F59E0B] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all">
                    <i
                      className="fa-solid fa-camera text-white text-xl"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] text-lg mb-1">
                      Instagram-Worthy
                    </h4>
                    <p className="text-[#6B7280] text-sm">
                      Every corner is designed for your best photos.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="#experience"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF6B35] text-white font-bold rounded-2xl hover:bg-[#E85A28] transition-all duration-300 shadow-lg shadow-[#FF6B35]/30 hover:shadow-xl hover:shadow-[#FF6B35]/40 hover:-translate-y-0.5 mt-5 lg:mt-10"
              >
                <span>Our Story</span>
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>

            {/* <!-- Image Collage Side --> */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative">
                {/* <!-- Main Large Image --> */}
                <div className="rounded-3xl overflow-hidden shadow-2xl group  translate-y-8 transition-all duration-700 ease-out">
                  <img
                    src="https://assets.ls-assets.com/provider/istock/1498243668.jpg?w=1200"
                    alt="Moody cheeseburger on wooden board"
                    className="w-full h-[450px] lg:h-[550px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* <!-- Floating Card 1 - Reviews --> */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl hover:-translate-y-1 transition-transform">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#FF6B35] rounded-xl flex items-center justify-center">
                      <i
                        className="fa-solid fa-heart text-white text-xl"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div>
                      <div className="font-bold text-[#1A1A1A]">500+</div>
                      <div className="text-xs text-[#6B7280]">
                        Happy Reviews
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Floating Card 2 - Rating --> */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-2xl hover:-translate-y-1 transition-transform">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#FCD34D] rounded-xl flex items-center justify-center">
                      <i
                        className="fa-solid fa-star text-white text-xl"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div>
                      <div className="font-bold text-[#1A1A1A]">5.0</div>
                      <div className="text-xs text-[#6B7280]">Rating</div>
                    </div>
                  </div>
                </div>

                {/* <!-- Floating Card 3 - Friends --> */}
                <div className="absolute -bottom-6 right-6 bg-white rounded-2xl p-4 shadow-2xl hover:-translate-y-1 transition-transform hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#4ADE80] rounded-xl flex items-center justify-center">
                      <i
                        className="fa-solid fa-users text-white text-xl"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div>
                      <div className="font-bold text-[#1A1A1A]">Family</div>
                      <div className="text-xs text-[#6B7280]">
                        &amp; Friends
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Decorative shadow --> */}
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-[#FF6B35]/10 rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
