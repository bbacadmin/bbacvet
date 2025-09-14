import React from "react";
import { Menu, X } from "lucide-react";
import ClinicInfo from "./ClinicInfo";
import ContactLink from "./ContactLink";

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  active: string;
  scrollTo: (id: keyof typeof map) => void;
  launchBooking: () => void;
}

const map = {
  home: null,
  services: null,
  about: null,
  contact: null,
};

const navItem = (
  id: string,
  label: string,
  active: string,
  scrollTo: (id: keyof typeof map) => void
) => (
  <a
    key={id}
    href={`#${id}`}
    onClick={(e) => {
      e.preventDefault();
      scrollTo(id as keyof typeof map);
    }}
    className={`nav-link ${active === id ? "active" : ""}`}
  >
    {label}
  </a>
);

export default function Header({
  mobileMenuOpen,
  setMobileMenuOpen,
  active,
  scrollTo,
  launchBooking,
}: HeaderProps) {
  return (
    <>
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Header */}
      <header id="site-header" className="site-header" role="banner">
        <div className="content-wrapper">
          <div className="header-content">
            <ClinicInfo variant="header" onClick={() => scrollTo("home")} />
            <nav className="main-nav">
              {navItem("home", "Home", active, scrollTo)}
              {navItem("services", "Services", active, scrollTo)}
              {navItem("about", "About", active, scrollTo)}
              {navItem("contact", "Contact", active, scrollTo)}
              <div className="items-center hidden md:flex">
                <ContactLink type="phone" variant="header" />
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

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <ClinicInfo variant="mobile" />
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
                  scrollTo(id as keyof typeof map);
                  setMobileMenuOpen(false);
                }}
                className={`mobile-nav-link ${active === id ? "active" : ""}`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>
          <div className="mobile-menu-contact">
            <ContactLink type="phone" variant="mobile" />
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
    </>
  );
}
