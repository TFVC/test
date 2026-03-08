import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Logo } from './Logo';

const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isTrackOpen, setIsTrackOpen] = useState(false);

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

  const footerLinks = [
    { name: t('nav.philosophy'), sectionId: 'philosophy' },
    { name: t('nav.intro'), sectionId: 'intro' },
    { name: t('nav.value'), sectionId: 'value' },
    { name: t('nav.scenarios'), sectionId: 'scenarios' },
  ];

  return (
    <footer className="bg-brand-paper border-t-2 border-brand-ink pt-20 pb-10 font-hand text-brand-ink">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-3xl font-bold text-brand-ink flex items-center gap-2 mb-4 font-brush">
              <Logo className="w-12 h-12" />
              <span>{t('brand')}</span>
            </Link>
            <p className="text-brand-secondary text-lg leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>

          {/* Links */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-brand-ink font-bold text-xl mb-6">{t('footer.product')}</h4>
            <div className="grid grid-cols-2 gap-4">
              {footerLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.sectionId)}
                  className="text-left text-brand-secondary hover:text-brand-ink text-lg transition-colors hover:underline decoration-2 underline-offset-4"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-brand-ink font-bold text-xl mb-6">{t('footer.ready')}</h4>
            <button 
              onClick={() => scrollToSection('intro')}
              className="w-full py-3 bg-transparent hover:bg-brand-ink/5 border-2 border-brand-ink text-brand-ink rounded-lg font-bold transition-colors mb-4 shadow-sketch hover:shadow-sketch-lg hover:-translate-y-1"
            >
              {t('nav.watchIntro')}
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="w-full py-3 bg-brand-ink hover:bg-brand-secondary text-white rounded-lg font-bold transition-colors shadow-sketch hover:shadow-sketch-lg hover:-translate-y-1 border-2 border-brand-ink"
            >
              {t('nav.startNow')}
            </button>
          </div>
        </div>

        <div className="border-t-2 border-brand-ink/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-secondary text-sm">
            © {new Date().getFullYear()} {t('brand')}. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-6">
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsTrackOpen((prev) => !prev)}
                className="px-4 py-2 bg-brand-accent text-white rounded-lg font-bold shadow-sketch hover:shadow-sketch-lg hover:-translate-y-1 border-2 border-brand-ink transition-all"
                aria-expanded={isTrackOpen}
              >
                人本生产力创新赛道
              </button>
              {isTrackOpen && (
                <div className="absolute right-0 bottom-full mb-3 w-[30rem] bg-white border-2 border-brand-ink rounded-lg shadow-sketch p-4 text-brand-ink">
                  <div className="text-lg font-brush mb-2">人本生产力创新赛道</div>
                  <div className="text-sm text-brand-secondary leading-relaxed font-hand">
                    人本生产力是一种将人的全面发展置于中心的发展范式。它超越传统生产力对效率、资本和增长的单一追求，主张<strong className="font-bold text-brand-ink">人不是实现增长的工具，而是发展的根本目的</strong>。其核心在于通过投资人力资本、赋能创新自主、构建尊重包容的关系，激发人的深层潜能与幸福感。
                  </div>
                  <div className="text-sm text-brand-secondary leading-relaxed font-hand mt-3">
                    在人工智能时代，这一理念展现出双重战略意义：首先，<strong className="font-bold text-brand-ink">在AI的效能与边界尚未全面验证的探索期，坚定发展人本生产力是一条稳健的“保底”路线</strong>，能确保社会经济的韧性、公平与持续创新力，避免将所有希望押注于单一技术方向。其次，倘若AI生产力被验证为通用颠覆性力量，人本生产力则自然演进为其不可或缺的<strong className="font-bold text-brand-ink">“双轨驱动力”与价值锚点</strong>——AI负责提升效率与拓展可能，而人本则负责掌舵方向、分配红利、保障尊严，并专注于AI无法替代的情感、创造与战略思考。二者共同构成技术进步与社会福利平衡发展的坚实底座。
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
