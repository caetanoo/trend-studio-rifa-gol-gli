import Image from "next/image";
import { WhatsAppCta } from "@/components/whatsapp-cta";

export default function Page() {
  return (
    <main className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-base">
      {/* Background ambient red glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(225,6,0,0.20),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-md flex-1 flex-col px-6 pb-10 pt-10">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Trend Studio Projects Cars"
          width={320}
          height={48}
          priority
          className="h-12 w-auto self-start"
        />

        {/* Spacer pushes content to vertical center */}
        <div className="flex flex-1 flex-col justify-center py-10">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-accent">
            Rifas Oficiais · Carros Originais
          </p>

          <h1 className="text-balance text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl">
            O CARRO DOS SEUS
            <br />
            <span className="italic text-accent">SONHOS</span> NA SUA GARAGEM
          </h1>

          <p className="mt-5 text-base leading-relaxed text-zinc-400">
            Rifas de carros selecionados, originais e legalizados. Entre no
            grupo do WhatsApp e fique por dentro de todos os sorteios.
          </p>

          <WhatsAppCta />

          <p className="mt-5 text-xs uppercase tracking-widest text-zinc-500">
            Sorteio pela Loteria Federal · +18 · Jogue com responsabilidade
          </p>
        </div>
      </div>
    </main>
  );
}
