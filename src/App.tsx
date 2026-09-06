// v6 — fix missing SectionWrapper close in ProjectsSection
import React, { useState, useEffect, useRef } from "react"
import {
  ThemeProvider,
  Button,
  Badge,
  InputField,
  TextareaField,
  useTheme,
} from "@figma/astraui"
import {
  Home,
  User,
  GraduationCap,
  Zap,
  Briefcase,
  Trophy,
  FolderGit2,
  Mail,
  Download,
  GitBranch,
  ExternalLink,
  MapPin,
  Calendar,
  Phone,
  Code2,
  Database,
  Cpu,
  Globe,
  Users,
  Star,
  Sun,
  Moon,
  Sparkles,
  ArrowRight,
} from "lucide-react"
import profilePhoto from "@/imports/WhatsApp_Image_2026-09-06_at_11.57.59_AM.jpeg"
import petzzyScreenshot from "@/imports/Screenshot_6-9-2026_13115_app.emergent.sh.jpeg"

type Section = "home" | "about" | "education" | "skills" | "experience" | "achievements" | "projects" | "contact"

const NAV_SECTIONS: { id: Section; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

/* ── Typewriter ─────────────────────────────────────────────── */
function Typewriter({ words }: { words: string[] }) {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[idx % words.length]
    const speed = deleting ? 60 : 100
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, text.length + 1))
        if (text.length + 1 === word.length) setTimeout(() => setDeleting(true), 1200)
      } else {
        setText(word.slice(0, text.length - 1))
        if (text.length - 1 === 0) { setDeleting(false); setIdx((i) => i + 1) }
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [text, deleting, idx, words])

  return (
    <span className="text-brand-primary font-semibold">
      {text}<span className="animate-pulse">|</span>
    </span>
  )
}

/* ── Theme Toggle ───────────────────────────────────────────── */
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center size-10 rounded-corner-full bg-bg-subtle hover:bg-bg-hover transition-colors cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === "dark"
        ? <Sun size={16} className="text-text-secondary" />
        : <Moon size={16} className="text-text-secondary" />}
    </button>
  )
}

/* ── Top Nav Header ─────────────────────────────────────────── */
function TopNav({ active, onNav }: { active: Section; onNav: (s: Section) => void }) {
  return (
    <header className="sticky top-0 z-50 nav-glass border-b border-border-secondary">
      <div className="flex items-center justify-between px-2xl py-md">
        {/* Brand */}
        <div className="flex items-center gap-md shrink-0">
          <div className="flex items-center justify-center size-9 rounded-corner-full bg-brand-primary text-on-brand text-label-sm font-semibold">
            NR
          </div>
          <span className="text-label font-semibold text-text-primary">Navin Raja</span>
        </div>

        {/* Section nav — spaced boxes with glow on hover */}
        <nav className="hidden lg:flex items-center gap-sm">
          {NAV_SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => onNav(s.id)}
              className={`
                relative px-lg py-sm rounded-corner-md text-label-sm font-medium
                transition-all duration-200 cursor-pointer outline-none
                ${active === s.id
                  ? "bg-brand-tertiary text-brand-primary shadow-[0_0_12px_2px_var(--brand-primary)] opacity-100"
                  : "text-text-secondary hover:text-brand-primary hover:bg-brand-tertiary hover:shadow-[0_0_10px_1px_var(--brand-primary)] border border-transparent hover:border-brand-secondary"
                }
              `}
            >
              {s.label}
            </button>
          ))}
        </nav>

        {/* Right — social links + theme toggle + CTA */}
        <div className="flex items-center gap-md shrink-0">
          {/* GitHub */}
          <button
            onClick={() => window.open("https://github.com/310625205189-droid", "_blank", "noopener,noreferrer")}
            className="flex items-center justify-center size-9 rounded-corner-md border border-border-primary text-text-secondary hover:text-brand-primary hover:border-brand-primary hover:shadow-[0_0_8px_1px_var(--brand-primary)] transition-all duration-200 cursor-pointer bg-transparent"
            aria-label="GitHub"
          >
            <GitBranch size={16} />
          </button>
          {/* LinkedIn */}
          <button
            onClick={() => window.open("https://www.linkedin.com/in/navin-raja-722593381/", "_blank", "noopener,noreferrer")}
            className="flex items-center justify-center size-9 rounded-corner-md border border-border-primary text-text-secondary hover:text-brand-primary hover:border-brand-primary hover:shadow-[0_0_8px_1px_var(--brand-primary)] transition-all duration-200 cursor-pointer bg-transparent"
            aria-label="LinkedIn"
          >
            <Globe size={16} />
          </button>
          <ThemeToggle />
          <a href="/src/imports/Navin_Raja_Professional_Resume__1_.docx" download>
            <Button variant="primary" size="small">Hire Me</Button>
          </a>
        </div>
      </div>
    </header>
  )
}

/* ── HOME ───────────────────────────────────────────────────── */
function HomeSection({ onNav }: { onNav: (s: Section) => void }) {
  return (
    <section className="relative min-h-[calc(100vh-53px)] flex flex-col items-center justify-center overflow-hidden bg-dot-grid">
      {/* Decorative orbs */}
      <div className="orb orb-primary animate-float" style={{ width: 480, height: 480, top: "-10%", left: "-8%" }} />
      <div className="orb orb-primary animate-float-rev" style={{ width: 380, height: 380, bottom: "0%", right: "-6%" }} />
      <div className="orb orb-secondary animate-float" style={{ width: 260, height: 260, top: "50%", left: "42%" }} />

      <div className="relative z-10 w-full max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2xl items-center px-2xl py-2xl">

        {/* Left */}
        <div className="flex flex-col gap-xl">
          <div className="flex items-center gap-sm">
            <span className="size-[8px] rounded-full bg-success animate-pulse" />
            <span className="text-label-sm text-text-secondary tracking-wider uppercase">
              Available for internships &amp; collaborations
            </span>
          </div>

          <div>
            <p className="text-label-sm text-text-secondary tracking-widest uppercase mb-sm">Hi there, I am</p>
            <h1 className="text-gradient font-semibold leading-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Navin Raja
            </h1>
            <h2 className="font-semibold leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
              <Typewriter words={["Developer", "Engineer", "Creator", "Innovator"]} />
            </h2>
          </div>

          <p className="text-label text-text-secondary leading-relaxed max-w-lg">
            Aspiring Software Engineer · B.Tech Information Technology Undergraduate · Python &amp; Web Dev Enthusiast.
            Passionate about software development, backend programming, and building practical applications through collaborative projects and hands-on learning.
          </p>

          <div className="flex flex-wrap gap-md">
            <a href="/src/imports/Navin_Raja_Professional_Resume__1_.docx" download>
              <Button variant="primary" iconStart={<Download size={16} />}>Download Resume</Button>
            </a>
            <Button variant="neutral" iconEnd={<ArrowRight size={16} />} onClick={() => onNav("projects")}>
              View Projects
            </Button>
            <Button variant="subtle" iconStart={<Mail size={16} />} onClick={() => onNav("contact")}>
              Contact Me
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-lg pt-sm">
            <span className="flex items-center gap-xs text-label-sm text-text-secondary">
              <MapPin size={13} className="text-brand-primary" />
              Chennai, Tamil Nadu, India
            </span>
            <span className="flex items-center gap-xs text-label-sm text-text-secondary">
              <GraduationCap size={13} className="text-brand-primary" />
              Easwari Engineering College (SRM Group)
            </span>
          </div>

          <div className="flex flex-wrap gap-sm">
            {["Python", "C", "SQL", "JavaScript", "HTML", "Blender 3D"].map((skill) => (
              <span key={skill} className="pill-gradient px-md py-xs text-label-sm text-text-primary rounded-corner-full hover:text-brand-primary transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right — photo card */}
        <div className="flex items-center justify-center relative z-10">
          {/* Glow */}
          <div className="absolute size-[320px] rounded-full opacity-25 blur-3xl bg-brand-primary pointer-events-none" />

          <div className="relative">
            <div className="relative rounded-corner-lg overflow-hidden border border-border-primary shadow-xl group" style={{ width: 300, height: 380 }}>
              <img
                src={profilePhoto}
                alt="Navin Raja"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              {/* Bottom overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-md bg-surface-bg border-t border-border-secondary flex items-center justify-between">
                <div>
                  <p className="text-label-sm font-semibold text-text-primary">B.Tech IT</p>
                  <p className="text-label-sm text-text-secondary">2025 – 2029</p>
                </div>
                <div className="flex items-center justify-center size-8 rounded-corner-full bg-brand-tertiary">
                  <Code2 size={16} className="text-brand-primary" />
                </div>
              </div>
            </div>

            {/* Floating badge — top left */}
            <div className="absolute -top-4 -left-6 flex items-center gap-xs px-md py-sm bg-surface-bg border border-border-primary rounded-corner-lg shadow-lg">
              <Sparkles size={14} className="text-brand-primary" />
              <span className="text-label-sm font-medium text-text-primary">Always building</span>
            </div>

            {/* Floating badge — bottom right */}
            <div className="absolute -bottom-6 -right-6 flex flex-col items-center px-lg py-md bg-brand-primary rounded-corner-lg shadow-lg">
              <span className="text-on-brand font-semibold text-title leading-none">2029</span>
              <span className="text-on-brand text-label-sm opacity-85">Graduating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-2xl pb-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
          {[
            { label: "Projects", value: "2+", sub: "Completed" },
            { label: "Skills", value: "12+", sub: "Technologies" },
            { label: "Certifications", value: "3+", sub: "Industry recognised" },
            { label: "Clubs", value: "1", sub: "Rotaract Member" },
          ].map((stat) => (
            <div key={stat.label} className="card-glow bg-surface-bg border border-border-secondary rounded-corner-lg p-lg flex flex-col items-center gap-xs text-center">
              <span className="text-title font-semibold text-gradient">{stat.value}</span>
              <span className="text-label-sm font-medium text-text-primary">{stat.label}</span>
              <span className="text-label-sm text-text-tertiary">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── ABOUT ──────────────────────────────────────────────────── */
function AboutSection() {
  return (
    <SectionWrapper>
    <section className="py-2xl px-2xl">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeading label="About Me" sub="Who I am" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
          <div className="card-glow bg-surface-bg border border-border-secondary rounded-corner-lg p-2xl flex flex-col gap-lg">
            <p className="text-label text-text-secondary leading-relaxed">
              I am Navin Raja, an Information Technology undergraduate at Easwari Engineering College (SRM Group), Chennai, with strong foundations in Python, SQL, web development, and Blender 3D.
            </p>
            <p className="text-label text-text-secondary leading-relaxed">
              Passionate about software development, backend programming, and building practical applications through collaborative projects. I continuously expand my technical expertise through industry-recognised certifications and hands-on learning.
            </p>
            <p className="text-label text-text-secondary leading-relaxed">
              Currently in my second year, I enjoy solving real-world problems — whether that means building budget tracking tools in Python, crafting 3D game assets in Blender, or exploring AI fundamentals and cybersecurity concepts.
            </p>
          </div>
          <div className="flex flex-col gap-md">
            {[
              { icon: <MapPin size={16} />, label: "Location", value: "Chennai, Tamil Nadu, India", href: null },
              { icon: <Phone size={16} />, label: "Phone", value: "+91 90251 12336", href: "tel:+919025112336" },
              { icon: <Mail size={16} />, label: "Email", value: "navinraja1507@gmail.com", href: "mailto:navinraja1507@gmail.com" },
              { icon: <GitBranch size={16} />, label: "GitHub", value: "310625205189-droid", href: "https://github.com/310625205189-droid" },
              { icon: <Globe size={16} />, label: "LinkedIn", value: "navin-raja-722593381", href: "https://www.linkedin.com/in/navin-raja-722593381/" },
            ].map((fact) => {
              const inner = (
                <>
                  <div className="size-8 rounded-corner-md bg-brand-tertiary flex items-center justify-center text-brand-primary shrink-0">
                    {fact.icon}
                  </div>
                  <div>
                    <p className="text-label-sm text-text-tertiary">{fact.label}</p>
                    <p className="text-label-sm text-text-primary font-medium">{fact.value}</p>
                  </div>
                </>
              )
              const cls = "flex items-center gap-md p-md rounded-corner-md bg-surface-bg border border-border-secondary hover:border-brand-primary hover:shadow-[0_0_8px_1px_var(--brand-primary)] transition-all duration-200"
              return fact.href ? (
                fact.href.startsWith("http") ? (
                  <button key={fact.label} onClick={() => window.open(fact.href!, "_blank", "noopener,noreferrer")} className={cls + " cursor-pointer bg-transparent w-full text-left"}>
                    {inner}
                  </button>
                ) : (
                  <a key={fact.label} href={fact.href} className={cls}>{inner}</a>
                )
              ) : (
                <div key={fact.label} className={cls}>{inner}</div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
    </SectionWrapper>
  )
}

/* ── EDUCATION ──────────────────────────────────────────────── */
function EducationSection() {
  const items = [
    {
      degree: "B.Tech – Information Technology",
      institution: "Easwari Engineering College (SRM Group), Chennai",
      period: "2025 – 2029",
      location: "Chennai, Tamil Nadu",
      details: "Currently Second Year. Expected Graduation: 2029. Coursework includes Python, SQL, Web Development, Data Structures, and AI Fundamentals.",
      status: "Ongoing",
    },
  ]

  return (
    <SectionWrapper alt>
    <section className="py-2xl px-2xl">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeading label="Education" sub="Academic Background" />
        <div className="flex flex-col gap-lg">
          {items.map((edu, i) => (
            <div key={i} className="card-glow bg-surface-bg rounded-corner-lg p-xl flex gap-lg border border-border-secondary">
              <div className="shrink-0 size-12 rounded-corner-full bg-brand-tertiary flex items-center justify-center mt-xs">
                <GraduationCap size={20} className="text-brand-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between flex-wrap gap-sm">
                  <div>
                    <h3 className="text-label font-semibold text-text-primary">{edu.degree}</h3>
                    <p className="text-label-sm text-text-secondary mt-xs">{edu.institution}</p>
                  </div>
                  <Badge label={edu.status} variant={edu.status === "Ongoing" ? "brand" : "success"} />
                </div>
                <div className="flex flex-wrap gap-lg mt-sm">
                  <span className="flex items-center gap-xs text-label-sm text-text-tertiary">
                    <Calendar size={13} />{edu.period}
                  </span>
                  <span className="flex items-center gap-xs text-label-sm text-text-tertiary">
                    <MapPin size={13} />{edu.location}
                  </span>
                </div>
                <p className="text-label-sm text-text-secondary mt-sm">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </SectionWrapper>
  )
}

/* ── SKILLS ─────────────────────────────────────────────────── */
function SkillsSection() {
  const groups = [
    { category: "Programming Languages", icon: <Code2 size={18} />, skills: ["Python", "C", "SQL", "JavaScript", "HTML"] },
    { category: "Creative & 3D Tools", icon: <Cpu size={18} />, skills: ["Blender 3D (4.3+)", "Asset Creation", "Texturing", "3D Character Modelling"] },
    { category: "Web Development", icon: <Globe size={18} />, skills: ["HTML", "JavaScript", "CSS", "Web Dev Fundamentals"] },
    { category: "Data & Backend", icon: <Database size={18} />, skills: ["Python", "SQL", "CSV Data Processing", "Data Pipelines"] },
    { category: "Core Concepts", icon: <FolderGit2 size={18} />, skills: ["Game Development Lifecycle", "AI Fundamentals", "Cybersecurity Basics", "Backend Programming"] },
  ]

  return (
    <SectionWrapper>
    <section className="py-2xl px-2xl">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeading label="Skills" sub="Technologies I work with" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          {groups.map((g) => (
            <div key={g.category} className="card-glow bg-surface-bg rounded-corner-lg p-xl border border-border-secondary">
              <div className="flex items-center gap-md mb-lg">
                <div className="size-8 rounded-corner-md bg-brand-tertiary flex items-center justify-center text-brand-primary">
                  {g.icon}
                </div>
                <h3 className="text-label font-semibold text-text-primary">{g.category}</h3>
              </div>
              <div className="flex flex-wrap gap-sm">
                {g.skills.map((skill) => (
                  <span key={skill} className="pill-gradient px-md py-xs text-label-sm text-text-primary rounded-corner-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </SectionWrapper>
  )
}

/* ── EXPERIENCE ─────────────────────────────────────────────── */
function ExperienceSection() {
  return (
    <SectionWrapper alt>
    <section className="py-2xl px-2xl">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeading label="Experience" sub="Where I've contributed" />
        <div className="flex flex-col gap-lg">

          <div className="card-glow bg-surface-bg rounded-corner-lg p-xl border border-border-secondary">
            <div className="flex gap-lg">
              <div className="shrink-0 size-12 rounded-corner-full bg-brand-tertiary flex items-center justify-center mt-xs">
                <Users size={20} className="text-brand-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between flex-wrap gap-sm">
                  <div>
                    <h3 className="text-label font-semibold text-text-primary">Rotaract Club Member</h3>
                    <p className="text-label-sm text-text-secondary mt-xs">Rotaract Club · Easwari Engineering College (SRM Group)</p>
                  </div>
                  <div className="flex items-center gap-sm flex-wrap">
                    <Badge label="Active" variant="success" />
                    <span className="text-label-sm text-text-tertiary flex items-center gap-xs"><Calendar size={13} />2025 – Present</span>
                  </div>
                </div>
                <ul className="flex flex-col gap-sm mt-lg">
                  {[
                    "Actively participate in community service events including awareness drives, social welfare campaigns, and youth development programs.",
                    "Collaborate with fellow members on team projects that blend technology and community engagement.",
                    "Develop leadership, communication, and project management skills through club activities and inter-college engagements.",
                    "Contribute to organising events that promote professional development and civic responsibility among students.",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-sm text-label-sm text-text-secondary">
                      <span className="mt-[6px] shrink-0 size-[5px] rounded-full bg-brand-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </SectionWrapper>
  )
}

/* ── ACHIEVEMENTS ───────────────────────────────────────────── */
function AchievementsSection() {
  const items = [
    { title: "Playable Indie Game Alpha Released", org: "Team Project", year: "2025", desc: "Co-developed a fully playable indie game with a three-member team using Blender 3D for character creation, environment design, and asset texturing." },
    { title: "Automated Budget Tracker — Python Project", org: "Personal Project", year: "2025", desc: "Built a Python-based expense tracker with CSV export pipeline for structured financial data management and Microsoft Excel integration." },
    { title: "Industry-Recognised Certifications", org: "Online Learning Platforms", year: "2025", desc: "Continuously expanding technical expertise through certifications in Python, SQL, AI Fundamentals, and Cybersecurity Basics." },
    { title: "Active Rotaract Club Member", org: "Easwari Engineering College", year: "2025", desc: "Contributing to community service initiatives and youth development programs through the college Rotaract chapter." },
  ]

  return (
    <SectionWrapper>
    <section className="py-2xl px-2xl">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeading label="Achievements" sub="Recognition & Awards" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          {items.map((ach, i) => (
            <div key={i} className="card-glow bg-surface-bg rounded-corner-lg p-xl border border-border-secondary flex gap-md">
              <div className="shrink-0 mt-xs">
                <Star size={18} className="text-brand-primary" />
              </div>
              <div>
                <h3 className="text-label-sm font-semibold text-text-primary">{ach.title}</h3>
                <div className="flex items-center gap-sm mt-xs flex-wrap">
                  <span className="text-label-sm text-text-tertiary">{ach.org}</span>
                  <span className="text-label-sm text-brand-primary font-medium">· {ach.year}</span>
                </div>
                <p className="text-label-sm text-text-secondary mt-sm leading-relaxed">{ach.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </SectionWrapper>
  )
}

/* ── PROJECTS ───────────────────────────────────────────────── */
function ProjectsSection() {
  return (
    <SectionWrapper alt>
    <section className="py-2xl px-2xl">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeading label="Projects" sub="What I've built" />
        <div className="flex flex-col gap-xl">

          {/* Featured — PETZZY sustainability project */}
          <div className="card-glow bg-surface-bg rounded-corner-lg overflow-hidden border border-border-primary">
            <div className="relative">
              <img src={petzzyScreenshot} alt="PETZZY sustainability platform screenshot" className="w-full h-[260px] object-cover object-top" />
              <div className="absolute top-md left-md">
                <Badge label="Featured · Sustainability" variant="brand" />
              </div>
            </div>
            <div className="p-2xl flex flex-col gap-lg">
              <div>
                <h3 className="text-label font-semibold text-text-primary">PETZZY — Sustainability Project (Contribution)</h3>
                <p className="text-label-sm text-text-secondary mt-sm leading-relaxed">
                  PETZZY is an AI + IoT smart bin that recycles edible food leftovers into safe nutrition pellets, dispensed automatically to street dogs, cats, and birds — addressing food waste and animal welfare in cities. A sustainability initiative I contributed to, with a live web platform tracking bins across Chennai.
                </p>
              </div>
              <div className="flex flex-wrap gap-sm">
                {["Sustainability", "IoT", "AI", "Web Platform", "Vercel"].map((t) => (
                  <span key={t} className="pill-gradient px-md py-xs text-label-sm text-text-primary rounded-corner-full">{t}</span>
                ))}
              </div>
              <div className="flex gap-md flex-wrap">
                <Button variant="primary" iconStart={<ExternalLink size={16} />} onClick={() => window.open("https://petzzy-web-111-d1og3epd4-petzzy-labs.vercel.app/", "_blank", "noopener,noreferrer")}>Live Website</Button>
                <Button variant="neutral" iconStart={<GitBranch size={16} />} onClick={() => window.open("https://github.com/petzzy-labs/petzzy-web/", "_blank", "noopener,noreferrer")}>GitHub Repo</Button>
              </div>
            </div>
          </div>

          {/* Own Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            {[
              {
                title: "Indie Game Development (Playable Alpha)",
                desc: "Collaborated in a three-member team to design and develop a fully playable indie game. Created 3D characters, environments, and textured assets using Blender to enhance visual quality.",
                tags: ["Blender 3D", "Game Development", "Team Collaboration", "3D Modelling"],
                status: "Completed",
              },
              {
                title: "Automated Budget Tracker",
                desc: "Developed a Python-based expense tracker to record and analyse daily spending. Built a CSV export pipeline for structured financial data management and Microsoft Excel integration.",
                tags: ["Python", "CSV", "Data Processing", "Excel Integration"],
                status: "Completed",
              },
            ].map((proj, i) => (
              <div key={i} className="card-glow bg-surface-bg rounded-corner-lg p-xl border border-border-secondary flex flex-col gap-md">
                <div className="flex items-start justify-between gap-sm">
                  <h3 className="text-label-sm font-semibold text-text-primary">{proj.title}</h3>
                  <Badge label={proj.status} variant="success" />
                </div>
                <p className="text-label-sm text-text-secondary leading-relaxed">{proj.desc}</p>
                <div className="flex flex-wrap gap-xs mt-auto">
                  {proj.tags.map((t) => (
                    <span key={t} className="px-md py-xs text-label-sm text-text-primary bg-brand-tertiary rounded-corner-full">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </SectionWrapper>
  )
}

/* ── CONTACT ────────────────────────────────────────────────── */
function ContactSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  return (
    <SectionWrapper>
    <section className="py-2xl px-2xl pb-[80px]">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeading label="Contact" sub="Let's work together" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl mt-xl">
          <div className="card-glow bg-surface-bg border border-border-primary rounded-corner-lg p-2xl flex flex-col gap-lg">
            <h3 className="text-label font-semibold text-text-primary">Get in Touch</h3>
            <p className="text-label-sm text-text-secondary leading-relaxed">
              Whether you want to collaborate, discuss opportunities, or just connect — I would love to hear from you.
            </p>
            <div className="flex flex-col gap-md">
              {[
                { icon: <Mail size={16} />, label: "Email", value: "navinraja1507@gmail.com", href: "mailto:navinraja1507@gmail.com" },
                { icon: <Phone size={16} />, label: "Phone", value: "+91 90251 12336", href: "tel:+919025112336" },
                { icon: <MapPin size={16} />, label: "Location", value: "Chennai, Tamil Nadu, India", href: null },
                { icon: <GitBranch size={16} />, label: "GitHub", value: "310625205189-droid", href: "https://github.com/310625205189-droid" },
                { icon: <Globe size={16} />, label: "LinkedIn", value: "navin-raja-722593381", href: "https://www.linkedin.com/in/navin-raja-722593381/" },
              ].map((c) => {
                const cls = "flex items-center gap-md p-md rounded-corner-md bg-brand-tertiary hover:bg-bg-hover transition-colors"
                const inner = (
                  <>
                    <span className="text-brand-primary shrink-0">{c.icon}</span>
                    <div>
                      <p className="text-label-sm text-text-tertiary">{c.label}</p>
                      <p className="text-label-sm text-text-primary font-medium">{c.value}</p>
                    </div>
                  </>
                )
                if (c.href?.startsWith("http")) return (
                  <button key={c.label} onClick={() => window.open(c.href!, "_blank", "noopener,noreferrer")} className={cls + " cursor-pointer bg-transparent w-full text-left"}>{inner}</button>
                )
                return c.href ? (
                  <a key={c.label} href={c.href} className={cls}>{inner}</a>
                ) : (
                  <div key={c.label} className={cls}>{inner}</div>
                )
              })}
            </div>
          </div>

          <div className="card-glow bg-surface-bg border border-border-primary rounded-corner-lg p-2xl flex flex-col gap-lg">
            {sent ? (
              <div className="flex flex-col items-center justify-center flex-1 gap-lg text-center py-2xl">
                <div className="size-12 rounded-corner-full bg-brand-tertiary flex items-center justify-center">
                  <Mail size={24} className="text-brand-primary" />
                </div>
                <h3 className="text-label font-semibold text-text-primary">Message Sent!</h3>
                <p className="text-label-sm text-text-secondary">I will get back to you shortly.</p>
                <Button variant="subtle" onClick={() => { setName(""); setEmail(""); setMessage(""); setSent(false) }}>Send Another</Button>
              </div>
            ) : (
              <>
                <h3 className="text-label font-semibold text-text-primary">Send a Message</h3>
                <div className="flex flex-col gap-lg">
                  <InputField label="Name" placeholder="Your full name" value={name} onChange={setName} />
                  <InputField label="Email" placeholder="your@email.com" value={email} onChange={setEmail} />
                  <TextareaField label="Message" placeholder="What would you like to discuss?" rows={4} value={message} onChange={setMessage} />
                  <Button variant="primary" iconStart={<Mail size={16} />} onClick={() => { if (name && email && message) setSent(true) }}>
                    Send Message
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
    </SectionWrapper>
  )
}

/* ── Section Heading ────────────────────────────────────────── */
function SectionHeading({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="flex flex-col gap-sm mb-xl">
      <div className="flex items-center gap-md">
        <div className="h-[1px] w-8 bg-brand-primary opacity-60" />
        <p className="text-label-sm text-brand-primary font-medium tracking-widest uppercase">{sub}</p>
      </div>
      <h2 className="text-gradient font-semibold" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>{label}</h2>
      <div className="w-16 h-[3px] rounded-full" style={{ background: "linear-gradient(to right, var(--brand-primary), transparent)" }} />
    </div>
  )
}

/* ── Section wrapper with dot-grid + divider ────────────────── */
function SectionWrapper({ children, alt }: { children: React.ReactNode; alt?: boolean }) {
  return (
    <div className={`relative ${alt ? "bg-dot-grid" : ""}`}>
      {alt && <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, var(--brand-tertiary), transparent 30%, transparent 70%, var(--brand-tertiary))" }} />}
      <div className="relative z-10">{children}</div>
      <div className="section-divider" />
    </div>
  )
}

/* ── Left social dock (inside sidebar) ─────────────────────── */
function Portfolio() {
  const [active, setActive] = useState<Section>("home")
  const mainRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const scrollToSection = (id: Section) => {
    setActive(id)
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" })
  }

  // Update active section based on scroll
  useEffect(() => {
    const el = mainRef.current
    if (!el) return
    const handler = () => {
      let found: Section = "home"
      for (const s of NAV_SECTIONS) {
        const ref = sectionRefs.current[s.id]
        if (ref && ref.getBoundingClientRect().top <= 120) found = s.id
      }
      setActive(found)
    }
    el.addEventListener("scroll", handler, { passive: true })
    return () => el.removeEventListener("scroll", handler)
  }, [])

  return (
    <div ref={mainRef} className="h-screen overflow-y-auto bg-brand-tertiary">
      {/* Top Nav — full width, no sidebar */}
      <TopNav active={active} onNav={scrollToSection} />

      {/* Sections */}
      {(["home", "about", "education", "skills", "experience", "achievements", "projects", "contact"] as Section[]).map((id) => (
        <div key={id} ref={(el) => { sectionRefs.current[id] = el }}>
          {id === "home" && <HomeSection onNav={scrollToSection} />}
          {id === "about" && <AboutSection />}
          {id === "education" && <EducationSection />}
          {id === "skills" && <SkillsSection />}
          {id === "experience" && <ExperienceSection />}
          {id === "achievements" && <AchievementsSection />}
          {id === "projects" && <ProjectsSection />}
          {id === "contact" && <ContactSection />}
        </div>
      ))}
    </div>
  )
}

/* ── Root ───────────────────────────────────────────────────── */
export default function App() {
  // Default to dark mode on first load to match portfolio aesthetic
  useEffect(() => {
    if (!localStorage.getItem("astra-theme")) {
      localStorage.setItem("astra-theme", "dark")
    }
  }, [])

  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  )
}
