import "./App.css";

const PROJECTS = [
  {
    number: "01",
    type: "REAL-TIME MOBILE APPLICATION",
    name: "TruSphere",
    description:
      "A real-time messaging application built with React Native and Firebase. I developed the application around real-world communication workflows including authentication, messaging, presence, notifications and message status handling.",
    features: [
      "Real-time messaging",
      "Authentication",
      "Online / offline presence",
      "Typing indicators",
      "Sent / delivered / read status",
      "Push notifications",
      "Voice messages",
      "Image sharing",
      "Disappearing messages",
    ],
    tech: ["React Native", "Expo", "TypeScript", "Firebase", "Node.js", "Cloudinary"],
    repo: "https://github.com/akabhishek2316/TruSphere-Chat-App",
    featured: true,
    challenge:
      "Synchronizing communication state such as messages, presence and read status across real-world mobile sessions.",
  },
  {
    number: "02",
    type: "SAFETY APPLICATION",
    name: "Rakshiva",
    description:
      "A safety-focused application designed to provide emergency assistance through alerts, location sharing and evidence-related functionality.",
    features: [
      "Emergency alerts",
      "Guardian panel",
      "Live location",
      "Map integration",
      "Emergency history",
      "Evidence capture",
    ],
    tech: ["React", "Firebase", "JavaScript", "Leaflet"],
    repo: "https://github.com/akabhishek2316/Rakshiva",
    challenge:
      "Connecting emergency workflows, location data and guardian-side monitoring into one practical safety experience.",
  },
  {
    number: "03",
    type: "LOCATION APPLICATION",
    name: "Bhandara Locator",
    description:
      "A location-based application created to explore nearby Bhandara locations through a map-focused interface.",
    features: [
      "Location-based UI",
      "Map integration",
      "Responsive interface",
      "Location discovery",
    ],
    tech: ["React Native", "Expo", "Maps", "JavaScript"],
    repo: "https://github.com/akabhishek2316",
    challenge:
      "Designing a simple map-focused experience for discovering location-based information.",
  },
];

const milestones = [
  {
    date: "01",
    title: "Project Concepts",
    text: "Started building practical applications around real-world problems and workflows.",
  },
  {
    date: "02",
    title: "Web & Mobile Development",
    text: "Moved from interfaces into complete React and React Native applications.",
  },
  {
    date: "03",
    title: "Backend Integration",
    text: "Worked with Firebase, APIs, authentication, cloud services and real-time data.",
  },
  {
    date: "04",
    title: "Testing & Debugging",
    text: "Tested applications on real devices and worked through build and runtime issues.",
  },
  {
    date: "05",
    title: "Continuous Improvement",
    text: "Iterating on projects, improving reliability and learning from each implementation.",
  },
];

function App() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="portfolio">
      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <a href="#home" className="logo" aria-label="Abhishek Kumar home">
          AK<span>.</span>
        </a>

        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#education">Education</a>
        </nav>

        <button
          className="talk-link"
          onClick={() => scrollToSection("contact")}
          type="button"
        >
          Let's Talk ↗
        </button>
      </header>

      {/* ================= HERO ================= */}
      <main id="home" className="hero-section">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            OPEN TO INTERNSHIPS & ENTRY-LEVEL ROLES
          </div>

          <p className="hero-intro">HELLO, I'M ABHISHEK KUMAR</p>

          <h1>
            Computer Science
            <br />
            <span>Student & Developer.</span>
          </h1>

          <p className="hero-description">
            I build modern web and mobile applications with React, React Native,
            TypeScript and Firebase — focusing on clean interfaces, reliable
            functionality and real-world problems.
          </p>

          <div className="hero-tags" aria-label="Primary technologies">
            <span>React</span>
            <span>React Native</span>
            <span>TypeScript</span>
            <span>Firebase</span>
          </div>

          <div className="hero-actions">
            <button
              className="primary-btn"
              onClick={() => scrollToSection("projects")}
              type="button"
            >
              View My Work
              <span aria-hidden="true">↓</span>
            </button>

            <a
              href="https://github.com/akabhishek2316"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              GitHub ↗
            </a>

            {/* Replace this href with your real resume PDF path before publishing. */}
            <a className="resume-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume ↗
            </a>
          </div>
        </div>

        <div className="hero-side" aria-hidden="true">
          <div className="hero-number">01</div>
          <div className="hero-side-line" />
          <p>
            Building practical software
            <br />
            while learning every day.
          </p>
        </div>
      </main>

      {/* ================= ABOUT ================= */}
      <section id="about" className="section about-section">
        <div className="section-heading">
          <span>01</span>
          <h2>About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-main">
            <h3>
              I enjoy turning ideas into
              <br />
              functional digital products.
            </h3>

            <h3>
              As a fresher, I'm focused on
              <br />
              learning, building and improving.
            </h3>
          </div>

          <div className="about-text">
            <p>
              I'm a Computer Science & Engineering student at Dr. A.P.J. Abdul
              Kalam Technical University, Lucknow, with a strong interest in
              software development.
            </p>

            <p>
              I work with modern web and mobile technologies and enjoy building
              applications that involve authentication, real-time data, APIs,
              notifications and responsive interfaces.
            </p>

            <p>
              Through my projects, I've been learning how frontend, backend and
              cloud services work together to create complete products.
            </p>

            <div className="about-highlight">
              <span>Currently looking for</span>
              <strong>Internship / Entry-Level Software Opportunities</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="section skills-section">
        <div className="section-heading">
          <span>02</span>
          <h2>Technical Skills</h2>
        </div>

        <div className="skill-group">
          <h3>Languages</h3>
          <div className="skill-grid">
            <div>JavaScript</div>
            <div>TypeScript</div>
            <div>HTML</div>
            <div>CSS</div>
          </div>
        </div>

        <div className="skill-group">
          <h3>Frontend & Mobile</h3>
          <div className="skill-grid">
            <div>React</div>
            <div>React Native</div>
            <div>Expo</div>
          </div>
        </div>

        <div className="skill-group">
          <h3>Backend & Services</h3>
          <div className="skill-grid">
            <div>Firebase</div>
            <div>Node.js</div>
            <div>REST APIs</div>
            <div>Cloudinary</div>
          </div>
        </div>

        <div className="skill-group">
          <h3>Tools</h3>
          <div className="skill-grid">
            <div>Git</div>
            <div>GitHub</div>
            <div>VS Code</div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section projects-section">
        <div className="section-heading">
          <span>03</span>
          <h2>Featured Projects</h2>
        </div>

        <p className="section-description">
          A selection of real-world applications I've built while developing
          my skills in frontend, mobile and cloud-based development.
        </p>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <article
              className={`project-card ${project.featured ? "project-featured" : ""}`}
              key={project.name}
            >
              <div className="project-top">
                <span className="project-type">
                  {project.number} / {project.type}
                </span>
                <span className="project-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>

              <div className="project-content">
                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <div className="project-features" aria-label={`${project.name} features`}>
                  {project.features.map((feature) => (
                    <span key={feature}>{feature}</span>
                  ))}
                </div>

                <div className="project-challenge">
                  <span>KEY CHALLENGE</span>
                  <p>{project.challenge}</p>
                </div>
              </div>

              <div className="project-bottom">
                <div className="project-tech" aria-label={`${project.name} technologies`}>
                  {project.tech.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View on GitHub ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= DEVELOPMENT JOURNEY ================= */}
      <section id="journey" className="section journey-section">
        <div className="section-heading">
          <span>04</span>
          <h2>Development Journey</h2>
        </div>

        <p className="section-description">
          My projects are built through continuous experimentation, debugging
          and iteration — not just by following tutorials.
        </p>

        <div className="journey-list">
          {milestones.map((milestone) => (
            <article className="journey-item" key={milestone.date}>
              <span className="journey-number">{milestone.date}</span>
              <div>
                <h3>{milestone.title}</h3>
                <p>{milestone.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section id="education" className="section education-section">
        <div className="section-heading">
          <span>05</span>
          <h2>Education</h2>
        </div>

        <div className="education-card">
          <span className="education-label">BACHELOR OF TECHNOLOGY</span>
          <h3>Computer Science & Engineering</h3>
          <p>Dr. A.P.J. Abdul Kalam Technical University, Lucknow</p>

          {/* Add your actual start/end year when ready. */}
          <span className="education-field">
            Computer Science & Engineering
          </span>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="contact-section">
        <span className="contact-number">06 — CONTACT</span>

        <h2>
          Let's build
          <br />
          <span>something useful.</span>
        </h2>

        <p>
          I'm looking for opportunities where I can learn, contribute and grow
          as a software developer.
        </p>

        <div className="contact-actions">
          {/* Replace with your real professional email. */}
          <a href="mailto:your-email@example.com" className="primary-btn">
            ✉ Get In Touch
          </a>

          <a
            href="https://github.com/akabhishek2316"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-circle"
            aria-label="GitHub"
          >
            GH
          </a>

          {/* Replace with your LinkedIn URL. */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-circle"
            aria-label="LinkedIn"
          >
            IN
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer>
        <span>© 2026 Abhishek Kumar</span>

        <div className="footer-links">
          <a
            href="https://github.com/akabhishek2316"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:your-email@example.com">Email</a>
        </div>
      </footer>
    </div>
  );
}

export default App;