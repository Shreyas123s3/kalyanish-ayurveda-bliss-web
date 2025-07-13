
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

export const ImmersiveVideoExperience = () => {
  return (
    <ScrollExpandMedia
      mediaType="video"
      mediaSrc="https://www.youtube.com/embed/Y7oGM1kpRpY?si=mqZL3VLVFHnzzhiX&autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&loop=1&playlist=Y7oGM1kpRpY"
      bgImageSrc="/lovable-uploads/c8953e53-440c-489c-a053-842ca5d6f053.png"
      title="Ancient Wisdom Modern Healing"
      date="Kalyanish Ayurveda"
      scrollToExpand="Scroll to Experience"
      textBlend={true}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-amber-800 mb-6">
          Discover Your Healing Journey
        </h2>
        <p className="text-lg text-amber-700 mb-8 leading-relaxed">
          Experience the transformative power of authentic Ayurveda through our immersive video journey. 
          Watch as ancient wisdom meets modern healing techniques in our sacred sanctuary of wellness.
        </p>
        <p className="text-lg text-amber-700 leading-relaxed">
          This interactive experience showcases the essence of Kalyanish Ayurveda - where every treatment 
          is a step towards holistic transformation and inner balance.
        </p>
      </div>
    </ScrollExpandMedia>
  );
};
