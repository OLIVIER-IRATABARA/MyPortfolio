import React, { useState, useEffect, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';

const WA_NUMBER = "250798733472";
const WA_LINK = `https://wa.me/${WA_NUMBER}`;

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const services = [
  {
    title: "AI Development",
    desc: "Building intelligent applications with Python, machine learning models, and AI integrations for real-world solutions.",
    icon: "🤖",
    tag: "AI & ML",
    color: "from-indigo-400 to-violet-500"
  },
  {
    title: "Full Stack Development",
    desc: "Building scalable web & mobile apps with clean, maintainable code and modern frameworks.",
    icon: "💻",
    tag: "Full Stack",
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "DJ & Music Production",
    desc: "Professional mixing, sound design, and audio production for events and digital platforms.",
    icon: "🎧",
    tag: "Creative",
    color: "from-violet-600 to-purple-600"
  },
  {
    title: "Photo Editing",
    desc: "High-end retouching, color grading, and manipulation for professional-grade imagery.",
    icon: "📸",
    tag: "Visual",
    color: "from-pink-600 to-rose-600"
  },
  {
    title: "Flyer & Banner Design",
    desc: "Eye-catching graphic design for events, brands, social media, and marketing campaigns.",
    icon: "🎨",
    tag: "Design",
    color: "from-orange-500 to-amber-500"
  },
  {
    title: "Dev Training",
    desc: "Mentoring aspiring developers from fundamentals to production-ready skills.",
    icon: "🎓",
    tag: "Education",
    color: "from-teal-500 to-emerald-600"
  },
  {
    title: "Scripting & Automation",
    desc: "Custom scripts and automation solutions to streamline workflows and save time.",
    icon: "📜",
    tag: "DevOps",
    color: "from-cyan-500 to-blue-600"
  }
];

const socialLinks = [
  {
    href: "https://github.com/OLIVIER-IRATABARA",
    label: "GitHub",
    icon: <GithubIcon />,
    handle: "@OLIVIER-IRATABARA"
  },
  {
    href: "https://www.linkedin.com/in/olivier-iratabara-",
    label: "LinkedIn",
    icon: <LinkedInIcon />,
    handle: "olivier-iratabara"
  },
  {
    href: "https://www.instagram.com/o.l.i.v.i.e.r_i12",
    label: "Instagram",
    icon: <InstagramIcon />,
    handle: "@o.l.i.v.i.e.r_i12"
  },
  {
    href: WA_LINK,
    label: "WhatsApp",
    icon: <WhatsAppIcon />,
    handle: "+250 798 733 472"
  }
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setVisible(v => ({ ...v, [e.target.id]: true }));
        });
      },
      { threshold: 0.1 }
    );
    Object.values(sectionRefs.current).forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const register = (id) => el => {
    sectionRefs.current[id] = el;
    if (el) el.id = id;
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const fadeIn = (id, delay = 0) => ({
    style: {
      opacity: visible[id] ? 1 : 0,
      transform: visible[id] ? 'translateY(0)' : 'translateY(32px)',
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`
    }
  });

  return (
    <div
      className="min-h-screen bg-[#09090b] text-white font-sans"
      style={{ overflowX: 'clip' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
        * { box-sizing: border-box; }
        body, html { overflow-x: hidden; max-width: 100vw; }
        * { font-family: 'DM Sans', sans-serif; }
        .display { font-family: 'Syne', sans-serif; }
        .grain::after {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 9999;
          opacity: 0.4;
        }
        .glow-dot {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
        }
        .card-hover {
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.15) !important;
        }
        .tag {
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
        }
        .social-btn {
          transition: background 0.2s ease, transform 0.2s ease, color 0.2s ease;
        }
        .social-btn:hover { transform: translateY(-2px); }
        .nav-link {
          position: relative;
          transition: color 0.2s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #6366f1;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }
        .hire-btn {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          transition: opacity 0.2s, transform 0.2s;
        }
        .hire-btn:hover { opacity: 0.9; transform: scale(1.02); }
        .hire-btn-lg {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          transition: opacity 0.2s, transform 0.2s, box-shadow 0.3s;
          box-shadow: 0 0 0 rgba(99,102,241,0);
        }
        .hire-btn-lg:hover {
          opacity: 0.92;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(99,102,241,0.4);
        }
        .outline-btn {
          border: 1px solid rgba(255,255,255,0.12);
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .outline-btn:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.25);
          transform: translateY(-2px);
        }
        .gradient-text {
          background: linear-gradient(135deg, #e0e7ff 0%, #a5b4fc 50%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .section-line {
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          border-radius: 2px;
          flex-shrink: 0;
        }
        .divider {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .qr-card {
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .qr-card:hover {
          transform: translateY(-4px);
          border-color: rgba(99,102,241,0.35) !important;
          box-shadow: 0 8px 32px rgba(99,102,241,0.15);
        }
      `}</style>

      <div className="grain" />

      {/* Background glows — fixed container clips overflow */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <div
          className="glow-dot"
          style={{ width: 600, height: 600, top: -100, left: -200, background: 'rgba(49,46,129,0.2)' }}
        />
        <div
          className="glow-dot"
          style={{ width: 500, height: 500, top: '60vh', right: -150, background: 'rgba(76,29,149,0.15)' }}
        />
      </div>

      {/* NAV */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#09090b]/90 backdrop-blur-xl border-b border-white/[0.06]' : ''
        }`}
        style={{ maxWidth: '100vw' }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <button
            onClick={() => scrollTo('hero')}
            className="display text-lg font-black tracking-tight text-white"
          >
            SCRIPTER<span className="text-indigo-500">.</span>
          </button>

          <div className="hidden md:flex items-center gap-10">
            {['about', 'services', 'contact'].map(item => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="nav-link display text-xs uppercase tracking-widest text-white/70 hover:text-white"
              >
                {item}
              </button>
            ))}
          </div>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 hire-btn text-white px-5 py-2 rounded-full text-sm font-semibold"
          >
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
            Hire Me
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className="block h-px w-6 bg-white transition-all"
                style={{
                  opacity: menuOpen && i === 1 ? 0 : 1,
                  transform: menuOpen
                    ? i === 0 ? 'rotate(45deg) translateY(7px)' : i === 2 ? 'rotate(-45deg) translateY(-7px)' : ''
                    : ''
                }}
              />
            ))}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#0f0f12] border-t border-white/[0.06] px-6 py-6 flex flex-col gap-6">
            {['about', 'services', 'contact'].map(item => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="display text-sm uppercase tracking-widest text-white/70 hover:text-white text-left"
              >
                {item}
              </button>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="hire-btn text-white px-5 py-2.5 rounded-full text-sm font-semibold text-center"
            >
              Hire Me on WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="hero"
        ref={register('hero')}
        className="min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto pt-24 pb-20"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <div {...fadeIn('hero', 0)}>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
            <span className="display tag text-white/70">Available for work</span>
          </div>

          <h1 className="display text-6xl md:text-8xl lg:text-[7rem] font-black leading-[0.95] tracking-tighter mb-8">
            OLIVIER<br />
            <span className="gradient-text">IRATABARA</span>
          </h1>

          <div className="flex flex-wrap gap-3 mb-6">
            {['Developer', 'AI Dev', 'DJ', 'Designer', 'Trainer'].map((t) => (
              <span key={t} className="tag text-white/65 border border-white/20 rounded-full px-4 py-1.5">
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {[
              { label: 'Python', color: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/25' },
              { label: 'Machine Learning', color: 'bg-violet-500/10 text-violet-300 border-violet-500/25' },
              { label: 'AI Integration', color: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/25' },
              { label: 'JavaScript', color: 'bg-blue-500/10 text-blue-300 border-blue-500/25' },
              { label: 'React', color: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/25' },
            ].map(({ label, color }) => (
              <span key={label} className={`tag border rounded-full px-3 py-1 ${color}`}>
                {label}
              </span>
            ))}
          </div>

          <p className="text-white/75 text-lg md:text-xl max-w-xl leading-relaxed mb-12 font-light">
            Software developer & creative enthusiast based in Rwanda.
            Building experiences that are{' '}
            <em className="text-white not-italic font-medium">precise, purposeful, and memorable.</em>
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="hire-btn-lg inline-flex items-center gap-2.5 text-white px-8 py-3.5 rounded-xl text-sm font-semibold"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
            <button
              onClick={() => scrollTo('services')}
              className="outline-btn inline-flex items-center gap-2 text-white/70 px-8 py-3.5 rounded-xl text-sm font-semibold"
            >
              Explore Services
              <span className="text-base">↓</span>
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        ref={register('about')}
        className="py-24 px-6 max-w-6xl mx-auto"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <div {...fadeIn('about', 0)}>
          <div className="flex items-center gap-4 mb-12">
            <div className="section-line" />
            <span className="display tag text-white/55">Who I Am</span>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="display text-4xl md:text-5xl font-black leading-tight mb-6">
                Creative engineer<br />
                <span className="text-white/60">with a diverse</span><br />
                <span className="gradient-text">skill set.</span>
              </h2>
              <p className="text-white/75 leading-relaxed mb-6 font-light">
                I'm Olivier, a Rwandan-based developer specializing in full-stack web, AI development, and Python-powered machine learning.
                From writing production-ready code to building smart systems and designing visuals —
                I believe good work is about precision and intention.
              </p>
              <p className="text-white/55 leading-relaxed font-light text-sm italic">
                "It's precious with us, thanks."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Services offered', value: '7+' },
                { label: 'Years of experience', value: '4+' },
                { label: 'Projects completed', value: '30+' },
                { label: 'AI & ML builds', value: '✦' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="card-hover p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02]"
                >
                  <div className="display text-3xl font-black text-white mb-2">{value}</div>
                  <div className="text-white/60 text-sm leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="divider max-w-6xl mx-auto" style={{ position: 'relative', zIndex: 1 }} />

      {/* SERVICES */}
      <section
        id="services"
        ref={register('services')}
        className="py-24 px-6 max-w-6xl mx-auto"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <div {...fadeIn('services', 0)}>
          <div className="flex items-center gap-4 mb-4">
            <div className="section-line" />
            <span className="display tag text-white/55">What I Do</span>
          </div>
          <h2 className="display text-4xl md:text-5xl font-black mb-16">
            My Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div
                key={i}
                className="card-hover group p-7 rounded-2xl border border-white/[0.07] bg-white/[0.02] flex flex-col gap-4"
              >
                <div className="flex items-start justify-between">
                  <span className="text-3xl">{s.icon}</span>
                  <span className={`tag bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}>
                    {s.tag}
                  </span>
                </div>
                <div>
                  <h3 className="display font-bold text-white mb-2 text-lg">{s.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed font-light">{s.desc}</p>
                </div>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto text-xs text-white/25 group-hover:text-indigo-400 transition-colors duration-200 flex items-center gap-1.5"
                >
                  Inquire via WhatsApp <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider max-w-6xl mx-auto" style={{ position: 'relative', zIndex: 1 }} />

      {/* CONTACT / FOOTER */}
      <footer
        id="contact"
        ref={register('contact')}
        className="py-28 px-6 max-w-6xl mx-auto"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <div {...fadeIn('contact', 0)}>
          <div className="flex items-center gap-4 mb-4">
            <div className="section-line" />
            <span className="display tag text-white/55">Get in Touch</span>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* LEFT — contact buttons + QR code */}
            <div>
              <h2 className="display text-4xl md:text-5xl font-black leading-tight mb-6">
                Ready to build<br />
                <span className="gradient-text">something great?</span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-8 font-light">
                Available for freelance projects, collaborations, and events.
                Drop a message and let's make it happen.
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="hire-btn-lg inline-flex items-center gap-3 text-white px-8 py-4 rounded-xl font-semibold self-start"
                >
                  <WhatsAppIcon />
                  Message on WhatsApp
                </a>
                <a
                  href="mailto:oiratabara@gmail.com"
                  className="outline-btn inline-flex items-center gap-2.5 text-white/80 px-8 py-3.5 rounded-xl text-sm font-medium self-start"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  oiratabara@gmail.com
                </a>
                <a
                  href="tel:+250798733472"
                  className="outline-btn inline-flex items-center gap-2.5 text-white/80 px-8 py-3.5 rounded-xl text-sm font-medium self-start"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.18 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.49 5.49l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
                  </svg>
                  +250 798 733 472
                </a>
              </div>

              {/* ── Portfolio QR Code Card ── */}
              <a
                href="https://olivier-myportfolio.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="qr-card mt-8 inline-flex flex-col items-center gap-3 p-5 rounded-2xl border border-white/[0.07] bg-white/[0.02]"
              >
                <span className="display tag text-white/50">Scan to visit my portfolio</span>
                <div
                  style={{
                    background: '#ffffff',
                    borderRadius: 12,
                    padding: 12,
                    display: 'inline-flex',
                  }}
                >
                  <QRCodeSVG
                    value="https://olivier-myportfolio.vercel.app/"
                    size={148}
                    bgColor="#ffffff"
                    fgColor="#09090b"
                    level="H"
                    includeMargin={false}
                    imageSettings={{
                      src: "./public/icon.png",
                      x: undefined,
                      y: undefined,
                      height: 32,
                      width: 32,
                      excavate: true,
                    }}
                  />
                </div>
                <span className="text-white/35 text-xs font-light tracking-wide">
                  olivier-myportfolio.vercel.app
                </span>
              </a>
            </div>

            {/* RIGHT — social links */}
            <div className="flex flex-col gap-3 pt-2">
              <p className="display tag text-white/55 mb-4">Find me online</p>
              {socialLinks.map(({ href, label, icon, handle }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn flex items-center gap-4 p-4 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.15] group"
                >
                  <span className="text-white/40 group-hover:text-white transition-colors">
                    {icon}
                  </span>
                  <div>
                    <div className="text-white/80 text-sm font-medium">{label}</div>
                    <div className="text-white/55 text-xs font-light">{handle}</div>
                  </div>
                  <span className="ml-auto text-white/30 group-hover:text-white/60 transition-colors text-xs">↗</span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="display text-white/45 text-xs uppercase tracking-widest font-bold">
              © {new Date().getFullYear()} Olivier Iratabara
            </span>
            <span className="display text-white/35 text-xs uppercase tracking-widest">
              SCRIPTER.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}