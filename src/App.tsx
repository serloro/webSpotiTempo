import { useEffect, useState } from 'react';
import { Music, BarChart3, Zap, Play, Github, ExternalLink, ChevronDown, Headphones, TrendingUp, Filter } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';
import LanguageToggle from './components/LanguageToggle';

function App() {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({
    hero: true,
    features: false,
    demo: false,
    tech: false,
    cta: false
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = ['hero', 'features', 'demo', 'tech', 'cta'];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-green-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-green-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">SpotiTempo</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-gray-300 hover:text-green-400 transition-colors font-medium"
              >
                {t('nav.features')}
              </button>
              <button 
                onClick={() => scrollToSection('demo')} 
                className="text-gray-300 hover:text-green-400 transition-colors font-medium"
              >
                {t('nav.demo')}
              </button>
              <button 
                onClick={() => scrollToSection('tech')} 
                className="text-gray-300 hover:text-green-400 transition-colors font-medium"
              >
                {t('nav.technology')}
              </button>
              <LanguageToggle />
              <a 
                href="#" 
                className="flex items-center space-x-2 btn-primary px-4 py-2 rounded-lg"
              >
                <Github className="w-4 h-4" />
                <span>{t('nav.github')}</span>
              </a>
            </div>
            <div className="md:hidden">
              <LanguageToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            background: 'radial-gradient(circle at 50% 50%, #22c55e 0%, transparent 70%)'
          }}
        />
        
        <div className={`max-w-4xl mx-auto text-center px-4 transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl mb-6 shadow-2xl hover-lift">
              <Music className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t('hero.title.line1')}
            <span className="block gradient-text">
              {t('hero.title.line2')}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="flex items-center space-x-3 btn-primary px-8 py-4 rounded-xl text-lg font-semibold hover-lift">
              <Play className="w-5 h-5" />
              <span>{t('hero.cta.demo')}</span>
            </button>
            <button className="flex items-center space-x-3 btn-secondary px-8 py-4 rounded-xl text-lg font-semibold">
              <ExternalLink className="w-5 h-5" />
              <span>{t('hero.cta.github')}</span>
            </button>
          </div>
          
          <button 
            onClick={() => scrollToSection('features')}
            className="animate-bounce text-green-400 hover:text-green-300 transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('features.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: t('features.tempo.title'),
                description: t('features.tempo.description'),
                delay: "delay-300"
              },
              {
                icon: <Filter className="w-8 h-8" />,
                title: t('features.organization.title'),
                description: t('features.organization.description'),
                delay: "delay-500"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: t('features.insights.title'),
                description: t('features.insights.description'),
                delay: "delay-700"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`glass rounded-2xl p-8 hover:border-green-500/50 transition-all duration-500 hover-lift ${isVisible.features ? `opacity-100 translate-y-0 ${feature.delay}` : 'opacity-0 translate-y-10'}`}
              >
                <div className="text-green-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible.demo ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t('demo.title')}
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {t('demo.subtitle')}
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  t('demo.feature1'),
                  t('demo.feature2'),
                  t('demo.feature3'),
                  t('demo.feature4')
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="flex items-center space-x-3 btn-primary px-8 py-4 rounded-xl text-lg font-semibold hover-lift">
                <Headphones className="w-5 h-5" />
                <span>{t('demo.cta')}</span>
              </button>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${isVisible.demo ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <div className="glass rounded-2xl p-8 shadow-2xl hover-lift">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Music className="w-5 h-5 text-green-400" />
                        <span className="text-white">{t('demo.analyzing')}</span>
                      </div>
                      <div className="text-green-400 font-bold">128 BPM</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-700/30 p-4 rounded-lg">
                        <div className="text-gray-400 text-sm">{t('demo.energy')}</div>
                        <div className="text-white text-lg font-bold">0.85</div>
                      </div>
                      <div className="bg-gray-700/30 p-4 rounded-lg">
                        <div className="text-gray-400 text-sm">{t('demo.valence')}</div>
                        <div className="text-white text-lg font-bold">0.72</div>
                      </div>
                    </div>
                    
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tech" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.tech ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('tech.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('tech.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "React", description: t('tech.react') },
              { name: "TypeScript", description: t('tech.typescript') },
              { name: "Spotify API", description: t('tech.spotify') },
              { name: "Web Audio API", description: t('tech.webaudio') }
            ].map((tech, index) => (
              <div 
                key={index}
                className={`glass rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-500 hover-lift ${isVisible.tech ? `opacity-100 translate-y-0` : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 bg-gradient-to-r from-green-600/20 to-emerald-600/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {t('cta.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="flex items-center space-x-3 btn-primary px-8 py-4 rounded-xl text-lg font-semibold hover-lift">
                <Music className="w-5 h-5" />
                <span>{t('cta.primary')}</span>
              </button>
              <button className="flex items-center space-x-3 text-green-400 hover:text-green-300 px-8 py-4 text-lg font-semibold transition-colors">
                <Github className="w-5 h-5" />
                <span>{t('cta.secondary')}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded flex items-center justify-center">
                <Music className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">SpotiTempo</span>
            </div>
            <div className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;