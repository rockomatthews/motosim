"use client";
import { useEffect, useRef, useState } from "react";

const preferenceKey = "motosim-music-muted";

export default function BackgroundAudio() {
  const audio = useRef<HTMLAudioElement>(null);
  const mutedIntent = useRef(false);
  const needsGesture = useRef(false);
  const [soundOn, setSoundOn] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    const track = audio.current;
    if (!track) return;
    let disposed = false;
    try { mutedIntent.current = localStorage.getItem(preferenceKey) === "true"; } catch {}
    track.muted = mutedIntent.current;
    track.volume = 0.35;

    const start = () => {
      void track.play().then(() => {
        if (disposed) return;
        needsGesture.current = false;
        setSoundOn(!track.muted);
      }).catch(() => {
        if (disposed) return;
        needsGesture.current = true;
        setSoundOn(false);
      });
    };
    const unlock = (event: MouseEvent) => {
      // The music control handles its own click, including an explicit mute.
      if (event.target instanceof Element && event.target.closest("[data-audio-control]")) return;
      if (needsGesture.current && !mutedIntent.current) start();
    };
    start();
    document.addEventListener("click", unlock);
    return () => {
      disposed = true;
      document.removeEventListener("click", unlock);
      track.pause();
    };
  }, []);

  const toggle = async () => {
    const track = audio.current;
    if (!track) return;
    const muted = soundOn;
    mutedIntent.current = muted;
    track.muted = muted;
    try { localStorage.setItem(preferenceKey, String(muted)); } catch {}
    if (muted) { setSoundOn(false); return; }
    try {
      await track.play();
      needsGesture.current = false;
      setSoundOn(!track.muted);
    } catch {
      needsGesture.current = true;
      setSoundOn(false);
    }
  };

  return <>
    <audio ref={audio} src="/media/renegades-of-funk.mp3" loop preload="metadata"
      onError={() => { setUnavailable(true); setSoundOn(false); }} />
    <button type="button" className="video-toggle audio-toggle" data-audio-control
      aria-label={soundOn ? "Mute background music" : "Play background music"}
      aria-pressed={soundOn} disabled={unavailable} onClick={toggle}
      title={unavailable ? "Music could not be loaded" : soundOn ? "Mute background music" : "Enable background music"}>
      {unavailable ? "MUSIC UNAVAILABLE" : soundOn ? "♫ MUTE MUSIC" : "♫ UNMUTE MUSIC"}
    </button>
  </>;
}
