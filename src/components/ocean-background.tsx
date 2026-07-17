"use client";

import { useState } from "react";

export function OceanBackground() {
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="ocean-background" aria-hidden="true">
      {!hasError && (
        <video
          className={`ocean-video ${isReady ? "is-ready" : ""}`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/images/ocean-waves-poster.jpg"
          tabIndex={-1}
          onCanPlay={() => setIsReady(true)}
          onError={() => setHasError(true)}
        >
          <source
            src="/assets/video/ocean-cinematic.mp4"
            type="video/mp4"
            media="(max-width: 767px)"
          />
          <source
            src="/assets/video/ocean-waves-crashing-rocks.mp4"
            type="video/mp4"
          />
        </video>
      )}
      <div className="ocean-overlay" />
      <div className="ocean-grain" />
    </div>
  );
}
