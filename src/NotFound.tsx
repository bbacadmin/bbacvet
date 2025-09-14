import React from "react";
import { Heart, Home, Phone, Calendar, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function NotFound() {
  const navigate = useNavigate();

  // State management for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // State management for active navigation (not very useful on 404 page, but required by Header)
  const [active] = React.useState("home");

  // ScrollTo function that redirects to main page sections
  const scrollTo = (id: "home" | "services" | "about" | "contact") => {
    // Navigate to main page with hash for the section
    navigate(`/#${id}`);
  };

  const launchBooking = () => {
    const fn = (window as { YourVetBook?: (clinicId: string) => void })
      .YourVetBook;
    if (typeof fn === "function") fn("brightonbeachac");
  };

  return (
    <div className="site-container">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        active={active}
        scrollTo={scrollTo}
        launchBooking={launchBooking}
      />

      {/* 404 Content */}
      <section className="section notfound-section">
        <div className="content-wrapper">
          <div className="notfound-content">
            {/* Main Message */}
            <h1
              className="hero-title"
              style={{ marginBottom: "var(--spacing-lg)" }}
            >
              Oops! This Page Seems to Have Wandered Off
            </h1>

            <p
              className="hero-description"
              style={{ marginBottom: "var(--spacing-xl)" }}
            >
              Just like a curious pet, this page has wandered away from where it
              should be. Don't worry though - we're here to help you find what
              you're looking for!
            </p>

            {/* Action Buttons */}
            <div
              className="hero-buttons"
              style={{ marginBottom: "var(--spacing-2xl)" }}
            >
              <Link to="/" className="btn-primary">
                <Home
                  className="icon-md"
                  style={{ marginRight: "var(--spacing-sm)" }}
                />
                Return Home
              </Link>
              <button onClick={() => launchBooking()} className="btn-ghost">
                <Calendar
                  className="icon-md"
                  style={{ marginRight: "var(--spacing-sm)" }}
                />
                Book Appointment
              </button>
            </div>

            {/* Quick Navigation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
              <Link
                to="/#services"
                className="card card-padding-sm no-underline"
                style={{ textAlign: "left" }}
              >
                <div className="flex items-start">
                  <Heart className="text-green-600 h-5 w-5 mr-2.5 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-emerald-900 font-medium text-sm mb-1">
                      Services
                    </div>
                    <div className="text-emerald-800 text-sm">
                      View Our Care Options
                    </div>
                  </div>
                </div>
              </Link>

              <a
                className="card card-padding-sm no-underline"
                href="tel:+19297381230"
                style={{ textAlign: "left" }}
              >
                <div className="flex items-start">
                  <Phone className="text-green-600 h-5 w-5 mr-2.5 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-emerald-900 font-medium text-sm mb-1">
                      Call Us
                    </div>
                    <div className="text-emerald-800 text-sm">
                      (929) 738-1230
                    </div>
                  </div>
                </div>
              </a>

              <Link
                to="/#about"
                className="card card-padding-sm no-underline"
                style={{ textAlign: "left" }}
              >
                <div className="flex items-start">
                  <ArrowLeft className="text-green-600 h-5 w-5 mr-2.5 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-emerald-900 font-medium text-sm mb-1">
                      About Us
                    </div>
                    <div className="text-emerald-800 text-sm">Learn More</div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Contact Information */}
            <div
              className="card"
              style={{
                maxWidth: "32rem",
                margin: "0 auto",
                padding: "var(--spacing-xl)",
                textAlign: "left",
              }}
            >
              <h3
                style={{
                  marginBottom: "var(--spacing-lg)",
                  color: "var(--color-emerald-900)",
                }}
              >
                Need Help Finding Something?
              </h3>
              <p
                style={{
                  marginBottom: "var(--spacing-lg)",
                  color: "var(--color-emerald-800)",
                }}
              >
                Our team is here to help! Contact us and we'll make sure your
                pet gets the care they need.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "var(--spacing-md)",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <a href="tel:+19297381230" className="btn-primary">
                  <Phone
                    className="icon-md"
                    style={{ marginRight: "var(--spacing-sm)" }}
                  />
                  Call Now
                </a>
                <a href="mailto:bbacvet@gmail.com" className="btn-ghost">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer launchBooking={launchBooking} />
    </div>
  );
}
