import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

const treatmentLinks = [
  { label: 'Ortodoncia', href: '/servicios/ortodoncia-en-aviles' },
  { label: 'Implantología', href: '/servicios/implantologia-dental-en-aviles' },
  { label: 'Odontología general', href: '/servicios/odontologia-aviles-dentista' },
  { label: 'Prótesis dentales', href: '/servicios/protesis-dentales-en-aviles' },
  { label: 'Periodoncia', href: '/servicios/clinicas-de-periodoncia-en-aviles' },
  { label: 'Estética dental', href: '/servicios/estetica-dental-en-aviles' },
  { label: 'Odontopediatría', href: '/servicios/odontopedriatria-en-aviles' },
  { label: 'Radiología digital', href: '/servicios/radiologia-dental-en-aviles' },
];

const pageLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'La clínica', href: '/la-clinica' },
  { label: 'Equipo', href: '/equipo' },
  { label: 'Contacto', href: '/contacto' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-zinc-300">
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-block">
              <img
                src="/logo-clinica-castellanos-blanco.png"
                alt="Odontología Castellanos"
                className="h-8 md:h-9 w-auto"
              />
            </Link>
            <p className="text-zinc-400 text-sm">
              Desde 2011 cuidando tu salud dental en Avilés.
            </p>

            <div className="space-y-3 text-sm text-zinc-300 pt-2">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Av. Fernández Balsera, 5, 33402 Avilés, Asturias</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <div className="flex flex-wrap gap-x-2">
                  <a href="tel:984110500" className="hover:text-white transition-colors">
                    984 11 05 00
                  </a>
                  <span>/</span>
                  <a href="tel:673638305" className="hover:text-white transition-colors">
                    673 63 83 05
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a
                  href="mailto:equipo@odontologia-castellanos.es"
                  className="hover:text-white transition-colors"
                >
                  equipo@odontologia-castellanos.es
                </a>
              </div>
            </div>
          </div>

          {/* Quick links to treatments */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Tratamientos
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
              {treatmentLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links to pages & appointment */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Clínica
            </h3>
            <ul className="space-y-2.5 text-sm">
              {pageLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl shadow-xs hover:shadow-md transition-all"
                >
                  Pedir una cita
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-zinc-800 text-xs text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} Odontología Castellanos. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <span>Avilés, Asturias</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
