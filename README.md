# EagleX Logistics - Premium White Glove Website

A premium, conversion-optimized website for EagleX Logistics featuring white glove positioning, luxury design, and smooth animations.

## 🎨 Design Philosophy

**Luxury White Glove Theme**
- Dark charcoal background with off-white text
- Gold (#d4af37) and red (#c41e3a) accent colors
- Premium typography (Playfair Display + Inter)
- Clean, minimal, executive aesthetic

## ✨ Key Features

- **Premium Positioning**: White glove/red carpet service differentiation
- **GSAP Animations**: Hero parallax, headline reveals, smooth transitions
- **Framer Motion**: Section reveals, micro-interactions, card animations
- **Mobile-First**: Responsive design with sticky mobile CTA bar
- **Conversion-Optimized**: Clear CTAs, quote forms, trust indicators
- **SEO Ready**: Proper metadata, semantic HTML, structured content

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Homepage
│   ├── services/           # Services page
│   ├── service-areas/      # Service areas page
│   ├── why-eaglex/         # Why EagleX page
│   ├── quote/              # Quote request page
│   └── contact/            # Contact page
├── components/
│   ├── Navbar.tsx          # Sticky navigation with CTA
│   ├── Hero.tsx            # Hero section with GSAP parallax
│   ├── RedCarpetService.tsx # White glove service showcase
│   ├── ServicesGrid.tsx    # Services grid
│   ├── ServiceAreas.tsx    # Ontario & Quebec coverage
│   ├── WhyEagleX.tsx       # Differentiators
│   ├── Testimonials.tsx    # Client testimonials
│   ├── QuoteSection.tsx    # Quote form
│   ├── Footer.tsx          # Footer with links
│   └── MobileCTA.tsx       # Sticky mobile CTA bar
└── app/globals.css          # Global styles & Tailwind config
```

## 🎯 Key Differentiators vs Ontario Home Delivery

1. **Premium Positioning**: White glove/red carpet service as core differentiator
2. **Luxury Design**: Dark theme with gold accents vs generic mover aesthetic
3. **Service Emphasis**: Assembly, placement, cleanup prominently featured
4. **Target Audience**: High-value furniture, luxury homes, commercial installs
5. **Geographic Coverage**: Ontario + Quebec (broader than reference)

## 🔧 Customization

### Update Contact Information

Replace placeholder phone numbers and emails:
- Search for `XXX-XXX-XXXX` and replace with actual phone
- Search for `info@eaglexlogistics.ca` and verify/update email

### Add Real Images

Replace placeholder visuals in:
- `components/Hero.tsx` - Hero section image
- Add real photos of trucks, crew, installations

### Configure Form Submission

Update `components/QuoteSection.tsx` to integrate with:
- Email service (SendGrid, Resend, etc.)
- Form backend (Formspree, Netlify Forms, etc.)
- CRM integration

### Update Service Areas

Edit city lists in `components/ServiceAreas.tsx` to match actual coverage.

## 📱 Pages

- **Home** (`/`) - Full homepage with all sections
- **Services** (`/services`) - Detailed services overview
- **Service Areas** (`/service-areas`) - Coverage map and cities
- **Why EagleX** (`/why-eaglex`) - Differentiators and testimonials
- **Get a Quote** (`/quote`) - Quote request form
- **Contact** (`/contact`) - Contact information

## 🎨 Design System

### Colors
- **Charcoal**: `#1a1a1a` (primary background)
- **Gold**: `#d4af37` (accent, luxury)
- **Red**: `#c41e3a` (accent, red carpet)
- **Off-white**: `#faf9f6` (text)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Buttons**: Bold, uppercase, tight letter-spacing

### Components
- `.btn-primary` - Red CTA buttons
- `.btn-secondary` - Gold outlined buttons
- `.card-premium` - Premium card styling
- `.section-padding` - Consistent section spacing

## 🚀 Performance

- Optimized animations (GSAP for hero, Framer Motion for sections)
- Lazy loading for images
- Smooth scroll behavior
- Mobile-optimized interactions

## 📝 Next Steps

1. **Add Real Content**:
   - Replace placeholder testimonials with real reviews
   - Add actual photos/videos
   - Update service descriptions with specifics

2. **Integrate Backend**:
   - Set up form submission handler
   - Add analytics (Google Analytics, etc.)
   - Configure email notifications

3. **SEO Enhancements**:
   - Add structured data (JSON-LD)
   - Optimize images with alt text
   - Add sitemap.xml
   - Configure robots.txt

4. **Launch Checklist**:
   - Update all contact information
   - Test form submissions
   - Verify all links work
   - Test on multiple devices/browsers
   - Set up domain (eaglexlogistics.ca)

## 📄 License

Proprietary - EagleX Logistics Inc.

---

Built with Next.js 14, TypeScript, Tailwind CSS, GSAP, and Framer Motion.

# eaglex
