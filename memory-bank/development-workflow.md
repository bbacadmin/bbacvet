# Development Workflow - bbacvet.com

## Local Development Setup

### Prerequisites

- **Node.js**: Version 18+ recommended
- **npm**: Comes with Node.js installation
- **Git**: For version control

### Installation Steps

1. **Clone the repository** (if not already done):

   ```bash
   git clone <repository-url>
   cd bbacvet
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start development server**:

   ```bash
   npm run dev
   ```

4. **Access the application**:
   - Development server runs on `http://localhost:5173`
   - Hot Module Replacement (HMR) enabled for instant updates

## Build Process

### Development Build

```bash
npm run dev
```

- Starts Vite development server
- Enables hot reloading
- Source maps for debugging
- Fast development feedback loop

### Production Build

```bash
npm run build
```

- Creates optimized production build in `dist/` directory
- Minifies JavaScript and CSS
- Optimizes assets with hashed filenames
- Tree shaking to remove unused code
- Code splitting for optimal loading

### Preview Production Build

```bash
npm run preview
```

- Serves the production build locally
- Useful for testing before deployment
- Runs on `http://localhost:4173`

## Project Structure Navigation

### Key Directories

- `src/` - Source code directory

  - `App.tsx` - Main application component
  - `main.tsx` - React entry point
  - `Router.tsx` - Routing configuration
  - `NotFound.tsx` - 404 page component
  - `index.css` - Tailwind imports + custom styles
  - `styles.css` - Comprehensive custom CSS
  - `assets/` - Images and static assets

- `memory-bank/` - Project documentation
  - `project-context.md` - Business context
  - `technical-architecture.md` - Tech stack
  - `application-structure.md` - Component architecture
  - `styling-system.md` - CSS design system
  - `external-integrations.md` - Third-party services
  - `development-workflow.md` - This file

### Configuration Files

- `package.json` - Dependencies and scripts
- `vite.config.ts` - Vite build configuration
- `tailwind.config.cjs` - Tailwind CSS configuration
- `postcss.config.cjs` - PostCSS configuration
- `index.html` - HTML template with SEO metadata

## Development Practices

### Code Organization

- **Single File Components**: Main application in `App.tsx`
- **TypeScript**: Full type safety throughout
- **CSS Organization**: Design system in `styles.css`
- **Asset Management**: Images in `src/assets/`

### Styling Approach

1. **Tailwind CSS**: For layout and utility classes
2. **Custom CSS**: For design system and complex components
3. **CSS Custom Properties**: For consistent theming

### Component Patterns

- Functional components with React hooks
- Custom hooks for reusable logic
- TypeScript interfaces for props
- Consistent naming conventions

## Testing

### Current Testing Strategy

- Manual testing during development
- Browser testing for responsiveness
- Booking system functionality testing

### Recommended Testing Additions

- **Unit Tests**: Jest + React Testing Library
- **E2E Tests**: Cypress or Playwright
- **Accessibility Testing**: axe-core integration
- **Performance Testing**: Lighthouse audits

## Deployment

### Build Output

- **Directory**: `dist/`
- **Contents**: Optimized HTML, CSS, JS, and assets
- **File Naming**: Hashed filenames for cache busting

### Deployment Platforms

- **Vercel**: Recommended for React applications
- **Netlify**: Alternative static site hosting
- **GitHub Pages**: Free hosting option
- **Traditional Web Hosting**: Any static file server

### Deployment Steps

1. **Build the application**:

   ```bash
   npm run build
   ```

2. **Deploy `dist/` directory** to chosen platform
3. **Configure custom domain** (bbacvet.com)
4. **Set up SSL certificate** for HTTPS
5. **Test production functionality** thoroughly

## Environment Configuration

### Development vs Production

- **Base Path**: Configured in `vite.config.ts` as `"./"`
- **API Endpoints**: Currently none, but pattern established
- **Environment Variables**: Not currently used, but ready for expansion

### Potential Environment Variables

```bash
# .env.example
VITE_BOOKING_CLINIC_ID=brightonbeachac
VITE_BOOKING_SCRIPT_URL=https://book.yourpets.link/widget.js
VITE_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

## Version Control

### Git Workflow

- **Main Branch**: `main` for production-ready code
- **Feature Branches**: For new developments
- **Commit Messages**: Conventional commits recommended
- **Tags**: For version releases

### Recommended Practices

- Regular commits with descriptive messages
- Branch protection for main branch
- Pull request reviews before merging
- Semantic versioning for releases

## Performance Optimization

### Build Optimizations

- **Tree Shaking**: Automatic dead code elimination
- **Minification**: JavaScript and CSS minification
- **Compression**: Gzip/Brotli compression for assets
- **Code Splitting**: Automatic route-based splitting

### Runtime Performance

- **Lazy Loading**: Images and components
- **Efficient Re-renders**: Proper React hook usage
- **CSS Optimization**: Purged Tailwind classes
- **Asset Optimization**: Compressed images

## Maintenance

### Regular Tasks

- **Dependency Updates**: `npm update` regularly
- **Security Audits**: `npm audit` for vulnerabilities
- **Performance Monitoring**: Lighthouse scores
- **Booking System Testing**: Regular functionality checks

### Update Procedures

1. **Check for updates**:

   ```bash
   npm outdated
   ```

2. **Update dependencies**:

   ```bash
   npm update
   ```

3. **Test thoroughly** after updates
4. **Deploy** updated version

## Troubleshooting

### Common Issues

- **Port Conflicts**: Change Vite port if 5173 is occupied
- **Build Errors**: Check TypeScript compilation issues
- **Style Issues**: Verify Tailwind purging configuration
- **Booking Script**: Ensure external script loads correctly

### Debugging Tools

- **Browser DevTools**: For CSS and JavaScript debugging
- **React DevTools**: For component inspection
- **Vite Dev Server**: For build process debugging

## Future Improvements

### Technical Debt

- **Component Splitting**: Break `App.tsx` into smaller components
- **State Management**: Consider Context API or Zustand
- **Testing Suite**: Add comprehensive test coverage
- **TypeScript Strictness**: Enable stricter type checking

### Feature Roadmap

- **Multi-language Support**: Internationalization
- **PWA Features**: Offline capability
- **Admin Dashboard**: For content management
- **Blog Integration**: For educational content

---

_Last Updated: September 2025_
