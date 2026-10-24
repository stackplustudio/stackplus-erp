# 🎨 StackPlus Studio — UI Design System (ui.md)

> **Single Source of Truth untuk seluruh UI StackPlus Studio**: website marketing dan aplikasi Core Engine (`apps/web`).
> Dokumen ini mengikuti toolchain dan token yang benar-benar ada di `apps/web/src/app/globals.css` dan `apps/web/src/app/layout.tsx`. Pola visual marketing di bawah tetap menjadi panduan desain.
>
> Legenda keyakinan:
> - ✅ **Dari kode**: nilai pasti, wajib diikuti.
> - 🔶 **Dari screenshot**: nilai perkiraan visual. Verifikasi ke komponen asli, lalu hapus tanda ini.
> - 🧩 **Ekstensi**: pola baru untuk Core Engine (dashboard, login) yang diturunkan dari token yang sama.

---

## 0. Aturan untuk AI Agent (BACA DULU)

1. Baca dokumen ini sebelum membuat atau mengubah UI apa pun.
2. **Jangan membuat warna, font, radius, shadow, atau animasi baru.** Pakai token dan pola di dokumen ini.
3. Proyek ini memakai Tailwind CSS v4 dengan konfigurasi CSS-first di `globals.css` (`@import "tailwindcss"` dan `@theme inline`). Jangan menambahkan konfigurasi Tailwind v3 kecuali migrasi disepakati.
4. Pakai warna dari token (`brand-primary`, `brand-background`, `brand-surface`, `brand-surface-alt`, `brand-line`, `brand-ink`), bukan hex acak.
5. Reuse komponen yang ada di `apps/web/src/components/` sebelum membuat yang baru.
6. Setiap halaman: hierarchy jelas, **satu CTA utama**, mobile-first, tanpa horizontal overflow.
7. Jika ragu: **cari pola yang paling mirip di dokumen ini, jangan menciptakan gaya baru.**

---

## 1. Visual Identity

Karakter StackPlus: **modern, bersih, hangat, percaya diri, profesional, bersahabat.**

Rumus visual:

```text
Warm off-white background
+ White / cream cards dengan border tipis
+ SATU warna aksen: biru solid
+ Heading tebal, tracking rapat, dua warna (hitam + biru)
+ Tombol pill
+ Motion halus (hover-lift, reveal saat scroll, marquee)
```

Prinsip:

- **Flat dan bersih dulu**, bukan glass. Efek blur hanya dipakai sebagai glow dekoratif di latar hero dan untuk navbar/pill. Jangan menjadikan glassmorphism sebagai gaya utama card.
- **Satu aksen.** Biru dipakai untuk aksi, penekanan, dan state aktif. Jangan tambah warna dekoratif lain.
- **Whitespace lega.** Jangan membuat layout padat.

Prioritas keputusan:

```text
Usability > Readability > Hierarchy > Consistency > Aesthetic
```

---

## 2. Stack & Sumber Token

| Hal | Nilai |
|---|---|
| Framework | Next.js 16, App Router |
| Styling | Tailwind CSS **v4** (`@tailwindcss/postcss`, CSS-first di `globals.css`) |
| Plugin | `tw-animate-css` dan import tema shadcn |
| Font | **Inter** melalui `next/font/google` di `layout.tsx` |
| Icon | Lucide (outline) atau inline SVG `stroke="currentColor"` |
| Notifikasi | React Hot Toast |
| HTTP | Axios |
| Lokasi komponen | `apps/web/src/components/` (`layout/`, `ui/`, section) |

Catatan: `globals.css` memiliki token shadcn OKLCH (`--primary`, `--radius`, dan lainnya) serta token merek terpisah (`--brand-*`). Jangan menganggap kedua kelompok token memiliki nilai yang sama; pilih kelompok yang konsisten dengan komponen.

---

## 3. Color ✅

### Token (CSS variables di `globals.css`)

| Token Tailwind | Hex | Fungsi |
|---|---|---|
| `brand-primary` | `#0053F1` | Aksen utama, CTA, link, state aktif, card aktif |
| `brand-primary-dark` | `#003CB3` | Hover/pressed varian gelap |
| `brand-background` | `#FCFBF6` | Background halaman (warm off-white) |
| `brand-surface` | `#FDFBF7` | Permukaan card/section |
| `brand-surface-alt` | `#F6F3EC` | Permukaan alternatif, glow latar, area tonal |
| `brand-line` | `#EAE5D9` | Border/divider hangat |
| `brand-ink` | `#423E3A` | Teks hangat (sekunder/body) |
| `brand-ink-dark` | `#2A2724` | Teks gelap hangat |

### Warna yang dipakai langsung di kode (Tailwind default)

| Class | Fungsi |
|---|---|
| `text-gray-900` | Heading, teks utama (juga diset di `<body>`) |
| `text-gray-500` | Paragraf, deskripsi, teks pendukung |
| `text-gray-400` | Ikon dan placeholder |
| `text-gray-700` | Teks input |
| `bg-white` | Input pill, card putih |
| `border-gray-100` | Border sangat tipis pada elemen putih |
| `shadow-gray-200/50` | Warna shadow lembut |

### Dark / charcoal 🔶

- **Dark pill** (tombol "Book a Session", "Book a Call"): background charcoal hampir hitam (sekitar `#1F1F1F` / `ink-dark`), teks putih.
- **Marquee band** kedua berwarna charcoal.

### Semantik 🧩

Belum ada di kode. Untuk aplikasi (toast, badge status, validasi):

```text
Success: #16A34A   (Tailwind green-600)
Warning: #F59E0B   (amber-500)
Error:   #DC2626   (red-600)
Info:    use primary
```

### Aturan warna

- Biru hanya untuk: tombol utama, link/aksi, kata penekanan di heading, tag kategori, state aktif/fokus, card aktif.
- Jangan memakai gradient warna-warni. Satu-satunya "gradient" adalah glow blur biru/krem yang sangat halus di latar.
- Jangan memakai navy `#00232C` dan `#0053FF` dari versi lama. Keduanya **tidak ada** di kode asli.
- Warna bukan satu-satunya penanda status (sertakan ikon atau teks).

### Dark mode

Belum ada toggle dark mode pada aplikasi. Token `.dark` ada di `globals.css`, tetapi halaman saat ini memakai tema terang. Jangan menambah toggle atau varian visual tanpa keputusan baru.

---

## 4. Typography ✅🔶

**Font aplikasi saat ini: Inter**, dimuat melalui `next/font/google` dan diterapkan pada `<body>` di `layout.tsx`. Gunakan font aplikasi tersebut; jangan menganggap Plus Jakarta Sans sudah tersedia secara lokal.

### Skala (panduan visual)

| Peran | Class / ukuran | Weight |
|---|---|---|
| Hero H1 ✅ | `text-5xl lg:text-7xl leading-[1.1] tracking-tight` | `font-bold` |
| Section heading 🔶 | `text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight` | `font-bold` |
| Card title 🔶 | `text-lg` – `text-xl` | `font-semibold` |
| Body ✅ | `text-base leading-relaxed text-gray-500` | normal |
| Body kecil / deskripsi card 🔶 | `text-sm text-gray-500` | normal |
| Eyebrow / badge / nav 🔶 | `text-xs uppercase tracking-wider` | `font-semibold` |
| Button ✅ | `text-xs font-bold` (uppercase) | bold |
| Meta (tahun, caption) 🔶 | `text-xs text-gray-400` | medium |

### Pola heading dua warna (WAJIB untuk heading section)

Baris/kata pertama gelap, kata penekanan `text-brand-primary`:

```tsx
<h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
  Our Expertise That <br />
  <span className="text-brand-primary">Drives Impact</span>
</h2>
```

Aturan: penekanan biru maksimal 1 frasa (2–3 kata) per heading. Gunakan `<br />` untuk memecah baris agar bentuk blok rapi.

Mobile: heading harus turun ukuran (`text-5xl` → `lg:text-7xl`), jangan memakai ukuran desktop di mobile.

---

## 5. Layout & Spacing

### Container ✅

```tsx
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
```

- Lebar maksimal `max-w-7xl` (1280px).
- Padding horizontal: 16px mobile, 24px `sm`, 32px `lg`.

### Offset halaman ✅

`<main className="min-h-screen pt-28">` — navbar bersifat fixed/floating, jadi konten diberi `pt-28`.

### Spacing 🔶

- Pakai skala Tailwind (kelipatan 4px).
- Jarak antar section: sekitar `py-16` mobile → `py-24` desktop.
- Hero: `pt-4 pb-10 lg:pt-8 lg:pb-12` ✅.
- Grid hero: `grid lg:grid-cols-2 gap-10 items-center` ✅.
- Jarak heading → paragraf: `mb-6`; paragraf → CTA: `mb-10` ✅.

---

## 6. Radius, Border, Shadow

### Radius ✅🔶

| Elemen | Aturan |
|---|---|
| Button | `rounded-full` (pill); di mobile boleh `rounded-xl` bila full-width ✅ |
| Input pill / form email | `rounded-full` (desktop), `rounded-2xl` (mobile stack) ✅ |
| Card | `rounded-2xl` – `rounded-3xl` 🔶 |
| Blok CTA besar | `rounded-3xl` 🔶 |
| Badge / tag | `rounded-full` |
| Ikon sosial footer | `rounded-lg`/`rounded-xl` di kotak biru 🔶 |
| Gambar portfolio | ikut radius card (`overflow-hidden`) |

Jangan membuat semua elemen `rounded-full`. Pill khusus untuk button, badge, nav, dan input pill.

### Border ✅

- Card dan elemen putih memakai **border tipis**: `border border-brand-line` (hangat) atau `border border-gray-100`.
- Hindari border tebal atau berwarna cerah, kecuali state aktif/hover (`border-brand-primary/30`).

### Shadow ✅🔶

| Pemakaian | Nilai |
|---|---|
| Form pill (hero) ✅ | `shadow-lg shadow-gray-200/50` |
| Card hover ✅ | `0 16px 32px -12px rgb(0 83 241 / 0.2)` (bertint biru) |
| Card aktif (biru) 🔶 | shadow biru lembut, mis. `shadow-xl shadow-brand-primary/20` |
| Floating project card hero 🔶 | `shadow-2xl shadow-brand-primary/20` |

Shadow harus lembut dan lebar, tidak keras. Default card diam = tanpa shadow atau sangat tipis.

---

## 7. Motion ✅

### Referensi animasi (panduan visual)

| Class | Durasi | Dipakai untuk |
|---|---|---|
| `animate-marquee-x` | 40s linear infinite | Carousel/marquee ke kiri (translateX 0 → -50%) |
| `animate-marquee-x-reverse` | 40s linear infinite | Carousel baris kedua arah sebaliknya |
| `animate-marquee` | 20s linear infinite | Marquee band (translateX 0 → -100%) |
| `animate-float` | 6s ease-in-out infinite | Floating project card di hero (naik-turun 10px) |
| `animate-pulse` | bawaan Tailwind | Titik status ("Trusted by founders"), glow latar |

Custom animation pada tabel adalah referensi desain, belum dikonfigurasi sebagai keyframes/utilities aplikasi. Dari daftar tersebut, hanya `animate-pulse` yang tersedia bawaan.

### Utility yang belum terpasang

- **`.card-hover`** dan **`.hide-scrollbar`**: belum didefinisikan di `globals.css`; jangan menggunakannya sebelum utility tersebut benar-benar ditambahkan.
- **`.reveal` / `Reveal`**: belum didefinisikan sebagai utility atau komponen aplikasi; pola fade dan rise hanya referensi desain.

### Transisi umum

- Button: `transition-all`, hover `hover:bg-brand-primary-dark` ✅.
- Aturan angka: interaksi mikro 200–300ms.

### Larangan

- Jangan menambah animasi infinite selain yang terdaftar di atas.
- Tidak ada spinning UI, bouncing berlebihan, atau parallax besar.
- Hormati `prefers-reduced-motion` pada animasi baru.

---

## 8. Komponen

### 8.1 Button ✅🔶

**Primary (biru)** — aksi utama:

```tsx
<button className="bg-brand-primary text-white px-6 py-3 rounded-xl sm:rounded-full text-xs font-bold uppercase hover:bg-brand-primary-dark transition-all whitespace-nowrap">
  Contact Us
</button>
```

**Dark pill** — CTA sekunder di navbar dan header section (🔶, ada titik merah kecil di kiri):

```tsx
<a className="inline-flex items-center gap-2 bg-brand-ink-dark text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-black transition-all">
  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
  Book a Call
</a>
```

**Link aksi** — "Learn More →", "View case study ↗" (🔶): teks `text-xs font-semibold`, `text-brand-primary` (atau putih di card biru), ikon panah kecil.

Aturan: hanya **satu tombol primary per viewport**. Ikon dan teks dipisah `gap-2`. Target sentuh minimal 44px tinggi.

### 8.2 Input & Form ✅

Pola "email pill" (hero dan CTA):

```tsx
<form className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-2xl sm:rounded-full p-2 shadow-lg shadow-gray-200/50 max-w-md border border-gray-100 gap-2 sm:gap-0">
  <div className="flex items-center flex-1 px-2 py-2 sm:py-0">
    <div className="pr-2 text-gray-400">{/* ikon mail 20px, stroke 2 */}</div>
    <input
      type="email"
      required
      aria-label="Your email address"
      placeholder="Enter your email here"
      className="flex-1 bg-transparent border-none focus:outline-none text-sm text-gray-700 w-full"
    />
  </div>
  <button className="bg-brand-primary text-white w-full sm:w-auto px-6 py-3 rounded-xl sm:rounded-full text-xs font-bold hover:bg-brand-primary-dark transition-all whitespace-nowrap">
    CONTACT US
  </button>
</form>
```

Aturan:
- Input selalu punya `aria-label` atau `<label>`.
- Form lead memakai FormSubmit (`FORMSUBMIT_ACTION`), field hidden `_captcha=false` dan `_subject` berprefiks `[New Lead] ...`.
- Di CTA biru, input pill berlatar putih dengan border/ring putih.
- Focus state harus terlihat (ring `brand-primary`) untuk input non-pill 🧩.

### 8.3 Eyebrow, Badge, Tag 🔶

- **Status dot**: `w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse` + `text-sm font-medium text-gray-500` ("Trusted by founders") ✅.
- **Top badge**: pill gelap kecil di tengah atas, titik hijau, teks "Available for new projects" 🔶.
- **Eyebrow section**: teks `text-xs uppercase tracking-wider text-gray-400`, diapit tanda sudut, contoh `› EXPERTISE ‹`.
- **Tag kategori portfolio**: `text-[10px] uppercase font-semibold tracking-wider text-brand-primary` + tahun (`text-gray-400`) di sampingnya.

### 8.4 Section Header (pola split) 🔶

```text
[ Eyebrow ]
[ Heading dua warna ]           [ Deskripsi 2–3 baris ]
                                [ Dark pill CTA ]
```

Kiri: eyebrow + heading. Kanan: deskripsi `text-sm text-gray-500 max-w-sm` + dark pill. Di mobile menumpuk ke bawah (heading → deskripsi → CTA).

### 8.5 Card 🔶

**Card standar (putih/outline):**

```tsx
<div className="rounded-2xl border border-brand-line bg-brand-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-primary/30">
```
Isi: ikon dalam kotak `bg-brand-primary/10 text-brand-primary rounded-xl`, judul `font-semibold`, deskripsi `text-sm text-gray-500`, link "Learn More →".

**Card aktif (biru solid)** — satu card yang disorot (mis. UI/UX Design, kartu "Experience"):

```tsx
<div className="bg-brand-primary text-white rounded-2xl p-6 shadow-xl shadow-brand-primary/20">
```
Teks putih, deskripsi `text-white/80`, ikon di kotak `bg-white/15`.

Aturan: **maksimal satu card aktif per grup.** Di desktop grid 3 kolom, tablet 2, mobile 1. Jangan menyalin teks deskripsi antar card.

**Portfolio card:**

```text
┌────────────────────┐
│  Gambar (atas)     │  ← bg biru + logo/mockup, overflow-hidden
├────────────────────┤
│ WEB DEVELOPMENT 2026│ ← tag biru + tahun
│ StackPlus POS      │ ← judul font-semibold
│ Deskripsi 1 baris… │ ← text-xs text-gray-500, line-clamp-1
│ View case study ↗  │ ← link biru
└────────────────────┘
```
Disusun sebagai carousel 2 baris, auto-scroll berlawanan arah. Utility marquee dan `hide-scrollbar` belum tersedia di aplikasi; tambahkan implementasinya sebelum memakai pola ini.

**Stat card:** ikon kecil, angka besar, label kecil. Kartu pertama boleh aktif biru. Pastikan baris statistik tidak menimpa section lain.

**Bento "Why Us"** 🔶: grid asimetris berisi card kualitas (rating dots), foto tim + carousel, progress ring (93% / 87% / 73%, ring biru, tengah lebih besar), dan list vertikal dengan item aktif menonjol (titik biru).

### 8.6 Hero ✅

- Kiri (`max-w-xl`): status dot → H1 dua warna → paragraf → form email pill.
- Kanan: container `relative w-full h-[360px] sm:h-[400px] lg:h-[460px]`, berisi `HeroShowcase` (floating project card biru bertumpuk) dengan glow latar:
  - `bg-brand-surface-alt rounded-full opacity-40 blur-3xl`
  - `bg-brand-primary opacity-[0.05] sm:opacity-10 rounded-full blur-2xl sm:blur-3xl animate-pulse`
- Fallback bila tidak ada project: logo StackPlus di tengah (`drop-shadow-xl`).
- Dekorasi lingkaran garis tipis di belakang card 🔶.

### 8.7 Marquee Band Miring 🔶

Dua band saling silang di bawah hero: satu **biru** (teks putih), satu **charcoal**. Dirotasi kecil (±2–3°), isi berupa layanan dan statistik dipisah ikon bintang `✦`, bergerak dengan `animate-marquee-x` / reverse. Teks `text-sm font-medium`. Pastikan `overflow-hidden` di wrapper agar tidak ada scroll horizontal.

### 8.8 CTA Block 🔶

Blok biru besar `rounded-3xl`, padding lega, dengan **watermark "STACKPLUS" raksasa** samar (`text-white/5`, terpotong) di belakang. Kiri: heading putih besar + paragraf `text-white/80`. Kanan: label "Stay up to date" + email pill putih. Satu CTA utama.

### 8.9 Navbar 🔶

- Floating/fixed di atas (konten diberi `pt-28`).
- Kiri: logo StackPlus. Tengah: pill putih berisi menu `HOME · ABOUT · SERVICE · PORTFOLIO · CONTACT` (`text-xs uppercase font-semibold`; link aktif/hover = `text-brand-primary`). Kanan: dark pill "Book a Session".
- Efek blur halus boleh dipakai di pill nav (`bg-white/80 backdrop-blur`).
- Mobile: menu berubah menjadi hamburger, target sentuh ≥ 44px.

### 8.10 Footer 🔶

3 kolom + brand: logo + tagline pendek, **Quick Links**, **Services**, **Connect** (ikon sosial di kotak biru `rounded-lg`, putih di dalam). Baris bawah: copyright kiri, "Privacy Policy" dan "Terms of Service" kanan. Heading kolom `font-semibold text-sm`, link `text-sm text-gray-500 hover:text-brand-primary`.

### 8.11 Chatbot Floating ✅🔶

`<Chatbot />` selalu dirender di layout. Tombol bulat biru, fixed kanan-bawah, ikon chat putih. Jangan menaruh elemen penting yang tertutup di area kanan-bawah (terutama di mobile).

### 8.12 Icon

- Outline, stroke konsisten (`strokeWidth 2`, `round` cap/join), `currentColor`.
- Ukuran: 16–20px inline, 20–24px di kotak ikon.
- Tidak boleh 3D atau emoji sebagai ikon UI.

---

## 9. Urutan Halaman Landing 🔶

```text
Top badge (Available for new projects)
Navbar
Hero (heading + email form + showcase)
Marquee band miring
Expertise (service cards)
Portfolio (carousel 2 baris)
Why StackPlus (bento)
Stat row
CTA block
Footer  (+ Chatbot floating)
```

Setiap halaman baru: ikuti ritme ini. Section diawali eyebrow + heading dua warna, diakhiri satu CTA.

---

## 10. Responsive ✅

Mobile-first dengan breakpoint Tailwind (`sm 640`, `md 768`, `lg 1024`, `xl 1280`).

- Hero: 1 kolom mobile → `lg:grid-cols-2`.
- Grid card: 1 → 2 → 3 kolom.
- Form email: stack vertikal di mobile, satu baris di `sm`.
- Header section split menumpuk di mobile.
- Tinggi visual hero mengecil di mobile (`h-[360px]` → `lg:h-[460px]`).
- Tidak boleh ada horizontal overflow (marquee wajib dalam wrapper `overflow-hidden`).
- Bila konflik: **usability mobile > dekorasi desktop.**

---

## 11. Accessibility

- Kontras teks cukup (jangan memakai `text-gray-400` untuk teks penting).
- Semua input punya `label` atau `aria-label`.
- Tombol ikon saja wajib `aria-label`.
- Gambar punya `alt`, gambar dekoratif `alt=""`.
- Focus state terlihat dan keyboard navigation berfungsi.
- Target sentuh ≥ 44×44px.
- Animasi dekoratif menghormati `prefers-reduced-motion`.
- Status tidak boleh hanya dibedakan lewat warna.

---

## 12. 🧩 Core Engine App UI (Login, Dashboard, CRUD)

Bagian ini **ekstensi**: belum ada di screenshot, diturunkan dari token yang sama agar aplikasi terasa satu keluarga dengan website. Sesuaikan jika sudah ada desain aplikasi asli.

**Prinsip:** lebih padat dan fungsional dari marketing, tapi tetap warm-neutral + satu biru. Tanpa marquee, tanpa float, tanpa watermark.

### Login

- Background `bg-brand-background`, card tengah `bg-white border border-brand-line rounded-3xl shadow-lg shadow-gray-200/50 p-8 max-w-md`.
- Logo di atas, H1 kecil (`text-2xl font-bold`), heading boleh dua warna.
- Input: `h-12 rounded-xl border border-brand-line bg-white px-4 text-sm focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary`.
- Tombol submit primary penuh lebar. Error di bawah field `text-xs text-red-600`. Feedback global lewat toast.

### Dashboard shell

- Sidebar kiri `bg-brand-surface border-r border-brand-line`, lebar ~256px; item aktif `bg-brand-primary text-white rounded-xl`, item biasa `text-gray-600 hover:bg-brand-surface-alt rounded-xl`.
- Topbar `bg-brand-background/80 backdrop-blur border-b border-brand-line` berisi judul halaman dan menu user.
- Area konten `bg-brand-background`, padding `p-6 lg:p-8`, container `max-w-7xl`.
- Mobile: sidebar menjadi drawer.

### Data table

- Dibungkus card `bg-white border border-brand-line rounded-2xl overflow-hidden`.
- Header `bg-brand-surface-alt text-xs uppercase tracking-wider text-gray-500`; baris `border-t border-brand-line hover:bg-brand-surface`.
- Aksi per baris berupa ghost icon button. Pagination dan search di atas tabel (input pill kecil).

### Form CRUD

- Dalam card atau modal (`rounded-3xl`), label `text-sm font-semibold text-gray-900` (jarak `mb-2`), pesan error di bawah field.
- Tombol: primary di kanan, ghost "Cancel" di kiri-nya.

### State

- **Loading:** skeleton `bg-brand-surface-alt animate-pulse rounded-xl`.
- **Empty:** ikon di kotak `bg-brand-primary/10`, judul, deskripsi, satu tombol primary.
- **Error:** card dengan teks merah dan tombol "Try again".
- **Badge status:** pill `text-xs font-semibold` dengan latar tint (`bg-green-50 text-green-700`, `bg-amber-50 text-amber-700`, `bg-red-50 text-red-700`) + teks/ikon.

### Toast (React Hot Toast)

Gaya: background putih, border `line`, `rounded-xl`, teks `text-sm text-gray-900`, ikon sukses hijau dan error merah, posisi `top-right`, durasi ~3–4 detik. Gunakan untuk hasil aksi (simpan, hapus, gagal login), bukan untuk pesan permanen.

---

## 13. Do & Don't

**Do**
- Pakai `bg-brand-background`, `bg-white`/`bg-brand-surface`, `border-brand-line`, `text-gray-900/500`, `text-brand-primary`.
- Heading dua warna, eyebrow di atas section, header split.
- Gunakan hover/reveal utilities yang tersedia; custom `card-hover` dan `Reveal` belum didefinisikan.
- Satu card aktif biru per grup, satu CTA utama per halaman.

**Don't**
- Jangan gradient warna-warni, warna baru, atau font baru.
- Jangan glassmorphism berlebihan pada card. Efek blur terbatas pada nav/pill dan glow latar.
- Jangan dark mode.
- Jangan shadow keras atau border tebal.
- Jangan menambah animasi infinite baru.
- Jangan hex hard-coded jika sudah ada token (`#0053F1` → `brand-primary`).
- Jangan menyalin teks dummy antar card.

---

## 14. ⚠️ Catatan Teknis & Utang Konsistensi

Hal-hal berikut ditemukan di kode saat ini. Putuskan dan rapikan, lalu perbarui dokumen ini.

1. Token warna merek didefinisikan sebagai CSS variables `--brand-*` di `globals.css` dan diekspos sebagai utility Tailwind v4.
2. Tema shadcn menggunakan token OKLCH terpisah dari token merek. Komponen baru perlu memilih token yang sesuai dan konsisten.
3. Token radius/shadow khusus merek belum disediakan; gunakan utilities Tailwind yang ada secara konsisten, jangan menambah konfigurasi v3.
4. Variabel tema shadcn (`--primary`, `--radius`, dan lainnya) sudah didefinisikan terpisah dari token `--brand-*`.
5. Nilai 🔶 (radius card, padding section, ukuran heading section, warna dark pill) tetap merupakan panduan visual, bukan konfigurasi aplikasi.

---

## 15. Checklist Sebelum Commit UI

- [ ] Hanya memakai token dan class dari dokumen ini.
- [ ] Font = Inter dari root layout, tidak ada font baru.
- [ ] Heading section mengikuti pola dua warna dan eyebrow.
- [ ] Satu CTA utama, tombol pill sesuai jenisnya.
- [ ] Card memakai border tipis; gunakan hover utility yang sudah benar-benar tersedia.
- [ ] Responsif 1/2/3 kolom, tidak ada horizontal overflow.
- [ ] Input punya label/aria-label, focus state terlihat, target sentuh ≥ 44px.
- [ ] Tidak ada animasi infinite baru, tidak ada warna/gradient baru.
- [ ] Komponen existing sudah dicek sebelum membuat yang baru.

---

## 🏆 Golden Rule

```text
JANGAN MEMBUAT STYLE BARU.
Cari pola paling mirip → pakai Existing Token + Existing Component + Existing Pattern.
```

> **Warm background. Satu biru. Pill & card bersih. Heading dua warna.**
> **One Studio. One Design Language. One UI System.**