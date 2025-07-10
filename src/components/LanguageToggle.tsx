import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
    { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' },
    { code: 'de' as Language, name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it' as Language, name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt' as Language, name: 'Português', flag: '🇵🇹' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageSelect = (langCode: Language) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-gray-800/50"
        aria-label="Select language"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium hidden sm:inline">
          {currentLanguage?.flag} {currentLanguage?.code.toUpperCase()}
        </span>
        <span className="text-sm font-medium sm:hidden">
          {currentLanguage?.flag}
        </span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-20 overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className={`w-full px-4 py-3 text-left flex items-center space-x-3 hover:bg-gray-700 transition-colors duration-200 ${
                  language === lang.code ? 'bg-green-600/20 text-green-400' : 'text-gray-300'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.name}</span>
                {language === lang.code && (
                  <div className="ml-auto w-2 h-2 bg-green-400 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageToggle;