import './_group.css';
import { useState } from 'react';
import { ArrowDown, ArrowUpRight, Check, Download, Mail, MapPin, Menu, Phone, Radio, Server, ShieldCheck, Wrench, X } from 'lucide-react';

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

function ResumeInspired() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="ri-page" id="top">
      <style>{`
        .ri-page {
          --ri-ink: #24383b;
          --ri-teal: #174d4a;
          --ri-deep: #123b3a;
          --ri-muted: #637174;
          --ri-line: #d9e1df;
          --ri-paper: #fff;
          --ri-wash: #f2f7f6;
          --ri-gold: #c58b50;
          min-height: 100dvh;
          background: var(--ri-paper);
          color: var(--ri-ink);
          font-family: var(--app-font-sans);
          overflow: clip;
        }
        .ri-page * { box-sizing: border-box; }
        .ri-page a { color: inherit; text-decoration: none; }
        .ri-page a:focus-visible, .ri-page button:focus-visible { outline: 2px solid var(--ri-gold); outline-offset: 4px; }
        .ri-wrap { width: min(1160px, calc(100% - 48px)); margin: 0 auto; }
        .ri-mono { font-family: var(--app-font-mono); }
        .ri-kicker { color: var(--ri-teal); font: 500 10px/1.5 var(--app-font-mono); letter-spacing: .16em; text-transform: uppercase; }
        .ri-header { position: sticky; top: 0; z-index: 30; background: rgba(255,255,255,.96); border-bottom: 1px solid var(--ri-line); backdrop-filter: blur(12px); }
        .ri-header-inner { min-height: 70px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
        .ri-brand { display: flex; align-items: center; gap: 12px; font-size: 12px; font-weight: 800; letter-spacing: -.025em; white-space: nowrap; }
        .ri-monogram { display: grid; place-items: center; width: 34px; height: 34px; background: var(--ri-teal); color: white; font: 500 11px var(--app-font-mono); }
        .ri-nav { display: flex; align-items: center; gap: clamp(12px, 2vw, 25px); color: #536568; font-size: 11px; font-weight: 700; }
        .ri-nav a, .ri-mobile-nav a { transition: color .18s ease; }
        .ri-nav a:hover, .ri-mobile-nav a:hover { color: var(--ri-gold); }
        .ri-download { display: inline-flex; align-items: center; gap: 8px; border: 1px solid var(--ri-teal); padding: 10px 13px; color: var(--ri-teal) !important; font: 700 10px var(--app-font-mono); letter-spacing: .05em; text-transform: uppercase; transition: background .2s, color .2s; white-space: nowrap; }
        .ri-download:hover { background: var(--ri-teal); color: white !important; }
        .ri-menu-button { display: none; border: 1px solid var(--ri-line); background: white; width: 40px; height: 40px; color: var(--ri-teal); align-items: center; justify-content: center; }
        .ri-mobile-nav { display: none; }
        .ri-hero { position: relative; padding: 76px 0 74px; }
        .ri-hero-grid { display: grid; grid-template-columns: minmax(0, 1.3fr) minmax(270px, .7fr); align-items: center; gap: clamp(48px, 8vw, 110px); }
        .ri-hero-copy { position: relative; z-index: 1; }
        .ri-hero-overline { display: flex; align-items: center; gap: 11px; }
        .ri-hero-overline:before { content: ''; width: 26px; height: 2px; background: var(--ri-gold); }
        .ri-title { margin: 22px 0 0; max-width: 680px; font-size: clamp(44px, 7vw, 78px); font-weight: 800; line-height: .98; letter-spacing: -.075em; }
        .ri-title em { color: var(--ri-teal); font: 600 1em/.98 var(--app-font-serif); letter-spacing: -.065em; }
        .ri-roleline { margin: 18px 0 0; color: var(--ri-teal); font-size: 12px; font-weight: 800; letter-spacing: .01em; }
        .ri-summary { max-width: 600px; margin: 23px 0 0; color: #58676a; font-size: 16px; line-height: 1.85; }
        .ri-facts { display: flex; flex-wrap: wrap; gap: 12px 23px; margin-top: 23px; color: #47585b; font-size: 12px; font-weight: 700; }
        .ri-fact { display: inline-flex; align-items: center; gap: 7px; }
        .ri-fact svg { color: var(--ri-gold); }
        .ri-hero-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 28px; }
        .ri-primary-action, .ri-secondary-action { min-height: 44px; display: inline-flex; align-items: center; justify-content: center; gap: 9px; padding: 0 16px; font-size: 12px; font-weight: 800; transition: transform .18s, background .18s, color .18s; }
        .ri-primary-action { background: var(--ri-teal); color: white !important; }
        .ri-primary-action:hover, .ri-secondary-action:hover { transform: translateY(-2px); }
        .ri-secondary-action { border: 1px solid var(--ri-line); color: var(--ri-ink) !important; }
        .ri-secondary-action:hover { border-color: var(--ri-teal); color: var(--ri-teal) !important; }
        .ri-photo-wrap { position: relative; width: min(100%, 340px); justify-self: end; }
        .ri-photo-wrap:before { content: ''; position: absolute; inset: -13px 13px 13px -13px; border: 1px solid #b8ceca; }
        .ri-photo-wrap:after { content: 'DUBAI · UAE'; position: absolute; right: -16px; bottom: 21px; padding: 10px 12px; background: var(--ri-teal); color: white; font: 500 9px var(--app-font-mono); letter-spacing: .14em; writing-mode: vertical-rl; }
        .ri-photo { position: relative; display: block; width: 100%; aspect-ratio: .83; object-fit: cover; object-position: center; background: #e8efed; filter: saturate(.82); }
        .ri-photo-caption { position: relative; display: flex; justify-content: space-between; gap: 14px; margin-top: 13px; color: #758184; font: 10px var(--app-font-mono); letter-spacing: .08em; text-transform: uppercase; }
        .ri-ribbon { background: var(--ri-deep); color: white; }
        .ri-ribbon-inner { display: grid; grid-template-columns: repeat(4, 1fr); }
        .ri-stat { position: relative; min-height: 90px; display: flex; flex-direction: column; justify-content: center; padding: 14px 25px; border-right: 1px solid rgba(255,255,255,.17); }
        .ri-stat:first-child { border-left: 1px solid rgba(255,255,255,.17); }
        .ri-stat-value { font: 600 24px/.95 var(--app-font-serif); color: #f2cf9f; }
        .ri-stat-label { margin-top: 8px; color: #d3e0dc; font: 500 9px/1.4 var(--app-font-mono); letter-spacing: .09em; text-transform: uppercase; }
        .ri-section { padding: 76px 0; scroll-margin-top: 82px; }
        .ri-section-head { display: grid; grid-template-columns: .65fr 1.35fr; gap: 50px; margin-bottom: 35px; }
        .ri-section-label { display: flex; align-items: center; gap: 10px; color: var(--ri-gold); font: 500 10px var(--app-font-mono); letter-spacing: .12em; text-transform: uppercase; }
        .ri-section-label:after { content: ''; height: 1px; width: 28px; background: currentColor; }
        .ri-section-title { margin: 13px 0 0; font: 600 clamp(28px, 4vw, 42px)/1.1 var(--app-font-serif); letter-spacing: -.035em; }
        .ri-profile-copy { padding-top: 2px; max-width: 750px; }
        .ri-profile-copy p { margin: 0; color: #59696b; font-size: 14px; line-height: 1.9; }
        .ri-profile-copy p + p { margin-top: 14px; color: #6e7b7d; }
        .ri-tags { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 21px; }
        .ri-tag { padding: 7px 9px; border: 1px solid #d7e1df; color: #536568; font-size: 10px; font-weight: 700; }
        .ri-strengths { background: var(--ri-teal); color: white; }
        .ri-strengths .ri-section-title { max-width: 360px; }
        .ri-strengths-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 26px 38px; padding-top: 4px; }
        .ri-strength { border-top: 1px solid rgba(255,255,255,.3); padding-top: 13px; }
        .ri-strength-num { color: #e4b985; font: 500 10px var(--app-font-mono); }
        .ri-strength h3 { margin: 9px 0 6px; font-size: 15px; letter-spacing: -.02em; }
        .ri-strength p { max-width: 310px; margin: 0; color: #d1e0dc; font-size: 12px; line-height: 1.75; }
        .ri-experience { border-top: 1px solid var(--ri-line); }
        .ri-intro-line { max-width: 560px; margin: 0; color: #697779; font-size: 13px; line-height: 1.8; }
        .ri-career-list { border-top: 1px solid var(--ri-line); }
        .ri-career { display: grid; grid-template-columns: 190px minmax(0, 1fr); gap: 36px; padding: 30px 0; border-bottom: 1px solid var(--ri-line); }
        .ri-career-date { color: var(--ri-teal); font: 500 10px var(--app-font-mono); letter-spacing: .1em; text-transform: uppercase; }
        .ri-career-index { display: block; margin-top: 10px; color: #a5b0af; font: 10px var(--app-font-mono); }
        .ri-career-title-row { display: flex; justify-content: space-between; gap: 20px; }
        .ri-career h3 { margin: 0; font-size: 19px; font-weight: 800; letter-spacing: -.045em; }
        .ri-career-role { margin: 5px 0 0; color: var(--ri-teal); font-size: 12px; font-weight: 800; }
        .ri-career-arrow { color: var(--ri-gold); }
        .ri-career-intro { margin: 15px 0 0; color: #738083; font-size: 12px; line-height: 1.75; }
        .ri-bullets { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 9px 24px; margin: 15px 0 0; padding: 0; list-style: none; }
        .ri-bullets li { display: flex; gap: 8px; color: #526366; font-size: 11px; line-height: 1.65; }
        .ri-bullets svg { flex: 0 0 auto; margin-top: 2px; color: var(--ri-gold); }
        .ri-skills { background: var(--ri-wash); }
        .ri-skill-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .ri-skill-card { min-height: 210px; padding: 20px; border: 1px solid #d5e1df; background: white; transition: transform .2s, border-color .2s; }
        .ri-skill-card:hover { transform: translateY(-3px); border-color: #98b6b0; }
        .ri-skill-card-top { display: flex; justify-content: space-between; align-items: center; color: var(--ri-teal); }
        .ri-skill-card-top span { color: var(--ri-gold); font: 10px var(--app-font-mono); }
        .ri-skill-card h3 { margin: 22px 0 13px; font-size: 15px; font-weight: 800; letter-spacing: -.03em; }
        .ri-skill-items { display: flex; flex-wrap: wrap; gap: 6px; }
        .ri-skill-items span { padding: 6px 7px; background: #f3f7f6; color: #5b6b6c; font-size: 9px; font-weight: 700; line-height: 1.35; }
        .ri-education { padding-top: 66px; padding-bottom: 78px; }
        .ri-education-entry { display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; border-top: 1px solid var(--ri-line); padding-top: 18px; }
        .ri-education-date { color: var(--ri-teal); font: 500 10px var(--app-font-mono); letter-spacing: .1em; }
        .ri-education-entry h3 { margin: 12px 0 0; font-size: 19px; letter-spacing: -.035em; }
        .ri-education-entry p { margin: 7px 0 0; color: #718082; font-size: 12px; font-weight: 600; }
        .ri-education-entry svg { color: var(--ri-teal); }
        .ri-contact { background: var(--ri-deep); color: white; scroll-margin-top: 70px; }
        .ri-contact-inner { padding: 60px 0 25px; }
        .ri-contact .ri-section-label { color: #e7bc8a; }
        .ri-contact-grid { display: grid; grid-template-columns: 1.2fr .8fr; align-items: end; gap: 48px; margin-top: 27px; }
        .ri-contact-title { max-width: 660px; margin: 0; font: 600 clamp(36px, 5vw, 58px)/1.06 var(--app-font-serif); letter-spacing: -.045em; }
        .ri-contact-copy { max-width: 470px; margin: 14px 0 0; color: #c5d6d1; font-size: 13px; line-height: 1.8; }
        .ri-contact-email { display: inline-flex; align-items: center; gap: 10px; margin-top: 22px; padding-bottom: 7px; border-bottom: 1px solid #e4b985; color: white !important; font-size: 15px; font-weight: 800; }
        .ri-contact-email:hover { color: #e4b985 !important; }
        .ri-contact-details { display: grid; gap: 13px; justify-self: end; width: min(100%, 300px); }
        .ri-contact-row { display: flex; align-items: center; gap: 12px; color: #e3ece8; font-size: 11px; font-weight: 700; }
        .ri-contact-icon { display: grid; place-items: center; width: 37px; height: 37px; border: 1px solid #58716d; color: #e4b985; flex: 0 0 auto; }
        .ri-footer { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-top: 47px; padding-top: 15px; border-top: 1px solid #4c6864; color: #b4c5c0; font: 9px var(--app-font-mono); letter-spacing: .08em; text-transform: uppercase; }
        .ri-footer a { display: inline-flex; align-items: center; gap: 6px; }
        .ri-footer a:hover { color: white; }
        @media (max-width: 900px) {
          .ri-nav { gap: 12px; font-size: 10px; }
          .ri-header-inner { gap: 14px; }
          .ri-download { padding: 9px; }
          .ri-hero-grid { gap: 48px; grid-template-columns: minmax(0, 1fr) minmax(230px, .7fr); }
          .ri-photo-wrap { width: min(100%, 300px); }
          .ri-career { grid-template-columns: 145px minmax(0,1fr); gap: 24px; }
        }
        @media (max-width: 720px) {
          .ri-wrap { width: min(100% - 36px, 560px); }
          .ri-header-inner { min-height: 64px; }
          .ri-nav, .ri-header > .ri-wrap > .ri-header-inner > .ri-download { display: none; }
          .ri-menu-button { display: inline-flex; }
          .ri-mobile-nav { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2px 12px; padding: 11px 18px 15px; border-top: 1px solid var(--ri-line); color: #536568; font-size: 12px; font-weight: 700; }
          .ri-mobile-nav a { padding: 9px 4px; }
          .ri-hero { padding: 45px 0 52px; }
          .ri-hero-grid { grid-template-columns: 1fr; gap: 35px; }
          .ri-title { font-size: clamp(43px, 12vw, 66px); }
          .ri-summary { font-size: 14px; }
          .ri-photo-wrap { width: min(76%, 300px); justify-self: center; margin: 0 auto 10px; }
          .ri-photo-wrap:after { right: -12px; }
          .ri-ribbon-inner { grid-template-columns: repeat(2, 1fr); }
          .ri-stat { min-height: 77px; padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,.17); }
          .ri-stat:nth-child(odd) { border-left: 1px solid rgba(255,255,255,.17); }
          .ri-stat-value { font-size: 22px; }
          .ri-section { padding: 57px 0; }
          .ri-section-head { grid-template-columns: 1fr; gap: 17px; margin-bottom: 27px; }
          .ri-section-title { font-size: 33px; }
          .ri-strengths-grid { gap: 21px 20px; }
          .ri-career { grid-template-columns: 1fr; gap: 12px; padding: 24px 0; }
          .ri-career-index { display: inline; margin: 0 0 0 10px; }
          .ri-bullets { grid-template-columns: 1fr; gap: 7px; }
          .ri-skill-grid { grid-template-columns: 1fr; gap: 10px; }
          .ri-skill-card { min-height: auto; padding: 18px; }
          .ri-skill-card h3 { margin-top: 15px; }
          .ri-education { padding: 55px 0 60px; }
          .ri-contact-inner { padding-top: 52px; }
          .ri-contact-grid { grid-template-columns: 1fr; gap: 28px; }
          .ri-contact-title { font-size: clamp(38px, 11vw, 52px); }
          .ri-contact-details { justify-self: stretch; width: auto; padding-top: 19px; border-top: 1px solid #4c6864; }
          .ri-footer { align-items: flex-start; flex-direction: column; margin-top: 34px; }
        }
        @media (max-width: 390px) {
          .ri-wrap { width: calc(100% - 30px); }
          .ri-brand { font-size: 11px; }
          .ri-strengths-grid { grid-template-columns: 1fr; }
          .ri-contact-email { font-size: 13px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ri-page *, .ri-page *:before, .ri-page *:after { scroll-behavior: auto !important; transition-duration: .01ms !important; }
        }
      `}</style>

      <header className="ri-header">
        <div className="ri-wrap ri-header-inner">
          <a href="#top" className="ri-brand" aria-label="Faraaz Abdul Khader, back to top" data-testid="link-home">
            <span className="ri-monogram">FA</span><span>Faraaz Abdul Khader</span>
          </a>
          <nav className="ri-nav" aria-label="Main navigation">
            {navItems.map(([id, label]) => <a key={id} href={`#${id}`} data-testid={`link-nav-${id}`}>{label}</a>)}
          </nav>
          <a href="/__mockup/images/faraaz-abdul-khader-resume.pdf" download className="ri-download" data-testid="link-download-cv"><Download size={14} aria-hidden="true" /> Resume</a>
          <button className="ri-menu-button" type="button" aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isMobileMenuOpen} aria-controls="ri-mobile-navigation" onClick={() => setIsMobileMenuOpen((open) => !open)} data-testid="button-mobile-navigation">
            {isMobileMenuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
        {isMobileMenuOpen && <nav className="ri-mobile-nav" id="ri-mobile-navigation" aria-label="Mobile navigation">
          {navItems.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setIsMobileMenuOpen(false)} data-testid={`link-mobile-nav-${id}`}>{label}</a>)}
          <a href="/__mockup/images/faraaz-abdul-khader-resume.pdf" download onClick={() => setIsMobileMenuOpen(false)}>Download resume</a>
        </nav>}
      </header>

      <section className="ri-hero">
        <div className="ri-wrap ri-hero-grid">
          <div className="ri-hero-copy">
            <div className="ri-kicker ri-hero-overline">IT systems · support · networks</div>
            <h1 className="ri-title">Calm hands.<br /><em>Reliable</em> systems.</h1>
            <p className="ri-roleline">IT System Administrator &amp; Network Support</p>
            <p className="ri-summary">I’m <strong>Faraaz Abdul Khader</strong> — an IT System Administrator and support professional with 9+ years helping people and workplace technology work better together.</p>
            <div className="ri-facts">
              <span className="ri-fact" data-testid="text-location"><MapPin size={14} aria-hidden="true" /> Dubai, UAE</span>
              <span className="ri-fact" data-testid="status-availability"><span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4f8a68' }} aria-hidden="true" /> Open to IT opportunities</span>
            </div>
            <div className="ri-hero-actions">
              <a href="mailto:abdulfaraaz94@gmail.com" className="ri-primary-action" data-testid="link-email-hero"><Mail size={15} aria-hidden="true" /> Let’s talk <ArrowUpRight size={14} aria-hidden="true" /></a>
              <a href="/__mockup/images/faraaz-abdul-khader-resume.pdf" download className="ri-secondary-action" data-testid="link-download-cv-hero"><Download size={14} aria-hidden="true" /> Download CV</a>
            </div>
            <a href="#about" className="ri-kicker" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 29, color: '#879496' }} data-testid="link-scroll-profile">Profile <ArrowDown size={12} aria-hidden="true" /></a>
          </div>
          <div className="ri-photo-wrap">
            <img src="/__mockup/images/faraaz-headshot.jpeg" alt="Faraaz Abdul Khader" className="ri-photo" data-testid="img-faraaz-headshot" />
            <div className="ri-photo-caption"><span>People-first</span><span>Systems-minded</span></div>
          </div>
        </div>
      </section>

      <div className="ri-ribbon" aria-label="Career summary">
        <div className="ri-wrap ri-ribbon-inner">
          {[
            ['9+', 'years in IT support'],
            ['3', 'organizations supported'],
            ['L1 / L2', 'end-user support'],
            ['Dubai', 'United Arab Emirates'],
          ].map(([value, label], index) => <div className="ri-stat" key={label} data-testid={`stat-highlight-${index}`}><span className="ri-stat-value">{value}</span><span className="ri-stat-label">{label}</span></div>)}
        </div>
      </div>

      <section id="about" className="ri-section">
        <div className="ri-wrap">
          <div className="ri-section-head">
            <div><div className="ri-section-label">01 / Profile</div><h2 className="ri-section-title">A steady partner for the everyday work of IT.</h2></div>
            <div className="ri-profile-copy">
              <p>I support the technology people rely on every day: Windows endpoints, accounts and access, office networks, printers and the issues that interrupt work. Over more than nine years, I’ve worked across system administration, network support and hands-on service desk responsibilities.</p>
              <p>My approach is practical and clear: listen carefully, isolate the cause, restore service and keep the person informed. I’m comfortable working across hardware, software, identity and connectivity—and know when an issue needs to be escalated.</p>
              <div className="ri-tags">{['Windows environments', 'Active Directory', 'LAN / WAN', 'User support', 'Incident resolution'].map((item) => <span className="ri-tag" key={item}>{item}</span>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="strengths" className="ri-section ri-strengths">
        <div className="ri-wrap ri-section-head">
          <div><div className="ri-section-label">02 / How I work</div><h2 className="ri-section-title">Good support is a technical skill—and a human one.</h2></div>
          <div className="ri-strengths-grid">
            {[
              ['01', 'Start with the person', 'Understand what stopped working and what the user needs to get back to.'],
              ['02', 'Trace the fault', 'Check the endpoint, account, application and connection methodically.'],
              ['03', 'Restore with care', 'Resolve what I can, protect access and escalate infrastructure issues appropriately.'],
              ['04', 'Make it understandable', 'Keep users informed in plain language while work is underway.'],
            ].map(([n, title, body]) => <article className="ri-strength" key={n}><span className="ri-strength-num">{n}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>

      <section id="experience" className="ri-section ri-experience">
        <div className="ri-wrap">
          <div className="ri-section-head">
            <div><div className="ri-section-label">03 / Career history</div><h2 className="ri-section-title">Work, kept working.</h2></div>
            <p className="ri-intro-line">Nine years across IT administration, network support and day-to-day service—built through hands-on work with users, endpoints and office infrastructure.</p>
          </div>
          <div className="ri-career-list">
            {experience.map((job, index) => <article className="ri-career" key={job.company} data-testid={`experience-${index}`}>
              <div><span className="ri-career-date">{job.period}</span><span className="ri-career-index">0{index + 1}</span></div>
              <div>
                <div className="ri-career-title-row"><div><h3>{job.company}</h3><p className="ri-career-role">{job.role}</p></div><ArrowUpRight className="ri-career-arrow" size={17} aria-hidden="true" /></div>
                <p className="ri-career-intro">{job.intro}</p>
                <ul className="ri-bullets">{job.points.map((point) => <li key={point}><Check size={13} aria-hidden="true" />{point}</li>)}</ul>
              </div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="skills" className="ri-section ri-skills">
        <div className="ri-wrap">
          <div className="ri-section-head">
            <div><div className="ri-section-label">04 / Toolkit</div><h2 className="ri-section-title">The practical details.</h2></div>
            <p className="ri-intro-line">The systems, tools and support disciplines I work across, grouped for a quick read.</p>
          </div>
          <div className="ri-skill-grid">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return <article className="ri-skill-card" key={group.title} data-testid={`skill-group-${index}`}>
                <div className="ri-skill-card-top"><span>0{index + 1} / 03</span><Icon size={18} strokeWidth={1.7} aria-hidden="true" /></div>
                <h3>{group.title}</h3>
                <div className="ri-skill-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section id="education" className="ri-section ri-education">
        <div className="ri-wrap ri-section-head">
          <div><div className="ri-section-label">05 / Education</div><h2 className="ri-section-title">Grounded in IT.</h2></div>
          <article className="ri-education-entry">
            <div><span className="ri-education-date">2012 — 2016</span><h3>B.Tech, Information Technology</h3><p>Jawaharlal Nehru Technological University, Hyderabad</p></div>
            <ShieldCheck size={23} strokeWidth={1.5} aria-hidden="true" />
          </article>
        </div>
      </section>

      <section id="contact" className="ri-contact">
        <div className="ri-wrap ri-contact-inner">
          <div className="ri-section-label">06 / Contact</div>
          <div className="ri-contact-grid">
            <div>
              <h2 className="ri-contact-title">Need IT support that keeps people moving?</h2>
              <p className="ri-contact-copy">I’m based in Dubai and open to new opportunities. Reach out and let’s talk about the support your team needs.</p>
              <a href="mailto:abdulfaraaz94@gmail.com" className="ri-contact-email" data-testid="link-email-contact">abdulfaraaz94@gmail.com <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
            <div className="ri-contact-details">
              <a href="tel:+971555447027" className="ri-contact-row" data-testid="link-phone-contact"><span className="ri-contact-icon"><Phone size={15} aria-hidden="true" /></span>+971 55 544 7027</a>
              <a href="/__mockup/images/faraaz-abdul-khader-resume.pdf" download className="ri-contact-row" data-testid="link-download-cv-contact"><span className="ri-contact-icon"><Download size={15} aria-hidden="true" /></span>Download my CV <ArrowUpRight size={13} aria-hidden="true" /></a>
              <div className="ri-contact-row" data-testid="text-dubai-contact"><span className="ri-contact-icon"><MapPin size={15} aria-hidden="true" /></span>Dubai, United Arab Emirates</div>
            </div>
          </div>
          <footer className="ri-footer">
            <span>Faraaz Abdul Khader / IT Systems &amp; Support</span>
            <a href="#top" data-testid="link-back-to-top">Back to top <ArrowUpRight size={12} aria-hidden="true" /></a>
            <span>Dubai, UAE</span>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default ResumeInspired;
