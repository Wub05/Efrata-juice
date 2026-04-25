import React from "react";

export default function WhyUs() {
  return (
    <>
      <section
        id="why-us"
        className="code-section bg-white py-20 lg:py-28 relative overflow-hidden"
      >
        {/* <!-- Background Decorations --> */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#4ADE80]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* <!-- Section Header --> */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#4ADE80]/10 text-[#10B981] font-semibold rounded-full text-sm mb-4">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              Why Customers <span className="text-[#FF6B35]">Love</span> Efrata
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              More than just food — it's an experience that keeps families
              coming back
            </p>
          </div>

          {/* <!-- Features Grid --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Feature 1 --> */}
            <div className="group p-8 bg-[#FFF5F2] rounded-3xl hover:bg-[#FF6B35] transition-all  translate-y-8 duration-700 ease-out">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-white/20 transition-colors">
                ⭐
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-white transition-colors">
                Loved by Locals &amp; Families
              </h3>
              <p className="text-[#6B7280] group-hover:text-white/80 transition-colors">
                The go-to destination for families, kids, and food lovers
                seeking quality meals.
              </p>
            </div>

            {/* <!-- Feature 2 --> */}
            <div className="group p-8 bg-[#FFF5F2] rounded-3xl hover:bg-[#FF6B35] transition-all   translate-y-8 duration-700 ease-out">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-white/20 transition-colors">
                🧼
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-white transition-colors">
                High Hygiene Standards
              </h3>
              <p className="text-[#6B7280] group-hover:text-white/80 transition-colors">
                Clean preparation, fresh ingredients, and top-notch food safety
                practices every day.
              </p>
            </div>

            {/* <!-- Feature 3 --> */}
            <div className="group p-8 bg-[#FFF5F2] rounded-3xl hover:bg-[#FF6B35] transition-all duration-500  translate-y-8  ease-out">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-white/20 transition-colors">
                🍔
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-white transition-colors">
                Fresh &amp; Quality Ingredients
              </h3>
              <p className="text-[#6B7280] group-hover:text-white/80 transition-colors">
                We source the freshest produce and premium ingredients for every
                dish we serve.
              </p>
            </div>

            {/* <!-- Feature 4 --> */}
            <div className="group p-8 bg-[#FFF5F2] rounded-3xl hover:bg-[#FF6B35] transition-all duration-500  translate-y-8  ease-out">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-white/20 transition-colors">
                🏡
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-white transition-colors">
                Beautiful G+1 Building
              </h3>
              <p className="text-[#6B7280] group-hover:text-white/80 transition-colors">
                Enjoy your meal in our stunning multi-level space with amazing
                views.
              </p>
            </div>

            {/* <!-- Feature 5 --> */}
            <div className="group p-8 bg-[#FFF5F2] rounded-3xl hover:bg-[#FF6B35] transition-all duration-500  translate-y-8  ease-out">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-white/20 transition-colors">
                🌬️
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-white transition-colors">
                Fresh Air &amp; Relaxing Vibes
              </h3>
              <p className="text-[#6B7280] group-hover:text-white/80 transition-colors">
                Breathe in the fresh air while enjoying your favorite meals in a
                serene atmosphere.
              </p>
            </div>

            {/* <!-- Feature 6 --> */}
            <div className="group p-8 bg-[#FFF5F2] rounded-3xl hover:bg-[#FF6B35] transition-all  translate-y-8 duration-700 ease-out">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-white/20 transition-colors">
                👨‍👩‍👧
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-white transition-colors">
                Kid-Friendly Environment
              </h3>
              <p className="text-[#6B7280] group-hover:text-white/80 transition-colors">
                A welcoming space where kids can enjoy their meals and parents
                can relax.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
