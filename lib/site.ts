/**
 * Endereço do site principal (Wix). Todos os links do menu, rodapé e cards
 * apontam para ele. Pode ser trocado sem mexer no código, definindo
 * NEXT_PUBLIC_SITE_URL na hospedagem.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.edukhan.ong.br").replace(/\/$/, "");

export const siteLink = (path = "") => `${SITE_URL}${path}`;
