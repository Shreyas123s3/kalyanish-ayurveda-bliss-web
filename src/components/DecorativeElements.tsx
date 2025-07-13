
export const DecorativeElements = () => {
  return (
    <>
      {/* Floating Leaves */}
      <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
        <div className="animate-pulse opacity-20">
          <div className="absolute top-1/4 left-10 text-green-400 text-2xl animate-bounce" style={{ animationDelay: '0s', animationDuration: '6s' }}>
            🍃
          </div>
          <div className="absolute top-1/3 right-20 text-amber-300 text-xl animate-bounce" style={{ animationDelay: '2s', animationDuration: '8s' }}>
            🌿
          </div>
          <div className="absolute bottom-1/3 left-1/4 text-green-300 text-lg animate-bounce" style={{ animationDelay: '4s', animationDuration: '7s' }}>
            🍃
          </div>
          <div className="absolute top-2/3 right-1/3 text-amber-400 text-sm animate-bounce" style={{ animationDelay: '1s', animationDuration: '9s' }}>
            🌿
          </div>
          <div className="absolute bottom-1/4 right-10 text-green-200 text-xl animate-bounce" style={{ animationDelay: '3s', animationDuration: '5s' }}>
            🍃
          </div>
        </div>
      </div>

      {/* Herbal Sparkles */}
      <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
        <div className="opacity-30">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-amber-300 rounded-full animate-pulse"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 12}%`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: '4s'
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};
