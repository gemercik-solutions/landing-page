# 🚀 Gemercik Solution - Landing Page

Modern landing page untuk perusahaan teknologi yang fokus pada pemberdayaan UMKM Indonesia.

[![Astro](https://img.shields.io/badge/Astro-5.16-FF5D01?style=flat-square&logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

---

## ⚡ Quick Start

```bash
# Install dependencies
pnpm install

# Development server
pnpm dev

# Build for production
pnpm build

# Preview build
pnpm preview
```

---

## 🛠️ Tech Stack

- **Astro 5.16** - Static Site Generator
- **Tailwind CSS v4** - Styling (CSS-based config)
- **TypeScript** - Type safety
- **Custom i18n** - Indonesian & English support

---

## 📁 Project Structure

```
/
├── src/
│   ├── components/     # Astro components
│   ├── layouts/        # Layout templates
│   ├── lib/
│   │   └── i18n.ts    # Translation system (480 lines, 150+ keys)
│   ├── pages/          # Routes
│   └── styles/         # Global CSS
├── public/
│   ├── images/         # Static assets
│   └── robots.txt      # SEO
└── dist/              # Build output
```

---

## 🌐 Internationalization

### System Overview

File: `src/lib/i18n.ts` contains:

- 150+ translation keys
- Indonesian (default) & English
- Runtime language switching via data-i18n attributes

### Usage Pattern

```astro
---
import { t } from '../lib/i18n';

const title = t('section.title');        // Get Indonesian text
const titleKey = 'section.title';        // Key for data-i18n
---

<!-- Display actual text, enable runtime switching -->
<h1 data-i18n={titleKey}>{title}</h1>
```

### Adding Translations

1. Edit `src/lib/i18n.ts`:

```typescript
export const translations = {
  id: { key: "Teks Indonesia" },
  en: { key: "English Text" },
};
```

2. Use in component (see pattern above)

3. Test language toggle (ID/EN button in header)

---

## 🎨 Design System

**Colors:**

- Primary: `#0EA5E9` (Sky/Cyan)
- Secondary: `#F59E0B` (Amber/Gold)
- Gradients: Blue to Yellow throughout

**Components:**

- Hero with animated background
- Services grid with hover effects
- About section with stats
- Process timeline (4 steps)
- FAQ accordion
- Contact form
- Testimonials

---

## 🔍 SEO Features

- ✅ Meta tags (Open Graph, Twitter Cards)
- ✅ JSON-LD structured data
- ✅ Auto-generated sitemap
- ✅ robots.txt configured
- ✅ Semantic HTML5

---

## 📝 Key Files

| File                           | Purpose             |
| ------------------------------ | ------------------- |
| `src/lib/i18n.ts`              | Translation system  |
| `src/layouts/BaseLayout.astro` | Main layout         |
| `src/components/*.astro`       | Page sections       |
| `public/robots.txt`            | SEO directives      |
| `astro.config.mjs`             | Astro configuration |

---

## 🐛 Known Issues (Non-Critical)

Unused files with import errors (safe to ignore/delete):

- `src/components/sections/*`
- `src/components/ui/text/Text.astro`
- `src/components/Navbar.astro`

---

## 📚 Documentation

- [TRANSLATION-FIX.md](./TRANSLATION-FIX.md) - i18n implementation details
- [PRODUCTION-READY.md](./PRODUCTION-READY.md) - Deployment checklist

---

## 🤝 Contributing

1. Fork repository
2. Create feature branch: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add AmazingFeature'`
4. Push to branch: `git push origin feature/AmazingFeature`
5. Open Pull Request

---

## 📧 Contact

**Gemercik Solution**  
Website: https://gemercik.id  
Email: halo@gemercik.id  
WhatsApp: +62 813-1036-6949

---

**License:** MIT
gzip on;
gzip_types text/css application/javascript image/svg+xml;
}

```

---

## 📁 Struktur Project

```

landing-page/
├── public/ # Static assets
│ ├── images/ # Images, logos, icons
│ ├── robots.txt # Robots crawler config
│ └── favicon.svg # Favicon
│
├── src/
│ ├── components/ # Astro components
│ │ ├── Hero.astro
│ │ ├── Services.astro
│ │ ├── About.astro
│ │ ├── Process.astro
│ │ ├── Testimonials.astro
│ │ ├── FAQ.astro
│ │ ├── Contact.astro
│ │ ├── CTA.astro
│ │ ├── Footer.astro
│ │ ├── Header.astro
│ │ ├── Button.astro
│ │ └── FloatingButtons.astro
│ │
│ ├── layouts/ # Layout components
│ │ └── BaseLayout.astro
│ │
│ ├── lib/ # Utilities & helpers
│ │ └── i18n.ts # Internationalization system
│ │
│ ├── pages/ # Routes (file-based routing)
│ │ ├── index.astro # Homepage
│ │ └── api/
│ │ └── hello.json.ts
│ │
│ └── styles/ # Global styles
│ └── globals.css # Tailwind + custom CSS
│
├── astro.config.mjs # Astro configuration
├── tailwind.config.ts # Tailwind configuration
├── tsconfig.json # TypeScript config
├── package.json # Dependencies
└── README.md # This file

````

---

## 🌍 Internationalization (i18n)

### System Overview

Project ini menggunakan custom i18n system yang lightweight dan mudah digunakan.

### File Structure

```typescript
// src/lib/i18n.ts
export const translations = {
  id: {
    "hero.heading1": "Semua Yang Anda Butuhkan",
    "hero.heading2": "Untuk",
    "hero.heading3": "Bertumbuh",
    // ...
  },
  en: {
    "hero.heading1": "Everything You Need",
    "hero.heading2": "To",
    "hero.heading3": "Grow",
    // ...
  },
};
````

### Usage in Components

```astro
<!-- In .astro files -->
<h1 data-i18n="hero.heading1">Fallback Text</h1>

<!-- Will be replaced by i18n system -->
```

### Adding New Language

1. Edit `src/lib/i18n.ts`:

```typescript
export const translations = {
  id: {
    /* existing */
  },
  en: {
    /* existing */
  },
  ja: {
    // Add Japanese
    "hero.heading1": "あなたが必要とするすべて",
    // ...
  },
};
```

2. Update language switcher in `FloatingButtons.astro`:

```astro
<button onclick="switchLanguage('ja')">🇯🇵</button>
```

### How It Works

1. User selects language → saved to `localStorage`
2. On page load → `initLanguage()` reads `localStorage`
3. All elements with `data-i18n` attribute → text replaced
4. Smooth transition with fade effect

---

## 🎨 Kustomisasi

### Colors

Edit `tailwind.config.ts`:

```typescript
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#38BDF8",
          500: "#0EA5E9", // Main blue
          600: "#0284C7",
        },
        secondary: {
          400: "#FBBF24",
          500: "#F59E0B", // Main yellow
          600: "#D97706",
        },
      },
    },
  },
};
```

### Fonts

Current fonts:

- **Headings**: Plus Jakarta Sans
- **Body**: Inter

To change:

```typescript
// src/layouts/BaseLayout.astro
import "@fontsource-variable/your-font";
```

```css
/* globals.css */
.font-heading {
  font-family: "Your Font", sans-serif;
}
```

### Logo

Replace `/public/images/logo.svg` with your logo.

---

## ⚡ Performance Optimization

### Current Optimizations

✅ **Static Site Generation** - Pre-rendered HTML
✅ **Image Optimization** - Astro Image component
✅ **CSS Minification** - Lightning CSS
✅ **HTML Compression** - Enabled in config
✅ **Font Optimization** - Variable fonts
✅ **Lazy Loading** - Images & components
✅ **Code Splitting** - Automatic

### Lighthouse Scores

| Metric         | Score |
| -------------- | ----- |
| Performance    | 100   |
| Accessibility  | 100   |
| Best Practices | 100   |
| SEO            | 100   |

### Tips

1. **Images**: Use WebP format, add width/height
2. **Fonts**: Use variable fonts, preload critical fonts
3. **CSS**: Remove unused Tailwind classes
4. **JS**: Minimize client-side JavaScript

---

## 🔍 SEO

### Meta Tags

Fully implemented in `BaseLayout.astro`:

- Title & Description
- Open Graph (Facebook)
- Twitter Card
- Canonical URLs
- Keywords
- Robots directives

### Structured Data

JSON-LD schema for Organization:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Gemercik Solution",
  "url": "https://gemercik.id",
  "logo": "https://gemercik.id/images/logo.svg"
  // ... more data
}
```

### Sitemap

Auto-generated via `@astrojs/sitemap`:

```javascript
// astro.config.mjs
integrations: [
  sitemap({
    changefreq: 'weekly',
    priority: 0.7,
  }),
],
```

Access at: `https://gemercik.id/sitemap-index.xml`

---

## 🤝 Contributing

Kami sangat welcome kontribusi dari developer lain!

### How to Contribute

1. **Fork** repository ini
2. **Create** branch baru (`git checkout -b feature/AmazingFeature`)
3. **Commit** changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to branch (`git push origin feature/AmazingFeature`)
5. **Open** Pull Request

### Coding Standards

- ✅ Use TypeScript untuk type safety
- ✅ Follow Airbnb style guide
- ✅ Write descriptive commit messages
- ✅ Add comments untuk complex logic
- ✅ Test di multiple browsers
- ✅ Ensure accessibility (a11y)

---

## 📞 Kontak & Support

Butuh bantuan atau punya pertanyaan?

- 🌐 **Website**: [gemercik.id](https://gemercik.id)
- 📧 **Email**: halo@gemercik.id
- 💬 **WhatsApp**: [+62 813-1036-3949](https://wa.me/6281234567890)
- 📱 **Instagram**: [@gemercik.solution](https://instagram.com/gemercik.solution)
- 💼 **LinkedIn**: [Gemercik Solution](https://linkedin.com/company/gemercik-solution)

---

## 🙏 Acknowledgments

- [Astro](https://astro.build) - Amazing framework
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- [Heroicons](https://heroicons.com) - Beautiful icons
- [Fontsource](https://fontsource.org) - Self-hosted fonts
- Community contributors ❤️

---

<div align="center">

**Made with ❤️ by Gemercik Solution**

⭐ **Star this repo** if you find it helpful!

[Back to Top](#-gemercik-solution---landing-page)

</div>
