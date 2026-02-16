import React, { useState } from 'react';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const [language, setLanguage] = useState('RO');

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    // Logic to change app language
  };

  return (
    <div className="language-toggle">
      <button onClick={() => toggleLanguage('RO')} className={language === 'RO' ? 'active' : ''}>RO</button>
      <button onClick={() => toggleLanguage('EN')} className={language === 'EN' ? 'active' : ''}>EN</button>
      <button onClick={() => toggleLanguage('FR')} className={language === 'FR' ? 'active' : ''}>FR</button>
    </div>
  );
};

export default LanguageToggle;
