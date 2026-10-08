import type { Metadata } from 'next';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Activity,
  Check,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import AccentSection from '@/components/AccentSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Estética dental en Avilés | Odontología Castellanos',
  description:
    'Tratamientos de estética dental avanzada en Avilés: carillas de porcelana, diseño digital de la sonrisa, blanqueamiento dental y estética labial.',
};

export default function EsteticaDentalPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <PageHero
        variant="gradient"
        imagePosition="object-[80%_center]"
        title={
          <>
            Estética dental en Avilés:{' '}
            <span className="text-accent">Diseño y armonía</span>
          </>
        }
        subtitle="Sabemos de la importancia de tener una bonita sonrisa. En Centro Odontológico Castellanos nos especializamos en tratamientos estéticos avanzados para darte la solución que mejor se adapte a ti."
        imageSrc="/hero-estetica-dental.webp"
        imageAlt="Carillas dentales de porcelana y guía de color dental para estética de la sonrisa"
        ctaText="Pedir una cita"
        ctaHref="/contacto"
      />

      {/* 2. Carillas y Diseño Digital (2-column layout matching photo height) */}
      <section className="bg-white py-16 lg:py-24 border-b border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink leading-tight">
                  Carillas de porcelana y diseño de sonrisa a medida
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed mt-4">
                  Mejora la forma, el color y la alineación de tus dientes con tratamientos
                  mínimamente invasivos. Gracias al Diseño Digital de la Sonrisa (DSD),
                  previsualizamos el resultado exacto antes de comenzar.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      Carillas de porcelana y composite
                    </h3>
                    <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
                      Láminas ultrafinas adheridas al frente del diente que corrigen desgastes, manchas intrínsecas o separaciones con un tallado mínimo o nulo.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    <Activity className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      Diseño Digital de la Sonrisa (DSD)
                    </h3>
                    <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
                      Fotografía digital y simulación en ordenador que te permite ver cómo va a quedar tu sonrisa ideal antes de dar cualquier paso.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      Precisión con lupas de 3.5 aumentos
                    </h3>
                    <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
                      Trabajamos con óptica de magnificación para controlar cada borde, sellado marginal y brillo con exigencia milimétrica.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Photo Column: matches EXACT height of left column */}
            <div className="lg:col-span-5 flex">
              <div className="w-full h-full min-h-[380px] rounded-2xl overflow-hidden border border-zinc-200/80 shadow-md flex">
                <img
                  src="/estetica-facial.jpg"
                  alt="Estética dental y diseño de sonrisa en Avilés"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Blanqueamiento Dental Profesional (Dedicated visual section) */}
      <section className="bg-zinc-50 py-16 lg:py-24 border-b border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Photo Column */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex">
              <div className="w-full h-[360px] lg:h-[450px] rounded-2xl overflow-hidden border border-zinc-200/80 shadow-md flex">
                <img
                  src="/estetica-blanqueamiento.webp"
                  alt="Equipo y tratamiento de blanqueamiento dental profesional en Avilés"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
                  Blanqueamiento dental profesional
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  El tratamiento más solicitado para rejuvenecer la sonrisa y ganar luminosidad.
                  Aclara varios tonos de manera segura, eliminando manchas acumuladas por café, té, tabaco o el paso de los años:
                </p>
              </div>

              <div className="space-y-4 pt-1">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-accent/15 text-accent shrink-0 mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-base text-zinc-700 leading-relaxed">
                    <strong className="font-semibold text-ink">Seguro para tu esmalte:</strong> geles clínicos biocompatibles que aclaran la dentina sin dañar ni desmineralizar la superficie dental.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-accent/15 text-accent shrink-0 mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-base text-zinc-700 leading-relaxed">
                    <strong className="font-semibold text-ink">Tratamiento combinado de alta eficacia:</strong> sesión intensiva en clínica reforzada con cómodas férulas personalizadas para casa.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-accent/15 text-accent shrink-0 mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-base text-zinc-700 leading-relaxed">
                    <strong className="font-semibold text-ink">Resultados estables y duraderos:</strong> devolvemos el blanco natural sin tonos artificiales, con pautas claras de mantenimiento.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-accent/15 text-accent shrink-0 mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-base text-zinc-700 leading-relaxed">
                    <strong className="font-semibold text-ink">Protocolo anti-sensibilidad:</strong> aplicación de desensibilizantes previos para que el proceso sea completamente confortable.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-200/80">
                <p className="text-zinc-600 text-base leading-relaxed">
                  Evaluamos el tono inicial de tu esmalte para definir el nivel de aclaramiento óptimo y más armónico para tu rostro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Estética Labial y Peribucal (AccentSection with glass cards) */}
      <AccentSection
        title="Estética de los labios y tejidos peribucales"
        imageSrc="/estetica-de-los-labios.jpg"
        imageAlt="Tratamiento de estética de labios y ácido hialurónico en Avilés"
        ctaText="Pedir una cita"
        ctaHref="/contacto"
      >
        <div className="space-y-6">
          <p className="text-white/95 text-lg leading-relaxed">
            El marco de la sonrisa es tan decisivo como los dientes. Armonizamos los labios y el
            tercio peribucal con ácido hialurónico de máxima pureza, logrando naturalidad y frescura.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <Sparkles className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">Volumen e hidratación</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Perfilado sutil y definición del bermellón labial sin excesos artificiales.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <ShieldCheck className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">Arrugas de expresión</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Atenúa líneas de marioneta y el código de barras peribucal.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <Clock className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">Protocolo en 2 sesiones</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Aplicación progresiva con retoque a las tres semanas para un ajuste óptimo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <CheckCircle2 className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">100% biocompatible</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Sustancia reabsorbible y segura con duración de entre 6 y 9 meses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AccentSection>

      {/* 5. CTA Section */}
      <CTASection />
    </>
  );
}
