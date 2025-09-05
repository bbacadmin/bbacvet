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

// Smooth scroll helper
const useSmoothScroll = () => {
  const map = React.useRef<Record<string, HTMLElement | null>>({});
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
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
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
    if (typeof fn === "function") fn(CLINIC_ID);
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
      {/* Header */}
      <header id="site-header" className="site-header">
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
              <img src={logoImg} alt="bbacvet logo" className="logo-image" />
              <div className="logo-text">
                <span className="logo-title">bbacvet.com</span>
                <span className="logo-subtitle">Veterinary Care</span>
              </div>
            </a>
            <nav className="main-nav">
              {navItem("home", "Home")}
              {navItem("services", "Services")}
              {navItem("about", "About")}
              {navItem("contact", "Contact")}
              <button onClick={() => launchBooking()} className="btn-primary">
                Book Appointment
              </button>
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

      {/* HERO */}
      <section id="home" className="hero-section">
        <div className="content-wrapper">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <Heart className="icon-lg text-green-icon" />
                <span style={{ color: "var(--color-yellow-400)" }}>★★★★★</span>
                <span>New clinic, experienced care</span>
              </div>
              <h1 className="hero-title">
                Compassionate Care for Your Beloved Pets
              </h1>
              <p className="hero-description">
                Welcome to bbacvet.com, where your pet's health and happiness
                are our top priority. Our experienced veterinary team provides
                comprehensive care in a warm, welcoming environment.
              </p>
              <div className="hero-buttons">
                <button onClick={() => launchBooking()} className="btn-primary">
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
              {/* Info pills */}
              <div className="hero-info-grid">
                <div className="card card-padding-sm">
                  <div className="hero-badge">
                    <Clock className="icon-sm text-green-icon" />
                    Hours
                  </div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-emerald-800)",
                    }}
                  >
                    Mon–Fri: 9AM–6PM
                  </div>
                </div>
                <a className="card card-padding-sm" href="tel:+19297381230">
                  <div className="hero-badge">
                    <Phone className="icon-sm text-green-icon" />
                    Call Us
                  </div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-emerald-800)",
                    }}
                  >
                    (929) 738-1230
                  </div>
                </a>
                <div className="card card-padding-sm">
                  <div className="hero-badge">
                    <MapPin className="icon-sm text-green-icon" />
                    Location
                  </div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-emerald-800)",
                    }}
                  >
                    Brighton Beach
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-image-container">
              <img
                src={catImg}
                alt="Tabby cat with bright green eyes looking at camera"
                className="hero-image"
              />
              <div className="hero-badge-overlay">
                <div
                  className="card card-padding-sm"
                  style={{ textAlign: "center" }}
                >
                  <div
                    style={{
                      color: "var(--color-emerald-700)",
                      fontWeight: "700",
                      fontSize: "1.25rem",
                    }}
                  >
                    2025
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--color-emerald-600)",
                    }}
                  >
                    Newly Opened
                  </div>
                  <div
                    style={{
                      fontSize: "0.625rem",
                      color: "var(--color-emerald-500)",
                    }}
                  >
                    Fresh Start, Experienced Care
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section section-white scroll-mt-20">
        <div className="content-wrapper">
          <h2 className="section-title">Comprehensive Pet Care Services</h2>
          <p className="section-description">
            From routine wellness exams to advanced surgical procedures, we
            provide complete veterinary care for your furry family members at
            every stage of their lives.
          </p>
          <div className="services-grid">
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
              <div
                key={service.title}
                className="card service-card card-padding"
              >
                <div className="service-header">
                  <span className="service-icon">{service.icon}</span>
                  <h3 className="service-title">{service.title}</h3>
                </div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--color-emerald-800)",
                    marginBottom: "var(--spacing-md)",
                  }}
                >
                  {service.description}
                </p>
                <ul className="service-list">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* READY TO SCHEDULE CTA */}
      <section className="section section-emerald">
        <div className="content-wrapper">
          <div
            style={{ textAlign: "center", maxWidth: "48rem", margin: "0 auto" }}
          >
            <h2 className="section-title">
              Ready to Schedule Your Pet's Care?
            </h2>
            <p
              className="section-description"
              style={{ marginBottom: "var(--spacing-xl)" }}
            >
              Our experienced veterinary team is here to provide the highest
              quality care for your beloved pet. Book an appointment today and
              let us help keep your furry friend healthy and happy.
            </p>
            <button
              onClick={() => launchBooking()}
              className="btn-primary"
              style={{ fontSize: "1.125rem", padding: "0.875rem 2rem" }}
            >
              Schedule an Appointment
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section section-white scroll-mt-20">
        <div className="content-wrapper">
          <div
            style={{ textAlign: "center", marginBottom: "var(--spacing-2xl)" }}
          >
            <img
              src={logoImg}
              alt="bbacvet logo"
              style={{
                height: "4rem",
                width: "4rem",
                margin: "0 auto var(--spacing-lg)",
              }}
            />
            <h2 className="section-title">
              Your Neighborhood Partner in Pet Health
            </h2>
            <p className="section-description">
              At bbacvet.com, we're more than just a veterinary clinic — we're a
              caring, compassionate team dedicated to the lifelong well-being of
              your furry family members.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-content">
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "var(--color-emerald-900)",
                  marginBottom: "var(--spacing-md)",
                }}
              >
                Welcome to Our New Clinic
              </h3>
              <p
                style={{
                  color: "var(--color-emerald-800)",
                  marginBottom: "var(--spacing-md)",
                  lineHeight: "1.6",
                }}
              >
                bbacvet.com opened its doors in 2025 with a mission to provide
                exceptional veterinary care to the pets and families of
                Brooklyn. Our state-of-the-art facility is equipped with modern
                medical equipment and designed with your pet's comfort in mind.
              </p>
              <p
                style={{
                  color: "var(--color-emerald-800)",
                  marginBottom: "var(--spacing-md)",
                  lineHeight: "1.6",
                }}
              >
                We believe that every pet deserves quality healthcare delivered
                with compassion and expertise. Our team is committed to building
                lasting relationships with both pets and their owners, providing
                personalized care that meets each pet's unique needs.
              </p>
              <p
                style={{
                  color: "var(--color-emerald-800)",
                  marginBottom: "var(--spacing-lg)",
                  lineHeight: "1.6",
                }}
              >
                Whether you're visiting us for a routine wellness exam, urgent
                care, or specialized treatment, you can trust that your pet will
                receive the highest standard of veterinary medicine in a warm,
                welcoming environment.
              </p>
            </div>
            <div>
              <img
                src={dogImg}
                alt="Golden retriever in a warm, welcoming veterinary environment"
                className="hero-image"
              />
            </div>
          </div>

          <div className="features-grid">
            {[
              {
                title: "Compassionate Care",
                icon: <Heart className="icon-lg text-green-icon" />,
                description:
                  "We treat every pet as if they were our own, providing gentle, loving care that puts both pets and owners at ease.",
              },
              {
                title: "Expert Medicine",
                icon: <Shield className="icon-lg text-green-icon" />,
                description:
                  "Our veterinary team stays current with the latest medical advances to provide the best possible care for your pet.",
              },
              {
                title: "Family-Focused",
                icon: <Users className="icon-lg text-green-icon" />,
                description:
                  "We understand that pets are family members, and we're here to support you through every stage of their lives.",
              },
              {
                title: "Quality Service",
                icon: <Star className="icon-lg text-green-icon" />,
                description:
                  "From our modern facility to our caring staff, every detail is designed to provide an exceptional experience.",
              },
            ].map((feature) => (
              <div key={feature.title} className="card feature-card">
                <div className="feature-header">
                  <span className="feature-icon">{feature.icon}</span>
                  <span>{feature.title}</span>
                </div>
                <div className="feature-description">{feature.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERS BAR */}
      <section className="content-wrapper">
        <div className="stats-section">
          <div className="stats-container">
            <div className="stats-header">
              <h2 className="stats-title">bbacvet.com by the Numbers</h2>
              <p className="stats-description">
                Since opening our doors, we've been committed to providing
                exceptional care and building trust within our community.
              </p>
            </div>
            <div className="stats-grid">
              <div>
                <div className="stat-number">2025</div>
                <div className="stat-label">Newly Opened</div>
              </div>
              <div>
                <div className="stat-number">100%</div>
                <div className="stat-label">Caring Staff</div>
              </div>
              <div>
                <div className="stat-number">Same Day</div>
                <div className="stat-label">Appointments Available</div>
              </div>
              <div>
                <div className="stat-number">∞</div>
                <div className="stat-label">Love for Pets</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-section">
        <div
          className="cta-container"
          style={{
            backgroundImage: `url(${dogImg2})`,
          }}
        >
          <div className="cta-overlay"></div>
          <div className="cta-content">
            <h2 className="cta-title">Your Pet's Health is Our Priority</h2>
            <p className="cta-description">
              Don't wait when it comes to your pet's health. Schedule an
              appointment today and experience the difference compassionate,
              professional veterinary care can make.
            </p>
            <div className="cta-buttons">
              <button
                onClick={() => launchBooking()}
                className="btn-pill"
                style={{ fontSize: "1.125rem" }}
              >
                Book Appointment Now
              </button>
              <a
                href="tel:+19297381230"
                className="btn-pill"
                style={{ fontSize: "1.125rem" }}
              >
                <Phone className="icon-lg" />
                Call (929) 738-1230
              </a>
            </div>
            <div className="cta-features">
              <div className="cta-feature">
                <span style={{ fontSize: "1.5rem" }}>🏥</span>
                <div>
                  <div style={{ fontWeight: "600", marginBottom: "0.25rem" }}>
                    Modern Facility
                  </div>
                  <div style={{ fontSize: "0.875rem", opacity: "0.8" }}>
                    State-of-the-art equipment and comfortable environment
                  </div>
                </div>
              </div>
              <div className="cta-feature">
                <span style={{ fontSize: "1.5rem" }}>👥</span>
                <div>
                  <div style={{ fontWeight: "600", marginBottom: "0.25rem" }}>
                    Experienced Team
                  </div>
                  <div style={{ fontSize: "0.875rem", opacity: "0.8" }}>
                    Compassionate professionals dedicated to pet health
                  </div>
                </div>
              </div>
              <div className="cta-feature">
                <span style={{ fontSize: "1.5rem" }}>💙</span>
                <div>
                  <div style={{ fontWeight: "600", marginBottom: "0.25rem" }}>
                    Caring Approach
                  </div>
                  <div style={{ fontSize: "0.875rem", opacity: "0.8" }}>
                    Treating every pet like family with personalized care
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section section-emerald scroll-mt-20">
        <div className="content-wrapper">
          <h2 className="section-title">Schedule Your Pet's Appointment</h2>
          <div className="contact-grid">
            <div className="card contact-card card-padding">
              <h3>Get in Touch</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "50%",
                      backgroundColor: "rgba(236, 253, 245, 1)",
                      color: "var(--color-emerald-600)",
                    }}
                  >
                    <Phone className="icon-md" />
                  </div>
                  <div>
                    <div style={{ fontWeight: "500" }}>Phone</div>
                    <a
                      href="tel:+19297381230"
                      style={{ color: "var(--color-emerald-700)" }}
                    >
                      (929) 738-1230
                    </a>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--color-gray-400)",
                      }}
                    >
                      Mon-Fri: 9AM-6PM
                    </div>
                  </div>
                </div>
                <div className="contact-item">
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "50%",
                      backgroundColor: "rgba(236, 253, 245, 1)",
                      color: "var(--color-emerald-600)",
                    }}
                  >
                    <Mail className="icon-md" />
                  </div>
                  <div>
                    <div style={{ fontWeight: "500" }}>Email</div>
                    <a
                      href="mailto:bbacvet@gmail.com"
                      style={{ color: "var(--color-emerald-700)" }}
                    >
                      bbacvet@gmail.com
                    </a>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--color-gray-400)",
                      }}
                    >
                      We'll respond within one business day
                    </div>
                  </div>
                </div>
                <div className="contact-item">
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "50%",
                      backgroundColor: "rgba(236, 253, 245, 1)",
                      color: "var(--color-emerald-600)",
                    }}
                  >
                    <MapPin className="icon-md" />
                  </div>
                  <div>
                    <div style={{ fontWeight: "500" }}>Address</div>
                    <div>122 Brighton 11th Street</div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--color-gray-400)",
                      }}
                    >
                      Brooklyn, NY 11235
                    </div>
                  </div>
                </div>
                <div className="contact-item">
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "50%",
                      backgroundColor: "rgba(236, 253, 245, 1)",
                      color: "var(--color-emerald-600)",
                    }}
                  >
                    <Clock className="icon-md" />
                  </div>
                  <div>
                    <div style={{ fontWeight: "500" }}>Hours</div>
                    <div>Mon-Fri: 9AM-6PM</div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--color-gray-400)",
                      }}
                    >
                      Closed Weekends
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: "var(--spacing-lg)",
                  padding: "var(--spacing-md)",
                  backgroundColor: "rgba(236, 253, 245, 0.5)",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid rgba(16, 185, 129, 0.2)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--spacing-sm)",
                    marginBottom: "var(--spacing-sm)",
                    color: "var(--color-emerald-700)",
                    fontWeight: "500",
                  }}
                >
                  <Calendar className="icon-md" />
                  Visit Information
                </div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--color-emerald-800)",
                  }}
                >
                  All visits are by appointment only. Call{" "}
                  <a
                    href="tel:+19297381230"
                    style={{ color: "var(--color-emerald-700)" }}
                  >
                    (929) 738-1230
                  </a>{" "}
                  to schedule. Please bring previous medical records and arrive
                  10 minutes early for your appointment.
                </p>
              </div>
            </div>
            <div className="card booking-card card-padding">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--spacing-md)",
                  marginBottom: "var(--spacing-lg)",
                }}
              >
                <Calendar className="icon-lg text-green-icon" />
                <h3 style={{ margin: 0, fontSize: "1.5rem" }}>
                  Book an Appointment
                </h3>
              </div>

              <div
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "500",
                  marginBottom: "var(--spacing-md)",
                  textAlign: "center",
                }}
              >
                Easy Online Booking
              </div>

              <p
                style={{
                  textAlign: "center",
                  color: "var(--color-gray-600)",
                  marginBottom: "var(--spacing-lg)",
                  lineHeight: "1.6",
                }}
              >
                Use our convenient online booking system to schedule your pet's
                appointment. Choose from available time slots and provide your
                pet's information all in one place.
              </p>

              <button
                onClick={() => launchBooking()}
                className="btn-primary"
                style={{
                  fontSize: "1.125rem",
                  padding: "0.875rem 1.5rem",
                  width: "100%",
                  marginBottom: "var(--spacing-md)",
                }}
              >
                Book Your Appointment
              </button>

              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--color-gray-500)",
                  marginBottom: "var(--spacing-lg)",
                  textAlign: "center",
                }}
              >
                Or call us at{" "}
                <a
                  href="tel:+19297381230"
                  style={{ color: "var(--color-emerald-700)" }}
                >
                  (929) 738-1230
                </a>{" "}
                to schedule over the phone
              </p>

              <div
                style={{
                  backgroundColor: "var(--color-emerald-50)",
                  padding: "var(--spacing-lg)",
                  borderRadius: "var(--radius-lg)",
                  marginTop: "var(--spacing-lg)",
                }}
              >
                <h4
                  style={{
                    fontWeight: "600",
                    marginBottom: "var(--spacing-md)",
                    color: "var(--color-emerald-900)",
                    textAlign: "center",
                  }}
                >
                  What to Bring
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {[
                    "Previous medical records",
                    "Current medications",
                    "Insurance information",
                    "List of questions or concerns",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "var(--spacing-sm)",
                        marginBottom: "var(--spacing-sm)",
                        fontSize: "0.875rem",
                        color: "var(--color-gray-600)",
                      }}
                    >
                      <div
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          backgroundColor: "var(--color-emerald-600)",
                          flexShrink: 0,
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="content-wrapper">
          <div className="footer-content">
            <div>
              <div className="footer-brand">
                <img src={logoImg} alt="logo" />
                <div className="footer-brand-text">
                  <span>bbacvet.com</span>
                  <span className="footer-brand-subtitle">Veterinary Care</span>
                </div>
              </div>
              <p
                className="footer-description"
                style={{ color: "var(--color-gray-500)" }}
              >
                Compassionate veterinary care for your beloved pets. We're
                committed to providing exceptional healthcare in a warm,
                welcoming environment.
              </p>
              <button onClick={() => launchBooking()} className="btn-primary">
                Book Appointment
              </button>
            </div>
            <div>
              <div className="footer-section-title">Contact Information</div>
              <div className="footer-contact-item">
                <Phone className="icon-md text-green-icon" />
                <div>
                  <a
                    href="tel:+19297381230"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    (929) 738-1230
                  </a>
                  <div className="footer-contact-details">Mon-Fri: 9AM-6PM</div>
                </div>
              </div>
              <div className="footer-contact-item">
                <Mail className="icon-md text-green-icon" />
                <div>
                  <a
                    href="mailto:bbacvet@gmail.com"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    bbacvet@gmail.com
                  </a>
                  <div className="footer-contact-details">
                    We'll respond within one business day
                  </div>
                </div>
              </div>
              <div className="footer-contact-item">
                <MapPin className="icon-md text-green-icon" />
                <div>
                  <div>122 Brighton 11th Street</div>
                  <div className="footer-contact-details">
                    Brooklyn, NY 11235
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="footer-section-title">Our Services</div>
              <div className="footer-services">
                <div>Veterinary Care</div>
                <div>Wellness Plans</div>
                <div>Vaccines</div>
                <div>Surgery</div>
                <div>Dentistry</div>
              </div>
            </div>
            <div>
              <div className="footer-section-title">Hours & Social</div>
              <div className="footer-hours-item">
                <Clock className="icon-md text-green-icon" />
                <div className="footer-hours-content">
                  <div className="footer-hours-title">Monday - Friday</div>
                  <div className="footer-hours-time">9:00 AM - 6:00 PM</div>
                </div>
              </div>
              <div className="footer-hours-item">
                <Clock className="icon-md text-green-icon" />
                <div className="footer-hours-content">
                  <div className="footer-hours-title">Weekends</div>
                  <div className="footer-hours-time">Closed</div>
                </div>
              </div>
              <div style={{ marginTop: "var(--spacing-lg)" }}>
                <div className="footer-section-title">Follow Us</div>
                <a
                  href="https://www.instagram.com/bbac.vet/?igsh=ZzcxYnYweWNxazJm"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <Instagram className="icon-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="content-wrapper">
            <div className="footer-bottom-content">
              <div>
                © {new Date().getFullYear()} bbacvet.com. All rights reserved.
              </div>
              <div className="footer-links">
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("home");
                  }}
                >
                  Privacy Policy
                </a>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("home");
                  }}
                >
                  Terms of Service
                </a>
                <button onClick={() => launchBooking()}>
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

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
