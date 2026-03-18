'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe, ChevronRight, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Locale } from '@/i18n';

interface NavbarProps {
  dict: any;
  locale: Locale;
}

export default function Navbar({ dict, locale }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  // Next-themes hydration mismatch safeguard
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const toggleLang = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    // redirect to the new locale by replacing the current locale in pathname
    const segments = pathname.split('/');
    segments[1] = newLocale;
    return segments.join('/');
  };

  const navLinks = [
    { name: dict.navigation.about, href: '#about' },
    { name: dict.navigation.features, href: '#features' },
    { name: dict.navigation.testimonials, href: '#testimonials' },
    { name: dict.navigation.contact, href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="shrink-0">
            <Link href="/" className="flex items-center gap-2" aria-label="NovaSync Home">
              <div className="h-8 w-8 rounded-lg bg-linear-to-br from-primary-500 to-accent-600 flex items-center justify-center text-white font-bold text-xl leading-none">
                N
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300">
                NovaSync
              </span>
            </Link>
          </div>

          <nav className="hidden md:block" aria-label="Main Navigation">
            <ul className="flex items-center space-x-8 rtl:space-x-reverse">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm font-medium text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <Link 
              href={toggleLang()} 
              className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              aria-label={`Switch to ${locale === 'en' ? 'Arabic' : 'English'}`}
            >
              <Globe className="h-4 w-4" />
              <span>{locale === 'en' ? 'العربية' : 'EN'}</span>
            </Link>
            
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {mounted && theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2.5 text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 dark:focus:ring-white dark:focus:ring-offset-slate-950"
            >
              {dict.navigation.getStarted}
            </Link>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              aria-label="Toggle Dark Mode"
            >
              {mounted && theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Link 
              href={toggleLang()} 
              className="p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              aria-label={`Switch to ${locale === 'en' ? 'Arabic' : 'English'}`}
            >
              <Globe className="h-5 w-5" />
            </Link>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-4 pb-4 pt-2 shadow-lg bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block rounded-md px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-primary-400"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-between rounded-md bg-slate-900 dark:bg-white px-3 py-3 text-base font-medium text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100"
            >
              <span>{dict.navigation.getStarted}</span>
              <ChevronRight className="h-5 w-5 rtl:-scale-x-100" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
