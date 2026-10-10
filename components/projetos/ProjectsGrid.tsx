import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsGrid() {
  return (
    <section id="lista-projetos" aria-labelledby="lista-projetos-titulo" className="bg-white px-4 pb-12 pt-2 sm:px-8 md:pb-20 md:pt-6">
      <div className="mx-auto max-w-6xl">
        <h2 id="lista-projetos-titulo" className="sr-only">
          Lista de projetos do Instituto Edukhan
        </h2>
        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {projects.map((project, i) => (
            <li key={project.id}>
              <ProjectCard project={project} index={i + 1} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
