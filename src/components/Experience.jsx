import React from "react";

export default function Experience() {
  return (
    <>
      <section
        id="experience"
        className="code-section py-20 lg:py-28 bg-[#1F2937] relative overflow-hidden"
      >
        {/* <!-- Background Pattern --> */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-8xl">🍔</div>
          <div className="absolute top-40 right-20 text-6xl">🥤</div>
          <div className="absolute bottom-20 left-1/4 text-7xl">🍕</div>
          <div className="absolute bottom-40 right-10 text-5xl">🍟</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* <!-- Image Grid --> */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="https://assets.ls-assets.com/provider/istock/1323280570.jpg?w=600"
                      alt="Fresh vegetables on kitchen table"
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="https://assets.ls-assets.com/provider/istock/2226021054.jpg?w=600"
                      alt="Refreshing cola drink with ice cubes"
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="https://assets.ls-assets.com/provider/istock/2258137181.jpg?w=600"
                      alt="Outdoor cafe with garden views"
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="https://assets.ls-assets.com/provider/istock/1074255410.jpg?w=600"
                      alt="Delicious burger and pizza"
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* <!-- Floating Badge --> */}
              <div className="absolute -bottom-6 -right-6 bg-[#FF6B35] rounded-2xl p-6 shadow-2xl">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold">1000+</div>
                  <div className="text-sm opacity-90">Happy Customers</div>
                </div>
              </div>
            </div>

            {/* <!-- Content --> */}
            <div className="text-white">
              <span className="inline-block px-4 py-2 bg-[#FF6B35]/20 text-[#FF6B35] font-semibold rounded-full text-sm mb-6">
                THE EXPERIENCE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                More Than Food —<br />
                <span className="text-[#FF6B35]">It's a Feeling</span>
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                At Efrata Juice &amp; Fast Food, we believe dining is about more
                than just eating. It's about creating memories with family,
                sharing laughs with friends, and savoring every moment in our
                beautiful space.
              </p>

              {/* <!-- Experience Highlights --> */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FF6B35] rounded-xl flex items-center justify-center flex-shrink-0">
                    <i
                      className="fa-solid fa-check text-white"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      Families Enjoying Together
                    </h4>
                    <p className="text-white/60">
                      Quality time over delicious meals
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#4ADE80] rounded-xl flex items-center justify-center flex-shrink-0">
                    <i
                      className="fa-solid fa-check text-white"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      Kids Love Our Menu
                    </h4>
                    <p className="text-white/60">
                      Happy children, relaxed parents
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FCD34D] rounded-xl flex items-center justify-center flex-shrink-0">
                    <i
                      className="fa-solid fa-check text-[#1A1A1A]"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      Clean &amp; Comfortable Space
                    </h4>
                    <p className="text-white/60">
                      Modern amenities, fresh atmosphere
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- CTA --> */}
              <a
                href="/gallery"
                className="inline-flex items-center px-8 py-4 bg-[#FF6B35] text-white font-bold rounded-xl hover:bg-[#E85A28] transition-all duration-300 shadow-lg shadow-[#FF6B35]/30 hover:shadow-xl hover:shadow-[#FF6B35]/40 hover:-translate-y-0.5 text-lg"
              >
                <span>See Our Gallery</span>
                <i className="fa-solid fa-images ml-3" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
