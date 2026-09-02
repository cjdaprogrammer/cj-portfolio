import Image from "next/image";

import {
  FaGithub,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
  FaCode,
  FaDatabase,
  FaGlobe,
  FaBrain,
} from "react-icons/fa";
const skills = [
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "React",
  "Next.js",
  "React Native",
  "Python",
  "Java",
  "Supabase",
  "PostgreSQL",
  "TensorFlow",
  "Git",
  "GitHub",
  "Jira",
  "Data Analytics",
  "Artificial Intelligence",
];

const services = [
  {
    icon: FaGlobe,
    title: "Web Development",
    description:
      "Building responsive, modern, and scalable web applications using Next.js and React.",
  },
  {
    icon: FaDatabase,
    title: "Database Design",
    description:
      "Designing efficient relational databases with PostgreSQL and Supabase.",
  },
  {
    icon: FaBrain,
    title: "Artificial Intelligence",
    description:
      "Developing AI-powered applications using TensorFlow and Machine Learning.",
  },
  {
    icon: FaCode,
    title: "Software Development",
    description:
      "Creating software solutions that automate business processes and improve productivity.",
  },
];

const projects = [
  {
    title: "Clinic Health Monitoring System",
    description:
      "QR-powered health monitoring platform for students and employees with reports, appointment scheduling, analytics, and health records.",
    image: "/HealthClinic.png",
    technologies: [
      "Next.js",
      "Supabase",
      "Tailwind",
      "PostgreSQL",
    ],
    live: "https://clinic-system-lelk.vercel.app/",
    github: "https://github.com/cjdaprogrammer",
  },

  {
    title: "Alayna Zuri AI Facial Analysis System",
    description:
      "Inventory Management System integrated with AI Facial Analysis, dashboards, reports, authentication, and predictive analytics.",
    image: "/Alayna.png",
    technologies: [
      "TensorFlow",
      "Next.js",
      "Supabase",
      "Tailwind",
    ],
    live: "https://your-alayna-project.app",
    github: "https://github.com/cjdaprogrammer",
  },

  {
    title: "Nexus Personal OS",
    description:
      "Personalized Operating System with AI-powered features, including a virtual assistant, task management, and productivity tools.",
    image: "/Nexus.png",
    technologies: [
      "Next.js",
      "Tailwind",
    ],
    live: "https://your-coffee-project.vercel.app",
    github: "https://github.com/cjdaprogrammer",
  },
];

const certificates = [
  "Cisco Introduction to Modern AI",
  "Cisco Introduction to Data Science",
  "Cisco Introduction to Cybersecurity",
  "Cisco Networking Basics",
  "Cisco Ethical Hacking",
  "UNITE 2025 Provincial IT Seminar",
  "Artificial Intelligence Seminar",
  "Graphic Designing Seminar",
];

const stats = [
  {
    title: "Projects",
    value: "10+",
  },
  {
    title: "Internship",
    value: "500 Hrs",
  },
  {
    title: "Certificates",
    value: "8+",
  },
  {
    title: "Technologies",
    value: "16+",
  },
];
export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#06b6d420,transparent_35%),radial-gradient(circle_at_bottom_left,#0891b220,transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">

          <div className="grid items-center gap-20 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">

                👋 Available for Full-Time Opportunities

              </div>

              <h1 className="mt-8 text-6xl font-black leading-tight lg:text-7xl">

                Clark James

                <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">

                  De Luna

                </span>

              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">

                Bachelor of Science in Information Technology graduate passionate
                about building modern Web Applications, Artificial Intelligence
                Systems, Dashboards, and scalable Software Solutions that solve
                real business problems.

              </p>

              <div className="mt-12 flex flex-wrap gap-5">

                <a
                  href="#projects"
                  className="flex items-center gap-2 rounded-xl bg-cyan-400 px-8 py-4 font-bold text-slate-900 transition duration-300 hover:scale-105 hover:bg-cyan-300"
                >
                  View Projects
                  <FaArrowRight size={20} />
                </a>

                <a
                  href="/RESUME_DELUNA_CLARKJAMES.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-cyan-400 px-8 py-4 font-bold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-900"
                >
                  <FaDownload size={20} />
                  Resume
                </a>

                <a
                  href="mailto:clarkjamesdeluna14@gmail.com"
                  className="flex items-center gap-2 rounded-xl border border-slate-700 px-8 py-4 transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  <FaEnvelope size={20} />
                  Contact
                </a>

              </div>

            </div>

            {/* RIGHT */}

            <div className="flex justify-center">

              <div className="group relative">

                <div className="absolute -inset-2 rounded-[35px] bg-gradient-to-r from-cyan-400 via-sky-500 to-cyan-400 opacity-30 blur-3xl transition duration-500 group-hover:opacity-60" />

                <div className="relative rounded-[35px] border border-slate-800 bg-slate-900 p-8 shadow-2xl">

                  <Image
                    src="/ClarkJamesDeLuna.jpg"
                    alt="Clark James De Luna"
                    width={430}
                    height={430}
                    priority
                    className="rounded-3xl transition duration-500 group-hover:scale-105"
                  />

                  <div className="mt-8 text-center">

                    <h2 className="text-3xl font-bold">

                      Clark James E. De Luna

                    </h2>

                    <p className="mt-2 text-cyan-400">

                      Full Stack Web Developer

                    </p>

                    <p className="mt-4 text-slate-400">

                      Lucena City, Quezon

                    </p>

                    <div className="mt-8 flex justify-center gap-4">

                      <a
                        href="https://github.com/cjdaprogrammer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl bg-slate-800 p-4 transition hover:bg-slate-700"
                      >
                        <FaGithub size={22} />
                      </a>

                      <a
                        href="mailto:clarkjamesdeluna14@gmail.com"
                        className="rounded-xl bg-cyan-400 p-4 text-slate-900 transition hover:bg-cyan-300"
                      >
                        <FaEnvelope size={22} />
                      </a>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => (

            <div
              key={stat.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
            >

              <h2 className="text-5xl font-black text-cyan-400">

                {stat.value}

              </h2>

              <p className="mt-4 text-slate-400">

                {stat.title}

              </p>

            </div>

          ))}

        </div>

      </section>
            {/* ================= ABOUT ================= */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-14 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
              About Me
            </span>

            <h2 className="mt-6 text-5xl font-black">

              Passionate About Building
              <span className="block text-cyan-400">
                Modern Software Solutions
              </span>

            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-300">

              I am a Bachelor of Science in Information Technology graduate
              from Dalubhasaan ng Lungsod ng Lucena who enjoys developing
              modern web applications, business systems, dashboards,
              and Artificial Intelligence solutions.

            </p>

            <p className="mt-6 text-lg leading-9 text-slate-300">

              My experience includes Full Stack Web Development,
              Database Design, Data Analytics,
              and Machine Learning using modern technologies
              such as Next.js, React, Supabase,
              PostgreSQL, and TensorFlow.

            </p>

            <p className="mt-6 text-lg leading-9 text-slate-300">

              I love solving real-world business problems by creating
              efficient, responsive, and user-friendly software that
              improves productivity and user experience.

            </p>

          </div>

          {/* RIGHT */}

          <div className="grid gap-6">

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold text-cyan-400">

                Quick Information

              </h3>

              <div className="mt-8 space-y-5">

                <div className="flex justify-between">

                  <span className="text-slate-400">
                    Name
                  </span>

                  <span>
                    Clark James De Luna
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-400">
                    Degree
                  </span>

                  <span>
                    BS Information Technology
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-400">
                    Experience
                  </span>

                  <span>
                    500-Hour Internship
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-400">
                    Specialization
                  </span>

                  <span>
                    Full Stack Development
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-400">
                    Location
                  </span>

                  <span>
                    Lucena City, Quezon
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= TECH STACK ================= */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="text-center">

          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            Technical Skills
          </span>

          <h2 className="mt-6 text-5xl font-black">

            My Tech Stack

          </h2>

          <p className="mt-4 text-slate-400">

            Technologies I use for developing modern applications.

          </p>

        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-4">

          {skills.map((skill) => (

            <div
              key={skill}
              className="rounded-full border border-slate-700 bg-slate-900 px-6 py-3 font-medium transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >

              {skill}

            </div>

          ))}

        </div>

      </section>

      {/* ================= SERVICES ================= */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="text-center">

          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            What I Do
          </span>

          <h2 className="mt-6 text-5xl font-black">

            Services

          </h2>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <div
                key={service.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400 text-slate-900">

                  <Icon size={32} />

                </div>

                <h3 className="mt-8 text-2xl font-bold">

                  {service.title}

                </h3>

                <p className="mt-5 leading-8 text-slate-400">

                  {service.description}

                </p>

              </div>

            );

          })}

        </div>

      </section>
            {/* ===================== PROJECTS ===================== */}

      <section id="projects" className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            Portfolio
          </span>

          <h2 className="mt-6 text-5xl font-black">

            Featured Projects

          </h2>

          <p className="mt-4 text-slate-400">

            Here are some of my recent software development projects.

          </p>

        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">

          {projects.map((project) => (

            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition duration-500 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20"
            >

              <div className="overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={320}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-7">

                <h3 className="text-2xl font-bold text-cyan-400">

                  {project.title}

                </h3>

                <p className="mt-5 leading-8 text-slate-400">

                  {project.description}

                </p>

                <div className="mt-6 flex flex-wrap gap-3">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400"
                    >

                      {tech}

                    </span>

                  ))}

                </div>

                <div className="mt-8 flex gap-4">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-xl bg-cyan-400 py-3 text-center font-bold text-slate-900 transition hover:bg-cyan-300"
                  >

                    Live Demo

                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-xl border border-cyan-400 py-3 text-center font-bold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-900"
                  >

                    GitHub

                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ===================== INTERNSHIP ===================== */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            Experience
          </span>

          <h2 className="mt-6 text-5xl font-black">

            Internship Experience

          </h2>

          <p className="mt-4 text-slate-400">

            Hands-on industry experience through a 500-hour internship.

          </p>

        </div>

        <div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900 p-10">

          <div className="flex flex-col justify-between gap-6 lg:flex-row">

            <div>

              <h3 className="text-3xl font-bold text-cyan-400">

                Administrative / System Intern

              </h3>

              <p className="mt-3 text-xl text-slate-300">

                Quezon National High School

              </p>

            </div>

            <div>

              <span className="rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-900">

                500 Hours

              </span>

            </div>

          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">

            <div className="rounded-2xl bg-slate-800 p-7">

              <h4 className="text-xl font-bold text-cyan-400">

                💻 Software Development

              </h4>

              <ul className="mt-6 space-y-4 text-slate-300">

                <li>
                  ✔ Developed a QR-powered Health Monitoring System.
                </li>

                <li>
                  ✔ Managed employee and student health records.
                </li>

                <li>
                  ✔ Improved digital record organization and accessibility.
                </li>

                <li>
                  ✔ Assisted in system development and testing.
                </li>

              </ul>

            </div>

            <div className="rounded-2xl bg-slate-800 p-7">

              <h4 className="text-xl font-bold text-cyan-400">

                📁 Administrative Responsibilities

              </h4>

              <ul className="mt-6 space-y-4 text-slate-300">

                <li>
                  ✔ Verified and organized PhilHealth documents.
                </li>

                <li>
                  ✔ Managed SALN, PDS and ITR documentation.
                </li>

                <li>
                  ✔ Maintained confidential personnel records.
                </li>

                <li>
                  ✔ Supported daily administrative operations.
                </li>

              </ul>

            </div>

          </div>

          <div className="mt-10">

            <h4 className="text-xl font-bold text-cyan-400">

              Technologies & Skills Used

            </h4>

            <div className="mt-6 flex flex-wrap gap-3">

              {[
                "Next.js",
                "JavaScript",
                "HTML",
                "CSS",
                "React",
                "Java",
                "C++",
                "Jira",
                "Docker",
                "Git",
                "GitHub",
                "Microsoft Office",
                "Records Management",
                "Data Analytics",
                

              ].map((skill) => (

                <span
                  key={skill}
                  className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400"
                >

                  {skill}

                </span>

              ))}

            </div>

          </div>

        </div>

      </section>
            {/* ===================== EDUCATION ===================== */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            Education
          </span>

          <h2 className="mt-6 text-5xl font-black">

            Academic Journey

          </h2>

          <p className="mt-4 text-slate-400">

            My educational background in Information Technology.

          </p>

        </div>

        <div className="relative mt-20">

          <div className="absolute left-4 top-0 h-full w-1 rounded-full bg-cyan-400 md:left-1/2 md:-translate-x-1/2"></div>

          <div className="space-y-16">

            <div className="relative md:flex md:items-center md:justify-between">

              <div className="md:w-5/12">

                <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

                  <h3 className="text-2xl font-bold text-cyan-400">
                    Bachelor of Science in Information Technology
                  </h3>

                  <p className="mt-3 text-slate-300">
                    Dalubhasaan ng Lungsod ng Lucena
                  </p>

                  <p className="mt-2 text-slate-500">
                    Graduated • 2026
                  </p>

                </div>

              </div>

              <div className="hidden h-6 w-6 rounded-full border-4 border-slate-950 bg-cyan-400 md:block"></div>

              <div className="md:w-5/12"></div>

            </div>

            <div className="relative md:flex md:items-center md:justify-between">

              <div className="md:w-5/12"></div>

              <div className="hidden h-6 w-6 rounded-full border-4 border-slate-950 bg-cyan-400 md:block"></div>

              <div className="md:w-5/12">

                <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

                  <h3 className="text-2xl font-bold text-cyan-400">
                    STEM
                  </h3>

                  <p className="mt-3 text-slate-300">
                    Tayabas Western Academy
                  </p>

                  <p className="mt-2 text-slate-500">
                    2020 – 2022
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ===================== CERTIFICATIONS ===================== */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            Achievements
          </span>

          <h2 className="mt-6 text-5xl font-black">

            Certifications

          </h2>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {certificates.map((certificate) => (

            <div
              key={certificate}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
            >

              <div className="flex items-center gap-5">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400 text-3xl text-slate-900">

                  🏆

                </div>

                <h3 className="text-lg font-semibold">

                  {certificate}

                </h3>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ===================== SOFT SKILLS ===================== */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            Personal Skills
          </span>

          <h2 className="mt-6 text-5xl font-black">

            Soft Skills

          </h2>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {[
            "Problem Solving",
            "Critical Thinking",
            "Leadership",
            "Communication",
            "Team Collaboration",
            "Time Management",
            "Adaptability",
            "Continuous Learning",
            "Computer Literacy",
          ].map((skill) => (

            <div
              key={skill}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400"
            >

              <div className="text-5xl">

                ⭐

              </div>

              <h3 className="mt-6 text-xl font-bold">

                {skill}

              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* ===================== WHY HIRE ME ===================== */}

      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="rounded-[40px] border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-12">

          <div className="text-center">

            <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
              Why Choose Me?
            </span>

            <h2 className="mt-6 text-5xl font-black">

              What I Bring to Your Team

            </h2>

          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl bg-slate-800 p-8">

              <h3 className="text-2xl font-bold text-cyan-400">

                🚀 Fast Learner

              </h3>

              <p className="mt-5 leading-8 text-slate-300">

                Quickly adapts to new technologies and development environments.

              </p>

            </div>

            <div className="rounded-3xl bg-slate-800 p-8">

              <h3 className="text-2xl font-bold text-cyan-400">

                💻 Full Stack

              </h3>

              <p className="mt-5 leading-8 text-slate-300">

                Experienced in frontend, backend, databases, and deployment.

              </p>

            </div>

            <div className="rounded-3xl bg-slate-800 p-8">

              <h3 className="text-2xl font-bold text-cyan-400">

                🤖 AI Ready

              </h3>

              <p className="mt-5 leading-8 text-slate-300">

                Passionate about integrating AI and Data Analytics into business solutions.

              </p>

            </div>

            <div className="rounded-3xl bg-slate-800 p-8">

              <h3 className="text-2xl font-bold text-cyan-400">

                📈 Business Focus

              </h3>

              <p className="mt-5 leading-8 text-slate-300">

                Builds software that solves real business challenges with modern technologies.

              </p>

            </div>

          </div>

        </div>

      </section>
            {/* ===================== CONTACT ===================== */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="overflow-hidden rounded-[40px] border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-black p-12 shadow-2xl">

          <div className="text-center">

            <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
              Contact Me
            </span>

            <h2 className="mt-6 text-5xl font-black">

              Let's Build Something Amazing

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">

              I am actively seeking opportunities in Full Stack Web Development,
              Software Engineering, Artificial Intelligence,
              Data Analytics, and IT Support.
              If you are looking for someone passionate about building
              scalable software solutions, let's connect.

            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:border-cyan-400">

              <div className="text-5xl">

                📍

              </div>

              <h3 className="mt-5 text-xl font-bold text-cyan-400">

                Location

              </h3>

              <p className="mt-3 text-slate-400">

                Lucena City, Quezon

              </p>

            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:border-cyan-400">

              <div className="text-5xl">

                📧

              </div>

              <h3 className="mt-5 text-xl font-bold text-cyan-400">

                Email

              </h3>

              <p className="mt-3 break-all text-slate-400">

                clarkjamesdeluna14@gmail.com

              </p>

            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:border-cyan-400">

              <div className="text-5xl">

                📱

              </div>

              <h3 className="mt-5 text-xl font-bold text-cyan-400">

                Phone

              </h3>

              <p className="mt-3 text-slate-400">

                +63 946 212 8957

              </p>

            </div>

          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-5">

            <a
              href="mailto:clarkjamesdeluna14@gmail.com"
              className="flex items-center gap-3 rounded-xl bg-cyan-400 px-8 py-4 font-bold text-slate-900 transition hover:scale-105 hover:bg-cyan-300"
            >

              <FaEnvelope size={20} />

              Email Me

            </a>

            <a
              href="/RESUME_DELUNA_CLARKJAMES.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-cyan-400 px-8 py-4 font-bold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-900"
            >

              <FaDownload size={20} />

              Download Resume

            </a>

            <a
              href="https://github.com/cjdaprogrammer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-slate-700 px-8 py-4 transition hover:border-cyan-400 hover:text-cyan-400"
            >

              <FaGithub size={20} />

              GitHub

            </a>

            <a
              href="https://www.linkedin.com/in/clark-james-de-luna-"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-700 px-8 py-4 transition hover:border-cyan-400 hover:text-cyan-400"
            >

              LinkedIn

            </a>

          </div>

        </div>

      </section>

      {/* ===================== FOOTER ===================== */}

      <footer className="border-t border-slate-800 bg-slate-950">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 md:flex-row">

          <div>

            <h2 className="text-3xl font-black text-cyan-400">

              Clark James De Luna

            </h2>

            <p className="mt-2 text-slate-400">

              Full Stack Web Developer • AI Enthusiast • IT Graduate

            </p>

          </div>

          <div className="flex flex-wrap gap-6 text-slate-400">

            <a
              href="#projects"
              className="transition hover:text-cyan-400"
            >
              Projects
            </a>

            <a
              href="mailto:clarkjamesdeluna14@gmail.com"
              className="transition hover:text-cyan-400"
            >
              Contact
            </a>

            <a
              href="https://github.com/cjdaprogrammer"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-400"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/clark-james-de-luna-"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-400"
            >
              LinkedIn
            </a>

          </div>

        </div>

        <div className="border-t border-slate-800 py-6 text-center text-slate-500">

          © {new Date().getFullYear()} Clark James De Luna.
          Built with ❤️ using Next.js & Tailwind CSS.

        </div>

      </footer>

    </main>
  );
}