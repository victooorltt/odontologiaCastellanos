import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AccentSection from '@/components/AccentSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Nuestro equipo | Odontología Castellanos Avilés',
  description:
    'Conoce a nuestro equipo multidisciplinar de odontólogos y profesionales expertos en salud y estética dental en Avilés.',
};

const teamMembers = [
  {
    name: 'Dr. Luis Castellanos Jal',
    role: 'Cirujano Oral y Estética. Director de la Clínica',
    image: '/equipo/Luis-castellanos-director.webp',
  },
  {
    name: 'Nerea González Treviño',
    role: 'Dirección y Atención al Paciente',
    image: '/equipo/Nerea-gonzalez.webp',
  },
  {
    name: 'Dra. Tamara Muñiz',
    role: 'Odontóloga General y Estética',
    image: '/equipo/tamara-muniz.webp',
  },
  {
    name: 'Dra. Celtia García',
    role: 'Odontóloga General y Estética',
    image: '/equipo/Celtia-garcia.webp',
  },
  {
    name: 'Dra. Marta González Zapico',
    role: 'Odontóloga',
    image: '/equipo/marta-gonzalez.webp',
  },
  {
    name: 'Dr. Juan R. Cobo',
    role: 'Cirujano Maxilofacial y Estética Facial',
    image: '/equipo/juan-r-cobo.webp',
  },
  {
    name: 'Dra. Carolina Arancón',
    role: 'Ortodoncia',
    image: '/equipo/carolina.webp',
  },
  {
    name: 'Miriam Sánchez Rafael',
    role: 'Auxiliar de clínica',
    image: '/equipo/miriam.webp',
  },
  {
    name: 'Yanire Cuesta',
    role: 'Higienista',
    image: '/equipo/yanire.webp',
  },
  {
    name: 'Irene Sánchez de Prada',
    role: 'Higienista',
    image: '/equipo/irene.webp',
  },
  {
    name: 'María Luisa Bravo',
    role: 'Higienista',
    image: '/equipo/maria-luisa.webp',
  },
  {
    name: 'Laura Robla',
    role: 'Higienista',
    image: '/equipo/laura-robla.webp',
  },
  {
    name: 'Aitana Martín',
    role: 'Recepcionista',
    image: '/equipo/aitana.webp',
  },
];

export default function EquipoPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Nuestro equipo médico:{' '}
            <span className="text-accent">Especialistas comprometidos</span>
          </>
        }
        subtitle="Dentistas y profesionales de vanguardia en todas las ramas de la odontología, trabajando de forma coordinada con cercanía, rigor y vocación de servicio."
        ctaText="Pedir una cita"
        ctaHref="/contacto"
        imageSrc="/equipo/equipo.webp"
        imageAlt="Equipo completo Centro Odontológico Castellanos"
      />

      <AccentSection
        title="Profesionales especializados"
        description="En nuestra clínica dental de Avilés estamos convencidos de que la clave de un tratamiento exitoso es contar con un equipo de profesionales especializados en las diferentes ramas de la odontología, (dentistas, ortodoncistas, endodoncistas, protésicos, esteticistas dentales, higienistas…), capaces de intercambiar conocimientos y experiencia para hacer un diagnóstico correcto y con ello el tratamiento adecuado para cada paciente. En Centro Odontológico Castellanos somos un equipo cercano al paciente donde percibirás siempre la misma profesionalidad y amabilidad. No te conformes con vernos en pantalla, acércate por nuestra clínica ubicada en la Avenida Fernández Balsera, 5 de Avilés."
        imageSrc="/dos-miembros-con-paciente-en-camilla.jpg"
        imageAlt="Profesionales especializados en gabinete"
        reverse
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
              Nuestros profesionales
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm flex flex-col"
              >
                <div className="aspect-[4/5] w-full bg-zinc-100 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-ink leading-snug">
                      {member.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-zinc-600 leading-normal">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
