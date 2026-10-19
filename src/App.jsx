import { useCallback, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUp, ArrowUpRight, BriefcaseBusiness, Check, Code2, Coffee, ExternalLink, Github, GraduationCap, Linkedin, Mail, MapPin, Phone, Sparkles, Terminal, Zap } from 'lucide-react'
import Navbar from './components/Navbar.jsx'
import Reveal from './components/Reveal.jsx'
import SectionHeading from './components/SectionHeading.jsx'
import TechScene from './components/TechScene.jsx'
import IntroLoader from './components/IntroLoader.jsx'

const profile = {
  name: 'Nilesh Wankhede',
  email: 'wankhedenilesh2025@gmail.com',
  phone: '+91 9579455104',
  location: 'Pune, Maharashtra, India',
  linkedin: 'https://www.linkedin.com/in/nilesh-wankhede-7736b6234/',
  github: 'https://github.com/nileshwankhede03?tab=repositories',
}

const skills = [
  { title: 'Frontend', index: '01', items: ['React.js', 'JavaScript', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'HTML5', 'CSS3', 'React Hooks', 'Context API'] },
  { title: 'Backend', index: '02', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Middleware', 'Java', 'Python'] },
  { title: 'Data & AI', index: '03', items: ['MongoDB', 'MySQL', 'LangChain', 'RAG', 'LangGraph', 'Gemini API', 'LLM APIs'] },
  { title: 'Tools & fundamentals', index: '04', items: ['Git', 'GitHub', 'Postman', 'Swagger', 'VS Code', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'] },
]

const projects = [
  {
    number: '01',
    title: 'MGS AI',
    type: 'AI-powered chat application',
    github: 'https://github.com/nileshwankhede03/MGS-Ai-chatbot.git',
    description: 'A full-stack AI chat experience with conversational responses, chat history, reliable async flows, and a responsive dark interface.',
    tags: ['React.js', 'Redux Toolkit', 'Node.js', 'Express', 'Gemini API'],
    accent: 'mint',
    icon: 'ai',
    highlights: ['Four-layer frontend architecture', 'Environment-based API key management', 'Typing states, markdown, and smooth auto-scroll'],
  },
  {
    number: '02',
    title: 'TeamSync',
    type: 'Workforce management platform',
    github: 'https://github.com/nileshwankhede03/MGS-MVP.git',
    description: 'An employee management platform focused on practical workflows, API-driven search, validated forms, and reusable interface components.',
    tags: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Axios', 'REST APIs'],
    accent: 'blue',
    icon: 'team',
    highlights: ['Debounced employee search', 'Reusable forms, modals, tables, and dropdowns', 'Dedicated API service layer'],
  },
]

const experienceBullets = [
  'Developed responsive, scalable web interfaces using React.js, JavaScript, and Tailwind CSS.',
  'Worked across Farm Management, Inventory Management, Irrigation, Crop Library, and User Management modules.',
  'Integrated REST APIs for data fetching, form submissions, loading and error states, and dynamic UI updates.',
  'Built reusable components and complex validated forms; collaborated with backend teams to resolve integration issues.',
]

function ProjectVisual({ type, accent }) {
  return (
    <div className={`project-visual project-visual-${accent}`}>
      <div className="visual-grid" />
      {type === 'ai' ? (
        <div className="ai-window">
          <div className="window-bar"><span /><span /><span /><i>mgs-ai / conversation</i></div>
          <div className="chat-line assistant-line"><span className="mini-star"><Sparkles size={13} /></span><b>How can I help you?</b></div>
          <div className="chat-line user-line">Help me plan the next feature.</div>
          <div className="chat-line response-line"><span /><span /><span className="short-line" /></div>
          <div className="chat-input">Ask anything <ArrowUpRight size={13} /></div>
        </div>
      ) : (
        <div className="team-window">
          <div className="team-sidebar"><span className="side-logo">T</span><i /><i /><i /><i /></div>
          <div className="team-main">
            <div className="team-top"><b>People overview</b><span>+ Add member</span></div>
            <div className="team-stats"><i /><i /><i /></div>
            <div className="team-table"><div /><div /><div /><div /><div /><div /></div>
          </div>
        </div>
      )}
      <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
    </div>
  )
}

function App() {
  const [showIntro, setShowIntro] = useState(true)
  const handleIntroComplete = useCallback(() => setShowIntro(false), [])

  return (
    <>
      <AnimatePresence>{showIntro && <IntroLoader onComplete={handleIntroComplete} />}</AnimatePresence>
      <div className="app-shell" id="home">
      <div className="ambient ambient-top" /><div className="ambient ambient-side" />
      <Navbar />

      <main>
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <Reveal>
              <div className="availability"><span className="pulse-dot" /> OPEN TO FULL-STACK OPPORTUNITIES</div>
              <p className="hero-kicker"><span className="kicker-line" /> SOFTWARE ENGINEER · FULL STACK DEVELOPER</p>
              <h1 id="hero-title">Building digital<br />things that <span className="gradient-word">matter.</span></h1>
              <p className="hero-description">Hey, I’m <strong>Nilesh Wankhede</strong>. A developer who enjoys turning complex problems into clean, intuitive web experiences. I work across the stack, learn fast, and care about the details.</p>
              <div className="hero-actions">
                <a className="button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
                <a className="button-quiet" href="#contact">Let’s talk <ArrowRight size={16} /></a>
              </div>
              <div className="hero-socials" aria-label="Social links">
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
                <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17} /></a>
                <span className="social-divider" />
                <span className="location-text"><MapPin size={14} /> Pune, IN</span>
              </div>
            </Reveal>
          </div>
          <div className="hero-art" aria-label="Animated 3D technology illustration">
            <div className="art-label art-label-top"><span className="art-label-dot" /> DIGITAL CRAFT / 2026</div>
            <TechScene />
            <div className="tech-float float-react"><span className="tech-logo react-logo">⚛</span><span>React.js</span></div>
            <div className="tech-float float-node"><span className="node-logo">N</span><span>Node.js</span></div>
            <div className="tech-float float-ts"><span className="ts-logo">TS</span><span>TypeScript</span></div>
            <div className="tech-float float-java"><span className="java-logo">J</span><span>Java</span></div>
            <div className="tech-float float-python"><span className="python-logo">Py</span><span>Python</span></div>
            <div className="art-label art-label-bottom"><span className="code-glyph">{`</>`}</span> ONE THING AT A TIME. BUILT WELL.</div>
            <div className="art-cross cross-one">+</div><div className="art-cross cross-two">+</div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
        </section>

        <div className="marquee-band" aria-hidden="true">
          <div className="marquee-track">
            <div className="marquee-content"><span>FULL-STACK DEVELOPMENT</span><i>✳</i><span>THOUGHTFUL INTERFACES</span><i>✳</i><span>CURIOUS BY DEFAULT</span><i>✳</i><span>ALWAYS BUILDING</span><i>✳</i></div>
            <div className="marquee-content"><span>FULL-STACK DEVELOPMENT</span><i>✳</i><span>THOUGHTFUL INTERFACES</span><i>✳</i><span>CURIOUS BY DEFAULT</span><i>✳</i><span>ALWAYS BUILDING</span><i>✳</i></div>
          </div>
        </div>

        <section className="quick-stats section-wrap" aria-label="Quick stats">
          <Reveal className="stat-grid">
            <div className="stat-item"><span className="stat-number">06<span> months</span></span><span className="stat-caption">Industry experience</span></div>
            <div className="stat-item"><span className="stat-number">03<span>+</span></span><span className="stat-caption">Featured projects</span></div>
            <div className="stat-item"><span className="stat-number">06</span><span className="stat-caption">Core languages</span></div>
            <div className="stat-item stat-note"><span className="stat-note-icon"><Zap size={17} /></span><span className="stat-caption">Always learning.<br /><b>Always building.</b></span></div>
          </Reveal>
        </section>

        <section id="about" className="section-wrap content-section about-section">
          <Reveal><SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Curious by nature.<br /><span className="muted-heading">Developer by choice.</span></>} text="I enjoy the space where thoughtful design meets dependable engineering." number="01" /></Reveal>
          <div className="about-layout">
            <Reveal className="about-main-card" delay={0.06}>
              <div className="about-card-index">// THE WAY I WORK</div>
              <p>I’m a frontend-focused developer with full-stack experience, comfortable moving from a polished React interface to the API logic behind it. I like breaking down large problems, designing reusable systems, and shipping features that feel simple to use.</p>
              <p>My toolkit includes the MERN stack, TypeScript, Java, and Python. I’m also exploring AI-powered experiences with LLMs and retrieval-augmented generation.</p>
              <div className="about-signoff"><span className="signoff-line" /> <span>Make it useful. Make it clear. Make it better.</span></div>
            </Reveal>
            <div className="principles-grid">
              <Reveal className="principle-card" delay={0.1}><span className="principle-icon"><Code2 size={19} /></span><span className="principle-no">01 / ENGINEERING</span><h3>Clean by design</h3><p>Reusable components, clear architecture, and maintainable code.</p><ArrowDownRight className="principle-arrow" size={17} /></Reveal>
              <Reveal className="principle-card" delay={0.16}><span className="principle-icon"><Sparkles size={19} /></span><span className="principle-no">02 / MINDSET</span><h3>Curiosity first</h3><p>Quick to learn a new tool and thoughtful about when to use it.</p><ArrowDownRight className="principle-arrow" size={17} /></Reveal>
            </div>
          </div>
        </section>

        <section id="experience" className="section-wrap content-section experience-section">
          <Reveal><SectionHeading eyebrow="WHERE I’VE BEEN" title={<>Experience that <span className="muted-heading">ships.</span></>} text="Six months of hands-on product development and team collaboration." number="02" /></Reveal>
          <Reveal className="experience-card" delay={0.06}>
            <div className="experience-rail"><span className="rail-node"><BriefcaseBusiness size={17} /></span><span className="rail-line" /></div>
            <div className="experience-content">
              <div className="experience-topline"><span className="experience-period">APR 2026 — SEP 2026</span><span className="experience-badge"><span /> 6 MONTHS</span></div>
              <h3>Frontend Developer Trainee</h3>
              <div className="company-row"><span>Nitroxen Tech Pvt. Ltd.</span><span className="company-sep">/</span><span className="company-location"><MapPin size={13} /> Pune, Maharashtra</span></div>
              <p className="experience-intro">Contributed to responsive farm and agriculture management modules while collaborating with backend and development teams.</p>
              <div className="experience-points">
                {experienceBullets.map((item) => <div className="experience-point" key={item}><span className="check-icon"><Check size={12} /></span><p>{item}</p></div>)}
              </div>
              <div className="experience-tags"><span>React.js</span><span>JavaScript</span><span>Tailwind CSS</span><span>REST APIs</span><span>Reusable UI</span></div>
            </div>
          </Reveal>
        </section>

        <section id="projects" className="section-wrap content-section projects-section">
          <Reveal><SectionHeading eyebrow="SELECTED WORK" title={<>Projects with <span className="muted-heading">purpose.</span></>} text="A couple of builds where I focused on architecture, usability, and reliable data flow." number="03" /></Reveal>
          <div className="projects-grid">
            {projects.map((project) => (
              <Reveal key={project.number} className="project-card" delay={project.number === '02' ? 0.12 : 0.04}>
                <ProjectVisual type={project.icon} accent={project.accent} />
                <div className="project-body">
                  <div className="project-meta"><span>FEATURED PROJECT / {project.number}</span><span className="project-type">{project.type}</span></div>
                  <div className="project-title-row"><h3>{project.title}</h3><a className="project-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`Explore ${project.title} on GitHub`}><ArrowUpRight size={20} /></a></div>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-highlights">{project.highlights.map((item) => <li key={item}><span />{item}</li>)}</ul>
                  <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <a className="project-footer-link" href={project.github} target="_blank" rel="noreferrer">Explore on GitHub <ExternalLink size={14} /></a>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="all-work-row" delay={0.1}><span>More experiments, repositories, and learning projects live on GitHub.</span><a href={profile.github} target="_blank" rel="noreferrer">Browse all repositories <ArrowUpRight size={15} /></a></Reveal>
        </section>

        <section id="stack" className="section-wrap content-section stack-section">
          <Reveal><SectionHeading eyebrow="MY TOOLKIT" title={<>Tools for turning ideas <span className="muted-heading">into software.</span></>} text="MERN is my primary full-stack direction, backed by a broader foundation across languages, data, and AI." number="04" /></Reveal>
          <div className="stack-feature">
            <Reveal className="stack-lead-card"><div className="stack-lead-orb"><Terminal size={33} strokeWidth={1.4} /></div><span className="stack-lead-label">PRIMARY STACK</span><h3>The MERN<br />foundation.</h3><p>From component architecture to APIs and persistence, I enjoy building across the full application.</p><div className="stack-marks"><span>MongoDB</span><b>+</b><span>Express</span><b>+</b><span>React</span><b>+</b><span>Node.js</span></div></Reveal>
            <div className="skills-grid">
              {skills.map((skill, index) => <Reveal className="skill-card" key={skill.title} delay={0.04 * index}><div className="skill-card-heading"><span>{skill.index}</span><h3>{skill.title}</h3><ArrowUpRight size={15} /></div><div className="skill-tags">{skill.items.map((item) => <span key={item}>{item}</span>)}</div></Reveal>)}
            </div>
          </div>
          <Reveal className="learning-strip" delay={0.12}><span className="learning-icon"><Coffee size={18} /></span><div><b>Good learner. Broad perspective.</b><p>Alongside JavaScript and TypeScript, I work with Java and Python — and stay curious about new frameworks, tools, and ways to solve problems.</p></div><span className="learning-arrow">↗</span></Reveal>
        </section>

        <section id="education" className="section-wrap content-section education-section">
          <Reveal><SectionHeading eyebrow="THE FOUNDATION" title={<>Built on a solid <span className="muted-heading">base.</span></>} text="My academic background in information technology." number="05" /></Reveal>
          <Reveal className="education-card" delay={0.05}>
            <div className="education-icon"><GraduationCap size={22} /></div>
            <div className="education-main"><span className="education-period">2021 — 2025</span><h3>Bachelor of Technology</h3><p>Information Technology Engineering</p><span className="education-school">Shri Vile Parle Kelavani Mandal’s Institute of Technology, Dhule</span></div>
            <div className="education-score"><span>CGPA</span><b>7.55<span>/10</span></b></div>
          </Reveal>
          <div className="education-early-grid">
            <Reveal className="education-early-card" delay={0.08}><span>HSC / 2019 — 2021</span><h3>R.O. Nikam Junior College</h3><p>Gondur, Dhule</p><b>80.60%</b></Reveal>
            <Reveal className="education-early-card" delay={0.14}><span>SSC / 2018 — 2019</span><h3>Late Chi. Abhijeet Thakare Madhyamik Vidyalaya</h3><p>Morane (P.L.), Dhule</p><b>77.80%</b></Reveal>
          </div>
        </section>

        <section id="contact" className="section-wrap contact-section">
          <Reveal className="contact-card">
            <div className="contact-orb" /><div className="contact-content">
              <div className="section-label"><span className="section-dot" /><span>HAVE A ROLE IN MIND?</span><span className="section-number">/06</span></div>
              <h2>Let’s build something<br /><span className="gradient-word">meaningful.</span></h2>
              <p>I’m looking for an opportunity to contribute, grow with a team, and turn good ideas into dependable products. Let’s connect.</p>
              <div className="contact-actions"><a className="button-primary" href={`mailto:${profile.email}`}>Start a conversation <ArrowUpRight size={17} /></a><a className="contact-linkedin" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> Connect on LinkedIn</a></div>
            </div>
            <div className="contact-details">
              <a href={`mailto:${profile.email}`}><span className="contact-detail-icon"><Mail size={17} /></span><span><small>EMAIL</small><b>{profile.email}</b></span><ArrowUpRight size={15} /></a>
              <a href={`tel:${profile.phone.replaceAll(' ', '')}`}><span className="contact-detail-icon"><Phone size={17} /></span><span><small>PHONE</small><b>{profile.phone}</b></span><ArrowUpRight size={15} /></a>
              <a href={profile.github} target="_blank" rel="noreferrer"><span className="contact-detail-icon"><Github size={17} /></span><span><small>GITHUB</small><b>nileshwankhede03</b></span><ArrowUpRight size={15} /></a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a href="#home" className="brand footer-brand"><span className="brand-mark">NW</span><span className="brand-name">Nilesh<span className="brand-period">.</span></span></a>
        <span className="footer-note">Designed with intention by Nilesh.</span>
        <a href="#home" className="back-to-top">BACK TO TOP <ArrowUp size={13} /></a>
        <span className="footer-copyright">© {new Date().getFullYear()} Nilesh Wankhede</span>
      </footer>
      </div>
    </>
  )
}

export default App
