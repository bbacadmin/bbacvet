# Technical Architecture - bbacvet.com

## Technology Stack

### Core Framework

- **React**: 18.3.1 - Modern React with hooks and functional components
- **TypeScript**: 5.5.3 - Type safety and developer experience
- **Vite**: 5.2.0 - Fast build tool and development server

### Styling

- **Tailwind CSS**: 3.4.10 - Utility-first CSS framework
- **Custom CSS**: Comprehensive design system with CSS custom properties
- **PostCSS**: 8.4.45 - CSS processing with autoprefixer

### Routing

- **React Router DOM**: 7.8.2 - Client-side routing for SPA

### Icons

- **Lucide React**: 0.542.0 - Consistent icon library

## Build Configuration

### Vite Configuration (`vite.config.ts`)

```typescript
export default defineConfig({
  plugins: [react()],
  base: "./", // Relative paths for deployment
  build: {
    assetsDir: "assets",
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
});
```

### Tailwind Configuration (`tailwind.config.cjs`)

```javascript
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

### PostCSS Configuration (`postcss.config.cjs`)

- Uses autoprefixer for vendor prefixing

## Project Structure

```
bbacvet/
├── src/
│   ├── App.tsx          # Main application component (1200+ lines)
│   ├── main.tsx         # React DOM rendering entry point
│   ├── Router.tsx       # React Router configuration
│   ├── NotFound.tsx     # 404 page component
│   ├── index.css        # Tailwind imports + custom styles
│   ├── styles.css       # Comprehensive custom CSS (800+ lines)
│   └── assets/          # Images and logos
├── index.html           # HTML template with SEO metadata
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
├── tailwind.config.cjs  # Tailwind configuration
└── postcss.config.cjs   # PostCSS configuration
```

## Development Dependencies

- `@types/react`: 18.3.5 - React TypeScript types
- `@types/react-dom`: 18.3.2 - React DOM TypeScript types
- `@vitejs/plugin-react`: 4.3.1 - Vite React plugin
- `autoprefixer`: 10.4.20 - CSS vendor prefixing
- `typescript`: 5.5.3 - TypeScript compiler

## Production Dependencies

- `react`: 18.3.1 - React library
- `react-dom`: 18.3.1 - React DOM rendering
- `react-router-dom`: 7.8.2 - React routing
- `lucide-react`: 0.542.0 - Icon library

## Build Process

1. **Development**: `npm run dev` - Vite development server with HMR
2. **Build**: `npm run build` - Production build with optimized assets
3. **Preview**: `npm run preview` - Local preview of production build

## Key Technical Decisions

- **SPA Architecture**: Single Page Application for smooth navigation
- **TypeScript**: Full type safety throughout the application
- **CSS Custom Properties**: Design system with consistent spacing and colors
- **Mobile-First**: Responsive design with mobile navigation
- **SEO Optimized**: Comprehensive meta tags and structured data

## Performance Considerations

- **Code Splitting**: Vite's built-in code splitting for optimal loading
- **Asset Optimization**: Hashed filenames for cache busting
- **CSS Optimization**: Tailwind purging and custom CSS optimization

---

_Last Updated: September 2025_
