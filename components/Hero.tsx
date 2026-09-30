"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { HiOutlineDownload, HiOutlineMail } from "react-icons/hi";
import type { IconType } from "react-icons";
import { personalInfo, projects, workExperience, socialLinks } from "@/data/portfolio";
import ProfileImageFrame from "@/components/ProfileImageFrame";

interface HeroProps {
  onNavigate?: (tab: string) => void;
}

const focusAreas = [
  "Shopify Plus",
  "Liquid",
  "Checkout Extensibility",
  "Metafields",
  "CRO",
];

const socialIcons: Record<string, IconType> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  WhatsApp: FaWhatsapp,
  Email: HiOutlineMail,
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero({ onNavigate }: HeroProps) {
  const featuredProject =
    projects.find((p) => p.featured) ??
    projects.find((p) => p.category === "shopify");
  const currentRole = workExperience[0];
  const clientCount = projects.filter((p) => p.category === "shopify").length;

  return (
    <div className="relative flex flex-1 flex-col overflow-hidden">
      {/* Atmosphere */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-palette-light/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative flex flex-1 items-center section-panel">
        <div className="grid w-full lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
          {/* Intro — first on mobile */}
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 dark:bg-accent-light/10 dark:border-accent-light/25 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent dark:bg-accent-light opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent dark:bg-accent-light" />
              </span>
              <span className="text-sm font-medium text-accent dark:text-accent-light">
                {personalInfo.availability}
              </span>
            </motion.div>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-sm font-medium tracking-wide uppercase text-[rgb(var(--text-secondary))] dark:text-[rgb(var(--text-primary))]/70 mb-3"
            >
              {personalInfo.role}
            </motion.p>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.1] mb-4"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="text-xl lg:text-2xl font-semibold text-accent dark:text-accent-light mb-4 max-w-xl"
            >
              {personalInfo.headline}
            </motion.p>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-base lg:text-lg text-[rgb(var(--text-secondary))] dark:text-[rgb(var(--text-primary))]/80 leading-relaxed max-w-xl lg:mb-8"
            >
              {personalInfo.subheadline}
            </motion.p>
          </div>

          {/* Portrait — after intro on mobile, top of right column on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="order-2 lg:col-start-2 lg:row-start-1"
          >
            <div className="relative mx-auto w-full max-w-sm shrink-0 lg:mx-0">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-accent/25 via-transparent to-palette-light/20 blur-md" />
              <div className="relative overflow-hidden rounded-2xl border border-[rgb(var(--border-color))] bg-[rgb(var(--bg-secondary))]">
                <ProfileImageFrame
                  src={personalInfo.profilePhoto}
                  alt={personalInfo.name}
                  className="max-w-none"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#092328]/90 via-[#092328]/40 to-transparent" />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xs uppercase tracking-wider text-accent-light mb-1">
                    Previously
                  </p>
                  <p className="font-semibold text-white">
                    {currentRole.position}
                  </p>
                  <p className="text-sm text-white/80">
                    {currentRole.company} · {currentRole.startDate} –{" "}
                    {currentRole.endDate}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTAs + proof — after portrait on mobile */}
          <div className="order-3 lg:col-start-1 lg:row-start-2">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <button
                onClick={() => onNavigate?.("projects")}
                className="px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition-colors"
              >
                View Work
              </button>
              {personalInfo.resumeUrl ? (
                <a
                  href={personalInfo.resumeUrl}
                  download="Justin-Paul-Layan-Resume.docx"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[rgb(var(--bg-secondary))] hover:border-accent/50 border border-[rgb(var(--border-color))] font-medium rounded-lg transition-colors"
                >
                  <HiOutlineDownload className="size-4 shrink-0" aria-hidden />
                  Download Resume
                </a>
              ) : null}
              <button
                onClick={() => onNavigate?.("experience")}
                className="px-6 py-3 bg-[rgb(var(--bg-secondary))] hover:border-accent/50 border border-[rgb(var(--border-color))] font-medium rounded-lg transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => onNavigate?.("contact")}
                className="px-6 py-3 text-accent dark:text-accent-light hover:bg-accent/10 dark:hover:bg-accent-light/10 font-medium rounded-lg transition-colors"
              >
                Get in Touch
              </button>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1.5 text-xs font-mono text-[rgb(var(--text-secondary))] dark:text-[rgb(var(--text-primary))]/75 bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border-color))] rounded-md"
                >
                  {area}
                </span>
              ))}
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[rgb(var(--text-secondary))] dark:text-[rgb(var(--text-primary))]/70 pt-6 border-t border-[rgb(var(--border-color))]"
            >
              <span>
                <span className="font-semibold text-[rgb(var(--text-primary))]">
                  {personalInfo.experience}
                </span>{" "}
                experience
              </span>
              <span className="hidden sm:inline text-[rgb(var(--border-color))]">
                |
              </span>
              <span>
                <span className="font-semibold text-[rgb(var(--text-primary))]">
                  {clientCount}+
                </span>{" "}
                client stores
              </span>
              <span className="hidden sm:inline text-[rgb(var(--border-color))]">
                |
              </span>
              <span>{personalInfo.location}</span>
            </motion.div>
          </div>

          {/* Featured + socials — after CTAs on mobile, under portrait on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="order-4 space-y-5 lg:col-start-2 lg:row-start-2"
          >
            {featuredProject && (
              <button
                onClick={() => onNavigate?.("projects")}
                className="w-full max-w-sm mx-auto lg:mx-0 text-left p-5 rounded-xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border-color))] hover:border-accent/50 transition-colors group"
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-xs font-semibold tracking-wide uppercase text-accent dark:text-accent-light">
                    Featured
                  </span>
                  <span className="text-accent dark:text-accent-light opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                    View →
                  </span>
                </div>
                <p className="font-semibold mb-1.5 group-hover:text-accent dark:group-hover:text-accent-light transition-colors">
                  {featuredProject.title}
                </p>
                <p className="text-sm text-[rgb(var(--text-secondary))] dark:text-[rgb(var(--text-primary))]/75 line-clamp-2 leading-relaxed">
                  {featuredProject.description}
                </p>
              </button>
            )}

            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 max-w-sm mx-auto lg:mx-0">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.platform];
                const isExternal = link.platform !== "Email";
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    aria-label={link.platform}
                    title={link.platform}
                    className="inline-flex size-10 items-center justify-center rounded-lg border border-[rgb(var(--border-color))] bg-[rgb(var(--bg-secondary))] text-[rgb(var(--text-secondary))] dark:text-accent-light hover:border-accent/50 hover:text-accent dark:hover:text-white transition-colors"
                  >
                    {Icon ? <Icon className="size-4" aria-hidden /> : link.platform}
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
