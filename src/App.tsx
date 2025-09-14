import React from "react";
import {
  Heart,
  Shield,
  Users,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Stethoscope,
  Syringe,
  Calendar,
  Menu,
  X,
} from "lucide-react";

// Import local assets
import logoImg from "./assets/logo.png";
import catImg from "./assets/cat.jpg";
import dogImg from "./assets/dog.jpg";
import dogImg2 from "./assets/dog2.jpg";

// Constants
const CLINIC_ID = "brightonbeachac"; // Clinic identifier
const LOCATION_ID = "27743"; // Location identifier

// Smooth scroll helper with user scroll detection
const useSmoothScroll = () => {
  const map = React.useRef<Record<string, HTMLElement | null>>({});
  const scrollTimeoutRef = React.useRef<number | null>(null);
  const isUserScrollingRef = React.useRef(false);

  React.useEffect(() => {
    map.current = {
      home: document.getElementById("home"),
      services: document.getElementById("services"),
      about: document.getElementById("about"),
      contact: document.getElementById("contact"),
    };
  }, []);

  const scrollTo = (id: keyof typeof map.current) => {
    const el = map.current[id];
    if (!el) return;

    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Reset user scrolling flag
    isUserScrollingRef.current = false;

    // Listen for user scroll events during smooth scroll
    const handleUserScroll = () => {
      isUserScrollingRef.current = true;
    };

    // Add scroll listener
    window.addEventListener("wheel", handleUserScroll, { passive: true });
    window.addEventListener("touchmove", handleUserScroll, { passive: true });
    window.addEventListener("keydown", (e) => {
      if (
        ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(
          e.key
        )
      ) {
        handleUserScroll();
      }
    });

    // Start smooth scroll with custom timing
    el.scrollIntoView({ behavior: "smooth", block: "start" });

    // Override the default smooth scroll timing for faster scrolling
    const scrollableElement =
      document.scrollingElement || document.documentElement;
    const startPosition = scrollableElement.scrollTop;
    const targetPosition = el.offsetTop - 80; // Account for header
    const distance = targetPosition - startPosition;

    if (Math.abs(distance) > 100) {
      // Only override for significant scrolls
      // Use a faster scroll animation
      scrollableElement.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }

    // Set timeout to check if user interrupted scroll
    scrollTimeoutRef.current = setTimeout(() => {
      // Remove listeners
      window.removeEventListener("wheel", handleUserScroll);
      window.removeEventListener("touchmove", handleUserScroll);
      window.removeEventListener("keydown", handleUserScroll);

      // If user was scrolling, don't update active state
      if (isUserScrollingRef.current) {
        // User interrupted, don't change active state
        return;
      }

      // Normal completion - active state will be updated by intersection observer
    }, 1000); // Adjust timeout based on scroll distance
  };

  return scrollTo;
};

export default function App() {
  const scrollTo = useSmoothScroll();

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Sticky header shadow + active nav highlight
  const [active, setActive] = React.useState("home");
  React.useEffect(() => {
    const header = document.getElementById("site-header");
    const onScroll = () => {
      if (!header) return;
      header.classList.toggle("shadow", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const ids = ["home", "services", "about", "contact"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  // Booking widget (SPA equivalent of adding <script> before </body>)
  React.useEffect(() => {
    if (
      document.querySelector(
        'script[src="https://book.yourpets.link/widget.js"]'
      )
    )
      return;
    const s = document.createElement("script");
    s.src = "https://book.yourpets.link/widget.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  const launchBooking = () => {
    const fn = (window as any).YourVetBook;
    if (typeof fn === "function") fn(CLINIC_ID, LOCATION_ID);
  };

  const navItem = (id: string, label: string) => (
    <a
      key={id}
      href={`#${id}`}
      onClick={(e) => {
        e.preventDefault();
        scrollTo(id as any);
      }}
      className={`nav-link ${active === id ? "active" : ""}`}
    >
      {label}
    </a>
  );

  return (
    <div className="site-container">
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Header */}
      <header id="site-header" className="site-header" role="banner">
        <div className="content-wrapper">
          <div className="header-content">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("home");
              }}
              className="logo-link"
            >
              <img
                src={logoImg}
                alt="Brighton Beach Animal Clinic Logo"
                className="logo-image"
              />
              <div className="logo-text">
                <span className="logo-title">Brighton Beach Animal Clinic</span>
                <span className="logo-subtitle">Veterinary Care</span>
              </div>
            </a>
            <nav className="main-nav">
              {navItem("home", "Home")}
              {navItem("services", "Services")}
              {navItem("about", "About")}
              {navItem("contact", "Contact")}
              <div className="items-center hidden md:flex">
                <div className="text-slate-800 items-center flex mr-3.5">
                  <Phone className="icon-md text-emerald-600 mr-1.5" />
                  <span className="text-xs">(929) 738-1230</span>
                </div>
                <button onClick={() => launchBooking()} className="btn-primary">
                  Book Appointment
                </button>
              </div>
            </nav>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="mobile-menu-button"
            >
              <Menu className="icon-lg" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" role="main">
        {/* HERO */}
        <section
          id="home"
          className="relative bg-[linear-gradient(to_right_bottom,oklch(0.982_0.018_155.826)_0%,oklch(0.987_0.022_95.277)_100%)] py-[70px] md:py-28"
          aria-labelledby="hero-title"
        >
          <div className="content-wrapper">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[42px] items-center">
              <div>
                <div className="flex items-center mb-[21px]">
                  <div className="flex items-center justify-center h-14 w-14 mr-3.5">
                    <img
                      src={logoImg}
                      alt="Brighton Beach Animal Clinic Logo"
                      className="h-full max-w-full object-contain w-full"
                    />
                  </div>
                  <div className="flex items-center">
                    <Star className="text-yellow-400 h-4 w-4" />
                    <Star className="text-yellow-400 h-4 w-4" />
                    <Star className="text-yellow-400 h-4 w-4" />
                    <Star className="text-yellow-400 h-4 w-4" />
                    <Star className="text-yellow-400 h-4 w-4" />
                    <span className="text-slate-800 block ml-1.5">
                      New clinic, experienced care
                    </span>
                  </div>
                </div>
                <h1 className="text-slate-900 text-2xl leading-8 mb-5 md:text-5xl md:leading-12">
                  Compassionate Care for Your Beloved Pets
                </h1>
                <p className="text-slate-800 text-base leading-6 max-w-md mb-7">
                  Welcome to Brighton Beach Animal Clinic, where your pet's
                  health and happiness are our top priority. Our experienced
                  veterinary team provides comprehensive care in a warm,
                  welcoming environment.
                </p>
                <div className="flex flex-col md:flex-row gap-3.5 mb-7">
                  <button
                    onClick={() => launchBooking()}
                    className="btn-primary"
                  >
                    Book Appointment
                  </button>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo("about");
                    }}
                    className="btn-ghost"
                  >
                    Learn More
                  </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="card card-padding-sm">
                    <div className="flex items-start">
                      <Clock className="text-[oklch(0.627_0.194_149.214)] h-[21px] w-[21px] mr-[10.5px] mt-[2px]" />
                      <div>
                        <p className="text-[oklch(0.21_0.034_264.665)]">
                          <span className="text-[oklch(0.551_0.027_264.364)] text-[14px] leading-[20px]">
                            Hours:
                          </span>
                          <br />
                          <span className="text-[oklch(0.446_0.03_256.802)] text-[13px] leading-[18px]">
                            Mon-Fri: 9AM-6PM
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <a className="card card-padding-sm" href="tel:+19297381230">
                    <div className="flex items-start">
                      <Phone className="text-[oklch(0.627_0.194_149.214)] h-[21px] w-[21px] mr-[10.5px] mt-[2px]" />
                      <div>
                        <p className="text-[oklch(0.21_0.034_264.665)]">
                          <span className="text-[oklch(0.551_0.027_264.364)] text-[14px] leading-[20px]">
                            Call Us:
                          </span>
                          <br />
                          <span className="text-[oklch(0.446_0.03_256.802)] text-[13px] leading-[18px]">
                            (929) 738-1230
                          </span>
                        </p>
                      </div>
                    </div>
                  </a>
                  <div className="card card-padding-sm">
                    <div className="flex items-start">
                      <MapPin className="text-[oklch(0.627_0.194_149.214)] h-[21px] w-[21px] mr-[10.5px] mt-[2px]" />
                      <div>
                        <p className="text-[oklch(0.21_0.034_264.665)]">
                          <span className="text-[oklch(0.551_0.027_264.364)] text-[14px] leading-[20px]">
                            Location:
                          </span>
                          <br />
                          <span className="text-[oklch(0.446_0.03_256.802)] text-[13px] leading-[18px]">
                            Brighton Beach
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square md:aspect-auto md:h-[600px] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.25)_0px_25px_50px_-12px] overflow-hidden rounded-[14px]">
                  <img
                    src={catImg}
                    alt="Adorable cat with bright eyes in a veterinary clinic setting"
                    className="h-full max-w-full object-cover w-full"
                  />
                </div>
                <div className="absolute bg-white bottom-[-21px] left-[-21px] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_20px_25px_-5px,rgba(0,0,0,0.1)_0px_8px_10px_-6px] flex flex-col gap-[21px] border p-[21px] rounded-[12.75px] border-solid border-black/10">
                  <div className="text-center">
                    <p className="text-[oklch(0.627_0.194_149.214)] text-[26.25px] leading-[31.5px] mb-[7px]">
                      2025
                    </p>
                    <p className="text-[oklch(0.446_0.03_256.802)]">
                      Newly Opened
                    </p>
                    <p className="text-[oklch(0.551_0.027_264.364)] text-[12.25px] leading-[17.5px]">
                      Fresh Start, Experienced Care
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="bg-[linear-gradient(oklch(0.982_0.018_155.826)_0%,rgb(255,255,255)_100%)] py-[70px]"
        >
          <div className="content-wrapper">
            <div className="text-center mb-14">
              <h2 className="text-[oklch(0.21_0.034_264.665)] text-[26.25px] leading-[31.5px] mb-3.5 md:text-[31.5px] md:leading-[35px]">
                Comprehensive Pet Care Services
              </h2>
              <p className="text-[oklch(0.446_0.03_256.802)] text-[17.5px] leading-[24.5px] max-w-2xl mx-auto">
                From routine wellness exams to advanced surgical procedures, we
                provide complete veterinary care for your furry family members
                at every stage of their lives.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-14">
              {[
                {
                  title: "Veterinary Care",
                  icon: <Stethoscope className="icon-lg" />,
                  description:
                    "Comprehensive health examinations, diagnostic services, and treatment plans tailored to your pet's specific needs.",
                  items: [
                    "Complete physical exams",
                    "Diagnostic testing",
                    "Treatment planning",
                    "Health monitoring",
                  ],
                },
                {
                  title: "Wellness Plans",
                  icon: <Shield className="icon-lg" />,
                  description:
                    "Preventive care programs designed to keep your pet healthy throughout their life stages.",
                  items: [
                    "Annual wellness exams",
                    "Health screenings",
                    "Nutritional counseling",
                    "Senior pet care",
                  ],
                },
                {
                  title: "Vaccines",
                  icon: <Syringe className="icon-lg" />,
                  description:
                    "Essential vaccination protocols to protect your pet from preventable diseases and maintain optimal health.",
                  items: [
                    "Core vaccinations",
                    "Lifestyle vaccines",
                    "Titer testing",
                    "Vaccination schedules",
                  ],
                },
                {
                  title: "Surgery",
                  icon: <Users className="icon-lg" />,
                  description:
                    "Safe surgical procedures performed by experienced veterinarians in our modern, sterile facility.",
                  items: [
                    "Spay/neuter procedures",
                    "Soft tissue surgery",
                    "Pre-surgical screening",
                    "Post-operative care",
                  ],
                },
                {
                  title: "Dentistry",
                  icon: <Heart className="icon-lg" />,
                  description:
                    "Complete dental care services to maintain your pet's oral health and prevent dental disease.",
                  items: [
                    "Dental cleanings",
                    "Dental X-rays",
                    "Tooth extractions",
                    "Oral health assessments",
                  ],
                },
              ].map((service) => (
                <div key={service.title} className="card card-padding">
                  <div className="flex flex-col gap-[21px]">
                    <div className="flex items-center gap-[10.5px] pt-[21px] pb-3.5 px-[21px]">
                      <div className="flex items-center justify-center h-[42px] w-[42px] rounded-[8.75px] bg-[oklch(0.962_0.044_156.743)]">
                        <span className="text-[oklch(0.627_0.194_149.214)]">
                          {service.icon}
                        </span>
                      </div>
                      <h4 className="text-[oklch(0.21_0.034_264.665)] text-[17.5px] leading-[24.5px]">
                        {service.title}
                      </h4>
                    </div>
                    <div className="pb-[21px] px-[21px]">
                      <p className="text-[oklch(0.446_0.03_256.802)] mb-3.5">
                        {service.description}
                      </p>
                      <ul className="list-none pl-0">
                        {service.items.map((item) => (
                          <li
                            key={item}
                            className="text-[oklch(0.446_0.03_256.802)] text-[12.25px] items-center flex leading-[17.5px] mb-[7px]"
                          >
                            <div className="bg-[oklch(0.627_0.194_149.214)] h-[5.25px] w-[5.25px] mr-[10.5px] rounded-[3.35544e+07px]"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <h3 className="text-[oklch(0.21_0.034_264.665)] text-[21px] leading-7 mb-3.5">
                Ready to Schedule Your Pet's Care?
              </h3>
              <p className="text-[oklch(0.446_0.03_256.802)] max-w-[588px] mb-7 mx-auto">
                Our experienced veterinary team is here to provide the highest
                quality care for your beloved pet. Book an appointment today and
                let us help keep your furry friend healthy and happy.
              </p>
              <button onClick={() => launchBooking()} className="btn-primary">
                Schedule an Appointment
              </button>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="bg-white py-[70px]">
          <div className="content-wrapper">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center h-[70px] w-[70px] mb-[21px] mx-auto">
                <img
                  src={logoImg}
                  alt="Brighton Beach Animal Clinic Logo"
                  className="h-full max-w-full object-contain w-full"
                />
              </div>
              <h2 className="text-[oklch(0.21_0.034_264.665)] text-[26.25px] leading-[31.5px] mb-3.5 md:text-[31.5px] md:leading-[35px]">
                Your Neighborhood Partner in Pet Health
              </h2>
              <p className="text-[oklch(0.446_0.03_256.802)] text-[17.5px] leading-[24.5px] max-w-2xl mx-auto">
                At Brighton Beach Animal Clinic, we're more than just a
                veterinary clinic — we're a caring, compassionate team dedicated
                to the lifelong well-being of your furry family members.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[42px] mb-[70px] items-center">
              <div>
                <h3 className="text-[oklch(0.21_0.034_264.665)] text-[21px] leading-7 mb-[21px]">
                  Welcome to Our New Clinic
                </h3>
                <p className="text-[oklch(0.446_0.03_256.802)] mb-[21px]">
                  Brighton Beach Animal Clinic opened its doors in 2025 with a
                  mission to provide exceptional veterinary care to the pets and
                  families of Brooklyn. Our state-of-the-art facility is
                  equipped with modern medical equipment and designed with your
                  pet's comfort in mind.
                </p>
                <p className="text-[oklch(0.446_0.03_256.802)] mb-[21px]">
                  We believe that every pet deserves quality healthcare
                  delivered with compassion and expertise. Our team is committed
                  to building lasting relationships with both pets and their
                  owners, providing personalized care that meets each pet's
                  unique needs.
                </p>
                <p className="text-[oklch(0.446_0.03_256.802)]">
                  Whether you're visiting us for a routine wellness exam, urgent
                  care, or specialized treatment, you can trust that your pet
                  will receive the highest standard of veterinary medicine in a
                  warm, welcoming environment.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_20px_25px_-5px,rgba(0,0,0,0.1)_0px_8px_10px_-6px] overflow-hidden rounded-[14px]">
                  <img
                    src={dogImg}
                    alt="Modern veterinary clinic interior with examination table and medical equipment"
                    className="h-full max-w-full object-cover w-full"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-7 mb-[70px]">
              {[
                {
                  title: "Compassionate Care",
                  icon: <Heart className="icon-lg" />,
                  description:
                    "We treat every pet as if they were our own, providing gentle, loving care that puts both pets and owners at ease.",
                },
                {
                  title: "Expert Medicine",
                  icon: <Shield className="icon-lg" />,
                  description:
                    "Our veterinary team stays current with the latest medical advances to provide the best possible care for your pet.",
                },
                {
                  title: "Family-Focused",
                  icon: <Users className="icon-lg" />,
                  description:
                    "We understand that pets are family members, and we're here to support you through every stage of their lives.",
                },
                {
                  title: "Quality Service",
                  icon: <Star className="icon-lg" />,
                  description:
                    "From our modern facility to our caring staff, every detail is designed to provide an exceptional experience.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="card card-padding text-center"
                >
                  <div className="flex flex-col gap-[21px]">
                    <div className="flex items-center gap-[10.5px] pt-[21px] pb-3.5 px-[21px]">
                      <div className="flex items-center justify-center h-[42px] w-[42px] rounded-[3.35544e+07px] bg-[oklch(0.962_0.044_156.743)]">
                        <span className="text-[oklch(0.627_0.194_149.214)]">
                          {feature.icon}
                        </span>
                      </div>
                      <h4 className="text-[oklch(0.21_0.034_264.665)] text-[15.75px] leading-[24.5px]">
                        {feature.title}
                      </h4>
                    </div>
                    <div className="pb-[21px] px-[21px]">
                      <p className="text-[oklch(0.446_0.03_256.802)] text-[12.25px] leading-[17.5px]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-white bg-[linear-gradient(to_right,oklch(0.627_0.194_149.214)_0%,oklch(0.666_0.179_58.318)_100%)] p-[42px] rounded-[14px]">
              <div className="text-center mb-[42px]">
                <h3 className="text-[26.25px] font-medium leading-[31.5px] mb-3.5">
                  Brighton Beach Animal Clinic by the Numbers
                </h3>
                <p className="text-[oklch(0.962_0.044_156.743)] max-w-[588px] mx-auto">
                  Since opening our doors, we've been committed to providing
                  exceptional care and building trust within our community.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
                <div className="text-center">
                  <div className="text-[26.25px] leading-[31.5px] mb-[7px] md:text-[31.5px] md:leading-[35px]">
                    2025
                  </div>
                  <div className="text-[oklch(0.962_0.044_156.743)]">
                    Newly Opened
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-[26.25px] leading-[31.5px] mb-[7px] md:text-[31.5px] md:leading-[35px]">
                    100%
                  </div>
                  <div className="text-[oklch(0.962_0.044_156.743)]">
                    Caring Staff
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-[26.25px] leading-[31.5px] mb-[7px] md:text-[31.5px] md:leading-[35px]">
                    Same Day
                  </div>
                  <div className="text-[oklch(0.962_0.044_156.743)]">
                    Appointments Available
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-[26.25px] leading-[31.5px] mb-[7px] md:text-[31.5px] md:leading-[35px]">
                    ∞
                  </div>
                  <div className="text-[oklch(0.962_0.044_156.743)]">
                    Love for Pets
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="relative bg-[linear-gradient(to_right,oklch(0.627_0.194_149.214)_0%,oklch(0.666_0.179_58.318)_100%)] overflow-hidden py-[70px]">
          <div className="absolute opacity-20 inset-0">
            <img
              src={dogImg2}
              alt="Happy golden retriever dog smiling at camera in a veterinary setting"
              className="h-full max-w-full object-cover w-full"
            />
          </div>
          <div className="relative max-w-[1120px] text-center mx-auto px-3.5 md:px-7">
            <div className="max-w-[784px] mx-auto">
              <div className="flex items-center justify-center h-[70px] w-[70px] mb-[21px] mx-auto p-3.5 rounded-[3.35544e+07px] bg-white">
                <img
                  src={logoImg}
                  alt="Brighton Beach Animal Clinic Logo"
                  className="h-full max-w-full object-contain w-full"
                />
              </div>
              <h2 className="text-white text-[26.25px] leading-[31.5px] mb-[21px] md:text-[31.5px] md:leading-[35px]">
                Your Pet's Health is Our Priority
              </h2>
              <p className="text-[oklch(0.962_0.044_156.743)] text-[17.5px] leading-[24.5px] max-w-2xl mb-7 mx-auto">
                Don't wait when it comes to your pet's health. Schedule an
                appointment today and experience the difference compassionate,
                professional veterinary care can make.
              </p>
              <div className="flex flex-col md:flex-row gap-3.5 mb-7 justify-center">
                <button onClick={() => launchBooking()} className="btn-pill">
                  Book Appointment Now
                </button>
                <a
                  href="tel:+19297381230"
                  className="btn-pill border border-white"
                >
                  <Phone className="h-3.5 w-3.5 mr-[7px]" />
                  Call (929) 738-1230
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                <div>
                  <div className="text-[26.25px] leading-[31.5px] mb-[7px]">
                    🏥
                  </div>
                  <h4 className="text-[15.75px] leading-[24.5px] mb-[7px]">
                    Modern Facility
                  </h4>
                  <p className="text-[oklch(0.962_0.044_156.743)] text-[12.25px] leading-[17.5px]">
                    State-of-the-art equipment and comfortable environment
                  </p>
                </div>
                <div>
                  <div className="text-[26.25px] leading-[31.5px] mb-[7px]">
                    👥
                  </div>
                  <h4 className="text-[15.75px] leading-[24.5px] mb-[7px]">
                    Experienced Team
                  </h4>
                  <p className="text-[oklch(0.962_0.044_156.743)] text-[12.25px] leading-[17.5px]">
                    Compassionate professionals dedicated to pet health
                  </p>
                </div>
                <div>
                  <div className="text-[26.25px] leading-[31.5px] mb-[7px]">
                    💙
                  </div>
                  <h4 className="text-[15.75px] leading-[24.5px] mb-[7px]">
                    Caring Approach
                  </h4>
                  <p className="text-[oklch(0.962_0.044_156.743)] text-[12.25px] leading-[17.5px]">
                    Treating every pet like family with personalized care
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="bg-[linear-gradient(rgb(255,255,255)_0%,oklch(0.982_0.018_155.826)_100%)] py-[70px]"
        >
          <div className="content-wrapper">
            <div className="text-center mb-14">
              <h2 className="text-[oklch(0.21_0.034_264.665)] text-[26.25px] leading-[31.5px] mb-3.5 md:text-[31.5px] md:leading-[35px]">
                Schedule Your Pet's Appointment
              </h2>
              <p className="text-[oklch(0.446_0.03_256.802)] text-[17.5px] leading-[24.5px] max-w-2xl mx-auto">
                Ready to give your pet the care they deserve? Contact us to
                schedule an appointment or reach out with any questions about
                our services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[42px]">
              <div>
                <h3 className="text-[oklch(0.21_0.034_264.665)] text-[21px] leading-7 mb-[21px]">
                  Get in Touch
                </h3>
                <div className="mb-7">
                  <div className="flex items-start mb-3.5">
                    <div className="flex items-center justify-center h-[42px] w-[42px] mr-3.5 rounded-[8.75px] bg-[oklch(0.962_0.044_156.743)]">
                      <Phone className="text-[oklch(0.627_0.194_149.214)] h-[17.5px] w-[17.5px]" />
                    </div>
                    <div>
                      <h4 className="text-[oklch(0.21_0.034_264.665)] mb-[3.5px]">
                        Phone
                      </h4>
                      <p className="text-[oklch(0.446_0.03_256.802)]">
                        (929) 738-1230
                      </p>
                      <p className="text-[oklch(0.551_0.027_264.364)] text-[12.25px] leading-[17.5px]">
                        <span className="text-[oklch(0.551_0.027_264.364)] text-[12.25px] leading-[17.5px]">
                          Hours:
                        </span>{" "}
                        Mon-Fri: 9AM-6PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start mb-3.5">
                    <div className="flex items-center justify-center h-[42px] w-[42px] mr-3.5 rounded-[8.75px] bg-[oklch(0.962_0.044_156.743)]">
                      <Mail className="text-[oklch(0.627_0.194_149.214)] h-[17.5px] w-[17.5px]" />
                    </div>
                    <div>
                      <h4 className="text-[oklch(0.21_0.034_264.665)] mb-[3.5px]">
                        Email
                      </h4>
                      <p className="text-[oklch(0.446_0.03_256.802)]">
                        bbacvet@gmail.com
                      </p>
                      <p className="text-[oklch(0.551_0.027_264.364)] text-[12.25px] leading-[17.5px]">
                        We'll respond within one business day
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start mb-3.5">
                    <div className="flex items-center justify-center h-[42px] w-[42px] mr-3.5 rounded-[8.75px] bg-[oklch(0.962_0.044_156.743)]">
                      <MapPin className="text-[oklch(0.627_0.194_149.214)] h-[17.5px] w-[17.5px]" />
                    </div>
                    <div>
                      <h4 className="text-[oklch(0.21_0.034_264.665)] mb-[3.5px]">
                        Address
                      </h4>
                      <p className="text-[oklch(0.446_0.03_256.802)]">
                        122 Brighton 11th Street
                      </p>
                      <p className="text-[oklch(0.551_0.027_264.364)] text-[12.25px] leading-[17.5px]">
                        Brooklyn, NY 11235
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center justify-center h-[42px] w-[42px] mr-3.5 rounded-[8.75px] bg-[oklch(0.962_0.044_156.743)]">
                      <Clock className="text-[oklch(0.627_0.194_149.214)] h-[17.5px] w-[17.5px]" />
                    </div>
                    <div>
                      <h4 className="text-[oklch(0.21_0.034_264.665)] mb-[3.5px]">
                        Hours
                      </h4>
                      <p className="text-[oklch(0.446_0.03_256.802)]">
                        <span className="text-[oklch(0.551_0.027_264.364)] text-[12.25px] leading-[17.5px]">
                          Hours:
                        </span>{" "}
                        Mon-Fri: 9AM-6PM
                      </p>
                      <p className="text-[oklch(0.551_0.027_264.364)] text-[12.25px] leading-[17.5px]">
                        Closed Weekends
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[oklch(0.982_0.018_155.826)] gap-[21px] flex flex-col border p-[21px] rounded-[12.75px] border-solid border-[oklch(0.925_0.084_155.995)]">
                  <div className="flex items-center">
                    <Calendar className="text-[oklch(0.448_0.119_151.328)] h-[17.5px] w-[17.5px] mr-[7px]" />
                    <h4 className="text-[oklch(0.448_0.119_151.328)]">
                      Visit Information
                    </h4>
                  </div>
                  <p className="text-[oklch(0.527_0.154_150.069)] text-[12.25px] leading-[17.5px]">
                    All visits are by appointment only. Call (929) 738-1230 to
                    schedule. Please bring previous medical records and arrive
                    10 minutes early for your appointment.
                  </p>
                </div>
              </div>
              <div className="card card-padding">
                <div className="flex items-center mb-[21px]">
                  <Calendar className="text-[oklch(0.627_0.194_149.214)] h-[21px] w-[21px] mr-[10.5px]" />
                  <h3 className="text-[oklch(0.21_0.034_264.665)] text-[21px] leading-7">
                    Book an Appointment
                  </h3>
                </div>
                <div className="text-center mb-7">
                  <h4 className="text-[oklch(0.21_0.034_264.665)] text-[15.75px] leading-[24.5px] mb-3.5">
                    Easy Online Booking
                  </h4>
                  <p className="text-[oklch(0.446_0.03_256.802)] mb-[21px]">
                    Use our convenient online booking system to schedule your
                    pet's appointment. Choose from available time slots and
                    provide your pet's information all in one place.
                  </p>
                  <button
                    onClick={() => launchBooking()}
                    className="btn-primary w-full mb-3.5"
                  >
                    Book Your Appointment
                  </button>
                  <p className="text-[oklch(0.551_0.027_264.364)] text-[12.25px] leading-[17.5px]">
                    Or call us at (929) 738-1230 to schedule over the phone
                  </p>
                </div>
                <div className="bg-[oklch(0.987_0.022_95.277)] p-[21px] rounded-[8.75px]">
                  <h5 className="text-[oklch(0.21_0.034_264.665)] mb-[10.5px]">
                    What to Bring
                  </h5>
                  <ul className="text-[oklch(0.446_0.03_256.802)] text-[12.25px] leading-[17.5px] list-none pl-0">
                    <li className="flex items-center mb-[7px]">
                      <div className="bg-[oklch(0.627_0.194_149.214)] h-[5.25px] w-[5.25px] mr-[10.5px] rounded-[3.35544e+07px]"></div>
                      Previous medical records
                    </li>
                    <li className="flex items-center mb-[7px]">
                      <div className="bg-[oklch(0.627_0.194_149.214)] h-[5.25px] w-[5.25px] mr-[10.5px] rounded-[3.35544e+07px]"></div>
                      Current medications
                    </li>
                    <li className="flex items-center mb-[7px]">
                      <div className="bg-[oklch(0.627_0.194_149.214)] h-[5.25px] w-[5.25px] mr-[10.5px] rounded-[3.35544e+07px]"></div>
                      Insurance information
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[oklch(0.627_0.194_149.214)] h-[5.25px] w-[5.25px] mr-[10.5px] rounded-[3.35544e+07px]"></div>
                      List of questions or concerns
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-white bg-[oklch(0.21_0.034_264.665)] py-14">
          <div className="content-wrapper">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
              <div>
                <div className="flex items-center mb-[21px]">
                  <div className="flex items-center justify-center h-[42px] w-[42px] mr-[10.5px]">
                    <img
                      src={logoImg}
                      alt="Brighton Beach Animal Clinic Logo"
                      className="brightness-0 invert-[1] h-full max-w-full object-contain w-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-[17.5px] leading-[24.5px]">
                      Brighton Beach Animal Clinic
                    </h3>
                    <p className="text-[oklch(0.872_0.01_258.338)] text-[12.25px] leading-[17.5px]">
                      Veterinary Care
                    </p>
                  </div>
                </div>
                <p className="text-[oklch(0.872_0.01_258.338)] mb-[21px]">
                  Compassionate veterinary care for your beloved pets. We're
                  committed to providing exceptional healthcare in a warm,
                  welcoming environment.
                </p>
                <button
                  onClick={() => launchBooking()}
                  className="bg-[oklch(0.627_0.194_149.214)] px-[21px] py-[7px] rounded-[8.75px]"
                >
                  Book Appointment
                </button>
              </div>
              <div>
                <h4 className="text-[15.75px] leading-[24.5px] mb-[21px]">
                  Contact Information
                </h4>
                <div className="mb-3.5">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center h-[42px] w-[42px] mr-3.5 rounded-[8.75px] bg-[oklch(0.962_0.044_156.743)]">
                      <Phone className="text-[oklch(0.627_0.194_149.214)] h-[17.5px] w-[17.5px]" />
                    </div>
                    <div>
                      <a
                        href="tel:+19297381230"
                        className="text-white hover:text-[oklch(0.962_0.044_156.743)] transition-colors"
                      >
                        (929) 738-1230
                      </a>
                      <p className="text-[oklch(0.707_0.022_261.325)] text-[12.25px] leading-[17.5px]">
                        <span className="text-[oklch(0.707_0.022_261.325)] text-[12.25px] leading-[17.5px]">
                          Hours:
                        </span>{" "}
                        Mon-Fri: 9AM-6PM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-3.5">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center h-[42px] w-[42px] mr-3.5 rounded-[8.75px] bg-[oklch(0.962_0.044_156.743)]">
                      <Mail className="text-[oklch(0.627_0.194_149.214)] h-[17.5px] w-[17.5px]" />
                    </div>
                    <div>
                      <a
                        href="mailto:bbacvet@gmail.com"
                        className="text-white hover:text-[oklch(0.962_0.044_156.743)] transition-colors"
                      >
                        bbacvet@gmail.com
                      </a>
                      <p className="text-[oklch(0.707_0.022_261.325)] text-[12.25px] leading-[17.5px]">
                        <span className="text-[oklch(0.707_0.022_261.325)] text-[12.25px] leading-[17.5px]">
                          Hours:
                        </span>{" "}
                        9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-3.5">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center h-[42px] w-[42px] mr-3.5 rounded-[8.75px] bg-[oklch(0.962_0.044_156.743)]">
                      <MapPin className="text-[oklch(0.627_0.194_149.214)] h-[17.5px] w-[17.5px]" />
                    </div>
                    <div>
                      <p className="">122 Brighton 11th Street</p>
                      <p className="text-[oklch(0.707_0.022_261.325)] text-[12.25px] leading-[17.5px]">
                        <span className="text-[oklch(0.707_0.022_261.325)] text-[12.25px] leading-[17.5px]">
                          Hours:
                        </span>{" "}
                        9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-[15.75px] leading-[24.5px] mb-[21px]">
                  Our Services
                </h4>
                <ul className="text-[oklch(0.872_0.01_258.338)] list-none pl-0">
                  <li className="mb-[10.5px]">Veterinary Care</li>
                  <li className="mb-[10.5px]">Wellness Plans</li>
                  <li className="mb-[10.5px]">Vaccines</li>
                  <li className="mb-[10.5px]">Surgery</li>
                  <li className="">Dentistry</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[15.75px] leading-[24.5px] mb-[21px]">
                  Hours & Social
                </h4>
                <div className="mb-3.5">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center h-[42px] w-[42px] mr-3.5 rounded-[8.75px] bg-[oklch(0.962_0.044_156.743)]">
                      <Clock className="text-[oklch(0.627_0.194_149.214)] h-[17.5px] w-[17.5px]" />
                    </div>
                    <div>
                      <p className="">Monday - Friday</p>
                      <p className="text-[oklch(0.707_0.022_261.325)] text-[12.25px] leading-[17.5px]">
                        <span className="text-[oklch(0.707_0.022_261.325)] text-[12.25px] leading-[17.5px]">
                          Hours:
                        </span>{" "}
                        9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-[21px]">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center h-[42px] w-[42px] mr-3.5 rounded-[8.75px] bg-[oklch(0.962_0.044_156.743)]">
                      <Clock className="text-[oklch(0.627_0.194_149.214)] h-[17.5px] w-[17.5px]" />
                    </div>
                    <div>
                      <p className="">Weekends</p>
                      <p className="text-[oklch(0.707_0.022_261.325)] text-[12.25px] leading-[17.5px]">
                        Closed
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="">Follow Us</h5>
                  <div className="flex mt-[10.5px]">
                    <a
                      href="https://www.instagram.com/bbac.vet/?igsh=ZzcxYnYweWNxazJm"
                      className="flex items-center justify-center bg-[oklch(0.373_0.034_259.733)] h-[35px] w-[35px] rounded-[8.75px]"
                    >
                      <Instagram className="h-[17.5px] w-[17.5px]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[42px] pt-7 border-t border-solid border-[oklch(0.373_0.034_259.733)]">
            <div className="content-wrapper">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-[oklch(0.707_0.022_261.325)] text-[12.25px] leading-[17.5px] mb-3.5 md:mb-0">
                  © 2025 bbacvet.com. All rights reserved.
                </p>
                <div className="text-[oklch(0.707_0.022_261.325)] text-[12.25px] leading-[17.5px] flex">
                  <button className="bg-transparent mr-[21px] p-0">
                    Privacy Policy
                  </button>
                  <button className="bg-transparent mr-[21px] p-0">
                    Terms of Service
                  </button>
                  <button
                    onClick={() => launchBooking()}
                    className="bg-transparent p-0"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <div className="logo-link">
            <img src={logoImg} alt="bbacvet logo" className="logo-image" />
            <div className="logo-text">
              <span className="logo-title">bbacvet.com</span>
              <span className="logo-subtitle">Veterinary Care</span>
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-menu-close"
          >
            <X className="icon-lg" />
          </button>
        </div>
        <div className="mobile-menu-content">
          <div className="mobile-nav-links">
            {["home", "services", "about", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(id as any);
                  setMobileMenuOpen(false);
                }}
                className={`mobile-nav-link ${active === id ? "active" : ""}`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>
          <div className="mobile-menu-contact">
            <a href="tel:+19297381230" className="mobile-contact-item">
              <Phone className="icon-md text-green-icon" />
              (929) 738-1230
            </a>
            <button
              onClick={() => {
                launchBooking();
                setMobileMenuOpen(false);
              }}
              className="btn-primary mobile-menu-book-button"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
