import type { Metadata } from "next";
import { CtaBand } from "@/components/projetos/CtaBand";
import { PixelDivider } from "@/components/projetos/PixelDivider";
import { ProjectsGrid } from "@/components/projetos/ProjectsGrid";
import { ProjectsHero } from "@/components/projetos/ProjectsHero";

export const metadata: Metadata = {
  title: "Projetos | Instituto Edukhan",
  description:
    "Contraturno Escolar, Florescer, Geração do Futuro, Princípios pra Vida, Recomeçar e Virada de Chave: conheça os projetos do Instituto Edukhan.",
};

export default function ProjetosPage() {
  return (
    <>
      <main>
        <ProjectsHero />
        {/* Transição pixelada royal → branco */}
        <div className="-mt-px bg-white">
          <PixelDivider color="#0B27E8" seed={11} />
        </div>
        <ProjectsGrid />
        <CtaBand />
      </main>
      {/* Transição pixelada royal → celeste */}
      <div className="bg-royal">
        <PixelDivider color="#4FB4EA" seed={23} flip />
      </div>
    </>
  );
}
