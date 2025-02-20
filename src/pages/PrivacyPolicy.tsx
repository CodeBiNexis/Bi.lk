import React from "react";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <div
      className="min-h-screen bg-[#11001C] text-white"
      style={{
        backgroundImage: `url(/images/about.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Navigation Bar */}
      <nav className="fixed w-full z-50 border-b border-white/20 backdrop-blur-lg bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img
                  className="h-8 w-auto"
                  src="/images/logo.png"
                  alt="BI Logo"
                  style={{
                    width: "70px",
                    height: "65px",
                  }}
                />
              </Link>
            </div>

            {/* Navigation Links - Center */}
            <div className="hidden md:flex items-left space-x-8 justify-start">
              <Link
                to="/"
                className="text-white hover:text-blue-300 transition-all transform hover:scale-105"
              >
                Home
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-blue-300 transition-all transform hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                to="/pricing"
                className="text-white hover:text-blue-300 transition-all transform hover:scale-105"
              >
                Pricing
              </Link>
            </div>

            {/* Get Started Button */}
            <div>
              <Link
                to="/signup"
                className="px-4 py-2 rounded-[10px_0px_10px_0px] bg-white/10 border-2 border-[#A330E5] backdrop-blur-lg text-white hover:bg-[#A330E5]/20 hover:text-white hover:shadow-lg hover:shadow-[#A330E5]/50 transition-all transform hover:scale-105 flex items-center mx-auto"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto p-8">
          <div
            className="prose prose-invert max-w-none p-8 border-4 border-[#D213F4] rounded-[50px_0px_50px_0px] backdrop-blur-lg bg-white/10 shadow-lg"
            dangerouslySetInnerHTML={{
              __html: `
                <h1>Privacy Policy</h1>
                <p>Last updated: February 18, 2025</p>

                <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>

                <h2>Interpretation and Definitions</h2>
                <h3>Interpretation</h3>
                <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

                <h3>Definitions</h3>
                <p>For the purposes of this Privacy Policy:</p>
                <ul>
                  <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                  <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to BI Nexis, 52 Srimath Anagarika Dharmapala Mawatha, Colombo 00300.</li>
                  <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
                  <li><strong>Country</strong> refers to: Sri Lanka</li>
                  <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                  <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                  <li><strong>Service</strong> refers to the Website.</li>
                  <li><strong>Website</strong> refers to Bi.lk, accessible from https://bi.lk</li>
                  <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                </ul>

                <h2>Collecting and Using Your Personal Data</h2>
                <h3>Types of Data Collected</h3>
                <h4>Personal Data</h4>
                <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
                <ul>
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Address, State, Province, ZIP/Postal code, City</li>
                  <li>Usage Data</li>
                </ul>

                <h2>Use of Your Personal Data</h2>
                <p>The Company may use Personal Data for the following purposes:</p>
                <ul>
                  <li>To provide and maintain our Service</li>
                  <li>To notify you about changes to our Service</li>
                  <li>To provide customer support</li>
                  <li>To provide analysis or valuable information so that we can improve the Service</li>
                  <li>To monitor the usage of the Service</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>

                <h2>Retention of Your Personal Data</h2>
                <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.</p>

                <h2>Security of Your Personal Data</h2>
                <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>

                <h2>Changes to this Privacy Policy</h2>
                <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.</p>

                <h2>Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, You can contact us:</p>
                <ul>
                  <li>By email: support@bi.lk</li>
                  <li>By phone number: 94778170720</li>
                </ul>
              `,
            }}
          />
        </div>
      </div>

      {/* Footer */}
      <footer
        className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/20"
        style={{
          backgroundImage: `url(/images/footer.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-7xl mx-auto p-6 border border-[#520F68] rounded-[30px_0px_30px_0px] backdrop-blur-lg bg-white/10 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Footer content sections */}
            <div>
              <h3 className="text-white font-bold mb-4">AI-Driven BI</h3>
              <p className="text-blue-200">
                Transform your data into actionable insights with our AI-powered
                analytics platform smart decisions, optimized operations, and a
                competitive edge, all in one
              </p>
            </div>

            {/* Product section */}
            <div>
              <h4 className="text-white font-semibold mb-4">
                INNOVATION CENTER
              </h4>
              <ul className="space-y-2">
                <li>
                  <address className="text-blue-200 hover:text-white not-italic">
                    52, Srimath Anagarika Dharmapala Mawatha, <br />
                    Colombo, Sri Lanka
                  </address>
                </li>
                <li>
                  <a
                    href="tel:+94778170720"
                    className="text-blue-200 hover:text-white"
                  >
                    +94778170720
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@bi.lk"
                    className="text-blue-200 hover:text-white"
                  >
                    support@bi.lk
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">QUICK LINKS</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-blue-200 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="text-blue-200 hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-blue-200 hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal section */}
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-blue-200 hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-and-conditions"
                    className="text-blue-200 hover:text-white"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer bottom section */}
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-blue-200 mb-4">
              © 2025 AI-Driven BI. All rights reserved.
            </p>
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/BINexis.LK/"
                className="text-white hover:text-white transition-colors"
                target="blank"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>

              {/* Twitter/X */}
              <a
                href="https://x.com/bi_nexis"
                target="blank"
                className="text-white hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/bi-nexis"
                className="text-white hover:text-white transition-colors"
                target="blank"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Pinterest */}
              <a
                href="https://www.pinterest.com/BI_Nexis/"
                className="text-white hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 4.99 3.657 9.128 8.438 10.292-.117-.875-.223-2.222.047-3.175.242-.832 1.558-5.297 1.558-5.297s-.398-.797-.398-1.973c0-1.85 1.074-3.232 2.41-3.232 1.137 0 1.686.854 1.686 1.875 0 1.143-.728 2.85-1.103 4.43-.314 1.33.666 2.414 1.977 2.414 2.373 0 4.203-2.5 4.203-6.1 0-3.188-2.293-5.42-5.57-5.42-3.797 0-6.02 2.847-6.02 5.78 0 1.143.438 2.37 1.003 3.03.11.13.125.242.09.375-.1.406-.328 1.297-.375 1.48-.06.242-.195.293-.453.176-1.68-.77-2.73-3.18-2.73-5.12 0-4.18 3.04-8.03 8.785-8.03 4.61 0 8.19 3.29 8.19 7.68 0 4.58-2.88 8.28-6.88 8.28-1.34 0-2.61-.7-3.04-1.52l-.83 3.16c-.3 1.14-1.12 2.57-1.67 3.44C9.61 23.88 10.78 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@BI_Nexis"
                className="text-white hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* f6s */}
              <a
                href="https://www.f6s.com/bi-nexis"
                className="text-white hover:text-white transition-colors"
                target="blank"
              >
                <img src="/images/f6s.png" alt="GitHub" className="w-6 h-6" />
              </a>

              {/* Crunchbase */}
              <a
                href="https://www.crunchbase.com/organization/bi-nexis"
                className="text-blue-200 hover:text-white transition-colors"
                target="blank"
              >
                <img
                  src="/images/cb.png"
                  alt="Crunchbase"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;
