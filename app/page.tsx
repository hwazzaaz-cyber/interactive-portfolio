import Featured from "@/components/Featured";

const effects = [
   "Scroll Gallery",
   "Hover Preview",
   "Parallax Scene",
   "Video Cards",
   "Product Showcase",
   "Page Transition",
 ];

 const projects = [
   "FIFIJOY Product Visual",
   "DIY Book Nook Showcase",
   "Social Media Campaign",
   "Interactive Brand Landing",
 ];

 function Visual() {
   return (
     <div className="relative h-56 overflow-hidden rounded-3xl bg-[#eee8dd]">
       <div className="absolute left-6 top-8 h-20 w-32 rounded-2xl bg-white shadow-xl transition duration-500 group-hover:translate-x-6" />
       <div className="absolute right-8 top-20 h-28 w-20 rounded-2xl bg-black transition duration-500 group-hover:-translate-x-6" />
       <div className="absolute bottom-8 left-10 h-16 w-44 rounded-2xl bg-[#d6ccba] transition duration-500 group-hover:-translate-y-5" />
     </div>
   );
 }

 function Card({ title, i }: { title: string; i: number }) {
   return (
     <div className="group rounded-[2rem] border border-black/10 bg-white p-5 transition duration-500 hover:-translate-y-3 hover:shadow-2xl">
       <Visual />
       <p className="mt-6 text-xs uppercase tracking-[0.25em] text-black/35">
         Demo 0{i + 1}
       </p>
       <h3 className="mt-3 text-2xl font-semibold">{title}</h3>
       <p className="mt-4 text-sm leading-6 text-black/50">
         Interactive demo for portfolio, product pages, and visual storytelling.
       </p>
     </div>
   );
 }

 export default function Home() {
   return (
     <main className="min-h-screen bg-[#f7f5ef] text-black">
       <nav className="fixed top-0 z-50 flex w-full justify-between border-b border-black/10 bg-[#f7f5ef]/80 px-6 py-5 backdrop-blur-xl">
         <p className="text-sm font-semibold tracking-[0.25em]">PORTFOLIO</p>
         <div className="hidden gap-8 text-sm text-black/50 md:flex">
           <a href="#effects">Effects</a>
           <a href="#projects">Projects</a>
           <a href="#contact">Contact</a>
         </div>
       </nav>

       <section className="flex min-h-screen items-center px-6 pt-28">
         <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-center">
           <div>
             <p className="mb-5 text-sm uppercase tracking-[0.3em] text-black/40">
               Motion · Interaction · Visual
             </p>
             <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-8xl">
               Clean visual interactions for modern brands.
             </h1>
             <p className="mt-8 max-w-xl text-lg leading-8 text-black/55">
               A minimal portfolio for interactive effects, product showcases,
               motion experiments, and social media visual cases.
             </p>
             <div className="mt-10 flex gap-4">
               <a className="rounded-full bg-black px-7 py-4 text-sm font-semibold text-white" href="#effects">
                 Explore
               </a>
               <a className="rounded-full border border-black/15 px-7 py-4 text-sm font-semibold" href="#projects">
                 Projects
               </a>
             </div>
           </div>

           <div className="group rounded-[2rem] border border-black/10 bg-white p-5 shadow-2xl shadow-black/10 transition duration-500 hover:-translate-y-3">
             <div className="relative h-[480px] overflow-hidden rounded-[1.5rem] bg-[#ebe6da]">
               <span className="absolute left-6 top-6 rounded-full bg-white/80 px-4 py-2 text-xs">
                 Live Preview
               </span>
               <div className="absolute left-8 top-24 h-44 w-56 rounded-[2rem] bg-white shadow-xl transition duration-700 group-hover:translate-x-8" />
               <div className="absolute right-8 top-40 h-56 w-40 rounded-[2rem] bg-black transition duration-700 group-hover:-translate-x-8" />
               <div className="absolute bottom-12 left-14 h-40 w-72 rounded-[2rem] bg-white shadow-xl transition duration-700 group-hover:-translate-y-8" />
             </div>
           </div>
         </div>
       </section>

       <section id="effects" className="px-6 py-24">
         <div className="mx-auto max-w-7xl">
           <p className="mb-4 text-sm uppercase tracking-[0.3em] text-black/35">
             Interaction Gallery
           </p>
           <h2 className="mb-12 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
             Effects that make the website feel alive.
           </h2>
           <div className="grid gap-5 md:grid-cols-3">
             {effects.map((item, i) => (
               <Card key={item} title={item} i={i} />
             ))}
           </div>
         </div>
       </section>

       <Featured />

       <section id="projects" className="px-6 py-24">
         <div className="mx-auto max-w-7xl">
           <h2 className="mb-12 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
             Selected visual projects.
           </h2>
           <div className="grid gap-5 md:grid-cols-2">
             {projects.map((item, i) => (
               <Card key={item} title={item} i={i} />
             ))}
           </div>
         </div>
       </section>

       <section id="contact" className="px-6 py-24">
         <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-black p-10 text-white">
           <h2 className="text-4xl font-semibold md:text-6xl">
             Let us build memorable interactions.
           </h2>
         </div>
       </section>
     </main>
   );
 }