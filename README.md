# Vitrine de Projetos – Instituto Edukhan

Site estático (Next.js export) para ser hospedado à parte e linkado a partir do Wix.

## Rodar local
    npm install
    npm run dev        # http://localhost:3000

## Publicar (grátis)
Vercel, Netlify ou Cloudflare Pages: importe o repositório (ou arraste a pasta `out/` após `npm run build`).
Variável opcional: NEXT_PUBLIC_SITE_URL = https://www.seusite.com.br  (endereço do Wix)

## Ajustes
- Links dos cards: `data/projects.ts` (campo `url`)
- Menu/rodapé: `components/projetos/SiteHeader.tsx`
- Logomarcas dos projetos: `public/projetos/logos/<slug>.png`
