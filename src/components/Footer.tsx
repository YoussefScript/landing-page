import Link from 'next/link';
import { Github, Linkedin, Youtube, Instagram } from 'lucide-react';

const IconX = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    aria-hidden="true"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

interface FooterProps {
  dict: any;
}

export default function Footer({ dict }: FooterProps) {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-linear-to-br from-primary-500 to-accent-600 flex items-center justify-center text-white font-bold text-xl leading-none">
              N
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white">
              NovaSync
            </span>
          </div>
          
          <div className="text-sm text-slate-500 dark:text-slate-400">
            {dict.footer.copyright}
          </div>

          <div className="flex space-x-6 rtl:space-x-reverse">
            <a href="#" className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 transition-colors" aria-label="X (formerly Twitter)">
              <span className="sr-only">X (formerly Twitter)</span>
              <IconX className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 transition-colors" aria-label="YouTube">
              <span className="sr-only">YouTube</span>
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 transition-colors" aria-label="Instagram">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 transition-colors" aria-label="GitHub">
              <span className="sr-only">GitHub</span>
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 transition-colors" aria-label="LinkedIn">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
