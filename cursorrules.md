# Cursor Rules for Good and Plenty Wellness Website

## Core Technical Stack
- Next.js (React framework)
- TypeScript for type safety
- Tailwind CSS for styling
- Prisma for database ORM (if needed)
- PostgreSQL for database
- Stripe for payment processing
- Vercel for hosting

## Design System

### Colors
- Primary colors to be extracted from logo (pending logo upload)
- Default color scheme until logo is provided:
  ```css
  --primary: #4A5759 (sage green)
  --secondary: #F7F7F7 (off-white)
  --accent: #E8B4BC (muted pink)
  --text: #333333
  --background: #FFFFFF
  ```

### Typography
- Headings: Inter (bold)
- Body: Inter (regular)
- Font sizes following Tailwind's scale

### Layout
- Single page scroll design (except e-commerce)
- Sections:
  - Hero
  - About
  - Services
  - Testimonials
  - Contact
  - FAQ
- Separate routes for:
  - Memberships (/memberships)
  - Resources Shop (/shop)
  - Blog (/blog)

### Components
- Must be responsive
- Mobile-first approach
- Smooth scroll behavior
- Sticky navigation
- Loading states for all interactive elements
- Animated on scroll (subtle)

## Functionality Requirements
1. Navigation
   - Sticky header
   - Mobile hamburger menu
   - Smooth scroll to sections

2. E-commerce
   - Stripe integration
   - Shopping cart
   - Secure checkout
   - Order confirmation

3. Forms
   - Contact form
   - Newsletter signup
   - Consultation booking

4. Performance
   - Next.js Image optimization
   - Lazy loading
   - SEO optimization
   - Meta tags
   - Responsive images

## Code Standards
- TypeScript strict mode
- ESLint configuration
- Prettier formatting
- Component-based architecture
- CSS modules or Tailwind
- Responsive breakpoints:
  ```css
  sm: 640px
  md: 768px
  lg: 1024px
  xl: 1280px
  2xl: 1536px
  ```

## Accessibility
- WCAG 2.1 compliance
- Semantic HTML
- Proper ARIA labels
- Keyboard navigation
- Color contrast compliance

## SEO Requirements
- Meta tags
- Open Graph tags
- Sitemap
- Robots.txt
- Structured data

## Performance Targets
- Lighthouse score > 90
- First Contentful Paint < 1.5s
- Time to Interactive < 3.5s
- Core Web Vitals compliance

## Security
- HTTPS only
- XSS protection
- CSRF protection
- Input sanitization
- Secure headers

## Version Control
- Git
- Feature branch workflow
- Semantic commit messages
- PR reviews required

## Deployment
- Vercel platform
- Automated deployments
- Environment variables
- Preview deployments

## Testing
- Jest for unit tests
- React Testing Library
- E2E testing with Cypress
- Accessibility testing

This document should be updated as new requirements or changes are identified. 