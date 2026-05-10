export default function Home() { 
   return ( 
     <main className="min-h-screen bg-[#0b0b0f] text-white"> 
       {/* Hero Section */} 
       <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center"> 
         <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/50"> 
           Interactive Portfolio 
         </p> 
 
         <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl"> 
           Creative Web Interaction 
           <br /> 
           Motion Design Showcase 
         </h1> 
 
         <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60 md:text-xl"> 
           A collection of interactive effects, motion experiments, product 
           showcases, and visual storytelling projects. 
         </p> 
 
         <div className="mt-10 flex flex-col gap-4 sm:flex-row"> 
           <a 
             href="#effects" 
             className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:scale-105" 
           > 
             Explore Effects 
           </a> 
 
           <a 
             href="#projects" 
             className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10" 
           > 
             View Projects 
           </a> 
         </div> 
       </section> 
 
       {/* Effects Section */} 
       <section id="effects" className="px-6 py-24"> 
         <div className="mx-auto max-w-6xl"> 
           <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/40"> 
             Interaction Effects 
           </p> 
 
           <h2 className="mb-12 text-4xl font-bold md:text-5xl"> 
             Motion experiments for modern websites 
           </h2> 
 
           <div className="grid gap-6 md:grid-cols-3"> 
             {[ 
               "Hover Card", 
               "Scroll Gallery", 
               "Magnetic Button", 
               "Video Preview", 
               "Parallax Section", 
               "Page Transition", 
             ].map((item) => ( 
               <div 
                 key={item} 
                 className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:bg-white/10" 
               > 
                 <div className="mb-8 h-40 rounded-2xl bg-gradient-to-br from-white/20 to-white/5" /> 
                 <h3 className="text-2xl font-semibold">{item}</h3> 
                 <p className="mt-3 text-sm leading-6 text-white/50"> 
                   Interactive demo for portfolio, product pages, and visual 
                   storytelling websites. 
                 </p> 
               </div> 
             ))} 
           </div> 
         </div> 
       </section> 
 
       {/* Projects Section */} 
       <section id="projects" className="px-6 py-24"> 
         <div className="mx-auto max-w-6xl"> 
           <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/40"> 
             Selected Projects 
           </p> 
 
           <h2 className="mb-12 text-4xl font-bold md:text-5xl"> 
             Portfolio projects and visual cases 
           </h2> 
 
           <div className="grid gap-6 md:grid-cols-2"> 
             {["FIFIJOY Product Showcase", "Social Media Motion Campaign"].map( 
               (item) => ( 
                 <div 
                   key={item} 
                   className="rounded-3xl border border-white/10 bg-white/5 p-8" 
                 > 
                   <div className="mb-8 h-64 rounded-2xl bg-gradient-to-br from-white/25 to-white/5" /> 
                   <h3 className="text-2xl font-semibold">{item}</h3> 
                   <p className="mt-3 text-sm leading-6 text-white/50"> 
                     A case study focused on visual design, storytelling, 
                     interaction, and content presentation. 
                   </p> 
                 </div> 
               ) 
             )} 
           </div> 
         </div> 
       </section> 
     </main> 
   ); 
 }