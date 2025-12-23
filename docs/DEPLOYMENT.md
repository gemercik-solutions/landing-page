# Gemercik Solution - Landing Page

## 🚀 Deployment Instructions

### Build untuk Production

```bash
# Build the project
pnpm build

# Preview production build locally
pnpm preview
```

### Deployment Options

#### 1. Netlify (Recommended)

1. Push code ke GitHub repository
2. Connect repository di Netlify
3. Build settings:
   - Build command: `pnpm build`
   - Publish directory: `dist`
4. Deploy!

#### 2. Vercel

1. Push code ke GitHub
2. Import project di Vercel
3. Framework preset: Astro
4. Deploy!

#### 3. Static Hosting (Cloudflare Pages, GitHub Pages, etc.)

```bash
pnpm build
# Upload folder dist/ ke hosting provider
```

## 📦 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.astro    # Navigation bar with scroll effects
│   ├── Hero.astro      # Hero section with animations
│   ├── Services.astro  # Services showcase
│   ├── About.astro     # About & why choose us
│   ├── Process.astro   # Work process steps
│   ├── Testimonials.astro # Client testimonials
│   ├── FAQ.astro       # FAQ accordion
│   ├── CTA.astro       # Call-to-action section
│   ├── Contact.astro   # Contact form & info
│   ├── Footer.astro    # Footer with links
│   ├── FloatingButtons.astro # WhatsApp & scroll-to-top
│   └── Button.astro    # Reusable button component
├── layouts/
│   └── BaseLayout.astro # Base HTML layout with SEO
└── pages/
    ├── index.astro      # Main landing page
    └── api/
        └── hello.json.ts # API example
```

## 🎨 Customization Guide

### Brand Colors (tailwind.config.js)

```javascript
colors: {
  primary: '#0EA5E9',    // Cyan Blue - Digital Water
  secondary: '#FBBF24',  // Amber Gold - Innovation
  dark: '#020617',       // Midnight Tech
}
```

### Content Updates

1. **Hero Section** - Edit [src/components/Hero.astro](src/components/Hero.astro)
2. **Services** - Edit [src/components/Services.astro](src/components/Services.astro)
3. **Contact Info** - Edit [src/components/Contact.astro](src/components/Contact.astro) & [src/components/Footer.astro](src/components/Footer.astro)

### Add Logo

Place your logo in `/public/images/logo.png` (recommended size: 200x60px, transparent PNG)

## ⚡ Performance Optimizations

- ✅ Static Site Generation (SSG)
- ✅ Tailwind CSS v4 with Lightning CSS
- ✅ No heavy JavaScript frameworks
- ✅ Optimized images with Sharp
- ✅ Lazy loading for images and iframes
- ✅ Minified CSS and HTML
- ✅ SEO optimized with meta tags
- ✅ Sitemap generation

## 📞 Contact Information Update

Update these files to change contact information:

1. [src/components/Contact.astro](src/components/Contact.astro)
2. [src/components/Footer.astro](src/components/Footer.astro)
3. [src/components/FloatingButtons.astro](src/components/FloatingButtons.astro)
4. [src/components/CTA.astro](src/components/CTA.astro)

Current dummy data:

- WhatsApp: +62 812-3456-7890
- Email: halo@gemercik.id
- Address: Digital Hub, Level 5, Green Office Park, BSD City, Tangerang

## 🔧 Development

```bash
# Start dev server
pnpm dev

# Check for errors
pnpm astro check

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📈 Lighthouse Score Target

- Performance: 100
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

**Built with ❤️ for Gemercik Solution**
