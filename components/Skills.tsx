"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";
import { getSkillIcon } from "@/lib/skillIcons";

export default function Skills() {
  return (
    <div className="section-panel">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading">Tech Stack</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="p-6 rounded-lg bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border-color))]"
            >
              <h3 className="text-lg font-semibold mb-4 text-accent dark:text-accent-light">
                {category.category}
              </h3>
              <ul className="space-y-2.5">
                {category.skills.map((skill) => {
                  const Icon = getSkillIcon(skill);
                  return (
                    <li
                      key={skill}
                      className="flex items-center gap-2.5 text-sm text-[rgb(var(--text-secondary))] dark:text-[rgb(var(--text-primary))]/80"
                    >
                      <Icon
                        className="text-base text-accent dark:text-accent-light shrink-0"
                        aria-hidden
                      />
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
