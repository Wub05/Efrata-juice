export default function VisitUs() {
  return (
    <>
      <section
        id="cta-section"
        className="code-section relative py-20 lg:py-28 overflow-hidden"
      >
        {/* <!-- Background Image --> */}
        <div className="absolute inset-0">
          <img
            src="https://assets.ls-assets.com/provider/istock/1154731746.jpg?w=1920"
            alt="Delicious burger with fries and cola"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
        </div>

        {/* <!-- Floating Elements --> */}
        <div className="absolute top-1/4 left-10 text-5xl animate-bounce opacity-50 [animation-duration: 3s]">
          🍔
        </div>
        <div className="absolute top-1/3 right-16 text-4xl animate-bounce opacity-50 [animation-duration: 2.5s] [animation-delay: 0.5s]">
          🥤
        </div>
        <div className="absolute bottom-1/4 left-1/4 text-5xl animate-bounce opacity-50 [animation-duration: 3.5s] [animation-delay: 1s]">
          🍕
        </div>
        <div className="absolute bottom-1/3 right-1/4 text-4xl animate-bounce opacity-50 [animation-duration: 2s] [animation-delay: 1.5s]">
          🍟
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Taste the <span className="text-[#FF6B35]">Freshness</span> Today!
          </h2>
          <p className="text-white/80 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
            Don't wait — your next favorite meal is just a visit away. Come
            experience why we're the #1 choice for families and food lovers!
          </p>

          {/* <!-- CTA Buttons --> */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#FF6B35] text-white font-bold rounded-xl hover:bg-[#E85A28] transition-all duration-300 shadow-xl shadow-[#FF6B35]/40 hover:shadow-2xl hover:shadow-[#FF6B35]/50 hover:-translate-y-1 text-lg"
            >
              <i className="fa-solid fa-phone mr-3" aria-hidden="true"></i>
              Call Now
            </a>
            <a
              href="/location"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1A1A1A] font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg"
            >
              <i
                className="fa-solid fa-location-dot mr-3 text-[#FF6B35]"
                aria-hidden="true"
              ></i>
              Visit Us
            </a>
            <a
              href="https://www.tiktok.com/@efratajuicee"
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-[#1F2937] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg"
            >
              <i className="fa-brands fa-tiktok mr-3" aria-hidden="true"></i>
              View Us On TikTok
            </a>
          </div>

          {/* <!-- Trust Note --> */}
          <div className="mt-10 flex items-center justify-center gap-6 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-clock" aria-hidden="true"></i>
              <span>Open Daily</span>
            </div>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-car" aria-hidden="true"></i>
              <span>Easy Parking</span>
            </div>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-leaf" aria-hidden="true"></i>
              <span>Fresh Ingredients</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
