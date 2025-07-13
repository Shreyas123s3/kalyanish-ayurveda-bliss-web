
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
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (!entry.isIntersecting) {
          setScrollProgress(0);
          setShowContent(false);
          setMediaFullyExpanded(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isInView) return;

      if (mediaFullyExpanded && e.deltaY < 0) {
        setMediaFullyExpanded(false);
        setScrollProgress(0);
        e.preventDefault();
      } else if (!mediaFullyExpanded && isInView) {
        const scrollDelta = e.deltaY * 0.001;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        // Only prevent default if we're actively expanding
        if (newProgress > 0 && newProgress < 1) {
          e.preventDefault();
        }
      }
    };

    const handleScroll = (): void => {
      // Allow normal scrolling, don't force scroll to top
      if (!mediaFullyExpanded && isInView) {
        const rect = sectionRef.current?.getBoundingClientRect();
        if (rect && rect.top <= 0 && rect.bottom >= window.innerHeight) {
          // Only when the section is in the viewport center
          const progress = Math.min(Math.abs(rect.top) / window.innerHeight, 1);
          setScrollProgress(progress);
          
          if (progress >= 1) {
            setMediaFullyExpanded(true);
            setShowContent(true);
          }
        }
      }
    };

    if (isInView) {
      window.addEventListener('wheel', handleWheel as unknown as EventListener, {
        passive: false,
      });
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener(
        'wheel',
        handleWheel as unknown as EventListener
      );
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollProgress, mediaFullyExpanded, isInView]);

  const mediaWidth = 300 + scrollProgress * 800;
  const mediaHeight = 400 + scrollProgress * 300;
  const textTranslateX = scrollProgress * 100;

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div
      ref={sectionRef}
      className='transition-colors duration-700 ease-in-out overflow-x-hidden relative'
      style={{ minHeight: mediaFullyExpanded ? 'auto' : '100vh' }}
    >
      <section className='relative flex flex-col items-center justify-start min-h-[100vh]'>
        <div className='relative w-full flex flex-col items-center min-h-[100vh]'>
          <motion.div
            className='absolute inset-0 z-0 h-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <img
              src={bgImageSrc}
              alt='Background'
              className='w-screen h-screen object-cover object-center'
            />
            <div className='absolute inset-0 bg-black/10' />
          </motion.div>

          <div className='container mx-auto flex flex-col items-center justify-start relative z-10'>
            <div className='flex flex-col items-center justify-center w-full h-[100vh] relative'>
              <div
                className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 rounded-2xl'
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.3)',
                }}
              >
                {mediaType === 'video' ? (
                  mediaSrc.includes('youtube.com') || mediaSrc.includes('youtu.be') ? (
                    <div className='relative w-full h-full'>
                      <iframe
                        width='100%'
                        height='100%'
                        src={mediaSrc}
                        className='w-full h-full rounded-xl'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                      />

                      <motion.div
                        className='absolute inset-0 bg-black/30 rounded-xl pointer-events-none'
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
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
                        className='w-full h-full object-cover rounded-xl'
                        controls={false}
                        disablePictureInPicture
                        disableRemotePlayback
                      />

                      <motion.div
                        className='absolute inset-0 bg-black/30 rounded-xl pointer-events-none'
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  )
                ) : (
                  <div className='relative w-full h-full'>
                    <img
                      src={mediaSrc}
                      alt={title || 'Media content'}
                      className='w-full h-full object-cover rounded-xl'
                    />

                    <motion.div
                      className='absolute inset-0 bg-black/50 rounded-xl pointer-events-none'
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}
              </div>

              <div
                className={`flex items-center justify-center text-center gap-4 w-full relative z-10 transition-all duration-300 flex-col ${
                  textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                }`}
              >
                {date && (
                  <p
                    className='text-2xl text-amber-200'
                    style={{ transform: `translateX(-${textTranslateX}px)` }}
                  >
                    {date}
                  </p>
                )}
                
                <motion.h2
                  className='text-4xl md:text-5xl lg:text-6xl font-bold text-amber-200'
                  style={{ transform: `translateX(-${textTranslateX}px)` }}
                >
                  {firstWord}
                </motion.h2>
                <motion.h2
                  className='text-4xl md:text-5xl lg:text-6xl font-bold text-center text-amber-200'
                  style={{ transform: `translateX(${textTranslateX}px)` }}
                >
                  {restOfTitle}
                </motion.h2>
                
                {scrollToExpand && (
                  <p
                    className='text-amber-200 font-medium text-center mt-4'
                    style={{ transform: `translateX(${textTranslateX}px)` }}
                  >
                    {scrollToExpand}
                  </p>
                )}
              </div>
            </div>

            <motion.section
              className='flex flex-col w-full px-8 py-10 md:px-16 lg:py-20'
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
