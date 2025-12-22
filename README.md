# Gemercik Solution - Premium Landing Page

🚀 **Production-ready landing page** untuk Gemercik Solution - AI Solutions & Automation company di Indonesia.

## ✨ Features

- ✅ **Premium Design System** dengan brand Gemercik (Deep Blue, Electric Blue, Aqua Cyan, Innovation Gold)
- ✅ **Animated Logo & Components** dengan smooth micro-interactions
- ✅ **Responsive Navbar** dengan scroll effects & mobile menu
- ✅ **10 Sections** lengkap: Hero, Services, Use Cases, Process, Case Studies, Pricing, FAQ, Contact
- ✅ **SEO-Optimized** dengan structured data, OG tags, sitemap
- ✅ **Performance-First** dengan Astro + Tailwind CSS v4
- ✅ **Type-Safe** components dengan TypeScript & CVA
- ✅ **WhatsApp Integration** untuk lead capture

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production  
pnpm build

# Preview production build
pnpm preview
```

Server: http://localhost:4321/

## 🛠️ Tech Stack

- **Astro 5.16+** - Fast, SEO-friendly framework
- **Tailwind CSS v4** - Utility-first styling  
- **TypeScript** - Type safety
- **CVA** - Component variants
- **@astrojs/sitemap** - Auto sitemap generation

## 📁 Structure

```
src/
├── components/
│   ├── Logo.astro (animated)
│   ├── Navbar.astro (responsive)
│   ├── Footer.astro
│   ├── sections/ (Hero, Services, etc.)
│   └── ui/ (Button, Card, Container, etc.)
├── layouts/BaseLayout.astro
├── lib/
│   ├── site.ts (config & content)
│   ├── seo.ts (SEO utilities)
│   └── cn.ts (className utility)
├── pages/index.astro
└── styles/
    ├── app.css (Tailwind + tokens)
    └── global.css (base styles)
```

## 🎨 Customization

**Brand Colors:** Edit `src/styles/app.css`  
**Site Info:** Edit `src/lib/site.ts`  
**Content:** Edit arrays di `site.ts` (SERVICES, PRICING_TIERS, FAQ_ITEMS)

## 📞 Contact

- **Email:** gemercikstudio@gmail.com
- **WhatsApp:** +62 813-1036-3949

---

**Built with ❤️ for Production-Ready Web Apps**
