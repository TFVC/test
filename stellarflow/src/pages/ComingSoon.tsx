import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ComingSoonProps {
  title: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ title }) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <div className="w-24 h-24 mb-6 rounded-full border-2 border-brand-ink flex items-center justify-center border-dashed animate-spin-slow">
        <span className="text-4xl">★</span>
      </div>
      <h1 className="text-5xl font-brush text-brand-ink mb-4">{title}</h1>
      <p className="text-brand-secondary mb-8 max-w-md font-hand text-xl">
        {t('comingSoon.desc')}
      </p>
      <Link 
        to="/"
        className="px-8 py-3 bg-brand-ink hover:bg-brand-secondary text-white rounded-lg font-bold transition-all shadow-sketch hover:shadow-sketch-lg hover:-translate-y-1 border-2 border-brand-ink"
      >
        {t('comingSoon.return')}
      </Link>
    </div>
  );
};

export default ComingSoon;
