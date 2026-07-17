"use client";

import { useState } from "react";
import { processSteps } from "@/data/site";

export function ProcessStudio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = processSteps[activeIndex];

  return (
    <div className="process-studio">
      <div className="process-rail" role="tablist" aria-label="Etapas do processo">
        {processSteps.map((step, index) => (
          <button
            key={step.number}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            className={activeIndex === index ? "is-active" : ""}
            onClick={() => setActiveIndex(index)}
          >
            <span>{step.number}</span>
            <strong>{step.title}</strong>
          </button>
        ))}
      </div>

      <div className="process-detail" role="tabpanel" key={active.number}>
        <span className="process-giant-number">{active.number}</span>
        <div>
          <span className="micro-label">A pergunta desta etapa</span>
          <h3>{active.question}</h3>
          <p>{active.description}</p>
        </div>
        <aside>
          <span>Você recebe</span>
          <p>{active.output}</p>
        </aside>
      </div>
    </div>
  );
}
