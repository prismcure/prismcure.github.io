import { useEffect, useState } from "react";
import "./App.css";

// Theme Toggle Component
function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

// Tab Navigation Component
function TabNavigation({ activeTab, setActiveTab, theme, toggleTheme }) {
  const tabs = [
    { id: "home", label: "Home" },
    { id: "publications", label: "Publications" },
    { id: "blog", label: "Blog" },
    { id: "cv", label: "CV" },
    { id: "teaching", label: "Teaching" },
    { id: "technical-skills", label: "Technical" },
    { id: "outreach", label: "Outreach" },
  ];

  return (
    <nav className="tab-navigation">
      <div className="tab-container">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </nav>
  );
}

// Header Component - Hero section with professional branding
function Header({ activeTab, setActiveTab, theme, toggleTheme }) {
  return (
    <header className="header">
      <TabNavigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <div className="hero-content">
        <img src="/Le-Anh.jpg" alt="Anh Le" className="profile-photo" />
        <h1 className="hero-title">PRISMCURE</h1>
        <p className="hero-acronym">
          <span style={{ fontSize: "1.5em" }}>
            <span className="acronym-highlight">P</span>hysics{" "}
            <span className="acronym-highlight">R</span>eliability &{" "}
            <span className="acronym-highlight">I</span>nverse{" "}
            <span className="acronym-highlight">S</span>ystem{" "}
            <span className="acronym-highlight">M</span>odeling
            <br />
            through <span className="acronym-highlight">
              C
            </span>omputational <span className="acronym-highlight">U</span>
            ncertainty & <span className="acronym-highlight">R</span>isk{" "}
            <span className="acronym-highlight">E</span>ngineering
          </span>
        </p>
      </div>
    </header>
  );
}

// Latest Posts Component
function LatestPosts() {
  const posts = [
    {
      title:
        "Physics-Informed Neural Network for Measurement-Free Bathymetry Inversion",
      date: "2025-01-15",
      excerpt:
        "New research on using PINNs for river bathymetry inversion using the Shiono–Knight Method.",
      link: "#",
    },
    {
      title:
        "Multi-Scale Temporal Analysis for Failure Prediction in Energy Systems",
      date: "2025-01-10",
      excerpt:
        "Published at RAMS 2025 - IEEE. Exploring temporal analysis techniques for predicting power grid failures.",
      link: "https://ieeexplore.ieee.org/abstract/document/10935083",
    },
    {
      title:
        "Topology-Aware Spatio-Temporal Graph Transformer for Smart Grid Failures",
      date: "2024-12-20",
      excerpt:
        "Upcoming publication at RAMS 2026 - IEEE. Graph transformer approach for predicting smart grid failures.",
      link: "#",
    },
  ];

  return (
    <section className="latest-posts">
      <h2>Latest Posts</h2>
      <div className="posts-list">
        {posts.map((post, index) => (
          <article key={index} className="post-item">
            <div className="post-date">{post.date}</div>
            <h3 className="post-title">
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                {post.title}
              </a>
            </h3>
            <p className="post-excerpt">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

// About Component - Research Philosophy
function About() {
  return (
    <section className="about">
      <h2>About PRISMCURE</h2>
      <div className="about-intro">
        <h3 className="hero-name">Anh Le (Frank)</h3>
        <p className="hero-subtitle">
          Ph.D. Student | North Dakota State University
          <br />
          Specializing in Physics-Informed Machine Learning for Infrastructure
          Systems
        </p>
      </div>
      <p>
        PRISMCURE is a unified computational framework that bridges
        physics-based modeling with modern machine learning to solve complex
        engineering problems. By embedding physical laws directly into neural
        networks and quantifying prediction uncertainty through Bayesian
        methods, this approach delivers reliable, explainable solutions for
        critical infrastructure systems. The framework integrates advanced
        techniques from computational mechanics, statistical learning theory,
        and high-performance computing to address real-world challenges in
        energy systems, water resources, and other critical infrastructure
        domains. Through rigorous validation and uncertainty quantification,
        PRISMCURE enables engineers and researchers to make data-driven
        decisions with confidence, balancing physical constraints with
        data-driven insights to optimize system performance, predict failures,
        and enhance resilience across multiple scales and applications.
      </p>

      <h3>Research Focus</h3>
      <p>My research focuses on two key applications:</p>
      <ul className="research-list">
        <li>
          <strong>Energy Systems:</strong> Predicting power grid failures and
          optimizing maintenance strategies
        </li>
        <li>
          <strong>Water Resources:</strong> Inverting river bathymetry from
          remote sensing data
        </li>
      </ul>
      <p>
        What unifies these domains is the methodology: physics-informed neural
        networks accelerated through HPC optimization, coupled with rigorous
        uncertainty quantification to support risk-informed engineering
        decisions.
      </p>

      <h3>Research Approach - 3 Core Pillars</h3>
      <div className="pillars">
        <div className="pillar">
          <h4>
            1. Physics-Informed Machine Learning for Inverse Problems and
            Uncertainty Quantification
          </h4>
          <p>
            Solving inverse problems by embedding governing equations (PDEs)
            into neural network architectures to infer hidden system states from
            observations. Coupled with Bayesian inference to deliver physically
            consistent predictions with rigorous uncertainty bounds for
            risk-informed engineering decisions.
          </p>
        </div>

        <div className="pillar">
          <h4>
            2. Reliability Prediction and Maintenance Optimization for Complex
            Networked Systems
          </h4>
          <p>
            Topology-aware graph transformers coupled with multi-scale temporal
            analysis to enable proactive maintenance and enhance grid
            resilience. Integrates time-synchronized PMU sensor streams through
            signal processing and feature engineering across multiple temporal
            windows to predict cascading failures, rank critical assets for
            maintenance prioritization, and support resilience-focused
            decision-making under extreme operating conditions.
          </p>
        </div>

        <div className="pillar">
          <h4>3. High-Performance Computing for Scalable Implementation</h4>
          <p>
            CUDA and multi-GPU optimization achieving 70-80% runtime reduction,
            enabling real-time experimentation and production-scale deployment
            of physics-informed models. Distributed training frameworks for
            handling large-scale infrastructure datasets on HPC clusters.
          </p>
        </div>
      </div>
    </section>
  );
}

// Publications Component
function Publications() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/projects");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section className="publications">
      {projects.length > 0 && (
        <div className="research-apps-section">
          <h2>Research Applications</h2>
          {loading && <p>Loading...</p>}
          {error && <p className="error">Error: {error}</p>}
          {!loading &&
            !error &&
            projects.map((project, index) => (
              <article key={project.id} className="application">
                <div className="app-header">
                  <span className="app-badge">Application {index + 1}</span>
                  <span className="app-domain">{project.domain}</span>
                </div>
                <h3>{project.title}</h3>

                <div className="app-content">
                  <div className="app-block">
                    <h4>Problem:</h4>
                    <p>{project.problem}</p>
                  </div>

                  <div className="app-block">
                    <h4>Approach:</h4>
                    <ul>
                      {project.approach.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="app-block">
                    <h4>Impact:</h4>
                    <p>{project.impact}</p>
                  </div>

                  <div className="tech-stack-badge">
                    <strong>Tech Stack:</strong> {project.technologies}
                  </div>
                </div>
              </article>
            ))}
        </div>
      )}

      <h2>Publications</h2>

      <div className="pub-item">
        <p className="pub-authors">Le, A., Souri J., & Le, T. B.</p>
        <p className="pub-title">
          <a href="#" target="_blank" rel="noopener noreferrer">
            Physics-Informed Neural Network for Measurement-Free Bathymetry
            Inversion Using the Shiono–Knight Method.
          </a>
        </p>
        <p className="pub-venue">
          <em>Water Resources Research (AGU)</em> - In Preparation
        </p>
      </div>

      <div className="pub-item">
        <p className="pub-authors">Le, A. et al.</p>
        <p className="pub-title">
          <a
            href="https://ieeexplore.ieee.org/abstract/document/10935083"
            target="_blank"
            rel="noopener noreferrer"
          >
            Multi-Scale Temporal Analysis for Failure Prediction in Energy
            Systems.
          </a>
        </p>
        <p className="pub-venue"> RAMS 2025 - IEEE</p>
      </div>

      <div className="pub-item">
        <p className="pub-authors">Le, A. et al.</p>
        <p className="pub-title">
          <a href="#" target="_blank" rel="noopener noreferrer">
            Topology-Aware Spatio-Temporal Graph Transformer for Predicting
            Smart Grid Failures.
          </a>
        </p>
        <p className="pub-venue"> RAMS 2026 - IEEE</p>
      </div>

      <div className="pub-summary">
        <p>+ 4 additional conference papers</p>
      </div>

      <div className="pub-stats">
        <div className="stat-box">
          <span className="stat-number">1</span>
          <span className="stat-label">Journal Article in Preparation</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">6</span>
          <span className="stat-label">Conference Papers</span>
        </div>
      </div>
    </section>
  );
}

// Technical Skills Component
function TechnicalSkills() {
  return (
    <section className="technical-skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h4>Machine Learning & AI</h4>
          <p>
            Physics-Informed Neural Networks (PINNs), Graph Neural Networks
            (GNNs), Transformers, Time-Series Forecasting, Imbalanced Data
            Handling, Feature Selection, Model Explainability
          </p>
        </div>

        <div className="skill-category">
          <h4>High-Performance Computing</h4>
          <p>
            CUDA Programming, Multi-GPU Optimization, Distributed Training (JAX,
            PyTorch), HPC Systems
          </p>
        </div>

        <div className="skill-category">
          <h4>Reliability & Risk Analysis</h4>
          <p>
            Remaining Useful Life Prediction, Weibull Analysis, Survival
            Analysis, Bayesian Uncertainty Quantification, Monte Carlo
            Simulation, Condition Monitoring
          </p>
        </div>

        <div className="skill-category">
          <h4>Signal & Sensor Processing</h4>
          <p>
            Signal Processing, Sensor Fusion, Time-Synchronized Streams,
            Telemetry, Real-Time Monitoring, PMU Data Analysis
          </p>
        </div>

        <div className="skill-category">
          <h4>Hydraulic Engineering</h4>
          <p>
            Open-Channel Hydraulics, River Bathymetry, Hydrodynamic Modeling,
            UAV-Based Measurements, PDE Solvers
          </p>
        </div>

        <div className="skill-category">
          <h4>Software & Tools</h4>
          <div className="tool-group">
            <p>
              <strong>Programming:</strong> Python (JAX, PyTorch, TensorFlow,
              scikit-learn), MATLAB, CUDA, C++
            </p>
            <p>
              <strong>Hydraulic:</strong> HEC-RAS, Tecplot, QGIS, ArcGIS, HY8
            </p>
            <p>
              <strong>DevOps:</strong> Docker, Linux, Git, HPC Clusters
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// CV Component - Following reference site pattern
function CV() {
  return (
    <section className="cv">
      <div className="cv-section">
        <h2>Basics</h2>
        <table className="cv-table">
          <tbody>
            <tr>
              <td>
                <strong>Name</strong>
              </td>
              <td>Anh Le (Frank)</td>
            </tr>
            <tr>
              <td>
                <strong>Label</strong>
              </td>
              <td>Ph.D. Student</td>
            </tr>
            <tr>
              <td>
                <strong>Email</strong>
              </td>
              <td>
                <a href="mailto:ducanh.le@ndsu.edu">ducanh.le@ndsu.edu</a>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Phone</strong>
              </td>
              <td>
                <a href="tel:+17012195500">+1 701 219 5500</a>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Url</strong>
              </td>
              <td>
                <a
                  href="https://prismcure.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://prismcure.github.io
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="cv-section">
        <h2>Work</h2>
        <div className="cv-item">
          <div className="cv-item-header">
            <span className="cv-date">2024 - Present</span>
            <span className="cv-location">Fargo, North Dakota</span>
          </div>
          <h3>Graduate Research Assistant</h3>
          <p className="cv-institution">North Dakota State University</p>
          <p className="cv-field">ICE Lab, Department of Civil Engineering</p>
        </div>

        <div className="cv-item">
          <div className="cv-item-header">
            <span className="cv-date">2021 - 2023</span>
            <span className="cv-location">Ho Chi Minh City, Vietnam</span>
          </div>
          <h3>Lecturer</h3>
          <p className="cv-institution">
            Ho Chi Minh City University of Technology (HCMUT)
          </p>
          <p className="cv-field">Construction Management Department</p>
        </div>
      </div>

      <div className="cv-section">
        <h2>Education</h2>
        <div className="cv-item">
          <div className="cv-item-header">
            <span className="cv-date">2024 - 2028</span>
            <span className="cv-location">Fargo, North Dakota</span>
          </div>
          <h3>Ph.D.</h3>
          <p className="cv-institution">North Dakota State University</p>
          <p className="cv-field">Civil Engineering</p>
          <p className="cv-details">
            Focus: Physics-Informed Machine Learning, Computational Uncertainty
            & Risk Engineering
          </p>
          <p className="cv-details">ICE Lab, Advisor: Dr. Trung Le</p>
        </div>

        <div className="cv-item">
          <div className="cv-item-header">
            <span className="cv-date">2018 - 2020</span>
            <span className="cv-location">Ho Chi Minh City, Vietnam</span>
          </div>
          <h3>M.S.</h3>
          <p className="cv-institution">
            Ho Chi Minh City University of Technology
          </p>
          <p className="cv-field">Construction Management</p>
          <p className="cv-details">First Class Honors</p>
        </div>

        <div className="cv-item">
          <div className="cv-item-header">
            <span className="cv-date">2014 - 2018</span>
            <span className="cv-location">Ho Chi Minh City, Vietnam</span>
          </div>
          <h3>B.Eng.</h3>
          <p className="cv-institution">
            Ho Chi Minh City University of Technology
          </p>
          <p className="cv-field">Industrial and Civil Engineering</p>
        </div>
      </div>

      <div className="cv-section">
        <h2>Awards & Fellowships</h2>
        <div className="cv-item">
          <h3>Mancur Olson Graduate Fellowship</h3>
          <p className="cv-institution">North Dakota State University</p>
        </div>
        <div className="cv-item">
          <h3>
            Rocky Mountain Advanced Computing Consortium (RMACC) Training Award
          </h3>
          <p className="cv-details">
            Recognizing excellence in high-performance computing research and
            training
          </p>
        </div>
      </div>
    </section>
  );
}

// Teaching Component - Following CV Education pattern
function Teaching() {
  return (
    <section className="teaching">
      <h2>Teaching Experience</h2>
      <div className="cv-item">
        <div className="cv-item-header">
          <span className="cv-date">2021 - 2023</span>
          <span className="cv-location">Ho Chi Minh City, Vietnam</span>
        </div>
        <h3>Lecturer</h3>
        <p className="cv-institution">
          Ho Chi Minh City University of Technology
        </p>
        <p className="cv-field">Construction Management Department</p>
        <p className="cv-details">
          Taught undergraduate and graduate courses bridging theoretical
          foundations with industry practice:
        </p>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-date">Fall 2021 - Spring 2023</div>
              <div className="timeline-title">
                Construction Economics (CI4129)
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-date">Fall 2021 - Spring 2023</div>
              <div className="timeline-title">
                Construction Project Management (CI1053)
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-date">Fall 2022 - Spring 2023</div>
              <div className="timeline-title">
                Construction Equipment and Method (CI3043)
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-date">Spring 2022 - Fall 2023</div>
              <div className="timeline-title">
                Project of On-Site Construction Management (CI4127)
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-date">Summer 2021 - Summer 2023</div>
              <div className="timeline-title">Field Trip (CI2057)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Outreach Component
function Outreach() {
  return (
    <section className="outreach">
      <h2>Outreach & Engagement</h2>
      <p className="outreach-intro">Community & Educational Initiatives</p>

      <div className="outreach-item">
        <h4>International Bridges Program, NDSU</h4>
        <p>
          Member promoting global community engagement and cross-cultural
          collaboration among students
        </p>
      </div>

      <div className="outreach-item">
        <h4>Sunday Academy, Turtle Mountain Community College</h4>
        <p>
          Volunteer supporting STEM education initiatives for Native American
          youth
        </p>
      </div>

      <div className="outreach-item">
        <h4>Challey Institute</h4>
        <p>
          Participant in interdisciplinary initiatives on economic opportunity,
          entrepreneurship, and leadership development
        </p>
      </div>
    </section>
  );
}

// Contact Component - Simplified for Home tab
function Contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <div className="contact-content">
        <div className="contact-links">
          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <a href="mailto:ducanh.le@ndsu.edu">ducanh.le@ndsu.edu</a>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <a href="tel:+17012195500">+1 701 219 5500</a>
          </div>
          <div className="contact-item">
            <span className="contact-icon">💼</span>
            <a
              href="https://linkedin.com/in/anhlendsu"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/anhlendsu
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-icon">💻</span>
            <a
              href="https://github.com/ducanhle26"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/ducanhle26
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-icon">🎓</span>
            <a
              href="https://scholar.google.com/citations?user=NCw1EnQAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Scholar
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <span>Fargo, ND</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Blog Component
function Blog() {
  return (
    <section className="blog">
      <h2>Blog</h2>
      <p className="blog-intro">
        Coming soon! This section will feature research updates, technical
        insights, and thoughts on physics-informed machine learning and
        computational engineering.
      </p>
    </section>
  );
}

// Main App Component
function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, then default to dark
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "dark";
  });

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="app">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <div className="tab-content">
        {activeTab === "home" && (
          <>
            <About />
            <LatestPosts />
            <Contact />
          </>
        )}

        {activeTab === "publications" && <Publications />}

        {activeTab === "blog" && <Blog />}

        {activeTab === "cv" && <CV />}

        {activeTab === "teaching" && <Teaching />}

        {activeTab === "technical-skills" && <TechnicalSkills />}

        {activeTab === "outreach" && <Outreach />}
      </div>
    </div>
  );
}

export default App;
