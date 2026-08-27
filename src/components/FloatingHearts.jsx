import React, { useMemo } from "react";
import { Heart, Sparkles } from "lucide-react";

const FloatingHearts = ({
  density = 7,
  intense = false,
}) => {
  const items = useMemo(() => {
    const count = intense ? density + 6 : density;

    return Array.from({ length: count }).map((_, i) => {
      const isHeart = i % 2 === 0;

      return {
        id: i,
        isHeart,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 10 + Math.random() * 10,
        drift: `${Math.round(
          (Math.random() - 0.5) * 80
        )}px`,
        size: isHeart
          ? 10 + Math.random() * 10
          : 6 + Math.random() * 6,
      };
    });
  }, [density, intense]);

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden z-0"
      aria-hidden="true"
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute bottom-0 animate-floatUp"
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            "--drift": item.drift,
          }}
        >
          {item.isHeart ? (
            <Heart
              size={item.size}
              className="text-orange-400/40 fill-orange-300/40"
            />
          ) : (
            <Sparkles
              size={item.size}
              className="text-amber-400/50 fill-amber-300/40 animate-sparkle"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;