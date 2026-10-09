import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsGrid() {
  return (
    <section aria-labelledby="lista-projetos" className="bg-white px-5 pb-20 pt-6 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 id="lista-projetos" className="sr-only">
          Lista de projetos do Instituto Edukhan
        </h2>
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
