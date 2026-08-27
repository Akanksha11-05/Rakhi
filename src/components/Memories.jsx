import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Sparkles, ArrowRight } from "lucide-react";
import { AmbientDecor, ThreadProgress } from "./Decor";

// Photos
const PHOTOS = [
  {
    src: "/src/assets/memory1.jpeg",
    caption: "Those beautiful childhood days 🌸",
    rotate: -6,
    position: "object-[center_18%]",
  },
  {
    src: "/src/assets/memory2.jpeg",
    caption: "Memories that always make me smile ❤️",
    rotate: 4,
    position: "object-center",
  },
  {
    src: "/src/assets/memory3.jpeg",
    caption: "Best Bro 🫶🏻",
    rotate: -3,
    position: "object-[center_18%]",
  },
  {
    src: "/src/assets/memory4.jpeg",
    caption: "Just us ❤️",
    rotate: 5,
    position: "object-center",
  },
];

function Polaroid({ photo, index, onClick }) {
  const [broken, setBroken] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      initial={{
        opacity: 0,
        y: 30,
        rotate: 0,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: photo.rotate,
      }}
      viewport={{
        once: true,
        margin: "-40px",
      }}
      whileHover={{
        scale: 1.04,
        rotate: 0,
        zIndex: 10,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="
        gift-card
        w-[150px]
        shrink-0
        p-2.5
        pb-4
        text-left
        sm:w-[170px]
      "
    >
      <div
        className="
          relative
          aspect-square
          w-full
          overflow-hidden
          rounded-xl
          bg-rose-light/40
        "
      >
        {!broken ? (
          <img
            src={photo.src}
            alt={photo.caption}
            className={`
              h-full
              w-full
              object-cover
              ${photo.position}
            `}
            onError={() => setBroken(true)}
          />
        ) : (
          <div
            className="
              flex
              h-full
              w-full
              flex-col
              items-center
              justify-center
              gap-1
              bg-gradient-to-br
              from-rose-light
              to-peach/40
              text-rose-deep/70
            "
          >
            <Heart size={22} fill="currentColor" />
            <span className="text-[10px]">add photo</span>
          </div>
        )}
      </div>

      <p
        className="
          mt-2.5
          text-center
          text-xs
          leading-snug
          text-ink/80
        "
      >
        {photo.caption}
      </p>
    </motion.button>
  );
}

export default function Memories({ onNext }) {
  const [selected, setSelected] = useState(null);

  return (
    <div
      className="
        relative
        flex
        min-h-dvh
        w-full
        flex-col
        items-center
        bg-cream
        px-5
        py-10
        sm:py-14
        paper-texture
        overflow-hidden
      "
    >
      <AmbientDecor variant="flowers" count={5} />

      {/* Progress */}
      <div className="mb-5 sm:mb-6">
        <ThreadProgress step={2} total={8} />
      </div>

      {/* Heading */}
      <motion.h2
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
          font-hand
          mb-7
          text-center
          text-3xl
          font-bold
          text-rose-deep
          sm:mb-8
          sm:text-4xl
        "
      >
        Some beautiful memories... 📸❤️
      </motion.h2>

      {/* Photos */}
      <div
        className="
          relative
          flex
          w-full
          max-w-md
          flex-wrap
          items-start
          justify-center
          gap-4
          sm:max-w-2xl
          sm:gap-5
        "
      >
        {PHOTOS.map((photo, i) => (
          <Polaroid
            key={i}
            photo={photo}
            index={i}
            onClick={() => setSelected(photo)}
          />
        ))}
      </div>

      {/* NEXT BUTTON */}
      <motion.button
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1,
          duration: 0.8,
          ease: "easeOut",
        }}
        whileHover={{
          scale: 1.04,
          y: -3,
          boxShadow: "0 14px 35px rgba(198, 93, 114, 0.30)",
        }}
        whileTap={{
          scale: 0.96,
        }}
        onClick={onNext}
        className="
          group
          relative
          mt-8
          flex
          items-center
          gap-3
          overflow-hidden
          rounded-full
          bg-gradient-to-r
          from-rose-deep
          via-orange-500
          to-amber-500
          px-7
          py-3
          text-sm
          font-semibold
          tracking-wide
          text-white
          shadow-lg
          sm:mt-10
          sm:px-8
          sm:py-3.5
          sm:text-base
        "
      >
        {/* Soft shine */}
        <motion.span
          className="
            absolute
            inset-y-0
            -left-10
            w-8
            rotate-12
            bg-white/25
            blur-sm
          "
          animate={{
            x: ["0%", "520%"],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
        />

        <span className="relative z-10">
          There's more for you, Bhaiya
        </span>

        {/* Animated heart */}
        <motion.span
          className="relative z-10 text-lg"
          animate={{
            y: [0, -3, 0],
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ❤️
        </motion.span>

        {/* Arrow */}
        <motion.span
          className="relative z-10"
          animate={{
            x: [0, 4, 0],
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowRight size={18} />
        </motion.span>
      </motion.button>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              bg-ink/40
              px-6
              backdrop-blur-sm
            "
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{
                scale: 0.85,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.85,
                opacity: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 20,
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                gift-card
                relative
                w-full
                max-w-sm
                p-4
                pb-6
              "
            >
              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="
                  absolute
                  -right-3
                  -top-3
                  z-10
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-rose-deep
                  shadow-md
                "
                aria-label="Close"
              >
                <X size={16} />
              </button>

              {/* Selected photo */}
              <div
                className="
                  relative
                  aspect-square
                  w-full
                  overflow-hidden
                  rounded-xl
                  bg-rose-light/40
                "
              >
                <img
                  src={selected.src}
                  alt={selected.caption}
                  className={`
                    h-full
                    w-full
                    object-cover
                    ${selected.position}
                  `}
                  onError={(e) =>
                    (e.currentTarget.style.display = "none")
                  }
                />
              </div>

              <p
                className="
                  mt-3
                  flex
                  items-center
                  justify-center
                  gap-1.5
                  text-center
                  text-sm
                  text-ink/80
                "
              >
                <Sparkles
                  size={13}
                  className="text-gold"
                />

                {selected.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}