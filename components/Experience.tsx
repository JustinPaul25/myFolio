"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { workExperience } from "@/data/portfolio";

export default function Experience() {
  return (
    <div className="section-panel">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading">Work Experience</h2>

        <div className="relative space-y-8">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[rgb(var(--border-color))] hidden sm:block" />

          {workExperience.map((job, index) => {
            const companyHeading = (
              <h3 className="text-xl font-semibold">{job.company}</h3>
            );

            return (
              <motion.article
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative sm:pl-10"
              >
                <div className="absolute left-0 top-2 hidden sm:block h-3.5 w-3.5 rounded-full border-2 border-accent bg-[rgb(var(--bg-primary))]" />

                <div className="p-6 rounded-lg bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border-color))]">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div className="flex items-start gap-3 min-w-0">
                      {job.logo && (
                        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-[rgb(var(--border-color))] bg-[rgb(var(--bg-primary))]">
                          <Image
                            src={job.logo}
                            alt={`${job.company} logo`}
                            fill
                            unoptimized={job.logo.endsWith(".svg")}
                            className="object-cover"
                            sizes="44px"
                          />
                        </div>
                      )}
                      <div className="min-w-0">
                        {job.website ? (
                          <a
                            href={job.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
                          >
                            {companyHeading}
                            <span className="text-accent text-sm opacity-70" aria-hidden>
                              ↗
                            </span>
                          </a>
                        ) : (
                          companyHeading
                        )}
                        <p className="text-accent dark:text-accent-light font-medium mt-1">
                          {job.position}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm font-mono text-[rgb(var(--text-secondary))] whitespace-nowrap sm:pt-1">
                      {job.startDate} — {job.endDate}
                    </p>
                  </div>

                  <p className="text-sm text-[rgb(var(--text-secondary))] leading-relaxed mb-4">
                    {job.about}
                  </p>

                  <ul className="space-y-2">
                    {job.duties.map((duty) => (
                      <li
                        key={duty}
                        className="text-sm text-[rgb(var(--text-secondary))] flex gap-2"
                      >
                        <span className="text-accent shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{duty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
