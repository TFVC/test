import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { useTranslation } from 'react-i18next';
import { Logo } from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const attemptScroll = () => {
      const element = document.getElementById(sectionId);
      if (!element) return false;
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return true;
    };

    if (location.pathname !== '/') {
      navigate('/');
      requestAnimationFrame(() => {
        setTimeout(() => {
          if (!attemptScroll()) {
            setTimeout(attemptScroll, 100);
          }
        }, 50);
      });
      return;
    }

    attemptScroll();
  };

  const navLinks = [
    { name: t('nav.philosophy'), sectionId: 'philosophy' },
    { name: t('nav.intro'), sectionId: 'intro' },
    { name: t('nav.value'), sectionId: 'value' },
    { name: t('nav.scenarios'), sectionId: 'scenarios' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-hand',
        isScrolled
          ? 'bg-brand-paper/95 backdrop-blur-md border-b-2 border-brand-ink py-4 shadow-sketch'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold tracking-tight text-brand-ink flex items-center gap-2 font-brush">
          <Logo className="w-12 h-12" />
          <span>{t('brand')}</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.name}
              onClick={() => scrollToSection(link.sectionId)}
              className="text-lg font-medium text-brand-secondary hover:text-brand-ink hover:underline decoration-2 underline-offset-4 transition-all"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Desktop CTA & Language */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => scrollToSection('experience')}
            className="group relative px-6 py-2 bg-brand-ink text-white rounded-lg font-bold transition-all duration-300 shadow-sketch hover:shadow-sketch-lg hover:-translate-y-1 border-2 border-brand-ink"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t('nav.startNow')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            className="text-brand-ink"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-paper border-b-2 border-brand-ink overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.name}
                  className="text-xl font-bold text-brand-secondary hover:text-brand-ink text-left"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    scrollToSection(link.sectionId);
                  }}
                >
                  {link.name}
                </button>
              ))}
              <div className="flex flex-col gap-4 mt-4">
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    scrollToSection('experience');
                  }}
                  className="w-full py-3 bg-brand-ink text-white rounded-lg font-bold text-center border-2 border-brand-ink shadow-sketch"
                >
                  {t('nav.startNow')}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
