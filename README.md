# 🚀 Gemercik Solution - Landing Page

<div align="center">

**Solusi Teknologi Terpercaya untuk UMKM Indonesia**

[![Astro](https://img.shields.io/badge/Astro-4.0-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[Demo](https://gemercik.id) • [Dokumentasi](#-dokumentasi) • [Kontribusi](#-contributing)

</div>

---

## 📋 Daftar Isi

- [Tentang Project](#-tentang-project)
- [Tech Stack](#-tech-stack)
- [Fitur Utama](#-fitur-utama)
- [Prerequisites](#-prerequisites)
- [Instalasi](#-instalasi)
- [Development](#-development)
- [Build & Deploy](#-build--deploy)
- [Struktur Project](#-struktur-project)
- [Internationalization (i18n)](#-internationalization-i18n)
- [Kustomisasi](#-kustomisasi)
- [Performance Optimization](#-performance-optimization)
- [SEO](#-seo)
- [Contributing](#-contributing)

---

## 🎯 Tentang Project

**Gemercik Solution Landing Page** adalah website modern dan responsif yang dibangun untuk perusahaan teknologi yang fokus pada pemberdayaan UMKM Indonesia melalui solusi digital. Website ini menampilkan layanan, portfolio, testimonial, dan informasi kontak dengan desain yang elegan dan performa yang optimal.

### Mengapa Project Ini?

- 🎨 **Design Modern**: Menggunakan gradient blue-yellow (#0EA5E9 - #F59E0B) yang mencerminkan brand identity
- ⚡ **Ultra Fast**: Built with Astro untuk performa maksimal (100/100 Lighthouse score)
- 🌐 **Multilingual**: Support Bahasa Indonesia & English
- 📱 **Responsive**: Perfect di semua device (mobile, tablet, desktop)
- ♿ **Accessible**: Mengikuti standar WCAG 2.1 AA
- 🔍 **SEO Optimized**: Meta tags lengkap & structured data

---

## 🛠️ Tech Stack

| Technology       | Version | Purpose                           |
| ---------------- | ------- | --------------------------------- |
| **Astro**        | 4.x     | Static Site Generator & Framework |
| **Tailwind CSS** | v4      | Styling & Design System           |
| **TypeScript**   | 5.x     | Type Safety                       |
| **pnpm**         | Latest  | Package Manager                   |

### Key Dependencies

```json
{
  "astro": "^4.0.0",
  "@astrojs/sitemap": "^3.x",
  "@tailwindcss/vite": "^4.x",
  "@fontsource-variable/inter": "^5.x",
  "@fontsource-variable/plus-jakarta-sans": "^5.x"
}
```

---

## ✨ Fitur Utama

### 🎨 Design System

- **Color Palette**:
  - Primary (Blue): `#0EA5E9` - Cyan/Sky blue
  - Secondary (Yellow): `#F59E0B` - Amber/Gold
  - Background: Gradient dari primary ke secondary
  - Dark theme dengan blur effects & glass morphism

### 📦 Komponen

- ✅ Hero Section dengan animated background
- ✅ Services Grid dengan hover effects
- ✅ About Section dengan statistics
- ✅ Process Timeline (4 steps)
- ✅ Testimonials Carousel
- ✅ FAQ Accordion
- ✅ Contact Form dengan validation
- ✅ Footer dengan social links
- ✅ Floating WhatsApp & Language Switcher

### 🌍 Internationalization

- Bahasa Indonesia (default)
- English
- Easy to add more languages

### 🔍 SEO Features

- Complete meta tags (Open Graph, Twitter Card)
- JSON-LD structured data
- Sitemap generation
- Canonical URLs
- Robots.txt
- Optimized images

---

## 📦 Prerequisites

Pastikan Anda sudah install:

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0 (recommended) atau npm/yarn

```bash
# Install pnpm (jika belum)
npm install -g pnpm

# Verify installation
node --version  # v18+
pnpm --version  # v8+
```

---

## 🚀 Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/gemercik-solution/landing-page.git
cd landing-page
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Setup Environment (Optional)

Jika diperlukan, buat file `.env`:

```env
PUBLIC_SITE_URL=https://gemercik.id
PUBLIC_CONTACT_EMAIL=halo@gemercik.id
PUBLIC_WHATSAPP=6281234567890
```

---

## 💻 Development

### Start Dev Server

```bash
pnpm dev
```

Server akan berjalan di: `http://localhost:4321`

### Development Commands

```bash
# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run type checking
pnpm check
```

### Hot Reload

Astro secara otomatis reload browser saat Anda mengubah file:

- `.astro` files
- `.ts/.js` files
- `globals.css`

---

## 🏗️ Build & Deploy

### Production Build

```bash
# Build static files
pnpm build

# Output akan ada di: dist/
```

### Preview Build

```bash
# Preview production build locally
pnpm preview
```

### Deploy Options

#### 1. **Vercel** (Recommended)

```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel
```

#### 2. **Netlify**

```bash
# Install Netlify CLI
pnpm add -g netlify-cli

# Deploy
netlify deploy --prod
```

#### 3. **Static Hosting** (Apache/Nginx)

Upload folder `dist/` ke server Anda.

**Nginx config:**

```nginx
server {
    listen 80;
    server_name gemercik.id;
    root /var/www/gemercik/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Gzip compression
    gzip on;
    gzip_types text/css application/javascript image/svg+xml;
}
```

---

## 📁 Struktur Project

```
landing-page/
├── public/                 # Static assets
│   ├── images/            # Images, logos, icons
│   ├── robots.txt         # Robots crawler config
│   └── favicon.svg        # Favicon
│
├── src/
│   ├── components/        # Astro components
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── About.astro
│   │   ├── Process.astro
│   │   ├── Testimonials.astro
│   │   ├── FAQ.astro
│   │   ├── Contact.astro
│   │   ├── CTA.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Button.astro
│   │   └── FloatingButtons.astro
│   │
│   ├── layouts/           # Layout components
│   │   └── BaseLayout.astro
│   │
│   ├── lib/              # Utilities & helpers
│   │   └── i18n.ts       # Internationalization system
│   │
│   ├── pages/            # Routes (file-based routing)
│   │   ├── index.astro   # Homepage
│   │   └── api/
│   │       └── hello.json.ts
│   │
│   └── styles/           # Global styles
│       └── globals.css   # Tailwind + custom CSS
│
├── astro.config.mjs      # Astro configuration
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript config
├── package.json          # Dependencies
└── README.md             # This file
```

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
```

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
- 💬 **WhatsApp**: [+62 812-3456-7890](https://wa.me/6281234567890)
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
