import type { Metadata } from 'next';
import {
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Baby,
  Smile,
  GraduationCap,
  Activity,
  Clock,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import AccentSection from '@/components/AccentSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Odontopediatría en Avilés | Odontología Castellanos',
  description:
    'Especialistas en odontopediatría en Avilés. Cuidado dental infantil en un entorno de confianza adaptado a los más pequeños con gafas de realidad virtual.',
};

export default function OdontopediatriaPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <PageHero
        title={
          <>
            Odontopediatría en Avilés:{' '}
            <span className="text-accent">Los dentistas de los peques</span>
          </>
        }
        subtitle="Porque sabemos lo que te importa que tu hijo esté bien atendido, en Centro Odontológico Castellanos disponemos de una odontopediatra exclusiva en un entorno de confianza adaptado a ellos."
        imageSrc="/odontopedriatria.jpg"
        imageAlt="Odontopediatría infantil en Avilés"
        ctaText="Pedir una cita"
        ctaHref="/contacto"
      />

      {/* 2. Experiencia sin miedo (2-column layout matching photo height) */}
      <section className="bg-white py-16 lg:py-24 border-b border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink leading-tight">
                  Una visita divertida, tranquila y sin miedo
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed mt-4">
                  Nuestro mayor compromiso es que los niños vengan con una sonrisa y asocien el
                  dentista con sensaciones positivas. Adaptamos los tiempos, el lenguaje y el
                  ambiente al ritmo de cada pequeño.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      Gafas de realidad virtual con dibujos animados
                    </h3>
                    <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
                      Uno de los elementos favoritos de los peques. Pueden ver sus series o dibujos preferidos durante la revisión mientras se sienten cómodos y entretenidos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    <HeartHandshake className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      Odontopediatra exclusiva y trato con cariño
                    </h3>
                    <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
                      Especialista dedicada por completo a la salud dental infantil y a la psicología de los niños, ganándose su confianza desde el primer minuto.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      Tratamientos suaves y libres de dolor
                    </h3>
                    <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
                      Protocolos indoloros y explicaciones adaptadas a su curiosidad para que nunca sientan ansiedad ante una consulta odontológica.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Photo Column: matches EXACT height of left column */}
            <div className="lg:col-span-5 flex">
              <div className="w-full h-full min-h-[380px] rounded-2xl overflow-hidden border border-zinc-200/80 shadow-md flex">
                <img
                  src="/dos-miembros-con-paciente-en-camilla.jpg"
                  alt="Atención cercana y personalizada en odontopediatría en Avilés"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Guía por Edades: ¿Qué cuidamos según la etapa de tu hijo? */}
      <section className="bg-zinc-50 py-16 lg:py-24 border-b border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
              El cuidado de su boca según su etapa de crecimiento
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Cada edad tiene necesidades concretas. Acompañamos a tu familia en cada etapa para prevenir problemas antes de que aparezcan:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Etapa 1: 0 a 3 años */}
            <div className="bg-white p-7 rounded-2xl border border-zinc-200/80 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="p-3 w-fit rounded-xl bg-accent/10 text-accent">
                  <Baby className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink">0 a 3 años</h3>
                  <p className="text-sm text-accent font-medium mt-0.5">Primeros dientes y prevención</p>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Primera toma de contacto al cumplir el primer año para comprobar la erupción dental, prevenir caries del biberón y orientar a los padres en higiene temprana.
                </p>
              </div>
              <ul className="text-xs text-zinc-500 space-y-2 border-t border-zinc-100 pt-4">
                <li>• Revisión de dientes de leche iniciales</li>
                <li>• Pautas sobre chupete y lactancia</li>
                <li>• Hábitos positivos sin miedos</li>
              </ul>
            </div>

            {/* Etapa 2: 4 a 7 años */}
            <div className="bg-white p-7 rounded-2xl border border-zinc-200/80 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="p-3 w-fit rounded-xl bg-accent/10 text-accent">
                  <Smile className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink">4 a 7 años</h3>
                  <p className="text-sm text-accent font-medium mt-0.5">Dentición temporal y primeros molares</p>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Etapa clave para detectar caries entre dientes de leche y proteger los primeros molares definitivos con selladores de fisuras y flúor de alta protección.
                </p>
              </div>
              <ul className="text-xs text-zinc-500 space-y-2 border-t border-zinc-100 pt-4">
                <li>• Selladores de fisuras en muelas</li>
                <li>• Control de hábitos de deglución y mordida</li>
                <li>• Aprendizaje del cepillado autónomo</li>
              </ul>
            </div>

            {/* Etapa 3: 8 a 12 años */}
            <div className="bg-white p-7 rounded-2xl border border-zinc-200/80 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="p-3 w-fit rounded-xl bg-accent/10 text-accent">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink">8 a 12 años</h3>
                  <p className="text-sm text-accent font-medium mt-0.5">Recambio dental y alineación</p>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Supervisión de la caída de dientes de leche y erupción de los definitivos. Control del espacio maxilar para valorar ortodoncia interceptiva temprana si es necesario.
                </p>
              </div>
              <ul className="text-xs text-zinc-500 space-y-2 border-t border-zinc-100 pt-4">
                <li>• Mantenedores si hay pérdida precoz</li>
                <li>• Corrección temprana de maloclusiones</li>
                <li>• Protección bucal deportiva</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tratamientos más comunes (AccentSection with glass cards) */}
      <AccentSection
        title="Tratamientos infantiles más frecuentes"
        imageSrc="/odontopediatria-tratamientos.webp"
        imageAlt="Gabinete infantil adaptado con tecnología y confort en Avilés"
        ctaText="Pedir una cita"
        ctaHref="/contacto"
      >
        <div className="space-y-6">
          <p className="text-white/95 text-lg leading-relaxed">
            Resolvemos cualquier problema en dientes de leche y definitivos con la máxima
            delicadeza para proteger la función de su boca y su salud futura.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <ShieldCheck className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">Empastes y pulpotomías</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Eliminamos caries conservando la pieza de leche para mantener su espacio vital.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <Activity className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">Mantenedores de espacio</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Evitan el desplazamiento de dientes contiguos si se pierde una pieza antes de tiempo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <Sparkles className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">Selladores y flúor</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Capa protectora en surcos y fisuras para blindar el esmalte ante la placa.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <Clock className="h-5 w-5 text-amber-200 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">Educación en higiene</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Les enseñamos jugando para que disfruten cuidándose la boca todos los días.
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
