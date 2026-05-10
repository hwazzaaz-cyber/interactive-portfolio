"use client";
 import { useState } from "react";

 const demos = [
   ["Scroll Gallery", "Layered images move while users scroll."],
   ["Hover Preview", "Cards react when the cursor enters."],
   ["Parallax Scene", "Soft depth for storytelling pages."],
   ["Video Cards", "A media-first layout for short videos."],
 ];

 export default function Featured() {
   const [active, setActive] = useState(0);
   const cur = demos[active];

   return (
     <section id="featured" className="px-6 py-24">
       <div className="mx-auto max-w-7xl">
         <p className="mb-4 text-sm uppercase tracking-[0.3em] text-black/35">
           Featured Interaction
         </p>

         <h2 className="mb-12 max-w-4xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
           Hover a demo to change the preview.
         </h2>

         <div className="grid gap-6 md:grid-cols-[0.75fr_1.25fr]">
           <div className="grid gap-4">
             {demos.map((item, i) => (
               <button
                 key={item[0]}
                 onMouseEnter={() => setActive(i)}
                 className={`rounded-3xl border p-6 text-left transition duration-300 ${
                   active === i
                     ? "border-black bg-black text-white"
                     : "border-black/10 bg-white hover:-translate-y-1"
                 }`}
               >
                 <p className="text-xs uppercase tracking-[0.25em] opacity-50">
                   Demo 0{i + 1}
                 </p>
                 <h3 className="mt-3 text-2xl font-semibold">{item[0]}</h3>
                 <p className="mt-3 text-sm leading-6 opacity-60">{item[1]}</p>
               </button>
             ))}
           </div>

           <div className="group relative h-[520px] overflow-hidden rounded-[2rem] border border-black/10 bg-[#e8e0d3] shadow-2xl shadow-black/10">
             <div className="absolute left-6 top-6 z-10 rounded-full bg-white/80 px-4 py-2 text-xs backdrop-blur">
               {cur[0]}
             </div>

             <div className="absolute left-10 top-24 h-64 w-48 rounded-[2rem] bg-white shadow-2xl transition duration-700 group-hover:translate-x-10 group-hover:-rotate-6" />
             <div className="absolute left-1/2 top-16 h-80 w-56 rounded-[2rem] bg-black shadow-2xl transition duration-700 group-hover:-translate-y-6 group-hover:rotate-6" />
             <div className="absolute bottom-16 right-12 h-52 w-72 rounded-[2rem] bg-white shadow-2xl transition duration-700 group-hover:-translate-x-10 group-hover:translate-y-4" />

             <div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-white/80 p-5 backdrop-blur-xl">
               <p className="text-sm font-semibold">Live Motion Preview</p>
               <p className="mt-2 text-xs leading-5 text-black/50">{cur[1]}</p>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 }