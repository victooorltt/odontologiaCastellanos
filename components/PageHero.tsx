import React from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

export interface HeroBenefit {
  icon?: LucideIcon | React.ComponentType<{ className?: string }>;
  label: string;
}

export interface PageHeroProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  benefits?: HeroBenefit[];
  variant?: 'centered' | 'gradient';
  theme?: 'light' | 'dark';
  imagePosition?: string;
  imageWrapperClassName?: string;
  minHeight?: string;
  overlayClassName?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function PageHero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  benefits,
  variant = 'centered',
  theme,
  imagePosition = 'object-center',
  imageWrapperClassName = '',
  minHeight = 'min-h-[600px] lg:min-h-[700px]',
  overlayClassName,
  className = '',
  children,
}: PageHeroProps) {
  const isGradient = variant === 'gradient';
  // Centered heros default to dark theme with rich presence; gradient heros default to light theme
  const isDark = theme ? theme === 'dark' : !isGradient;

  return (
    <section
      className={`relative overflow-hidden ${
        isDark ? 'bg-zinc-950 border-b border-zinc-800/80' : 'bg-white border-b border-zinc-200/80'
      } ${minHeight} flex items-center ${
        isGradient ? '' : 'justify-center'
      } ${className}`.trim()}
    >
      {/* Background photo container */}
      <div
        className={`absolute inset-0 pointer-events-none overflow-hidden ${imageWrapperClassName}`.trim()}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`h-full w-full object-cover ${imagePosition}`}
          fetchPriority="high"
          loading="eager"
        />
        {/* Balanced translucent overlay to ensure contrast and readability while keeping photo clear */}
        {overlayClassName ? (
          <div className={overlayClassName} />
        ) : isDark ? (
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/60" />
        ) : isGradient ? (
          <>
            {/* Mobile vertical gradient: clean white behind top text, smooth progressive diffusion, photo clearly visible at bottom */}
            <div
              className="absolute inset-0 md:hidden"
              style={{
                background:
                  'linear-gradient(to bottom, #ffffff 0%, #ffffff 38%, rgba(255, 255, 255, 0.85) 52%, rgba(255, 255, 255, 0.3) 72%, rgba(255, 255, 255, 0) 90%)',
              }}
            />
            {/* Desktop horizontal gradient fade: solid white behind left text, gradual diffusion in center, right side completely open to show photo with full clarity */}
            <div
              className="absolute inset-0 hidden md:block"
              style={{
                background:
                  'linear-gradient(to right, #ffffff 0%, #ffffff 28%, rgba(255, 255, 255, 0.9) 42%, rgba(255, 255, 255, 0.4) 62%, rgba(255, 255, 255, 0) 82%)',
              }}
            />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/60" />
        )}
      </div>

      {/* Content Container */}
      <div
        className={`relative z-10 mx-auto px-6 py-16 lg:py-24 w-full ${
          isGradient
            ? 'max-w-6xl text-left'
            : 'max-w-5xl text-center'
        }`}
      >
        <div className={isGradient ? 'max-w-xl lg:max-w-xl' : 'max-w-3xl mx-auto'}>
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.12] ${
              isDark ? 'text-white [&_.text-accent]:text-[#D9C496]' : 'text-zinc-950'
            }`}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className={`mt-5 text-lg sm:text-xl leading-relaxed font-normal ${
                isDark ? 'text-zinc-200' : 'text-zinc-700'
              } ${isGradient ? 'max-w-2xl' : 'max-w-2xl mx-auto'}`}
            >
              {subtitle}
            </p>
          )}

          {/* Action buttons */}
          {(ctaText || secondaryCtaText || children) && (
            <div
              className={`mt-8 flex flex-col sm:flex-row items-center gap-4 ${
                isGradient ? 'justify-start' : 'justify-center'
              }`}
            >
              {ctaText && ctaHref && (
                <Link
                  href={ctaHref}
                  className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl shadow-md transition-all hover:shadow-lg w-full sm:w-auto"
                >
                  {ctaText}
                </Link>
              )}
              {secondaryCtaText && secondaryCtaHref && (
                <Link
                  href={secondaryCtaHref}
                  className={`inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-xl shadow-xs transition-colors w-full sm:w-auto ${
                    isDark
                      ? 'text-white bg-white/10 hover:bg-white/20 border border-white/25 hover:border-white/40 backdrop-blur-xs'
                      : 'text-zinc-800 bg-white/95 hover:bg-white border border-zinc-300 hover:border-zinc-400'
                  }`}
                >
                  {secondaryCtaText}
                </Link>
              )}
              {children}
            </div>
          )}
        </div>

        {/* Benefits row */}
        {benefits && benefits.length > 0 && (
          <div
            className={`mt-10 pt-6 border-t ${
              isDark ? 'border-white/20' : 'border-zinc-300/60'
            } ${isGradient ? 'max-w-2xl' : 'max-w-2xl mx-auto'}`}
          >
            <div
              className={`flex flex-wrap items-center gap-6 sm:gap-8 lg:gap-10 text-xs sm:text-sm font-medium ${
                isDark ? 'text-zinc-200' : 'text-zinc-800'
              } ${isGradient ? 'justify-start' : 'justify-center'}`}
            >
              {benefits.map((benefit, idx) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={idx} className="inline-flex items-center gap-2">
                    {IconComponent && (
                      <IconComponent
                        className={`h-4 w-4 shrink-0 ${
                          isDark ? 'text-accent-light text-amber-200' : 'text-accent'
                        }`}
                      />
                    )}
                    <span>{benefit.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
