import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.demo': 'Demo',
    'nav.technology': 'Technology',
    'nav.github': 'GitHub',
    
    // Hero Section
    'hero.title.line1': 'Analyze Your Music',
    'hero.title.line2': 'Like Never Before',
    'hero.subtitle': 'SpotiTempo connects to your Spotify account to analyze your playlists and organize your music by tempo, energy, and musical characteristics. Discover patterns in your music taste and create the perfect playlists.',
    'hero.cta.demo': 'Try Live Demo',
    'hero.cta.github': 'View on GitHub',
    
    // Features Section
    'features.title': 'Powerful Music Analysis',
    'features.subtitle': 'Unlock the hidden patterns in your music library with advanced audio analysis and intelligent organization tools.',
    'features.tempo.title': 'Tempo & Energy Analysis',
    'features.tempo.description': 'Analyze the BPM, energy levels, and danceability of every track in your playlists. Perfect for creating workout or chill playlists.',
    'features.organization.title': 'Smart Organization',
    'features.organization.description': 'Automatically categorize your music by characteristics like valence, acousticness, and instrumentalness for better playlist curation.',
    'features.insights.title': 'Music Insights',
    'features.insights.description': 'Discover trends in your listening habits and get personalized recommendations based on your musical preferences and patterns.',
    
    // Demo Section
    'demo.title': 'See It In Action',
    'demo.subtitle': 'Connect your Spotify account and watch as SpotiTempo analyzes your music library in real-time, providing detailed insights and smart organization suggestions.',
    'demo.feature1': 'Real-time playlist analysis',
    'demo.feature2': 'Interactive tempo visualization',
    'demo.feature3': 'Smart playlist recommendations',
    'demo.feature4': 'Export organized playlists back to Spotify',
    'demo.cta': 'Connect Spotify',
    'demo.analyzing': 'Analyzing playlist...',
    'demo.energy': 'Energy',
    'demo.valence': 'Valence',
    
    // Technology Section
    'tech.title': 'Built with Modern Technology',
    'tech.subtitle': 'Leveraging the latest web technologies and Spotify\'s powerful API to deliver a seamless music analysis experience.',
    'tech.react': 'Modern UI framework',
    'tech.typescript': 'Type-safe development',
    'tech.spotify': 'Music data & authentication',
    'tech.webaudio': 'Advanced audio analysis',
    
    // CTA Section
    'cta.title': 'Ready to Explore Your Music?',
    'cta.subtitle': 'Join thousands of music lovers who have discovered new insights about their listening habits with SpotiTempo.',
    'cta.primary': 'Get Started Now',
    'cta.secondary': 'View Source Code',
    
    // Footer
    'footer.copyright': '© 2024 SpotiTempo. Built with ❤️ for music lovers.',
  },
  es: {
    // Navigation
    'nav.features': 'Características',
    'nav.demo': 'Demo',
    'nav.technology': 'Tecnología',
    'nav.github': 'GitHub',
    
    // Hero Section
    'hero.title.line1': 'Analiza Tu Música',
    'hero.title.line2': 'Como Nunca Antes',
    'hero.subtitle': 'SpotiTempo se conecta a tu cuenta de Spotify para analizar tus playlists y organizar tu música por tempo, energía y características musicales. Descubre patrones en tu gusto musical y crea las playlists perfectas.',
    'hero.cta.demo': 'Probar Demo',
    'hero.cta.github': 'Ver en GitHub',
    
    // Features Section
    'features.title': 'Análisis Musical Potente',
    'features.subtitle': 'Descubre los patrones ocultos en tu biblioteca musical con análisis de audio avanzado y herramientas de organización inteligente.',
    'features.tempo.title': 'Análisis de Tempo y Energía',
    'features.tempo.description': 'Analiza el BPM, niveles de energía y bailabilidad de cada canción en tus playlists. Perfecto para crear playlists de ejercicio o relajación.',
    'features.organization.title': 'Organización Inteligente',
    'features.organization.description': 'Categoriza automáticamente tu música por características como valencia, acústica e instrumentalidad para una mejor curación de playlists.',
    'features.insights.title': 'Insights Musicales',
    'features.insights.description': 'Descubre tendencias en tus hábitos de escucha y obtén recomendaciones personalizadas basadas en tus preferencias y patrones musicales.',
    
    // Demo Section
    'demo.title': 'Míralo en Acción',
    'demo.subtitle': 'Conecta tu cuenta de Spotify y observa cómo SpotiTempo analiza tu biblioteca musical en tiempo real, proporcionando insights detallados y sugerencias de organización inteligente.',
    'demo.feature1': 'Análisis de playlist en tiempo real',
    'demo.feature2': 'Visualización interactiva de tempo',
    'demo.feature3': 'Recomendaciones inteligentes de playlists',
    'demo.feature4': 'Exportar playlists organizadas de vuelta a Spotify',
    'demo.cta': 'Conectar Spotify',
    'demo.analyzing': 'Analizando playlist...',
    'demo.energy': 'Energía',
    'demo.valence': 'Valencia',
    
    // Technology Section
    'tech.title': 'Construido con Tecnología Moderna',
    'tech.subtitle': 'Aprovechando las últimas tecnologías web y la potente API de Spotify para ofrecer una experiencia de análisis musical sin interrupciones.',
    'tech.react': 'Framework UI moderno',
    'tech.typescript': 'Desarrollo con tipos seguros',
    'tech.spotify': 'Datos musicales y autenticación',
    'tech.webaudio': 'Análisis de audio avanzado',
    
    // CTA Section
    'cta.title': '¿Listo para Explorar Tu Música?',
    'cta.subtitle': 'Únete a miles de amantes de la música que han descubierto nuevos insights sobre sus hábitos de escucha con SpotiTempo.',
    'cta.primary': 'Comenzar Ahora',
    'cta.secondary': 'Ver Código Fuente',
    
    // Footer
    'footer.copyright': '© 2024 SpotiTempo. Hecho con ❤️ para los amantes de la música.',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};