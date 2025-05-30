import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './styles/main.css';
import coffeeLeft from '/images/coffee2.png';
import coffeeRight from '/images/coffee1.png';

const Section = ({ id, title, children }) => (
  <section id={id} className="section-wrapper">
    <div className="section-container">
      <h2 className="section-title">{title}</h2>
      {children}
    </div>
  </section>
);

const EducationCard = ({ institution, degree, year }) => (
  <div className="card">
    <h3 className="card-title">{institution}</h3>
    <p className="card-sub">{degree}</p>
    <p className="text-sm mt-2 text-yellow-500">{year}</p>
  </div>
);

const ProjectCard = ({ title, description, tech }) => (
  <div className="project-card">
    <h3 className="project-title">{title}</h3>
    <p className="project-sub">{description}</p>
    <p className="text-sm mt-2 text-yellow-500">{tech}</p>
  </div>
);

const SkillCard = ({ category, items }) => (
  <div className="card">
    <h3 className="card-title">{category}</h3>
    <p className="card-sub">{items}</p>
  </div>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCoffeeCheers, setShowCoffeeCheers] = useState(false);
  const [showFactDialog, setShowFactDialog] = useState(false);
  const [disagreeCount, setDisagreeCount] = useState(0);
  const [showThanks, setShowThanks] = useState(false);
  
  const sections = ["home", "about", "education", "skills", "projects", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const playCheersSound = () => {
    const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-ice-cream-bell-ring-1931.mp3');
    audio.play().catch(e => console.log("Audio play failed:", e));
  };

  const handleLogoClick = () => {
    setShowCoffeeCheers(true);
    playCheersSound();
    setTimeout(() => setShowCoffeeCheers(false), 2000);
  };

  const educationData = [
    {
      institution: "United Technical College",
      degree: "Bachelors of Computer Engineering",
      year: "2024"
    },
    {
      institution: "Oxford Secondary School",
      degree: "Computer Science",
      year: "2019"
    },
    {
      institution: "Ekata Shishu Niketan",
      degree: "School Education",
      year: "2017"
    }
  ];

  const projectData = [
    { 
      title: "Pro Bidhyarthi", 
      description: "Academic resources app for Nepali universities",
      tech: "Flutter, Firebase"
    },
    { 
      title: "GarageDoc", 
      description: "Smart garage management app",
      tech: "Kotlin"
    },
    { 
      title: "Smart Door Lock", 
      description: "IoT-based security system",
      tech: "ESP32, RFID"
    },
    { 
      title: "WorkMantra", 
      description: "Freelance platform for professionals",
      tech: "Full-stack"
    },
    { 
      title: "Book Recommendation", 
      description: "Personalized book suggestion system",
      tech: "Python, ML"
    },
    { 
      title: "HelloDoc", 
      description: "Medical appointment booking system",
      tech: "Web-based"
    }
  ];

  const skillData = [
    { category: "Languages", items: "Java, Kotlin, Python, Dart, JavaScript" },
    { category: "Frameworks", items: "Flutter, Django, Firebase, Android Studio" },
    { category: "Tools", items: "Figma, Canva, Git, GitHub Actions" },
    { category: "Mobile Development", items: "Flutter, Android, Kotlin" },
    { category: "Specialties", items: "UI/UX Design, Networking, Ethical Hacking" },
    { category: "IoT & Hardware", items: "ESP32, RFID, Raspberry Pi, Embedded Systems" }
  ];

  const handleAgree = () => {
    setShowFactDialog(false);
    setShowThanks(true);
    setTimeout(() => setShowThanks(false), 4000);
  };

  const disagreeTexts = [
    "Think again...",
    "Are you sure about that?",
    "I think you might be mistaken",
    "Your judgment is questionable",
    "The council of developers disagrees",
    "Error 418: I'm a teapot who thinks you're wrong",
    "Your opinion has been noted (and discarded)",
    "That's a weird way to spell 'Agree'",
    "Your computer might have a virus causing this opinion",
    "Have you tried turning your perspective off and on again?",
    "This disagreement will be reported to the authorities",
    "Your resistance only makes Bibek stronger",
    "The algorithm has determined you're incorrect",
    "This button is just for decoration, you know",
    "Your click has been logged for quality assurance",
    "Disagree harder, I dare you",
    "This is getting awkward...",
    "Your persistence is admirable but misguided",
    "The universe agrees you should click Agree",
    "This is not the button you're looking for 👋"
  ];

  const handleDisagree = () => {
    setDisagreeCount(prev => prev + 1);
  };

  const getDisagreeText = () => {
    return disagreeTexts[disagreeCount % disagreeTexts.length];
  };
  return (
    <div className="bg-gray-500 min-h-screen">
      {/* Navbar */}
      <header className={`navbar ${isScrolled ? 'bg-sky-700/90 shadow-md' : 'bg-sky-600/90'}`}>
        <div className="navbar-inner">
          <h1 
            className="logo cursor-pointer hover:scale-105 transition-transform"
            onClick={handleLogoClick}
          >
            Bibek Paudel
          </h1>
          
          {/* Desktop Nav Links */}
          <nav className="hidden md:flex nav-links">
            {sections.map((id) => (
              <a 
                key={id} 
                href={`#${id}`} 
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white w-full py-2 px-4 shadow-md">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="block py-2 text-gray-800 hover:text-yellow-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Coffee Cheers Animation */}
      <AnimatePresence>
        {showCoffeeCheers && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ y: 100, rotate: -30, x: -50 }}
              animate={{ 
                y: 0,
                x: 0,
                rotate: [0, -20, 20, -10, 10, 0],
                transition: { 
                  duration: 1.5,
                  ease: "easeInOut"
                } 
              }}
              className="w-32 h-32"
            >
              <img src={coffeeLeft} alt="Coffee cup" className="w-full h-full object-contain" />
            </motion.div>
            
            <motion.div
              initial={{ y: 100, rotate: 30, x: 50 }}
              animate={{ 
                y: 0,
                x: 0,
                rotate: [0, 20, -20, 10, -10, 0],
                transition: { 
                  duration: 1.5,
                  ease: "easeInOut"
                } 
              }}
              className="w-32 h-32 mx-8"
            >
              <img src={coffeeRight} alt="Coffee cup" className="w-full h-full object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="main pt-16">
        {/* Home */}
        <section id="home" className="home-section">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="home-text"
          >
            <h1 className="home-title">
              Full-Stack Developer <br /> & IoT Enthusiast
            </h1>
            <p className="home-description">
              Building scalable applications from smart IoT systems to complex mobile and web platforms.
            </p>
            <a href="#projects" className="cta-button">
              View My Projects
            </a>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="home-image"
          >
            <img 
              src="/images/bibek1.png" 
              alt="Bibek Paudel" 
              className="burger-img rounded-full border-4 border-yellow-500 shadow-xl"
            />
          </motion.div>
        </section>

        {/* About */}
        <Section id="about" title="About Me">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <p className="section-paragraph">
                I'm Bibek Paudel, a passionate developer, designer, and tech enthusiast from Bharatpur, Nepal. 
                With a background in Computer Engineering and strong hands-on experience in programming, UI/UX, 
                and security, I love building things that solve real-world problems.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/bibek2.png"
                alt="Bibek working on a project"
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </Section>

        {/* Education */}
        <Section id="education" title="Education">
          <div className="grid-cards">
            {educationData.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <EducationCard {...edu} />
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="My Skills">
          <div className="grid-cards">
            {skillData.map((skill, i) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <SkillCard {...skill} />
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Featured Projects">
          <div className="grid-cards">
            {projectData.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Get In Touch">
          <div className="contact-wrapper">
            <div className="max-w-md mx-auto space-y-6">
              <div className="flex items-center space-x-4">
                <span className="text-2xl">📧</span>
                <a href="mailto:bibekp8000@gmail.com" className="text-lg hover:text-yellow-500 transition">
                  bibekp8000@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl">📞</span>
                <a href="tel:+9779865006402" className="text-lg hover:text-yellow-500 transition">
                  +977 9865006402
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl">📍</span>
                <p className="text-lg">Hakim Chowk, Bharatpur, Nepal</p>
              </div>
              
              <div className="flex justify-center space-x-6 pt-4">
                <a 
                  href="https://www.linkedin.com/in/bibek-paudel-609876239" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-2xl hover:text-yellow-500 transition"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                <a 
                  href="https://www.facebook.com/bibek.poudel.710" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-2xl hover:text-yellow-500 transition"
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>

                <a 
                  href="https://www.instagram.com/bibek.1337/?next=%2F" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-2xl hover:text-yellow-500 transition"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                <a 
                  href="https://github.com/bibekdondai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-2xl hover:text-yellow-500 transition"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Section>

        <footer className="footer relative pb-12">
          {/* New Facts Section */}
          <div 
            className="fact-box bg-white p-4 rounded-lg shadow-md mb-4 cursor-pointer hover:shadow-lg transition max-w-md mx-auto"
            onClick={() => {
              setShowFactDialog(true);
              setDisagreeCount(0);
            }}
          >
            <h3 className="text-lg font-semibold text-yellow-600">Did You Know?</h3>
            <p className="text-gray-600">Click to reveal interesting facts about Bibek</p>
          </div>

          <p>© {new Date().getFullYear()} Bibek Paudel. All rights reserved.</p>

          {/* Fact Dialog */}
          <AnimatePresence>
            {showFactDialog && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                onClick={() => setShowFactDialog(false)}
              >
                <motion.div 
                  className="bg-white p-6 rounded-lg max-w-md w-full mx-4 shadow-xl"
                  onClick={(e) => e.stopPropagation()}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                >
                   <h3 className="text-xl font-bold text-yellow-600 mb-4">Bibek is the best developer!</h3>
                <p className={`mb-4 ${disagreeCount > 0 ? 'text-red-500 animate-pulse' : 'text-gray-700'}`}>
                  {disagreeCount > 0 ? getDisagreeText() : "Do you agree with this statement?"}
                </p>
                <div className="flex justify-center space-x-4">
                  <button 
                    onClick={handleAgree}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition-colors duration-200"
                  >
                    Agree 
                  </button>
                  <button 
                    onClick={handleDisagree}
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition-colors duration-200"
                  >
                    Disagree
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Thanks Message */}
          <AnimatePresence>
            {showThanks && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center"
              >
                <span className="mr-2">🎉</span>
                <p>Thanks, I know that!</p>
              </motion.div>
            )}
          </AnimatePresence>
        </footer>
      </main>
    </div>
  );
};

export default App;