import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default async function Home(
  props: {
    params: Promise<{ locale: string }>;
  }
) {
  const params = await props.params;

  const locale = params.locale as Locale;

  const dict = await getDictionary(locale);

  return (
    <>
      <Navbar dict={dict} locale={locale} />
      <main className="flex flex-col min-h-screen">
        <Hero dict={dict} />
        <Features dict={dict} />
        <About dict={dict} />
        <Testimonials dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
