import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { Check, ScanLine, Activity, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'La clínica | Odontología Castellanos Avilés',
  description:
    'Una clínica dental en Avilés dotada de avanzada tecnología y diseñada con colores cálidos e instalaciones confortables para cuidar tu salud dental.',
};

export default function LaClinicaPage() {
  return (
    <>
      <PageHero
        variant="gradient"
        imageWrapperClassName="md:left-auto md:right-0 md:w-[60%] lg:w-[55%]"
        imagePosition="object-left"
        title={
          <>
            Nuestra clínica dental en Avilés:{' '}
            <span className="text-accent">Calidez y vanguardia</span>
          </>
        }
        subtitle="Una clínica dotada de la más avanzada tecnología y diseñada para crear un espacio acogedor, alejado de la estética tradicional, con colores cálidos e instalaciones confortables."
        ctaText="Pedir una cita"
        ctaHref="/contacto"
        imageSrc="/Clinica-por-dentro.jpg"
        imageAlt="Instalaciones del Centro Odontológico Castellanos"
      />

      {/* 1. Inicios y metas */}
      <section className="bg-accent text-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Image Column */}
            <div className="relative min-h-[380px] lg:min-h-full rounded-2xl overflow-hidden shadow-sm bg-accent/30 order-2 lg:order-1">
              <img
                src="/equipo/Luis-castellanos-director.webp"
                alt="Luis Castellanos Jal - Odontólogo Director"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Content Column */}
            <div className="flex flex-col justify-center space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
                Inicios y metas
              </h2>
              <div className="space-y-4 text-white/90 text-lg leading-relaxed">
                <p>
                  El Centro Odontológico Castellanos nació en 2011 con una convicción clara: ofrecer una odontología donde la calidad técnica, el rigor médico y la cercanía humana prevalezcan siempre sobre la cantidad.
                </p>
                <p>
                  El verdadero valor de una clínica reside en su equipo humano. Por eso nos rodeamos de profesionales con vocación, en continua formación, que disfrutan cuidando de cada paciente con dedicación absoluta.
                </p>
              </div>

              <div className="pt-2 border-t border-white/20">
                <p className="font-semibold text-white text-lg">Luis Castellanos Jal</p>
                <p className="text-white/80 text-sm">Odontólogo Director</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-1">
                <div className="bg-white/10 rounded-xl p-4 border border-white/15">
                  <p className="text-2xl font-bold text-white">2011</p>
                  <p className="text-sm text-white/80 mt-1">Más de una década cuidando de Avilés</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 border border-white/15">
                  <p className="text-2xl font-bold text-white">100%</p>
                  <p className="text-sm text-white/80 mt-1">Atención personalizada y sin prisas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. La clínica y su filosofía */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Content Column */}
            <div className="flex flex-col justify-center space-y-6">
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink leading-tight">
                La clínica y su filosofía
              </h2>
              <div className="space-y-4 text-zinc-600 text-lg leading-relaxed">
                <p>
                  Diseñamos nuestras instalaciones para alejarnos deliberadamente de la frialdad aséptica habitual. Creamos un espacio acogedor, con colores cálidos y luz natural que transmite calma desde el primer instante.
                </p>
                <p>
                  Nuestra filosofía se basa en escuchar, explicar con honestidad cada alternativa y dedicar a cada persona todo el tiempo que su salud requiera.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1 text-accent">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <p className="text-zinc-700 text-base">
                    <strong className="text-ink font-semibold">Calidad sobre volumen:</strong> citas holgadas para escucharte y atenderte sin prisas.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1 text-accent">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <p className="text-zinc-700 text-base">
                    <strong className="text-ink font-semibold">Espacios para la calma:</strong> gabinetes confortables concebidos para tu tranquilidad.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1 text-accent">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <p className="text-zinc-700 text-base">
                    <strong className="text-ink font-semibold">Honestidad diagnóstica:</strong> solo indicamos los tratamientos que verdaderamente necesitas.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div className="relative min-h-[380px] lg:min-h-full rounded-2xl overflow-hidden shadow-sm">
              <img
                src="/clinica-espacio.webp"
                alt="Instalaciones del Centro Odontológico Castellanos"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Instalaciones y tecnología de vanguardia */}
      <section className="bg-zinc-50 py-16 lg:py-24 border-t border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink leading-tight">
              Tecnología e instalaciones de vanguardia
            </h2>
            <p className="mt-4 text-zinc-600 text-lg leading-relaxed">
              Equipamiento avanzado y espacios pensados al detalle para garantizar diagnósticos certeros y la máxima comodidad en cada visita.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-zinc-200/80 shadow-xs flex flex-col justify-between hover:border-zinc-300 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
                  <ScanLine className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="text-lg font-semibold text-ink">Diagnóstico digital 3D</h3>
                <p className="mt-2 text-zinc-600 text-sm leading-relaxed">
                  Radiología digital de baja dosis y escaneo de alta resolución para planificar cada caso con máxima exactitud milimétrica.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-zinc-200/80 shadow-xs flex flex-col justify-between hover:border-zinc-300 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
                  <Activity className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="text-lg font-semibold text-ink">Gabinetes ergonómicos</h3>
                <p className="mt-2 text-zinc-600 text-sm leading-relaxed">
                  Sillones de última generación y climatización pensada para tu bienestar, reduciendo cualquier tensión durante el tratamiento.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-zinc-200/80 shadow-xs flex flex-col justify-between hover:border-zinc-300 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="text-lg font-semibold text-ink">Máxima bioseguridad</h3>
                <p className="mt-2 text-zinc-600 text-sm leading-relaxed">
                  Protocolos rigurosos de esterilización y trazabilidad de grado hospitalario en todo el instrumental para tu total tranquilidad.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-zinc-200/80 shadow-xs flex flex-col justify-between hover:border-zinc-300 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
                  <Sparkles className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="text-lg font-semibold text-ink">Medicina estética</h3>
                <p className="mt-2 text-zinc-600 text-sm leading-relaxed">
                  Servicio especializado dirigido por el Dr. González Llorca para tratamientos de rejuvenecimiento y armonización orofacial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
