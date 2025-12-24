# Quick Setup Guide

## 🚀 Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser
# Navigate to http://localhost:3000
```

## 🔧 Before Launch Checklist

### 1. Update Contact Information
- [ ] Replace `XXX-XXX-XXXX` with actual phone number (search entire project)
- [ ] Verify/update `info@eaglexlogistics.ca` email address
- [ ] Update business hours if different

### 2. Content Updates
- [ ] Replace placeholder testimonials with real reviews
- [ ] Add real photos to Hero section (replace placeholder)
- [ ] Update service descriptions with specific details
- [ ] Verify all service areas match actual coverage

### 3. Form Integration
- [ ] Set up form submission handler in `components/QuoteSection.tsx`
- [ ] Choose integration:
  - Email service (SendGrid, Resend, etc.)
  - Form backend (Formspree, Netlify Forms)
  - CRM integration
- [ ] Test form submissions end-to-end

### 4. SEO & Analytics
- [ ] Add Google Analytics tracking code
- [ ] Set up Google Search Console
- [ ] Add structured data (JSON-LD) for local business
- [ ] Create sitemap.xml
- [ ] Create robots.txt

### 5. Domain & Hosting
- [ ] Configure domain: eaglexlogistics.ca
- [ ] Set up SSL certificate
- [ ] Configure DNS records
- [ ] Deploy to hosting (Vercel recommended for Next.js)

### 6. Testing
- [ ] Test on mobile devices (iOS & Android)
- [ ] Test on desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify all links work correctly
- [ ] Test form validation
- [ ] Check page load speeds
- [ ] Verify animations work smoothly

## 📝 Key Files to Customize

- `components/Hero.tsx` - Hero image placeholder
- `components/QuoteSection.tsx` - Form submission handler
- `components/ServiceAreas.tsx` - City lists
- `components/Testimonials.tsx` - Client reviews
- `app/layout.tsx` - SEO metadata

## 🎨 Design Customization

Colors are defined in `tailwind.config.ts`:
- Charcoal: `#1a1a1a`
- Gold: `#d4af37`
- Red: `#c41e3a`
- Off-white: `#faf9f6`

Typography:
- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
- Netlify: Connect GitHub repo
- AWS Amplify: Connect repository
- Custom server: `npm run build` then `npm start`

## 📞 Support

For questions or issues, refer to the main README.md file.

