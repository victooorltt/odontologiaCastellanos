import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Sparkles, Users, Award, Check, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import AccentSection from '@/components/AccentSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Centro Odontológico Castellanos | Tu clínica dental en Avilés',
  description:
    'Nuestra clínica dental, ubicada en el centro de Avilés, está dedicada a tratar la salud y la estética dental con tecnología de vanguardia y grandes profesionales.',
};

const homeTreatments = [
  {
    title: 'Ortodoncia',
    href: '/servicios/ortodoncia-en-aviles',
    image: '/servicio-ortodoncia.png',
  },
  {
    title: 'Implantología',
    href: '/servicios/implantologia-dental-en-aviles',
    image: '/servicio-implantologia.png',
  },
  {
    title: 'Odontología general',
    href: '/servicios/odontologia-aviles-dentista',
    image: '/servicio-odontologia.png',
  },
  {
    title: 'Prótesis dentales',
    href: '/servicios/protesis-dentales-en-aviles',
    image: '/servicio-protesis.png',
  },
  {
    title: 'Periodoncia',
    href: '/servicios/clinicas-de-periodoncia-en-aviles',
    image: '/servicio-periodoncia.png',
  },
  {
    title: 'Estética dental',
    href: '/servicios/estetica-dental-en-aviles',
    image: '/servicio-estetica.png',
  },
  {
    title: 'Odontopediatría',
    href: '/servicios/odontopedriatria-en-aviles',
    image: '/odontopedriatria.jpg',
  },
  {
    title: 'Radiología digital',
    href: '/servicios/radiologia-dental-en-aviles',
    image: '/hero-radiologia.webp',
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section with Bostak dark overlay pattern */}
      <PageHero
        theme="dark"
        title={
          <>
            Tu clínica dental en <span className="text-[#D9C496]">Avilés</span>
          </>
        }
        subtitle="Salud y estética dental con tecnología de vanguardia y un equipo humano especializado que se preocupa por tu bienestar."
        imageSrc="/Hero.jpg"
        imageAlt="Recepción e instalaciones de Centro Odontológico Castellanos en Avilés"
        imagePosition="object-center"
        minHeight="min-h-[600px] lg:min-h-[700px]"
        overlayClassName="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/60"
        ctaText="Pedir una cita"
        ctaHref="/contacto"
        secondaryCtaText="Ver tratamientos"
        secondaryCtaHref="#tratamientos"
        benefits={[
          { icon: MapPin, label: 'Centro de Avilés' },
          { icon: Sparkles, label: 'Última tecnología' },
          { icon: Users, label: 'Equipo multidisciplinar' },
          { icon: Award, label: 'Desde 2011' },
        ]}
      />

      {/* 2. Sobre nuestra clínica (Dedicated Section) */}
      <section className="bg-white py-16 lg:py-24 border-b border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
                Sobre nuestra clínica
              </h2>
              <div className="space-y-4 text-zinc-600 text-lg leading-relaxed">
                <p>
                  Nuestra clínica dental, ubicada en el centro de Avilés, está dedicada a
                  tratar la salud y la estética dental con las últimas tecnologías y la labor
                  humana de grandes profesionales que se preocupan por tu bienestar. Somos
                  especialistas en implantes dentales, ortodoncia, cirugía oral,
                  periodoncia, prótesis dentales, odontopediatría y estética bucodental.
                </p>
                <p>
                  Un espacio alejado de la estética de los dentistas tradicionales, con todos
                  los servicios odontológicos y donde te dispensaremos un trato personalizado
                  y te ofreceremos la solución más adecuada.
                </p>
              </div>
            </div>

            <div className="w-full flex items-center justify-center">
              <img
                src="/camilla-clinica-por-dentro.png"
                alt="Gabinete e instalaciones Centro Odontológico Castellanos"
                className="w-auto max-h-[500px] lg:max-h-[560px] object-contain rounded-2xl drop-shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Accent Section */}
      <AccentSection
        title="Tu clínica dental en Avilés"
        imageSrc="/dos-miembros-con-paciente-en-camilla.jpg"
        imageAlt="Equipo médico con paciente en Centro Odontológico Castellanos"
        description={
          <div className="space-y-5">
            <p className="text-white/95 text-lg leading-relaxed">
              Contamos con la última tecnología que nos permite a los odontólogos sacar el máximo partido a nuestro trabajo:
            </p>
            <ul className="space-y-3 pt-1">
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-white/20 text-white shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/90 text-base leading-snug">
                  <strong className="text-white font-semibold">Tecnología de última generación:</strong> optimizamos cada fase de nuestro trabajo clínico.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-white/20 text-white shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/90 text-base leading-snug">
                  <strong className="text-white font-semibold">Diagnósticos optimizados:</strong> máxima precisión para asegurar los mejores resultados finales.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-white/20 text-white shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/90 text-base leading-snug">
                  <strong className="text-white font-semibold">Solución personalizada:</strong> ofreciendo a cada paciente la mejor solución a su problema.
                </span>
              </li>
            </ul>
          </div>
        }
      />

      {/* 4. Tratamientos Section */}
      <section id="tratamientos" className="bg-white py-16 lg:py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
              Tratamientos
            </h2>
            <p className="mt-3 text-lg text-zinc-600">
              Desde 2011 cuidando tu salud dental con especialidades avanzadas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeTreatments.map((treatment) => (
              <Link
                key={treatment.href}
                href={treatment.href}
                className="group flex flex-col bg-white border border-zinc-200/80 rounded-2xl overflow-hidden hover:border-zinc-300 hover:shadow-md transition-all"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-50">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <h3 className="text-base font-semibold text-ink group-hover:text-accent transition-colors">
                    {treatment.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Filosofía e Instalaciones (Aesthetic Section) */}
      <section className="bg-white py-16 lg:py-24 border-t border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="w-full order-2 lg:order-1">
              <img
                src="/Clinica-por-dentro.jpg"
                alt="Instalaciones cálidas y confortables Centro Odontológico Castellanos"
                className="w-full h-[360px] lg:h-[460px] object-cover rounded-2xl shadow-sm"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
                Un espacio pensado para tu bienestar
              </h2>
              <div className="space-y-4 text-zinc-600 text-lg leading-relaxed">
                <p>
                  Diseñada para crear un espacio alejado de la estética tradicional de una clínica dental,
                  nuestras instalaciones combinan colores cálidos y un ambiente confortable que invitan
                  al paciente a relajarse y tener una experiencia más agradable.
                </p>
                <p>
                  Nuestra filosofía es lograr la excelencia trabajando en equipo, dedicando a cada paciente
                  el tiempo necesario y basándonos en la calidad por encima de la cantidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Sobre nuestro equipo Section */}
      <section className="bg-zinc-50 border-t border-zinc-200 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
                Sobre nuestro equipo
              </h2>
              <p className="text-xl font-medium text-accent leading-snug">
                ¡Un equipo de grandes profesionales encantados de prestarte los mejores servicios!
              </p>
              <p className="text-zinc-600 text-lg leading-relaxed">
                En nuestra clínica dental de Avilés estamos convencidos de que la clave de
                un tratamiento exitoso es contar con un equipo de profesionales
                especializados en las diferentes ramas de la odontología, (dentistas,
                ortodoncistas, endodoncistas, protésicos, esteticistas dentales,
                higienistas…), capaces de intercambiar conocimientos y experiencia para
                hacer un diagnóstico correcto y con ello el tratamiento adecuado para cada
                paciente.
              </p>
            </div>

            <div className="w-full">
              <img
                src="/equipo/equipo.webp"
                alt="Equipo Centro Odontológico Castellanos"
                className="w-full h-[360px] lg:h-[460px] object-cover rounded-2xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <CTASection
        title="Tu clínica dental en Avilés"
        buttonText="Pedir una cita"
        buttonHref="/contacto"
      />
    </>
  );
}
