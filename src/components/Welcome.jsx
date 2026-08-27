import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { AmbientDecor, BurstOverlay } from "./Decor";

export default function Welcome({ onOpen }) {
  const [opening, setOpening] = useState(false);
  const [burst, setBurst] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    setBurst(true);
    setTimeout(() => {
      onOpen();
    }, 1500);
  };

  return (
    <div className="relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-cream px-6 py-16 paper-texture">
      <AmbientDecor variant="hearts" count={7} />
      <BurstOverlay show={burst} />

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-3 text-xs font-semibold tracking-[0.25em] text-rose-deep/70"
      >
        A LITTLE SOMETHING FOR YOU &#9825;
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-hand text-center text-5xl font-bold text-rose-deep sm:text-6xl"
      >
        Happy Raksha Bandhan, Bhaiya ❤️
      </motion.h1>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
        className="my-6"
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart size={38} className="text-rose border-b-pink-800" fill="#E8899A" />
        </motion.div>
      </motion.div>

      {/* Envelope */}
      <div className="relative mt-4 flex flex-col items-center">
        <AnimatePresence>
          {!opening && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mb-5 font-hand text-2xl text-ink/80"
            >
              I made something for you...
            </motion.p>
          )}
        </AnimatePresence>

        <motion.button
          onClick={handleOpen}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="relative h-40 w-56 focus:outline-none"
          aria-label="Open your gift"
        >
          {/* envelope body */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-rose-light to-rose/60 shadow-xl shadow-rose-200/60 border border-rose-deep/10" />

          {/* envelope flap (opens) */}
          <motion.div
            className="absolute left-0 top-0 h-20 w-full origin-top"
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 90%)",
              background:
                "linear-gradient(180deg, #C65D72 0%, #E8899A 100%)",
              transformStyle: "preserve-3d",
            }}
            animate={opening ? { rotateX: 180 } : { rotateX: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          />

          {/* little heart seal */}
          <motion.div
            className="absolute left-1/2 top-16 -translate-x-1/2"
            animate={
              opening
                ? { y: -70, opacity: 0, scale: 1.4 }
                : { y: 0, opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.8, delay: opening ? 0.2 : 0 }}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md">
              <Heart size={16} className="text-rose-deep" fill="#C65D72" />
            </div>
          </motion.div>

          {/* card sliding out */}
          <motion.div
            className="absolute left-1/2 top-6 h-24 w-40 -translate-x-1/2 rounded-lg bg-paper shadow-md"
            animate={opening ? { y: -55, opacity: 1 } : { y: 10, opacity: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          />
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: opening ? 0 : 1 }}
          className="mt-6 font-semibold tracking-wide text-rose-deep"
        >
          {!opening && "OPEN IT ♡"}
        </motion.p>
      </div>
    </div>
  );
}
