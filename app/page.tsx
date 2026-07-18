import Image from "next/image";

const skills = [
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Python",
  "Java",
  "Next.js",
  "React",
  "Supabase",
  "PostgreSQL",
  "TensorFlow",
  "Git",
  "GitHub",
  "Data Analytics",
  "Artificial Intelligence",
];

const projects = [
  {
    title: "Quezon National High School Clinic Health Monitoring System",
    description:
      "A QR-powered clinic management system with patient records, health monitoring, reports, and appointment management.",
    image: "/projects/clinic.png",
    technologies: [
      "Next.js",
      "Supabase",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    live: "https://your-clinic-project.vercel.app",
    github: "https://github.com/cjdaprogrammer",
  },

  {
    title: "Automated Inventory & Management System for Alayna Zuri Aesthetic",
    description:
      "AI-powered inventory management system featuring facial analysis, dashboards, sales visualization, reports, and authentication.",
    image: "/projects/alayna.png",
    technologies: [
      "Next.js",
      "TensorFlow",
      "Supabase",
      "Tailwind CSS",
    ],
    live: "https://your-alayna-project.vercel.app",
    github: "https://github.com/cjdaprogrammer",
  },

  {
    title: "Coffee Shop E-Commerce Website",
    description:
      "Responsive online ordering platform with inventory management, product catalog, and order tracking.",
    image: "/projects/coffee.png",
    technologies: [
      "Next.js",
      "PostgreSQL",
      "Tailwind CSS",
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
  "UNITE 2025: Provincial IT Seminar",
  "Artificial Intelligence Seminar",
  "Graphic Designing Seminar",
];

const stats = [
  {
    title: "Projects",
    value: "3+",
  },
  {
    title: "Technologies",
    value: "15+",
  },
  {
    title: "Certificates",
    value: "8+",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">

      {/* HERO */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <p className="uppercase tracking-[5px] text-cyan-400 text-sm font-semibold">
              IT Graduate • Web Developer
            </p>

            <div className="mt-5 inline-flex items-center rounded-full border border-green-500/40 bg-green-500/10 px-5 py-2 text-green-400">
              ● Available for Work
            </div>

            <h1 className="mt-8 text-6xl font-black leading-tight lg:text-7xl">
              Clark James
              <span className="block text-cyan-400">
                De Luna
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              Bachelor of Science in Information Technology graduate passionate
              about building modern web applications, artificial intelligence
              solutions, dashboards, and data-driven systems that solve real
              business problems.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="rounded-xl bg-cyan-400 px-7 py-4 font-bold text-slate-900 transition hover:bg-cyan-300"
              >
                🚀 View Projects
              </a>

              <a
                href="/Clark-James-De-Luna-Resume.pdf"
                target="_blank"
                className="rounded-xl border border-cyan-400 px-7 py-4 font-bold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-900"
              >
                📄 Resume
              </a>

              <a
                href="mailto:clarkjamesdeluna14@gmail.com"
                className="rounded-xl border border-slate-700 px-7 py-4 font-bold transition hover:bg-slate-800"
              >
                ✉ Contact
              </a>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center">

            <div className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-7 shadow-2xl transition duration-500 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-cyan-500/30">

              <Image
                src="/profile.jpg"
                alt="Clark James De Luna"
                width={420}
                height={420}
                priority
                className="rounded-2xl transition duration-500 group-hover:scale-105"
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

                <p className="text-slate-400">
                  📞 0946 212 8957
                </p>

                <p className="text-slate-400">
                  ✉ clarkjamesdeluna14@gmail.com
                </p>

                <div className="mt-8 flex justify-center gap-4">

                  <a
                    href="https://github.com/cjdaprogrammer"
                    target="_blank"
                    className="rounded-xl bg-slate-800 px-5 py-3 transition hover:bg-slate-700"
                  >
                    GitHub
                  </a>

                  <a
                    href="mailto:clarkjamesdeluna14@gmail.com"
                    className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-900 transition hover:bg-cyan-300"
                  >
                    Email Me
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="mx-auto max-w-7xl px-6">

        <div className="grid gap-6 md:grid-cols-3">

          {stats.map((stat) => (

            <div
              key={stat.title}
              className="rounded-3xl border border-slate-300 bg-white dark:border-slate-800 dark:bg-slate-900 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400"
            >

              <h3 className="text-5xl font-black text-cyan-400">
                {stat.value}
              </h3>

              <p className="mt-3 text-slate-700 dark:text-slate-300">
                {stat.title}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* SKILLS */}

      <section className="mx-auto max-w-7xl px-6 py-16">

        <h2 className="text-4xl font-bold">
          Technical Skills
        </h2>

        <div className="mt-8 flex flex-wrap gap-4">

          {skills.map((skill) => (

            <span
              key={skill}
              className="rounded-full border border-slate-700 bg-slate-900 px-5 py-3 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              {skill}
            </span>

          ))}

        </div>

      </section>

      {/* ABOUT */}

      <section className="mx-auto max-w-7xl px-6 py-6">

        <h2 className="text-4xl font-bold">
          About Me
        </h2>

        <div className="mt-8 rounded-3xl border border-slate-300 bg-white dark:border-slate-800 dark:bg-slate-900 p-8">

          <p className="text-lg leading-9 text-slate-700 dark:text-slate-300">

            I am a Bachelor of Science in Information Technology graduate from
            Dalubhasaan ng Lungsod ng Lucena with strong experience in Full Stack
            Web Development, Artificial Intelligence, Data Analytics, and
            Database Management.

            <br /><br />

            I enjoy building scalable systems, modern dashboards,
            AI-powered applications, and responsive websites that solve
            real-world business problems.

            <br /><br />

            My goal is to continuously improve my skills while creating
            high-quality software with excellent user experience and modern
            technologies.

          </p>

        </div>

      </section>

      {/* PROJECTS */}

      <section id="projects" className="mx-auto max-w-7xl px-6 py-20">

        <h2 className="text-4xl font-bold">
          Featured Projects
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (

            <div
              key={project.title}
              className="overflow-hidden rounded-3xl border border-slate-300 bg-white dark:border-slate-800 dark:bg-slate-900 transition duration-300 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
            >

              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-bold text-cyan-400">
                  {project.title}
                </h3>

                <p className="mt-3 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full bg-slate-800 px-3 py-1 text-xs text-cyan-400"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="mt-6 flex gap-4">

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex-1 rounded-lg bg-cyan-400 py-2 text-center font-bold text-slate-900 transition hover:bg-cyan-300"
                  >
                    Live
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex-1 rounded-lg border border-cyan-400 py-2 text-center font-bold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-900"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* EDUCATION */}

<section className="mx-auto max-w-7xl px-6 py-20">

  <div className="text-center">

    <h2 className="text-5xl font-black">
      Education
    </h2>

    <p className="mt-4 text-slate-400">
      My academic journey in Information Technology.
    </p>

  </div>

  <div className="mt-14 space-y-8">

    <div className="rounded-3xl border border-slate-300 bg-white dark:border-slate-800 dark:bg-slate-900 p-8 transition hover:border-cyan-400">

      <h3 className="text-2xl font-bold text-cyan-400">
        Dalubhasaan ng Lungsod ng Lucena
      </h3>

      <p className="mt-2 text-lg text-slate-700 dark:text-slate-300">
        Bachelor of Science in Information Technology
      </p>

      <p className="mt-2 text-slate-500">
        Graduated • 2026
      </p>

    </div>

    <div className="rounded-3xl border border-slate-300 bg-white dark:border-slate-800 dark:bg-slate-900 p-8 transition hover:border-cyan-400">

      <h3 className="text-2xl font-bold text-cyan-400">
        Tayabas Western Academy
      </h3>

      <p className="mt-2 text-lg text-slate-700 dark:text-slate-300">
        Science, Technology, Engineering and Mathematics (STEM)
      </p>

      <p className="mt-2 text-slate-500">
        2020 – 2022
      </p>

    </div>

  </div>

</section>

{/* ===================== CERTIFICATES ===================== */}

<section className="mx-auto max-w-7xl px-6 py-20">

  <div className="text-center">

    <h2 className="text-5xl font-black">
      Certifications
    </h2>

    <p className="mt-4 text-slate-400">
      Professional certifications and seminars.
    </p>

  </div>

  <div className="mt-14 grid gap-6 md:grid-cols-2">

    {certificates.map((certificate) => (

      <div
        key={certificate}
        className="rounded-2xl border border-slate-300 bg-white dark:border-slate-800 dark:bg-slate-900 p-6 transition hover:-translate-y-2 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
      >

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 text-xl text-slate-900">

            🏆

          </div>

          <h3 className="font-semibold text-slate-700 dark:text-slate-300">

            {certificate}

          </h3>

        </div>

      </div>

    ))}

  </div>

</section>

{/* ===================== SOFT SKILLS ===================== */}

<section className="mx-auto max-w-7xl px-6 py-20">

  <div className="text-center">

    <h2 className="text-5xl font-black">
      Soft Skills
    </h2>

  </div>

  <div className="mt-14 grid gap-6 md:grid-cols-3">

    {[
      "Problem Solving",
      "Communication",
      "Team Collaboration",
      "Leadership",
      "Time Management",
      "Adaptability",
      "Critical Thinking",
      "Computer Literacy",
      "Continuous Learning",
    ].map((skill) => (

      <div
        key={skill}
        className="rounded-2xl border border-slate-300 bg-white dark:border-slate-800 dark:bg-slate-900 p-6 text-center transition hover:-translate-y-2 hover:border-cyan-400"
      >

        <div className="mb-4 text-4xl">

          ⭐

        </div>

        <h3 className="font-semibold text-slate-700 dark:text-slate-300">

          {skill}

        </h3>

      </div>

    ))}

  </div>

</section>

      {/* CONTACT */}

      <section className="mx-auto max-w-7xl px-6 py-24">

  <div className="rounded-[32px] border border-slate-300 bg-gradient-to-br from-white to-slate-100 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950 p-12 text-center shadow-2xl">

    <h2 className="text-5xl font-black text-slate-900 dark:text-white">
      Let's Build Something Amazing
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
      I am actively seeking opportunities in Web Development,
      Software Engineering, Artificial Intelligence,
      Data Analytics, and IT Support.
      If you're looking for someone passionate about building
      modern and scalable applications, I'd love to connect.
    </p>

    <div className="mt-12 flex flex-wrap justify-center gap-5">

      <a
        href="mailto:clarkjamesdeluna14@gmail.com"
        className="rounded-xl bg-cyan-400 px-8 py-4 font-bold text-slate-900 transition hover:scale-105 hover:bg-cyan-300"
      >
        📧 Email Me
      </a>

      <a
        href="/Clark-James-De-Luna-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl border border-cyan-400 px-8 py-4 font-bold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-900"
      >
        📄 Download Resume
      </a>

      <a
        href="https://github.com/cjdaprogrammer"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl border border-slate-700 px-8 py-4 transition hover:border-cyan-400 hover:text-cyan-400"
      >
        💻 GitHub
      </a>

      {/* Replace this with your LinkedIn profile */}
      <a
        href="https://linkedin.com/in/your-linkedin"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl border border-slate-700 px-8 py-4 transition hover:border-cyan-400 hover:text-cyan-400"
      >
        🔗 LinkedIn
      </a>

    </div>

    <div className="mt-16 grid gap-6 md:grid-cols-3">

      <div className="rounded-2xl border border-slate-300 bg-white dark:border-slate-800 dark:bg-slate-900 p-6">

        <h3 className="text-cyan-400 text-xl font-bold">
          📍 Location
        </h3>

        <p className="mt-3 text-slate-700 dark:text-slate-300">
          Lucena City, Quezon
        </p>

      </div>

      <div className="rounded-2xl border border-slate-300 bg-white dark:border-slate-800 dark:bg-slate-900 p-6">

        <h3 className="text-cyan-400 text-xl font-bold">
          📧 Email
        </h3>

        <p className="mt-3 text-slate-700 dark:text-slate-300 break-all">
          clarkjamesdeluna14@gmail.com
        </p>

      </div>

      <div className="rounded-2xl border border-slate-300 bg-white dark:border-slate-800 dark:bg-slate-900 p-6">

        <h3 className="text-cyan-400 text-xl font-bold">
          📱 Phone
        </h3>

        <p className="mt-3 text-slate-700 dark:text-slate-300">
          +63 946 212 8957
        </p>

      </div>

    </div>

      </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-slate-800 py-10">

  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row">

    <div>

      <h2 className="text-2xl font-black text-cyan-400">
        Clark James De Luna
      </h2>

      <p className="mt-2 text-slate-400">
        Full Stack Web Developer • AI Enthusiast • IT Graduate
      </p>

    </div>

    <div className="flex gap-6 text-sm text-slate-400">

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

    </div>

  </div>

  <div className="mt-10 text-center text-slate-500">

    © {new Date().getFullYear()} Clark James De Luna.
    Built with ❤️ using Next.js & Tailwind CSS.

  </div>

      </footer>

    </main>
  );
}