import React from "react";

/**
 * Custom hook for smooth scrolling to page sections
 * Handles user scroll detection and provides smooth scroll functionality
 */
export const useSmoothScroll = () => {
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

/**
 * Simple navigation function for redirecting to main page sections
 * Used in 404 page and other contexts where we need to navigate to sections
 */
export const navigateToSection = (
  navigate: (path: string) => void,
  id: "home" | "services" | "about" | "contact"
) => {
  // Navigate to main page with hash for the section
  navigate(`/#${id}`);
};
