import React from "react";
import { Heart, Home, Phone, Calendar, Mail } from "lucide-react";
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
                  <div className="flex items-center justify-center h-14 w-14 mr-3.5 rounded-xl gradient-primary text-white shadow-lg">
                    <Heart className="text-white h-6 w-6" />
                  </div>
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
                  <div className="flex items-center justify-center h-14 w-14 mr-3.5 rounded-xl gradient-primary text-white shadow-lg">
                    <Phone className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-heading font-semibold text-lg mb-2">
                      Call Us
                    </div>
                    <div className="text-secondary">(929) 738-1230</div>
                  </div>
                </div>
              </a>

              <a
                className="card-modern card-padding text-left hover:shadow-lg transition-all duration-300"
                href="mailto:bbacvet@gmail.com"
              >
                <div className="flex items-start">
                  <div className="flex items-center justify-center h-14 w-14 mr-3.5 rounded-xl gradient-primary text-white shadow-lg">
                    <Mail className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-heading font-semibold text-lg mb-2">
                      Email Us
                    </div>
                    <div className="text-secondary">bbacvet@gmail.com</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer launchBooking={launchBooking} />
    </div>
  );
}
