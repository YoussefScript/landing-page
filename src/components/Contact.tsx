"use client";

import { ArrowRight, Mail } from 'lucide-react';

interface ContactProps {
  dict: any;
}

export default function Contact({ dict }: ContactProps) {
  return (
    <section id="contact" className="py-24 relative overflow-hidden" aria-labelledby="contact-heading">
      <div className="absolute inset-0 bg-slate-50 dark:bg-black" aria-hidden="true">
        <div className="absolute inset-0 bg-linear-to-br from-primary-100/50 via-slate-50 to-accent-100/30 dark:from-primary-900/60 dark:via-slate-900 dark:to-accent-900/40 opacity-80 mix-blend-normal dark:mix-blend-multiply"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-primary-500/10 dark:from-primary-500/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-accent-500/10 dark:from-accent-500/20 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <div className="bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-10 sm:p-16 rounded-3xl shadow-xl dark:shadow-2xl text-center">
          <h2 id="contact-heading" className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-5xl mb-6 leading-tight">
            {dict.contact.title}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            {dict.contact.subtitle}
          </p>
          
          <form className="max-w-md mx-auto relative group w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="relative flex flex-col sm:flex-row items-center gap-3 sm:gap-0 w-full">
              <div className="absolute top-[18px] sm:inset-y-0 left-0 pl-4 flex items-center pointer-events-none rtl:left-auto rtl:right-0 rtl:pl-0 rtl:pr-4">
                <Mail className="h-5 w-5 text-slate-500 dark:text-slate-400" aria-hidden="true" />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-full border border-slate-300 dark:border-transparent py-4 pl-12 pr-4 sm:pr-36 rtl:pr-12 rtl:pl-4 rtl:sm:pl-36 bg-white dark:bg-white/10 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:bg-slate-50 dark:focus:bg-white/20 focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all sm:text-base shadow-inner"
                placeholder={dict.contact.emailPlaceholder}
                required
                aria-label={dict.contact.emailPlaceholder}
              />
              <button
                type="submit"
                className="relative sm:absolute w-full sm:w-auto sm:inset-y-1.5 sm:right-1.5 rtl:sm:right-auto rtl:sm:left-1.5 flex items-center justify-center rounded-full bg-slate-900 dark:bg-white px-6 py-4 sm:py-2 text-sm font-bold text-white dark:text-slate-900 shadow-md hover:bg-slate-800 dark:hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:focus-visible:outline-white transition-all hover:scale-105"
              >
                {dict.contact.submit}
              </button>
            </div>
          </form>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Join 10,000+ developers already on the waitlist.</p>
        </div>
      </div>
    </section>
  );
}
