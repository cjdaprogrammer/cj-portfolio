"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}

        <Link
          href="/"
          className="text-2xl font-black tracking-wide text-cyan-400"
        >
          Clark<span className="text-white">.</span>
        </Link>

        {/* Desktop Menu */}

        <div className="hidden items-center gap-8 lg:flex">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}

        </div>

        {/* Right Side */}

        <div className="hidden items-center gap-3 lg:flex">

          <ThemeToggle />

          <a
            href="/Clark-James-De-Luna-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-cyan-400 px-4 py-2 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-900"
          >
            Resume
          </a>

          <a
            href="https://github.com/cjdaprogrammer"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-cyan-400 p-3 text-slate-900 transition hover:bg-cyan-300"
          >
            GitHub
          </a>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? (
            <X className="text-white" size={28} />
          ) : (
            <Menu className="text-white" size={28} />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}

      {open && (
        <div className="border-t border-white/10 bg-slate-950 lg:hidden">

          <div className="flex flex-col gap-4 p-6">

            {navLinks.map((link) => (

              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-slate-300 transition hover:text-cyan-400"
              >
                {link.name}
              </a>

            ))}

            <ThemeToggle />

            <a
              href="/Clark-James-De-Luna-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-xl bg-cyan-400 px-5 py-3 text-center font-semibold text-slate-900"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/cjdaprogrammer"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-700 px-5 py-3 text-center text-white"
            >
              GitHub
            </a>

          </div>

        </div>
      )}
    </header>
  );
}