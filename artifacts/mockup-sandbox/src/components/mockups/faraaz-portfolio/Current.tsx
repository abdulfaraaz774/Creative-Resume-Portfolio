import './_group.css';
import { useState } from 'react';
import { ArrowDown, ArrowDownRight, ArrowUpRight, Check, Download, Mail, MapPin, Menu, Phone, Radio, Server, ShieldCheck, Wrench, X } from 'lucide-react';

const experience = [
  {
    period: '2025 — 2026',
    company: 'Omnicom Media Pvt Ltd',
    role: 'IT System Administrator | Network Support',
    intro: 'Keeping workplace technology dependable, from a user’s first login to the network beneath it.',
    points: [
      'Supported Windows desktops, laptops, applications, printers and network devices.',
      'Troubleshot LAN/WAN, TCP/IP, DNS, DHCP, Wi-Fi, IP configuration and internet connectivity.',
      'Managed user accounts, permissions and password resets; prepared workstations and provided basic Active Directory support.',
      'Resolved hardware, software, system and network incidents, escalating infrastructure issues when needed.',
    ],
  },
  {
    period: '2020 — 2025',
    company: 'Helson Software Solutions Pvt Ltd',
    role: 'System Administrator | IT Support Engineer',
    intro: 'A broad hands-on support role across end-user systems, identity and office connectivity.',
    points: [
      'Installed, configured and maintained Windows systems, computers, applications, drivers and peripherals.',
      'Delivered Level 1 and Level 2 support for hardware, software, operating systems, printers and access.',
      'Supported Active Directory, user accounts, permissions and password management.',
      'Worked with DNS, DHCP, TCP/IP and LAN troubleshooting.',
    ],
  },
  {
    period: '2017 — 2020',
    company: 'Adtech Corp Technologies Pvt Ltd',
    role: 'IT Network Administrator | System Support Technician',
    intro: 'Built a practical foundation in network operations and calm, user-focused troubleshooting.',
    points: [
      'Maintained LAN/WAN, TCP/IP, IP addressing, Wi-Fi, routers, switches and connected devices.',
      'Supported Windows, applications, computer hardware and peripherals.',
      'Resolved network and system incidents; provided end-user and access support.',
      'Set up workstations and carried out preventive maintenance.',
    ],
  },
];

const skillGroups = [
  { title: 'End-user support', icon: Wrench, items: ['Desktop & helpdesk support', 'Ticketing & incident handling', 'Remote support', 'Hardware & software troubleshooting', 'Printers & peripherals'] },
  { title: 'Systems & identity', icon: Server, items: ['Windows 10 / 11', 'Windows Server', 'Active Directory', 'User administration', 'Group Policy', 'Configuration & patching', 'Backup & recovery', 'Preventive maintenance'] },
  { title: 'Networks', icon: Radio, items: ['LAN / WAN', 'TCP/IP', 'DNS & DHCP', 'IP configuration', 'Connectivity diagnostics', 'Network fault isolation', 'Routers & switches', 'Firewalls'] },
];

const navItems = [
  ['about', 'Profile'],
  ['strengths', 'Strengths'],
  ['experience', 'Experience'],
  ['skills', 'Skills'],
  ['education', 'Education'],
  ['contact', 'Contact'],
];

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="portfolio-shell page-grid grain min-h-[100dvh] bg-[#f5f1e7] text-[#24333a]">
      <header className="sticky top-0 z-40 border-b border-[#d9d4c8] bg-[#f5f1e7]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-12">
          <a href="#top" aria-label="Faraaz Abdul Khader, back to top" className="group flex items-center gap-3" data-testid="link-home">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#28534d] font-serif text-[15px] font-bold text-[#f5f1e7]">FA</span>
            <span className="hidden text-[13px] font-extrabold tracking-[-.03em] sm:block">Faraaz Abdul Khader</span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-5 py-1 text-[11px] font-bold text-[#62716f] md:flex md:gap-7 md:text-xs">
            {navItems.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="whitespace-nowrap transition-colors hover:text-[#c86648] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#28534d]" data-testid={`link-nav-${id}`}>{label}</a>
            ))}
          </nav>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border border-[#d9d4c8] text-[#28534d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#28534d] md:hidden"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            data-testid="button-mobile-navigation"
          >
            {isMobileMenuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
          <a href="/__mockup/images/faraaz-abdul-khader-resume.pdf" download className="hidden items-center gap-2 border border-[#28534d] px-4 py-2.5 text-[11px] font-extrabold uppercase tracking-[.08em] text-[#28534d] transition-colors hover:bg-[#28534d] hover:text-[#f5f1e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#28534d] md:flex" data-testid="link-download-cv">
            <Download size={14} aria-hidden="true" /> Resume
          </a>
        </div>
        <nav id="mobile-navigation" aria-label="Mobile navigation" className={`${isMobileMenuOpen ? 'grid' : 'hidden'} grid-cols-2 gap-2 border-t border-[#d9d4c8] px-5 py-3 text-xs font-bold text-[#62716f] sm:px-8 md:hidden`}>
          {navItems.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setIsMobileMenuOpen(false)} className="px-2 py-2.5 transition-colors hover:text-[#c86648] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#28534d]" data-testid={`link-mobile-nav-${id}`}>{label}</a>
          ))}
        </nav>
      </header>

      <section id="top" className="relative mx-auto grid min-h-[650px] max-w-[1320px] items-center gap-12 px-5 pb-16 pt-14 sm:px-8 md:min-h-[690px] md:grid-cols-[1.2fr_.8fr] md:gap-8 md:py-20 lg:px-12">
        <div className="relative z-10">
          <div className="eyebrow reveal flex items-center gap-3 text-[#28534d]">
            <span className="inline-block h-[1px] w-8 bg-[#c86648]" />
            IT systems · support · networks
          </div>
          <h1 className="reveal reveal-delay-1 mt-7 max-w-[760px] text-balance text-[clamp(3.1rem,8.2vw,7.3rem)] font-extrabold leading-[.91] tracking-[-.075em]">
            Calm hands.<br />
            <span className="display-serif font-semibold italic tracking-[-.065em] text-[#28534d]">Reliable</span> systems.
          </h1>
          <p className="reveal reveal-delay-2 mt-7 max-w-[610px] text-lg leading-[1.75] text-[#52625f] sm:text-xl">
            I’m <strong className="font-extrabold text-[#24333a]">Faraaz Abdul Khader</strong> — an IT System Administrator and support professional with 9+ years helping people and workplace technology work better together.
          </p>
          <div className="reveal reveal-delay-2 mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
            <span className="inline-flex items-center gap-2 text-[#394a4b]" data-testid="text-location"><MapPin size={15} className="text-[#c86648]" aria-hidden="true" /> Dubai, UAE</span>
            <span className="inline-flex items-center gap-2 text-[#28534d]" data-testid="status-availability"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#71977c] opacity-55" /><span className="relative inline-flex h-2 w-2 rounded-full bg-[#4c805f]" /></span> Open to IT opportunities</span>
          </div>
          <div className="reveal reveal-delay-3 mt-9 flex flex-wrap items-center gap-3">
            <a href="mailto:abdulfaraaz94@gmail.com" className="inline-flex min-h-12 items-center gap-3 bg-[#28534d] px-5 py-3 text-sm font-extrabold text-[#f8f4e9] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#c86648]" data-testid="link-email-hero">
              <Mail size={16} aria-hidden="true" /> Let’s talk <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a href="/__mockup/images/faraaz-abdul-khader-resume.pdf" download className="inline-flex min-h-12 items-center gap-2 border border-[#cbc6b9] px-5 py-3 text-sm font-bold text-[#394a4b] transition-colors hover:border-[#28534d] hover:text-[#28534d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#28534d]" data-testid="link-download-cv-hero">
              <Download size={15} aria-hidden="true" /> Download CV
            </a>
          </div>
          <a href="#about" className="eyebrow mt-12 inline-flex items-center gap-3 text-[#89918a] hover:text-[#28534d]" data-testid="link-scroll-profile">
            Scroll to explore <ArrowDown size={13} aria-hidden="true" />
          </a>
        </div>

        <div className="reveal reveal-delay-2 relative mx-auto w-full max-w-[430px] md:justify-self-end">
          <div aria-hidden="true" className="absolute -right-5 -top-5 h-24 w-24 border-r border-t border-[#c86648] sm:-right-7 sm:-top-7 sm:h-32 sm:w-32" />
          <div aria-hidden="true" className="absolute -bottom-5 -left-5 h-20 w-20 border-b border-l border-[#28534d] sm:-bottom-7 sm:-left-7 sm:h-28 sm:w-28" />
          <div className="relative aspect-[.88] overflow-hidden border-[10px] border-[#e6e0d2] bg-[#e0dacd] sm:border-[14px]">
          <img src="/__mockup/images/faraaz-headshot.jpeg" alt="Faraaz Abdul Khader" className="h-full w-full object-cover object-center" data-testid="img-faraaz-headshot" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#192a2a]/75 to-transparent px-5 pb-5 pt-20 text-[#fffaf1]">
              <span className="eyebrow text-[#e8c9ae]">Based in Dubai</span>
              <p className="mt-1 text-lg font-extrabold tracking-[-.03em]">People-first. Systems-minded.</p>
            </div>
          </div>
          <div className="absolute -left-3 top-10 flex -translate-x-full items-center gap-2 text-[#647673] md:-left-6">
            <span className="eyebrow [writing-mode:vertical-rl] rotate-180">IT that works for people</span>
            <span className="h-16 w-px bg-[#c86648]" />
          </div>
        </div>
      </section>

      <div className="border-y border-[#d9d4c8] bg-[#eee9dc]">
        <div className="mx-auto grid max-w-[1320px] grid-cols-2 divide-x divide-[#d9d4c8] px-5 sm:px-8 md:grid-cols-4 lg:px-12">
          {[
            ['9+', 'years in IT support'],
            ['3', 'organizations supported'],
            ['L1 / L2', 'end-user support'],
            ['Dubai', 'United Arab Emirates'],
          ].map(([value, label], index) => (
            <div key={label} className={`py-5 sm:py-6 ${index > 1 ? 'border-t border-[#d9d4c8] md:border-t-0' : ''} ${index % 2 === 1 ? 'pl-5 sm:pl-8 md:pl-10' : 'pr-5 sm:pr-8 md:pr-10'}`} data-testid={`stat-highlight-${index}`}>
              <div className="display-serif text-[1.8rem] leading-none text-[#28534d] sm:text-[2.15rem]">{value}</div>
              <div className="mt-2 text-[10px] font-bold uppercase tracking-[.12em] text-[#737c73] sm:text-[11px]">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <section id="about" className="mx-auto grid max-w-[1320px] gap-8 px-5 py-24 sm:px-8 md:grid-cols-[.72fr_1.28fr] md:gap-16 md:py-32 lg:px-12">
        <div>
          <p className="eyebrow flex items-center gap-3 text-[#c86648]"><span>01</span><span className="h-px w-8 bg-[#c86648]" /> Profile</p>
          <h2 className="display-serif mt-5 max-w-sm text-4xl leading-[1.08] tracking-[-.035em] sm:text-5xl">A steady partner for the everyday work of IT.</h2>
        </div>
        <div className="pt-1">
          <p className="max-w-[760px] text-lg leading-[1.8] text-[#52625f]">
            I support the technology people rely on every day: Windows endpoints, accounts and access, office networks, printers and the issues that interrupt work. Over more than nine years, I’ve worked across system administration, network support and hands-on service desk responsibilities.
          </p>
          <p className="mt-5 max-w-[760px] text-base leading-[1.85] text-[#687572]">
            My approach is practical and clear: listen carefully, isolate the cause, restore service and keep the person informed. I’m comfortable working across hardware, software, identity and connectivity—and know when an issue needs to be escalated.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {['Windows environments', 'Active Directory', 'LAN / WAN', 'User support', 'Incident resolution'].map((item) => (
              <span key={item} className="border border-[#d8d2c4] bg-[#f8f5ed] px-3 py-2 text-xs font-bold text-[#52625f]">{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="strengths" className="bg-[#28534d] text-[#f5f1e7]">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-20 sm:px-8 md:grid-cols-[.76fr_1.24fr] md:gap-16 md:py-24 lg:px-12">
          <div>
            <p className="eyebrow flex items-center gap-3 text-[#e3a080]"><span>02</span><span className="h-px w-8 bg-[#e3a080]" /> How I work</p>
            <h2 className="display-serif mt-5 max-w-sm text-4xl leading-tight tracking-[-.035em] sm:text-5xl">Good support is a technical skill—and a human one.</h2>
          </div>
          <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2 sm:pt-5">
            {[
              ['01', 'Start with the person', 'Understand what stopped working and what the user needs to get back to.'],
              ['02', 'Trace the fault', 'Check the endpoint, account, application and connection methodically.'],
              ['03', 'Restore with care', 'Resolve what I can, protect access and escalate infrastructure issues appropriately.'],
              ['04', 'Make it understandable', 'Keep users informed in plain language while work is underway.'],
            ].map(([n, title, body]) => (
              <article key={n} className="border-t border-[#6d9185] pt-4">
                <span className="mono text-xs text-[#e3a080]">{n}</span>
                <h3 className="mt-3 text-lg font-extrabold tracking-[-.025em]">{title}</h3>
                <p className="mt-2 max-w-[320px] text-sm leading-7 text-[#d0ddd2]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="mb-12 grid gap-5 md:grid-cols-[.72fr_1.28fr] md:items-end md:gap-16">
          <div>
            <p className="eyebrow flex items-center gap-3 text-[#c86648]"><span>03</span><span className="h-px w-8 bg-[#c86648]" /> Career history</p>
            <h2 className="display-serif mt-5 text-4xl tracking-[-.035em] sm:text-5xl">Work, kept working.</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[#687572]">Nine years across IT administration, network support and day-to-day service—built through hands-on work with users, endpoints and office infrastructure.</p>
        </div>
        <div className="border-t border-[#d8d2c4]">
          {experience.map((job, index) => (
            <article key={job.company} className="grid gap-5 border-b border-[#d8d2c4] py-8 sm:py-10 md:grid-cols-[.35fr_1.65fr] md:gap-12" data-testid={`experience-${index}`}>
              <div className="flex items-start justify-between gap-3 md:block">
                <span className="eyebrow text-[#c86648]">{job.period}</span>
                <span className="mono text-xs text-[#92968d] md:mt-3 md:block">0{index + 1}</span>
              </div>
              <div>
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-xl font-extrabold tracking-[-.035em] sm:text-2xl">{job.company}</h3>
                    <p className="mt-1 text-sm font-semibold text-[#28534d]">{job.role}</p>
                  </div>
                  <ArrowDownRight className="hidden text-[#c86648] sm:block" size={19} aria-hidden="true" />
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#687572]">{job.intro}</p>
                <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-[13px] leading-6 text-[#52625f]">
                      <Check size={14} className="mt-1 shrink-0 text-[#c86648]" aria-hidden="true" />{point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="bg-[#eae5d8]">
        <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 md:py-28 lg:px-12">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow flex items-center gap-3 text-[#c86648]"><span>04</span><span className="h-px w-8 bg-[#c86648]" /> Toolkit</p>
              <h2 className="display-serif mt-5 text-4xl tracking-[-.035em] sm:text-5xl">The practical details.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#687572]">The systems, tools and support disciplines I work across, grouped for a quick read.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {skillGroups.map((group, groupIndex) => {
              const Icon = group.icon;
              return (
                <article key={group.title} className="border border-[#d2ccbd] bg-[#f5f1e7] p-6 sm:p-7" data-testid={`skill-group-${groupIndex}`}>
                  <div className="flex items-center justify-between">
                    <span className="mono text-xs text-[#c86648]">0{groupIndex + 1} / 03</span>
                    <Icon size={19} strokeWidth={1.6} className="text-[#28534d]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-7 text-lg font-extrabold tracking-[-.03em]">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => <span key={item} className="skill-pill border border-[#d8d2c4] px-2.5 py-1.5 text-[11px] font-semibold text-[#596966]">{item}</span>)}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="education" className="mx-auto grid max-w-[1320px] gap-8 px-5 py-24 sm:px-8 md:grid-cols-[.72fr_1.28fr] md:gap-16 md:py-28 lg:px-12">
        <div>
          <p className="eyebrow flex items-center gap-3 text-[#c86648]"><span>05</span><span className="h-px w-8 bg-[#c86648]" /> Education</p>
          <h2 className="display-serif mt-5 text-4xl tracking-[-.035em] sm:text-5xl">Grounded in IT.</h2>
        </div>
        <article className="flex flex-col justify-between gap-5 border-t border-[#d8d2c4] pt-5 sm:flex-row sm:items-start">
          <div>
            <p className="eyebrow text-[#c86648]">2012 — 2016</p>
            <h3 className="mt-3 text-xl font-extrabold tracking-[-.03em] sm:text-2xl">B.Tech, Information Technology</h3>
            <p className="mt-2 text-sm font-semibold text-[#687572]">Jawaharlal Nehru Technological University, Hyderabad</p>
          </div>
          <ShieldCheck size={24} strokeWidth={1.5} className="text-[#28534d]" aria-hidden="true" />
        </article>
      </section>

      <section id="contact" className="relative overflow-hidden bg-[#24383b] text-[#f5f1e7]">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-40 h-[450px] w-[450px] rounded-full border border-[#647e74]/40 sm:-right-10 sm:-top-52 sm:h-[600px] sm:w-[600px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-28 h-[340px] w-[340px] rounded-full border border-[#647e74]/35 sm:right-16 sm:-top-32 sm:h-[420px] sm:w-[420px]" />
        <div className="relative mx-auto max-w-[1320px] px-5 py-20 sm:px-8 md:py-28 lg:px-12">
          <p className="eyebrow flex items-center gap-3 text-[#e3a080]"><span>06</span><span className="h-px w-8 bg-[#e3a080]" /> Contact</p>
          <div className="mt-8 grid gap-10 md:grid-cols-[1.2fr_.8fr] md:items-end">
            <div>
              <h2 className="display-serif max-w-[780px] text-5xl leading-[1.05] tracking-[-.04em] sm:text-6xl lg:text-7xl">Need IT support that keeps people moving?</h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-[#c3d0c9]">I’m based in Dubai and open to new opportunities. Reach out and let’s talk about the support your team needs.</p>
              <a href="mailto:abdulfaraaz94@gmail.com" className="mt-8 inline-flex items-center gap-3 border-b border-[#e3a080] pb-2 text-lg font-bold text-[#f5f1e7] transition-colors hover:text-[#e3a080] sm:text-xl" data-testid="link-email-contact">
                abdulfaraaz94@gmail.com <ArrowUpRight size={19} aria-hidden="true" />
              </a>
            </div>
            <div className="grid gap-4 border-t border-[#607674] pt-5 md:justify-self-end md:border-t-0 md:pt-0">
              <a href="tel:+971555447027" className="flex items-center gap-4 text-sm font-bold text-[#e5e9df] transition-colors hover:text-[#e3a080]" data-testid="link-phone-contact">
                <span className="flex h-10 w-10 items-center justify-center border border-[#607674]"><Phone size={16} aria-hidden="true" /></span>
                +971 55 544 7027
              </a>
              <a href="/__mockup/images/faraaz-abdul-khader-resume.pdf" download className="flex items-center gap-4 text-sm font-bold text-[#e5e9df] transition-colors hover:text-[#e3a080]" data-testid="link-download-cv-contact">
                <span className="flex h-10 w-10 items-center justify-center border border-[#607674]"><Download size={16} aria-hidden="true" /></span>
                Download my CV <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              <div className="flex items-center gap-4 text-sm font-bold text-[#e5e9df]" data-testid="text-dubai-contact">
                <span className="flex h-10 w-10 items-center justify-center border border-[#607674]"><MapPin size={16} aria-hidden="true" /></span>
                Dubai, United Arab Emirates
              </div>
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-3 border-t border-[#607674] pt-5 text-[10px] font-semibold uppercase tracking-[.1em] text-[#aabbb1] sm:flex-row sm:items-center">
            <span>Faraaz Abdul Khader <span className="px-2 text-[#e3a080]">/</span> IT Systems & Support</span>
            <a href="#top" className="inline-flex items-center gap-2 transition-colors hover:text-[#f5f1e7]" data-testid="link-back-to-top">Back to top <ArrowUpRight size={13} aria-hidden="true" /></a>
            <span>Dubai, UAE</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
