import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Music, Volume2, VolumeX } from "lucide-react";

// Small floating music toggle. Safe if src/assets/music.mp3 doesn't
// exist yet - it just fails silently and the button still works as a
// no-op so the rest of the site never crashes.
export default function MusicButton({ shouldStart }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(true);
  const startedRef = useRef(false);

  useEffect(() => {
    if (shouldStart && !startedRef.current && audioRef.current) {
      startedRef.current = true;
      audioRef.current.volume = 0.45;
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch(() => setReady(false));
    }
  }, [shouldStart]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch(() => setReady(false));
    }
  };

  return (
    <>
      {/* Replace this src with your own file at src/assets/music.mp3 */}
      <audio
        ref={audioRef}
        loop
        onError={() => setReady(false)}
        src="/src/assets/audiomusic.mp3"
      />
      <motion.button
        onClick={toggle}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-rose-deep shadow-lg shadow-rose-200/50 backdrop-blur border border-rose-light"
        aria-label={playing ? "Pause music" : "Play music"}
        title={ready ? "" : "Add music.mp3 to src/assets to enable sound"}
      >
        {playing ? (
          <Volume2 size={18} className={ready ? "" : "opacity-40"} />
        ) : (
          <Music size={18} className={ready ? "" : "opacity-40"} />
        )}
      </motion.button>
    </>
  );
}
