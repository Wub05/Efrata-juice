export default function Homepage() {
  return (
    <>
      <section
        id="hero-section"
        className="code-section relative min-h-screen flex items-center justify-center overflow-hidden pt-20 font-montserrat"
      >
        {/* <!-- Background Image with Overlay --> */}
        <div className="absolute inset-0">
          <img
            src="https://assets.ls-assets.com/provider/istock/2160023759.jpg?w=1920"
            alt="Delicious fast food spread"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        {/* <!-- Floating Elements --> */}
        <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-[#FF6B35]/20 blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-32 h-32 rounded-full bg-[#4ADE80]/20 blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 rounded-full bg-[#FCD34D]/20 blur-lg animate-pulse delay-2000"></div>

        {/* <!-- Content --> */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <div className="lg:max-w-3xl">
            {/* <!-- Badge --> */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-[#4ADE80] rounded-full animate-pulse"></span>
              <span className="text-white/90 text-sm font-medium">
                #1 Local Fast Food Destination
              </span>
            </div>

            {/* <!-- Headline --> */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Fresh Taste.
              <br />
              <span className="text-[#FF6B35]">Clean Food.</span>
              <br />
              Happy Moments.
            </h1>

            {/* <!-- Subheadline --> */}
            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Loved by families, kids, and locals — experience the number one
              fast food spot in town with fresh juices, juicy burgers, and
              unforgettable flavors.
            </p>

            {/* <!-- CTA Buttons --> */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/menu"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#FF6B35] text-white font-bold rounded-xl hover:bg-[#E85A28] transition-all duration-300 shadow-xl shadow-[#FF6B35]/40 hover:shadow-2xl hover:shadow-[#FF6B35]/50 hover:-translate-y-1 text-lg"
              >
                <i className="fa-solid fa-utensils mr-3" aria-hidden="true"></i>
                Explore Menu
              </a>
              <a
                href="/location"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white hover:text-[#1A1A1A] transition-all duration-300 text-lg"
              >
                <i
                  className="fa-solid fa-location-dot mr-3"
                  aria-hidden="true"
                ></i>
                Visit Us Today
              </a>
            </div>

            {/* <!-- Trust Indicators --> */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-[#FF6B35] flex items-center justify-center text-white text-sm font-bold border-2 border-white">
                    🍔
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#4ADE80] flex items-center justify-center text-white text-sm font-bold border-2 border-white">
                    🥤
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#FCD34D] flex items-center justify-center text-white text-sm font-bold border-2 border-white">
                    🍕
                  </div>
                </div>
                <span className="text-white/70 text-sm">Loved by 1000s</span>
              </div>
              <div className="flex items-center gap-1">
                <i
                  className="fa-solid fa-star text-[#FCD34D]"
                  aria-hidden="true"
                ></i>
                <i
                  className="fa-solid fa-star text-[#FCD34D]"
                  aria-hidden="true"
                ></i>
                <i
                  className="fa-solid fa-star text-[#FCD34D]"
                  aria-hidden="true"
                ></i>
                <i
                  className="fa-solid fa-star text-[#FCD34D]"
                  aria-hidden="true"
                ></i>
                <i
                  className="fa-solid fa-star text-[#FCD34D]"
                  aria-hidden="true"
                ></i>
                <span className="text-white/70 text-sm ml-2">5.0 Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Scroll Indicator --> */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <i
            className="fa-solid fa-chevron-down text-white/50 text-2xl"
            aria-hidden="true"
          ></i>
        </div>

        {/* <!-- Bottom Wave --> */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#FFF5F2"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
}
