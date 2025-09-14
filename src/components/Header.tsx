import React from "react";
import { Phone, Menu, X } from "lucide-react";
import logoImg from "../assets/logo.png";

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
      scrollTo(id as any);
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
              {navItem("home", "Home", active, scrollTo)}
              {navItem("services", "Services", active, scrollTo)}
              {navItem("about", "About", active, scrollTo)}
              {navItem("contact", "Contact", active, scrollTo)}
              <div className="items-center hidden md:flex">
                <a
                  href="tel:+19297381230"
                  className="text-slate-800 items-center flex mr-3.5 hover:text-emerald-600 transition-colors"
                >
                  <Phone className="icon-md text-emerald-600 mr-1.5" />
                  <span className="text-xs">(929) 738-1230</span>
                </a>
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
    </>
  );
}
