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
                className="px-4 py-2 rounded-[10px_0px_10px_0px] bg-white/10 border-2 border-[#A330E5] backdrop-blur-lg text-white transition-all transform flex items-center mx-auto hover:bg-gradient-to-r hover:from-gray-300 hover:to-gray-500 hover:border-gray-400 hover:shadow-lg hover:shadow-gray-500/50"
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
                <h1>Terms and Conditions</h1>
<p>Last updated: February 18, 2025</p>
<p>Please read these terms and conditions carefully before using Our Service.</p>
<h2>Interpretation and Definitions</h2>
<h3>Interpretation</h3>
<p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
<h3>Definitions</h3>
<p>For the purposes of these Terms and Conditions:</p>
<ul>
<li>
<p><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
</li>
<li>
<p><strong>Country</strong> refers to:  Sri Lanka</p>
</li>
<li>
<p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to BI Nexis, 52 Srimath Anagarika Dharmapala Mawatha, Colombo 00300.</p>
</li>
<li>
<p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
</li>
<li>
<p><strong>Service</strong> refers to the Website.</p>
</li>
<li>
<p><strong>Terms and Conditions</strong> (also referred as &quot;Terms&quot;) mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the <a href="https://www.termsfeed.com/terms-conditions-generator/" target="_blank">Terms and Conditions Generator</a>.</p>
</li>
<li>
<p><strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</p>
</li>
<li>
<p><strong>Website</strong> refers to Bi.lk, accessible from <a href="https://bi.lk/" rel="external nofollow noopener" target="_blank">https://bi.lk/</a></p>
</li>
<li>
<p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
</li>
</ul>
<h2>Acknowledgment</h2>
<p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
<p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
<p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
<p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
<p>Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.</p>
<h2>Links to Other Websites</h2>
<p>Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.</p>
<p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
<p>We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.</p>
<h2>Termination</h2>
<p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
<p>Upon termination, Your right to use the Service will cease immediately.</p>
<h2>Limitation of Liability</h2>
<p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</p>
<p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</p>
<p>Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.</p>
<h2>&quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer</h2>
<p>The Service is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.</p>
<p>Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</p>
<p>Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.</p>
<h2>Governing Law</h2>
<p>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
<h2>Disputes Resolution</h2>
<p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>
<h2>For European Union (EU) Users</h2>
<p>If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.</p>
<h2>United States Legal Compliance</h2>
<p>You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a &quot;terrorist supporting&quot; country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.</p>
<h2>Severability and Waiver</h2>
<h3>Severability</h3>
<p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>
<h3>Waiver</h3>
<p>Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</p>
<h2>Translation Interpretation</h2>
<p>These Terms and Conditions may have been translated if We have made them available to You on our Service.
You agree that the original English text shall prevail in the case of a dispute.</p>
<h2>Changes to These Terms and Conditions</h2>
<p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.</p>
<p>By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.</p>
<h2>Contact Us</h2>
<p>If you have any questions about these Terms and Conditions, You can contact us:</p>
<ul>
<li>
<p>By email: support@bi.lk</p>
</li>
<li>
<p>By phone number: 94778170720</p>
</li>
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

            {/* Company section */}
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
