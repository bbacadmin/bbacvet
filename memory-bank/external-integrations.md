# External Integrations - bbacvet.com

## Third-Party Services

### Booking System Integration

**Service**: YourPets.link Veterinary Booking Platform
**Purpose**: Online appointment scheduling for clients

**Integration Details:**

- **Script URL**: `https://book.yourpets.link/widget.js`
- **Clinic ID**: `brightonbeachac`
- **Loading Method**: Dynamic script injection via React useEffect
- **Function Call**: `window.YourVetBook(clinicId)`

**Implementation Code:**

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

**Features:**

- Real-time appointment availability
- Client information collection
- Service selection
- Payment processing integration
- Email/SMS confirmation system

## Social Media Integration

### Instagram

**Handle**: @bbac.vet
**Purpose**: Social media presence and client engagement

**Integration Points:**

- Footer social media link
- Potential future Instagram feed integration
- Cross-promotion between website and social media

## SEO and Analytics Integration

### Search Engine Optimization

**Implementation**: Comprehensive meta tags and structured data

**SEO Features:**

- **Meta Tags**: Title, description, keywords, author, robots
- **Open Graph**: Facebook sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Schema.org**: Local business structured data
- **Canonical URL**: `https://bbacvet.com`

**Structured Data Includes:**

- VeterinaryClinic schema type
- Address and geo coordinates
- Opening hours
- Services offered
- Contact information
- Price range and payment methods

### Potential Analytics Integration

**Future Considerations:**

- Google Analytics for traffic monitoring
- Google Search Console for SEO performance
- Conversion tracking for booking completions
- Heat mapping for user behavior analysis

## Email Integration

### Contact Email

**Address**: bbacvet@gmail.com
**Purpose**: Primary business communication

**Integration Points:**

- Contact section email link
- Footer contact information
- Mailto links throughout the site

### Future Email Service Integration

**Potential Services:**

- Email marketing platform (Mailchimp, ConvertKit)
- Transactional email service (SendGrid, Postmark)
- Newsletter subscription system

## Payment Processing

### Current Payment Methods

**Accepted**: Cash, Credit Card, Insurance
**Integration**: Handled through booking system

### Future Payment Integration

**Potential Services:**

- Stripe for online payments
- PayPal integration
- Insurance claim processing API

## Mapping and Location Services

### Google Maps Integration

**Current**: Address display with manual coordinates
**Future Potential**: Embedded Google Maps widget

- Interactive location map
- Directions functionality
- Street view integration

### Geo Coordinates

**Location**: 40.5776° N, -73.9614° W
**Address**: 122 Brighton 11th Street, Brooklyn, NY 11235

## Domain and Hosting

### Domain Registration

**Domain**: bbacvet.com
**Purpose**: Primary business website

### Hosting Platform

**Current**: Vercel/Netlify (based on build configuration)
**Build Output**: Static HTML/CSS/JS files

### SSL Certificate

**Status**: HTTPS enabled (assumed from production deployment)
**Purpose**: Secure data transmission for booking system

## External Asset Hosting

### Image Assets

**Current**: Local hosting within the application
**Future Considerations**: CDN for optimized image delivery

### Icon Library

**Service**: Lucide React (self-contained)
**No external dependencies**: Icons bundled with application

## API Considerations

### Current API Usage

- No external REST API calls
- No GraphQL endpoints
- No real-time data fetching

### Future API Integration Possibilities

- **Patient records system** (if clinic management software available)
- **Inventory management system** for pet products
- **Review platform integration** (Google Reviews, Yelp)
- **Emergency service availability** API

## Security Considerations

### External Script Security

- YourPets.link script loaded from HTTPS
- Async loading for performance
- Script existence check before injection

### Data Privacy

- No sensitive client data stored locally
- Booking system handles PII (Personally Identifiable Information)
- GDPR/CCPA compliance through booking provider

## Performance Impact

### External Script Loading

- **YourPets.link**: Loaded asynchronously, minimal impact
- **No other external dependencies**: Optimized performance

### Bundle Size Optimization

- No large external libraries
- Tree shaking enabled through Vite
- Code splitting for optimal loading

## Monitoring and Maintenance

### External Service Status

- Regular checking of booking system availability
- Monitoring script loading errors
- Tracking booking completion rates

### Update Procedures

- Booking system updates handled by provider
- No manual maintenance required for external services
- Regular testing of booking functionality

---

_Last Updated: September 14, 2025_
