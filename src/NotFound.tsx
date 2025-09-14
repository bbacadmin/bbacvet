import React from "react";
import { Heart, Home, Phone, Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import logoImg from "./assets/logo.png";

export default function NotFound() {
  const launchBooking = () => {
    const fn = (window as any).YourVetBook;
    if (typeof fn === "function") fn("brightonbeachac");
  };

  return (
    <div className="site-container">
      {/* Header */}
      <header className="site-header">
        <div className="content-wrapper">
          <div className="header-content">
            <Link to="/" className="logo-link">
              <img src={logoImg} alt="bbacvet logo" className="logo-image" />
              <div className="logo-text">
                <span className="logo-title">bbacvet.com</span>
                <span className="logo-subtitle">Veterinary Care</span>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* 404 Content */}
      <section className="section section-white notfound-section">
        <div className="content-wrapper">
          <div className="notfound-content">
            {/* 404 Badge */}
            <div
              className="hero-badge"
              style={{
                marginBottom: "var(--spacing-xl)",
                justifyContent: "center",
              }}
            >
              <Heart className="icon-lg text-green-icon" />
              <span>404 - Page Not Found</span>
            </div>

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
            <div
              className="hero-info-grid"
              style={{ maxWidth: "36rem", margin: "0 auto var(--spacing-2xl)" }}
            >
              <Link
                to="/#services"
                className="card card-padding-sm"
                style={{ textDecoration: "none" }}
              >
                <div className="hero-badge">
                  <Heart className="icon-sm text-green-icon" />
                  Services
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--color-emerald-800)",
                  }}
                >
                  View Our Care Options
                </div>
              </Link>

              <a
                className="card card-padding-sm"
                href="tel:+19297381230"
                style={{ textDecoration: "none" }}
              >
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

              <Link
                to="/#about"
                className="card card-padding-sm"
                style={{ textDecoration: "none" }}
              >
                <div className="hero-badge">
                  <ArrowLeft className="icon-sm text-green-icon" />
                  About Us
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--color-emerald-800)",
                  }}
                >
                  Learn More
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

      {/* Footer */}
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
                Compassionate veterinary care for your beloved pets.
              </p>
            </div>
            <div>
              <div className="footer-section-title">Quick Links</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--spacing-sm)",
                }}
              >
                <Link
                  to="/"
                  style={{
                    color: "var(--color-gray-400)",
                    textDecoration: "none",
                  }}
                >
                  Home
                </Link>
                <Link
                  to="/#services"
                  style={{
                    color: "var(--color-gray-400)",
                    textDecoration: "none",
                  }}
                >
                  Services
                </Link>
                <Link
                  to="/#contact"
                  style={{
                    color: "var(--color-gray-400)",
                    textDecoration: "none",
                  }}
                >
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <div className="footer-section-title">Contact</div>
              <div style={{ color: "var(--color-gray-400)" }}>
                <div>(929) 738-1230</div>
                <div>bbacvet@gmail.com</div>
                <div>122 Brighton 11th Street</div>
                <div>Brooklyn, NY 11235</div>
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
