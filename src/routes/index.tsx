import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BrainCircuit,
  Check,
  ChevronDown,
  CircleAlert,
  Download,
  Gamepad2,
  HeartHandshake,
  Leaf,
  MessageCircleMore,
  MoonStar,
  MoveRight,
  PersonStanding,
  Quote,
  ShieldCheck,
  Sparkles,
  TabletSmartphone,
  X,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

// TODO: reemplazar con URL real de checkout
const CHECKOUT_URL = "#oferta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NEUROACTIVIDAD — Guía práctica para familias" },
      { name: "description", content: "Activa atención, memoria y calma en niños de 3 a 12 años con seis interruptores y un plan práctico de 21 días." },
      { property: "og:title", content: "NEUROACTIVIDAD — Guía práctica para familias" },
      { property: "og:description", content: "Neurociencia aplicada a la crianza, con seis interruptores y un plan realista de 21 días." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NeuroactividadPage,
});

const switches = [
  { title: "Movimiento", text: "el fertilizante del cerebro", icon: PersonStanding },
  { title: "Sueño", text: "donde se guarda lo aprendido", icon: MoonStar },
  { title: "Nutrición", text: "con qué se construye un cerebro", icon: Leaf },
  { title: "Vínculo", text: "la calma se presta antes de aprenderse", icon: HeartHandshake },
  { title: "Juego y aburrimiento", text: "la fábrica de ideas", icon: Gamepad2 },
  { title: "Lenguaje", text: "el acelerador más barato que existe", icon: MessageCircleMore },
];

const included = [
  "18 capítulos organizados en 4 partes",
  "El Termómetro Neuroactivo: test de 30 preguntas con puntuación",
  "40 juegos neuroactivos clasificados por función cerebral",
  "Menú neuroactivo de 7 días",
  "50 frases que encienden el cerebro y 20 que lo apagan",
  "Registro imprimible de 21 días",
  "Glosario y más de 40 referencias científicas citadas",
  "157 páginas, diseño editorial premium, PDF de alta calidad",
  "Adaptado por edades: 3–5, 6–8 y 9–12 años",
  "Capítulo sobre señales de alerta y cuándo buscar ayuda profesional",
];

const faqs = [
  ["¿En qué formato recibo el libro?", "Recibirás un PDF de alta calidad, listo para leer en móvil, tableta u ordenador y para imprimir las herramientas prácticas."],
  ["¿Sirve si mi hijo tiene TDAH o autismo diagnosticado?", "Puede ayudarte a comprender y ajustar el entorno cotidiano, pero no sustituye la evaluación, el tratamiento ni el seguimiento de profesionales de la salud."],
  ["¿Cuánto tiempo toma aplicar el método?", "El plan propone una acción breve al día durante 21 días. No necesitas transformar toda la rutina de golpe."],
  ["¿Necesito comprar algo más?", "No. Las propuestas usan recursos cotidianos y no requieren suplementos, aparatos ni materiales especiales."],
  ["¿Funciona para más de un hijo?", "Sí. Incluye adaptaciones por etapa —3–5, 6–8 y 9–12 años— para ajustar las acciones a cada niño."],
  ["¿Qué pasa si no me gusta?", "Tienes 7 días de garantía. Si sientes que el contenido no es para tu familia, podrás solicitar la devolución."],
  ["¿Tiene contenido para adolescentes?", "El método está pensado específicamente para niños de 3 a 12 años. Algunas ideas pueden servir después, pero no es una guía para adolescencia."],
  ["¿Cómo accedo después de comprar?", "Después del pago recibirás el enlace de descarga inmediata en la pantalla de confirmación y en tu correo."],
];

const offerPerks = [
  { icon: Download, text: "Descarga inmediata" },
  { icon: TabletSmartphone, text: "PDF para cualquier dispositivo" },
  { icon: ShieldCheck, text: "Garantía de 7 días" },
];

function PurchaseLink({ children, className = "", label }: { children: ReactNode; className?: string; label?: string }) {
  return <a href={CHECKOUT_URL} aria-label={label} className={`inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-coral px-7 py-4 font-ui text-base font-bold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-coral/90 focus-visible:outline focus-visible:outline-2 ${className}`}>{children}</a>;
}

function NeuralConstellation({ compact = false }: { compact?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 800 600" className="absolute inset-0 h-full w-full opacity-35">
      <g fill="none" stroke="currentColor" className="text-ink-3" strokeWidth="1">
        <path d="M30 160 180 85l120 112 126-75 154 98 180-92M90 440l128-107 122 82 140-126 154 100 130-68M180 85l38 248M300 197l40 218M426 122l54 167M580 220l54 169" />
        {!compact && <path d="M30 160 90 440M760 128l4 193M218 333l208-211M340 415l240-195" />}
      </g>
      {[[30,160],[180,85],[300,197],[426,122],[580,220],[760,128],[90,440],[218,333],[340,415],[480,289],[634,389],[764,321]].map(([x,y], i) => <circle key={i} cx={x} cy={y} r={i % 4 === 0 ? 7 : 4} className={i % 3 === 0 ? "fill-coral" : i % 3 === 1 ? "fill-violet" : "fill-paper"} />)}
    </svg>
  );
}

function BookCover({ small = false }: { small?: boolean }) {
  return (
    <div className={`relative aspect-[165/235] overflow-hidden rounded-sm bg-ink editorial-shadow ${small ? "w-44 sm:w-52" : "w-56 sm:w-72 lg:w-80"}`}>
      {/* IMAGEN: mockup de portada del libro */}
      <NeuralConstellation compact />
      <div className="absolute inset-0 flex flex-col justify-between p-[10%]">
        <span className="font-ui text-[8px] font-bold uppercase tracking-[0.2em] text-coral sm:text-[10px]">Neurociencia aplicada</span>
        <div>
          <div className="mb-3 h-px w-10 bg-coral" />
          <strong className="block font-display text-2xl leading-[0.92] text-paper sm:text-4xl">NEURO<br/>ACTIVIDAD</strong>
          <p className="mt-3 font-body text-[9px] leading-snug text-paper/75 sm:text-xs">Cómo encender la atención, la memoria y la calma en el cerebro de tu hijo</p>
        </div>
        <span className="font-ui text-[8px] uppercase tracking-wider text-paper/55">Guía práctica · 3–12 años</span>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, children, light = false }: { eyebrow?: string; children: ReactNode; light?: boolean }) {
  return <div className="mb-10 max-w-3xl"><span className={`font-ui text-xs font-bold uppercase tracking-[0.18em] ${light ? "text-coral" : "text-coral"}`}>{eyebrow}</span><h2 className={`mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl ${light ? "text-paper" : "text-ink"}`}>{children}</h2></div>;
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry?.isIntersecting) { el.classList.add("is-visible"); observer.disconnect(); } }, { threshold: 0.08 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`fade-section ${className}`}>{children}</div>;
}

function NeuroactividadPage() {
  const [showSticky, setShowSticky] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => setShowSticky(!entry?.isIntersecting), { threshold: 0.05 });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="overflow-hidden bg-paper pb-20 text-ink md:pb-0">
      <section id="inicio" className="relative min-h-[92svh] overflow-hidden bg-ink py-16 text-paper sm:py-20 lg:flex lg:min-h-[780px] lg:items-center">
        <NeuralConstellation />
        <div className="section-shell relative grid items-center gap-14 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="max-w-3xl">
            <p className="font-ui text-xs font-bold uppercase tracking-[0.2em] text-coral sm:text-sm">Neurociencia aplicada a la crianza</p>
            <h1 className="mt-6 font-display font-semibold leading-[0.93] text-paper">
              <span className="block text-4xl sm:text-5xl lg:text-6xl">El método para despertar</span>
              <span className="mt-2 block text-[clamp(3rem,12vw,7.5rem)] font-black">NEUROACTIVIDAD</span>
            </h1>
            <p className="mt-7 max-w-[60ch] text-lg leading-relaxed text-paper/80 sm:text-xl">Cómo encender la atención, la memoria y la calma en el cerebro de tu hijo con 6 interruptores respaldados por la ciencia — y un plan de 21 días que cabe en tu rutina real.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3 font-ui text-sm">
              <span className="rounded-full bg-coral px-4 py-2 font-bold text-primary-foreground">Plan de 21 días</span>
              <span className="text-paper/65">Guía práctica para madres y padres · Niños de 3 a 12 años</span>
            </div>
            <div className="mt-9">
              <PurchaseLink>Quiero el método completo <ArrowRight size={18} /></PurchaseLink>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-ui text-sm text-paper/65"><span><s>$XX</s> <strong className="ml-2 text-lg text-paper">$XX</strong></span><span>Acceso inmediato en PDF · Garantía de 7 días</span></div>
            </div>
          </div>
          <div className="relative mx-auto rotate-2 lg:mr-4"><div className="absolute -inset-8 rounded-full border border-coral/20" /><BookCover /></div>
        </div>
      </section>

      <section className="border-b border-rule bg-paper py-16 sm:py-20">
        <Reveal className="section-shell">
          <div className="grid gap-px overflow-hidden rounded-md border border-rule bg-rule md:grid-cols-2 lg:grid-cols-4">
            {["Le pido tres cosas y hace ninguna.", "Cada noche es una batalla para que se siente a estudiar.", "Grito y después me siento fatal.", "No sé si el problema es él o soy yo."].map((text, i) => <div key={text} className="bg-paper p-6"><Quote className="mb-4 text-coral" size={22}/><p className="font-display text-xl italic leading-snug text-ink-2">“{text}”</p><span className="mt-5 block font-ui text-xs font-semibold text-ink-3">0{i+1}</span></div>)}
          </div>
          <p className="mx-auto mt-12 max-w-4xl text-center font-display text-3xl font-semibold leading-snug sm:text-4xl">No es falta de voluntad. <span className="text-coral">Es falta de condiciones.</span><br/>Y las condiciones se pueden diseñar.</p>
        </Reveal>
      </section>

      <section id="metodo" className="bg-paper py-20 sm:py-28">
        <Reveal className="section-shell">
          <SectionHeading eyebrow="La idea central">Un cerebro activo no se exige. Se prepara.</SectionHeading>
          <p className="max-w-[65ch] text-lg text-ink-2">La neuroactividad es el estado en el que el cerebro dispone de la energía, la seguridad y el estímulo necesarios para prestar atención, recordar y regularse.</p>
          <div className="mt-12 grid items-stretch gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:gap-4">
            {[
              ["Energía biológica", "Dormir, moverse, nutrirse", "bg-violet-soft text-violet"],
              ["Seguridad emocional", "Vínculo antes que exigencia", "bg-teal-soft text-teal"],
              ["Estímulo adecuado", "Reto posible y con sentido", "bg-amber-soft text-amber"],
              ["Neuroactividad", "Atención, memoria y calma", "bg-coral-soft text-coral"],
            ].map(([title, text, color], i) => <div key={title} className="contents"><article className={`rounded-md p-6 ${color}`}><span className="font-ui text-xs font-bold uppercase tracking-wider">Factor {i+1}</span><h3 className="mt-3 font-display text-2xl font-bold text-ink">{title}</h3><p className="mt-2 text-base text-ink-2">{text}</p></article>{i < 3 && <span className="self-center justify-self-center font-display text-4xl text-ink-3">{i === 2 ? "−" : "×"}</span>}</div>)}
          </div>
          <p className="mt-10 max-w-[65ch] border-l-2 border-coral pl-6 text-lg text-ink-2">Los tres factores se multiplican, no se suman. Por eso un cero en cualquiera —una noche sin dormir, un miedo, una tarea imposible— apaga todo el resultado, por muy alto que esté el resto.</p>
        </Reveal>
      </section>

      <section id="interruptores" className="bg-ink py-20 text-paper sm:py-28">
        <Reveal className="section-shell"><SectionHeading eyebrow="Qué vas a aprender" light>Los 6 interruptores del cerebro</SectionHeading>
          <div className="grid gap-px overflow-hidden rounded-md border border-paper/15 bg-paper/15 md:grid-cols-2 lg:grid-cols-3">
            {switches.map(({title,text,icon:Icon}, i) => <article key={title} className="group bg-ink p-7 transition hover:bg-ink-2 sm:p-9"><div className="flex items-start justify-between"><span className="font-display text-6xl font-bold text-coral">0{i+1}</span><Icon className="text-paper/45 transition group-hover:text-coral" size={28}/></div><h3 className="mt-7 font-display text-2xl font-bold text-paper">{title}</h3><p className="mt-2 text-paper/65">{text}</p></article>)}
          </div>
        </Reveal>
      </section>

      <section id="plan" className="bg-paper-2 py-20 sm:py-28"><Reveal className="section-shell"><SectionHeading eyebrow="Un cambio posible">El plan de 21 días</SectionHeading>
        <p className="max-w-[65ch] text-lg text-ink-2">No tienes que rehacer la vida familiar. Solo observar, probar y sostener una acción pequeña cada día.</p>
        <div className="relative mt-12 grid gap-5 md:grid-cols-3 md:gap-0">
          <div className="absolute top-11 left-[12%] right-[12%] hidden h-px bg-rule md:block" />
          {[
            ["Semana 1", "Los cimientos", "sueño y movimiento", "bg-coral"],
            ["Semana 2", "Combustible y vínculo", "nutrición y regulación emocional", "bg-violet"],
            ["Semana 3", "Entorno y aprendizaje", "pantallas, juego y estudio", "bg-teal"],
          ].map(([week,title,text,color]) => <article key={week} className="relative border border-rule bg-paper p-7 md:mx-2 md:pt-20"><span className={`absolute top-7 left-7 z-10 h-8 w-8 rounded-full border-8 border-paper ${color}`} /><span className="font-ui text-xs font-bold uppercase tracking-wider text-ink-3">{week}</span><h3 className="mt-3 font-display text-2xl font-bold">{title}</h3><p className="mt-2 text-ink-2">{text}</p></article>)}
        </div><p className="mt-10 text-center font-display text-2xl font-semibold italic">Una acción por día. Ni más, ni distinta, ni improvisada.</p>
      </Reveal></section>

      <section id="contenido" className="bg-paper py-20 sm:py-28"><Reveal className="section-shell"><SectionHeading eyebrow="Dentro de la guía">Todo lo que necesitas, en un solo lugar</SectionHeading>
        <div className="grid gap-x-12 gap-y-1 md:grid-cols-2">{included.map(item => <div key={item} className="flex gap-4 border-b border-rule py-5"><span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-soft text-teal"><Check size={15} strokeWidth={3}/></span><span className="leading-snug text-ink-2">{item}</span></div>)}</div>
      </Reveal></section>

      <section className="relative overflow-hidden bg-ink py-20 text-paper sm:py-28"><NeuralConstellation compact/><Reveal className="section-shell relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr]"><div><span className="font-ui text-xs font-bold uppercase tracking-[0.18em] text-violet-soft">Por qué confiar</span><h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-paper sm:text-5xl">Ciencia real,<br/><em className="text-coral">sin exageraciones</em></h2></div><div><p className="max-w-[65ch] text-xl leading-relaxed text-paper/80">Este libro distingue lo que la evidencia sostiene con solidez, lo que es prometedor pero preliminar, y lo que es sentido común. Desmontamos los neuromitos más comunes en lugar de venderlos: que el azúcar vuelve hiperactivos a los niños, que existen “estilos de aprendizaje”, que las pantallas destruyen el cerebro. Cada capítulo cita sus fuentes.</p><div className="mt-8 border-t border-paper/20 pt-7 font-ui text-sm leading-relaxed text-paper/60">Con referencias de Harvard Center on the Developing Child, Adele Diamond, investigación del MIT sobre desarrollo del lenguaje, la Academia Americana de Pediatría y más de 40 estudios citados.</div></div></Reveal></section>

      <section className="bg-paper-2 py-20 sm:py-28"><Reveal className="section-shell"><SectionHeading eyebrow="Experiencias de familias">Cambios pequeños que se sienten grandes</SectionHeading><div className="grid gap-5 md:grid-cols-3">{[
        ["Laura M.", "Ahora sé cuándo insistir y cuándo parar. Las tardes de deberes dejaron de sentirse como una pelea."],
        ["Carlos R.", "Me gustó no sentirme juzgado. Aplicamos una idea por vez y vimos cambios reales en la rutina."],
        ["Marta y Julián", "El termómetro nos ayudó a detectar que el problema no era la motivación, sino el sueño."],
      ].map(([name,text],i)=><article key={name} className="border border-rule bg-paper p-7"><div className="mb-6 flex items-center gap-4"><div aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-soft font-display text-xl font-bold text-violet">{name?.[0]}</div><div><h3 className="font-ui text-sm font-bold">{name}</h3><p className="font-ui text-[10px] font-semibold uppercase tracking-wide text-coral">Testimonio placeholder — reemplazar</p></div></div><p className="font-display text-xl italic leading-relaxed text-ink-2">“{text}”</p><span className="mt-6 block font-ui text-xs text-ink-3">Familia con {5+i*2} y {8+i} años</span></article>)}</div></Reveal></section>

      <section className="bg-paper py-20 sm:py-28"><Reveal className="section-shell"><SectionHeading eyebrow="Una guía honesta">¿Es este libro para tu familia?</SectionHeading><div className="grid gap-6 md:grid-cols-2"><article className="rounded-md border border-teal bg-teal-soft p-7 sm:p-9"><div className="flex items-center gap-3"><Check className="text-teal"/><h3 className="font-display text-2xl font-bold">Es para ti si...</h3></div><ul className="mt-6 space-y-4 text-ink-2">{["Quieres entender el porqué, no solo recibir una lista de consejos.","Buscas un plan concreto que pueda convivir con una rutina real.","Prefieres evidencia clara frente a modas y promesas rápidas."].map(x=><li key={x} className="flex gap-3"><Check className="mt-1 shrink-0 text-teal" size={18}/>{x}</li>)}</ul></article><article className="rounded-md border border-coral bg-coral-soft p-7 sm:p-9"><div className="flex items-center gap-3"><X className="text-coral"/><h3 className="font-display text-2xl font-bold">Ojo — no es para ti si...</h3></div><ul className="mt-6 space-y-4 text-ink-2">{["Buscas una solución mágica que lo cambie todo en un día.","Esperas sustituir la evaluación o el acompañamiento profesional.","Tu hijo tiene un diagnóstico severo sin seguimiento: esta guía complementa, no sustituye."].map(x=><li key={x} className="flex gap-3"><CircleAlert className="mt-1 shrink-0 text-coral" size={18}/>{x}</li>)}</ul></article></div></Reveal></section>

      <section id="oferta" className="relative overflow-hidden bg-ink py-20 text-center text-paper sm:py-28"><NeuralConstellation/><Reveal className="section-shell relative"><div className="mx-auto flex justify-center"><BookCover small/></div><h2 className="mx-auto mt-10 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-6xl">Una nueva forma de mirar el cerebro de tu hijo</h2><div className="mx-auto mt-8 max-w-xl border-y border-paper/15 py-6 font-ui text-sm text-paper/70"><div className="grid grid-cols-2 gap-y-2 text-left"><span>E-book completo</span><span className="text-right">$XX</span><span>Termómetro Neuroactivo</span><span className="text-right">$XX</span><span>Plan + imprimibles</span><span className="text-right">$XX</span><span>Bonus de juegos</span><span className="text-right">$XX</span></div><div className="mt-4 flex justify-between border-t border-paper/15 pt-4 font-bold text-paper"><span>Valor total</span><span>$XX</span></div></div><div className="mt-7 font-ui"><span className="text-paper/50 line-through">$XX</span><strong className="ml-4 text-5xl text-paper">$XX</strong></div><PurchaseLink className="mt-8 w-full max-w-xl text-lg">Quiero mi copia de NEUROACTIVIDAD <ArrowRight size={20}/></PurchaseLink><div className="mx-auto mt-7 grid max-w-2xl gap-4 font-ui text-xs text-paper/60 sm:grid-cols-3">{offerPerks.map(({ icon: Icon, text })=><div key={text} className="flex items-center justify-center gap-2"><Icon size={17}/>{text}</div>)}</div></Reveal></section>

      <section id="faq" className="bg-paper py-20 sm:py-28"><Reveal className="section-shell max-w-4xl"><SectionHeading eyebrow="Preguntas frecuentes">Antes de empezar</SectionHeading><div className="divide-y divide-rule border-y border-rule">{faqs.map(([question,answer])=><details key={question} className="group"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-ui font-bold text-ink"><span>{question}</span><ChevronDown className="shrink-0 text-coral transition group-open:rotate-180" size={20}/></summary><p className="max-w-[65ch] pb-7 pr-10 text-ink-2">{answer}</p></details>)}</div></Reveal></section>

      <section className="relative overflow-hidden bg-ink py-24 text-center text-paper sm:py-32"><NeuralConstellation compact/><Reveal className="section-shell relative"><Sparkles className="mx-auto text-coral"/><h2 className="mx-auto mt-5 max-w-4xl font-display text-5xl font-semibold leading-tight sm:text-7xl">No tienes que hacerlo todo bien</h2><p className="mx-auto mt-7 max-w-[55ch] text-xl leading-relaxed text-paper/75">Tu hijo no necesita perfección. Necesita un adulto suficientemente presente para observar, reparar y volver a intentarlo. La ciencia puede ayudarte a elegir el siguiente paso.</p><PurchaseLink className="mt-9">Empieza hoy <MoveRight size={19}/></PurchaseLink></Reveal></section>

      <footer className="bg-ink border-t border-paper/10 py-8 text-paper"><div className="section-shell flex flex-col items-center justify-between gap-4 font-ui text-xs text-paper/50 sm:flex-row"><span>NEUROACTIVIDAD · © 2026</span><div className="flex gap-6"><a href="#" className="hover:text-paper">Política de privacidad</a><a href="mailto:contacto@ejemplo.com" className="hover:text-paper">Contacto</a></div></div></footer>

      <div className={`fixed inset-x-0 bottom-0 z-50 border-t border-rule bg-paper/95 p-3 backdrop-blur md:hidden ${showSticky ? "translate-y-0" : "translate-y-full"} transition-transform duration-300`}><PurchaseLink className="min-h-12 w-full py-3" label="Comprar NEUROACTIVIDAD">Quiero el método · $XX <ArrowRight size={18}/></PurchaseLink></div>
    </main>
  );
}