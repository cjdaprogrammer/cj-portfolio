import Image from "next/image";

const skills = [
  "JavaScript",
  "HTML5",
  "CSS3",
  "Python",
  "Next.js",
  "Git",
  "GitHub",
  "Data Visualization",
  "Front-End Development",
];

const projects = [
  {
    title: "Quezon National High School Clinic Health Monitoring System",
    description:
      "A web-based clinic management and health monitoring system with QR-based identification, health monitoring, and reporting features.",
  },
  {
    title: "Automated Inventory and Management System for Alayna Zuri Aesthetic",
    description:
      "An AI-powered system with facial analysis, visualization features, sales trend analysis, and real-time reporting dashboards.",
  },
  {
    title: "E-Commerce Web-Based Coffee Shop",
    description:
      "A responsive e-commerce platform with ordering and inventory management features.",
  },
];

const certificates = [
  "Cisco Introduction to Modern AI",
  "Cisco Introduction to Data Science",
  "Cisco Introduction to Cybersecurity",
  "Cisco Networking Basics",
  "Cisco Ethical Hacking",
  "UNITE 2025: 11th Provincial Information Technology Seminar",
  "Introduction to Artificial Intelligence Seminar",
  "Graphic Designing Seminar",
];

const stats = [
  { title: "Projects", value: "3+" },
  { title: "Certifications", value: "8+" },
  { title: "Technologies", value: "9+" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm uppercase tracking-widest text-cyan-400">
              IT Graduate • Web Developer
            </p>

            <div className="mb-5 mt-3 inline-flex items-center rounded-full border border-green-500/40 bg-green-500/10 px-4 py-2 text-sm text-green-400">
              ● Open for Opportunities
            </div>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Clark James
              <span className="block text-cyan-400">De Luna</span>
            </h1>

            <p className="mt-6 text-xl leading-8 text-slate-300">
              Information Technology graduate with experience in web development,
              data analytics, and artificial intelligence.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View Projects
              </a>

              <a
                href="mailto:clarkjamesdeluna14@gmail.com"
                className="rounded-xl border border-slate-600 px-6 py-3 font-semibold transition hover:bg-slate-800"
              >
                Contact Me
              </a>

              <a
                href="/Clark-James-De-Luna-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-cyan-400 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400">
              <Image
                src="/profile.jpg"
                alt="Clark James De Luna"
                width={350}
                height={350}
                priority
                className="rounded-2xl object-cover"
              />

              <div className="mt-6 space-y-2 text-center">
                <h2 className="text-2xl font-bold">Clark James E. De Luna</h2>
                <p className="text-cyan-400">IT Graduate | Web Developer</p>
                <p className="text-slate-300">Lucena City, Quezon, Philippines</p>
                <p className="text-slate-300">📞 0946 212 8957</p>
                <p className="text-slate-300">✉️ clarkjamesdeluna14@gmail.com</p>

                <div className="mt-5 flex justify-center gap-4">
                  <a
                    href="https://github.com/cjdaprogrammer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-slate-800 px-4 py-2 transition hover:bg-slate-700"
                  >
                    GitHub
                  </a>

                  <a
                    href="mailto:clarkjamesdeluna14@gmail.com"
                    className="rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    Email Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-6 py-6">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center transition hover:-translate-y-1 hover:border-cyan-400"
            >
              <h3 className="text-4xl font-bold text-cyan-400">{stat.value}</h3>
              <p className="mt-2 text-slate-300">{stat.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">Technical Skills</h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">About Me</h2>

        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="leading-8 text-slate-300">
            I am a Bachelor of Science in Information Technology graduate from
            Dalubhasaan ng Lungsod ng Lucena with experience in web development,
            data analytics, and artificial intelligence. I enjoy creating
            responsive web applications, solving real-world problems through
            technology, and continuously learning modern development tools.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">Projects</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <p className="mb-3 text-sm font-semibold text-cyan-400">
                Project {index + 1}
              </p>

              <h3 className="text-xl font-bold text-cyan-400">
                {project.title}
              </h3>

              <p className="mt-4 text-slate-300">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">Education</h2>

        <div className="mt-6 space-y-5">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400">
            <h3 className="text-xl font-semibold">
              Dalubhasaan ng Lungsod ng Lucena
            </h3>
            <p className="text-slate-300">
              Bachelor of Science in Information Technology
            </p>
            <p className="text-slate-400">Graduated, 2026</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400">
            <h3 className="text-xl font-semibold">Tayabas Western Academy</h3>
            <p className="text-slate-300">
              Science, Technology, Engineering and Mathematics
            </p>
            <p className="text-slate-400">2020–2022</p>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">Certifications & Seminars</h2>

        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {certificates.map((cert) => (
            <li
              key={cert}
              className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-3 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              {cert}
            </li>
          ))}
        </ul>
      </section>

      {/* Soft Skills */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">Soft Skills</h2>

        <p className="mt-5 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-300">
          Problem Solving • Team Collaboration • Adaptability • Time Management •
          Communication • Computer Literacy
        </p>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">
          <h2 className="text-3xl font-bold">Let’s Work Together</h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            I am open to web development, IT support, data analytics, and
            entry-level software development opportunities.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:clarkjamesdeluna14@gmail.com"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Send Email
            </a>

            <a
              href="/Clark-James-De-Luna-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-cyan-400 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/cjdaprogrammer"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-600 px-6 py-3 font-semibold transition hover:bg-slate-800"
            >
              Visit GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-8 text-center text-slate-400">
        © 2026 Clark James E. De Luna. All rights reserved.
      </footer>
    </main>
  );
}