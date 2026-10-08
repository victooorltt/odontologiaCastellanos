'use client';

import { useState } from 'react';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    tratamiento: '',
    mensaje: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate async submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        nombre: '',
        telefono: '',
        email: '',
        tratamiento: '',
        mensaje: '',
      });
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      <PageHero
        title={
          <>
            Contacto y localización:{' '}
            <span className="text-accent">Estamos en Avilés</span>
          </>
        }
        subtitle="¿Quieres pedir cita con nuestros odontólogos o resolver cualquier duda? Estamos en pleno centro de Avilés para atenderte con la mayor cercanía y profesionalidad."
        ctaText="Llamar ahora"
        ctaHref="tel:984110500"
        imageSrc="/Clinica-por-dentro.jpg"
        imageAlt="Centro Odontológico Castellanos en Avilés"
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Column 1: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-zinc-200 rounded-2xl p-8 lg:p-10 shadow-sm">
                <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-ink mb-2">
                  Formulario de contacto
                </h2>
                <p className="text-zinc-600 text-base mb-8">
                  Rellena los siguientes campos y nos pondremos en contacto contigo a la mayor brevedad.
                </p>

                {isSubmitted ? (
                  <div className="py-8 space-y-4">
                    <div className="flex items-center gap-3 text-accent">
                      <CheckCircle className="w-7 h-7 shrink-0" />
                      <h3 className="text-xl font-semibold text-ink">
                        Solicitud enviada correctamente
                      </h3>
                    </div>
                    <p className="text-zinc-600 leading-relaxed">
                      Muchas gracias por contactar con Odontología Castellanos. Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible para confirmar tu cita.
                    </p>
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-ink bg-zinc-100 hover:bg-zinc-200 rounded-xl transition-all shadow-xs"
                      >
                        Enviar otra solicitud
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="nombre"
                        className="block text-sm font-medium text-zinc-700 mb-1.5"
                      >
                        Nombre completo <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Tu nombre y apellidos"
                        className="w-full px-4 py-3 rounded-lg border border-zinc-300 text-ink placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="telefono"
                          className="block text-sm font-medium text-zinc-700 mb-1.5"
                        >
                          Teléfono <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="telefono"
                          name="telefono"
                          required
                          value={formData.telefono}
                          onChange={handleChange}
                          placeholder="Número de teléfono"
                          className="w-full px-4 py-3 rounded-lg border border-zinc-300 text-ink placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-zinc-700 mb-1.5"
                        >
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="tucorreo@ejemplo.com"
                          className="w-full px-4 py-3 rounded-lg border border-zinc-300 text-ink placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="tratamiento"
                        className="block text-sm font-medium text-zinc-700 mb-1.5"
                      >
                        Tratamiento de interés
                      </label>
                      <select
                        id="tratamiento"
                        name="tratamiento"
                        value={formData.tratamiento}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-zinc-300 text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                      >
                        <option value="">Selecciona un tratamiento (opcional)</option>
                        <option value="Ortodoncia">Ortodoncia</option>
                        <option value="Implantología">Implantología</option>
                        <option value="Odontología general">Odontología general</option>
                        <option value="Prótesis">Prótesis</option>
                        <option value="Periodoncia">Periodoncia</option>
                        <option value="Estética dental">Estética dental</option>
                        <option value="Odontopediatría">Odontopediatría</option>
                        <option value="Radiología avanzada">Radiología avanzada</option>
                        <option value="Medicina estética">Medicina estética</option>
                        <option value="Otra consulta">Otra consulta general</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="mensaje"
                        className="block text-sm font-medium text-zinc-700 mb-1.5"
                      >
                        Mensaje
                      </label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        rows={4}
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder="Cuéntanos el motivo de tu consulta o disponibilidad horaria..."
                        className="w-full px-4 py-3 rounded-lg border border-zinc-300 text-ink placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-accent hover:bg-accent-hover disabled:opacity-60 rounded-xl shadow-md transition-all hover:shadow-lg cursor-pointer"
                      >
                        {isSubmitting ? 'Enviando solicitud...' : 'Enviar solicitud de cita'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Column 2: Information & Location */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-ink mb-6">
                  Información de contacto
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent-light rounded-xl text-accent shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-ink">Dirección</h3>
                      <p className="mt-1 text-zinc-600 leading-relaxed">
                        Av. Fernández Balsera, 5<br />
                        33402 Avilés, Asturias
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent-light rounded-xl text-accent shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-ink">Teléfonos de atención</h3>
                      <div className="mt-1 space-y-1">
                        <p>
                          <a
                            href="tel:984110500"
                            className="text-zinc-700 hover:text-accent font-medium transition-colors"
                          >
                            984 11 05 00
                          </a>
                        </p>
                        <p>
                          <a
                            href="tel:673638305"
                            className="text-zinc-700 hover:text-accent font-medium transition-colors"
                          >
                            673 63 83 05
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent-light rounded-xl text-accent shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-ink">Correo electrónico</h3>
                      <p className="mt-1">
                        <a
                          href="mailto:equipo@odontologia-castellanos.es"
                          className="text-zinc-700 hover:text-accent transition-colors break-all"
                        >
                          equipo@odontologia-castellanos.es
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent-light rounded-xl text-accent shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-ink">Horario de atención</h3>
                      <p className="mt-1 text-zinc-600 leading-relaxed">
                        Lunes a Viernes: 9:00 - 20:00 h<br />
                        Sábados y Domingos: Cerrado
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Immediate attention notice */}
              <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6">
                <h3 className="text-base font-semibold text-ink mb-2">
                  Atención inmediata y urgencias
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Si necesitas atención urgente o una consulta inmediata, te recomendamos llamarnos directamente por teléfono para gestionar tu cita de forma prioritaria.
                </p>
                <div className="mt-4">
                  <a
                    href="tel:984110500"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Llamar al 984 11 05 00</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa de localización */}
          <div className="mt-14 lg:mt-18">
            <div className="rounded-2xl overflow-hidden border border-zinc-200 shadow-sm bg-white">
              <div className="p-6 sm:p-8 border-b border-zinc-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink">
                    Ubicación de la clínica
                  </h2>
                  <p className="text-zinc-600 text-sm mt-1">
                    Av. Fernández Balsera, 5, 33402 Avilés, Asturias — En pleno centro de Avilés, de fácil acceso y con aparcamientos cercanos.
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Centro+odontol%C3%B3gico+y+est%C3%A9tica+Castellanos,+Av.+Fern%C3%A1ndez+Balsera,+5,+33402+Avil%C3%A9s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-accent bg-accent/10 hover:bg-accent/20 rounded-xl transition-all shrink-0"
                >
                  Abrir en Google Maps
                </a>
              </div>
              <div className="w-full h-[400px] lg:h-[460px]">
                <iframe
                  title="Ubicación de Centro Odontológico Castellanos en Google Maps"
                  src="https://maps.google.com/maps?q=Centro+odontol%C3%B3gico+y+est%C3%A9tica+Castellanos,+Av.+Fern%C3%A1ndez+Balsera,+5,+33402+Avil%C3%A9s,+Asturias&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
