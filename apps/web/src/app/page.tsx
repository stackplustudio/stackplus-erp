import {
  ArrowDown,
  ArrowRight,
  Blocks,
  Braces,
  Database,
  GitBranch,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const stack = [
  {
    name: "Web",
    detail: "Next.js 16 App Router",
    icon: Blocks,
    accent: "bg-brand-primary/10 text-brand-primary",
  },
  {
    name: "API",
    detail: "NestJS 11 REST API",
    icon: Braces,
    accent: "bg-brand-surface-alt text-brand-ink-dark",
  },
  {
    name: "Data",
    detail: "Prisma + PostgreSQL",
    icon: Database,
    accent: "bg-brand-primary/10 text-brand-primary",
  },
];

const capabilities = [
  {
    title: "Monorepo terstruktur",
    detail:
      "pnpm workspaces dan Turborepo menyatukan web, API, dan package database dalam satu alur kerja.",
    icon: Workflow,
  },
  {
    title: "Security berlapis",
    detail:
      "JWT, JwtAuthGuard, RolesGuard, Helmet, rate limiting, validasi DTO, dan CORS terkontrol.",
    icon: ShieldCheck,
  },
  {
    title: "Data dengan Prisma",
    detail:
      "Schema PostgreSQL dan Prisma Client dikelola bersama; aplikasi memakai pooled URL dan migration URL terpisah.",
    icon: Database,
  },
  {
    title: "Quality dan rilis",
    detail:
      "Jest, API E2E, Playwright, k6, lint, typecheck, dan GitHub Actions mendukung pemeriksaan sebelum deploy.",
    icon: GitBranch,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-brand-background text-brand-ink-dark">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a
          className="flex items-center gap-3 font-semibold tracking-tight"
          href="#top"
          aria-label="StackPlus Core, kembali ke atas"
        >
          <span className="grid size-10 place-items-center rounded-xl bg-brand-primary text-lg font-black text-white">
            +
          </span>
          <span>
            STACKPLUS
            <span className="ml-2 text-xs font-medium tracking-[0.18em] text-brand-ink">
              CORE
            </span>
          </span>
        </a>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-8 text-sm md:flex">
          <a className="transition hover:text-brand-primary" href="#architecture">
            Arsitektur
          </a>
          <a className="transition hover:text-brand-primary" href="#capabilities">
            Fitur inti
          </a>
          <a className="transition hover:text-brand-primary" href="#getting-started">
            Mulai
          </a>
        </nav>
        <a
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-brand-line bg-white px-5 text-sm font-semibold transition hover:border-brand-primary hover:text-brand-primary"
          href="#getting-started"
        >
          Mulai jelajahi <ArrowRight aria-hidden="true" size={16} />
        </a>
      </header>

      <section
        id="top"
        className="mx-auto grid w-full max-w-7xl gap-14 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:pb-28 lg:pt-24"
      >
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-line bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink">
            <span className="size-2 rounded-full bg-brand-primary" />
            Stack Plus Studio · Core Engine
          </p>
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Fondasi full-stack untuk{" "}
            <span className="text-brand-primary">mulai dengan benar.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-brand-ink sm:text-lg">
            Satu monorepo untuk frontend Next.js, backend NestJS, dan database
            Prisma. Mulai dari blueprint yang sudah memiliki autentikasi,
            pengelolaan user, serta quality checks.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-brand-primary px-6 text-sm font-semibold text-white transition hover:bg-brand-primary-dark"
              href="#architecture"
            >
              Lihat arsitektur <ArrowDown aria-hidden="true" size={16} />
            </a>
            <a
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-brand-line bg-white px-6 text-sm font-semibold transition hover:border-brand-primary hover:text-brand-primary"
              href="#capabilities"
            >
              Lihat fitur inti <ArrowRight aria-hidden="true" size={16} />
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -right-12 -top-12 size-52 rounded-full bg-brand-primary/10 blur-3xl"
          />
          <div className="relative rounded-3xl border border-brand-line bg-white p-6 shadow-xl shadow-gray-200/50 sm:p-8">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-ink">
                  System overview
                </p>
                <p className="mt-1 text-lg font-semibold">Satu alur, tiga lapisan</p>
              </div>
              <span className="rounded-full bg-brand-surface-alt px-3 py-1.5 text-xs font-medium text-brand-ink">
                TypeScript
              </span>
            </div>
            <div className="space-y-3">
              {stack.map(({ name, detail, icon: Icon, accent }, index) => (
                <div
                  key={name}
                  className="flex items-center gap-4 rounded-2xl border border-brand-line bg-brand-surface p-4"
                >
                  <span className={`grid size-12 shrink-0 place-items-center rounded-xl ${accent}`}>
                    <Icon aria-hidden="true" size={22} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold">{name}</p>
                    <p className="mt-0.5 text-sm text-brand-ink">{detail}</p>
                  </div>
                  <span className="text-xs font-medium text-brand-ink">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-3 rounded-xl bg-brand-surface-alt px-4 py-3 text-sm text-brand-ink">
              <span className="size-2 rounded-full bg-brand-primary" />
              Satu repo · satu pipeline · siap dikembangkan
            </div>
          </div>
        </div>
      </section>

      <section id="architecture" className="border-y border-brand-line bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.75fr_1.25fr] lg:px-10 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-primary">
              Arsitektur
            </p>
            <h2 className="mt-4 max-w-md text-3xl font-bold tracking-tight sm:text-4xl">
              Batas yang jelas, alur yang mudah diikuti.
            </h2>
            <p className="mt-4 max-w-md leading-7 text-brand-ink">
              Turborepo mengorkestrasi aplikasi dan package workspace. Browser
              mengakses web; web memakai Axios untuk berkomunikasi dengan REST
              API; API mengakses PostgreSQL melalui Prisma.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["apps/web", "Antarmuka Next.js dan route dashboard."],
              ["apps/api", "REST API NestJS, auth, users, dan health."],
              ["packages/database", "Schema PostgreSQL dan Prisma Client bersama."],
            ].map(([name, detail]) => (
              <article
                key={name}
                className="rounded-2xl border border-brand-line bg-brand-surface p-5"
              >
                <p className="font-mono text-sm font-semibold text-brand-primary">
                  {name}
                </p>
                <p className="mt-3 text-sm leading-6 text-brand-ink">{detail}</p>
              </article>
            ))}
          </div>
          <div className="rounded-2xl border border-brand-line bg-brand-surface-alt px-5 py-4 lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink">
              Request flow
            </p>
            <p className="mt-2 font-mono text-xs leading-6 text-brand-ink-dark sm:text-sm">
              Browser → apps/web → Axios + REST/JWT → apps/api → Prisma →
              PostgreSQL
            </p>
          </div>
        </div>
      </section>

      <section
        id="capabilities"
        className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10 lg:py-20"
      >
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-primary">
            Di dalam core
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Fondasi teknis yang bisa dipahami seluruh tim.
          </h2>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map(({ title, detail, icon: Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-brand-line bg-white p-6"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-brand-primary/10 text-brand-primary">
                <Icon aria-hidden="true" size={21} />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-brand-ink">{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="getting-started" className="bg-brand-ink-dark text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-10 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
              Mulai lokal
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Jalankan fondasi dalam empat langkah.
            </h2>
            <p className="mt-4 max-w-md leading-7 text-white/70">
              Siapkan PostgreSQL dan isi `.env` terlebih dahulu. Backend
              memerlukan koneksi database dan JWT secret agar dapat berjalan.
            </p>
          </div>
          <ol className="space-y-3">
            {[
              ["01", "pnpm install", "Pasang dependency workspace."],
              [
                "02",
                "Salin .env.example → .env",
                "Isi DATABASE_URL, DIRECT_URL, dan dua JWT secret.",
              ],
              ["03", "pnpm db:generate", "Generate Prisma Client."],
              ["04", "pnpm dev", "Jalankan web dan API dalam mode development."],
            ].map(([number, command, detail]) => (
              <li
                key={number}
                className="flex flex-wrap items-center gap-x-5 gap-y-2 rounded-2xl border border-white/15 bg-white/5 p-5 sm:flex-nowrap"
              >
                <span className="font-mono text-sm text-blue-300">{number}</span>
                <div className="min-w-0 flex-1">
                  <code className="text-sm font-semibold sm:text-base">{command}</code>
                  <p className="mt-1 text-sm text-white/65">{detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <footer className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-7 text-xs text-brand-ink sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p>Stack Plus Studio · Core Engine</p>
        <p>Next.js · NestJS · Prisma · PostgreSQL</p>
      </footer>
    </main>
  );
}
