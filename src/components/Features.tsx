import { Zap, Shield, Globe2 } from 'lucide-react';

interface FeaturesProps {
  dict: any;
}

export default function Features({ dict }: FeaturesProps) {
  const icons = [Zap, Shield, Globe2];

  return (
    <section id="features" className="py-24 bg-white dark:bg-slate-950 relative" aria-labelledby="features-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <h2 id="features-heading" className="text-sm font-bold tracking-widest text-primary-600 dark:text-primary-400 uppercase mb-3">
            Platform Capabilities
          </h2>
          <p className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl mb-4">
            {dict.features.title}
          </p>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            {dict.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-2">
          {dict.features.items.map((feature: any, index: number) => {
            const Icon = icons[index % icons.length];
            return (
              <div 
                key={index} 
                className="relative group p-6 sm:p-8 bg-slate-50 dark:bg-slate-900/40 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 hover:border-primary-500/30 dark:hover:border-primary-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
