export default function Location() {
  return (
    <>
      <section
        id="location-preview"
        className="code-section py-20 lg:py-28 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* <!-- Image --> */}
            <div className="relative  translate-y-8 transition-all duration-700 ease-out">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://assets.ls-assets.com/provider/istock/2258137181.jpg?w=1200"
                  alt="Beautiful outdoor cafe with garden views"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
              {/* <!-- Info Card --> */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#FF6B35] rounded-xl flex items-center justify-center">
                    <i
                      className="fa-solid fa-building text-white"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div>
                    <div className="font-bold text-[#1A1A1A]">G+1 Building</div>
                    <div className="text-sm text-[#6B7280]">
                      Modern Architecture
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Content --> */}
            <div className=" translate-y-8 transition-all duration-700 ease-out">
              <span className="inline-block px-4 py-2 bg-[#4ADE80]/10 text-[#10B981] font-semibold rounded-full text-sm mb-6">
                <i
                  className="fa-solid fa-location-dot mr-2"
                  aria-hidden="true"
                ></i>
                OUR LOCATION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight">
                Visit Our Beautiful{" "}
                <span className="text-[#FF6B35]">Space</span>
              </h2>
              <p className="text-[#6B7280] text-lg mb-8 leading-relaxed">
                Experience dining in our stunning G+1 building with breathtaking
                views, fresh air, and a relaxing atmosphere that makes every
                visit special.
              </p>

              {/* <!-- Location Features --> */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3  translate-y-8 transition-all duration-700 ease-out">
                  <div className="w-10 h-10 bg-[#FFF5F2] rounded-xl flex items-center justify-center flex-shrink-0">
                    <i
                      className="fa-solid fa-mountain-sun text-[#FF6B35]"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A]">
                      Beautiful Views
                    </h4>
                    <p className="text-sm text-[#6B7280]">Stunning scenery</p>
                  </div>
                </div>
                <div className="flex items-start gap-3  translate-y-8 transition-all duration-700 ease-out">
                  <div className="w-10 h-10 bg-[#FFF5F2] rounded-xl flex items-center justify-center flex-shrink-0">
                    <i
                      className="fa-solid fa-leaf text-[#4ADE80]"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A]">Fresh Air</h4>
                    <p className="text-sm text-[#6B7280]">Outdoor seating</p>
                  </div>
                </div>
                <div className="flex items-start gap-3  translate-y-8 transition-all duration-700 ease-out">
                  <div className="w-10 h-10 bg-[#FFF5F2] rounded-xl flex items-center justify-center flex-shrink-0">
                    <i
                      className="fa-solid fa-couch text-[#FCD34D]"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A]">
                      Comfortable
                    </h4>
                    <p className="text-sm text-[#6B7280]">Modern furniture</p>
                  </div>
                </div>
                <div className="flex items-start gap-3  translate-y-8 transition-all duration-700 ease-out">
                  <div className="w-10 h-10 bg-[#FFF5F2] rounded-xl flex items-center justify-center flex-shrink-0">
                    <i
                      className="fa-solid fa-car text-[#10B981]"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A]">
                      Easy Parking
                    </h4>
                    <p className="text-sm text-[#6B7280]">Convenient access</p>
                  </div>
                </div>
              </div>

              {/* <!-- CTA --> */}
              <a
                href="/location"
                className="inline-flex items-center px-8 py-4 bg-[#FF6B35] text-white font-bold rounded-xl hover:bg-[#E85A28] transition-all duration-300 shadow-lg shadow-[#FF6B35]/30 hover:shadow-xl hover:shadow-[#FF6B35]/40 hover:-translate-y-0.5 text-lg"
              >
                <span>Get Directions</span>
                <i
                  className="fa-solid fa-arrow-right ml-3"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
