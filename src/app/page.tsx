// app/page.tsx
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrambleText from "@/components/ScrambleText";
import { useState } from "react";
import Script from "next/script";

const skills = [
  // Core
  "Python",
  "Java",
  "JavaScript",

  // ML / DL
  "PyTorch",
  "TensorFlow",
  "Keras",
  "Scikit-learn",

  // Data / NLP
  "NumPy",
  "Pandas",
  "Matplotlib",
  "NLTK",

  // GenAI / LLM
  "LangChain",
  "LangGraph",
  "RAG",
  "Pinecone",
  "Groq API",
  "Ollama",
  "CrewAI",

  // Computer Vision
  "OpenCV",
  "MediaPipe",
  "Kalman Filter",
  "CSRT Tracking",
  "ORB Matching",

  // Backend / Web
  "FastAPI",
  "Next.js",
  "React",
  "Git",
  "WebSockets",
  "MongoDB",

  // MLOps / Tools
  "MLflow",
  "Docker",
  "Podman",
  "Kubernetes",
  
];

const projects = [
  {
    title: "ParaTrackNet",
    desc: "Real-time parathyroid gland detection & tracking during ICG-assisted thyroidectomy for surgical guidance.",
    tags: ["CSRT Tracking", "ORB Matching", "Kalman Filter", "IoU Evaluation"],
    github: "https://github.com/liyanambava/AI-Powered-Real-Time-Parathyroid-Gland-Detection-Tracking-During-ICG-Assisted-Thyroidectomy",
    //live: "#",
  },

  {
    title: "MedAssist-AI",
    desc: "Streamlit-based medical assistant combining image analysis + symptom inputs with risk-level assessment and explanations.",
    tags: ["Streamlit", "Ollama", "Computer Vision", "LLM Reasoning"],
    github: "https://github.com/liyanambava/MedAssist-AI",
    //live: "#",
  },

  {
    title: "Multi-Agent Business Strategy Generator",
    desc: "A local multi-agent strategy generator that produces SWOT, PESTEL and actionable roadmaps for business decisions.",
    tags: ["LangGraph", "Multi-Agent", "Ollama", "Streamlit"],
    github: "https://github.com/liyanambava/Strategy-Intelligence-Tool",
    //live: "#",
  },

  {
    title: "MindGuardian",
    desc: "Streamlit-based mental well-being assistant using LangChain + Pinecone RAG with Groq-powered responses and SentenceTransformer embeddings.",
    tags: ["Streamlit", "LangChain", "Pinecone", "Groq API"],
    github: "https://github.com/liyanambava/MindGuardian",
    //live: "#",
  },

  {
    title: "Full-Stack Task Manager",
    desc: "Real-time task management app with multi-user collaboration, WebSockets, role-based access control, and JWT auth.",
    tags: ["Next.js", "WebSockets", "JWT Auth", "MongoDB"],
    github: "https://github.com/liyanambava/FullStack-Task-Manager",
    //live: "#",
  },

  {
    title: "Java Real-Time Chat System",
    desc: "Java Swing chat application with real-time private messaging using socket-based client–server communication.",
    tags: ["Java", "Socket Programming", "Swing GUI", "Real-time"],
    github: "https://github.com/liyanambava/Java-Based-Real-Time-Chat-Application-with-Swing-GUI-and-Private-Messaging",
    //live: "#",
  },

  {
    title: "Touchless Drawing Board",
    desc: "Gesture-controlled drawing app that tracks hand movements in real-time to draw on screen without touching the device.",
    tags: ["MediaPipe Hands", "OpenCV", "Landmark Tracking", "Gesture Mapping"],
    github: "https://github.com/liyanambava/Touchless-Drawing-Board",
    //live: "#",
  },

  {
  title: "Real-Time Facial Emotion Detection",
  desc: "Webcam-based facial emotion detection system performing real-time inference using face detection and a trained classifier.",
  tags: ["OpenCV", "Face Detection", "CNN Model", "Live Webcam"],
  github: "https://github.com/liyanambava/Real-Time-Facial-Emotion-Detection-using-Webcam",
  //live: "#",
},

];

export default function Home() {
  const [lockedCount, setLockedCount] = useState(0);
  const [done, setDone] = useState(false);
  const flashSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });

    // add flash after scrolling begins
    setTimeout(() => {
      el.classList.add("section-flash");
      setTimeout(() => el.classList.remove("section-flash"), 950);
    }, 250);
  };

  return (
    <main className="relative min-h-screen bg-[#0B1020] text-zinc-100">
      <div
        id="vanta-bg"
        className="fixed inset-0 z-0 opacity-35"
        style={{ pointerEvents: "none" }}
      />


      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="afterInteractive"
        onLoad={() => console.log("THREE loaded")}
      />

      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          // wait a tiny bit to ensure VANTA.GLOBE is available
          setTimeout(() => {
            // @ts-ignore
            if (!window.VANTA || !window.VANTA.GLOBE) return;

            // destroy existing instance during hot reload
            // @ts-ignore
            if (window.__vanta) window.__vanta.destroy();

            // @ts-ignore
            window.__vanta = window.VANTA.GLOBE({
              el: "#vanta-bg",
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              color: 0xffffff,
              backgroundColor: 0x0b1020,
            });
          }, 100);
        }}
      />



      {/* Subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.9) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.9) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Soft diagonal blueprint lines (extra subtle) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              135deg,
              rgba(59,130,246,1) 0px,
              rgba(59,130,246,1) 1px,
              transparent 1px,
              transparent 18px
            )`,
          }}
        />
      </div>

      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-14">
        {/* Header */}
        <header className="flex flex-col gap-6">
          {/* Nav */}
          <nav className="flex items-center justify-between text-sm text-zinc-400">
            <div className="tracking-wide flex items-center gap-2">
              {/* Projects */}
              <button
                onClick={() => flashSection("projects")}
                className="bg-transparent p-0 transition-transform duration-150 hover:-translate-y-[2px] hover:text-zinc-200"
              >
                <span className="text-zinc-200">[p]</span> projects
              </button>

              <span className="mx-2 text-zinc-600">|</span>

              {/* Research */}
              <button
                onClick={() => flashSection("research")}
                className="bg-transparent p-0 transition-transform duration-150 hover:-translate-y-[2px] hover:text-zinc-200"
              >
                <span className="text-zinc-200">[r]</span> research
              </button>

              <span className="mx-2 text-zinc-600">|</span>

              {/* Contact */}
              <button
                onClick={() => flashSection("contact")}
                className="bg-transparent p-0 transition-transform duration-150 hover:-translate-y-[2px] hover:text-zinc-200"
              >
                <span className="text-zinc-200">[c]</span> contact
              </button>
            </div>
          </nav>


          {/* Hero */}
          <div className="space-y-3">
            {/* Animated name */}
            <h1 className="font-mono tracking-wide text-4xl font-semibold tracking-tight md:text-6xl">
              <ScrambleText text="LIYANA M BAVA" speed={55} />
            </h1>

            

            <p className="text-zinc-300">
              AI/ML Engineer
            </p>

            <div className="space-y-1">
              <p className="text-zinc-300">
                Building scalable AI and analytics solutions end-to-end, with a focus on GenAI,
              </p>
              <p className="text-zinc-300">
                computer vision, and robust ML systems for real-world impact.
              </p>
            </div>


            <div className="flex flex-wrap gap-3 pt-2">
              <a
                className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-200 shadow-sm transition-all duration-150 hover:-translate-y-[2px] hover:border-zinc-700 hover:bg-zinc-900"
                href="/Liyana_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                resume ↗
              </a>
              <a
                className="rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 shadow-sm transition-all duration-150 hover:-translate-y-[2px] hover:bg-blue-500/15"
                href="mailto:liyanambava@gmail.com"
              >
                email me
              </a>
            </div>
          </div>
        </header>

        {/* Layout */}
        <section className="mt-10 grid gap-6 md:grid-cols-[1fr_320px]">
          {/* Left main column */}
          <div className="space-y-6">
            {/* Experience */}
            <Card title="Experience">
              <div className="space-y-6">
                {/* IBM */}
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold text-zinc-100">
                        Associate System Engineer – Data Science & AI
                        <span className="text-zinc-500"> | </span>
                        {" "}
                        <span className="text-zinc-400 font-normal">IBM</span>
                      </p>
                      <p className="text-sm text-zinc-400">Aug 2025 – Present • Bangalore</p>
                    </div>

                    <span className="rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300">
                      Enterprise AI
                    </span>
                  </div>

                  <ul className="text-sm text-zinc-300">
                      Working on enterprise AI & analytics solutions focused on automation and scalable workflows.
                  </ul>
                </div>

                {/* Omdena */}
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold text-zinc-100">
                        EDA & Insights Team Lead
                        <span className="text-zinc-500"> | </span>
                        {" "}
                        <span className="text-zinc-400 font-normal">Omdena WUB Chapter</span>
                      </p>
                      <p className="text-sm text-zinc-400">Jun 2024 – Sep 2024 • Freelance</p>
                    </div>

                    <span className="rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300">
                      NLP + Analytics
                    </span>
                  </div>

                  <ul className="text-sm text-zinc-300">
                      Led EDA + NLP analysis on large survey/text datasets to improve chatbot quality and engagement.
                  </ul>
                </div>

                {/* Zenrion */}
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold text-zinc-100">
                        Artificial Intelligence Intern
                        <span className="text-zinc-500"> | </span>
                        {" "}
                        <span className="text-zinc-400 font-normal">Zenrion Technologies</span>
                      </p>
                      <p className="text-sm text-zinc-400">Nov 2023 – Dec 2023 • Remote</p>
                    </div>

                    <span className="rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300">
                      Forecasting
                    </span>
                  </div>

                  <ul className="text-sm text-zinc-300">
                      Built ML models for pharma inventory forecasting, reducing overstock and improving stock planning.
                  </ul>
                </div>
              </div>
            </Card>


            {/* Projects */}
            <Card
              id="projects"
              title="Projects"
            >
              <div className="space-y-4">
                {projects.map((p) => (
                  <div
                    key={p.title}
                    className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-950/60 hover:shadow-lg hover:shadow-[0_12px_35px_rgba(59,130,246,0.08)]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-zinc-100">
                          {p.title}
                        </h3>
                        <p className="mt-1 text-sm text-zinc-400">{p.desc}</p>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {p.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex shrink-0 flex-col items-end gap-2 text-sm">
                        <a
                          href={p.github}
                          className="w-fit text-zinc-300 transition-transform duration-150 hover:-translate-y-[2px] hover:text-zinc-100"
                        >
                          github ↗
                        </a>
                        {/*<a
                          href={p.live}
                          className="text-zinc-300 hover:text-zinc-100 transition"
                        >
                          live ↗
                        </a>*/}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right side column */}
          <aside className="space-y-6">
            {/* Tech Stack */}
            <SmallCard title="Tech Stack">
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </SmallCard>

            {/* Study Background */}
            <SmallCard title="Education">
              <div className="space-y-3">
                <div>
                  <p className="text-lg font-semibold text-zinc-100">
                        B.Tech CSE (AI/ML Specialization)
                        <span className="text-zinc-500"> | </span>
                        {" "}
                        <span className="text-zinc-400 font-normal">Vellore Institute of Technology, Chennai</span>
                  </p>
                  <p className="text-sm text-zinc-400">
                    2021 - 2025 | CGPA: 8.45
                  </p>
                </div>
              </div>
            </SmallCard>

            {/* Research */}
            <SmallCard id="research" title="Research">
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-zinc-100">
                    ParaTrackNet (ICCCNT 2025)
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">
                    Real-time parathyroid gland detection + tracking during ICG-assisted thyroidectomy.
                  </p>
                </div>
                {/* Tech stack chips */}
                <div className="flex flex-wrap gap-2">
                  {["OpenCV", "CSRT Tracking", "ORB Matching", "Kalman Filter"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 text-sm">
                  <a
                    href="\16th_ICCCNT_2025_paper_9290.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="w-fit text-blue-300 transition-transform duration-150 hover:-translate-y-[2px] hover:text-blue-100"
                  >
                    read paper ↗
                  </a>
                  <a
                    href="https://github.com/liyanambava/AI-Powered-Real-Time-Parathyroid-Gland-Detection-Tracking-During-ICG-Assisted-Thyroidectomy"
                    target="_blank"
                    rel="noreferrer"
                    className="w-fit text-zinc-300 transition-transform duration-150 hover:-translate-y-[2px] hover:text-zinc-100"
                  >
                    repo ↗
                  </a>
                </div>
              </div>
            </SmallCard>

            {/* Contact */}
            <SmallCard id="contact" title="Contact">
              <div className="space-y-2 text-sm text-zinc-300">
                <p className="text-zinc-400">
                  Want to work together? Reach out.
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    className="w-fit text-zinc-300 transition-transform duration-150 hover:-translate-y-[2px] hover:text-zinc-100"
                    href="mailto:liyanambava@gmail.com"
                  >
                    liyanambava@gmail.com ↗
                  </a>
                  <a className="w-fit text-zinc-300 transition-transform duration-150 hover:-translate-y-[2px] hover:text-zinc-100" href="https://www.linkedin.com/in/liyanambava/" target="_blank">
                    LinkedIn ↗
                  </a>
                  <a className="w-fit text-zinc-300 transition-transform duration-150 hover:-translate-y-[2px] hover:text-zinc-100" href="https://github.com/liyanambava" target="_blank">
                    GitHub ↗
                  </a>
                </div>
              </div>
            </SmallCard>
          </aside>
        </section>

        <footer className="mt-14 text-xs text-zinc-600">
          © {new Date().getFullYear()} Liyana
        </footer>

      </div>
    </main>
  );
}

function Card({
  title,
  subtitle,
  children,
  id,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-lg hover:shadow-[0_12px_35px_rgba(59,130,246,0.08)]"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-100">{title}</h2>
          {subtitle ? (
            <p className="mt-1 text-sm text-zinc-400">{subtitle}</p>
          ) : null}
        </div>

        <span className="font-mono text-xs text-zinc-500">/section</span>
      </div>
      {/* top spotlight */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-24 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-2xl opacity-40 transition-opacity duration-200 group-hover:opacity-70" />

      {children}
    </section>
  );
}

function SmallCard({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 p-5 shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-lg hover:shadow-[0_12px_35px_rgba(59,130,246,0.08)]"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-semibold text-zinc-100">{title}</h3>
        <span className="font-mono text-xs text-zinc-500">/panel</span>
      </div>
      {/* top spotlight */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-20 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-2xl opacity-35 transition-opacity duration-200 group-hover:opacity-65" />

      {children}
    </section>
  );
}
