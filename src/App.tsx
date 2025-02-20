import React, { useEffect } from "react";
import {
  BarChart3,
  Brain,
  LineChart,
  PieChart,
  Layers,
  Zap,
  Users,
  Shield,
  ChevronRight,
  Menu,
  X,
  Check,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import Lottie from "lottie-react";
import contactAnimation from "./assets/contactus.json"; // If you move it to src/assets
import Dashboard from "./pages/Dashboard";
import Loading from "./components/Loading";

const BubbleEffect: React.FC = () => {
  const bubbles = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((_, index) => {
        const size = Math.random() * 50 + 20;
        const startX = Math.random() * 100;
        const duration = Math.random() * 5 + 5;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: "100vh", x: `${startX}%` }}
            animate={{
              opacity: [0, 0.3, 0],
              y: ["100vh", "-10vh"],
              x: [`${startX}%`, `${startX + Math.random() * 10 - 5}%`],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 bg-[#A330E5] rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${startX}%`,
              filter: "blur(3px)",
            }}
          />
        );
      })}
    </div>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Add scroll event listener
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add auto-scroll effect
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, []);

  // Remove the entire useEffect for protection
  React.useEffect(() => {
    // Create Tawk.to script
    var s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/67b42d713812ff19107c78ac/1ikbt31dv";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    // Add script to document
    document.head.appendChild(s1);

    // Cleanup function
    return () => {
      document.head.removeChild(s1);
    };
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Loading started"); // Debug log

    // Get the reCAPTCHA token
    const token = await (window as any).grecaptcha.getResponse();

    if (!token) {
      alert("Please complete the reCAPTCHA");
      setIsSubmitting(false);
      console.log("Loading ended due to reCAPTCHA"); // Debug log
      return;
    }

    try {
      // Send the token to your server for verification
      const response = await fetch("YOUR_SERVER_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          formData,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        (window as any).grecaptcha.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
    console.log("Loading ended"); // Debug log
  };

  const features = [
    {
      title: "AI-Powered Analytics",
      description:
        "Your data is analyzed in real-time by advanced machine leaming algorithms",
      icon: <Brain className="w-8 h-8 text-white" />,
    },
    {
      title: "Predictive Modeling",
      description:
        "Predict future trends using our state-of-the-art prediction models",
      icon: <LineChart className="w-8 h-8 text-white" />,
    },
    {
      title: "Interactive Dashboards",
      description: "Interact & customize your data visuals",
      icon: <BarChart3 className="w-8 h-8 text-white" />,
    },
    {
      title: "Real-time Insights",
      description: "Instantly gain insights from your data streams",
      icon: <PieChart className="w-8 h-8 text-white" />,
    },
  ];

  const steps = [
    {
      title: "Data Collection",
      description: "Seamlessly connect your data sources",
      icon: <Layers className="w-8 h-8 text-white" />,
    },
    {
      title: "AI Processing",
      description: "Our Al takes care of patterns and trends",
      icon: <Brain className="w-8 h-8 text-white" />,
    },
    {
      title: "Real-time Analysis",
      description: "Obtain immediate insights and forecasts",
      icon: <Zap className="w-8 h-8 text-white" />,
    },
  ];

  const testimonials = [
    {
      name: "Maeve Jonathan",
      role: "CEO",
      company: "Apexer Retail",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      content:
        "This platform revealed trends we had never seen, and fundamentally changed how we made decisions..",
    },
    {
      name: "Rajesh Vaidya",
      role: "Director",
      company: "Quantum Solutions",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      content:
        "It has accurate, real-time analytics that saved us hours a week and provided a high ROI.",
    },
    {
      name: "Shereen John",
      role: "Analytics Manager",
      company: "Innova Solutions",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      content: "Easy to use and needed little training — our team loves it!",
    },
    {
      name: "Laurel Mike",
      role: "CMO",
      company: "Novar Enterprises",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      content:
        "We had a huge advantage in that market, as we were able to identify opportunities fast.",
    },
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "49",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 5,000 data points",
        "Basic AI analytics",
        "2 team members",
        "24/7 support",
        "Weekly reports",
      ],
    },
    {
      name: "Pro",
      price: "99",
      description: "Ideal for growing companies",
      features: [
        "Up to 50,000 data points",
        "Advanced AI analytics",
        "10 team members",
        "Priority support",
        "Daily reports",
        "Custom dashboards",
        "API access",
      ],
    },
    {
      name: "Enterprise",
      price: "299",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited data points",
        "Custom AI models",
        "Unlimited team members",
        "Dedicated support",
        "Real-time analytics",
        "Custom integrations",
        "SLA guarantee",
        "Advanced security",
      ],
    },
  ];

  return (
    <Router>
      {isLoading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/"
            element={
              <div className="min-h-screen bg-[#11001C] relative overflow-x-hidden">
                <BubbleEffect />

                <div className="relative z-10">
                  {/* Navigation */}
                  <nav
                    className={`fixed w-full z-50 backdrop-blur-lg bg-[#11001C]/10 border-b border-white/20 transition-all ${
                      isScrolled ? "bg-opacity-90" : "bg-opacity-60"
                    }`}
                  >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                          <img
                            src="/images/logo.png"
                            alt="AI-Driven BI Logo"
                            className="w-auto h-12" // Adjust height as per your design
                            style={{
                              width: "65px",
                              height: "65px",
                            }}
                          />
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                          <div className="flex items-center space-x-8">
                            <a
                              href="#hero"
                              className={`text-white hover:text-blue-300 transition-all transform hover:scale-105 ${
                                activeLink === "hero" ? "text-blue-300" : ""
                              }`}
                              onClick={() => handleLinkClick("hero")}
                            >
                              Home
                            </a>
                            <a
                              href="#contact"
                              className={`text-white hover:text-blue-300 transition-all transform hover:scale-105 ${
                                activeLink === "contact" ? "text-blue-300" : ""
                              }`}
                              onClick={() => handleLinkClick("contact")}
                            >
                              Contact Us
                            </a>
                            <a
                              href="#pricing"
                              className={`text-white hover:text-blue-300 transition-all transform hover:scale-105 ${
                                activeLink === "pricing" ? "text-blue-300" : ""
                              }`}
                              onClick={() => handleLinkClick("pricing")}
                            >
                              Pricing
                            </a>
                            <Link
                              to="/dashboard"
                              className="px-4 py-2 rounded-[10px_0px_10px_0px] bg-white/10 border-2 border-[#A330E5] 
                                    backdrop-blur-lg text-white hover:bg-[#A330E5]/20 hover:text-white 
                                    hover:shadow-lg hover:shadow-[#A330E5]/50 transition-all transform hover:scale-105 
                                    flex items-center mx-auto animate-glow-pulse"
                              onClick={() => handleLinkClick("dashboard")}
                            >
                              BiNexis AI
                            </Link>
                          </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                          <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white"
                          >
                            {isMenuOpen ? <X /> : <Menu />}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Navigation with animation */}
                    {isMenuOpen && (
                      <div className="md:hidden backdrop-blur-lg bg-white/10 transition-transform transform translate-x-0">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                          <a
                            href="#hero"
                            className="block px-3 py-2 text-white hover:bg-white/10 rounded-md"
                            onClick={() => handleLinkClick("hero")}
                          >
                            Home
                          </a>
                          <a
                            href="#contact"
                            className="block px-3 py-2 text-white hover:bg-white/10 rounded-md"
                            onClick={() => handleLinkClick("contact")}
                          >
                            Contact Us
                          </a>
                          <a
                            href="#pricing"
                            className="block px-3 py-2 text-white hover:bg-white/10 rounded-md"
                            onClick={() => handleLinkClick("pricing")}
                          >
                            Pricing
                          </a>
                          <Link
                            to="/dashboard"
                            className="block px-3 py-2 text-white hover:bg-white/10 rounded-md"
                            onClick={() => handleLinkClick("dashboard")}
                          >
                            Get Started
                          </Link>
                        </div>
                      </div>
                    )}
                  </nav>

                  {/* Hero Section */}
                  <section
                    id="hero"
                    className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative"
                    style={{
                      backgroundImage: `url(/images/hero.jpg)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundAttachment: "fixed",
                      height: "700px",
                    }}
                  >
                    {/* Add top gradient */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#11001C] to-transparent"></div>
                    {/* Existing bottom gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#11001C] to-transparent"></div>
                    <div className="max-w-7xl mx-auto text-center">
                      <h1
                        className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#A330E5] via-white to-[#C2C1C1] text-transparent bg-clip-text"
                        style={{
                          marginTop: "100px",
                          padding: "10px",
                        }}
                      >
                        <ReactTyped
                          strings={[
                            "Discover Data-Driven Success with AI",
                            "Transform Your Business with AI",
                            "Unlock Insights with AI Analytics",
                          ]}
                          typeSpeed={80}
                          backSpeed={30}
                          loop
                          backDelay={2000}
                          startDelay={500}
                          smartBackspace={true}
                        />
                      </h1>
                      <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                        Utilize Al-based analytics to make better
                        business decisions and turn your data into actionable
                        insights
                      </p>
                      <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                          to="/dashboard"
                          className="group relative px-8 py-3 rounded-[10px_0px_10px_0px] bg-white/10 backdrop-blur-lg text-white hover:bg-[#A330E5]/20 hover:text-white transition-all transform hover:scale-105 flex items-center mx-auto overflow-hidden"
                          onClick={() => handleLinkClick("dashboard")}
                        >
                          {/* Animated border effect */}
                          <div className="absolute inset-0 border-2 rounded-[10px_0px_10px_0px] animate-border-flow">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#A330E5] via-[#ffffff] to-[#A330E5] animate-gradient-flow" />
                          </div>
                          {/* Button content */}
                          <span className="relative z-10">Get Started Now</span>
                          <ChevronRight className="relative z-10 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </section>

                  {/* About Us Section */}
                  <section
                    className="py-20 px-4 sm:px-6 lg:px-8 relative"
                    style={{
                      backgroundImage: `url(/images/about.png)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundAttachment: "fixed",
                    }}
                  >
                    {/* Add top gradient */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#11001C] to-transparent"></div>
                    {/* Existing bottom gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#11001C] to-transparent"></div>
                    <div className="max-w-7xl mx-auto">
                      <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="backdrop-blur-lg bg-white/10 rounded-[30px_0px_30px_0px] p-6 border-2 border-[#A330E5]">
                          <video
                            className="w-full rounded-[20px_0px_20px_0px] opacity-60"
                            autoPlay
                            loop
                            muted
                            playsInline
                          >
                            <source src="/videos/demo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div>
                          <h2
                            className="text-3xl font-bold mb-6 relative group bg-gradient-to-r from-[#A330E5] via-white to-[#C2C1C1] text-transparent bg-clip-text"
                            style={{
                              paddingTop: "20px",
                            }}
                          >
                            Transform Your Data into Actionable Insights
                            <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#A330E5] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                          </h2>

                          <p className="text-blue-100 mb-4">
                            We are an Al-powered platform that changes the way
                            businesses make sense of their data. It allows to
                            take faster and smarter decisions with real-time and
                            intuitive visualizations
                          </p>
                          <p className="text-blue-100">
                            Feel the force of sophisticated machine learning
                            algorithms that tailor themselves to the needs of
                            your business, offering predictive insights and
                            patterns to help you grow
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Features Section */}
                  <section
                    id="features"
                    className="py-20 px-4 sm:px-6 lg:px-8 relative"
                    style={{
                      backgroundImage: `url(/images/abt.png)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundAttachment: "fixed",
                      width: "100%",
                      height: "500px",
                    }}
                  >
                    {/* Add top gradient */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#11001C] to-transparent"></div>
                    {/* Existing bottom gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#11001C] to-transparent"></div>
                    <div className="max-w-7xl mx-auto">
                      <h2
                        className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#A330E5] via-white to-[#C2C1C1] text-transparent bg-clip-text relative inline-block"
                        style={{
                          marginLeft: "500px",
                        }}
                      >
                        Powerful Features
                        <span
                          className="absolute bottom-0 left-1/2 w-full h-[6px] bg-gradient-to-r from-[#A330E5] via-transparent to-[#A330E5] animate-underline scale-x-100 transform -translate-x-1/2"
                          style={{
                            marginLeft: "-128px",
                          }}
                        ></span>
                      </h2>

                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                          <div
                            key={index}
                            className="backdrop-blur-lg bg-white/10 rounded-[30px_0px_30px_0px] p-6 border-2 border-[#A330E5] animate-border-animate hover:shadow-lg hover:shadow-[#A330E5]/50 transition-all transform hover:-translate-y-1 flex flex-col h-full"
                          >
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-[#A330E5] via-white to-[#C2C1C1] text-transparent bg-clip-text">
                              {feature.title}
                            </h3>
                            <p className="text-blue-100 mb-6">
                              {feature.description}
                            </p>
                            <button className="w-full py-3 mt-auto rounded-[20px_0px_20px_0px] bg-white/10 border-2 border-dashed border-[#A330E5] backdrop-blur-lg text-white hover:bg-[#A330E5]/20 hover:shadow-lg hover:shadow-[#A330E5]/50 hover:border-solid transition-all transform hover:scale-105 relative overflow-hidden group">
                              <span className="relative z-10">Learn More</span>
                              <div className="absolute inset-0 bg-gradient-to-r from-[#A330E5]/0 via-[#A330E5]/10 to-[#A330E5]/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* How It Works Section */}
                  <section
                    id="how-it-works"
                    className="py-20 px-4 sm:px-6 lg:px-8 bg-[#11001C]/20 relative"
                    style={{
                      backgroundImage: `url(/images/testi.png)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundAttachment: "fixed",
                      width: "100%",
                      height: "500px",
                    }}
                  >
                    {/* Add top gradient */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#11001C] to-transparent"></div>
                    {/* Add bottom gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#11001C] to-transparent"></div>
                    <div className="max-w-7xl mx-auto">
                      <h2
                        className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#A330E5] via-white to-[#C2C1C1] text-transparent bg-clip-text relative inline-block"
                        style={{
                          marginLeft: "550px",
                        }}
                      >
                        How it works
                        <span
                          className="absolute bottom-0 left-1/2 w-full h-[6px] bg-gradient-to-r from-[#A330E5] via-transparent to-[#A330E5] animate-underline scale-x-100 transform -translate-x-1/2"
                          style={{
                            marginLeft: "-95px",
                          }}
                        ></span>
                      </h2>
                      <div className="grid md:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                          <div
                            key={index}
                            className="backdrop-blur-lg bg-white/10 rounded-[30px_0px_30px_0px] p-6 border-2 border-[#A330E5] hover:border-[#A330E5] hover:shadow-lg hover:shadow-[#A330E5]/50 transition-all transform hover:-translate-y-1"
                          >
                            <div className="mb-4">{step.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-[#A330E5] via-white to-[#C2C1C1] text-transparent bg-clip-text">
                              {step.title}
                            </h3>
                            <p className="text-blue-100">{step.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Testimonials Section */}
                  <section
                    className="py-20 px-4 sm:px-6 lg:px-8 relative"
                    style={{
                      backgroundImage: `url(/images/how.png)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundAttachment: "fixed",
                      width: "100%",
                      height: "500px",
                    }}
                  >
                    {/* Add top gradient */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#11001C] to-transparent"></div>
                    {/* Add bottom gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#11001C] to-transparent"></div>
                    <div className="max-w-7xl mx-auto">
                      <h2
                        className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#A330E5] via-white to-[#C2C1C1] text-transparent bg-clip-text relative inline-block"
                        style={{
                          marginLeft: "450px",
                        }}
                      >
                        Here's What Our Clients Say
                        <span
                          className="absolute bottom-0 left-1/2 w-full h-[6px] bg-gradient-to-r from-[#A330E5] via-transparent to-[#A330E5] animate-underline scale-x-100 transform -translate-x-1/2"
                          style={{
                            marginLeft: "-195px",
                          }}
                        ></span>
                      </h2>
                      <div className="relative">
                        <div className="overflow-hidden">
                          <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                              transform: `translateX(-${
                                currentTestimonial * 100
                              }%)`,
                            }}
                          >
                            {testimonials.map((testimonial, index) => (
                              <div
                                key={index}
                                className="w-full flex-shrink-0 px-4"
                              >
                                <div className="backdrop-blur-lg bg-white/10 rounded-xl p-6 border border-white/20 max-w-2xl mx-auto">
                                  <div className="flex items-center mb-4">
                                    <img
                                      src={testimonial.image}
                                      alt={testimonial.name}
                                      className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <div>
                                      <h4 className="text-white font-semibold">
                                        {testimonial.name}
                                      </h4>
                                      <p className="text-blue-200 text-sm">
                                        {testimonial.role} at{" "}
                                        {testimonial.company}
                                      </p>
                                    </div>
                                  </div>
                                  <p className="text-blue-100">
                                    {testimonial.content}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Carousel Indicators */}
                        <div className="flex justify-center mt-8 space-x-2">
                          {testimonials.map((_, index) => (
                            <button
                              key={index}
                              className={`w-2 h-2 rounded-full transition-all ${
                                currentTestimonial === index
                                  ? "bg-[#A330E5] w-4"
                                  : "bg-white/30"
                              }`}
                              onClick={() => setCurrentTestimonial(index)}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Pricing Section */}
                  <section
                    id="pricing"
                    className="py-20 px-4 sm:px-6 lg:px-8 relative"
                    style={{
                      backgroundImage: `url(/images/price.png)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundAttachment: "fixed",
                      width: "100%",
                    }}
                  >
                    {/* Add top gradient */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#11001C] to-transparent"></div>
                    {/* Add bottom gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#11001C] to-transparent"></div>
                    <div className="max-w-7xl mx-auto">
                      <h2
                        className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#A330E5] via-white to-[#C2C1C1] text-transparent bg-clip-text relative inline-block"
                        style={{
                          marginLeft: "500px",
                        }}
                      >
                        Transparent Pricing
                        <span
                          className="absolute bottom-0 left-1/2 w-full h-[6px] bg-gradient-to-r from-[#A330E5] via-transparent to-[#A330E5] animate-underline scale-x-100 transform -translate-x-1/2"
                          style={{
                            marginLeft: "-135px",
                          }}
                        ></span>
                      </h2>
                      <p className="text-xl text-blue-100 text-center mb-12 max-w-3xl mx-auto">
                        Choose the perfect plan for your business needs
                      </p>
                      <div className="grid md:grid-cols-3 gap-8 relative">
                        {pricingPlans.map((plan, index) => (
                          <div
                            key={index}
                            className={`flex flex-col justify-between backdrop-blur-sm rounded-[30px_0px_30px_0px] p-8 border transition-all transform duration-300 border-[#A330E5] hover:shadow-[0_0_25px_#A330E5]/80 h-full ${
                              plan.name === "Pro"
                                ? "md:-translate-y-6 hover:-translate-y-8 z-10 bg-white/20"
                                : "hover:-translate-y-2"
                            }`}
                          >
                            <div>
                              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#A330E5] via-white to-[#C2C1C1] text-transparent bg-clip-text">
                                {plan.name}
                              </h3>
                              <div className="flex items-baseline mb-4">
                                <span className="text-4xl font-bold text-white">
                                  ${plan.price}
                                </span>
                                <span className="text-blue-200 ml-2">
                                  /month
                                </span>
                              </div>
                              <p className="text-blue-100 mb-6">
                                {plan.description}
                              </p>
                              <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                  <li
                                    key={featureIndex}
                                    className="flex items-center text-blue-100"
                                  >
                                    {/* Replace Check icon with a graph-like SVG */}
                                    <svg
                                      className="w-5 h-5 text-white mr-2"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path d="M3 3v18h18" />
                                      <path d="M18 16l-3-3-2 2-3-3-4 4" />
                                    </svg>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-auto">
                              <Link
                                to="/dashboard"
                                className="w-full py-3 rounded-lg [20px_0px_20px_0px] bg-white/10 border-2 border-dashed border-[#A330E5] backdrop-blur-lg text-white hover:bg-[#A330E5]/20 hover:shadow-lg hover:shadow-[#A330E5]/50 hover:border-solid transition-all transform hover:scale-105 relative overflow-hidden group inline-block text-center"
                                onClick={() => handleLinkClick("dashboard")}
                              >
                                Get Started
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* CTA Section */}
                  <section
                    className="py-20 px-4 sm:px-6 lg:px-8 bg-[#11001C]/20 relative"
                    style={{
                      backgroundImage: `url(/images/cta.png)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundAttachment: "fixed",
                    }}
                  >
                    {/* Add top gradient */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#11001C] to-transparent"></div>
                    {/* Add bottom gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#11001C] to-transparent"></div>
                    <div className="relative max-w-4xl mx-auto text-center p-10 bg-white/10 backdrop-blur-sm border border-[#A330E5] rounded-[30px_0px_30px_0px] shadow-[0_0_15px_#A330E5]/50">
                      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#A330E5] via-white to-[#C2C1C1] text-transparent bg-clip-text">
                        Ready to Transform Your Business?
                      </h2>
                      <p className="text-xl text-blue-100 mb-8">
                        Join thousands of companies using our AI-powered
                        analytics platform.
                      </p>
                      <div className="flex justify-center">
                        <Link
                          to="/dashboard"
                          className="inline-flex items-center px-8 py-3 rounded-[10px_0px_10px_0px] bg-white/10 border-2 border-[#A330E5] 
                                  backdrop-blur-lg text-white hover:bg-[#A330E5]/20 hover:text-white 
                                  hover:shadow-lg hover:shadow-[#A330E5]/50 transition-all transform hover:scale-105"
                          onClick={() => handleLinkClick("dashboard")}
                        >
                          Get Started Now
                          <ChevronRight className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </section>

                  {/* Contact Us Section */}
                  <section
                    id="contact"
                    className="py-20 px-4 sm:px-6 lg:px-8 relative"
                    style={{
                      backgroundImage: `url(/images/contact.png)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundAttachment: "fixed",
                    }}
                  >
                    {/* Add top gradient */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#11001C] to-transparent"></div>
                    {/* Add bottom gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#11001C] to-transparent"></div>
                    <div className="max-w-7xl mx-auto">
                      <h2
                        className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#A330E5] via-white to-[#C2C1C1] text-transparent bg-clip-text relative inline-block"
                        style={{
                          marginLeft: "580px",
                        }}
                      >
                        Contact Us
                        <span
                          className="absolute bottom-0 left-1/2 w-full h-[6px] bg-gradient-to-r from-[#A330E5] via-transparent to-[#A330E5] animate-underline scale-x-100 transform -translate-x-1/2"
                          style={{
                            marginLeft: "-75px",
                          }}
                        ></span>
                      </h2>

                      <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-8">
                          <div
                            className="backdrop-blur-lg bg-white/10 rounded-[30px_0px_30px_0px] p-6 border-2 border-[#A330E5]"
                            style={{
                              height: "500px",
                              paddingTop: "80px",
                            }}
                          >
                            <Lottie
                              animationData={contactAnimation}
                              loop={true}
                              className="w-full h-auto rounded-[20px]"
                            />
                          </div>
                        </div>

                        {/* Contact Form */}
                        <div className="backdrop-blur-lg bg-white/10 rounded-[30px_0px_30px_0px] p-6 border-2 border-[#A330E5]">
                          <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                              <input
                                type="text"
                                placeholder="Your Name"
                                required
                                value={formData.name}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    name: e.target.value,
                                  })
                                }
                                className="w-full px-4 py-2 bg-white/10 border border-[#A330E5] rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-[#A330E5] focus:ring-1 focus:ring-[#A330E5]"
                              />
                            </div>
                            <div>
                              <input
                                type="email"
                                placeholder="Your Email"
                                required
                                value={formData.email}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    email: e.target.value,
                                  })
                                }
                                className="w-full px-4 py-2 bg-white/10 border border-[#A330E5] rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-[#A330E5] focus:ring-1 focus:ring-[#A330E5]"
                              />
                            </div>
                            <div>
                              <input
                                type="text"
                                placeholder="Subject"
                                required
                                value={formData.subject}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    subject: e.target.value,
                                  })
                                }
                                className="w-full px-4 py-2 bg-white/10 border border-[#A330E5] rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-[#A330E5] focus:ring-1 focus:ring-[#A330E5]"
                              />
                            </div>
                            <div>
                              <textarea
                                placeholder="Your Message"
                                required
                                value={formData.message}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    message: e.target.value,
                                  })
                                }
                                rows={4}
                                className="w-full px-4 py-2 bg-white/10 border border-[#A330E5] rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-[#A330E5] focus:ring-1 focus:ring-[#A330E5]"
                              />
                            </div>

                            {/* Google reCAPTCHA */}
                            <div className="flex justify-center">
                              <div
                                className="g-recaptcha"
                                data-sitekey="6LcBtNwqAAAAAHAdUAV1ynq5pxNztH_cemvzr57Z"
                              ></div>
                            </div>

                            {submitStatus === "success" && (
                              <div className="text-green-400 text-center">
                                Message sent successfully!
                              </div>
                            )}
                            {submitStatus === "error" && (
                              <div className="text-red-400 text-center">
                                Failed to send message. Please try again.
                              </div>
                            )}

                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="w-full px-8 py-3 rounded-[10px_0px_10px_0px] bg-white/10 border-2 border-[#A330E5] backdrop-blur-lg text-white hover:bg-[#A330E5]/20 hover:shadow-lg hover:shadow-[#A330E5]/50 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Footer */}
                  <footer
                    className="py-12 px-4 sm:px-6 lg:px-8 border-t border-transparent/20 relative"
                    style={{
                      backgroundImage: `url(/images/footer.png)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundAttachment: "fixed",
                    }}
                  >
                    {/* Add top gradient */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#11001C] to-transparent"></div>
                    {/* Add bottom gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#11001C] to-transparent"></div>
                    <div className="max-w-7xl mx-auto p-6 border border-[#520F68] rounded-[30px_0px_30px_0px] backdrop-blur-lg bg-white/10 shadow-lg">
                      <div className="grid md:grid-cols-4 gap-8">
                        <div>
                          <h3 className="text-white font-bold mb-4">
                            AI-Driven BI
                          </h3>
                          <p className="text-blue-200">
                            Transform your data into actionable insights with
                            our AI-powered analytics platform smart decisions,
                            optimized operations, and a competitive edge, all in
                            one
                          </p>
                        </div>
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
                          <h4 className="text-white font-semibold mb-4">
                            QUICK LINKS
                          </h4>
                          <ul className="space-y-2">
                            <li>
                              <a
                                href="/"
                                className="text-blue-200 hover:text-white"
                              >
                                Home
                              </a>
                            </li>
                            <li>
                              <a
                                href="/pricing"
                                className="text-blue-200 hover:text-white"
                              >
                                Pricing
                              </a>
                            </li>
                            <li>
                              <a
                                href="/contact"
                                className="text-blue-200 hover:text-white"
                              >
                                Contact Us
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-4">
                            Legal
                          </h4>
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
                            <img
                              src="/images/f6s.png"
                              alt="GitHub"
                              className="w-6 h-6"
                            />
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
                <div id="tawk-to-chat"></div>
              </div>
            }
          />
        </Routes>
      )}
    </Router>
  );
}

export default App;
