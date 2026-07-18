"use client";

import { useRef, useState } from "react";
import { assetPath } from "@/lib/paths";

export function OceanBackground() {
  const [isReady, setIsReady] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const frame = frameRef.current;
    if (!frame || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = frame.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    frame.style.setProperty("--tilt-x", `${y * -5}deg`);
    frame.style.setProperty("--tilt-y", `${x * 7}deg`);
  }

  function resetTilt() {
    frameRef.current?.style.setProperty("--tilt-x", "0deg");
    frameRef.current?.style.setProperty("--tilt-y", "0deg");
  }

  return (
    <div
      className="ocean-background"
      ref={frameRef}
      style={{ backgroundImage: `url("${assetPath("/assets/images/ocean-waves-poster.jpg")}")` }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      <video
        className={`ocean-video ${isReady ? "is-ready" : ""}`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={assetPath("/assets/images/ocean-waves-poster.jpg")}
        tabIndex={-1}
        onCanPlay={() => setIsReady(true)}
      >
        <source src={assetPath("/assets/video/ocean-cinematic.mp4")} type="video/mp4" media="(max-width: 767px)" />
        <source src={assetPath("/assets/video/ocean-waves-crashing-rocks.mp4")} type="video/mp4" />
      </video>
      <div className="ocean-overlay" />
      <div className="visual-stamp">
        <span>EST.</span>
        <strong>ATL</strong>
        <span>BR · PT</span>
      </div>
      <div className="visual-caption">
        <span>Do digital ao dia do evento</span>
        <i aria-hidden="true">↗</i>
      </div>
    </div>
  );
}
