import { Quote } from 'lucide-react';

interface TestimonialsProps {
  dict: any;
}

export default function Testimonials({ dict }: TestimonialsProps) {
  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-slate-950 overflow-hidden relative" aria-labelledby="testimonials-heading">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl opacity-50" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-accent-100 dark:bg-accent-900/20 rounded-full blur-3xl opacity-50" aria-hidden="true"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <h2 id="testimonials-heading" className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {dict.testimonials.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12 px-2">
          {dict.testimonials.items.map((testimonial: any, index: number) => (
            <div 
              key={index}
              className="relative p-8 sm:p-10 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/20 dark:shadow-none hover:-translate-y-1 transition-transform duration-300"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-primary-100 dark:text-slate-800 rtl:right-auto rtl:left-8 rtl:transform rtl:-scale-x-100 rotate-180" aria-hidden="true" />
              <div className="relative z-10">
                <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 italic mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary-400 to-accent-500 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-lg">
                      {testimonial.author}
                    </div>
                    <div className="text-sm font-medium text-primary-600 dark:text-primary-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
