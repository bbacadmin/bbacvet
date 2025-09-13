# Application Structure - bbacvet.com

## Component Architecture

### Main Application Component (`App.tsx`)

**Location**: `src/App.tsx` (1200+ lines)
**Purpose**: Primary application component containing all sections and functionality

**Key Sections:**

- Header with navigation and mobile menu
- Hero section with call-to-action
- Services grid with detailed service cards
- About section with clinic information
- Contact section with booking capabilities
- Footer with comprehensive information

### Entry Point (`main.tsx`)

**Location**: `src/main.tsx`
**Purpose**: React DOM rendering entry point

```typescript
import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
```

### Router Component (`Router.tsx`)

**Location**: `src/Router.tsx`
**Purpose**: React Router configuration

```typescript
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### 404 Component (`NotFound.tsx`)

**Location**: `src/NotFound.tsx`
**Purpose**: Handles unknown routes

## Key Functional Patterns

### Smooth Scroll Navigation

```typescript
const useSmoothScroll = () => {
  const map = React.useRef<Record<string, HTMLElement | null>>({});
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
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return scrollTo;
};
```

### Booking Widget Integration

```typescript
// External script loading
React.useEffect(() => {
  if (
    document.querySelector('script[src="https://book.yourpets.link/widget.js"]')
  )
    return;
  const s = document.createElement("script");
  s.src = "https://book.yourpets.link/widget.js";
  s.async = true;
  document.body.appendChild(s);
}, []);

const launchBooking = () => {
  const fn = (window as any).YourVetBook;
  if (typeof fn === "function") fn(CLINIC_ID);
};
```

### Mobile Menu State Management

```typescript
const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
```

## Section Organization

### 1. Header Section

- Sticky navigation with logo
- Desktop and mobile navigation patterns
- Active section highlighting
- Booking button integration

### 2. Hero Section

- Main call-to-action
- Clinic information badges
- Contact information display
- Responsive image layout

### 3. Services Section

- Grid of 5 service cards:
  - Veterinary Care
  - Wellness Plans
  - Vaccines
  - Surgery
  - Dentistry
- Each with icon, description, and feature list

### 4. About Section

- Clinic introduction and mission
- Feature highlights grid
- Team and facility information
- Brand values presentation

### 5. Contact Section

- Contact information cards
- Online booking integration
- Visit preparation information
- Location and hours details

### 6. Footer Section

- Comprehensive contact information
- Service listing
- Hours display
- Social media links
- Legal links

## Data Structures

### Service Data Structure

```typescript
{
  title: "Veterinary Care",
  icon: <Stethoscope className="icon-lg" />,
  description: "Comprehensive health examinations...",
  items: [
    "Complete physical exams",
    "Diagnostic testing",
    // ... more items
  ]
}
```

### Feature Data Structure

```typescript
{
  title: "Compassionate Care",
  icon: <Heart className="icon-lg text-green-icon" />,
  description: "We treat every pet as if they were our own..."
}
```

## State Management

### Local State Hooks

- `useState` for mobile menu state
- `useState` for active navigation highlighting
- `useEffect` for scroll detection and header styling
- `useRef` for smooth scroll element mapping

### Constants

- `CLINIC_ID = "brightonbeachac"` - Booking system identifier

## Responsive Design Patterns

### Mobile-First Approach

- CSS custom properties for consistent spacing
- Media queries for tablet and desktop breakpoints
- Mobile navigation overlay
- Responsive grid layouts

### Component Reuse Patterns

- `navItem` function for consistent navigation items
- Service card component pattern
- Feature card component pattern
- Contact item component pattern

## Asset Management

### Image Assets (`src/assets/`)

- `logo.png` - Clinic logo
- `cat.jpg` - Hero cat image
- `dog.jpg` - About section dog image
- `dog2.jpg` - CTA background image

### Icon Usage

- Lucide React icons throughout application
- Consistent sizing with `icon-sm`, `icon-md`, `icon-lg` classes
- Color theming with `text-green-icon` class

---

_Last Updated: September 2025_
