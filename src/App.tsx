import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";
import { useSmoothScroll } from "./utils/navigation";
import { launchBooking } from "./utils/booking";

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
