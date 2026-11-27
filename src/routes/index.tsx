import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Truck, Phone, MapPin, Mail, Instagram, Zap, Tag, ShieldCheck, MessageCircle, Users, Package, Store, X, Pause, Play } from "lucide-react";
import { WA, MAIN_PHONE, IMG, kits, produtos, vendedores, type Item } from "@/lib/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RiJux — Limpeza que faz bem" },
      { name: "description", content: "Distribuidora de produtos de limpeza com entrega ponta a ponta em Miguel Pereira e região. Kits prontos, atacado e varejo." },
      { property: "og:title", content: "RiJux — Limpeza que faz bem" },
      { property: "og:description", content: "Kits e produtos de limpeza com entrega rápida. Peça pelo WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CATALOG = "https://rijux-distribuidora.vercel.app/catalog.html";
const frases = [
  "Nada melhor do que uma casa cheirando a limpeza e paz",
  "Sua casa brilhando e com aquele cheirinho bom de bem-cuidada",
  "O conforto de um lar limpo ao seu alcance",
  "Economia real e eficiência que você vê no primeiro uso",
];

function Index() {
  const [tab, setTab] = useState<"kits" | "produtos">("kits");
  const [sellers, setSellers] = useState(false);
  const [paused, setPaused] = useState(false);
  const items = tab === "kits" ? kits : produtos;

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <a href="#topo" className="flex min-w-0 items-center gap-3">
            <img src={`${IMG}/vendedor-loja.webp`} alt="Logo RiJux" className="size-11 shrink-0 rounded-lg bg-card object-cover" />
            <div className="min-w-0">
              <div className="font-display text-xl leading-none">RiJux</div>
              <div className="truncate text-xs text-muted-foreground">Limpeza que faz bem</div>
            </div>
          </a>
          <nav className="hidden items-center gap-7 text-sm md:flex">
            {[["Produtos", "produtos"], ["Vídeos", "videos"], ["Diferenciais", "diferenciais"], ["Atendimento", "atendimento"], ["Contato", "contato"]].map(([l, id]) => (
              <a key={id} href={`#${id}`} className="hover:text-primary">{l}</a>
            ))}
          </nav>
          <button onClick={() => setSellers(true)} className="shrink-0 rounded-lg bg-whatsapp px-5 py-2.5 text-sm font-semibold text-whatsapp-foreground hover:opacity-90">WhatsApp</button>
        </div>
      </header>

      <section id="topo" className="relative overflow-hidden">
        <img src={`${IMG}/produto-2-nobg.webp`} alt="" aria-hidden className="absolute inset-0 size-full scale-150 object-cover opacity-40 blur-3xl" />
        <div className="absolute inset-0 bg-background/60" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm"><Truck className="size-4 text-whatsapp" />Entrega rápida e confiável</span>
            <h1 className="mt-6 font-display text-6xl uppercase leading-[0.95] md:text-8xl">
              <span className="text-primary">RiJux</span><br />Limpeza que faz bem
            </h1>
            <p className="mt-6 max-w-md text-xl">Tudo que você precisa para limpeza, comodidade e economia.</p>
            <p className="mt-4 max-w-lg text-muted-foreground">Distribuidora de produtos de limpeza com entrega ponta a ponta. Atendemos residências, comércios, condomínios e empresas, com preços especiais para atacado e varejo.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WA(MAIN_PHONE, "Olá! Vim pelo site e quero fazer um pedido.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-6 py-3.5 font-semibold text-whatsapp-foreground hover:opacity-90"><Phone className="size-4" />Fazer pedido no WhatsApp</a>
              <a href={CATALOG} target="_blank" rel="noreferrer" className="rounded-lg border border-foreground/40 px-6 py-3.5 font-semibold hover:bg-foreground/10">Ver catálogo completo</a>
            </div>
            <div className="mt-10 flex divide-x divide-border">
              {[["40+", "Produtos"], ["7", "Kits prontos"], ["100%", "Entrega garantida"]].map(([n, l]) => (
                <div key={l} className="px-7 first:pl-0"><div className="font-display text-4xl">{n}</div><div className="text-sm text-muted-foreground">{l}</div></div>
              ))}
            </div>
          </div>
          <img src={`${IMG}/produto-2-nobg.webp`} alt="Linha de produtos de limpeza RiJux" fetchPriority="high" className="mx-auto w-full max-w-sm drop-shadow-2xl" />
        </div>
      </section>

      <div className="relative overflow-hidden bg-primary py-3 text-primary-foreground">
        <div className={`marquee flex w-max gap-10 ${paused ? "[animation-play-state:paused]" : ""}`}>
          {[...frases, ...frases].map((f, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap font-display text-xl uppercase">{f}<span className="size-2.5 rounded-full border-2 border-accent bg-primary-foreground" /></span>
          ))}
        </div>
        <button onClick={() => setPaused(!paused)} aria-label={paused ? "Retomar faixa" : "Pausar faixa"} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-1.5 text-foreground">
          {paused ? <Play className="size-3.5" /> : <Pause className="size-3.5" />}
        </button>
      </div>

      <section id="produtos" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="font-display text-5xl uppercase">Kits e Produtos</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">Toque na foto para ver o panfleto completo e fazer seu pedido. Preços promocionais válidos enquanto durar o estoque.</p>
        <div className="mt-8 inline-flex rounded-lg border border-border bg-card p-1">
          {(["kits", "produtos"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`rounded-md px-6 py-2 text-sm font-semibold capitalize ${tab === t ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>{t}</button>
          ))}
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => <Card key={it.name} it={it} kit={tab === "kits"} />)}
        </div>
        <div className="mt-10 text-center">
          <a href={CATALOG} target="_blank" rel="noreferrer" className="inline-block rounded-lg border border-foreground/40 px-6 py-3 font-semibold hover:bg-foreground/10">Ver catálogo completo com preços</a>
        </div>
      </section>

      <section id="videos" className="bg-card py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-5xl uppercase">A RiJux por dentro</h2>
          <p className="mt-3 text-muted-foreground">Um pouco do nosso estoque e do dia a dia da loja.</p>
          <div className="mt-8 flex snap-x gap-6 overflow-x-auto pb-4">
            {[1, 2].map((n) => (
              <video key={n} controls preload="none" playsInline className="aspect-[9/16] w-72 shrink-0 snap-start rounded-2xl bg-background object-cover">
                <source src={`https://www.rijux.com.br/videos/rijux-video-${n}.mp4`} type="video/mp4" />
              </video>
            ))}
          </div>
          <p className="text-sm text-muted-foreground md:hidden">Arraste para o lado para ver o outro vídeo.</p>
        </div>
      </section>

      <section id="diferenciais" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="font-display text-5xl uppercase">Por que comprar com a RiJux</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[[Zap, "Entrega Rápida", "Ponta a ponta, direto na sua casa, comércio ou condomínio."], [Tag, "Preços de Atacado", "Condições especiais para compras em maior quantidade."], [ShieldCheck, "Marcas Confiáveis", "Trabalhamos com marcas reconhecidas e de qualidade comprovada."], [MessageCircle, "Atendimento no WhatsApp", "Peça, tire dúvidas e acompanhe sua entrega direto pelo WhatsApp."]].map(([I, t, d]) => {
            const Icon = I as typeof Zap;
            return <div key={t as string} className="rounded-2xl border border-border bg-card p-6"><Icon className="size-8 text-primary" /><h3 className="mt-4 font-display text-2xl">{t as string}</h3><p className="mt-2 text-sm text-muted-foreground">{d as string}</p></div>;
          })}
        </div>
      </section>

      <section id="atendimento" className="bg-card py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
          {[[Users, "Quem atendemos", "Residências, comércios, condomínios e empresas."], [Truck, "Como funciona a entrega", "Ponta a ponta: você faz o pedido pelo WhatsApp e recebe direto no endereço."], [Package, "Varejo e atacado", "Compre a partir de uma unidade ou feche pedidos maiores com condição especial."]].map(([I, t, d]) => {
            const Icon = I as typeof Zap;
            return <div key={t as string} className="flex gap-4 rounded-2xl bg-background p-6"><Icon className="size-7 shrink-0 text-primary" /><div><h3 className="font-display text-2xl">{t as string}</h3><p className="mt-1 text-muted-foreground">{d as string}</p></div></div>;
          })}
          <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
            <h3 className="font-display text-2xl">Miguel Pereira e região (RJ)</h3>
            <p className="mt-1 opacity-90">Confirme com a gente se sua cidade está na área de entrega. Resposta rápida pelo WhatsApp.</p>
            <a href={WA(MAIN_PHONE, "Olá! Quero saber se vocês entregam na minha região.")} target="_blank" rel="noreferrer" className="mt-4 inline-block rounded-lg bg-whatsapp px-5 py-2.5 font-semibold text-whatsapp-foreground">Verificar minha região</a>
          </div>
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="font-display text-5xl uppercase">Fale com a gente</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">Pedidos, orçamento para empresa ou dúvida sobre entrega: chame no WhatsApp, a gente responde rápido.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[[Phone, "WhatsApp", "(24) 98150-1151", WA("5524981501151", "Olá! Vim pelo site e quero fazer um pedido."), "Pedidos e dúvidas"], [Mail, "E-mail", "rijuxdistribuidoraltda@gmail.com", "mailto:rijuxdistribuidoraltda@gmail.com", "Atendimento comercial"], [Instagram, "Instagram", "@rijuxdistribuidora", "https://www.instagram.com/rijuxdistribuidora/", "Novidades e promoções"], [MapPin, "Endereço do estoque", "R. Prof.ª Conceição C Pinto, 252", "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("R. Prof.ª Conceição C Pinto, 252 - Vila Selma, Miguel Pereira - RJ, 26900-000"), "Vila Selma, Miguel Pereira - RJ, 26900-000"]].map(([I, t, v, h, s]) => {
            const Icon = I as typeof Zap;
            return <div key={t as string} className="min-w-0 rounded-2xl border border-border bg-card p-6"><Icon className="size-6 text-primary" /><div className="mt-3 text-sm text-muted-foreground">{t as string}</div><a href={h as string} target="_blank" rel="noreferrer" className="block break-words font-semibold hover:text-primary">{v as string}</a><div className="mt-1 text-sm text-muted-foreground">{s as string}</div></div>;
          })}
        </div>
        <p className="mt-6 flex items-start gap-2 text-sm text-muted-foreground"><Store className="mt-0.5 size-4 shrink-0" />Ainda não temos loja física. Aqui fica nosso estoque e, por enquanto, trabalhamos só com entrega: faça seu pedido pelo WhatsApp.</p>
      </section>

      <footer className="border-t border-border pb-24 pt-8 text-center text-sm text-muted-foreground">© RiJux Distribuidora — Limpeza que faz bem</footer>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3">
          <span className="flex min-w-0 items-center gap-2 text-sm"><MapPin className="size-4 shrink-0 text-destructive" /><span className="truncate">Atendemos toda a região, de segunda a sábado</span></span>
          <button onClick={() => setSellers(true)} className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-5 py-3 text-sm font-semibold text-whatsapp-foreground"><Phone className="size-4" />Falar com um vendedor</button>
        </div>
      </div>

      {sellers && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4" onClick={() => setSellers(false)}>
          <div role="dialog" aria-label="Com quem você quer falar?" className="relative w-full max-w-md rounded-2xl border border-border bg-card p-6" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSellers(false)} aria-label="Fechar" className="absolute right-4 top-4"><X className="size-5" /></button>
            <h3 className="font-display text-3xl">Com quem você quer falar?</h3>
            <p className="mt-1 text-sm text-muted-foreground">Escolha um vendedor. A conversa abre no WhatsApp.</p>
            <ul className="mt-5 space-y-3">
              {vendedores.map((v) => (
                <li key={v.name}><a href={WA(v.phone, `${v.greet} Vim pelo site e quero fazer um pedido.`)} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl border border-border bg-background p-3 hover:border-whatsapp">
                  <img src={`${IMG}/${v.img}.webp`} alt={`Foto de ${v.name}`} className="size-12 rounded-full object-cover" />
                  <div className="min-w-0 flex-1"><div className="font-semibold">{v.name}</div><div className="text-sm text-muted-foreground">{v.label}</div></div><span className="text-xl text-muted-foreground">›</span>
                </a></li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

function Card({ it, kit }: { it: Item; kit: boolean }) {
  const msg = it.price ? `Olá! Quero pedir o ${it.name} (${it.price}).` : `Olá! Quero saber o preço do ${it.name}.`;
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <a href={`${IMG}/${it.img}.webp`} target="_blank" rel="noreferrer" className="relative block bg-secondary">
        {it.tag && <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">{it.tag}</span>}
        <img src={`${IMG}/${it.img}-thumb.webp`} alt={`Panfleto ${it.name}`} loading="lazy" className="aspect-[3/4] w-full object-cover" />
      </a>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-2xl">{it.name}</h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{it.desc}</p>
        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            {it.old && <div className="text-xs text-muted-foreground line-through">De {it.old}</div>}
            <div className={`font-display ${it.price ? "text-2xl text-primary" : "text-base text-muted-foreground"}`}>{it.price ?? "Consulte o preço"}</div>
          </div>
          <a href={WA(MAIN_PHONE, msg)} target="_blank" rel="noreferrer" className="shrink-0 rounded-lg bg-whatsapp px-4 py-2 text-sm font-semibold text-whatsapp-foreground">{it.price ? (kit ? "Pedir este Kit" : "Pedir") : "Consultar preço"}</a>
        </div>
      </div>
    </div>
  );
}
