
'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  TouchEvent,
  WheelEvent,
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
  const [isFullyVisible, setIsFullyVisible] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger when the section is fully visible
        setIsFullyVisible(entry.intersectionRatio >= 0.8);
        
        if (!entry.isIntersecting) {
          // Reset states when leaving viewport
          setScrollProgress(0);
          setShowContent(false);
          setIsExpanded(false);
        }
      },
      { 
        threshold: [0, 0.5, 0.8, 1],
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !isFullyVisible) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on how centered the section is
      const sectionCenter = rect.top + rect.height / 2;
      const windowCenter = windowHeight / 2;
      const distanceFromCenter = Math.abs(sectionCenter - windowCenter);
      
      // Progress increases as section gets more centered
      const maxDistance = windowHeight / 2;
      const progress = Math.max(0, 1 - (distanceFromCenter / maxDistance));
      
      setScrollProgress(progress);
      
      // Expand when progress reaches threshold
      if (progress > 0.6 && !isExpanded) {
        setIsExpanded(true);
        setShowContent(true);
      } else if (progress < 0.3 && isExpanded) {
        setIsExpanded(false);
        setShowContent(false);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (!isFullyVisible || !isExpanded) return;
      
      // Allow natural scrolling when expanded
      if (e.deltaY > 0 && scrollProgress > 0.8) {
        // Scrolling down when fully expanded - allow exit
        return;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFullyVisible, isExpanded, scrollProgress]);

  // Calculate media dimensions
  const baseWidth = 300;
  const baseHeight = 400;
  const expandedWidth = Math.min(window.innerWidth * 0.9, 1200);
  const expandedHeight = Math.min(window.innerHeight * 0.8, 800);
  
  const currentWidth = baseWidth + (expandedWidth - baseWidth) * scrollProgress;
  const currentHeight = baseHeight + (expandedHeight - baseHeight) * scrollProgress;
  
  const textTranslateX = scrollProgress * 100;

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <motion.div
      ref={sectionRef}
      className='relative overflow-hidden'
      style={{ 
        minHeight: isExpanded ? 'auto' : '100vh',
        height: isExpanded ? 'auto' : '100vh'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <section className='relative flex flex-col items-center justify-center min-h-[100vh]'>
        {/* Background with fade transition */}
        <motion.div
          className='absolute inset-0 z-0'
          animate={{ 
            opacity: 1 - scrollProgress * 0.8,
            scale: 1 + scrollProgress * 0.1 
          }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={bgImageSrc}
            alt='Background'
            className='w-full h-full object-cover object-center'
          />
          <div className='absolute inset-0 bg-black/20' />
        </motion.div>

        <div className='container mx-auto flex flex-col items-center justify-center relative z-10 px-4'>
          <div className='flex flex-col items-center justify-center w-full h-[100vh] relative'>
            
            {/* Expandable Media Container */}
            <motion.div
              className='absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden'
              style={{
                width: `${currentWidth}px`,
                height: `${currentHeight}px`,
                maxWidth: '95vw',
                maxHeight: '90vh',
              }}
              animate={{
                boxShadow: `0px 0px ${20 + scrollProgress * 30}px rgba(0, 0, 0, ${0.3 + scrollProgress * 0.4})`,
              }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
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
                    
                    {/* Subtle overlay for glassmorphic effect */}
                    <motion.div
                      className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none'
                      animate={{ opacity: 0.3 + scrollProgress * 0.2 }}
                      transition={{ duration: 0.3 }}
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
                      controls={isExpanded}
                    />
                    
                    <motion.div
                      className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none'
                      animate={{ opacity: 0.3 + scrollProgress * 0.2 }}
                      transition={{ duration: 0.3 }}
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
                    className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none'
                    animate={{ opacity: 0.4 + scrollProgress * 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              )}
            </motion.div>

            {/* Title and Text Overlay */}
            <motion.div
              className={`flex items-center justify-center text-center gap-4 w-full relative z-10 transition-all duration-500 flex-col ${
                textBlend ? 'mix-blend-difference' : ''
              }`}
              animate={{ 
                opacity: 1 - scrollProgress * 0.7,
                y: scrollProgress * -20 
              }}
              transition={{ duration: 0.3 }}
            >
              {date && (
                <motion.p
                  className='text-2xl text-amber-200 font-light'
                  style={{ transform: `translateX(-${textTranslateX}px)` }}
                >
                  {date}
                </motion.p>
              )}
              
              <motion.h2
                className='text-4xl md:text-5xl lg:text-6xl font-bold text-amber-200'
                style={{ transform: `translateX(-${textTranslateX}px)` }}
              >
                {firstWord}
              </motion.h2>
              
              <motion.h2
                className='text-4xl md:text-5xl lg:text-6xl font-bold text-amber-200'
                style={{ transform: `translateX(${textTranslateX}px)` }}
              >
                {restOfTitle}
              </motion.h2>
              
              {scrollToExpand && !isExpanded && (
                <motion.p
                  className='text-amber-200/80 font-medium text-center mt-6'
                  animate={{ opacity: Math.max(0, 1 - scrollProgress * 2) }}
                  style={{ transform: `translateX(${textTranslateX * 0.5}px)` }}
                >
                  {scrollToExpand}
                </motion.p>
              )}
            </motion.div>
          </div>

          {/* Content Section - Only show when expanded */}
          {showContent && (
            <motion.section
              className='w-full px-8 py-12 md:px-16 lg:py-20'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {children}
            </motion.section>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default ScrollExpandMedia;
