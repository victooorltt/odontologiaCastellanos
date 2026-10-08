import type { Metadata } from 'next';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Activity,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import AccentSection from '@/components/AccentSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Radiología dental en Avilés | Odontología Castellanos',
  description:
    'Tecnología de radiología dental digital avanzada de última generación en Avilés. Diagnóstico 3D preciso, seguro y con mínima radiación en la propia clínica.',
};

export default function RadiologiaDentalPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <PageHero
        variant="gradient"
        imagePosition="object-[80%_center]"
        title={
          <>
            Radiología digital en Avilés:{' '}
            <span className="text-accent">Diagnóstico de precisión</span>
          </>
        }
        subtitle="Diagnóstico por imagen de alta definición con tecnología digital de vanguardia que garantiza una mínima radiación y la máxima exactitud clínica."
        imageSrc="/hero-radiologia.webp"
        imageAlt="Equipo digital panorámico 3D CBCT de radiología dental de última generación"
        ctaText="Pedir una cita"
        ctaHref="/contacto"
      />

      {/* 2. Diagnóstico 3D y Tecnología (2-column layout matching photo height) */}
      <section className="bg-white py-16 lg:py-24 border-b border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink leading-tight">
                  Diagnóstico 3D con hasta un 80% menos radiación
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed mt-4">
                  La tecnología digital nos permite obtener una reproducción tridimensional exacta
                  de tus dientes y estructuras óseas en segundos, protegiendo tu salud y asegurando
                  un diagnóstico certero.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      Mínima radiación (Protocolo ALARA)
                    </h3>
                    <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
                      Los sensores digitales de última generación reducen drásticamente la exposición respecto a las placas analógicas clásicas, con dosis seguras para adultos y niños.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    <Activity className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      Detección temprana y certera
                    </h3>
                    <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
                      Detectamos caries interproximales no visibles a simple vista, infecciones apicales, quistes y la inclinación exacta de las muelas del juicio.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      Planificación quirúrgica e implantológica 3D
                    </h3>
                    <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
                      Permite medir volumen, anchura y calidad ósea con precisión submilimétrica para colocar implantes y realizar cirugías con total tranquilidad.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Photo Column: matches EXACT height of left column */}
            <div className="lg:col-span-5 flex">
              <div className="w-full h-full min-h-[380px] rounded-2xl overflow-hidden border border-zinc-200/80 shadow-md flex">
                <img
                  src="/Radiologia-avanzada.jpg"
                  alt="Equipo de radiología avanzada en la clínica dental de Avilés"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Inmediatez y Comodidad (AccentSection with glass cards) */}
      <AccentSection
        title="Todo en nuestra clínica: inmediatez y máxima comodidad"
        imageSrc="/Clinica-por-dentro.jpg"
        imageAlt="Gabinete equipado con radiología digital en Avilés"
        ctaText="Pedir una cita"
        ctaHref="/contacto"
      >
        <div className="space-y-6">
          <p className="text-white/95 text-lg leading-relaxed">
            Contamos con todo el equipamiento radiológico integrado en nuestras propias
            instalaciones de Avilés. Sin desplazamientos a centros externos ni esperas en tu diagnóstico.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <Clock className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">Resultados en el acto</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Imágenes disponibles en pantalla en segundos durante la misma consulta.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <CheckCircle2 className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">Visión panorámica completa</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Estudio global de maxilares, articulaciones y arcadas completas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <ShieldCheck className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">Seguridad para la familia</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Exposición reducida al mínimo necesario adaptada a adultos y niños.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <Sparkles className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">Explicación visual en directo</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Ves con el doctor el estado exacto de tu boca y cada paso a seguir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AccentSection>

      {/* 4. CTA Section */}
      <CTASection />
    </>
  );
}
