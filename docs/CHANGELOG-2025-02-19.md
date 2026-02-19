# Changelog – Perubahan 19 Februari 2025

Dokumen ini mencatat semua perubahan yang dilakukan pada proyek **Gemercik Solution Landing** pada tanggal 19 Februari 2025, agar dapat ditelusuri (trace) dengan mudah.

---

## Ringkasan

| Kategori            | Ringkasan perubahan |
|---------------------|----------------------|
| **Package**         | Update dependency, hapus `framer-motion` |
| **i18n**            | Tambah terjemahan EN untuk paragraf About |
| **Performance**     | Gambar, font, animasi, dan script untuk mobile |
| **Clean code**      | Satu titik init bahasa, hapus script kosong |
| **Mobile UX**       | Ganti menu hamburger dengan bottom navigation bar |

---

## 1. Package (`package.json`)

### Dependency yang di-update

| Package              | Sebelum   | Sesudah   |
|----------------------|-----------|-----------|
| `@astrojs/sitemap`   | ^3.6.0    | ^3.7.0    |
| `@tailwindcss/vite`  | ^4.1.18   | ^4.2.0    |
| `astro`              | ^5.16.6   | ^5.17.3   |
| `astro-seo`          | ^0.8.4    | ^1.1.0    |
| `tailwind-merge`     | ^3.4.0    | ^3.5.0    |
| `tailwindcss`        | ^4.1.18   | ^4.2.0    |

### DevDependency yang di-update

| Package    | Sebelum | Sesudah |
|------------|---------|---------|
| `prettier` | ^3.7.4   | ^3.8.1   |

### Dependency yang dihapus

- **`framer-motion`** (^12.23.26) – tidak dipakai di mana pun di `src/`, dihapus untuk mengurangi ukuran bundle dan beban di mobile.

### Lainnya

- **`eslint`** tetap ^9.39.2 (versi 10 major, bisa di-upgrade terpisah).
- Format `package.json` dirapikan (pretty-print).

---

## 2. i18n (Terjemahan & About)

### File: `src/lib/i18n.ts`

- **Key baru (ID):** `about.description3`
  - Teks: *"Dengan fokus pada inovasi AI dan pengembangan aplikasi modern, kami membantu UMKM bertransformasi digital dan bersaing di pasar global. Semua yang Anda butuhkan untuk bertumbuh, ada pada Gemercik Solution."*

- **Key baru (EN):** `about.description3`
  - Teks: *"With a focus on AI innovation and modern application development, we help SMEs digitally transform and compete in the global market. Everything you need to grow is here at Gemercik Solution."*

### File: `src/components/About.astro`

- Paragraf kedua (yang sebelumnya hardcoded) diganti memakai i18n:
  - Menambah atribut `data-i18n="about.description3"` dan konten `{t('about.description3')}`.
  - Ganti bahasa (ID/EN) sekarang mengubah paragraf ini juga.

---

## 3. Performance (Mobile & Umum)

### File: `src/layouts/BaseLayout.astro`

- **Hapus:** `preconnect` dan `dns-prefetch` ke `https://fonts.googleapis.com` (font dipakai dari `@fontsource-variable`, tidak dari Google Fonts).
- **Tambah:** Satu script pemanggil `initLanguage()` di body (inisialisasi bahasa hanya di layout).

### File: `src/components/Header.astro`

- **Logo:** `width="160"`, `height="40"`, `fetchpriority="high"` untuk mendukung LCP.

### File: `src/components/Hero.astro`

- **Client logos (6 gambar):** `width="120"`, `height="40"`, `loading="lazy"`.

### File: `src/components/Footer.astro`

- **Logo:** `width="160"`, `height="40"`, `loading="lazy"`.

### File: `src/styles/globals.css`

- **`@media (prefers-reduced-motion: reduce)`:** Matikan animasi (float, glow, fade-up/down, slide, scale) untuk aksesibilitas dan pengurangan beban main thread.
- **`.animate-float`:** `contain: layout style` untuk mengisolasi layer dan mengurangi repaint.

---

## 4. Clean code & refactor

### Inisialisasi bahasa (satu titik)

- **BaseLayout.astro:** Script `import { initLanguage } from '../lib/i18n'; initLanguage();` dipindah ke sini (hanya satu kali di body).
- **Komponen berikut tidak lagi memanggil `initLanguage()`:**  
  Hero, About, Services, Process, Testimonials, FAQ, CTA, Contact, Footer.
- **Script kosong yang dihapus:** Footer, CTA, FAQ, Process, Testimonials, Services (setelah isi script hanya `initLanguage()` dihapus).
- **About.astro:** Blok `<script>` yang hanya berisi init bahasa dihapus (tetap ada `<style>`).

---

## 5. Mobile: Bottom navigation (ganti hamburger)

### File baru: `src/components/MobileBottomNav.astro`

- Bottom navigation bar **hanya tampil di mobile** (`md:hidden`).
- **5 item:** Beranda (Home), Layanan (Services), Tentang (About), FAQ, Kontak (Contact).
- Setiap item: ikon SVG (inline) + label; mendukung i18n (ID/EN) dan event `languageChanged`.
- **Active state:** Item yang sesuai section yang terlihat di viewport diberi warna primary (deteksi scroll).
- **Gaya tema:**
  - Dark: background gradient gelap + backdrop-blur, border atas primary, shadow.
  - Light: background terang, border primary, shadow halus.
- **Layout:** `max-width: 480px`, centered; `padding-bottom: env(safe-area-inset-bottom)` untuk notched devices.

### File: `src/components/Header.astro`

- **Dihapus:** Tombol hamburger (menu icon) dan seluruh dropdown “Mobile Menu”.
- **Dihapus (script):** Logic buka/tutup mobile menu dan listener klik link di menu.
- **Dipertahankan di mobile:** Logo + Theme toggle + Language toggle saja.

### File: `src/pages/index.astro`

- **Import:** `MobileBottomNav` dari `../components/MobileBottomNav.astro`.
- **Main:** Tambah class `pb-20 md:pb-8` pada `<main>` agar konten tidak tertutup bottom nav di mobile.
- **Render:** `<MobileBottomNav />` ditambahkan setelah `<Footer />` (sebelum `<FloatingButtons />`).

---

## Daftar file yang diubah / ditambah

| Aksi    | Path |
|---------|------|
| **Baru**  | `src/components/MobileBottomNav.astro` |
| **Baru**  | `docs/CHANGELOG-2025-02-19.md` (dokumen ini) |
| **Edit**  | `package.json` |
| **Edit**  | `src/lib/i18n.ts` |
| **Edit**  | `src/components/About.astro` |
| **Edit**  | `src/layouts/BaseLayout.astro` |
| **Edit**  | `src/components/Header.astro` |
| **Edit**  | `src/components/Hero.astro` |
| **Edit**  | `src/components/Footer.astro` |
| **Edit**  | `src/styles/globals.css` |
| **Edit**  | `src/pages/index.astro` |
| **Edit**  | `src/components/Footer.astro` (script dihapus) |
| **Edit**  | `src/components/CTA.astro` (script dihapus) |
| **Edit**  | `src/components/FAQ.astro` (script dihapus) |
| **Edit**  | `src/components/Process.astro` (script dihapus) |
| **Edit**  | `src/components/Testimonials.astro` (script dihapus) |
| **Edit**  | `src/components/Services.astro` (script dihapus) |

---

## Cara menelusuri perubahan di Git

```bash
# Lihat diff untuk tanggal tertentu (sesuaikan branch/commit)
git log --since="2025-02-19" --until="2025-02-20" --oneline
git diff <commit-before>..<commit-after> -- src/
```

Atau gunakan `git log -p` / Cursor/VSCode “Compare with…” pada file di atas untuk melihat perubahan baris per baris.

---

*Dokumen ini dibuat untuk keperluan trace perubahan 19 Februari 2025.*
