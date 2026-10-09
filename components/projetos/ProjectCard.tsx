import Image from "next/image";
import type { Project } from "@/data/projects";
import { ProjectLogo } from "./ProjectLogo";

export function ProjectCard({ project }: { project: Project }) {
  const { title, slogan, url, logoUrl, gradient, tone } = project;
  const dark = tone === "dark";

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white
        ring-1 ring-royal/15 transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-xl hover:shadow-royal/20 hover:ring-royal/40
        motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {/* Painel colorido em formato de balão */}
      <div
        className="bubble relative isolate flex h-60 items-center justify-center overflow-hidden px-6 pb-8"
        style={{ backgroundImage: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})` }}
      >
        <Image
          src={dark ? "/brand/selo-branco.png" : "/brand/selo-azul.png"}
          alt=""
          aria-hidden="true"
          width={260}
          height={260}
          className="pointer-events-none absolute -right-12 -top-12 h-52 w-52 opacity-[0.12]
            transition-transform duration-500 group-hover:rotate-6 motion-reduce:transition-none"
        />
        <ProjectLogo title={title} logoUrl={logoUrl} tone={tone} />
      </div>

      <div className="flex flex-1 flex-col gap-3 px-6 pb-6 pt-5">
        <h3 className="text-xl font-bold leading-tight text-royal">{title}</h3>
        <p className="text-sm leading-relaxed text-ink/80">{slogan}</p>

        <a
          href={url}
          aria-label={`Conhecer o projeto ${title}`}
          className="mt-auto inline-flex w-fit items-center gap-2 rounded-xl bg-mint px-5 py-2.5
            text-sm font-bold text-royal shadow-sm transition-all duration-200
            hover:bg-royal hover:text-white hover:shadow-md active:scale-[0.97]
            group-hover:bg-royal group-hover:text-white
            after:absolute after:inset-0 after:content-['']"
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
