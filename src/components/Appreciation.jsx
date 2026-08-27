import { motion } from "framer-motion";
import { AmbientDecor, ThreadProgress } from "./Decor";

const ITEMS = [
  {
    emoji: "❤️",
    title: "My Biggest Support",
    text: "You always believe in me, even when I doubt myself.",
  },
  {
    emoji: "🫶🏻",
    title: "My Safe Place",
    text: "No matter what happens, I know I can always count on you.",
  },
  {
    emoji: "✨",
    title: "My Motivation",
    text: "You always push me to do better and never let me give up.",
  },
  {
    emoji: "🌸",
    title: "My Constant",
    text: "Through every high and low, you've always been there for me.",
  },
  {
    emoji: "💖",
    title: "My Forever Brother",
    text: "No matter how much we grow, you'll always be my Bhaiya.",
  },
];

export default function Appreciation({ onNext }) {
  return (
    <div className="relative flex min-h-dvh w-full flex-col items-center bg-cream px-5 py-14 paper-texture">
      <AmbientDecor variant="sparkles" count={5} />

      <div className="mb-6">
        <ThreadProgress step={3} total={8} />
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          font-hand
          mb-8
          max-w-sm
          text-center
          text-3xl
          font-bold
          text-rose-deep
          sm:text-4xl
        "
      >
        Why are you so special to me? 🥹❤️
      </motion.h2>

      {/* Appreciation Cards */}
      <div className="grid w-full max-w-md grid-cols-1 gap-4 sm:max-w-lg">
        {ITEMS.map((item, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              x: i % 2 === 0 ? -30 : 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-30px",
            }}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
            }}
            whileHover={{
              scale: 1.02,
            }}
            className="
              gift-card
              flex
              items-start
              gap-3.5
              px-5
              py-4
            "
          >
            <span className="text-2xl leading-none">
              {item.emoji}
            </span>

            <div>
              <p className="font-semibold text-rose-deep">
                {item.title}
              </p>

              <p className="mr mt-1 text-sm text-ink/80">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* SAME BUTTON STYLE AS RAKHIMOMENT */}
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
          delay: 0.7,
        }}
        className="mt-10"
      >
        <motion.button
          onClick={onNext}
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
            px-7
            py-3
            rounded-full
            bg-gradient-to-r
            from-orange-500
            to-amber-500
            text-white
            font-sans
            text-sm
            sm:text-base
            font-medium
            shadow-md
            hover:shadow-lg
            transition-all
          "
        >
          There's more for you, Bhaiya ❤️
        </motion.button>
      </motion.div>
    </div>
  );
}