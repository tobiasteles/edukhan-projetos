"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectTone } from "@/data/projects";

interface ProjectLogoProps {
  title: string;
  logoUrl: string;
  tone: ProjectTone;
}

/**
 * Exibe a logomarca do projeto. Se o arquivo não existir (404),
 * mostra um placeholder com o selo do Edukhan.
 */
export function ProjectLogo({ title, logoUrl, tone }: ProjectLogoProps) {
  const [failed, setFailed] = useState(false);
  const dark = tone === "dark";

  if (!failed) {
    return (
      <Image
        src={logoUrl}
        alt={`Logomarca do projeto ${title}`}
        width={320}
        height={200}
        className="relative z-10 max-h-24 w-auto max-w-[85%] object-contain md:max-h-40 md:max-w-[70%]"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`Logomarca de ${title} em breve`}
      className="relative z-10 flex flex-col items-center gap-3 text-center"
    >
      <Image
        src={dark ? "/brand/selo-branco.png" : "/brand/selo-azul.png"}
        alt=""
        width={96}
        height={96}
        className="h-14 w-14 md:h-24 md:w-24"
      />
      <span
        className={`hidden rounded-md px-2.5 py-1 text-xs font-bold md:inline ${
          dark ? "bg-white/15 text-white" : "bg-white/60 text-ink"
        }`}
      >
        Logomarca em breve
      </span>
    </div>
  );
}
