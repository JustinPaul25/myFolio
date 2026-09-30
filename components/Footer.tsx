"use client";

import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgb(var(--border-color))]">
      <div className="section-container py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[rgb(var(--text-secondary))]">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="text-sm text-[rgb(var(--text-secondary))] hover:text-accent transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm text-[rgb(var(--text-secondary))] hover:text-accent transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-[rgb(var(--text-secondary))] hover:text-accent transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
