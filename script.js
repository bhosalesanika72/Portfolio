<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <meta name="viewport"
        content="width=device-width, initial-scale=1.0">

    <meta name="description"
        content="Sanika Bhosale - Java Full Stack Developer Portfolio">

    <title>Sanika Bhosale | Java Full Stack Developer</title>

    <!-- Font Awesome -->
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

    <!-- Google Fonts -->
    <link rel="preconnect"
        href="https://fonts.googleapis.com">

    <link rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap"
        rel="stylesheet">

    <!-- CSS -->
    <link rel="stylesheet" href="style.css">
</head>


<body>

    <!-- ================= NAVBAR ================= -->

    <header class="navbar">

        <a href="#home" class="logo">
            <span>&lt;</span>Sanika<span>/&gt;</span>
        </a>

        <nav id="navMenu">

            <a href="#home" class="active">Home</a>

            <a href="#about">About</a>

            <a href="#skills">Skills</a>

            <a href="#projects">Projects</a>

            <a href="#experience">Experience</a>

            <a href="#contact">Contact</a>

        </nav>


        <div class="nav-actions">

            <button id="themeToggle"
                class="icon-btn"
                aria-label="Change theme">

                <i class="fa-solid fa-moon"></i>

            </button>


            <button id="menuBtn"
                class="icon-btn menu-btn"
                aria-label="Open menu">

                <i class="fa-solid fa-bars"></i>

            </button>

        </div>

    </header>


    <!-- ================= HERO ================= -->

    <main>

        <section id="home" class="hero">

            <div class="hero-content">

                <p class="intro">
                    HELLO, I'M
                </p>


                <h1>
                    Sanika <span>Bhosale</span>
                </h1>


                <h2>
                    I'm a
                    <span id="typingText"></span>
                </h2>


                <p class="hero-description">

                    B.Tech student and aspiring Java Full Stack
                    Developer passionate about building scalable,
                    responsive and user-friendly applications.

                </p>


                <div class="hero-buttons">

                    <a href="#projects"
                        class="btn primary-btn">

                        View Projects

                        <i class="fa-solid fa-arrow-right"></i>

                    </a>


                    <!-- RESUME DOWNLOAD -->

                    <a href="resume.pdf"
                        class="btn secondary-btn"
                        download="Sanika-Bhosale-Resume.pdf">

                        <i class="fa-solid fa-download"></i>

                        Download Resume

                    </a>

                </div>


                <!-- SOCIAL LINKS -->

                <div class="social-links">

                    <!-- GitHub -->

                    <a href="https://github.com/bhosalesanika72"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub">

                        <i class="fa-brands fa-github"></i>

                    </a>


                    <!-- LinkedIn -->

                    <a href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn">

                        <i class="fa-brands fa-linkedin-in"></i>

                    </a>


                    <!-- Email -->

                    <a href="mailto:YOUR-EMAIL@gmail.com"
                        aria-label="Email">

                        <i class="fa-solid fa-envelope"></i>

                    </a>

                </div>

            </div>


            <!-- CODE CARD -->

            <div class="hero-visual">

                <div class="glow"></div>

                <div class="code-card">

                    <div class="code-header">

                        <span></span>
                        <span></span>
                        <span></span>

                    </div>


                    <div class="code-content">

                        <p>
                            <span class="purple">public class</span>
                            <span class="blue">Developer</span>
                            {
                        </p>

                        <p>
                            &nbsp;&nbsp;
                            <span class="purple">String</span>
                            name =
                            <span class="green">
                                "Sanika";
                            </span>
                        </p>

                        <p>
                            &nbsp;&nbsp;
                            <span class="purple">String</span>
                            role =
                            <span class="green">
                                "Java Developer";
                            </span>
                        </p>

                        <p>
                            &nbsp;&nbsp;
                            <span class="purple">boolean</span>
                            learning =
                            <span class="orange">
                                true;
                            </span>
                        </p>

                        <p>
                            &nbsp;&nbsp;
                            <span class="purple">return</span>
                            passion;
                        </p>

                        <p>
                            }
                        </p>

                    </div>

                </div>

            </div>

        </section>


        <!-- ================= ABOUT ================= -->

        <section id="about" class="section">

            <div class="section-title">

                <p>GET TO KNOW ME</p>

                <h2>
                    About <span>Me</span>
                </h2>

            </div>


            <div class="about-container">

                <div class="profile-box">

                    <i class="fa-solid fa-user"></i>

                </div>


                <div class="about-content">

                    <h3>
                        Java Full Stack Developer
                    </h3>


                    <p>

                        I am a B.Tech student with a strong interest
                        in software development and Java Full Stack
                        Development.

                    </p>


                    <p>

                        I enjoy developing practical applications
                        using Java, Spring Boot, REST APIs, React,
                        JavaScript and databases.

                    </p>


                    <p>

                        My goal is to continuously improve my
                        technical skills and build software that
                        solves real-world problems.

                    </p>


                    <div class="about-info">

                        <div>
                            <strong>Education</strong>
                            <span>B.Tech</span>
                        </div>

                        <div>
                            <strong>Specialization</strong>
                            <span>Java Full Stack</span>
                        </div>

                        <div>
                            <strong>Location</strong>
                            <span>India</span>
                        </div>

                    </div>

                </div>

            </div>

        </section>


        <!-- ================= SKILLS ================= -->

        <section id="skills"
            class="section skills-section">

            <div class="section-title">

                <p>WHAT I KNOW</p>

                <h2>
                    Technical <span>Skills</span>
                </h2>

            </div>


            <div class="skills-grid">


                <div class="skill-card">

                    <div class="skill-icon">
                        <i class="fa-brands fa-java"></i>
                    </div>

                    <h3>Java</h3>

                    <p>
                        OOP, Collections, Exception Handling,
                        Strings, Arrays and Multithreading.
                    </p>

                    <div class="skill-bar">
                        <span style="width:85%"></span>
                    </div>

                </div>


                <div class="skill-card">

                    <div class="skill-icon">
                        <i class="fa-solid fa-leaf"></i>
                    </div>

                    <h3>Spring Boot</h3>

                    <p>
                        REST APIs, CRUD operations,
                        Spring Security and backend development.
                    </p>

                    <div class="skill-bar">
                        <span style="width:75%"></span>
                    </div>

                </div>


                <div class="skill-card">

                    <div class="skill-icon">
                        <i class="fa-brands fa-js"></i>
                    </div>

                    <h3>JavaScript</h3>

                    <p>
                        DOM, Events, ES6, Functions,
                        Async JavaScript and APIs.
                    </p>

                    <div class="skill-bar">
                        <span style="width:75%"></span>
                    </div>

                </div>


                <div class="skill-card">

                    <div class="skill-icon">
                        <i class="fa-brands fa-react"></i>
                    </div>

                    <h3>React</h3>

                    <p>
                        Components, Props, State, Hooks
                        and responsive UI development.
                    </p>

                    <div class="skill-bar">
                        <span style="width:65%"></span>
                    </div>

                </div>


                <div class="skill-card">

                    <div class="skill-icon">
                        <i class="fa-solid fa-database"></i>
                    </div>

                    <h3>MongoDB</h3>

                    <p>
                        Collections, queries, database
                        design and application connectivity.
                    </p>

                    <div class="skill-bar">
                        <span style="width:70%"></span>
                    </div>

                </div>


                <div class="skill-card">

                    <div class="skill-icon">
                        <i class="fa-solid fa-code"></i>
                    </div>

                    <h3>HTML & CSS</h3>

                    <p>
                        Responsive layouts, Flexbox, Grid,
                        Bootstrap and UI development.
                    </p>

                    <div class="skill-bar">
                        <span style="width:85%"></span>
                    </div>

                </div>

            </div>

        </section>


        <!-- ================= PROJECTS ================= -->

        <section id="projects"
            class="section">

            <div class="section-title">

                <p>MY WORK</p>

                <h2>
                    Featured <span>Projects</span>
                </h2>

            </div>


            <div class="projects-grid">


                <!-- PROJECT 1 -->

                <article class="project-card">

                    <div class="project-image project-one">

                        <i class="fa-solid fa-users"></i>

                    </div>


                    <div class="project-content">

                        <span class="project-type">
                            FULL STACK
                        </span>

                        <h3>
                            Placement Management System
                        </h3>

                        <p>

                            A web application for managing students,
                            companies, job opportunities and
                            campus placement activities.

                        </p>


                        <div class="tech-stack">

                            <span>Java</span>
                            <span>Spring Boot</span>
                            <span>React</span>
                            <span>MongoDB</span>

                        </div>


                        <div class="project-links">

                            <a href="https://github.com/bhosalesanika72"
                                target="_blank"
                                rel="noopener noreferrer">

                                <i class="fa-brands fa-github"></i>

                                GitHub

                            </a>


                            <a href="#"
                                onclick="return false;">

                                Live Demo

                                <i class="fa-solid fa-arrow-up-right-from-square"></i>

                            </a>

                        </div>

                    </div>

                </article>


                <!-- PROJECT 2 -->

                <article class="project-card">

                    <div class="project-image project-two">

                        <i class="fa-solid fa-file-circle-check"></i>

                    </div>


                    <div class="project-content">

                        <span class="project-type">
                            JAVA APPLICATION
                        </span>

                        <h3>
                            Resume Screening System
                        </h3>

                        <p>

                            Java-based application for resume
                            analysis, keyword matching, scoring
                            and candidate ranking.

                        </p>


                        <div class="tech-stack">

                            <span>Java</span>
                            <span>PDF</span>
                            <span>AI</span>

                        </div>


                        <div class="project-links">

                            <a href="https://github.com/bhosalesanika72"
                                target="_blank"
                                rel="noopener noreferrer">

                                <i class="fa-brands fa-github"></i>

                                GitHub

                            </a>

                        </div>

                    </div>

                </article>


                <!-- PROJECT 3 -->

                <article class="project-card">

                    <div class="project-image project-three">

                        <i class="fa-solid fa-calculator"></i>

                    </div>


                    <div class="project-content">

                        <span class="project-type">
                            WEB APPLICATION
                        </span>

                        <h3>
                            Student Result Calculator
                        </h3>

                        <p>

                            Web application for calculating
                            marks, percentage, grades and
                            student performance.

                        </p>


                        <div class="tech-stack">

                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>

                        </div>


                        <div class="project-links">

                            <a href="https://github.com/bhosalesanika72"
                                target="_blank"
                                rel="noopener noreferrer">

                                <i class="fa-brands fa-github"></i>

                                GitHub

                            </a>

                        </div>

                    </div>

                </article>

            </div>

        </section>


        <!-- ================= EXPERIENCE ================= -->

        <section id="experience"
            class="section experience-section">

            <div class="section-title">

                <p>MY JOURNEY</p>

                <h2>
                    Experience & <span>Education</span>
                </h2>

            </div>


            <div class="timeline">


                <div class="timeline-item">

                    <div class="timeline-dot"></div>

                    <div class="timeline-content">

                        <span>INTERNSHIP</span>

                        <h3>
                            Java Programming Intern
                        </h3>

                        <h4>
                            CodeSoft
                        </h4>

                        <p>

                            Worked on Java programming projects
                            including Student Grade Calculator,
                            ATM Machine and Number Guessing Game.

                        </p>

                    </div>

                </div>


                <div class="timeline-item">

                    <div class="timeline-dot"></div>

                    <div class="timeline-content">

                        <span>EDUCATION</span>

                        <h3>
                            Bachelor of Technology
                        </h3>

                        <h4>
                            B.Tech
                        </h4>

                        <p>

                            Developing skills in programming,
                            databases, web development,
                            software engineering and
                            full-stack development.

                        </p>

                    </div>

                </div>

            </div>

        </section>


        <!-- ================= CTA ================= -->

        <section class="cta">

            <p>
                LOOKING FOR OPPORTUNITIES
            </p>

            <h2>
                Let's build something
                <span>amazing together.</span>
            </h2>

            <a href="#contact"
                class="btn primary-btn">

                Get In Touch

                <i class="fa-solid fa-arrow-right"></i>

            </a>

        </section>


        <!-- ================= CONTACT ================= -->

        <section id="contact"
            class="section contact-section">

            <div class="section-title">

                <p>CONTACT ME</p>

                <h2>
                    Let's <span>Connect</span>
                </h2>

            </div>


            <div class="contact-container">


                <div class="contact-info">

                    <h3>
                        Have a project or opportunity?
                    </h3>

                    <p>

                        Feel free to contact me for
                        software development opportunities,
                        projects and collaborations.

                    </p>


                    <!-- EMAIL -->

                    <a class="contact-item"
                        href="mailto:YOUR-EMAIL@gmail.com">

                        <div class="contact-icon">
                            <i class="fa-solid fa-envelope"></i>
                        </div>

                        <div>

                            <span>Email</span>

                            <strong>
                                YOUR-EMAIL@gmail.com
                            </strong>

                        </div>

                    </a>


                    <!-- GITHUB -->

                    <a class="contact-item"
                        href="https://github.com/bhosalesanika72"
                        target="_blank"
                        rel="noopener noreferrer">

                        <div class="contact-icon">
                            <i class="fa-brands fa-github"></i>
                        </div>

                        <div>

                            <span>GitHub</span>

                            <strong>
                                github.com/bhosalesanika72
                            </strong>

                        </div>

                    </a>


                    <!-- LINKEDIN -->

                    <a class="contact-item"
                        href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME/"
                        target="_blank"
                        rel="noopener noreferrer">

                        <div class="contact-icon">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </div>

                        <div>

                            <span>LinkedIn</span>

                            <strong>
                                LinkedIn Profile
                            </strong>

                        </div>

                    </a>


                    <!-- PHONE -->

                    <a class="contact-item"
                        href="tel:+91XXXXXXXXXX">

                        <div class="contact-icon">
                            <i class="fa-solid fa-phone"></i>
                        </div>

                        <div>

                            <span>Phone</span>

                            <strong>
                                +91 XXXXX XXXXX
                            </strong>

                        </div>

                    </a>

                </div>


                <!-- CONTACT FORM -->

                <form id="contactForm"
                    class="contact-form">

                    <input
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        required>


                    <input
                        type="email"
                        id="email"
                        placeholder="Your Email"
                        required>


                    <input
                        type="text"
                        id="subject"
                        placeholder="Subject"
                        required>


                    <textarea
                        id="message"
                        rows="6"
                        placeholder="Your Message"
                        required></textarea>


                    <button type="submit"
                        class="btn primary-btn">

                        Send Message

                        <i class="fa-solid fa-paper-plane"></i>

                    </button>

                </form>

            </div>

        </section>

    </main>


    <!-- ================= FOOTER ================= -->

    <footer>

        <div class="footer-logo">

            <span>&lt;</span>
            Sanika
            <span>/&gt;</span>

        </div>


        <p>
            Java Full Stack Developer
        </p>


        <div class="footer-social">

            <a href="https://github.com/bhosalesanika72"
                target="_blank"
                rel="noopener noreferrer">

                <i class="fa-brands fa-github"></i>

            </a>


            <a href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME/"
                target="_blank"
                rel="noopener noreferrer">

                <i class="fa-brands fa-linkedin"></i>

            </a>


            <a href="mailto:YOUR-EMAIL@gmail.com">

                <i class="fa-solid fa-envelope"></i>

            </a>

        </div>


        <p class="copyright">
            © 2026 Sanika Bhosale. All rights reserved.
        </p>

    </footer>


    <!-- JavaScript -->

    <script src="script.js"></script>

</body>

</html>
