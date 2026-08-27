import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AmbientDecor, ThreadProgress } from "./Decor";

const LINES = [
  "You are not just my brother... you are one of my biggest strengths. ❤️",

  "You always motivate me, support me, and somehow make everything feel a little easier. 🫶🏻",

  "You listen to my little things, understand my moods, and always take care of me with so much love. ✨",

  "No matter how much I grow up, I'll always be your little sister who comes to you for everything. 🥹",

  "I'm really lucky to have a brother like you. Thank you for always being there for me. 💕",
];

export default function Letter({ onNext }) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    if (visibleLines < LINES.length) {
      const t = setTimeout(
        () => setVisibleLines((v) => v + 1),
        1400
      );

      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setShowFinal(true), 700);

      return () => clearTimeout(t);
    }
  }, [visibleLines]);

  return (
    <div className="relative flex min-h-dvh w-full flex-col items-center bg-cream px-5 py-14 paper-texture">

      {/* Decorative sparkles */}
      <AmbientDecor variant="sparkles" count={5} />

      {/* Progress */}
      <div className="mb-6">
        <ThreadProgress step={1} total={8} />
      </div>

      {/* Letter Card */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        className="gift-card relative w-full max-w-max px-6 py-8 sm:px-9 sm:py-10"
      >

        {/* Heading */}
        <h2 className="font-hand text-center text-4xl font-bold text-rose-deep">
          Dear Bhaiya, ❤️
        </h2>

        {/* Rakhi thread */}
        <div className="rakhi-thread my-5" />

        {/* Letter */}
        <div className="space-y-4 text-[15px] leading-relaxed text-ink sm:text-base">
          {LINES.map((line, i) => (
            <motion.p
              key={i}
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={
                i < visibleLines
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 8,
                    }
              }
              transition={{
                duration: 0.6,
              }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Final emotional line */}
        {showFinal && (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mt-6 border-t border-rose-light pt-5 text-center"
          >
            <p className="text-sm text-ink/70">
              One thing I hope you always remember...
            </p>

            <p className="mt-2 font-semibold text-rose-deep">
              Your little sister will always love you. ❤️
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Next Button */}
      {showFinal && (
        <motion.button
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.6,
          }}
          onClick={onNext}
          className="
            mt-8
            rounded-full
            bg-rose-700
            px-8
            py-3
            font-semibold
            tracking-wide
            text-white
            shadow-lg
            shadow-rose-300/70
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-xl
            active:scale-95
          "
        >
          NEXT →
        </motion.button>
      )}
    </div>
  );
}