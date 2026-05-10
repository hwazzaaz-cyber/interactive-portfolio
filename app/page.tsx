"use client";

import { useState } from "react";

const image = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

const effects = [
  {
    title: "Scroll Narrative",
    type: "Editorial product story",
    description:
      "Sticky sections, staged image reveals, and scroll pacing for brand pages that need a cinematic rhythm.",
    image: image("photo-1497366754035-f200968a6e72", 1200),
    tags: ["Sticky reveal", "Progress cue", "Layered copy"],
  },
  {
    title: "Magnetic Hover",
    type: "Cursor-led premium UI",
    description:
      "Cards, buttons, and previews react to pointer position so the page feels responsive and crafted.",
    image: image("photo-1558655146-d09347e92766", 1200),
    tags: ["Tilt", "Hover preview", "Depth"],
  },
  {
    title: "Product Showcase",
    type: "Commerce visual system",
    description:
      "Large product photography, variant states, floating details, and purchase moments with visual focus.",
    image: image("photo-1523275335684-37898b6baf30", 1200),
    tags: ["Product stage", "Variant state", "CTA"],
  },
  {
    title: "Video Cards",
    type: "Campaign media wall",
    description:
      "A social-first layout for reels, campaign clips, thumbnails, and fast visual scanning.",
    image: image("photo-1611162617474-5b21e879e113", 1200),
    tags: ["Motion grid", "Preview", "Campaign"],
  },
  {
    title: "Page Transition",
    type: "Brand website motion",
    description:
      "Route masks, smooth content handoff, and loading choreography for a polished browsing flow.",
    image: image("photo-1518005020951-eccb494ad742", 1200),
    tags: ["Mask", "Route", "Loading"],
  },
  {
    title: "Interactive Gallery",
    type: "Portfolio archive",
    description:
      "Filterable project grids for design work, photos, social campaigns, and visual experiments.",
    image: image("photo-1516321318423-f06f85e504b3", 1200),
    tags: ["Filter", "Archive", "Case study"],
  },
];

const projects = [
  {
    title: "FIFIJOY Product Visual",
    category: "Product landing page",
    image: image("photo-1505740420928-5e560c06d30e", 1500),
    supporting: image("photo-1523275335684-37898b6baf30", 1000),
    copy:
      "A product page direction with lifestyle photography, clean purchase hierarchy, and hover states for details, bundles, and ingredient-like storytelling.",
    result: "Turns a product page into a polished visual sales experience.",
  },
  {
    title: "DIY Book Nook Showcase",
    category: "Immersive collection page",
    image: image("photo-1500530855697-b586d89ba3ee", 1500),
    supporting: image("photo-1513519245088-0e12902e5a38", 1000),
    copy:
      "A layered browsing concept for miniature scenes, using deep image crops, scroll reveals, and gallery transitions.",
    result: "Makes a catalog feel like entering a small visual world.",
  },
  {
    title: "Social Media Campaign",
    category: "Campaign hub",
    image: image("photo-1611162616305-c69b3fa7fbe0", 1500),
    supporting: image("photo-1611162618071-b39a2ec055fb", 1000),
    copy:
      "A media wall for campaign assets, short-form content, creator notes, and brand visuals that can be browsed quickly.",
    result: "Gives scattered content the feeling of a designed campaign system.",
  },
  {
    title: "Interactive Brand Landing",
    category: "Brand website",
    image: image("photo-1542744173-8e7e53415bb0", 1500),
    supporting: image("photo-1551434678-e076c223a692", 1000),
    copy:
      "A premium homepage structure with hero photography, case proof, animated feature panels, and soft page transitions.",
    result: "Creates a brand impression that feels confident and high-end.",
  },
];

const labModes = [
  "Cursor Tilt",
  "Scroll Reveal",
  "Image Mask",
  "Gallery Filter",
];

const gallery = [
  image("photo-1497366811353-6870744d04b2", 900),
  image("photo-1558655146-9f40138edfeb", 900),
  image("photo-1517245386807-bb43f82c33c4", 900),
  image("photo-1522542550221-31fd19575a2d", 900),
  image("photo-1498050108023-c5249f4df085", 900),
  image("photo-1516321497487-e288fb19713f", 900),
  image("photo-1522202176988-66273c2fd55f", 900),
  image("photo-1556761175-b413da4baf72", 900),
];

function PhotoFrame({
  src,
  title,
  label,
  className = "",
}: {
  src: string;
  title: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`group relative overflow-hidden rounded-lg bg-black ${className}`}>
      <img
        src={src}
        alt={title}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
        <p className="text-xs uppercase text-white/55">{label}</p>
        <h3 className="mt-2 text-2xl font-semibold">{title}</h3>
      </div>
    </div>
  );
}

function EffectCard({ item, index }: { item: (typeof effects)[number]; index: number }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10">
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 rounded-md bg-white/82 px-3 py-2 text-xs text-black backdrop-blur">
          Demo 0{index + 1}
        </div>
        <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/20 bg-white/16 p-3 text-white backdrop-blur transition duration-500 group-hover:translate-y-[-6px]">
          <p className="text-xs uppercase text-white/55">{item.type}</p>
          <h3 className="mt-1 text-2xl font-semibold">{item.title}</h3>
        </div>
      </div>
      <div className="p-5">
        <p className="min-h-20 text-sm leading-6 text-black/62">{item.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="rounded-md bg-black/[0.05] px-3 py-2 text-xs text-black/58">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <article className="group grid overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10 md:grid-cols-[1.1fr_0.9fr]">
      <div className="relative min-h-[420px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/15 to-transparent" />
        <div className="absolute left-6 top-6 rounded-md bg-white/84 px-3 py-2 text-xs text-black backdrop-blur">
          Case 0{index + 1}
        </div>
        <div className="absolute bottom-6 left-6 max-w-md text-white">
          <p className="text-sm text-white/62">{project.category}</p>
          <h3 className="mt-3 text-4xl font-semibold">{project.title}</h3>
        </div>
      </div>
      <div className="flex flex-col justify-between p-6">
        <div>
          <PhotoFrame
            src={project.supporting}
            title="Visual detail"
            label="Design asset"
            className="h-48"
          />
          <p className="mt-6 text-base leading-7 text-black/65">{project.copy}</p>
        </div>
        <div className="mt-8 border-t border-black/10 pt-5">
          <p className="text-xs uppercase text-black/38">Design result</p>
          <p className="mt-2 text-sm leading-6 text-black/65">{project.result}</p>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(0);
  const activeEffect = effects[active % effects.length];

  return (
    <main className="min-h-screen bg-[#f7f4ed] text-[#111111]">
      <nav className="fixed top-0 z-50 w-full border-b border-black/10 bg-[#f7f4ed]/86 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#" className="text-sm font-semibold uppercase">HWAZZ Interactive</a>
          <div className="hidden items-center gap-8 text-sm text-black/55 md:flex">
            <a className="transition hover:text-black" href="#effects">Effects</a>
            <a className="transition hover:text-black" href="#works">Works</a>
            <a className="transition hover:text-black" href="#gallery">Gallery</a>
            <a className="transition hover:text-black" href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className="px-5 pt-28">
        <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl gap-10 py-10 md:grid-cols-[0.92fr_1.08fr] md:items-center">
          <div>
            <p className="mb-6 text-sm uppercase text-black/45">Interactive effects / Visual design / Photo-led portfolio</p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-none md:text-7xl lg:text-8xl">
              Web interactions shaped with real visual work.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/62">
              A full visual portfolio for modern websites: photo-led landing pages, product showcases, motion galleries,
              campaign grids, and interactive brand storytelling.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#effects" className="rounded-full bg-[#111111] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#2b2b2b]">
                Explore effects
              </a>
              <a href="#works" className="rounded-full border border-black/15 bg-white/55 px-6 py-4 text-sm font-semibold transition hover:bg-white">
                View works
              </a>
            </div>
          </div>

          <div
            className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]"
            onMouseMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              setTilt({
                x: (event.clientY - rect.top - rect.height / 2) / -42,
                y: (event.clientX - rect.left - rect.width / 2) / 42,
              });
            }}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
          >
            <PhotoFrame
              src={activeEffect.image}
              title={activeEffect.title}
              label="Live featured visual"
              className="h-[560px] shadow-2xl shadow-black/12"
            />
            <div className="grid gap-4">
              {effects.slice(1, 4).map((item, index) => (
                <button
                  key={item.title}
                  onMouseEnter={() => setActive(index + 1)}
                  onFocus={() => setActive(index + 1)}
                  className="group relative h-[176px] overflow-hidden rounded-lg border border-black/10 bg-black text-left shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase text-white/52">Preview 0{index + 2}</p>
                    <p className="mt-1 text-lg font-semibold">{item.title}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="effects" className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <p className="text-sm uppercase text-black/40">Interaction gallery</p>
            <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
              Real images, designed into interactive website moments.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {effects.map((item, index) => (
              <EffectCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#111111] px-5 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-sm uppercase text-white/45">Interactive lab</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
              Effects are shown through actual photo and design surfaces.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/60">
              Hover the controls to change the visual direction. The stage uses real imagery, layered panels, labels,
              and motion-ready composition instead of empty placeholders.
            </p>
            <div className="mt-10 grid gap-3">
              {labModes.map((mode, index) => (
                <button
                  key={mode}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  className={`rounded-lg border p-5 text-left transition ${active === index ? "border-white bg-white text-black" : "border-white/15 bg-white/[0.04] text-white hover:border-white/35"}`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-lg font-semibold">{mode}</span>
                    <span className="text-xs opacity-50">0{index + 1}</span>
                  </div>
                  <p className="mt-2 text-sm opacity-62">{effects[index].type}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="group relative min-h-[620px] overflow-hidden rounded-lg border border-white/15 bg-black">
            <img
              src={activeEffect.image}
              alt={activeEffect.title}
              className="absolute inset-0 h-full w-full object-cover opacity-78 transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/30 to-transparent" />
            <div className="absolute left-6 top-6 rounded-md bg-white/86 px-3 py-2 text-xs text-black backdrop-blur">
              {activeEffect.type}
            </div>
            <div className="absolute left-8 top-28 max-w-md rounded-lg border border-white/20 bg-white/16 p-6 text-white shadow-2xl backdrop-blur transition duration-700 group-hover:translate-x-5">
              <p className="text-xs uppercase text-white/50">Interaction mode</p>
              <h3 className="mt-3 text-4xl font-semibold">{activeEffect.title}</h3>
              <p className="mt-5 text-sm leading-6 text-white/68">{activeEffect.description}</p>
            </div>
            <div className="absolute bottom-8 right-8 grid w-[58%] gap-3 md:grid-cols-3">
              {effects.slice(0, 3).map((item) => (
                <div key={item.title} className="overflow-hidden rounded-lg border border-white/18 bg-white/14 backdrop-blur">
                  <img src={item.image} alt={item.title} className="h-28 w-full object-cover" />
                  <p className="p-3 text-sm font-semibold">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="works" className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase text-black/40">Design works</p>
              <h2 className="mt-4 text-4xl font-semibold md:text-6xl">Project pages filled with photo direction.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-black/55">
              Each case uses a large visual lead, supporting image, interaction intent, and clear design outcome.
            </p>
          </div>
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-white px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <p className="text-sm uppercase text-black/40">Visual wall</p>
            <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
              A dense gallery of real photos for portfolio atmosphere.
            </h2>
          </div>
          <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
            {gallery.map((src, index) => (
              <div
                key={src}
                className={`group relative overflow-hidden rounded-lg bg-black ${index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""}`}
              >
                <img
                  src={src}
                  alt={`Portfolio visual ${index + 1}`}
                  className="h-full w-full object-cover opacity-92 transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-lg bg-[#111111] text-white md:grid-cols-[1.08fr_0.92fr]">
          <div className="p-8 md:p-12">
            <p className="text-sm uppercase text-white/45">Available for interactive web design</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
              Let&apos;s build a site with images, motion, and taste.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/64">
              I can shape visual direction, page interaction, project galleries, product showcases, and motion-led
              landing pages that feel finished enough to present.
            </p>
            <a href="mailto:hello@hwazz.net" className="mt-10 inline-flex rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-[#e8e1d4]">
              Start a project
            </a>
          </div>
          <PhotoFrame
            src={image("photo-1521737604893-d14cc237f11d", 1400)}
            title="Interactive visual direction"
            label="Next project"
            className="min-h-[420px] rounded-none"
          />
        </div>
      </section>
    </main>
  );
}
