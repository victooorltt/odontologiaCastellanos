import type { Metadata } from 'next';
import {
  Sparkles,
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
  title: 'Periodoncia en Avilés | Odontología Castellanos',
  description:
    'Especialistas en periodoncia en Avilés. Tratamiento de gingivitis, periodontitis y microcirugía mucogingival para cuidar la salud de tus encías.',
};

export default function PeriodonciaPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <PageHero
        title={
          <>
            Periodoncia en Avilés:{' '}
            <span className="text-accent">Salud para tus encías</span>
          </>
        }
        subtitle="En Centro Odontológico Castellanos tratamos la enfermedad periodontal desde la fase inicial de gingivitis hasta casos avanzados y microcirugía plástica de encías."
        imageSrc="/hero-periodoncia.webp"
        imageAlt="Gabinete moderno de periodoncia y salud de encías en Avilés"
        ctaText="Pedir una cita"
        ctaHref="/contacto"
      />

      {/* 2. Salud Gingival (2-column layout matching photo height) */}
      <section className="bg-white py-16 lg:py-24 border-b border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink leading-tight">
                  Salud gingival: prevención y tratamiento temprano
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed mt-4">
                  La enfermedad periodontal suele avanzar de forma silenciosa. Detectarla en sus
                  primeras fases permite proteger el hueso y conservar los dientes de forma duradera.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      Gingivitis: fase inicial reversible
                    </h3>
                    <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
                      Inflamación y sangrado provocados por la acumulación de placa bacteriana. Se resuelve por completo con raspados, pulido y pautas personalizadas de higiene.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    <Activity className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      Periodontitis: protección del soporte óseo
                    </h3>
                    <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
                      Cuando la inflamación pasa al hueso crea bolsas periodontales. Frenamos su evolución con raspado y alisado radicular profundo para evitar la pérdida dental.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      Mantenimiento periodontal continuo
                    </h3>
                    <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
                      Revisiones periódicas para monitorizar los niveles óseos y desinfectar bolsas activas, manteniendo encías firmes, saludables y sin sangrado.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Photo Column: matches EXACT height of left column */}
            <div className="lg:col-span-5 flex">
              <div className="w-full h-full min-h-[380px] rounded-2xl overflow-hidden border border-zinc-200/80 shadow-md flex">
                <img
                  src="/periodontitis.jpg"
                  alt="Tratamiento de periodoncia y encías en Avilés"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Cirugía Mucogingival (AccentSection with glass cards) */}
      <AccentSection
        title="Cirugía mucogingival y estética de la encía"
        imageSrc="/cirugia-mucogingival.jpg"
        imageAlt="Cirugía mucogingival y estética gingival en Avilés"
        ctaText="Pedir una cita"
        ctaHref="/contacto"
      >
        <div className="space-y-6">
          <p className="text-white/95 text-lg leading-relaxed">
            La belleza de la sonrisa depende tanto de los dientes como de la armonía de la encía.
            Corregimos retracciones gingivales y sonrisas altas con microcirugía plástica periodontal.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <Sparkles className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">Injertos de encía</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Cubren raíces expuestas por cepillado agresivo, aliviando la sensibilidad.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <Activity className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">Alargamiento coronario</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Modela el exceso de encía en sonrisas gingivales para equilibrar los dientes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <ShieldCheck className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">Microcirugía precisa</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Intervenciones mínimamente invasivas con rápida cicatrización y sin dolor.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <HeartHandshake className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">Simetría de la sonrisa</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Recupera el contorno festoneado natural de tus encías con máxima armonía.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AccentSection>

      {/* 4. Señales de Alerta (Clean layout with checkmarks and photo) */}
      <section className="bg-zinc-50 py-16 lg:py-24 border-b border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Photo Column */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex">
              <div className="w-full h-[360px] lg:h-[440px] rounded-2xl overflow-hidden border border-zinc-200/80 shadow-md flex">
                <img
                  src="/Clinica-por-dentro.jpg"
                  alt="Instalaciones de periodoncia en Avilés"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
                  ¿Cuándo acudir a revisión periodontal?
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  Consulta con nuestro equipo si presentas alguno de los siguientes síntomas:
                </p>
              </div>

              <div className="space-y-4 pt-1">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-accent/15 text-accent shrink-0 mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-base text-zinc-700 leading-relaxed">
                    <strong className="font-semibold text-ink">Sangrado durante el cepillado:</strong> una encía sana no debe sangrar; es el primer aviso de patología periodontal.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-accent/15 text-accent shrink-0 mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-base text-zinc-700 leading-relaxed">
                    <strong className="font-semibold text-ink">Encías enrojecidas o inflamadas:</strong> tejido hinchado, hipersensible o con molestias al contacto.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-accent/15 text-accent shrink-0 mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-base text-zinc-700 leading-relaxed">
                    <strong className="font-semibold text-ink">Dientes visiblemente más largos:</strong> ocasionados por la pérdida y retracción progresiva del margen gingival.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-accent/15 text-accent shrink-0 mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-base text-zinc-700 leading-relaxed">
                    <strong className="font-semibold text-ink">Mal aliento recurrente:</strong> derivado de la presencia de bacterias en bolsas periodontales profundas.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-accent/15 text-accent shrink-0 mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-base text-zinc-700 leading-relaxed">
                    <strong className="font-semibold text-ink">Sensación de holgura o movilidad:</strong> síntoma de pérdida de inserción ósea que requiere diagnóstico urgente.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-200/80">
                <p className="text-zinc-600 text-base leading-relaxed">
                  Realizamos un examen periodontal exhaustivo para valorar el estado exacto de tus tejidos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <CTASection />
    </>
  );
}
