import Image from "next/image";

export function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-royal text-white">
      <div
        className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center gap-x-4 gap-y-4 px-5 pb-4 pt-6
          sm:px-8 md:grid-cols-[1.3fr_1fr] md:gap-x-10 md:pb-10 md:pt-16"
      >
        {/* Título */}
        <div className="md:row-start-1 md:self-end">
          <p className="tag-tail mb-3 inline-block bg-orchid px-3 pb-5 pt-1.5 text-xs font-bold text-ink md:mb-6 md:px-5 md:pb-8 md:pt-3 md:text-sm">
            Seis caminhos, um propósito =]
          </p>
          <h1 className="text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
            Nossos projetos
          </h1>
        </div>

        {/* Escudo com o selo: pequeno ao lado do título no celular, grande no desktop */}
        <div
          aria-hidden="true"
          className="relative aspect-square w-28 sm:w-36 md:col-start-2 md:row-span-2 md:row-start-1 md:w-full md:max-w-md md:justify-self-center"
        >
          <div className="absolute inset-x-[8%] bottom-[10%] top-[6%] bg-sun [clip-path:polygon(0_0,100%_0,100%_78%,50%_100%,0_78%)]">
            <Image
              src="/brand/selo-azul.png"
              alt=""
              width={400}
              height={400}
              priority
              className="absolute left-1/2 top-[7%] h-auto w-[74%] -translate-x-1/2"
            />
          </div>
          <svg viewBox="0 0 48 48" className="absolute left-[2%] top-0 h-[15%] w-[15%] text-mint" fill="currentColor">
            <path d="M20 2h8l-1.5 15.5L40 9l4 7-14 8 14 8-4 7-13.5-8.5L28 46h-8l1.5-15.5L8 39l-4-7 14-8-14-8 4-7 13.5 8.5z" />
          </svg>
          <svg viewBox="0 0 32 29" className="absolute bottom-[24%] right-[3%] h-[13%] w-[14%] text-violet" fill="currentColor">
            <path d="M16 28C6 20 1 14.500 1 9 1 4.500 4.500 1.500 8.500 1.500c3 0 5.800 1.800 7.500 4.700C17.700 3.300 20.500 1.500 23.500 1.500 27.500 1.500 31 4.500 31 9c0 5.500-5 11-15 19z" />
          </svg>
          <svg viewBox="0 0 40 50" className="absolute bottom-[4%] left-[12%] h-[15%] w-[12%] text-orchid" fill="currentColor">
            <path d="M14 0l26 30L0 50z" />
          </svg>
        </div>

        {/* Texto */}
        <p className="col-span-2 max-w-xl text-sm leading-relaxed text-white/90 md:col-span-1 md:row-start-2 md:self-start md:text-lg">
          Da criança no contraturno ao adulto que volta a aprender a ler: cada projeto do
          Edukhan atende uma etapa da vida.
        </p>
      </div>
    </section>
  );
}
