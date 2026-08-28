
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, ArrowRight } from "lucide-react";
import { ThreadProgress } from "./Decor";

// Video
// Imported so it works correctly with Vite + GitHub Pages
import memoryVideo from "../assets/memoryvideo.mp4";

const LINES = [
  "Some moments are simply unforgettable... ❤️",
  "And some people make those moments special.",
  "For me, that's you, Bhaiya. 🫶🏻",
];

export default function PhotoReveal({ onNext }) {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible < LINES.length) {
      const timer = setTimeout(() => {
        setVisible((v) => v + 1);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [visible]);

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
        bg-[#fffaf4]
        px-5
        py-14
        text-center
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-24
            top-10
            h-64
            w-64
            rounded-full
            bg-rose-200/30
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -right-24
            bottom-10
            h-72
            w-72
            rounded-full
            bg-amber-200/30
            blur-3xl
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-80
            w-80
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-orange-100/30
            blur-3xl
          "
        />
      </div>

      {/* PROGRESS */}
      <div
        className="
          absolute
          left-1/2
          top-8
          z-30
          -translate-x-1/2
        "
      >
        <ThreadProgress step={5} total={8} />
      </div>

      {/* FLOATING SPARKLE */}
      <motion.div
        className="
          pointer-events-none
          absolute
          left-[10%]
          top-[22%]
          text-amber-400
        "
        animate={{
          y: [0, -8, 0],
          rotate: [0, 10, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles size={20} />
      </motion.div>

      {/* FLOATING HEART */}
      <motion.div
        className="
          pointer-events-none
          absolute
          right-[10%]
          top-[30%]
          text-rose-400
        "
        animate={{
          y: [0, 8, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Heart size={18} fill="currentColor" />
      </motion.div>

      {/* MAIN CONTENT */}
      <div
        className="
          relative
          z-10
          flex
          w-full
          max-w-md
          flex-col
          items-center
        "
      >
        {/* Small heading */}
        <motion.p
          initial={{
            opacity: 0,
            y: -10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mb-5
            text-xs
            font-semibold
            uppercase
            tracking-[0.3em]
            text-rose-500
          "
        >
          A little memory ❤️
        </motion.p>

        {/* PREMIUM VIDEO CARD */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.88,
            y: 25,
            rotate: -2,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            rotate: 0,
          }}
          transition={{
            duration: 0.9,
            type: "spring",
            stiffness: 120,
          }}
          className="
            relative
            w-full
            max-w-[320px]
            rounded-[28px]
            border
            border-orange-100
            bg-white
            p-3
            shadow-[0_20px_60px_rgba(80,40,40,0.18)]
            sm:max-w-[340px]
          "
        >
          {/* Decorative glow */}
          <div
            className="
              pointer-events-none
              absolute
              -inset-1
              -z-10
              rounded-[30px]
              bg-gradient-to-r
              from-rose-200/30
              via-orange-200/30
              to-amber-200/30
              blur-xl
            "
          />

          {/* VIDEO */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[21px]
              bg-[#fffaf4]
            "
          >
            <video
              src={memoryVideo}
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              className="
                block
                h-auto
                max-h-[500px]
                w-full
                rounded-[21px]
                object-contain
              "
            />

            {/* Soft overlay */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-[21px]
                bg-gradient-to-t
                from-black/20
                via-transparent
                to-transparent
              "
            />

            {/* Playing badge */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 1,
              }}
              className="
                absolute
                left-3
                top-3
                flex
                items-center
                gap-1.5
                rounded-full
                bg-white/85
                px-3
                py-1.5
                text-[10px]
                font-medium
                text-rose-500
                shadow-md
                backdrop-blur-md
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  animate-pulse
                  rounded-full
                  bg-rose-500
                "
              />
              A little memory
            </motion.div>

            {/* Heart badge */}
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-4
                right-4
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-white/90
                shadow-lg
                backdrop-blur-sm
              "
            >
              <Heart
                size={18}
                className="text-rose-500"
                fill="currentColor"
              />
            </motion.div>
          </div>

          {/* VIDEO CAPTION */}
          <div className="px-2 pb-1 pt-3">
            <p className="font-hand text-xl text-rose-600">
              A little piece of us ✨
            </p>

            <div className="mt-2 flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-orange-200" />

              <Sparkles
                size={12}
                className="text-amber-400"
              />

              <span className="h-px w-8 bg-orange-200" />
            </div>
          </div>
        </motion.div>

        {/* TEXT REVEAL */}
        <div
          className="
            mt-7
            min-h-[115px]
            max-w-sm
            space-y-2
          "
        >
          {LINES.map((line, i) => (
            <motion.p
              key={i}
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={
                i < visible
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 12,
                    }
              }
              transition={{
                duration: 0.7,
              }}
              className={
                i === 2
                  ? "font-hand text-2xl font-bold text-rose-600"
                  : "text-sm leading-relaxed text-ink/70 sm:text-base"
              }
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* CONTINUE BUTTON */}
        {visible >= LINES.length && (
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
              delay: 0.3,
            }}
            whileHover={{
              scale: 1.04,
              boxShadow:
                "0 12px 30px rgba(217,169,78,0.25)",
            }}
            whileTap={{
              scale: 0.96,
            }}
            onClick={onNext}
            className="
              group
              mt-7
              flex
              items-center
              gap-2
              rounded-full
              border
              border-orange-200
              bg-white
              px-5
              py-2.5
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

        {/* BOTTOM MESSAGE */}
        {visible >= LINES.length && (
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.9,
            }}
            className="
              mt-4
              text-xs
              tracking-wide
              text-ink/40
            "
          >
            Made with love, just for you 🧡
          </motion.p>
        )}
      </div>
    </div>
  );
}

