// import React from "react";

// export default function Header() {
//   return (
//     <>
//       <header id="global-header" className="code-section">
//         <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex items-center justify-between h-20">
//               {/* <!-- Logo --> */}
//               <a href="/" className="flex items-center" data-logo="">
//                 <img
//                   src="https://assets.ls-assets.com/uploads/6ebd4e97-ac9c-41a2-b137-0b64e9efff34/c09e11e6-b1ee-4905-a088-f21817bdb1ff.png?w=768"
//                   alt="Efrata Juice &amp; Fast Food Logo"
//                   className="h-14 w-auto"
//                 />
//               </a>

//               {/* tiktok Icon */}
//               <div className="hidden max-lg:block">
//                 <a
//                   href="https://www.tiktok.com/@efratajuicee"
//                   target="_blank"
//                   className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition-colors border-[3px] border-[#FF6B35]"
//                 >
//                   <i className="fa-brands fa-tiktok" aria-hidden="true"></i>
//                 </a>
//               </div>

//               {/* <!-- Desktop Navigation --> */}
//               <div className="hidden lg:flex items-center space-x-8">
//                 <a
//                   href="#menu"
//                   className="text-[#1A1A1A] hover:text-[#FF6B35] font-medium transition-colors duration-300"
//                 >
//                   Menu
//                 </a>
//                 <a
//                   href="#moment"
//                   className="text-[#1A1A1A] hover:text-[#FF6B35] font-medium transition-colors duration-300"
//                 >
//                   About Us
//                 </a>
//                 <a
//                   href="#experience"
//                   className="text-[#1A1A1A] hover:text-[#FF6B35] font-medium transition-colors duration-300"
//                 >
//                   Gallery
//                 </a>
//               </div>

//               {/* <!-- CTA Button --> */}
//               <div className="hidden lg:block">
//                 <a
//                   href="https://www.tiktok.com/@efratajuicee"
//                   target="_blank"
//                   className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition-colors border-[3px] border-[#FF6B35]"
//                 >
//                   <i className="fa-brands fa-tiktok" aria-hidden="true"></i>
//                 </a>
//               </div>

//               {/* <!-- Mobile Menu Toggle --> */}
//               <button
//                 className="lg:hidden p-2 text-[#1A1A1A]"
//                 data-landingsite-mobile-menu-toggle=""
//                 aria-label="Toggle menu"
//               >
//                 <i className="fa-solid fa-bars text-2xl" aria-hidden="true"></i>
//               </button>
//             </div>
//           </div>

//           {/* <!-- Mobile Navigation Menu --> */}
//           <div
//             className="lg:hidden hidden bg-white border-t border-[#E5E7EB]"
//             data-landingsite-mobile-menu=""
//           >
//             <div className="px-4 py-6 space-y-4">
//               <a
//                 href="#menu"
//                 className="block text-[#1A1A1A] hover:text-[#FF6B35] font-medium py-2 transition-colors"
//               >
//                 Menu
//               </a>
//               <a
//                 href="#moment"
//                 className="block text-[#1A1A1A] hover:text-[#FF6B35] font-medium py-2 transition-colors"
//               >
//                 About Us
//               </a>
//               <a
//                 href="#experience"
//                 className="block text-[#1A1A1A] hover:text-[#FF6B35] font-medium py-2 transition-colors"
//               >
//                 Gallery
//               </a>

//               <a
//                 href="/order"
//                 className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#FF6B35] text-white font-semibold rounded-xl hover:bg-[#E85A28] transition-all duration-300 mt-4"
//               >
//                 <span>Order Now</span>
//                 <i
//                   className="fa-solid fa-arrow-right ml-2"
//                   aria-hidden="true"
//                 ></i>
//               </a>
//             </div>
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// }

import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="global-header" className="code-section">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        {/* CONTAINER */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <a href="/" className="flex items-center">
              <img
                src="https://assets.ls-assets.com/uploads/6ebd4e97-ac9c-41a2-b137-0b64e9efff34/c09e11e6-b1ee-4905-a088-f21817bdb1ff.png?w=768"
                alt="Efrata Juice & Fast Food Logo"
                className="h-14 w-auto"
              />
            </a>

            {/* MOBILE TIKTOK ICON */}
            <div className="lg:hidden">
              <a
                href="https://www.tiktok.com/@efratajuicee"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition-colors border-[3px] border-[#FF6B35]"
              >
                <i className="fa-brands fa-tiktok text-black"></i>
              </a>
            </div>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="#menu"
                className="text-[#1A1A1A] hover:text-[#FF6B35] font-medium transition-colors duration-300"
              >
                Menu
              </a>
              <a
                href="#moment"
                className="text-[#1A1A1A] hover:text-[#FF6B35] font-medium transition-colors duration-300"
              >
                About Us
              </a>
              <a
                href="#experience"
                className="text-[#1A1A1A] hover:text-[#FF6B35] font-medium transition-colors duration-300"
              >
                Gallery
              </a>
            </div>

            {/* DESKTOP TIKTOK */}
            <div className="hidden lg:block">
              <a
                href="https://www.tiktok.com/@efratajuicee"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition-colors border-[3px] border-[#FF6B35]"
              >
                <i className="fa-brands fa-tiktok text-black"></i>
              </a>
            </div>

            {/* HAMBURGER BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-[#1A1A1A]"
              aria-label="Toggle menu"
            >
              <i
                className={`text-2xl transition-transform duration-300 ${
                  menuOpen ? "fa-solid fa-xmark rotate-180" : "fa-solid fa-bars"
                }`}
              ></i>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden bg-white border-t border-[#E5E7EB] transition-all duration-300 ${
            menuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            <a
              href="#menu"
              className="block text-[#1A1A1A] hover:text-[#FF6B35] font-medium py-2 transition-colors"
            >
              Menu
            </a>

            <a
              href="#moment"
              className="block text-[#1A1A1A] hover:text-[#FF6B35] font-medium py-2 transition-colors"
            >
              About Us
            </a>

            <a
              href="#experience"
              className="block text-[#1A1A1A] hover:text-[#FF6B35] font-medium py-2 transition-colors"
            >
              Gallery
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
