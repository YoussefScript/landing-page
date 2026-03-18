import { Users, TrendingUp, Cpu, Globe2 } from 'lucide-react';

interface AboutProps {
  dict: any;
}

export default function About({ dict }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800" aria-labelledby="about-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative order-2 lg:order-1 px-4">
            <div className="absolute inset-0 -ml-10 -mt-10 bg-linear-to-tr from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20 rounded-3xl transform rotate-3 scale-105" aria-hidden="true"></div>
            <div className="relative rounded-2xl bg-white dark:bg-slate-950 p-8 shadow-xl border border-slate-200 dark:border-slate-800">
               <div className="grid grid-cols-2 gap-6">
                 <div className="flex flex-col gap-2">
                   <div className="p-3 bg-blue-50 dark:bg-blue-900/30 w-fit rounded-xl text-blue-600 dark:text-blue-400">
                     <Users className="w-6 h-6" />
                   </div>
                   <div className="text-4xl font-extrabold text-slate-900 dark:text-white">2.5M+</div>
                   <div className="text-sm font-medium text-slate-500">Developers Weekly</div>
                 </div>
                 <div className="flex flex-col gap-2 mt-8">
                   <div className="p-3 bg-accent-50 dark:bg-accent-900/30 w-fit rounded-xl text-accent-600 dark:text-accent-400">
                     <Cpu className="w-6 h-6" />
                   </div>
                   <div className="text-4xl font-extrabold text-slate-900 dark:text-white">50PB+</div>
                   <div className="text-sm font-medium text-slate-500">Data Processed Daily</div>
                 </div>
                 <div className="flex flex-col gap-2">
                   <div className="p-3 bg-emerald-50 dark:bg-emerald-900/30 w-fit rounded-xl text-emerald-600 dark:text-emerald-400">
                     <TrendingUp className="w-6 h-6" />
                   </div>
                   <div className="text-4xl font-extrabold text-slate-900 dark:text-white">99.99%</div>
                   <div className="text-sm font-medium text-slate-500">Uptime SLA</div>
                 </div>
                 <div className="flex flex-col gap-2 mt-8">
                   <div className="p-3 bg-amber-50 dark:bg-amber-900/30 w-fit rounded-xl text-amber-600 dark:text-amber-400">
                     <Globe2 className="w-6 h-6" />
                   </div>
                   <div className="text-4xl font-extrabold text-slate-900 dark:text-white">12</div>
                   <div className="text-sm font-medium text-slate-500">Global Regions</div>
                 </div>
               </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 id="about-heading" className="text-sm font-bold tracking-widest text-primary-600 dark:text-primary-400 uppercase mb-3">
              The Company
            </h2>
            <p className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl mb-6 leading-tight">
              {dict.about.title}
            </p>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              {dict.about.content}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
