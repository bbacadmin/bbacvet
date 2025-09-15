import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";

export default function Router() {
  // Load booking widget script globally for all routes
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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
