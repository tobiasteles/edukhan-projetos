import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="bg-sky text-royal">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-14 pt-4 sm:px-8 md:grid-cols-[1fr_1fr_auto]">
        <div>
          <h2 className="text-2xl font-bold">Contato</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a className="font-bold underline underline-offset-4" href="https://wa.me/5561981387463">
                (61) 98138-7463
              </a>
              <span className="block">Alessandra</span>
            </li>
            <li>
              <a className="underline underline-offset-4" href="mailto:contato@edukhan.ong.br">
                contato@edukhan.ong.br
              </a>
            </li>
            <li>SL QD 04 conjunto 15 lote 26 Estrutural – DF</li>
          </ul>
        </div>
        <p className="max-w-xs text-sm leading-relaxed">
          Instituto Edukhan. Resgate escolar e acadêmico para crianças, jovens e adultos.
        </p>
        <Image src="/brand/selo-azul.png" alt="Selo do Instituto Edukhan" width={160} height={160} className="h-32 w-32 justify-self-start md:justify-self-end" />
      </div>
    </footer>
  );
}
