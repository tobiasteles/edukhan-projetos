import { siteLink } from "@/lib/site";

export function CtaBand() {
  return (
    <section aria-labelledby="cta-titulo" className="bg-royal text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center">
        <h2
          id="cta-titulo"
          className="max-w-md text-3xl font-bold leading-tight sm:text-4xl"
        >
          Venha fazer parte dessa história!
        </h2>
        <a
          href={"https://www.edukhan.ong.br/contato"}
          className="rounded-xl bg-lime px-8 py-4 text-base font-bold uppercase text-royal shadow-md
            transition-all duration-200 hover:-translate-y-0.5 hover:bg-sun hover:shadow-lg
            motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          Quero participar
        </a>
      </div>
    </section>
  );
}
