import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Sparkles, Network, ArrowUpRight, Zap, Users, Lightbulb, Share2 } from 'lucide-react';
import { InkFlowchart } from './InkFlowchart';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export const Philosophy = () => {
  const { t } = useTranslation();
  const poem = t('philosophy.poem', { returnObjects: true }) as string[];

  return (
    <section id="philosophy" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.div {...fadeIn} className="max-w-3xl mx-auto">
          <div className="w-16 h-16 mx-auto mb-8 bg-brand-ink text-white rounded-full flex items-center justify-center text-2xl font-brush shadow-sketch">
            <Sparkles size={24} />
          </div>
          <h2 className="text-4xl md:text-5xl font-brush mb-12">{t('philosophy.title')}</h2>
          <div className="space-y-4 font-hand text-2xl md:text-3xl leading-relaxed text-brand-secondary">
            {poem.map((line, index) => (
              <motion.p 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
      {/* Decorative ink drops */}
      <div className="absolute top-20 left-10 w-4 h-4 rounded-full bg-brand-ink opacity-20" />
      <div className="absolute bottom-20 right-10 w-6 h-6 rounded-full bg-brand-ink opacity-10" />
    </section>
  );
};

export const Intro = () => {
  const { t } = useTranslation();
  
  return (
    <section id="intro" className="py-24 bg-brand-ink/5 border-y-2 border-brand-ink border-dashed">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn}>
            <div className="w-12 h-12 mb-6 bg-white border-2 border-brand-ink rounded-lg flex items-center justify-center shadow-sketch">
              <Network className="text-brand-ink" />
            </div>
            <h2 className="text-4xl font-brush mb-4">{t('intro.title')}</h2>
            <h3 className="text-2xl font-hand font-bold text-brand-secondary mb-6">{t('intro.subtitle')}</h3>
            <p className="text-xl leading-relaxed text-brand-secondary font-hand">
              {t('intro.desc')}
            </p>
          </motion.div>
          <motion.div 
            {...fadeIn}
            className="relative h-[300px] bg-white border-2 border-brand-ink rounded-lg shadow-sketch p-4 flex items-center justify-center overflow-hidden"
          >
            <InkFlowchart />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Value = () => {
  const { t } = useTranslation();
  const items = t('value.items', { returnObjects: true }) as Array<{title: string, desc: string}>;
  const icons = [ArrowUpRight, Users, Zap];

  return (
    <section id="value" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl font-brush mb-4">{t('value.title')}</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg border-2 border-brand-ink shadow-sketch hover:shadow-sketch-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 bg-brand-gold/20 border-2 border-brand-ink rounded-full flex items-center justify-center mb-6">
                  <Icon className="text-brand-ink" />
                </div>
                <h3 className="text-2xl font-bold font-brush mb-4">{item.title}</h3>
                <p className="text-lg text-brand-secondary font-hand leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const Scenarios = () => {
  const { t } = useTranslation();
  const items = t('scenarios.items', { returnObjects: true }) as Array<{title: string, desc: string}>;
  const icons = [Share2, Users, Lightbulb];

  return (
    <section id="scenarios" className="py-24 bg-brand-ink text-white relative overflow-hidden">
      {/* Paper texture overlay for dark background */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl font-brush mb-4 text-white">{t('scenarios.title')}</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => {
             const Icon = icons[index];
             return (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border-2 border-white/20"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6 text-white">
                  <Icon />
                </div>
                <h3 className="text-2xl font-bold font-brush mb-4 text-white">{item.title}</h3>
                <p className="text-lg text-white/80 font-hand leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const Experience = () => {
  const { t } = useTranslation();
  
  return (
    <section id="experience" className="py-32 text-center">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white p-12 rounded-2xl border-2 border-brand-ink shadow-sketch-xl relative"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-accent rounded-full border-2 border-brand-ink flex items-center justify-center text-white text-2xl font-bold">
            !
          </div>
          <h2 className="text-4xl font-brush mb-6">{t('experience.title')}</h2>
          <p className="text-xl text-brand-secondary font-hand mb-8">
            {t('experience.desc')}
          </p>
          <a 
            href="https://t.zsxq.com/iSklv" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-brand-ink text-white rounded-lg font-bold text-xl transition-all shadow-sketch hover:shadow-sketch-lg hover:-translate-y-1 border-2 border-brand-ink w-full md:w-auto"
          >
            {t('experience.cta')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};
