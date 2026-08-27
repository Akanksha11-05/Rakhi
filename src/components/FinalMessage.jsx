import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  ShieldCheck,
  Gift,
} from "lucide-react";
import {
  AmbientDecor,
  BurstOverlay,
  ThreadProgress,
} from "./Decor";

/* -------------------------------------------------------
   Rakhi Illustration
------------------------------------------------------- */

function RakhiIcon() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        delay: 0.5,
        duration: 0.8,
        type: "spring",
        stiffness: 180,
      }}
      className="relative flex items-center justify-center"
    >
      {/* Glow */}
      <motion.div
        className="absolute h-28 w-28 rounded-full bg-amber-200/30 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
      />

      {/* Rakhi */}
      <svg
        width="130"
        height="130"
        viewBox="0 0 130 130"
        className="relative z-10"
      >
        {/* Threads */}
        <path
          d="M25 65 C10 65 8 45 20 35"
          fill="none"
          stroke="#D88932"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          d="M105 65 C120 65 122 45 110 35"
          fill="none"
          stroke="#D88932"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Outer decorative ring */}
        <circle
          cx="65"
          cy="65"
          r="35"
          fill="#FFFDF7"
          stroke="#E7B84B"
          strokeWidth="3"
        />

        {/* Decorative dots */}
        <circle cx="65" cy="30" r="4" fill="#E88B3A" />
        <circle cx="65" cy="100" r="4" fill="#E88B3A" />
        <circle cx="30" cy="65" r="4" fill="#E7B84B" />
        <circle cx="100" cy="65" r="4" fill="#E7B84B" />

        {/* Inner circle */}
        <circle
          cx="65"
          cy="65"
          r="23"
          fill="#F8D98D"
          opacity="0.8"
        />

        {/* Heart */}
        <path
          d="
            M65 78
            C58 72 48 67 48 58
            C48 51 56 47 62 53
            L65 56
            L68 53
            C74 47 82 51 82 58
            C82 67 72 72 65 78
          "
          fill="#D96C35"
        />

        {/* Small gems */}
        <circle cx="65" cy="42" r="2.5" fill="#D96C35" />
        <circle cx="65" cy="88" r="2.5" fill="#D96C35" />
      </svg>
    </motion.div>
  );
}

/* -------------------------------------------------------
   Main Component
------------------------------------------------------- */

export default function FinalMessage({ onNext }) {
  const [burst, setBurst] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setBurst(true), 500);

    return () => clearTimeout(t);
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
        bg-cream
        px-5
        py-14
        paper-texture
        overflow-hidden
      "
    >
      {/* Background */}
      <AmbientDecor variant="hearts" count={8} />
      <BurstOverlay show={burst} />

      {/* Progress */}
      <div className="mb-6">
        <ThreadProgress step={6} total={8} />
      </div>

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
          px-6
          py-9
          text-center
          shadow-paper
          sm:px-9
          sm:py-11
        "
      >
        {/* Top Icon */}
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
            rotate: -20,
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
          <ShieldCheck
            size={22}
            className="text-white"
          />
        </motion.div>

        {/* Sparkles */}
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

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
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
            A little Raksha Bandhan wish
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
            Happy Raksha Bandhan
          </h2>

          <p className="mt-1 font-hand text-2xl text-orange-600">
            Bhaiya ❤️
          </p>
        </motion.div>

        {/* Divider */}
        <div className="my-5 flex items-center justify-center gap-2">
          <div className="h-px w-12 bg-amber-200" />

          <Sparkles
            size={14}
            className="text-amber-400"
          />

          <div className="h-px w-12 bg-amber-200" />
        </div>

        {/* Rakhi */}
        <RakhiIcon />

        {/* Message */}
        <div
          className="
            mr
            mt-2
            space-y-4
            text-[15px]
            leading-relaxed
            text-ink
            sm:text-base
          "
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Some bonds don't need many words.
            <br />
            They simply stay in the heart forever. ❤️
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            I'm truly lucky to have you as my brother.
            <br />
            Thank you for always being there for me. 🫶🏻
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="font-semibold text-orange-600"
          >
            May this Rakhi always remind you
            <br />
            that you are deeply loved. ✨
          </motion.p>
        </div>

        {/* Final Love */}
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
            delay: 1.8,
            type: "spring",
            stiffness: 180,
          }}
          className="mt-7"
        >
          <div className="flex items-center justify-center gap-2">
            <Heart
              size={17}
              className="fill-rose-deep text-rose-deep"
            />

            <p className="font-hand text-3xl font-bold text-rose-deep">
              Love you, Bhaiya ❤️
            </p>

            <Heart
              size={17}
              className="fill-rose-deep text-rose-deep"
            />
          </div>

          <p className="mt-1 text-xs tracking-wide text-ink/50">
            Always & forever 🫂
          </p>
        </motion.div>

        {/* Rakhi Blessing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1 }}
          className="
            mt-7
            flex
            items-center
            justify-center
            gap-2
            rounded-2xl
            border
            border-amber-100
            bg-amber-50/70
            px-4
            py-3
          "
        >
          <Gift
            size={17}
            className="text-amber-600"
          />

          <p className="text-xs text-ink/70 sm:text-sm">
            Wishing you happiness, success & endless smiles ✨
          </p>
        </motion.div>
      </motion.div>

      {/* Next */}
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
          delay: 2.4,
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
        <span>There's one more thing for you</span>

        <Sparkles
          size={16}
          className="text-amber-500"
        />
      </motion.button>
    </div>
  );
}