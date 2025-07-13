
'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
} from 'react';
import { motion } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (!entry.isIntersecting) {
          setScrollProgress(0);
          setShowContent(false);
        }
      },
      { 
        threshold: [0, 0.1, 0.5, 0.9],
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !isInView) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate smooth progress based on scroll position
      const startExpansion = windowHeight * 0.8;
      const endExpansion = windowHeight * 0.2;
      
      let progress = 0;
      
      if (rect.top <= startExpansion && rect.bottom >= endExpansion) {
        const scrollDistance = startExpansion - endExpansion;
        const currentScroll = startExpansion - rect.top;
        progress = Math.max(0, Math.min(1, currentScroll / scrollDistance));
      }
      
      setScrollProgress(progress);
      
      // Show content when expansion is nearly complete
      if (progress > 0.8 && !showContent) {
        setShowContent(true);
      } else if (progress < 0.3 && showContent) {
        setShowContent(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isInView, showContent]);

  // Smooth expansion calculations
  const baseSize = 320;
  const maxWidth = Math.min(window.innerWidth * 0.95, 1400);
  const maxHeight = Math.min(window.innerHeight * 0.85, 900);
  
  const currentWidth = baseSize + (maxWidth - baseSize) * scrollProgress;
  const currentHeight = (baseSize * 0.75) + ((maxHeight - baseSize * 0.75) * scrollProgress);
  
  // Parallax and text effects
  const parallaxOffset = scrollProgress * 30;
  const textOpacity = Math.max(0, 1 - scrollProgress * 1.5);
  const textTransform = scrollProgress * 50;
  
  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <motion.div
      ref={sectionRef}
      className='relative overflow-hidden bg-black'
      style={{ 
        minHeight: showContent ? 'auto' : '100vh',
        height: showContent ? 'auto' : '100vh'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <section className='relative flex flex-col items-center justify-center min-h-[100vh]'>
        {/* Background with parallax */}
        <motion.div
          className='absolute inset-0 z-0'
          style={{
            transform: `translateY(${parallaxOffset}px) scale(${1 + scrollProgress * 0.1})`,
            opacity: 1 - scrollProgress * 0.6
          }}
        >
          <img
            src={bgImageSrc}
            alt='Background'
            className='w-full h-full object-cover object-center'
          />
          <div className='absolute inset-0 bg-black/40' />
        </motion.div>

        <div className='container mx-auto flex flex-col items-center justify-center relative z-10 px-4'>
          <div className='flex flex-col items-center justify-center w-full h-[100vh] relative'>
            
            {/* Golden Glow Behind Video */}
            <motion.div
              className='absolute z-15 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
              style={{
                width: `${currentWidth + 60}px`,
                height: `${currentHeight + 60}px`,
                background: `radial-gradient(ellipse, rgba(251, 191, 36, 0.3) 0%, rgba(251, 191, 36, 0.1) 30%, transparent 70%)`,
                filter: 'blur(20px)',
                opacity: scrollProgress * 0.8
              }}
            />

            {/* Smooth Expanding Media Container */}
            <motion.div
              className='absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl overflow-hidden'
              style={{
                width: `${currentWidth}px`,
                height: `${currentHeight}px`,
                boxShadow: `0px 0px ${10 + scrollProgress * 40}px rgba(251, 191, 36, ${0.2 + scrollProgress * 0.3})`,
                borderRadius: `${Math.max(8, 16 - scrollProgress * 8)}px`
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {mediaType === 'video' ? (
                mediaSrc.includes('youtube.com') || mediaSrc.includes('youtu.be') ? (
                  <div className='relative w-full h-full'>
                    <iframe
                      width='100%'
                      height='100%'
                      src={mediaSrc}
                      className='w-full h-full'
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    />
                    
                    {/* Glassmorphic overlay */}
                    <motion.div
                      className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 pointer-events-none'
                      style={{ opacity: 0.2 + scrollProgress * 0.3 }}
                    />
                  </div>
                ) : (
                  <div className='relative w-full h-full'>
                    <video
                      src={mediaSrc}
                      poster={posterSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload='auto'
                      className='w-full h-full object-cover'
                      controls={scrollProgress > 0.7}
                    />
                    
                    <motion.div
                      className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 pointer-events-none'
                      style={{ opacity: 0.2 + scrollProgress * 0.3 }}
                    />
                  </div>
                )
              ) : (
                <div className='relative w-full h-full'>
                  <img
                    src={mediaSrc}
                    alt={title || 'Media content'}
                    className='w-full h-full object-cover'
                  />
                  
                  <motion.div
                    className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none'
                    style={{ opacity: 0.3 + scrollProgress * 0.4 }}
                  />
                </div>
              )}
            </motion.div>

            {/* Golden Text Overlay on Video */}
            <motion.div
              className='absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'
              style={{
                opacity: scrollProgress > 0.6 ? (scrollProgress - 0.6) * 2.5 : 0,
                transform: `translate(-50%, -50%) scale(${0.8 + scrollProgress * 0.2})`
              }}
            >
              <motion.h2
                className='text-2xl md:text-3xl lg:text-4xl font-serif text-amber-200 drop-shadow-2xl mb-2'
                style={{ textShadow: '0 0 20px rgba(251, 191, 36, 0.5)' }}
              >
                Discover Your Healing Journey
              </motion.h2>
              <motion.p
                className='text-sm md:text-base text-amber-300/90 font-light tracking-wide drop-shadow-lg'
                style={{ textShadow: '0 0 10px rgba(251, 191, 36, 0.3)' }}
              >
                Ancient Wisdom • Modern Healing
              </motion.p>
            </motion.div>

            {/* Initial Golden Text Overlay - Before Expansion */}
            <motion.div
              className={`flex items-center justify-center text-center gap-6 w-full relative z-30 flex-col ${
                textBlend ? 'mix-blend-difference' : ''
              }`}
              style={{ 
                opacity: textOpacity,
                transform: `translateY(-${textTransform}px)`
              }}
            >
              {date && (
                <motion.p
                  className='text-2xl md:text-3xl text-amber-300 font-light tracking-wide drop-shadow-lg'
                  style={{ 
                    transform: `translateX(-${textTransform * 0.5}px)`,
                    textShadow: '0 0 15px rgba(251, 191, 36, 0.4)'
                  }}
                >
                  {date}
                </motion.p>
              )}
              
              <motion.h2
                className='text-5xl md:text-6xl lg:text-7xl font-bold text-amber-200 drop-shadow-2xl'
                style={{ 
                  transform: `translateX(-${textTransform * 0.8}px)`,
                  textShadow: '0 0 25px rgba(251, 191, 36, 0.5)'
                }}
              >
                {firstWord}
              </motion.h2>
              
              <motion.h2
                className='text-5xl md:text-6xl lg:text-7xl font-bold text-amber-200 drop-shadow-2xl'
                style={{ 
                  transform: `translateX(${textTransform * 0.8}px)`,
                  textShadow: '0 0 25px rgba(251, 191, 36, 0.5)'
                }}
              >
                {restOfTitle}
              </motion.h2>
              
              {scrollToExpand && scrollProgress < 0.5 && (
                <motion.p
                  className='text-amber-300/90 text-lg font-medium mt-8 drop-shadow-lg'
                  style={{ 
                    opacity: Math.max(0, 1 - scrollProgress * 3),
                    transform: `translateY(${textTransform * 0.3}px)`,
                    textShadow: '0 0 10px rgba(251, 191, 36, 0.3)'
                  }}
                >
                  {scrollToExpand}
                </motion.p>
              )}
            </motion.div>
          </div>

          {/* Content Section - Fixed Golden Text */}
          {showContent && (
            <motion.section
              className='w-full px-8 py-16 md:px-16 lg:py-24 relative z-10'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent backdrop-blur-sm' />
              <div className='relative z-10 text-center'>
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-serif text-amber-200 mb-6 drop-shadow-lg" style={{ textShadow: '0 0 15px rgba(251, 191, 36, 0.4)' }}>
                    Discover Your Healing Journey
                  </h2>
                  <p className="text-lg text-amber-300/90 mb-8 leading-relaxed drop-shadow-md" style={{ textShadow: '0 0 10px rgba(251, 191, 36, 0.2)' }}>
                    Experience the transformative power of authentic Ayurveda through our immersive video journey. 
                    Watch as ancient wisdom meets modern healing techniques in our sacred sanctuary of wellness.
                  </p>
                  <p className="text-lg text-amber-300/90 leading-relaxed drop-shadow-md" style={{ textShadow: '0 0 10px rgba(251, 191, 36, 0.2)' }}>
                    This interactive experience showcases the essence of Kalyanish Ayurveda - where every treatment 
                    is a step towards holistic transformation and inner balance.
                  </p>
                </div>
              </div>
            </motion.section>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default ScrollExpandMedia;
