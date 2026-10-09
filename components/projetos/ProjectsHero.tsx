import Image from "next/image";

export function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-royal text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-20 sm:px-8 md:grid-cols-[1.3fr_1fr] md:pb-20">
        <div>
          <p className="tag-tail mb-8 inline-block bg-orchid px-5 pb-8 pt-3 text-sm font-bold text-ink">
            Seis caminhos, um propósito =]
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
            Nossos projetos
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            Da criança que precisa de acolhimento ao adulto que volta a aprender
            a ler, cada projeto do Edukhan atua em uma etapa da vida. Juntos,
            resgatam a educação e abrem portas para o futuro do Brasil.
          </p>
          <a
            href="#lista-projetos"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-sun px-6 py-3 text-sm
              font-bold text-royal shadow-md transition-all duration-200 hover:-translate-y-0.5
              hover:bg-lime hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            Ver os projetos
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M6 13l6 6 6-6" />
            </svg>
          </a>
        </div>

        {/* Selo + formas da identidade (asterisco, coração, triângulo) */}
        {/* Escudo com selo + formas da identidade */}
        <div
          className="relative mx-auto aspect-square w-full max-w-xs sm:max-w-sm md:max-w-md"
          aria-hidden="true"
        >
          {/* Escudo amarelo: o selo fica DENTRO dele, com folga nas laterais */}
          <div className="absolute inset-x-[8%] top-[6%] bottom-[10%] bg-sun [clip-path:polygon(0_0,100%_0,100%_78%,50%_100%,0_78%)]">
            <Image
              src="/brand/selo-azul.png"
              alt=""
              width={400}
              height={400}
              priority
              className="absolute left-1/2 top-[7%] h-auto w-[74%] -translate-x-1/2"
            />
          </div>

          {/* Asterisco verde: canto superior esquerdo, cruzando a borda do escudo */}
          <svg
            viewBox="0 0 48 48"
            className="absolute left-[2%] top-[0%] h-[15%] w-[15%] text-mint"
            fill="currentColor"
          >
            <path d="M20 2h8l-1.5 15.5L40 9l4 7-14 8 14 8-4 7-13.5-8.5L28 46h-8l1.5-15.5L8 39l-4-7 14-8-14-8 4-7 13.5 8.5z" />
          </svg>

          {/* Coração roxo: canto inferior direito */}
          <svg
            viewBox="0 0 32 29"
            className="absolute bottom-[24%] right-[3%] h-[13%] w-[14%] text-violet"
            fill="currentColor"
          >
            <path d="M16 28C6 20 1 14.5 1 9 1 4.5 4.5 1.5 8.5 1.5c3 0 5.800 1.800 7.500 4.700C17.700 3.300 20.500 1.500 23.500 1.500 27.500 1.500 31 4.500 31 9c0 5.500-5 11-15 19z" />
          </svg>

          {/* Triângulo rosa: canto inferior esquerdo */}
          <svg
            viewBox="0 0 40 50"
            className="absolute bottom-[4%] left-[12%] h-[15%] w-[12%] text-orchid"
            fill="currentColor"
          >
            <path d="M14 0l26 30L0 50z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
