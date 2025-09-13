# Styling System - bbacvet.com

## CSS Architecture

### Dual CSS Approach

- **Tailwind CSS**: Utility-first classes for layout and rapid styling
- **Custom CSS**: Design system with CSS custom properties for consistency

### File Structure

- `src/index.css`: Tailwind imports + custom styles import
- `src/styles.css`: Comprehensive custom CSS design system (800+ lines)

## Design Tokens (CSS Custom Properties)

### Color Palette

```css
:root {
  /* Primary Colors */
  --color-green-primary: #059669; /* Emerald green - primary brand color */
  --color-green-light: #d1fae5; /* Light green for backgrounds */
  --color-green-dark: #065f46; /* Dark green for hover states */

  /* Neutral Colors */
  --color-white: #ffffff;
  --color-black: #000000;
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;

  /* Semantic Colors */
  --color-text-primary: var(--color-gray-900);
  --color-text-secondary: var(--color-gray-600);
  --color-background: var(--color-white);
  --color-border: var(--color-gray-200);

  /* Icon Colors */
  --color-green-icon: var(--color-green-primary);
}
```

### Spacing System

```css
:root {
  --space-1: 0.25rem; /* 4px */
  --space-2: 0.5rem; /* 8px */
  --space-3: 0.75rem; /* 12px */
  --space-4: 1rem; /* 16px */
  --space-5: 1.25rem; /* 20px */
  --space-6: 1.5rem; /* 24px */
  --space-8: 2rem; /* 32px */
  --space-10: 2.5rem; /* 40px */
  --space-12: 3rem; /* 48px */
  --space-16: 4rem; /* 64px */
  --space-20: 5rem; /* 80px */
  --space-24: 6rem; /* 96px */
  --space-32: 8rem; /* 128px */
  --space-40: 10rem; /* 160px */
  --space-48: 12rem; /* 192px */
  --space-56: 14rem; /* 224px */
  --space-64: 16rem; /* 256px */
}
```

### Typography Scale

```css
:root {
  --text-xs: 0.75rem; /* 12px */
  --text-sm: 0.875rem; /* 14px */
  --text-base: 1rem; /* 16px */
  --text-lg: 1.125rem; /* 18px */
  --text-xl: 1.25rem; /* 20px */
  --text-2xl: 1.5rem; /* 24px */
  --text-3xl: 1.875rem; /* 30px */
  --text-4xl: 2.25rem; /* 36px */
  --text-5xl: 3rem; /* 48px */
  --text-6xl: 3.75rem; /* 60px */
  --text-7xl: 4.5rem; /* 72px */
  --text-8xl: 6rem; /* 96px */
  --text-9xl: 8rem; /* 128px */
}
```

### Border Radius

```css
:root {
  --radius-sm: 0.125rem; /* 2px */
  --radius: 0.25rem; /* 4px */
  --radius-md: 0.375rem; /* 6px */
  --radius-lg: 0.5rem; /* 8px */
  --radius-xl: 0.75rem; /* 12px */
  --radius-2xl: 1rem; /* 16px */
  --radius-3xl: 1.5rem; /* 24px */
  --radius-full: 9999px;
}
```

## Component Classes

### Icon Sizing

```css
.icon-sm {
  width: 1rem;
  height: 1rem;
}

.icon-md {
  width: 1.5rem;
  height: 1.5rem;
}

.icon-lg {
  width: 2rem;
  height: 2rem;
}
```

### Button Styles

```css
.btn-primary {
  background-color: var(--color-green-primary);
  color: var(--color-white);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-6);
  font-weight: 600;
  transition: all 0.2s;
}

.btn-primary:hover {
  background-color: var(--color-green-dark);
}
```

### Card Styles

```css
.card {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  padding: var(--space-6);
}
```

## Responsive Breakpoints

### Mobile-First Approach

```css
/* Base styles (mobile) */
.container {
  padding: var(--space-4);
}

/* Tablet (768px+) */
@media (min-width: 768px) {
  .container {
    padding: var(--space-6);
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .container {
    padding: var(--space-8);
  }
}
```

### Grid System

```css
.grid-1 {
  display: grid;
  gap: var(--space-6);
}

.grid-2 {
  grid-template-columns: repeat(1, 1fr);
}

@media (min-width: 768px) {
  .grid-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-2 {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Animation and Transitions

### Smooth Transitions

```css
.transition-all {
  transition: all 0.3s ease-in-out;
}

.transition-colors {
  transition: color 0.2s, background-color 0.2s, border-color 0.2s;
}
```

### Hover Effects

```css
.hover-lift {
  transition: transform 0.2s ease-in-out;
}

.hover-lift:hover {
  transform: translateY(-2px);
}
```

## Utility Classes

### Spacing Utilities

```css
.p-4 {
  padding: var(--space-4);
}
.m-4 {
  margin: var(--space-4);
}
.space-y-4 > * + * {
  margin-top: var(--space-4);
}
```

### Text Utilities

```css
.text-green {
  color: var(--color-green-primary);
}
.text-center {
  text-align: center;
}
.font-semibold {
  font-weight: 600;
}
```

### Display Utilities

```css
.flex {
  display: flex;
}
.grid {
  display: grid;
}
.hidden {
  display: none;
}
```

## Tailwind Integration

### Configuration

```javascript
// tailwind.config.cjs
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

### Usage Pattern

- Tailwind for layout and rapid prototyping
- Custom CSS for design system and complex components
- CSS custom properties for consistent theming

## Performance Considerations

### CSS Optimization

- Tailwind purging removes unused styles
- Custom CSS organized for optimal loading
- CSS custom properties reduce duplication

### Responsive Strategy

- Mobile-first CSS structure
- Progressive enhancement approach
- Optimized for various screen sizes

---

_Last Updated: September 2025_
