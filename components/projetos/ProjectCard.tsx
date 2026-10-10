import Image from "next/image";
import type { Project } from "@/data/projects";
import { ProjectLogo } from "./ProjectLogo";

interface ProjectCardProps {
  project: Project;
  /** Posição na lista (1 a 6), exibida como numeração no painel. */
  index: number;
}

/**
 * Celular: card horizontal (logo à esquerda, texto à direita), compacto.
 * Desktop (md+): card vertical com painel em formato de balão.
 */
export function ProjectCard({ project, index }: ProjectCardProps) {
  const { title, slogan, url, logoUrl, gradient, tone } = project;
  const dark = tone === "dark";

  return (
    <article
      className="group relative flex h-full flex-row overflow-hidden rounded-2xl bg-white ring-1 ring-royal/15
        transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-royal/20
        hover:ring-royal/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0
        md:flex-col md:rounded-3xl"
    >
      {/* Painel colorido */}
      <div
        className="bubble relative isolate flex min-h-36 w-32 shrink-0 items-center justify-center overflow-hidden p-3
          sm:w-44 md:h-60 md:min-h-0 md:w-auto md:px-6 md:pb-8"
        style={{ backgroundImage: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})` }}
      >
        <span
          aria-hidden="true"
          className={`absolute left-3 top-2.5 z-10 text-xs font-bold md:left-5 md:top-4 md:text-sm ${
            dark ? "text-white/80" : "text-ink/70"
          }`}
        >
          {String(index).padStart(2, "0")}
        </span>
        <Image
          src={dark ? "/brand/selo-branco.png" : "/brand/selo-azul.png"}
          alt=""
          aria-hidden="true"
          width={260}
          height={260}
          className="pointer-events-none absolute -bottom-8 -right-8 h-28 w-28 opacity-[0.12]
            transition-transform duration-500 group-hover:rotate-6 motion-reduce:transition-none
            md:-right-12 md:-top-12 md:bottom-auto md:h-52 md:w-52"
        />
        <ProjectLogo title={title} logoUrl={logoUrl} tone={tone} />
      </div>

      {/* Texto */}
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5 p-4 md:justify-start md:gap-3 md:px-6 md:pb-6 md:pt-5">
        <h3 className="text-lg font-bold leading-tight text-royal md:text-xl">{title}</h3>
        <p className="text-sm leading-snug text-ink/80 md:leading-relaxed">{slogan}</p>

        <a
          href={url}
          aria-label={`Conhecer o projeto ${title}`}
          className="mt-2 inline-flex w-fit items-center gap-2 rounded-lg bg-mint px-4 py-2 text-sm font-bold
            text-royal shadow-sm transition-all duration-200 hover:bg-royal hover:text-white hover:shadow-md
            active:scale-[0.97] group-hover:bg-royal group-hover:text-white md:mt-auto md:rounded-xl md:px-5
            md:py-2.5 after:absolute after:inset-0 after:content-['']"
        >
          Conhecer projeto
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </article>
  );
}
