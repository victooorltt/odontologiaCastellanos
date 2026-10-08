import type { Metadata } from 'next';
import {
  Sparkles,
  Utensils,
  ShieldCheck,
  CheckCircle2,
  Activity,
  HeartHandshake,
  Check,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import AccentSection from '@/components/AccentSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Ortodoncia en Avilés | Odontología Castellanos',
  description:
    'Especialistas en ortodoncia en Avilés: Invisalign®, brackets metálicos y estéticos, ortodoncia lingual y sistema Damon®. Pide tu cita.',
};

export default function OrtodonciaPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <PageHero
        title={
          <>
            Ortodoncia en Avilés:{' '}
            <span className="text-accent">Tu mejor sonrisa</span>
          </>
        }
        subtitle="La ortodoncia se utiliza tanto en niños como en adultos, ya que muchas patologías pueden venir de una mala posición de los dientes. Tener los dientes colocados adecuadamente contribuye positivamente a tu salud y estética."
        ctaText="Pedir una cita"
        ctaHref="/contacto"
        imageSrc="/dientes-con-brackets.jpg"
        imageAlt="Tratamiento de ortodoncia en Avilés"
      />

      {/* 2. Invisalign Section (Abbreviated with itemized highlight cards) */}
      <AccentSection
        title="Invisalign®, la ortodoncia invisible"
        imageSrc="/dientes-con-aparato-invisible.jpg"
        imageAlt="Ortodoncia invisible Invisalign en Avilés"
        ctaText="Pedir una cita"
        ctaHref="/contacto"
      >
        <div className="space-y-6">
          <p className="text-white/95 text-lg leading-relaxed">
            Uno de los tratamientos más demandados en nuestra clínica de Avilés. Permite
            alinear tus dientes con precisión y suavidad mediante férulas transparentes,
            combinando la máxima eficacia con discreción absoluta.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <Sparkles className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">Discreción total</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Alineadores transparentes prácticamente imperceptibles a la vista.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <Utensils className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">Come sin límites</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Removibles para disfrutar de cualquier comida sin roces ni desprendimientos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <ShieldCheck className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">Higiene óptima</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Cepillado y uso de hilo dental habitual, sin obstáculos ni alambres.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <CheckCircle2 className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">Sin urgencias</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Tratamiento cómodo sin brackets despegados ni alambres punzantes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AccentSection>

      {/* 3. Importancia de la ortodoncia (Photo matches exact height of text column) */}
      <section className="bg-white py-16 lg:py-24 border-b border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink leading-tight">
                  Mucho más que estética: la importancia de una correcta oclusión
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed mt-4">
                  Una posición dental incorrecta no es solo una cuestión estética: altera el
                  reparto de fuerzas al masticar y dificulta la higiene diaria.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      Prevención de caries y periodontitis
                    </h3>
                    <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
                      Dientes alineados facilitan un cepillado accesible y eficaz, impidiendo que la
                      placa bacteriana se acumule y protegiendo las encías.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    <Activity className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      Protección articular y muscular (ATM)
                    </h3>
                    <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
                      Una mordida equilibrada alivia la tensión en la articulación temporomandibular,
                      evitando dolores de cabeza, cuello y mandíbula.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    <HeartHandshake className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      Conservación de las piezas dentales
                    </h3>
                    <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
                      Al distribuir homogéneamente las fuerzas masticatorias se evitan fracturas,
                      desgastes prematuros de esmalte y retracción de encías.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Photo Column: matches EXACT height of left column */}
            <div className="lg:col-span-5 flex">
              <div className="w-full h-full min-h-[380px] rounded-2xl overflow-hidden border border-zinc-200/80 shadow-md flex">
                <img
                  src="/ortodoncia-alineacion.webp"
                  alt="Alineación dental y ortodoncia en Avilés"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Sistemas de ortodoncia (Clean layout with checkmarks and photo, no eyebrows, no cards bloat) */}
      <section className="bg-zinc-50 py-16 lg:py-24 border-b border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Photo Column */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex">
              <div className="w-full h-[360px] lg:h-[480px] rounded-2xl overflow-hidden border border-zinc-200/80 shadow-md flex">
                <img
                  src="/ortodoncia-sistemas.webp"
                  alt="Aparatología e instrumental de ortodoncia en Avilés"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
                  Sistemas de ortodoncia
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  En nuestra clínica disponemos de todos los sistemas de ortodoncia:
                </p>
              </div>

              <div className="space-y-4 pt-1">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-accent/15 text-accent shrink-0 mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-base text-zinc-700 leading-relaxed">
                    <strong className="font-semibold text-ink">Brackets metálicos:</strong> el sistema clásico y de máxima resistencia para todo tipo de correcciones.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-accent/15 text-accent shrink-0 mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-base text-zinc-700 leading-relaxed">
                    <strong className="font-semibold text-ink">Brackets estéticos (de porcelana):</strong> mimetizados con el color del esmalte dental para mayor discreción.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-accent/15 text-accent shrink-0 mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-base text-zinc-700 leading-relaxed">
                    <strong className="font-semibold text-ink">Ortodoncia lingual (Incognito®):</strong> no se ve, ya que va colocada por la cara interna de los dientes.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-accent/15 text-accent shrink-0 mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-base text-zinc-700 leading-relaxed">
                    <strong className="font-semibold text-ink">Invisalign® (ortodoncia invisible):</strong> serie de férulas transparentes diseñadas por ordenador que se cambian periódicamente hasta conseguir el resultado deseado.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-accent/15 text-accent shrink-0 mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-base text-zinc-700 leading-relaxed">
                    <strong className="font-semibold text-ink">Sistema Damon® combinado con Insignia®:</strong> para pacientes que buscan resultados más rápidos, con brackets hechos a medida.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-200/80">
                <p className="text-zinc-600 text-base leading-relaxed">
                  Nuestra ortodoncista te explicará detalladamente cuál es el sistema que mejor se adapta a tu problema.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. General CTA Section */}
      <CTASection />
    </>
  );
}
