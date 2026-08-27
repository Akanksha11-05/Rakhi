import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Heart,
  Smile,
  ArrowRight,
} from "lucide-react";
import { AmbientDecor, ThreadProgress } from "./Decor";

export default function FunnySection({ onNext }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 800),
      setTimeout(() => setStage(2), 1800),
      setTimeout(() => setStage(3), 3000),
      setTimeout(() => setStage(4), 4200),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div
      className="
        relative
        flex
        min-h-dvh
        w-full
        flex-col
        items-center
        justify-center
        overflow-hidden
        bg-cream
        px-5
        py-14
        paper-texture
      "
    >
      <AmbientDecor variant="hearts" count={6} />

      {/* Progress */}
      <div className="mb-6">
        <ThreadProgress step={4} total={8} />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-7 text-center"
      >
        <p
          className="
            mb-2
            text-xs
            uppercase
            tracking-[0.3em]
            text-amber-600
          "
        >
          Just a little secret...
        </p>

        <h2
          className="
            font-hand
            text-4xl
            font-bold
            text-rose-deep
            sm:text-5xl
          "
        >
          Okay Bhaiya... 👀
        </h2>

        <div className="mt-3 flex items-center justify-center gap-2">
          <div className="h-px w-10 bg-amber-200" />

          <Sparkles
            size={14}
            className="text-amber-400"
          />

          <div className="h-px w-10 bg-amber-200" />
        </div>
      </motion.div>

      {/* Main Card */}
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="
          relative
          w-full
          max-w-md
          rounded-3xl
          border
          border-amber-100
          bg-[#FFFDF7]
          px-7
          py-9
          text-center
          shadow-paper
          sm:px-10
          sm:py-11
        "
      >
        {/* Floating icon */}
        <motion.div
          className="
            absolute
            -top-6
            left-1/2
            flex
            h-12
            w-12
            -translate-x-1/2
            items-center
            justify-center
            rounded-full
            border-4
            border-[#FFFDF7]
            bg-gradient-to-br
            from-orange-500
            to-amber-500
            shadow-lg
          "
          initial={{
            scale: 0,
            rotate: -15,
          }}
          animate={{
            scale: 1,
            rotate: 0,
          }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            type: "spring",
          }}
        >
          <Smile size={21} className="text-white" />
        </motion.div>

        {/* Decorations */}
        <Sparkles
          size={17}
          className="
            absolute
            -left-3
            -top-3
            fill-amber-200
            text-amber-400
            animate-sparkle
          "
        />

        <Heart
          size={16}
          className="
            absolute
            -bottom-3
            -right-3
            fill-orange-300
            text-orange-400
            animate-sparkle
          "
        />

        {/* Content */}
        <div className="space-y-5">

          {/* First line */}
          {stage >= 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p
                className="
                  font-script
                  text-[1.5rem]
                  leading-relaxed
                  text-ink-600
                  sm:text-[1.65rem]
                "
              >
               “I have a little compliment for you... 😌❤️”
              </p>
            </motion.div>
          )}

          {/* Second */}
          {stage >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
                rounded-2xl
                border
                border-amber-100
                bg-amber-50/60
                px-5
                py-4
              "
            >
              <p
                className="
                  font-script
                  text-[1.35rem]
                  leading-relaxed
                  text-orange-600
                  sm:text-[1.5rem]
                "
              >
                You somehow manage to make
                <br />
                every ordinary moment memorable. 😂
              </p>
            </motion.div>
          )}

          {/* Third */}
          {stage >= 2 && (
            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                type: "spring",
              }}
              className="
                font-script
                text-[1.35rem]
                leading-relaxed
                text-ink-600
                sm:text-[1.5rem]
              "
            >
              Somehow, life feels a little more fun
              <br />
              when you're around. 🫶🏻
            </motion.p>
          )}

          {/* Final */}
          {stage >= 3 && (
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 160,
              }}
              className="
                border-t
                border-amber-100
                pt-5
              "
            >
              <div className="flex items-center justify-center gap-2">
                <Heart
                  size={17}
                  className="fill-rose-deep text-rose-deep"
                />

                <p
                  className="
                    font-hand
                    text-3xl
                    font-bold
                    text-rose-deep
                  "
                >
                  Keep being you, Bhaiya. ❤️
                </p>

                <Heart
                  size={17}
                  className="fill-rose-deep text-rose-deep"
                />
              </div>

              <p className="mt-2 text-xs tracking-wide text-ink/50">
                That's what makes you special ✨
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* NEXT BUTTON */}
      {stage >= 4 && (
        <motion.button
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          whileHover={{
            scale: 1.05,
            y: -2,
            boxShadow:
              "0 12px 28px rgba(217, 169, 78, 0.25)",
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={onNext}
          className="
            group
            mt-9
            flex
            items-center
            gap-2
            rounded-full
            border
            border-orange-200
            bg-white
            px-6
            py-3
            font-sans
            text-sm
            font-medium
            text-orange-500
            shadow-sm
            transition-all
            sm:text-base
          "
        >
          <span>There's something more for you</span>

          <ArrowRight
            size={16}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </motion.button>
      )}
    </div>
  );
}