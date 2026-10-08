import type { Metadata } from 'next';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  HeartHandshake,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import AccentSection from '@/components/AccentSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Implantología en Avilés | Odontología Castellanos',
  description:
    'Implantes dentales en Avilés. Reposición de piezas con titanio de máxima precisión y resultados seguros y duraderos.',
};

export default function ImplantologiaPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <PageHero
        variant="gradient"
        imagePosition="object-[80%_center]"
        title={
          <>
            Implantología dental en Avilés:{' '}
            <span className="text-accent">Sonrisas definitivas</span>
          </>
        }
        subtitle="Los implantes dentales de titanio son la solución más avanzada, segura y duradera para reponer piezas ausentes y recuperar tu bienestar y seguridad al sonreír."
        ctaText="Pedir una cita"
        ctaHref="/contacto"
        imageSrc="/hero-implantologia.webp"
        imageAlt="Modelo anatómico de implante dental de titanio y corona cerámica"
      />

      {/* 2. AccentSection with itemized glass cards */}
      <AccentSection
        title="Implantes dentales de máxima precisión"
        imageSrc="/cirugia-menor-ambulatoria.jpg"
        imageAlt="Gabinete de implantología en Avilés"
        ctaText="Pedir una cita"
        ctaHref="/contacto"
      >
        <div className="space-y-6">
          <p className="text-white/95 text-lg leading-relaxed">
            Permiten reponer desde una única pieza hasta arcadas completas con titanio de máxima
            pureza. Un tratamiento predecible y mínimamente invasivo planificado con tecnología digital.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <Sparkles className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">Piezas únicas o totales</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Reponemos desde un solo diente hasta toda la dentadura con distribución óptima.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <ShieldCheck className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">Marcas líderes</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Titanio biocompatible de primera gama con tasa de éxito superior al 98%.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <Clock className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">Carga inmediata</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  En casos indicados, sal de la clínica con tus dientes fijos en el mismo día.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <CheckCircle2 className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">Planificación digital</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Diagnóstico 3D para una colocación milimétrica, cómoda y sin sorpresas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AccentSection>

      {/* 3. Beneficios de los implantes (Photo matching exact text height) */}
      <section className="bg-white py-16 lg:py-24 border-b border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink leading-tight">
                  Ventajas frente a soluciones tradicionales
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed mt-4">
                  El implante sustituye la raíz natural en el propio hueso, proporcionando máxima
                  fuerza masticatoria y preservando la integridad de tus dientes sanos.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      Protección de los dientes sanos
                    </h3>
                    <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
                      No es necesario tallar piezas vecinas como en los puentes clásicos, ni usar
                      ganchos metálicos que provoquen desgaste o caries en dientes de apoyo.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      Fuerza masticatoria y estética natural
                    </h3>
                    <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
                      Recupera el 100% de la capacidad de masticar con seguridad. Los dientes no se
                      mueven ni requieren adhesivos, logrando una armonía idéntica a tus dientes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    <HeartHandshake className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      Conservación del hueso maxilar
                    </h3>
                    <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
                      Al recibir el estímulo de la masticación, el hueso no se reabsorbe, evitando el
                      hundimiento facial y conservando la juventud del contorno de tu rostro.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Photo Column: matches EXACT height of text column */}
            <div className="lg:col-span-5 flex">
              <div className="w-full h-full min-h-[380px] rounded-2xl overflow-hidden border border-zinc-200/80 shadow-md flex">
                <img
                  src="/implante.jpg"
                  alt="Tratamiento de implantes dentales en Avilés"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. El proceso paso a paso */}
      <section className="bg-zinc-50 py-16 lg:py-24 border-b border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
              El tratamiento paso a paso: cómodo y sin sorpresas
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Un protocolo claro, seguro y predecible para devolverte la sonrisa con total tranquilidad:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs space-y-2">
              <h3 className="text-lg font-semibold text-ink">Diagnóstico 3D</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Estudio digital y TAC para valorar el volumen óseo y planificar la colocación exacta del implante.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs space-y-2">
              <h3 className="text-lg font-semibold text-ink">Colocación indolora</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Intervención breve con anestesia local suave. Un procedimiento cómodo, rápido y mínimamente invasivo.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs space-y-2">
              <h3 className="text-lg font-semibold text-ink">Osteointegración</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                El titanio biocompatible se fusiona de forma natural y firme con el hueso en pocas semanas (éxito superior al 98%).
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs space-y-2">
              <h3 className="text-lg font-semibold text-ink">Corona definitiva</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Fijamos la pieza cerámica a medida, devolviéndote la capacidad total de masticar y la estética natural de tu boca.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. General CTA Section */}
      <CTASection />
    </>
  );
}
