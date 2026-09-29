"use client";

import { useEffect, useRef, useState } from "react";



type Project = {

  id: string;

  no: string;

  title: string;

  category: string;

  badge: string;

  linkType: "Live Demo" | "GitHub";

  href: string;

  desc: string;

  highlight: string;

  tech: string[];

  gradient: string;

  filter: string[];

};



const PROJECTS: Project[] = [

  {

    id: "ai-task-bot",

    no: "01",

    title: "AI Task Bot",

    category: "AI & FULL-STACK APPLICATION",

    badge: "FEATURED",

    linkType: "Live Demo",

    href: "https://rexy-ai-agent.vercel.app/",

    desc: "An AI-powered task and team management system that combines natural-language AI operations with a modern project management dashboard.",

    highlight:

      "Manage people, departments, skills, projects and tasks while using AI to create, update, assign and manage work through natural-language commands.",

    tech: ["Next.js", "TypeScript", "Node.js", "Express.js", "Prisma", "SQLite", "AI"],

    gradient: "from-[#d6ff57] via-[#e8ff9a] to-[#b8ff00]",

    filter: ["AI", "Full-Stack"],

  },

  {

    id: "docmind",

    no: "02",

    title: "DocMind — RAG Knowledge Assistant",

    category: "AI / RAG APPLICATION",

    badge: "NEW",

    linkType: "Live Demo",

    href: "https://rexy-docmind.streamlit.app/",

    desc: "An AI-powered knowledge assistant that allows users to upload documents, build a searchable knowledge base and ask questions using Retrieval-Augmented Generation.",

    highlight:

      "Combines document ingestion, configurable chunking, local embeddings, ChromaDB, semantic and hybrid retrieval, BM25, reranking, citations and AI-generated answers in a modern knowledge-management interface.",

    tech: ["Python", "Streamlit", "RAG", "ChromaDB", "BM25", "Embeddings", "Ollama Cloud"],

    gradient: "from-[#c6c6ff] via-[#e2d8ff] to-[#a5a6ff]",

    filter: ["AI"],

  },

  {

    id: "meeting-intelligence",

    no: "03",

    title: "Meeting Intelligence",

    category: "AI / FULL-STACK APPLICATION",

    badge: "NEW",

    linkType: "Live Demo",

    href: "https://euroshub-ai-meeting.vercel.app/",

    desc: "A full-stack AI meeting intelligence platform that processes recorded audio and video meetings, generates timestamped transcripts, detects speakers and creates structured AI-powered meeting notes.",

    highlight:

      "Includes cloud transcription, speaker diarization, searchable transcripts, speaker renaming, summaries, action items, key decisions, discussion points, important dates, open issues and export support.",

    tech: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "Cloudflare AI", "Deepgram", "Ollama Cloud"],

    gradient: "from-[#ffd6a0] via-[#ffefc2] to-[#ffb86a]",

    filter: ["AI", "Full-Stack"],

  },

  {

    id: "fruit-detection",

    no: "04",

    title: "Fruit Detection Using Faster R-CNN",

    category: "COMPUTER VISION / MACHINE LEARNING",

    badge: "",

    linkType: "GitHub",

    href: "https://github.com/Moiz-Rajput78/fruit-detection-fasterrcnn",

    desc: "A computer-vision object detection system built with Faster R-CNN and ResNet-50 FPN to detect, classify, localize and count apples, bananas and oranges.",

    highlight:

      "Achieved 95.32% validation mAP@50 and 80.00% test mAP@50, with additional robustness testing and external-image evaluation.",

    tech: ["Python", "PyTorch", "Faster R-CNN", "ResNet-50 FPN", "OpenCV"],

    gradient: "from-[#ff9a9a] via-[#ffcfcf] to-[#ff6b6b]",

    filter: ["CV"],

  },

  {

    id: "ai-data-analyst",

    no: "05",

    title: "AI Data Analyst Agent",

    category: "AI / DATA ANALYTICS",

    badge: "",

    linkType: "GitHub",

    href: "https://github.com/Moiz-Rajput78/AI-Data-Analyst",

    desc: "An agentic AI data analysis system that allows users to ask natural-language questions about CSV data and receive grounded, evidence-based analytical insights.",

    highlight:

      "Uses Qwen through Hugging Face as the analytical orchestrator, dynamically selects tools for Pandas computations, statistical analysis and chart generation, and validates results before producing structured answers.",

    tech: ["Python", "Pandas", "Qwen", "Hugging Face", "Agentic AI", "Data Analytics"],

    gradient: "from-[#a0ffe1] via-[#d0fff1] to-[#57ffbf]",

    filter: ["AI"],

  },

  {

    id: "expense-tracker",

    no: "06",

    title: "Expense Tracker",

    category: "WEB APPLICATION",

    badge: "",

    linkType: "GitHub",

    href: "https://github.com/Moiz-Rajput78/Expense-tracker",

    desc: "A complete expense management application that allows users to add, edit, delete and filter expenses.",

    highlight: "Clean CRUD with filters, SQLite persistence and Tailwind UI.",

    tech: ["Python", "Flask", "SQLite", "Tailwind"],

    gradient: "from-[#d6d6d6] via-[#efefef] to-[#b9b9b9]",

    filter: ["Full-Stack"],

  },

  {

    id: "todo-app",

    no: "07",

    title: "Todo Application",

    category: "WEB APPLICATION",

    badge: "",

    linkType: "GitHub",

    href: "https://github.com/Moiz-Rajput78/ToDo-Application.",

    desc: "A task management application where users can create, complete and delete their daily tasks.",

    highlight: "Minimal task flow focused on speed and clarity.",

    tech: ["Python", "Flask", "SQLite"],

    gradient: "from-[#e8e8e8] via-[#f5f5f5] to-[#cfcfcf]",

    filter: ["Full-Stack"],

  },

  {

    id: "auth-system",

    no: "08",

    title: "Authentication System",

    category: "AUTHENTICATION",

    badge: "",

    linkType: "GitHub",

    href: "https://github.com/Moiz-Rajput78/flask-auth-lite",

    desc: "A login and registration system with secure user authentication and database integration.",

    highlight: "Secure session handling with hashed passwords and SQLite integration.",

    tech: ["Python", "Flask", "SQLite"],

    gradient: "from-[#cbd5ff] via-[#e8ecff] to-[#9ab0ff]",

    filter: ["Full-Stack"],

  },

];



const SKILLS = [

  { code: "PY", name: "Python", sub: "Programming Language" },

  { code: "FL", name: "Flask", sub: "Web Framework" },

  { code: "JS", name: "JavaScript", sub: "Programming" },

  { code: "TS", name: "TypeScript", sub: "Typed JavaScript" },

  { code: "NX", name: "Next.js", sub: "React Framework" },

  { code: "EX", name: "Express", sub: "Backend" },

  { code: "PR", name: "Prisma", sub: "ORM" },

  { code: "AI", name: "AI Integration", sub: "LLMs & RAG" },

  { code: "HT", name: "HTML", sub: "Web Structure" },

  { code: "CS", name: "CSS", sub: "Web Styling" },

  { code: "DB", name: "SQLite", sub: "Database" },

  { code: "GI", name: "Git", sub: "Version Control" },

  { code: "GH", name: "GitHub", sub: "Code Hosting" },

  { code: "CV", name: "Vision", sub: "OpenCV / PyTorch" },

];



export default function App() {

  const [mounted, setMounted] = useState(false);

  const [isDark, setIsDark] = useState(false);

  const [filter, setFilter] = useState<"All" | "AI" | "Full-Stack" | "CV">("All");

  const [progress, setProgress] = useState(0);

  const [x, setX] = useState(0);



  const workSectionRef = useRef<HTMLElement>(null);

  const trackRef = useRef<HTMLDivElement>(null);



  const filtered = PROJECTS.filter((p) => {

    if (filter === "All") return true;

    return p.filter.includes(filter);

  });



  useEffect(() => {

    setMounted(true);

    const saved = localStorage.getItem("moiz-theme");

    if (saved) {

      setIsDark(saved === "dark");

    } else {

      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      setIsDark(prefersDark);

    }

  }, []);



  useEffect(() => {

    if (!mounted) return;

    localStorage.setItem("moiz-theme", isDark ? "dark" : "light");

  }, [isDark, mounted]);



  useEffect(() => {

    if (!mounted) return;

    let raf = 0;

    const onScroll = () => {

      cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {

        const section = workSectionRef.current;

        const track = trackRef.current;

        if (!section || !track) return;

        const top = section.offsetTop;

        const height = section.offsetHeight;

        const scrollY = window.scrollY;

        const distance = height - window.innerHeight;

        if (distance <= 0) {

          setProgress(0);

          setX(0);

          return;

        }

        const p = Math.min(Math.max((scrollY - top) / distance, 0), 1);

        setProgress(p);

        const trackW = track.scrollWidth;

        const maxX = Math.max(trackW - window.innerWidth + 100, 0);

        setX(p * maxX);

      });

    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    window.addEventListener("resize", onScroll);

    return () => {

      window.removeEventListener("scroll", onScroll);

      window.removeEventListener("resize", onScroll);

      cancelAnimationFrame(raf);

    };

  }, [mounted, filtered.length]);



  if (!mounted) {

    return <div className="min-h-screen bg-[#fafaf7]" />;

  }



  const bg = isDark ? "bg-[#0a0a0b] text-[#f5f5f0]" : "bg-[#fafaf7] text-[#111111]";

  const border = isDark ? "border-[#242424]" : "border-[#e9e6e0]";

  const muted = isDark ? "text-[#9a9a96]" : "text-[#7a776f]";

  const cardBg = isDark ? "bg-[#151515]" : "bg-white";

  const cardBorder = isDark ? "border-[#262626]" : "border-[#ece8e1]";



  return (

    <div

      className={`${bg} min-h-screen font-[JetBrains_Mono] antialiased selection:bg-[#d6ff57] selection:text-black overflow-x-clip`}

      suppressHydrationWarning

    >

      <style>{`

        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .font-display{ font-family: 'Syne', sans-serif; }

        .font-mono{ font-family: 'JetBrains Mono', monospace; }

        ::-webkit-scrollbar{ width:6px; height:6px; }

        ::-webkit-scrollbar-thumb{ background:#333; border-radius:10px; }

        html{ scroll-behavior:smooth; }

      `}</style>



      <div

        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.035] mix-blend-multiply"

        style={{

          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,

        }}

      />



      <nav

        className={`sticky top-0 z-50 border-b ${border} backdrop-blur-xl ${isDark ? "bg-[#0a0a0b]/80" : "bg-[#fafaf7]/80"}`}

      >

        <div className="mx-auto w-full max-w-none px-2 md:px-[40px] h-[64px] flex items-center justify-between">

          <div className="flex items-center gap-8">

            <a href="#" className="flex items-center gap-3">
              <img
                src="/images/mr-logo.png"
                alt="MR logo"
                className="w-10 h-10 rounded-[10px] object-cover"
              />
              <span className="font-display font-bold text-[18px] tracking-tight">&lt;Moiz/&gt;</span>
            </a>

            <div className="hidden md:flex items-center gap-6 text-[12px] tracking-[0.12em] uppercase font-medium">

              {["Work", "Skills", "About", "Education", "Contact"].map((s) => (

                <a key={s} href={`#${s.toLowerCase()}`} className={`hover:opacity-60 transition ${muted} hover:text-inherit`}>

                  {s}

                </a>

              ))}

            </div>

          </div>

          <div className="flex items-center gap-3">

            <span className="hidden md:inline text-[11px] uppercase tracking-widest px-3 py-1 rounded-full border bg-[#d6ff57] text-black font-bold">

              Available 2026

            </span>

            <button

              onClick={() => setIsDark((v) => !v)}

              className={`w-9 h-9 rounded-full border ${cardBorder} ${cardBg} grid place-items-center text-[14px] hover:scale-105 transition`}

              aria-label="Toggle theme"

            >

              {isDark ? "☀" : "☾"}

            </button>

          </div>

        </div>

      </nav>



      <section className="relative z-10 mx-auto w-full max-w-none px-2 md:px-[40px] pt-10 md:pt-20 pb-12 md:pb-16 grid md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12 items-center">

        <div>

          <div className={`inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase border rounded-full px-3 py-1.5 shadow-sm ${isDark ? "border-[#2a2a2a] bg-[#151515] text-[#f5f5f0]" : "border-[#e5e5e3] bg-white text-[#111111]"}`}>

            <span className="w-2 h-2 rounded-full bg-[#00d26a] animate-pulse" />

            Available for opportunities • 2026

          </div>

          <h1 className="font-display font-[800] leading-[0.9] tracking-[-0.04em] text-[42px] md:text-[72px] mt-6">

            Hi, I'm

            <br />

            <span>Moiz.</span>

          </h1>

          <p className={`mt-6 max-w-[520px] text-[15px] leading-[1.7] ${isDark ? "text-[#9a9a96]" : "text-[#6a6863]"}`}>

            Python, Full-Stack & AI Developer. I build clean, modern and user-friendly web applications using Python, Flask, Next.js, TypeScript and <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full border text-[11px] font-medium tracking-wide ml-1 ${isDark ? "bg-white/10 border-white/15 text-[#f5f5f0]" : "bg-[#f1f1ef] border-black/10 text-[#4a4844]"}`}>AI-powered technologies</span>.

          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            <a href="#work" className={`h-[46px] px-6 rounded-full font-medium text-[13px] tracking-wide inline-flex items-center gap-2 hover:opacity-90 transition shadow-sm ${isDark ? "bg-white text-black" : "bg-[#111] text-white"}`}>

              View Projects →

            </a>

            <a href="#contact" className={`h-[46px] px-6 rounded-full border font-medium text-[13px] inline-flex items-center gap-2 hover:-translate-y-[1px] transition shadow-sm ${isDark ? "border-[#2a2a2a] bg-[#151515] text-[#f5f5f0]" : "border-[#e5e5e3] bg-white text-[#111111]"}`}>

              Let's Talk

            </a>

            <div className="flex items-center gap-2 ml-1">

              <a href="https://github.com/Moiz-Rajput78" target="_blank" rel="noopener" className={`w-9 h-9 rounded-full border grid place-items-center text-[11px] font-bold transition ${isDark ? "border-white/10 text-white hover:bg-white hover:text-black" : "border-black/10 text-black hover:bg-black hover:text-white"}`}>G</a>

              <a href="https://www.linkedin.com/in/moiz-rajput-4a84a0429/" target="_blank" rel="noopener" className={`w-9 h-9 rounded-full border grid place-items-center text-[11px] font-bold transition ${isDark ? "border-white/10 text-white hover:bg-white hover:text-black" : "border-black/10 text-black hover:bg-black hover:text-white"}`}>L</a>

              <a href="mailto:moiz29943@email.com" className={`w-9 h-9 rounded-full border grid place-items-center text-[11px] font-bold transition ${isDark ? "border-white/10 text-white hover:bg-white hover:text-black" : "border-black/10 text-black hover:bg-black hover:text-white"}`}>M</a>

            </div>

          </div>

          <div className={`mt-10 pt-8 border-t flex gap-10 ${isDark ? "border-white/10" : "border-black/5"}`}>

            <div><div className="font-display font-bold text-[28px] leading-none">8+</div><div className="text-[11px] uppercase tracking-wide opacity-60 mt-1">Projects</div></div>

            <div><div className="font-display font-bold text-[28px] leading-none">95.32%</div><div className="text-[11px] uppercase tracking-wide opacity-60 mt-1">mAP@50</div></div>

            <div><div className="font-display font-bold text-[28px] leading-none">2026</div><div className="text-[11px] uppercase tracking-wide opacity-60 mt-1">Available</div></div>

          </div>

        </div>

        <div className="relative mx-auto md:ml-auto w-full max-w-[440px]">

          <div className={`relative rounded-[20px] border shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden ${isDark ? "border-[#2a2a2a] bg-[#151515] text-[#f5f5f0]" : "border-[#e5e5e3] bg-white text-[#111111]"}`}>

            <div className={`flex items-center justify-between px-5 h-[44px] border-b ${isDark ? "border-[#222] bg-[#0f0f0f]" : "border-[#f0f0ed] bg-[#fafaf7]"}`}>

              <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-[#ff5f57]" /><span className="w-3 h-3 rounded-full bg-[#ffbd2e]" /><span className="w-3 h-3 rounded-full bg-[#28ca42]" /></div>

              <div className="text-[12px] font-mono opacity-60">moiz.py — Studio</div>

              <div className="w-16" />

            </div>

            <div className="p-6 font-mono text-[12px] leading-[1.7]">

              <div className="opacity-40"># building things that solve real problems</div>

              <div className="mt-2"><span className="text-[#d65cff]">class</span> <span className="font-bold">Developer</span>:</div>

              <div className="ml-4 mt-1"><span className="text-[#6a9bff]">def</span> <span className="font-bold">__init__</span>(self):</div>

              <div className="ml-8">self.stack = [</div>

              <div className="ml-12 text-[#00a67d]">'Python', 'Flask',</div>

              <div className="ml-12 text-[#00a67d]">'TypeScript',</div>

              <div className="ml-8">]</div>

              <div className="ml-4 mt-3"><span className="text-[#6a9bff]">def</span> <span className="font-bold">build</span>(self, idea):</div>

              <div className="ml-8"><span className="text-[#d65cff]">return</span> self.ship(idea)</div>

              <div className="mt-6 flex items-center gap-2 text-[11px] opacity-50"><span>⌘ K → ship</span><span>• 3 files changed</span></div>

            </div>

          </div>

          <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 z-20">

            <div className="relative w-[72px] h-[72px] md:w-[80px] md:h-[80px] rounded-full border-[4px] border-[#d6ff57] shadow-[0_8px_24px_rgba(0,0,0,0.15)] overflow-hidden bg-[#222]">

              <div className="w-full h-full bg-gradient-to-br from-[#333] to-[#111] grid place-items-center text-white font-display font-extrabold text-[24px]">MR</div>

              <img src="/images/Pic.png" alt="Moiz" className="absolute inset-0 w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />

              <span className={`absolute bottom-0 right-0 w-4 h-4 rounded-full bg-[#00d26a] border-2 ${isDark ? "border-[#151515]" : "border-white"}`} />

            </div>

          </div>

          <div className={`absolute -right-2 md:-right-4 top-[12%] z-20 rounded-full px-3 py-1.5 border shadow-[0_8px_20px_rgba(0,0,0,0.12)] flex items-center gap-2 text-[11px] font-bold ${isDark ? "border-white/10 bg-white text-black" : "border-black/10 bg-black text-white"}`}>

            <span className={`w-5 h-5 rounded-full grid place-items-center text-[9px] ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>PY</span> Python Expert

          </div>

          <div className={`absolute -left-2 md:-left-6 top-[48%] z-20 rounded-full px-3 py-1.5 border shadow-[0_8px_20px_rgba(0,0,0,0.12)] flex items-center gap-2 text-[11px] font-bold ${"bg-[#d6ff57] text-black border-black/10"}`}>

            <span className="w-2 h-2 rounded-full bg-[#00d26a] animate-pulse" /> AI Integration Live

          </div>

          <div className={`absolute -right-1 md:-right-2 bottom-[12%] z-20 rounded-full px-3 py-1.5 border shadow-[0_8px_20px_rgba(0,0,0,0.12)] text-[10px] font-bold tracking-wide ${isDark ? "bg-white text-black border-black/10" : "bg-[#111] text-white border-white/10"}`}>

            TS • Next.js • RAG

          </div>

        </div>

      </section>



      <section id="work" ref={workSectionRef} className="relative z-10" style={{ height: `${Math.max(filtered.length * 70, 280)}vh` }}>

        <div className="sticky top-[70px] h-[calc(100vh-70px)] flex flex-col overflow-hidden">

          <div className={`border-y ${border} ${isDark ? "bg-[#0f0f0f]" : "bg-[#f4f1eb]"} `}>

            <div className="mx-auto w-full max-w-none px-2 md:px-[40px] py-6 md:py-7 flex flex-wrap items-start justify-between gap-6">

              <div>

                <div className="flex items-center gap-3">

                  <span className="text-[11px] tracking-[0.22em] uppercase font-bold opacity-60">Selected Work 2026</span>

                  <span className={`h-[1px] w-12 ${isDark ? "bg-[#333]" : "bg-[#ddd]"}`} />

                </div>

                <h2 className="font-display font-bold text-[28px] md:text-[42px] tracking-[-0.02em] leading-[0.95] mt-2">

                  Featured Projects

                  <span className={`ml-3 text-[12px] font-mono font-normal tracking-wide ${muted}`}>— {filtered.length} builds</span>

                </h2>

              </div>

              <div className="flex flex-wrap items-center gap-2">

                {(["All", "AI", "Full-Stack", "CV"] as const).map((f) => (

                  <button

                    key={f}

                    onClick={() => setFilter(f)}

                    className={`h-8 px-4 rounded-full border text-[11px] uppercase tracking-widest font-semibold transition ${

                      filter === f ? "bg-[#111] text-white border-[#111] dark:bg-white dark:text-black" : `${cardBg} ${cardBorder} ${muted} hover:text-inherit`

                    }`}

                  >

                    {f}

                  </button>

                ))}

                <div className={`ml-3 hidden md:flex items-center gap-2 text-[11px] ${muted}`}>

                  <span className="w-16 h-[2px] bg-[#d6ff57] inline-block" />

                  Scroll ↓ to explore

                </div>

              </div>

            </div>

            <div className={`h-[3px] w-full ${isDark ? "bg-[#1c1c1c]" : "bg-[#e8e4de]"}`}>

              <div className="h-full bg-[#111] dark:bg-[#d6ff57] transition-[width] duration-100" style={{ width: `${progress * 100}%` }} />

            </div>

            <div className="mx-auto w-full max-w-none px-2 md:px-[40px] py-2 flex items-center justify-between text-[10px] tracking-widest uppercase">

              <span className={muted}>{String(Math.round(progress * 100)).padStart(2, "0")}% • {Math.round(x)}px</span>

              <span className={muted}>{filtered.length * 100}vh pinned</span>

            </div>

          </div>



          <div className="flex-1 relative overflow-hidden flex items-center">

            <div ref={trackRef} className="flex gap-6 px-2 md:px-[40px] will-change-transform" style={{ transform: `translateX(${-x}px)`, transition: "transform 0.15s linear" }}>

              {filtered.map((p) => (

                <article

                  key={p.id}

                  className={`group shrink-0 w-[340px] md:w-[400px] h-[440px] rounded-[24px] border ${cardBorder} ${cardBg} overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-300`}

                >

                  <div className={`relative h-[160px] bg-gradient-to-br ${p.gradient} p-5`}>

                    <div className="w-11 h-11 rounded-full bg-white text-black border border-black/15 grid place-items-center font-display font-bold text-[13px] shadow-md z-20">

                      {p.no}

                    </div>

                    <div className="absolute bottom-4 left-5 right-5 flex gap-1.5">

                      <span className="w-8 h-[3px] rounded-full bg-black/20" />

                      <span className="w-3 h-[3px] rounded-full bg-black/10" />

                      <span className="w-3 h-[3px] rounded-full bg-black/10" />

                    </div>

                  </div>

                  <div className="p-6 md:p-7 flex flex-col flex-1">

                    <div className="flex items-start justify-between gap-3">

                      <div className="text-[10px] tracking-[0.18em] uppercase font-semibold opacity-60 leading-[1.2]">{p.category}</div>

                      <a

                        href={p.href}

                        target="_blank"

                        rel="noopener"

                        className={`shrink-0 text-[10px] tracking-widest uppercase font-bold px-3.5 py-1.5 rounded-full border shadow-md transition inline-flex items-center gap-1 z-10 ${

                          p.linkType === "Live Demo" ? "bg-black text-white border-black hover:bg-[#222] dark:bg-white dark:text-black dark:border-white" : "bg-white text-black border-black/15 hover:bg-black hover:text-white dark:bg-white dark:text-black dark:hover:bg-[#d6ff57] dark:hover:text-black"

                        }`}

                      >

                        {p.linkType} ↗

                      </a>

                    </div>

                    <h3 className="font-display font-bold text-[20px] md:text-[22px] leading-[1.05] tracking-[-0.02em] mt-3">{p.title}</h3>

                    <p className={`mt-3 text-[12.5px] leading-[1.6] ${muted} line-clamp-3`}>{p.desc}</p>

                    <div className={`mt-3 text-[11px] leading-[1.5] border-l-2 border-[#d6ff57] pl-3 ${isDark ? "text-[#c8c8c4]" : "text-[#3a3a38]"}`}>{p.highlight}</div>

                    <div className="mt-auto pt-5 flex flex-wrap gap-1.5">

                      {p.tech.map((t) => (

                        <span key={t} className={`text-[10px] px-2.5 py-1 rounded-full border ${cardBorder} ${isDark ? "bg-[#1a1a1a]" : "bg-[#f7f5f0]"} font-medium`}>

                          {t}

                        </span>

                      ))}

                    </div>

                  </div>

                </article>

              ))}

              <div className={`shrink-0 w-[300px] h-[440px] rounded-[24px] border border-dashed ${cardBorder} grid place-items-center p-8 text-center ${muted}`}>

                <div>

                  <div className="font-display text-[20px] font-bold tracking-tight text-inherit">More in 2026</div>

                  <div className="mt-2 text-[12px] leading-[1.6]">8 projects shipped • building RAG, vision & full-stack tools daily.</div>

                  <a href="#contact" className="mt-5 inline-flex h-9 px-4 rounded-full bg-[#d6ff57] text-black text-[11px] font-bold uppercase tracking-widest items-center">

                    Let&apos;s build →

                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>



      <section id="skills" className="relative z-10 border-t border-b mt-0">

        <div className="mx-auto w-full max-w-none px-2 md:px-[40px] py-16 md:py-24">

          <div className="flex items-baseline gap-4">

            <span className="font-mono text-[12px] tracking-widest uppercase opacity-50">02</span>

            <h2 className="font-display font-bold text-[28px] md:text-[40px] tracking-[-0.02em]">Skills & Stack</h2>

          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">

            {SKILLS.map((s) => (

              <div key={s.code} className={`rounded-[18px] border ${cardBorder} ${cardBg} p-4 md:p-5 hover:-translate-y-[1px] hover:shadow-sm transition`}>

                <div className="w-9 h-9 rounded-full bg-[#111] text-white dark:bg-white dark:text-black grid place-items-center font-bold text-[12px]">{s.code}</div>

                <div className="mt-4 font-display font-semibold text-[14px] leading-tight">{s.name}</div>

                <div className={`mt-1 text-[10px] uppercase tracking-wide ${muted}`}>{s.sub}</div>

              </div>

            ))}

          </div>

        </div>

      </section>



      <section id="about" className={`relative z-10 ${isDark ? "bg-[#0f0f0f]" : "bg-[#f6f2eb]"} border-b ${border}`}>

        <div className="mx-auto w-full max-w-none px-2 md:px-[40px] py-16 md:py-24 grid md:grid-cols-[0.9fr_1.1fr] gap-10">

          <div>

            <div className="flex items-baseline gap-4">

              <span className="font-mono text-[12px] tracking-widest uppercase opacity-50">01</span>

              <h2 className="font-display font-bold text-[28px] md:text-[40px] tracking-[-0.02em] leading-[0.95]">About Me</h2>

            </div>

            <h3 className="font-display font-[700] text-[24px] md:text-[32px] leading-[1.05] tracking-[-0.02em] mt-8 max-w-[18ch]">

              Building things that solve real problems.

            </h3>

          </div>

          <div>

            <p className={`text-[14px] leading-[1.8] ${muted}`}>

              I&apos;m Moiz — Python, Full-Stack & AI developer based in Pakistan. I love turning ideas into clean, usable products. From Flask apps and Next.js dashboards to RAG assistants and vision models, I focus on practical tools that people actually use.

            </p>

            <p className={`text-[14px] leading-[1.8] ${muted} mt-4`}>

              My approach is simple: clean code, clear UI, and shipping fast. I work across backend, frontend and AI — Python, TypeScript, Prisma, Tailwind, PyTorch and LLMs — to build modern apps that feel fast and thoughtful.

            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">

              {[

                { k: "01", t: "Clean Code", d: "Readable, maintainable, production-ready." },

                { k: "02", t: "Problem Solving", d: "I break complex problems into simple flows." },

                { k: "03", t: "AI & Automation", d: "RAG, agents and vision to reduce manual work." },

              ].map((c) => (

                <div key={c.k} className={`rounded-[16px] border ${cardBorder} ${cardBg} p-5`}>

                  <div className="text-[11px] tracking-widest opacity-50">{c.k}</div>

                  <div className="font-display font-bold mt-2">{c.t}</div>

                  <div className={`text-[11px] mt-2 leading-[1.6] ${muted}`}>{c.d}</div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>



      <section id="education" className="relative z-10 border-b">

        <div className="mx-auto w-full max-w-none px-2 md:px-[40px] py-16 md:py-24">

          <div className="flex items-baseline gap-4">

            <span className="font-mono text-[12px] tracking-widest uppercase opacity-50">03</span>

            <h2 className="font-display font-bold text-[28px] md:text-[40px] tracking-[-0.02em]">Education</h2>

          </div>

          <div className="mt-10 space-y-4">

            {[

              { year: "2026 — Present", title: "Bachelor of Science in Computer Science", place: "CAS University • UoG • Currently Studying", desc: "Focused on AI, full-stack development and computer vision.", active: true },

              { year: "2021 — 2023", title: "Intermediate • Pre-Engineering", place: "KIPS College", desc: "Pre-engineering foundation with mathematics and physics.", active: false },

              { year: "2019 — 2021", title: "Matriculation • Computer Science", place: "ASF Public School", desc: "Early focus on programming and CS fundamentals.", active: false },

            ].map((e) => (

              <div key={e.year} className={`rounded-[20px] border ${cardBorder} ${cardBg} p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-4 justify-between`}>

                <div className="flex gap-4 items-start">

                  <div className={`mt-1 text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full border font-bold ${e.active ? "bg-[#d6ff57] text-black border-[#d6ff57]" : `${cardBg} ${cardBorder} ${muted}`}`}>

                    {e.year}

                  </div>

                  <div>

                    <div className="font-display font-bold text-[16px] md:text-[18px]">{e.title}</div>

                    <div className={`text-[11px] mt-1 tracking-wide ${muted}`}>{e.place}</div>

                    <div className={`text-[12px] mt-2 ${muted}`}>{e.desc}</div>

                  </div>

                </div>

                {e.active && <div className="text-[11px] tracking-widest uppercase font-bold">● Studying</div>}

              </div>

            ))}

          </div>

        </div>

      </section>



      <section id="contact" className="relative z-10">

        <div className="mx-auto w-full max-w-none px-2 md:px-[40px] py-16 md:py-28">

          <div className={`rounded-[28px] border ${cardBorder} ${isDark ? "bg-[#121212]" : "bg-[#111] text-[#f7f5f0]"} p-8 md:p-14 flex flex-col md:flex-row justify-between gap-10`}>

            <div className="max-w-[520px]">

              <div className="text-[11px] tracking-[0.22em] uppercase opacity-60">Get In Touch — 2026</div>

              <h2 className="font-display font-bold text-[36px] md:text-[56px] leading-[0.9] tracking-[-0.03em] mt-4">

                Have a project

                <br />

                in mind?

              </h2>

              <p className="mt-5 text-[14px] leading-[1.7] opacity-70">Let&apos;s build something great together.</p>

              <div className="mt-8 flex flex-wrap gap-3">

                <a href="mailto:moiz29943@email.com" className="h-[46px] px-6 rounded-full bg-[#d6ff57] text-black font-bold text-[13px] inline-flex items-center gap-2 hover:opacity-90 transition">

                  moiz29943@email.com ↗

                </a>

                <a href="https://github.com/Moiz-Rajput78" target="_blank" rel="noopener" className="h-[46px] px-6 rounded-full border border-white/15 bg-white/5 font-medium text-[13px] inline-flex items-center gap-2 hover:bg-white/10 transition">

                  GitHub

                </a>

              </div>

            </div>

            <div className="md:w-[320px] space-y-4">

              <div className="rounded-[18px] bg-white/5 border border-white/10 p-5">

                <div className="text-[11px] tracking-widest uppercase opacity-60">Email</div>

                <a href="mailto:moiz29943@email.com" className="mt-2 block font-medium text-[14px] break-all hover:underline">

                  moiz29943@email.com

                </a>

              </div>

              <div className="rounded-[18px] bg-white/5 border border-white/10 p-5">

                <div className="text-[11px] tracking-widest uppercase opacity-60">Socials — Exact Links</div>

                <div className="mt-3 space-y-2 text-[13px]">

                  <a href="https://github.com/Moiz-Rajput78" target="_blank" rel="noopener" className="flex justify-between hover:opacity-80">

                    <span>GitHub</span>

                    <span className="opacity-60">↗</span>

                  </a>

                  <a href="https://www.linkedin.com/in/moiz-rajput-4a84a0429/" target="_blank" rel="noopener" className="flex justify-between hover:opacity-80">

                    <span>LinkedIn</span>

                    <span className="opacity-60">↗</span>

                  </a>

                  <a href="mailto:moiz29943@email.com" className="flex justify-between hover:opacity-80">

                    <span>Email</span>

                    <span className="opacity-60">↗</span>

                  </a>

                </div>

              </div>

            </div>

          </div>

          <div className={`mt-12 pt-8 border-t ${border} flex flex-col md:flex-row justify-between gap-6`}>

            <div>

              <div className="flex items-center gap-2 font-display font-bold text-[16px]">

                <img
                  src="/images/mr-logo.png"
                  alt="MR logo"
                  className="w-8 h-8 rounded-[8px] object-cover"
                />

                &lt;Moiz/&gt;

              </div>

              <div className={`mt-2 text-[11px] ${muted}`}>Python, Full-Stack & AI Developer • 2026</div>

            </div>

            <div className="flex gap-6 text-[12px]">

              <a href="https://github.com/Moiz-Rajput78" target="_blank" rel="noopener" className="hover:underline">

                GitHub

              </a>

              <a href="https://www.linkedin.com/in/moiz-rajput-4a84a0429/" target="_blank" rel="noopener" className="hover:underline">

                LinkedIn

              </a>

              <a href="mailto:moiz29943@email.com" className="hover:underline">

                Email

              </a>

            </div>

            <div className={`text-[11px] ${muted}`}>© 2026 Moiz Rajput • Built with Next.js + Tailwind</div>

          </div>

        </div>

      </section>



      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 md:hidden">

        <div className={`rounded-full border ${cardBorder} ${cardBg} shadow-[0_10px_30px_rgba(0,0,0,0.15)] px-3 py-2 flex items-center gap-2`}>

          <div className="w-16 h-[2px] bg-[#111] dark:bg-white rounded-full relative overflow-hidden">

            <div className="absolute left-0 top-0 h-full bg-[#d6ff57]" style={{ width: `${progress * 100}%` }} />

          </div>

          <span className="text-[10px] tracking-widest uppercase font-bold">Work {String(Math.round(progress * 100)).padStart(2, "0")}%</span>

        </div>

      </div>

    </div>

  );

}
