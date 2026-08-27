import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Welcome from "./components/Welcome";
import Letter from "./components/Letter";
import Memories from "./components/Memories";
import Appreciation from "./components/Appreciation";
import FunnySection from "./components/FunnySection";
import PhotoReveal from "./components/PhotoReveal";
import FinalMessage from "./components/FinalMessage";
import FinalSurprise from "./components/FinalSurprise";
import MusicButton from "./components/MusicButton";
import FloatingHearts from "./components/FloatingHearts";

const STAGES = [
  "welcome",
  "letter",
  "memories",
  "appreciation",
  "funny",
  "photoReveal",
  "finalMessage",
  "finalSurprise",
];

export default function App() {
  const [stageIndex, setStageIndex] = useState(0);
  const [musicStarted, setMusicStarted] = useState(false);

  // Go to next page
  const goNext = () => {
    setStageIndex((i) =>
      Math.min(i + 1, STAGES.length - 1)
    );
  };

  // Open envelope
  const handleOpenEnvelope = () => {
    setMusicStarted(true);
    goNext();
  };

  // Restart the complete experience
  const restartExperience = () => {
    setStageIndex(0);
  };

  const stage = STAGES[stageIndex];

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 24,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -24,
    },
  };

  return (
    <div className="relative min-h-dvh w-full overflow-hidden bg-cream">

      {/* Floating hearts & sparkles */}
      <FloatingHearts
        density={stage === "finalSurprise" ? 12 : 7}
        intense={stage === "finalSurprise"}
      />

      {/* Music */}
      <MusicButton shouldStart={musicStarted} />

      {/* Main Gift Experience */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={stage}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
          >

            {/* 1. Welcome */}
            {stage === "welcome" && (
              <Welcome onOpen={handleOpenEnvelope} />
            )}

            {/* 2. Letter */}
            {stage === "letter" && (
              <Letter onNext={goNext} />
            )}

            {/* 3. Memories */}
            {stage === "memories" && (
              <Memories onNext={goNext} />
            )}

            {/* 4. Appreciation */}
            {stage === "appreciation" && (
              <Appreciation onNext={goNext} />
            )}

            {/* 5. Funny */}
            {stage === "funny" && (
              <FunnySection onNext={goNext} />
            )}

            {/* 6. Photo / Video Reveal */}
            {stage === "photoReveal" && (
              <PhotoReveal onNext={goNext} />
            )}

            {/* 7. Final Message */}
            {stage === "finalMessage" && (
              <FinalMessage onNext={goNext} />
            )}

            {/* 8. Final Surprise */}
            {stage === "finalSurprise" && (
              <FinalSurprise onNext={restartExperience} />
            )}

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}