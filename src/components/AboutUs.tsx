
export const AboutUs = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-amber-800 mb-6">
              About Our <span className="text-green-700">Sanctuary</span>
            </h2>
            <div className="prose prose-lg text-amber-700 leading-relaxed">
              <p>
                Welcome to <strong>Kalyanish Ayurveda and Panchakarma Center</strong>, your sanctuary for holistic healing through the ancient wisdom of Ayurveda. Nestled in a serene environment, our center is dedicated to restoring balance, vitality, and well-being through time-tested Ayurvedic principles.
              </p>
              <p>
                At Kalyanish Ayurveda, we believe that true health encompasses the harmony of mind, body, and spirit. Our approach combines traditional Ayurvedic practices with modern understanding to provide personalized care that addresses the root cause of ailments, not just the symptoms.
              </p>
              <p>
                Whether you seek detoxification through Panchakarma, relief from chronic conditions, or simply wish to maintain optimal health, our experienced practitioners guide you on a transformative journey toward complete wellness.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-200/50">
              <div className="aspect-square bg-gradient-to-br from-green-200 to-amber-200 rounded-2xl flex items-center justify-center">
                <div className="text-center text-amber-800">
                  <div className="text-6xl mb-4">🌿</div>
                  <p className="text-lg font-serif">Holistic Healing</p>
                  <p className="text-sm">Mind • Body • Spirit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
