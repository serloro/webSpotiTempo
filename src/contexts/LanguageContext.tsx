import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'es' | 'fr' | 'de' | 'it' | 'pt';

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
  fr: {
    // Navigation
    'nav.features': 'Fonctionnalités',
    'nav.demo': 'Démo',
    'nav.technology': 'Technologie',
    'nav.github': 'GitHub',
    
    // Hero Section
    'hero.title.line1': 'Analysez Votre Musique',
    'hero.title.line2': 'Comme Jamais Auparavant',
    'hero.subtitle': 'SpotiTempo se connecte à votre compte Spotify pour analyser vos playlists et organiser votre musique par tempo, énergie et caractéristiques musicales. Découvrez les motifs de vos goûts musicaux et créez les playlists parfaites.',
    'hero.cta.demo': 'Essayer la Démo',
    'hero.cta.github': 'Voir sur GitHub',
    
    // Features Section
    'features.title': 'Analyse Musicale Puissante',
    'features.subtitle': 'Découvrez les motifs cachés de votre bibliothèque musicale avec une analyse audio avancée et des outils d\'organisation intelligents.',
    'features.tempo.title': 'Analyse du Tempo et de l\'Énergie',
    'features.tempo.description': 'Analysez le BPM, les niveaux d\'énergie et la dansabilité de chaque piste dans vos playlists. Parfait pour créer des playlists d\'entraînement ou de détente.',
    'features.organization.title': 'Organisation Intelligente',
    'features.organization.description': 'Catégorisez automatiquement votre musique par caractéristiques comme la valence, l\'acoustique et l\'instrumentalité pour une meilleure curation de playlists.',
    'features.insights.title': 'Insights Musicaux',
    'features.insights.description': 'Découvrez les tendances de vos habitudes d\'écoute et obtenez des recommandations personnalisées basées sur vos préférences et motifs musicaux.',
    
    // Demo Section
    'demo.title': 'Voyez-le en Action',
    'demo.subtitle': 'Connectez votre compte Spotify et regardez SpotiTempo analyser votre bibliothèque musicale en temps réel, fournissant des insights détaillés et des suggestions d\'organisation intelligentes.',
    'demo.feature1': 'Analyse de playlist en temps réel',
    'demo.feature2': 'Visualisation interactive du tempo',
    'demo.feature3': 'Recommandations intelligentes de playlists',
    'demo.feature4': 'Exporter les playlists organisées vers Spotify',
    'demo.cta': 'Connecter Spotify',
    'demo.analyzing': 'Analyse de la playlist...',
    'demo.energy': 'Énergie',
    'demo.valence': 'Valence',
    
    // Technology Section
    'tech.title': 'Construit avec une Technologie Moderne',
    'tech.subtitle': 'Exploitant les dernières technologies web et la puissante API de Spotify pour offrir une expérience d\'analyse musicale fluide.',
    'tech.react': 'Framework UI moderne',
    'tech.typescript': 'Développement type-safe',
    'tech.spotify': 'Données musicales et authentification',
    'tech.webaudio': 'Analyse audio avancée',
    
    // CTA Section
    'cta.title': 'Prêt à Explorer Votre Musique?',
    'cta.subtitle': 'Rejoignez des milliers d\'amateurs de musique qui ont découvert de nouveaux insights sur leurs habitudes d\'écoute avec SpotiTempo.',
    'cta.primary': 'Commencer Maintenant',
    'cta.secondary': 'Voir le Code Source',
    
    // Footer
    'footer.copyright': '© 2024 SpotiTempo. Fait avec ❤️ pour les amateurs de musique.',
  },
  de: {
    // Navigation
    'nav.features': 'Funktionen',
    'nav.demo': 'Demo',
    'nav.technology': 'Technologie',
    'nav.github': 'GitHub',
    
    // Hero Section
    'hero.title.line1': 'Analysiere Deine Musik',
    'hero.title.line2': 'Wie Nie Zuvor',
    'hero.subtitle': 'SpotiTempo verbindet sich mit deinem Spotify-Konto, um deine Playlists zu analysieren und deine Musik nach Tempo, Energie und musikalischen Eigenschaften zu organisieren. Entdecke Muster in deinem Musikgeschmack und erstelle die perfekten Playlists.',
    'hero.cta.demo': 'Live Demo Testen',
    'hero.cta.github': 'Auf GitHub Ansehen',
    
    // Features Section
    'features.title': 'Leistungsstarke Musikanalyse',
    'features.subtitle': 'Entdecke die verborgenen Muster in deiner Musikbibliothek mit fortschrittlicher Audioanalyse und intelligenten Organisationstools.',
    'features.tempo.title': 'Tempo- & Energie-Analyse',
    'features.tempo.description': 'Analysiere BPM, Energielevel und Tanzbarkeit jedes Tracks in deinen Playlists. Perfekt für Workout- oder Chill-Playlists.',
    'features.organization.title': 'Intelligente Organisation',
    'features.organization.description': 'Kategorisiere deine Musik automatisch nach Eigenschaften wie Valenz, Akustik und Instrumentalität für bessere Playlist-Kuration.',
    'features.insights.title': 'Musik-Insights',
    'features.insights.description': 'Entdecke Trends in deinen Hörgewohnheiten und erhalte personalisierte Empfehlungen basierend auf deinen musikalischen Vorlieben und Mustern.',
    
    // Demo Section
    'demo.title': 'Sieh es in Aktion',
    'demo.subtitle': 'Verbinde dein Spotify-Konto und beobachte, wie SpotiTempo deine Musikbibliothek in Echtzeit analysiert und detaillierte Insights sowie intelligente Organisationsvorschläge liefert.',
    'demo.feature1': 'Echtzeit-Playlist-Analyse',
    'demo.feature2': 'Interaktive Tempo-Visualisierung',
    'demo.feature3': 'Intelligente Playlist-Empfehlungen',
    'demo.feature4': 'Organisierte Playlists zurück zu Spotify exportieren',
    'demo.cta': 'Spotify Verbinden',
    'demo.analyzing': 'Playlist wird analysiert...',
    'demo.energy': 'Energie',
    'demo.valence': 'Valenz',
    
    // Technology Section
    'tech.title': 'Mit Moderner Technologie Gebaut',
    'tech.subtitle': 'Nutzt die neuesten Web-Technologien und Spotifys mächtige API für eine nahtlose Musikanalyse-Erfahrung.',
    'tech.react': 'Modernes UI-Framework',
    'tech.typescript': 'Typsichere Entwicklung',
    'tech.spotify': 'Musikdaten & Authentifizierung',
    'tech.webaudio': 'Erweiterte Audio-Analyse',
    
    // CTA Section
    'cta.title': 'Bereit, Deine Musik zu Erkunden?',
    'cta.subtitle': 'Schließe dich Tausenden von Musikliebhabern an, die neue Insights über ihre Hörgewohnheiten mit SpotiTempo entdeckt haben.',
    'cta.primary': 'Jetzt Starten',
    'cta.secondary': 'Quellcode Ansehen',
    
    // Footer
    'footer.copyright': '© 2024 SpotiTempo. Mit ❤️ für Musikliebhaber gemacht.',
  },
  it: {
    // Navigation
    'nav.features': 'Funzionalità',
    'nav.demo': 'Demo',
    'nav.technology': 'Tecnologia',
    'nav.github': 'GitHub',
    
    // Hero Section
    'hero.title.line1': 'Analizza la Tua Musica',
    'hero.title.line2': 'Come Mai Prima',
    'hero.subtitle': 'SpotiTempo si connette al tuo account Spotify per analizzare le tue playlist e organizzare la tua musica per tempo, energia e caratteristiche musicali. Scopri i pattern nei tuoi gusti musicali e crea le playlist perfette.',
    'hero.cta.demo': 'Prova la Demo',
    'hero.cta.github': 'Vedi su GitHub',
    
    // Features Section
    'features.title': 'Analisi Musicale Potente',
    'features.subtitle': 'Scopri i pattern nascosti nella tua libreria musicale con analisi audio avanzata e strumenti di organizzazione intelligenti.',
    'features.tempo.title': 'Analisi di Tempo ed Energia',
    'features.tempo.description': 'Analizza BPM, livelli di energia e ballabilità di ogni traccia nelle tue playlist. Perfetto per creare playlist da allenamento o relax.',
    'features.organization.title': 'Organizzazione Intelligente',
    'features.organization.description': 'Categorizza automaticamente la tua musica per caratteristiche come valenza, acustica e strumentalità per una migliore curazione delle playlist.',
    'features.insights.title': 'Insights Musicali',
    'features.insights.description': 'Scopri le tendenze nelle tue abitudini di ascolto e ottieni raccomandazioni personalizzate basate sulle tue preferenze e pattern musicali.',
    
    // Demo Section
    'demo.title': 'Guardalo in Azione',
    'demo.subtitle': 'Connetti il tuo account Spotify e guarda SpotiTempo analizzare la tua libreria musicale in tempo reale, fornendo insights dettagliati e suggerimenti di organizzazione intelligenti.',
    'demo.feature1': 'Analisi playlist in tempo reale',
    'demo.feature2': 'Visualizzazione interattiva del tempo',
    'demo.feature3': 'Raccomandazioni intelligenti di playlist',
    'demo.feature4': 'Esporta playlist organizzate su Spotify',
    'demo.cta': 'Connetti Spotify',
    'demo.analyzing': 'Analizzando playlist...',
    'demo.energy': 'Energia',
    'demo.valence': 'Valenza',
    
    // Technology Section
    'tech.title': 'Costruito con Tecnologia Moderna',
    'tech.subtitle': 'Sfruttando le ultime tecnologie web e la potente API di Spotify per offrire un\'esperienza di analisi musicale fluida.',
    'tech.react': 'Framework UI moderno',
    'tech.typescript': 'Sviluppo type-safe',
    'tech.spotify': 'Dati musicali e autenticazione',
    'tech.webaudio': 'Analisi audio avanzata',
    
    // CTA Section
    'cta.title': 'Pronto ad Esplorare la Tua Musica?',
    'cta.subtitle': 'Unisciti a migliaia di amanti della musica che hanno scoperto nuovi insights sulle loro abitudini di ascolto con SpotiTempo.',
    'cta.primary': 'Inizia Ora',
    'cta.secondary': 'Vedi Codice Sorgente',
    
    // Footer
    'footer.copyright': '© 2024 SpotiTempo. Fatto con ❤️ per gli amanti della musica.',
  },
  pt: {
    // Navigation
    'nav.features': 'Recursos',
    'nav.demo': 'Demo',
    'nav.technology': 'Tecnologia',
    'nav.github': 'GitHub',
    
    // Hero Section
    'hero.title.line1': 'Analise Sua Música',
    'hero.title.line2': 'Como Nunca Antes',
    'hero.subtitle': 'SpotiTempo conecta-se à sua conta Spotify para analisar suas playlists e organizar sua música por tempo, energia e características musicais. Descubra padrões no seu gosto musical e crie as playlists perfeitas.',
    'hero.cta.demo': 'Testar Demo',
    'hero.cta.github': 'Ver no GitHub',
    
    // Features Section
    'features.title': 'Análise Musical Poderosa',
    'features.subtitle': 'Descubra os padrões ocultos na sua biblioteca musical com análise de áudio avançada e ferramentas de organização inteligentes.',
    'features.tempo.title': 'Análise de Tempo e Energia',
    'features.tempo.description': 'Analise BPM, níveis de energia e dançabilidade de cada faixa nas suas playlists. Perfeito para criar playlists de treino ou relaxamento.',
    'features.organization.title': 'Organização Inteligente',
    'features.organization.description': 'Categorize automaticamente sua música por características como valência, acústica e instrumentalidade para melhor curadoria de playlists.',
    'features.insights.title': 'Insights Musicais',
    'features.insights.description': 'Descubra tendências nos seus hábitos de escuta e obtenha recomendações personalizadas baseadas nas suas preferências e padrões musicais.',
    
    // Demo Section
    'demo.title': 'Veja em Ação',
    'demo.subtitle': 'Conecte sua conta Spotify e observe o SpotiTempo analisar sua biblioteca musical em tempo real, fornecendo insights detalhados e sugestões de organização inteligentes.',
    'demo.feature1': 'Análise de playlist em tempo real',
    'demo.feature2': 'Visualização interativa de tempo',
    'demo.feature3': 'Recomendações inteligentes de playlists',
    'demo.feature4': 'Exportar playlists organizadas para o Spotify',
    'demo.cta': 'Conectar Spotify',
    'demo.analyzing': 'Analisando playlist...',
    'demo.energy': 'Energia',
    'demo.valence': 'Valência',
    
    // Technology Section
    'tech.title': 'Construído com Tecnologia Moderna',
    'tech.subtitle': 'Aproveitando as mais recentes tecnologias web e a poderosa API do Spotify para entregar uma experiência de análise musical perfeita.',
    'tech.react': 'Framework UI moderno',
    'tech.typescript': 'Desenvolvimento type-safe',
    'tech.spotify': 'Dados musicais e autenticação',
    'tech.webaudio': 'Análise de áudio avançada',
    
    // CTA Section
    'cta.title': 'Pronto para Explorar Sua Música?',
    'cta.subtitle': 'Junte-se a milhares de amantes da música que descobriram novos insights sobre seus hábitos de escuta com o SpotiTempo.',
    'cta.primary': 'Começar Agora',
    'cta.secondary': 'Ver Código Fonte',
    
    // Footer
    'footer.copyright': '© 2024 SpotiTempo. Feito com ❤️ para amantes da música.',
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