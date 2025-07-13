
export const AdvancedFloatingElements = () => {
  return (
    <>
      {/* Advanced Floating Herbs with Parallax */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Large floating leaves with rotation */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`leaf-${i}`}
            className="absolute opacity-20 animate-pulse"
            style={{
              top: `${15 + i * 12}%`,
              left: `${5 + i * 11}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + i}s`,
            }}
          >
            <div
              className={`text-green-400 text-${i % 2 ? '3xl' : '2xl'} animate-bounce transform hover:scale-150 transition-transform duration-700`}
              style={{
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${6 + i * 0.5}s`,
                transform: `rotate(${i * 15}deg)`,
              }}
            >
              🍃
            </div>
          </div>
        ))}

        {/* Herbal sparkles with glow effect */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute animate-pulse opacity-40"
            style={{
              top: `${10 + i * 8}%`,
              right: `${5 + i * 7}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${4 + i * 0.3}s`,
            }}
          >
            <div
              className={`w-${i % 3 + 1} h-${i % 3 + 1} bg-amber-300 rounded-full shadow-lg shadow-amber-300/50 animate-ping`}
              style={{
                boxShadow: `0 0 ${10 + i * 2}px rgba(251, 191, 36, 0.6)`,
                animationDelay: `${i * 0.8}s`,
              }}
            />
          </div>
        ))}

        {/* Animated vine patterns */}
        <div className="absolute top-1/4 right-10 opacity-30">
          <div className="animate-pulse" style={{ animationDuration: '12s' }}>
            <svg width="100" height="200" viewBox="0 0 100 200" className="text-green-300">
              <path
                d="M20 0 Q50 50 80 100 Q50 150 20 200"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
                style={{ animationDuration: '8s' }}
              />
              <circle cx="30" cy="40" r="3" fill="currentColor" className="animate-pulse" />
              <circle cx="70" cy="80" r="2" fill="currentColor" className="animate-pulse" />
              <circle cx="40" cy="120" r="3" fill="currentColor" className="animate-pulse" />
              <circle cx="60" cy="160" r="2" fill="currentColor" className="animate-pulse" />
            </svg>
          </div>
        </div>
      </div>

      {/* Floating herbs that follow scroll */}
      <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
        <div className="relative h-full">
          {[...Array(6)].map((_, i) => (
            <div
              key={`herb-${i}`}
              className="absolute animate-bounce opacity-25"
              style={{
                top: `${20 + i * 15}%`,
                left: `${i % 2 ? '10%' : '85%'}`,
                animationDelay: `${i * 2.5}s`,
                animationDuration: `${10 + i}s`,
              }}
            >
              <div
                className="text-amber-400 text-xl hover:text-amber-300 hover:scale-125 transition-all duration-500 cursor-pointer"
                style={{
                  filter: `drop-shadow(0 0 ${5 + i}px rgba(251, 191, 36, 0.4))`,
                  transform: `rotate(${i * 30}deg)`,
                }}
              >
                🌿
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium glow orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        {[...Array(4)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full animate-pulse"
            style={{
              top: `${25 + i * 20}%`,
              left: `${15 + i * 20}%`,
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              background: `radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, rgba(251, 191, 36, 0.05) 70%, transparent 100%)`,
              animationDuration: `${8 + i * 2}s`,
              animationDelay: `${i * 3}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};
