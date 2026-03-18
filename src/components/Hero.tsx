import Link from 'next/link';
import { ArrowRight, Activity, Database, Server } from 'lucide-react';

interface HeroProps {
  dict: any;
}

export default function Hero({ dict }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40" aria-labelledby="hero-heading">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0 flex justify-center py-14 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-500/20 dark:bg-primary-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent-500/20 dark:bg-accent-600/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center">
          <h1 
            id="hero-heading"
            className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl leading-[1.1]"
          >
            {dict.hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            {dict.hero.subtitle}
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-slate-900 border border-transparent dark:bg-white px-8 py-3.5 text-base font-semibold text-white dark:text-slate-900 shadow-lg hover:bg-slate-800 dark:hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 dark:focus:ring-white dark:focus:ring-offset-slate-950 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {dict.hero.ctaPrimary}
              <ArrowRight className="ml-2 -mr-1 h-5 w-5 rtl:mr-2 rtl:-ml-1 rtl:-scale-x-100" aria-hidden="true" />
            </Link>
            <Link
              href="#features"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-8 py-3.5 text-base font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 transition-all hover:-translate-y-1 shadow-sm"
            >
              {dict.hero.ctaSecondary}
            </Link>
          </div>
        </div>

        <div className="mt-16 sm:mt-24 relative mx-auto max-w-5xl">
          <div className="rounded-xl bg-slate-50 dark:bg-slate-900/50 p-2 sm:p-3 ring-1 ring-inset ring-slate-200/50 dark:ring-slate-800/50 lg:rounded-2xl lg:p-4 backdrop-blur-sm shadow-2xl">
            <div className="rounded-md bg-white dark:bg-slate-950 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm overflow-hidden aspect-auto sm:aspect-video relative flex flex-col">
              {/* Fake UI Header */}
              <div className="h-12 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              {/* Fake UI Body */}
              <div className="flex-1 p-4 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                 <div className="rounded border border-slate-100 dark:border-slate-800 p-4 flex flex-col gap-4">
                   <div className="flex items-center gap-3">
                     <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                       <Activity className="w-5 h-5" />
                     </div>
                     <span className="font-semibold text-slate-700 dark:text-slate-300">Throughput</span>
                   </div>
                   <div className="text-3xl font-bold dark:text-white">14.2 TB/s</div>
                   <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                     <div className="bg-primary-500 h-2 rounded-full w-[85%]"></div>
                   </div>
                 </div>
                 <div className="rounded border border-slate-100 dark:border-slate-800 p-4 flex flex-col gap-4">
                   <div className="flex items-center gap-3">
                     <div className="p-2 bg-accent-100 dark:bg-accent-900/30 rounded-lg text-accent-600 dark:text-accent-400">
                       <Server className="w-5 h-5" />
                     </div>
                     <span className="font-semibold text-slate-700 dark:text-slate-300">Active Nodes</span>
                   </div>
                   <div className="text-3xl font-bold dark:text-white">1,204</div>
                   <div className="flex items-end gap-1 h-8">
                     {[40, 70, 45, 90, 65, 85, 95].map((h, i) => (
                       <div key={i} className="bg-accent-500 w-full rounded-sm" style={{ height: `${h}%` }}></div>
                     ))}
                   </div>
                 </div>
                 <div className="rounded border border-slate-100 dark:border-slate-800 p-4 flex flex-col gap-4 opacity-50 md:opacity-100">
                   <div className="flex items-center gap-3">
                     <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600 dark:text-emerald-400">
                       <Database className="w-5 h-5" />
                     </div>
                     <span className="font-semibold text-slate-700 dark:text-slate-300">Latency</span>
                   </div>
                   <div className="text-3xl font-bold dark:text-white">0.4 ms</div>
                   <div className="mt-auto text-sm text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                     <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> System Operational
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
