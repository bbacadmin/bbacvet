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
      <section className="bg-gradient-to-b from-white to-slate-50 py-24">
        <div className="content-wrapper">
          <div className="notfound-content text-center max-w-4xl mx-auto">
            {/* Main Message */}
            <h1 className="text-heading text-5xl md:text-6xl mb-8 leading-tight">
              Oops! This Page Seems to Have Wandered Off
            </h1>

            <p className="text-body text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
              Just like a curious pet, this page has wandered away from where it
              should be. Don't worry though - we're here to help you find what
              you're looking for!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-6 mb-16 justify-center">
              <Link to="/" className="btn-primary-modern">
                <Home className="icon-md mr-3" />
                Return Home
              </Link>
              <button
                onClick={() => launchBooking()}
                className="btn-ghost-modern"
              >
                <Calendar className="icon-md mr-3" />
                Book Appointment
              </button>
            </div>

            {/* Quick Navigation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
              <Link
                to="/#services"
                className="card-modern card-padding text-left hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start">
                  <Heart className="text-primary h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-heading font-semibold text-lg mb-2">
                      Services
                    </div>
                    <div className="text-secondary">View Our Care Options</div>
                  </div>
                </div>
              </Link>

              <a
                className="card-modern card-padding text-left hover:shadow-lg transition-all duration-300"
                href="tel:+19297381230"
              >
                <div className="flex items-start">
                  <Phone className="text-primary h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-heading font-semibold text-lg mb-2">
                      Call Us
                    </div>
                    <div className="text-secondary">(929) 738-1230</div>
                  </div>
                </div>
              </a>

              <Link
                to="/#about"
                className="card-modern card-padding text-left hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start">
                  <ArrowLeft className="text-primary h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-heading font-semibold text-lg mb-2">
                      About Us
                    </div>
                    <div className="text-secondary">Learn More</div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Contact Information */}
            <div className="card-elevated card-padding max-w-2xl mx-auto text-left">
              <h3 className="text-heading text-2xl mb-6 leading-tight">
                Need Help Finding Something?
              </h3>
              <p className="text-secondary mb-8 leading-relaxed">
                Our team is here to help! Contact us and we'll make sure your
                pet gets the care they need.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a href="tel:+19297381230" className="btn-primary-modern">
                  <Phone className="icon-md mr-3" />
                  Call Now
                </a>
                <a href="mailto:bbacvet@gmail.com" className="btn-ghost-modern">
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
