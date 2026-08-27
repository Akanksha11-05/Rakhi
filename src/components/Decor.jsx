import { motion } from "framer-motion";
import { Heart, Sparkles, Flower2 } from "lucide-react";

// Subtle ambient background decoration: a handful of slow-floating
// hearts / sparkles / flowers scattered around the edges of a stage.
// Kept low-opacity and low-count so it never competes with content.
export function AmbientDecor({ variant = "hearts", count = 6 }) {
  const icons = {
    hearts: Heart,
    sparkles: Sparkles,
    flowers: Flower2,
  };
  const Icon = icons[variant] || Heart;

  const items = Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: (i * 137.5) % 100, // golden-angle scatter, deterministic
    top: (i * 71.3) % 100,
    size: 14 + ((i * 5) % 18),
    delay: (i % 6) * 0.4,
    duration: 5 + (i % 4),
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((it) => (
        <motion.div
          key={it.id}
          className="absolute text-rose/30"
          style={{ left: `${it.left}%`, top: `${it.top}%` }}
          animate={{
            y: [0, -16, 0],
            opacity: [0.15, 0.5, 0.15],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: it.duration,
            delay: it.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon size={it.size} fill="currentColor" strokeWidth={0.5} />
        </motion.div>
      ))}
    </div>
  );
}

// One-shot heart / confetti burst, used at emotional beats
// (envelope opening, final surprise, etc.)
export function BurstOverlay({ show }) {
  if (!show) return null;

  const pieces = Array.from({ length: 26 }).map((_, i) => ({
    id: i,
    x: (Math.random() - 0.5) * 500,
    y: -(Math.random() * 400 + 100),
    rotate: Math.random() * 360,
    delay: Math.random() * 0.3,
    isHeart: Math.random() > 0.35,
    color: ["#E8899A", "#F3A87E", "#D9A94E", "#C65D72"][
      Math.floor(Math.random() * 4)
    ],
  }));

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          initial={{ x: 0, y: 0, opacity: 1, scale: 0.5, rotate: 0 }}
          animate={{
            x: p.x,
            y: p.y,
            opacity: 0,
            scale: 1.1,
            rotate: p.rotate,
          }}
          transition={{ duration: 1.6, delay: p.delay, ease: "easeOut" }}
        >
          {p.isHeart ? (
            <Heart size={16} fill={p.color} color={p.color} />
          ) : (
            <div
              className="h-2 w-3 rounded-sm"
              style={{ background: p.color }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

// Tiny rakhi-thread progress dots shown at the top of most stages,
// doubling as the site's recurring visual signature.
export function ThreadProgress({ step, total }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`h-1.5 rounded-full transition-all duration-500 ${
            i === step
              ? "w-6 bg-rose-deep"
              : i < step
              ? "w-1.5 bg-rose"
              : "w-1.5 bg-rose-light"
          }`}
        />
      ))}
    </div>
  );
}
