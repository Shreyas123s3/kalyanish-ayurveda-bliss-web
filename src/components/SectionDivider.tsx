
interface SectionDividerProps {
  variant?: 'leaves' | 'vines' | 'lotus';
}

export const SectionDivider = ({ variant = 'leaves' }: SectionDividerProps) => {
  const getPattern = () => {
    switch (variant) {
      case 'leaves':
        return (
          <div className="flex justify-center items-center space-x-4 animate-pulse">
            <span className="text-green-400 text-2xl">🍃</span>
            <span className="text-amber-400 text-xl">🌿</span>
            <span className="text-green-300 text-3xl">🪷</span>
            <span className="text-amber-400 text-xl">🌿</span>
            <span className="text-green-400 text-2xl">🍃</span>
          </div>
        );
      case 'vines':
        return (
          <div className="flex justify-center items-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
            <span className="mx-4 text-amber-400 text-2xl animate-pulse">🌿</span>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          </div>
        );
      case 'lotus':
        return (
          <div className="flex justify-center items-center space-x-2">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-green-400"></div>
            <span className="text-amber-400 text-3xl animate-pulse">🪷</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-green-400"></div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="py-12 flex justify-center opacity-60">
      {getPattern()}
    </div>
  );
};
