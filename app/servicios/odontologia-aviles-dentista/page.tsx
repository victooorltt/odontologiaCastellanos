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
  title: 'Odontología general en Avilés | Odontología Castellanos',
  description:
    'Odontología conservadora en Avilés: empastes con composite estético, endodoncias rotatorias y tartrectomía (limpieza dental profesional).',
};

export default function OdontologiaPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <PageHero
        title={
          <>
            Odontología general en Avilés:{' '}
            <span className="text-accent">Salud dental integral</span>
          </>
        }
        subtitle="En nuestra clínica dental de Avilés aplicamos los avances tecnológicos más innovadores en odontología conservadora para cuidar, reparar y proteger tus dientes naturales."
        ctaText="Pedir una cita"
        ctaHref="/contacto"
        imageSrc="/hero-odontologia-general.webp"
        imageAlt="Gabinete moderno de odontología general y conservadora en Avilés"
      />

      {/* 2. Empastes y Obturaciones (2-column layout matching photo height) */}
      <section className="bg-white py-16 lg:py-24 border-b border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink leading-tight">
                  Empastes y reconstrucciones con composite
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed mt-4">
                  Eliminamos la caries y restauramos la pieza con resinas compuestas de última
                  generación que reproducen con fidelidad el color, la dureza y la forma del diente natural.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      Estética natural sin metales
                    </h3>
                    <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
                      Sustituimos las antiguas amalgamas oscuras por composites biocompatibles que se integran de forma invisible con tu esmalte.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    <Activity className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      Ajuste anatómico y oclusión perfecta
                    </h3>
                    <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
                      Esculpimos minuciosamente surcos y cúspides para garantizar un reparto equilibrado de las fuerzas al masticar, cuidando la articulación (ATM).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      Mínima invasión y sellado hermético
                    </h3>
                    <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
                      Conservamos la máxima estructura dental sana posible, adhiriendo el material con tecnología microscópica para evitar futuras filtraciones.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Photo Column: matches EXACT height of left column */}
            <div className="lg:col-span-5 flex">
              <div className="w-full h-full min-h-[380px] rounded-2xl overflow-hidden border border-zinc-200/80 shadow-md flex">
                <img
                  src="/odontologia-empastes.webp"
                  alt="Restauración estética con composite y empastes en Avilés"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Endodoncias rotatorias (Clean layout with checkmarks and photo) */}
      <section className="bg-zinc-50 py-16 lg:py-24 border-b border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Photo Column */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex">
              <div className="w-full h-[360px] lg:h-[440px] rounded-2xl overflow-hidden border border-zinc-200/80 shadow-md flex">
                <img
                  src="/odontologia-endodoncia.webp"
                  alt="Tecnología e instrumental de endodoncia rotatoria en Avilés"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
                  Endodoncias de precisión: salva tu diente natural
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  Cuando la caries o un traumatismo alcanza el nervio, la endodoncia desinfecta
                  y sella los conductos radiculares para salvar la pieza y evitar su extracción:
                </p>
              </div>

              <div className="space-y-4 pt-1">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-accent/15 text-accent shrink-0 mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-base text-zinc-700 leading-relaxed">
                    <strong className="font-semibold text-ink">Tecnología rotatoria avanzada:</strong> acorta notablemente las sesiones y facilita una desinfección óptima de los conductos.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-accent/15 text-accent shrink-0 mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-base text-zinc-700 leading-relaxed">
                    <strong className="font-semibold text-ink">Sellado tridimensional hermético:</strong> previene la recolonización bacteriana y asegura la estabilidad de la raíz.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-accent/15 text-accent shrink-0 mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-base text-zinc-700 leading-relaxed">
                    <strong className="font-semibold text-ink">Alivio definitivo del dolor:</strong> elimina el foco infeccioso de forma rápida, cómoda y segura.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-accent/15 text-accent shrink-0 mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-base text-zinc-700 leading-relaxed">
                    <strong className="font-semibold text-ink">Conservación de tu pieza propia:</strong> el mejor implante dental siempre será tu propio diente natural bien conservado.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-200/80">
                <p className="text-zinc-600 text-base leading-relaxed">
                  Nuestro especialista evalúa el estado de tu pieza para planificar el procedimiento más cómodo y predecible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tartrectomía y Prevención Semestral (AccentSection with glass cards) */}
      <AccentSection
        title="Tartrectomía y prevención semestral"
        imageSrc="/dos-miembros-con-paciente-en-camilla.jpg"
        imageAlt="Higiene y limpieza dental profesional en Avilés"
        ctaText="Pedir una cita"
        ctaHref="/contacto"
      >
        <div className="space-y-6">
          <p className="text-white/95 text-lg leading-relaxed">
            La prevención es la base de una sonrisa saludable. Mediante ultrasonidos y profilaxis suave
            eliminamos el sarro adherido y las manchas, protegiendo tus encías frente al sangrado y mal aliento.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <Sparkles className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">Ultrasonidos suaves</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Desprendemos el sarro adherido sin desgastar el esmalte ni irritar las encías.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <ShieldCheck className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">Salud gingival activa</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Prevenimos la inflamación y el sangrado antes de que deriven en periodontitis.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <CheckCircle2 className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">Eliminación de manchas</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Pulido de tinciones superficiales provocadas por café, té, vino o tabaco.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <Clock className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">Revisión cada 6 meses</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  El seguimiento periódico permite detectar caries pequeñas antes de que duelan.
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
