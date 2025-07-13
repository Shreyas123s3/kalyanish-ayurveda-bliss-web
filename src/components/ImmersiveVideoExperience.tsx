
'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ImmersiveVideoExperience = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={targetRef} className="relative h-[200vh] bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden">
      <motion.div
        style={{ scale, opacity }}
        className="w-full h-screen sticky top-0 flex items-center justify-center"
      >
        <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl border border-white/10">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Y7oGM1kpRpY?si=mqZL3VLVFHnzzhiX&autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&loop=1&playlist=Y7oGM1kpRpY"
            title="Kalyanish Ayurveda Promo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </motion.div>
    </div>
  );
};
