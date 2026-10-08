'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const treatmentLinks = [
  { href: '/servicios/ortodoncia-en-aviles', label: 'Ortodoncia' },
  { href: '/servicios/implantologia-dental-en-aviles', label: 'Implantología' },
  { href: '/servicios/odontologia-aviles-dentista', label: 'Odontología general' },
  { href: '/servicios/protesis-dentales-en-aviles', label: 'Prótesis dentales' },
  { href: '/servicios/clinicas-de-periodoncia-en-aviles', label: 'Periodoncia' },
  { href: '/servicios/estetica-dental-en-aviles', label: 'Estética dental' },
  { href: '/servicios/odontopedriatria-en-aviles', label: 'Odontopediatría' },
  { href: '/servicios/radiologia-dental-en-aviles', label: 'Radiología digital' },
];

const generalNavLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/la-clinica', label: 'La clínica' },
  { href: '/equipo', label: 'Equipo' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [treatmentsDropdownOpen, setTreatmentsDropdownOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setTreatmentsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setMobileTreatmentsOpen(false);
    setTreatmentsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" onClick={closeAllMenus} className="inline-flex items-center">
          <img
            src="/logo-clinica-castellanos.png"
            alt="Odontología Castellanos"
            className="h-8 md:h-9 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-700 hover:text-ink transition-colors"
          >
            Inicio
          </Link>

          {/* Desktop Tratamientos Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setTreatmentsDropdownOpen(true)}
            onMouseLeave={() => setTreatmentsDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setTreatmentsDropdownOpen((prev) => !prev)}
              aria-expanded={treatmentsDropdownOpen}
              aria-label="Abrir menú de tratamientos"
              className="flex items-center gap-1 text-sm font-medium text-zinc-700 hover:text-ink transition-colors py-2 focus:outline-none"
            >
              <span>Tratamientos</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  treatmentsDropdownOpen ? 'rotate-180 text-ink' : ''
                }`}
              />
            </button>

            {/* Dropdown Card */}
            {treatmentsDropdownOpen && (
              <div className="absolute top-full left-0 pt-2 w-64 z-50">
                <div className="bg-white rounded-2xl shadow-xl border border-zinc-200/90 p-2 text-sm">
                  <div className="py-1">
                    {treatmentLinks.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setTreatmentsDropdownOpen(false)}
                        className="block px-3.5 py-2 rounded-lg text-zinc-700 hover:text-accent hover:bg-zinc-50 font-medium transition-colors"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/la-clinica"
            className="text-sm font-medium text-zinc-700 hover:text-ink transition-colors"
          >
            La clínica
          </Link>
          <Link
            href="/equipo"
            className="text-sm font-medium text-zinc-700 hover:text-ink transition-colors"
          >
            Equipo
          </Link>
          <Link
            href="/contacto"
            className="text-sm font-medium text-zinc-700 hover:text-ink transition-colors"
          >
            Contacto
          </Link>

          <Link
            href="/contacto"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl transition-all shadow-sm hover:shadow-md"
          >
            Pedir una cita
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          className="md:hidden p-2 text-zinc-700 hover:text-ink transition-colors focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white px-6 py-6 shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              onClick={closeAllMenus}
              className="text-base font-medium text-zinc-800 hover:text-accent transition-colors py-1"
            >
              Inicio
            </Link>

            {/* Mobile Tratamientos Accordion */}
            <div className="border-y border-zinc-100 py-2">
              <button
                type="button"
                onClick={() => setMobileTreatmentsOpen((prev) => !prev)}
                className="flex items-center justify-between w-full text-base font-medium text-zinc-800 hover:text-accent transition-colors py-1"
              >
                <span>Tratamientos</span>
                <ChevronDown
                  className={`w-4 h-4 text-zinc-500 transition-transform duration-200 ${
                    mobileTreatmentsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {mobileTreatmentsOpen && (
                <div className="pl-4 pr-2 mt-3 space-y-2 border-l-2 border-accent/30">
                  {treatmentLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={closeAllMenus}
                      className="block py-1.5 text-sm text-zinc-600 hover:text-accent font-normal transition-colors"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/la-clinica"
              onClick={closeAllMenus}
              className="text-base font-medium text-zinc-800 hover:text-accent transition-colors py-1"
            >
              La clínica
            </Link>

            <Link
              href="/equipo"
              onClick={closeAllMenus}
              className="text-base font-medium text-zinc-800 hover:text-accent transition-colors py-1"
            >
              Equipo
            </Link>

            <Link
              href="/contacto"
              onClick={closeAllMenus}
              className="text-base font-medium text-zinc-800 hover:text-accent transition-colors py-1"
            >
              Contacto
            </Link>

            <Link
              href="/contacto"
              onClick={closeAllMenus}
              className="mt-3 inline-flex items-center justify-center w-full px-5 py-3 text-base font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl transition-all shadow-sm"
            >
              Pedir una cita
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
