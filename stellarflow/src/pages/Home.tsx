import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Philosophy, Intro, Value, Scenarios, Experience } from '../components/Sections';

const Home = () => {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  const heroBlobX = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const heroBlobX2 = useTransform(scrollYProgress, [0, 1], [0, -180]);

  const scrollToExperience = () => {
    const element = document.getElementById('experience');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="overflow-x-hidden text-brand-ink">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[calc(100vh-6rem)] flex items-center scroll-mt-28">
        {/* Background Elements - Paper stains instead of glowing blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Simple sketchy circles for background decoration */}
          <motion.div style={{ x: heroBlobX }} className="absolute top-20 right-20 w-64 h-64 border-2 border-brand-ink/10 rounded-full border-dashed" />
          <motion.div style={{ x: heroBlobX2 }} className="absolute bottom-20 left-20 w-48 h-48 border-2 border-brand-ink/10 rounded-full" />
        </div>

        <div className="container mx-auto px-6 min-h-[calc(100vh-6rem)] grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-8 py-10"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-hand leading-tight text-brand-ink">
              {t('hero.title')}
            </h1>
            <p className="text-2xl text-brand-secondary max-w-lg leading-relaxed font-hand">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={scrollToExperience}
                className="px-8 py-4 bg-brand-ink text-white rounded-lg font-bold text-lg transition-all shadow-sketch hover:shadow-sketch-lg hover:-translate-y-1 border-2 border-brand-ink flex items-center justify-center gap-2"
              >
                {t('hero.startNow')} <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[400px] md:h-[600px] lg:h-full flex items-center justify-center"
          >
            {/* Sketchy Stellar Visual */}
            <div className="relative w-full h-full">
               <div className="absolute inset-0 flex items-center justify-center">
                  {/* Hand-drawn style circles */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] border-2 border-brand-ink rounded-full absolute"
                    style={{ borderRadius: '50% 45% 55% 40% / 40% 55% 45% 50%' }} // Organic shape
                  />
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] border-2 border-brand-ink/70 rounded-full absolute border-dashed"
                  />
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] border-2 border-brand-ink/30 rounded-full absolute"
                    style={{ borderRadius: '45% 55% 40% 60% / 55% 40% 60% 45%' }}
                  />
                  {/* Central Star/Core */}
                  <div className="relative flex items-center justify-center">
                     <div className="text-6xl font-brush text-brand-ink">★</div>
                  </div>
               </div>
               
               {/* Floating Notes/Cards */}
               <motion.div 
                 animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-1/4 right-1/4 bg-white p-4 rounded-lg border-2 border-brand-ink shadow-sketch transform rotate-3"
               >
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full border-2 border-brand-ink flex items-center justify-center text-brand-ink bg-brand-gold/20">
                     <Users size={16} />
                   </div>
                   <div>
                     <div className="text-xs text-brand-secondary font-bold uppercase tracking-wider">{t('hero.floatingNodes.team')}</div>
                     <div className="text-sm font-bold text-brand-ink">{t('hero.floatingNodes.connected')}</div>
                   </div>
                 </div>
               </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* New Sections */}
      <Philosophy />
      <Intro />
      <Value />
      <Scenarios />
      <Experience />
    </div>
  );
};

export default Home;
