"use client";

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";

const image = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=86`;

const artImages = {
  canvas: image("photo-1547891654-e66ed7ebb968"),
  abstract: image("photo-1579783902614-a3fb3927b6a5"),
  cinematic: image("photo-1506744038136-46273834b3fb"),
  architecture: image("photo-1518005020951-eccb494ad742"),
  darkLandscape: image("photo-1519608487953-e999c86e7455"),
};

const works = [
  {
    title: "Spatial Product Film",
    meta: "Product / Installation / Interaction",
    image: artImages.abstract,
    copy: "A product landing experience treated like an installation: architectural shadows, tactile surfaces, and quiet detail reveals.",
  },
  {
    title: "Editorial Interface Room",
    meta: "Editorial / Space / Scroll",
    image: artImages.canvas,
    copy: "A layered visual archive using interface composition, typography surfaces, and controlled scroll rhythm.",
  },
  {
    title: "Motion Identity Wall",
    meta: "Brand / Media / System",
    image: artImages.darkLandscape,
    copy: "A campaign surface for media, art direction, and brand assets with motion that supports browsing instead of distracting from it.",
  },
];

const experiments = [
  {
    key: "scroll",
    title: "Scroll",
    note: "Progress, depth, and section rhythm respond to page movement.",
  },
  {
    key: "webgl",
    title: "WebGL",
    note: "A shader-like surface follows your cursor with subtle light refraction.",
  },
  {
    key: "physics",
    title: "Physics",
    note: "Drag the orb. The layout reacts with soft inertia and spatial feedback.",
  },
  {
    key: "shader",
    title: "Shader",
    note: "Layered gradients create a living material without heavy decoration.",
  },
];

const system = [
  ["Typography", "72 / 48 / 28 / 18", "One strong display scale, restrained weights, and generous line-height."],
  ["Motion", "Depth / delay / inertia", "Soft cubic easing, micro movement, and quiet spring-like response."],
  ["Grid", "12 columns / 8px base", "A strict spatial grid keeps the cinematic layout controlled."],
  ["UI System", "Glass / paper / shadow", "Reusable surfaces, subtle material contrast, and consistent interaction states."],
];

const process = ["Concept", "Design", "Motion", "Development"];

function useMotionVars() {
  const [vars, setVars] = useState({ x: 0, y: 0, scroll: 0 });

  useEffect(() => {
    let frame = 0;

    const onPointer = (event: globalThis.PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setVars((current) => ({
          ...current,
          x: event.clientX / window.innerWidth,
          y: event.clientY / window.innerHeight,
        }));
      });
    };

    const onScroll = () => {
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      setVars((current) => ({ ...current, scroll: window.scrollY / max }));
    };

    window.addEventListener("pointermove", onPointer);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return {
    "--mx": vars.x.toFixed(4),
    "--my": vars.y.toFixed(4),
    "--scroll": vars.scroll.toFixed(4),
  } as CSSProperties & Record<string, string>;
}

function MagneticLink({ href, children }: { href: string; children: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const move = (event: PointerEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setOffset({
      x: (event.clientX - rect.left - rect.width / 2) * 0.16,
      y: (event.clientY - rect.top - rect.height / 2) * 0.18,
    });
  };

  return (
    <a
      ref={ref}
      href={href}
      className="magnetic-link"
      onPointerMove={move}
      onPointerLeave={() => setOffset({ x: 0, y: 0 })}
      style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
    >
      {children}
    </a>
  );
}

function WorkFeature() {
  const [active, setActive] = useState(0);
  const work = works[active];

  return (
    <section id="works" className="work-section screen-section">
      <div className="section-copy">
        <p className="eyebrow">Selected Works</p>
        <h2>Selected cases built around cinematic visual direction.</h2>
      </div>
      <div className="work-cinema">
        <div className="video-frame">
          {works.map((item, index) => (
            <img
              key={item.title}
              src={item.image}
              alt={item.title}
              className={active === index ? "is-active" : ""}
            />
          ))}
          <div className="play-pulse" />
          <div className="video-caption">
            <p>{work.meta}</p>
            <h3>{work.title}</h3>
          </div>
        </div>
        <div className="work-tabs">
          {works.map((item, index) => (
            <button
              key={item.title}
              className={active === index ? "is-active" : ""}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
            >
              <span>0{index + 1}</span>
              <strong>{item.title}</strong>
              <p>{item.copy}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function InteractionLab() {
  const [active, setActive] = useState(0);
  const [drag, setDrag] = useState({ x: 58, y: 48 });
  const [dragging, setDragging] = useState(false);

  const moveOrb = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    setDrag({
      x: Math.min(88, Math.max(12, ((event.clientX - rect.left) / rect.width) * 100)),
      y: Math.min(82, Math.max(18, ((event.clientY - rect.top) / rect.height) * 100)),
    });
  };

  return (
    <section id="lab" className="lab-section screen-section">
      <div className="section-copy">
        <p className="eyebrow">Interaction Lab</p>
        <h2>Scroll, WebGL, Physics, Shader. Real interaction, not just previews.</h2>
      </div>
      <div className="lab-grid">
        <div className="experiment-menu">
          {experiments.map((item, index) => (
            <button
              key={item.key}
              onClick={() => setActive(index)}
              onMouseEnter={() => setActive(index)}
              className={active === index ? "is-active" : ""}
            >
              <span>0{index + 1}</span>
              <strong>{item.title}</strong>
              <p>{item.note}</p>
            </button>
          ))}
        </div>
        <div
          className={`lab-stage lab-${experiments[active].key}`}
          onPointerMove={moveOrb}
          onPointerUp={() => setDragging(false)}
          onPointerLeave={() => setDragging(false)}
        >
          <div className="scroll-meter">
            <span />
          </div>
          <div className="shader-field" />
          <div className="light-card">
            <p className="eyebrow">{experiments[active].title}</p>
            <h3>{experiments[active].note}</h3>
          </div>
          <div
            className="physics-orb"
            onPointerDown={(event) => {
              event.currentTarget.setPointerCapture(event.pointerId);
              setDragging(true);
            }}
            style={{ left: `${drag.x}%`, top: `${drag.y}%` }}
            role="button"
            tabIndex={0}
            aria-label="Drag physics orb"
          />
          <div className="magnet-row">
            <MagneticLink href="#system">Typography</MagneticLink>
            <MagneticLink href="#works">Motion</MagneticLink>
            <MagneticLink href="#contact">Contact</MagneticLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const motionVars = useMotionVars();

  return (
    <main className="site-shell" style={motionVars}>
      <div className="cursor-light" aria-hidden="true" />
      <nav className="nav-shell">
        <a href="#" className="brand">HWAZZ</a>
        <div>
          <a href="#works">Works</a>
          <a href="#lab">Experiments</a>
          <a href="#system">System</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero-section screen-section">
        <div className="hero-atmosphere" aria-hidden="true" />
        <div className="hero-copy">
          <h1>Crafting cinematic digital experiences.</h1>
          <div className="hero-index">
            <MagneticLink href="#works">Selected Works</MagneticLink>
            <MagneticLink href="#lab">Interaction Experiments</MagneticLink>
            <MagneticLink href="#system">Motion Systems</MagneticLink>
          </div>
        </div>
        <div className="hero-visual">
          <div className="depth-plane plane-back">
            <img src={artImages.cinematic} alt="Painterly cinematic atmosphere" />
          </div>
          <div className="depth-plane plane-mid">
            <img src={artImages.abstract} alt="Abstract art visual system" />
          </div>
          <div className="depth-plane plane-front">
            <img src={artImages.canvas} alt="Gallery artwork surface" />
          </div>
          <div className="depth-rail" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <WorkFeature />
      <InteractionLab />

      <section id="system" className="system-section screen-section">
        <div className="section-copy">
          <p className="eyebrow">System Design</p>
          <h2>Typography, Motion, Grid, UI System.</h2>
        </div>
        <div className="system-grid">
          {system.map(([title, value, body], index) => (
            <article key={title} className="system-card">
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <strong>{value}</strong>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section screen-section">
        <div className="section-copy">
          <p className="eyebrow">Process</p>
          <h2>Concept → Design → Motion → Development</h2>
        </div>
        <div className="process-line">
          {process.map((item, index) => (
            <div key={item}>
              <span>0{index + 1}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section screen-section">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s build a site that feels cinematic, precise, and memorable.</h2>
        </div>
        <MagneticLink href="mailto:hello@hwazz.net">Start a project</MagneticLink>
      </section>
    </main>
  );
}
