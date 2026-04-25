import React from "react";

export default function Footer() {
  return (
    <>
      <footer
        id="global-footer"
        className="code-section bg-[#1F2937] py-10 text-white font-montserrat"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* <!-- Brand Column --> */}
            <div className="lg:col-span-1">
              <a href="/" className="inline-block mb-6" data-logo="">
                <img
                  src="https://assets.ls-assets.com/uploads/6ebd4e97-ac9c-41a2-b137-0b64e9efff34/c09e11e6-b1ee-4905-a088-f21817bdb1ff.png?w=768"
                  alt="Efrata Juice &amp; Fast Food Logo"
                  className="h-16 w-auto brightness-0 invert"
                />
              </a>
              <p className="text-white/60 mb-6 leading-relaxed">
                Your destination for fresh juices, delicious burgers, crispy
                pizza, and unforgettable fast food experiences. Loved by
                families and locals alike.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.tiktok.com/@efratajuicee"
                  target="_blank"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition-colors"
                >
                  <i className="fa-brands fa-tiktok" aria-hidden="true"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition-colors"
                >
                  <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition-colors"
                >
                  <i className="fa-brands fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>

            {/* <!-- Quick Links --> */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/menu"
                    className="text-white/60 hover:text-[#FF6B35] transition-colors"
                  >
                    Menu
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-white/60 hover:text-[#FF6B35] transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/gallery"
                    className="text-white/60 hover:text-[#FF6B35] transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="/location"
                    className="text-white/60 hover:text-[#FF6B35] transition-colors"
                  >
                    Location
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-white/60 hover:text-[#FF6B35] transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Menu Categories --> */}
            <div>
              <h4 className="text-lg font-bold mb-6">Our Menu</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/menu"
                    className="text-white/60 hover:text-[#FF6B35] transition-colors"
                  >
                    Fresh Juices
                  </a>
                </li>
                <li>
                  <a
                    href="/menu"
                    className="text-white/60 hover:text-[#FF6B35] transition-colors"
                  >
                    Gourmet Burgers
                  </a>
                </li>
                <li>
                  <a
                    href="/menu"
                    className="text-white/60 hover:text-[#FF6B35] transition-colors"
                  >
                    Hot Pizza
                  </a>
                </li>
                <li>
                  <a
                    href="/menu"
                    className="text-white/60 hover:text-[#FF6B35] transition-colors"
                  >
                    Fast Food
                  </a>
                </li>
                <li>
                  <a
                    href="/menu"
                    className="text-white/60 hover:text-[#FF6B35] transition-colors"
                  >
                    Combo Meals
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Contact Info --> */}
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <i
                    className="fa-solid fa-location-dot text-[#FF6B35] mt-1"
                    aria-hidden="true"
                  ></i>
                  <span className="text-white/60">
                    Beautiful G+1 Building
                    <br />
                    Your City, Ethiopia
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <i
                    className="fa-solid fa-phone text-[#FF6B35]"
                    aria-hidden="true"
                  ></i>
                  <a
                    href="tel:+1234567890"
                    className="text-white/60 hover:text-[#FF6B35] transition-colors"
                  >
                    +251 911 234 567
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <i
                    className="fa-solid fa-envelope text-[#FF6B35]"
                    aria-hidden="true"
                  ></i>
                  <a
                    href="mailto:hello@efratajuice.com"
                    className="text-white/60 hover:text-[#FF6B35] transition-colors"
                  >
                    hello@efratajuice.com
                  </a>
                </li>
              </ul>

              {/* <!-- Order CTA --> */}
              <a
                href="/order"
                className="inline-flex items-center mt-6 px-6 py-3 bg-[#FF6B35] text-white font-semibold rounded-xl hover:bg-[#E85A28] transition-all duration-300"
              >
                <span>Order Takeaways Now</span>
                <i
                  className="fa-solid fa-arrow-right ml-2"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>

          {/* <!-- Bottom Bar --> */}
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/40 text-sm text-center md:text-left">
                © 2026 Efrata Juice &amp; Fast Food. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
