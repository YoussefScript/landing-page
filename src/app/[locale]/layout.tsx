import type { Metadata } from 'next';
import { Inter, Noto_Sans_Arabic } from 'next/font/google';
import '../globals.css';
import { i18n, type Locale } from '@/i18n';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const notoSansArabic = Noto_Sans_Arabic({ subsets: ['arabic'], variable: '--font-noto-arabic' });

export const metadata: Metadata = {
  title: 'NovaSync | Data Infrastructure for the AI Era',
  description: 'Process terabytes in seconds, not hours. Unlock the true potential of your data with our next-generation cloud architecture.',
  openGraph: {
    title: 'NovaSync | Data Infrastructure for the AI Era',
    description: 'Process terabytes in seconds, not hours.',
    type: 'website',
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function RootLayout(
  props: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
  }
) {
  const params = await props.params;

  const locale = params.locale as Locale;

  const {
    children
  } = props;

  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${notoSansArabic.variable} antialiased bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 font-sans transition-colors duration-300 overflow-x-hidden`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
