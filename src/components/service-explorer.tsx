"use client";

import Image from "next/image";
import { useState } from "react";
import { services } from "@/data/site";

export function ServiceExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];

  return (
    <div className="service-explorer">
      <div className="service-tabs" role="tablist" aria-label="Soluções do estúdio">
        {services.map((service, index) => (
          <button
            key={service.number}
            id={`service-tab-${index}`}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls="service-panel"
            className={activeIndex === index ? "is-active" : ""}
            onClick={() => setActiveIndex(index)}
          >
            <span>{service.number}</span>
            <div>
              <strong>{service.title}</strong>
              <small>{service.short}</small>
            </div>
            <i aria-hidden="true">↗</i>
          </button>
        ))}
      </div>

      <div
        className={`service-panel accent-${active.accent}`}
        id="service-panel"
        role="tabpanel"
        aria-labelledby={`service-tab-${activeIndex}`}
        key={active.number}
      >
        <div className="service-panel-copy">
          <span className="micro-label">O que fazemos</span>
          <h3>{active.headline}</h3>
          <p>{active.description}</p>
          <ul>
            {active.deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a className="inline-cta" href="#contato">
            Conversar sobre esta solução <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="service-panel-visual">
          <Image src={active.image} alt="" fill sizes="(max-width: 900px) 100vw, 42vw" />
          <span>{active.number}</span>
        </div>
      </div>
    </div>
  );
}
