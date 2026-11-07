"use client";
import { useEffect, useRef, useState } from "react";
import BackgroundAudio from "./BackgroundAudio";
export default function HeroVideo() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      if (media.matches) {
        video.current?.pause();
        setPlaying(false);
      } else {
        video.current
          ?.play()
          .then(() => setPlaying(true))
          .catch(() => setPlaying(false));
      }
    };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return (
    <>
      <BackgroundAudio />
      <video
        ref={video}
        className="hero-video"
        loop
        muted
        playsInline
        preload="metadata"
        poster="/media/racing-poster.jpg"
        aria-label="Motorcycle riders on a racetrack; inspiration footage, not MotoSIM hardware"
      >
        <source src="/media/racing.mp4" type="video/mp4" />
      </video>
      <button
        className="video-toggle"
        onClick={() => {
          if (playing) {
            video.current?.pause();
            setPlaying(false);
          } else {
            video.current
              ?.play()
              .then(() => setPlaying(true))
              .catch(() => setPlaying(false));
          }
        }}
        aria-label={
          playing
            ? "Pause racing background video"
            : "Play racing background video"
        }
      >
        {playing ? "Ⅱ PAUSE FILM" : "▷ PLAY FILM"}
      </button>
    </>
  );
}
