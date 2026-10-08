import type { Metadata } from 'next';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Activity,
  HeartHandshake,
  Layers,
  Smile,
  Shield,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import AccentSection from '@/components/AccentSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Prótesis dentales en Avilés | Odontología Castellanos',
  description:
    'Prótesis dentales fijas y removibles en Avilés. Guía personalizada para reponer piezas ausentes con zirconio y porcelana de alta precisión.',
};

export default function ProtesisPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <PageHero
        variant="gradient"
        imagePosition="object-[80%_center]"
        title={
          <>
            Prótesis dentales en Avilés:{' '}
            <span className="text-accent">Recupera tu sonrisa</span>
          </>
        }
        subtitle="La prótesis dental tiene como objetivo recuperar la funcionalidad masticatoria y la armonía estética ante la pérdida de piezas dentales, adaptándose a cada paciente."
        ctaText="Pedir una cita"
        ctaHref="/contacto"
        imageSrc="/hero-protesis-dentales.webp"
        imageAlt="Prótesis y corona dental de cerámica de alta precisión sobre modelo articulador"
      />

      {/* 2. Guía según tu caso: ¿Qué solución necesitas? */}
      <section className="bg-white py-16 lg:py-24 border-b border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
              ¿Qué solución necesitas según tu caso?
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              La pérdida de dientes no afecta a todos los pacientes por igual. Diseñamos la prótesis idónea en función del número y estado de las piezas ausentes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Caso 1: Falta 1 diente */}
            <div className="bg-zinc-50 p-7 rounded-2xl border border-zinc-200/80 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="p-3 w-fit rounded-xl bg-accent/10 text-accent">
                  <Smile className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink">Falta de una pieza</h3>
                  <p className="text-sm text-accent font-medium mt-0.5">Corona unitaria o puente fijo</p>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Reponemos el diente ausente mediante una corona fija sobre un implante de titanio, o a través de un puente de porcelana apoyado sobre las piezas adyacentes.
                </p>
              </div>
              <ul className="text-xs text-zinc-500 space-y-2 border-t border-zinc-200/60 pt-4">
                <li>• No se nota en la sonrisa</li>
                <li>• Máxima estabilidad al masticar</li>
                <li>• Conserva la posición de los vecinos</li>
              </ul>
            </div>

            {/* Caso 2: Faltan varios dientes */}
            <div className="bg-zinc-50 p-7 rounded-2xl border border-zinc-200/80 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="p-3 w-fit rounded-xl bg-accent/10 text-accent">
                  <Layers className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink">Faltan varios dientes</h3>
                  <p className="text-sm text-accent font-medium mt-0.5">Puentes múltiples o esqueléticos</p>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Podemos instalar un puente fijo sobre implantes para cubrir todo el tramo ausente, o una prótesis removible adaptada con anclajes discretos.
                </p>
              </div>
              <ul className="text-xs text-zinc-500 space-y-2 border-t border-zinc-200/60 pt-4">
                <li>• Reparto equilibrado de la mordida</li>
                <li>• Opciones fijas o removibles</li>
                <li>• Materiales de alta resistencia</li>
              </ul>
            </div>

            {/* Caso 3: Pérdida total */}
            <div className="bg-zinc-50 p-7 rounded-2xl border border-zinc-200/80 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="p-3 w-fit rounded-xl bg-accent/10 text-accent">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink">Pérdida de arcada completa</h3>
                  <p className="text-sm text-accent font-medium mt-0.5">Sobredentaduras o prótesis total</p>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Recuperamos la dentadura completa con prótesis fijas atornilladas sobre implantes (que no se mueven ni rozan) o prótesis completas de ajuste anatómico.
                </p>
              </div>
              <ul className="text-xs text-zinc-500 space-y-2 border-t border-zinc-200/60 pt-4">
                <li>• Seguridad total al hablar y comer</li>
                <li>• Rejuvenece la expresión facial</li>
                <li>• Sin adhesivos ni movimientos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Beneficios (2-column layout matching photo height) */}
      <section className="bg-zinc-50 py-16 lg:py-24 border-b border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink leading-tight">
                  Por qué es clave reponer los dientes perdidos a tiempo
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed mt-4">
                  Dejar un hueco en la boca provoca que los dientes vecinos se inclinen y que la
                  pieza contraria extruya buscando contacto, desestabilizando toda la mordida.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-zinc-200/70 shadow-xs">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    <Activity className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      Masticación completa y sin sobrecargas
                    </h3>
                    <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
                      Permite triturar correctamente cualquier alimento sin forzar solo un lado de la mandíbula ni sobrecargar los dientes sanos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-zinc-200/70 shadow-xs">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      Protección de encías y hueso
                    </h3>
                    <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
                      Evita el empaquetamiento de comida en huecos vacíos, reduciendo el riesgo de caries radiculares y enfermedad periodontal en piezas vecinas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-zinc-200/70 shadow-xs">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    <HeartHandshake className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      Soporte de labios y contorno facial
                    </h3>
                    <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
                      Restaura el volumen de mejillas y labios, previniendo el hundimiento de las facciones y rejuveneciendo la expresión de tu cara.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Photo Column: matches EXACT height of left column */}
            <div className="lg:col-span-5 flex">
              <div className="w-full h-full min-h-[380px] rounded-2xl overflow-hidden border border-zinc-200/80 shadow-md flex">
                <img
                  src="/protesis-rehabilitacion.webp"
                  alt="Rehabilitación protésica y puente dental fijo sobre modelo en Avilés"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Materiales y Ajuste (AccentSection with glass cards) */}
      <AccentSection
        title="Materiales cerámicos de alta gama y ajuste digital"
        imageSrc="/protesis.jpg"
        imageAlt="Tipos de prótesis y coronas dentales en Avilés"
        ctaText="Pedir una cita"
        ctaHref="/contacto"
      >
        <div className="space-y-6">
          <p className="text-white/95 text-lg leading-relaxed">
            Diseñamos cada prótesis con tecnología digital y materiales cerámicos de primera
            calidad para lograr la máxima integración biológica, comodidad y estética.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <Sparkles className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">Zirconio y porcelana pura</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Translucidez, luminosidad y resistencia idénticas al esmalte dental natural.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <Activity className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">Toma de medidas digital</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Escaneado 3D rápido y preciso sin necesidad de incómodas pastas en la boca.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <ShieldCheck className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">Ajuste biomecánico</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Adaptación precisa para evitar cualquier punto de presión o rozadura.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <CheckCircle2 className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">Prueba estética previa</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Validamos color, forma y mordida contigo antes de la colocación definitiva.
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
