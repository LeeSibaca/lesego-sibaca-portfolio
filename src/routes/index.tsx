import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Activity,
  ArrowUpRight,
  BadgeCheck,
  Brain,
  Bug,
  ChevronLeft,
  ChevronRight,
  Fingerprint,
  Github,
  Linkedin,
  Lock,
  Mail,
  Radar,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { toast } from "sonner";

import portrait from "@/assets/portrait.jpg";
import { Reveal } from "@/components/reveal";
import { ThemeToggle } from "@/components/theme-toggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lesego Sibaca — Cybersecurity Engineer & Threat Analyst" },
      {
        name: "description",
        content:
          "Portfolio of Lesego Sibaca, cybersecurity engineer specialising in SIEM operations, penetration testing and AI-driven threat detection.",
      },
      { property: "og:title", content: "Lesego Sibaca — Cybersecurity Engineer" },
      {
        property: "og:description",
        content:
          "SIEM operations, offensive security and AI-driven defence. A security command center portfolio.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "expertise", href: "#expertise" },
  { label: "projects", href: "#projects" },
  { label: "credentials", href: "#credentials" },
  { label: "contact", href: "#contact" },
];

const BENTO = [
  {
    icon: Radar,
    title: "SIEM & Detection Engineering",
    desc: "Splunk and Microsoft Sentinel pipelines, custom correlation rules, MITRE ATT&CK-mapped detections and 24/7 triage playbooks.",
    tags: ["Splunk", "Sentinel", "Sigma", "ATT&CK"],
    span: "lg:col-span-2",
    metric: "1.2k+ alerts triaged",
  },
  {
    icon: Bug,
    title: "Penetration Testing",
    desc: "Web, network and Active Directory assessments with reproducible, business-aware reporting.",
    tags: ["Burp Suite", "Nmap", "Metasploit", "BloodHound"],
    span: "lg:col-span-2",
    metric: "40+ engagements",
  },
  {
    icon: Brain,
    title: "AI Security",
    desc: "LLM prompt-injection testing, model abuse monitoring and ML-assisted anomaly detection.",
    tags: ["OWASP LLM Top 10", "Python", "Anomaly ML"],
    span: "lg:col-span-1",
    metric: "Verified",
    verified: true,
  },
  {
    icon: Lock,
    title: "Cloud & Identity",
    desc: "Zero-trust IAM design, hardening and posture management across Azure and AWS.",
    tags: ["Azure AD", "AWS IAM", "CIS Benchmarks"],
    span: "lg:col-span-1",
    metric: "Zero-trust",
  },
  {
    icon: Fingerprint,
    title: "Incident Response",
    desc: "Containment, forensic imaging, root-cause timelines and executive post-incident briefs.",
    tags: ["Velociraptor", "Autopsy", "NIST 800-61"],
    span: "lg:col-span-2",
    metric: "< 15m MTTA",
  },
];

const PROJECTS = [
  {
    name: "SENTINEL-OPS",
    status: "OPERATIONAL",
    tone: "signal",
    desc: "Home-lab SOC with Sentinel, Sysmon telemetry and 60+ custom analytics rules feeding an automated triage workflow.",
    tags: ["Sentinel", "KQL", "Sysmon", "Logic Apps"],
    stats: [
      ["Detections", "62"],
      ["False positives", "-38%"],
    ],
  },
  {
    name: "REDLINE-AD",
    status: "ACTIVE ENGAGEMENT",
    tone: "warn",
    desc: "Full Active Directory attack-path assessment: Kerberoasting, ACL abuse and delegation flaws mapped end to end.",
    tags: ["BloodHound", "Impacket", "PowerShell"],
    stats: [
      ["Paths found", "17"],
      ["Criticals", "4"],
    ],
  },
  {
    name: "PROMPTGUARD",
    status: "OPERATIONAL",
    tone: "signal",
    desc: "Prompt-injection test harness scoring LLM endpoints against the OWASP LLM Top 10 with regression reporting.",
    tags: ["Python", "OWASP LLM", "FastAPI"],
    stats: [
      ["Test cases", "240"],
      ["Coverage", "91%"],
    ],
  },
  {
    name: "PHISHNET",
    status: "MONITORING",
    tone: "primary",
    desc: "Gradient-boosted phishing classifier with header and URL feature extraction, deployed behind a review queue.",
    tags: ["scikit-learn", "Pandas", "Docker"],
    stats: [
      ["Precision", "97.4%"],
      ["Corpus", "80k"],
    ],
  },
];

const CERTS = [
  {
    year: "2026",
    name: "Google AI Essentials",
    issuer: "Google",
    featured: true,
    note: "Applied AI workflows, responsible AI and prompt design.",
  },
  {
    year: "2025",
    name: "CompTIA Security+",
    issuer: "CompTIA",
    note: "Core security operations, architecture and risk management.",
  },
  {
    year: "2025",
    name: "Microsoft SC-200",
    issuer: "Microsoft",
    note: "Security Operations Analyst — Sentinel and Defender XDR.",
  },
  {
    year: "2024",
    name: "eJPT",
    issuer: "INE Security",
    note: "Hands-on junior penetration testing certification.",
  },
  {
    year: "2024",
    name: "Cisco CyberOps Associate",
    issuer: "Cisco",
    note: "SOC monitoring, network intrusion analysis and IR handling.",
  },
];

function toneClass(tone: string) {
  if (tone === "warn") return "text-warn";
  if (tone === "primary") return "text-primary";
  return "text-signal";
}

function Index() {
  const [certIndex, setCertIndex] = useState(0);
  const [sending, setSending] = useState(false);

  const shiftCert = (dir: number) =>
    setCertIndex((i) => Math.min(Math.max(i + dir, 0), CERTS.length - 1));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Transmission encrypted and sent", {
        description: "I'll respond within one business day.",
      });
    }, 900);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="grid-bg pointer-events-none fixed inset-0 -z-20" />
      <div className="halo pointer-events-none fixed inset-x-0 top-0 -z-10 h-[70vh]" />

      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <nav className="surface mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-full px-4 py-2.5 sm:px-5">
          <a href="#top" className="flex min-w-0 items-center gap-2.5">
            <ShieldCheck className="h-5 w-5 shrink-0 text-primary" />
            <span className="truncate font-mono text-sm font-semibold tracking-tight">
              lesego<span className="text-primary">.sec</span>
            </span>
          </a>
          <div className="flex items-center gap-1.5">
            <ul className="mr-2 hidden items-center gap-1 md:flex">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="rounded-full px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    ./{n.label}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pt-32 pb-20 sm:px-6 lg:grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:items-center lg:gap-16 lg:pt-40 lg:pb-28">
          <div className="rise relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/20 blur-3xl" />
            <div className="surface overflow-hidden rounded-3xl p-2">
              <img
                src={portrait}
                alt="Portrait of Lesego Sibaca, cybersecurity engineer"
                width={1024}
                height={1280}
                className="h-full w-full rounded-[1.25rem] object-cover"
              />
            </div>
            <div className="surface absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 whitespace-nowrap">
              <span className="live-dot h-2 w-2 rounded-full bg-signal" />
              <span className="font-mono text-[0.7rem] tracking-wide text-muted-foreground">
                AVAILABLE FOR ENGAGEMENTS
              </span>
            </div>
          </div>

          <div className="rise" style={{ animationDelay: "120ms" }}>
            <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              Cybersecurity Engineer
            </p>
            <h1 className="text-gradient mt-5 font-mono text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Defending systems with precision, evidence and code.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              I design detections, break things responsibly, and secure the AI layer — turning noisy
              telemetry into decisions an executive team can act on.
            </p>

            <div className="surface mt-8 overflow-hidden rounded-xl">
              <div className="flex items-center gap-2 border-b border-glass-border px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-warn/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-signal/70" />
                <span className="ml-2 font-mono text-[0.7rem] text-muted-foreground">
                  ~/whoami
                </span>
              </div>
              <div className="space-y-1.5 px-4 py-4 font-mono text-[0.8rem] leading-relaxed">
                <p className="text-muted-foreground">
                  <span className="text-primary">$</span> whoami --verbose
                </p>
                <p>name: Lesego Sibaca</p>
                <p>
                  role: SOC Analyst <span className="text-muted-foreground">/</span> Offensive
                  Security
                </p>
                <p>
                  focus: [<span className="text-signal">SIEM</span>,{" "}
                  <span className="text-signal">PenTest</span>,{" "}
                  <span className="text-signal">AI-Security</span>]
                </p>
                <p>
                  clearance: <span className="text-signal">verified</span>
                  <span className="caret ml-1 inline-block h-3.5 w-[0.5ch] translate-y-0.5 bg-primary" />
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-mono text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                View operations <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="surface inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-sm transition-colors hover:border-primary/40"
              >
                <Terminal className="h-4 w-4 text-primary" /> Establish contact
              </a>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <Section
          id="expertise"
          eyebrow="01 / capability matrix"
          title="Expertise & stack"
          subtitle="Depth across detection, offence and the emerging AI attack surface."
        >
          <div className="grid gap-4 lg:grid-cols-4">
            {BENTO.map((item, i) => (
              <Reveal key={item.title} delay={i * 70} className={item.span}>
                <article className="surface group flex h-full flex-col rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
                  <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <h3 className="min-w-0 font-mono text-base font-semibold">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-secondary px-2 py-1 font-mono text-[0.68rem] text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center gap-2 pt-6">
                    {item.verified ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-signal/40 bg-signal/12 px-2.5 py-1 font-mono text-[0.68rem] font-medium text-signal">
                        <BadgeCheck className="h-3.5 w-3.5" /> GOOGLE AI ESSENTIALS
                      </span>
                    ) : (
                      <span className="font-mono text-[0.68rem] tracking-wide text-muted-foreground">
                        {item.metric}
                      </span>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section
          id="projects"
          eyebrow="02 / live monitor"
          title="Project dashboard"
          subtitle="Selected builds and engagements, instrumented like production systems."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.name} delay={i * 70}>
                <article className="surface group h-full rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                    <h3 className="min-w-0 truncate font-mono text-lg font-bold tracking-tight">
                      {p.name}
                    </h3>
                    <span
                      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border border-current/25 px-2.5 py-1 font-mono text-[0.62rem] tracking-wider ${toneClass(p.tone)}`}
                    >
                      <span className="live-dot h-1.5 w-1.5 rounded-full bg-current" />
                      {p.status}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

                  <dl className="mt-5 grid grid-cols-2 gap-3">
                    {p.stats.map(([k, v]) => (
                      <div key={k} className="rounded-xl bg-secondary/60 px-3 py-2.5">
                        <dt className="font-mono text-[0.62rem] tracking-wider text-muted-foreground uppercase">
                          {k}
                        </dt>
                        <dd className="mt-0.5 font-mono text-lg font-semibold">{v}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-glass-border px-2 py-1 font-mono text-[0.68rem] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-primary transition-transform group-hover:translate-x-0.5"
                  >
                    View analysis <ArrowUpRight className="h-4 w-4" />
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Certifications */}
        <Section
          id="credentials"
          eyebrow="03 / credential ledger"
          title="Certifications"
          subtitle="Verified training across defensive, offensive and AI disciplines."
        >
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 pb-5">
            <div className="h-px bg-border" />
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => shiftCert(-1)}
                disabled={certIndex === 0}
                aria-label="Previous certification"
                className="surface grid h-9 w-9 place-items-center rounded-full transition-colors hover:border-primary/40 disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => shiftCert(1)}
                disabled={certIndex >= CERTS.length - 1}
                aria-label="Next certification"
                className="surface grid h-9 w-9 place-items-center rounded-full transition-colors hover:border-primary/40 disabled:opacity-40"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(calc(${-certIndex} * (19rem + 1rem)))` }}
            >
              {CERTS.map((c) => (
                <article
                  key={c.name}
                  className={`surface relative w-[19rem] shrink-0 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 ${
                    c.featured ? "border-primary/45" : ""
                  }`}
                >
                  {c.featured && (
                    <span className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full bg-primary px-2.5 py-1 font-mono text-[0.62rem] font-semibold tracking-wider text-primary-foreground">
                      <BadgeCheck className="h-3.5 w-3.5" /> VERIFIED
                    </span>
                  )}
                  <p className="font-mono text-xs tracking-[0.25em] text-primary">{c.year}</p>
                  <h3 className="mt-3 font-mono text-lg leading-snug font-semibold">{c.name}</h3>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{c.issuer}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.note}</p>
                  <div className="mt-6 flex items-center gap-2 border-t border-glass-border pt-4">
                    <Activity className="h-3.5 w-3.5 text-signal" />
                    <span className="font-mono text-[0.68rem] text-muted-foreground">
                      credential active
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section
          id="contact"
          eyebrow="04 / secure channel"
          title="Establish contact"
          subtitle="Messages are reviewed personally. No recruiters' bots, please."
        >
          <div className="surface overflow-hidden rounded-2xl">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-glass-border px-5 py-3">
              <div className="flex min-w-0 items-center gap-2">
                <Terminal className="h-4 w-4 shrink-0 text-primary" />
                <span className="truncate font-mono text-xs text-muted-foreground">
                  secure-shell — contact@lesego.sec
                </span>
              </div>
              <span className="flex shrink-0 items-center gap-1.5 font-mono text-[0.62rem] text-signal">
                <span className="live-dot h-1.5 w-1.5 rounded-full bg-signal" /> TLS 1.3
              </span>
            </div>

            <form onSubmit={onSubmit} className="space-y-5 p-6 font-mono text-sm sm:p-8">
              <TerminalField label="identity" name="name" placeholder="Jane Doe" />
              <TerminalField
                label="callback"
                name="email"
                type="email"
                placeholder="jane@company.com"
              />
              <div>
                <label
                  htmlFor="message"
                  className="flex items-center gap-2 text-xs text-muted-foreground"
                >
                  <span className="text-primary">$</span> payload --message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Describe the role, engagement or threat scenario..."
                  className="mt-2 w-full resize-none rounded-xl border border-glass-border bg-secondary/50 px-4 py-3 font-mono text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-mono text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              >
                {sending ? "encrypting..." : "transmit"} <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </Section>
      </main>

      <footer className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t border-border pt-8 sm:flex sm:justify-between">
          <p className="min-w-0 font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Lesego Sibaca — Johannesburg, ZA
          </p>
          <div className="flex shrink-0 items-center gap-2">
            {[
              { icon: Github, label: "GitHub" },
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Mail, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href="#contact"
                aria-label={s.label}
                className="surface grid h-9 w-9 place-items-center rounded-full transition-colors hover:border-primary/40"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-28 px-4 py-16 sm:px-6 lg:py-24">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">{eyebrow}</p>
        <h2 className="mt-4 font-mono text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{subtitle}</p>
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function TerminalField({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="flex items-center gap-2 text-xs text-muted-foreground">
        <span className="text-primary">$</span> set --{label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-glass-border bg-secondary/50 px-4 py-3 font-mono text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60"
      />
    </div>
  );
}
