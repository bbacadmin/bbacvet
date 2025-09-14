import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";

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
    const fn = (
      window as { YourVetBook?: (clinicId: string, locationId: string) => void }
    ).YourVetBook;
    if (typeof fn === "function") fn(CLINIC_ID, LOCATION_ID);
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
      <main id="main-content" role="main">
        <Hero launchBooking={launchBooking} scrollTo={scrollTo} />
        <Services launchBooking={launchBooking} />
        <About />
        <Contact launchBooking={launchBooking} />
        <CtaBanner launchBooking={launchBooking} />
        <Footer launchBooking={launchBooking} />
      </main>
    </div>
  );
}
