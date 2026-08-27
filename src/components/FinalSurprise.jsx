import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gift,
  Heart,
  Sparkles,
  ArrowRight,
  Star,
  RotateCcw,
} from "lucide-react";
import {
  AmbientDecor,
  BurstOverlay,
  ThreadProgress,
} from "./Decor";

export default function FinalSurprise({ onRestart }) {
  const [opened, setOpened] = useState(false);
  const [burst, setBurst] = useState(false);

  const handleOpen = () => {
    setOpened(true);
    setBurst(true);
  };

  const handleRestart = () => {
    setOpened(false);
    setBurst(false);

    // Small delay so the first page transition feels smooth
    setTimeout(() => {
      onRestart?.();
    }, 150);
  };

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
        paper-texture
      "
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-rose-200/30 blur-3xl" />

        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-100/30 blur-3xl" />
      </div>

      <AmbientDecor variant="sparkles" count={8} />

      <BurstOverlay show={burst} />

      {/* Progress */}
      <div className="absolute left-1/2 top-8 z-30 -translate-x-1/2">
        <ThreadProgress step={7} total={8} />
      </div>

      <AnimatePresence mode="wait">

        {/* =================================================
            BEFORE OPEN
        ================================================= */}
        {!opened ? (
          <motion.div
            key="prompt"
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.95,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              relative
              z-10
              flex
              w-full
              max-w-md
              flex-col
              items-center
              text-center
            "
          >
            {/* Small label */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="
                mb-3
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-rose-500
              "
            >
              Just for you ❤️
            </motion.p>

            {/* Gift icon */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, -3, 3, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                mb-6
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                bg-white
                shadow-[0_15px_45px_rgba(180,100,80,0.18)]
              "
            >
              <Gift
                size={38}
                strokeWidth={1.6}
                className="text-orange-500"
              />
            </motion.div>

            {/* Heading */}
            <h2
              className="
                font-hand
                text-4xl
                font-bold
                text-rose-deep
                sm:text-5xl
              "
            >
              One last little surprise... ✨
            </h2>

            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink/60">
              Because some feelings are better wrapped as a little gift. 🎁
            </p>

            {/* Open button */}
            <motion.button
              onClick={handleOpen}
              whileHover={{
                scale: 1.04,
                boxShadow:
                  "0 15px 35px rgba(217,169,78,0.28)",
              }}
              whileTap={{
                scale: 0.96,
              }}
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                y: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="
                group
                mt-8
                flex
                items-center
                gap-2
                rounded-full
                border
                border-orange-200
                bg-white
                px-6
                py-3
                text-sm
                font-medium
                text-orange-500
                shadow-md
                transition-all
                sm:text-base
              "
            >
              <Gift size={18} />

              <span>Open your final surprise</span>

              <ArrowRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </motion.button>
          </motion.div>
        ) : (

          /* =================================================
             AFTER OPEN
          ================================================= */
          <motion.div
            key="reveal"
            initial={{
              opacity: 0,
              scale: 0.88,
              y: 25,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 17,
            }}
            className="
              relative
              z-10
              w-full
              max-w-md
            "
          >
            {/* Decorative stars */}
            <Star
              size={18}
              className="
                absolute
                -left-3
                top-8
                text-amber-400
              "
              fill="currentColor"
            />

            <Sparkles
              size={20}
              className="
                absolute
                -right-3
                top-16
                text-orange-400
              "
            />

            {/* Main card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-orange-100
                bg-white
                px-7
                py-10
                text-center
                shadow-[0_25px_70px_rgba(80,40,40,0.14)]
                sm:px-10
                sm:py-12
              "
            >
              {/* Soft shine */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-40
                  w-40
                  rounded-full
                  bg-rose-100/50
                  blur-2xl
                "
              />

              {/* Decorative line */}
              <div className="relative mb-7 flex items-center justify-center gap-3">
                <div className="h-px w-12 bg-orange-200" />

                <Heart
                  size={16}
                  className="text-rose-400"
                  fill="currentColor"
                />

                <div className="h-px w-12 bg-orange-200" />
              </div>

              {/* Heart */}
              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                }}
                className="
                  relative
                  mx-auto
                  mb-5
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-rose-50
                "
              >
                <Heart
                  size={29}
                  className="text-rose-500"
                  fill="currentColor"
                />
              </motion.div>

              {/* Main message */}
              <p
                className="
                  font-hand
                  text-3xl
                  font-bold
                  leading-tight
                  text-rose-deep
                  sm:text-4xl
                "
              >
                Thank you for being
                <br />
                my brother. ❤️
              </p>

              {/* Divider */}
              <div className="my-6 flex items-center justify-center gap-2">
                <span className="h-1 w-1 rounded-full bg-orange-300" />
                <span className="h-1 w-1 rounded-full bg-orange-400" />
                <span className="h-1 w-1 rounded-full bg-orange-300" />
              </div>

              {/* Marathi message */}
              <p
                className="
                  mr
                  text-base
                  leading-relaxed
                  text-ink/75
                  sm:text-lg
                "
              >
                तुझी बहीण कायम तुझ्या सोबत आहे. 🫶🏻
              </p>

              <p
                className="
                  mt-5
                  text-sm
                  leading-relaxed
                  text-ink/55
                "
              >
                काही नाती शब्दांपेक्षा खूप मोठी असतात...
                <br />
                आणि आपलं नातं त्यापैकीच एक आहे. ✨
              </p>

              {/* Signature */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.7,
                }}
                className="
                  font-hand
                  mt-7
                  text-2xl
                  font-semibold
                  text-orange-500
                "
              >
                With all my love, Bhaiya 🧡
              </motion.p>
            </motion.div>

            {/* =============================================
                RESTART BUTTON
            ============================================= */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1,
              }}
              className="flex justify-center"
            >
              <motion.button
                onClick={handleRestart}
                whileHover={{
                  scale: 1.04,
                  boxShadow:
                    "0 12px 30px rgba(217,169,78,0.25)",
                }}
                whileTap={{
                  scale: 0.96,
                }}
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
                <RotateCcw
                  size={16}
                  className="
                    transition-transform
                    duration-500
                    group-hover:-rotate-45
                  "
                />

                <span>Relive this beautiful moment</span>

                <Heart
                  size={14}
                  className="
                    text-rose-400
                    transition-transform
                    duration-300
                    group-hover:scale-125
                  "
                  fill="currentColor"
                />
              </motion.button>
            </motion.div>

            {/* Tiny message */}
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.3,
              }}
              className="
                mt-4
                text-center
                text-xs
                tracking-wide
                text-ink/40
              "
            >
              Some memories are worth experiencing again. ✨
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}