"use client";

import Image from "next/image";
import { useState } from "react";
import { projects } from "@/data/site";
import { assetPath } from "@/lib/paths";

export function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];

  return (
    <div className="project-showcase">
      <div className="project-stage" key={active.number}>
        <Image src={assetPath(active.image)} alt={active.alt} fill sizes="(max-width: 900px) 100vw, 62vw" />
        <div className="project-stage-shade" />
        <div className="project-stage-copy">
          <span>{active.category}</span>
          <h3>{active.title}</h3>
          <div className="project-tags">
            {active.tags.map((tag) => <small key={tag}>{tag}</small>)}
          </div>
        </div>
      </div>

      <div className="project-controls" aria-label="Selecionar aplicação de projeto">
        {projects.map((project, index) => (
          <button
            key={project.number}
            type="button"
            className={activeIndex === index ? "is-active" : ""}
            aria-pressed={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          >
            <span>{project.number}</span>
            <strong>{project.category}</strong>
            <i aria-hidden="true">{activeIndex === index ? "—" : "+"}</i>
          </button>
        ))}
      </div>
    </div>
  );
}
