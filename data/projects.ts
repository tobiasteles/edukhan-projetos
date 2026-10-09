import { siteLink } from "@/lib/site";

export type ProjectTone = "light" | "dark";

export interface Project {
  id: string;
  title: string;
  slogan: string;
  /** Caminho em /public. Se o arquivo ainda não existir, o card mostra um placeholder. */
  logoUrl: string;
  slug: string;
  /** Para onde o botão leva (página do projeto no site Wix). Ajuste se o endereço for outro. */
  url: string;
  /** Gradiente do painel do card (cores da paleta Edukhan). */
  gradient: { from: string; to: string };
  /** "dark" = painel escuro (usa selo/texto claros); "light" = painel claro. */
  tone: ProjectTone;
}

export const projects: Project[] = [
  {
    id: "contraturno-escolar",
    title: "Contraturno Escolar",
    slogan: "Acolhendo crianças de 6 a 15 anos",
    logoUrl: "/projetos/logos/contraturno-escolar.png",
    slug: "contraturno-escolar",
    url: "https://www.edukhan.ong.br/mus",
    gradient: { from: "#F7CE4F", to: "#FCE59A" },
    tone: "light",
  },
  {
    id: "florescer",
    title: "Florescer",
    slogan: "Do autoconhecimento à ação profissional",
    logoUrl: "/projetos/logos/florescer.png",
    slug: "florescer",
   url: "https://florescer.edukhan.ong.br/",
    gradient: { from: "#DD6FE0", to: "#EDA6EF" },
    tone: "light",
  },
  {
    id: "geracao-do-futuro",
    title: "Geração do Futuro",
    slogan: "Português e matemática em plataforma online gamificada",
    logoUrl: "/projetos/logos/geracao-do-futuro.png",
    slug: "geracao-do-futuro",
    url: "https://geracao.edukhan.ong.br/",
    gradient: { from: "#0B27E8", to: "#3D55F2" },
    tone: "dark",
  },
  {
    id: "principios-pra-vida",
    title: "Princípios pra Vida",
    slogan: "Sabedoria pra vida. Princípios pra gerações.",
    logoUrl: "/projetos/logos/principios-pra-vida.png",
    slug: "principios-pra-vida",
    url: "https://curso-principios-pra-vida.flaviapacheco12.chatgpt.site/",
    gradient: { from: "#8FDB7E", to: "#BDEBB1" },
    tone: "light",
  },
  {
    id: "recomecar",
    title: "Recomeçar",
    slogan: "Alfabetização de adultos",
    logoUrl: "/projetos/logos/recomecar.png",
    slug: "recomecar",
    url: "https://recomeco.edukhan.ong.br/",
    gradient: { from: "#6D55F0", to: "#9B89F6" },
    tone: "dark",
  },
  {
    id: "virada-de-chave",
    title: "Virada de Chave",
    slogan: "Transformação social e inclusão produtiva",
    logoUrl: "/projetos/logos/virada-de-chave.png",
    slug: "virada-de-chave",
    url: "https://virada.edukhan.ong.br/",
    gradient: { from: "#4FB4EA", to: "#9CD6F5" },
    tone: "light",
  },
];
