import Image from "next/image";
import { siteLink } from "@/lib/site";

const links = [
  { label: "Home", href: siteLink("/") },
  { label: "Projetos", href: "/", current: true },
  { label: "Blog", href: siteLink("/blog") },
  { label: "Sobre", href: siteLink("/sobre") },
];

/** Cabeçalho no padrão do site principal. Remova se o seu layout global já o fornece. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-sky">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href={siteLink("/")} aria-label="Edukhan, página inicial">
          <Image src="/brand/logo-branco.png" alt="Edukhan" width={150} height={54} priority className="h-auto w-32 sm:w-36" />
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-stretch">
            {links.map((l) => (
              <li key={l.href} className="border-l border-royal first:border-l-0">
                <a
                  href={l.href}
                  aria-current={l.current ? "page" : undefined}
                  className={`block px-5 py-6 text-sm font-bold uppercase transition-colors hover:text-white ${
                    l.current ? "text-white" : "text-royal"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={siteLink("/doe")}
            className="rounded-lg bg-sun px-4 py-2 text-xs font-bold uppercase text-royal shadow
              transition-all hover:-translate-y-0.5 hover:bg-lime hover:shadow-md motion-reduce:transition-none"
          >
            Doe aqui
          </a>

          {/* Menu mobile sem JavaScript */}
          <details className="relative md:hidden">
            <summary
              className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg
                bg-royal text-white [&::-webkit-details-marker]:hidden"
              aria-label="Abrir menu"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </summary>
            <ul className="absolute right-0 top-12 w-48 overflow-hidden rounded-xl bg-white p-1 shadow-xl ring-1 ring-royal/15">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    aria-current={l.current ? "page" : undefined}
                    className="block rounded-lg px-4 py-3 text-sm font-bold uppercase text-royal hover:bg-sky/30"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </header>
  );
}
