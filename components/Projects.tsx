"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project, ProjectCategory } from "@/data/portfolio";

/** Training / practice repos are kept in data but omitted from the public portfolio. */
const HIDDEN_CATEGORIES: ProjectCategory[] = ["training", "repositories"];

const categories: {
  id: ProjectCategory | "all";
  label: string;
  linkLabel: string;
}[] = [
  { id: "shopify", label: "Shopify", linkLabel: "Visit Store" },
  { id: "fullstack", label: "Full Stack", linkLabel: "Visit Project" },
  { id: "theme", label: "Themes", linkLabel: "View Demo" },
  { id: "backend", label: "Backend", linkLabel: "Visit Project" },
  { id: "all", label: "All Work", linkLabel: "Visit" },
];

const visibleProjects = projects.filter(
  (project) =>
    !project.category || !HIDDEN_CATEGORIES.includes(project.category)
);

function getLinks(project: Project, linkLabel: string) {
  if (project.urls && project.urls.length > 0) return project.urls;
  if (project.url) return [{ label: linkLabel, href: project.url }];
  return [];
}

function ShopifyCard({
  project,
  linkLabel,
}: {
  project: Project;
  linkLabel: string;
}) {
  const links = getLinks(project, linkLabel);

  return (
    <article className="flex flex-col rounded-xl border border-[rgb(var(--border-color))] bg-[rgb(var(--bg-secondary))] overflow-hidden">
      <div className="relative aspect-[16/10] bg-[rgb(var(--bg-primary))] border-b border-[rgb(var(--border-color))] overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-[rgb(var(--text-secondary))]/70">
            <svg
              className="w-10 h-10 opacity-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-xs font-mono">Image coming soon</span>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        {project.role && (
          <p className="text-xs font-medium uppercase tracking-wide text-accent dark:text-accent-light mb-1.5">
            {project.role}
          </p>
        )}
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-[rgb(var(--text-secondary))] dark:text-[rgb(var(--text-primary))]/80 leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[11px] font-mono bg-[rgb(var(--bg-primary))] border border-[rgb(var(--border-color))] rounded text-[rgb(var(--text-secondary))] dark:text-[rgb(var(--text-primary))]/75"
            >
              {tag}
            </span>
          ))}
        </div>

        {links.length > 0 && (
          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-dark dark:text-accent-light dark:hover:text-white transition-colors"
              >
                {link.label || linkLabel}
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            ))}
          </div>
        )}

        {project.linkNote && (
          <p className="text-xs text-[rgb(var(--text-secondary))] dark:text-accent-light/90 italic mt-3">
            Note: {project.linkNote}
          </p>
        )}
      </div>
    </article>
  );
}

function ProjectListItem({
  project,
  index,
  linkLabel,
  isExpanded,
  onHover,
  onToggle,
}: {
  project: Project;
  index: number;
  linkLabel: string;
  isExpanded: boolean;
  onHover: () => void;
  onToggle: () => void;
}) {
  const links = getLinks(project, linkLabel);
  const previewTags = project.tags.slice(0, 3);
  const extraTagCount = project.tags.length - previewTags.length;

  return (
    <li
      className="group border-b border-[rgb(var(--border-color))] last:border-b-0"
      onMouseEnter={onHover}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left px-4 sm:px-5 py-4 flex items-start sm:items-center gap-3 sm:gap-4 hover:bg-accent/5 transition-colors"
        aria-expanded={isExpanded}
      >
        <span className="hidden sm:flex shrink-0 w-8 text-xs font-mono text-[rgb(var(--text-secondary))]/60 pt-0.5">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-4">
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg font-semibold text-[rgb(var(--text-primary))] group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              {project.role && (
                <p className="text-xs sm:text-sm text-[rgb(var(--text-secondary))] mt-0.5">
                  {project.role}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-1.5 shrink-0">
              {previewTags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[11px] font-mono bg-[rgb(var(--bg-primary))] border border-[rgb(var(--border-color))] rounded text-[rgb(var(--text-secondary))]"
                >
                  {tag}
                </span>
              ))}
              {extraTagCount > 0 && (
                <span className="text-[11px] font-mono text-[rgb(var(--text-secondary))]">
                  +{extraTagCount}
                </span>
              )}
              <svg
                className={`w-4 h-4 ml-1 text-[rgb(var(--text-secondary))] transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-5 pb-5 sm:pl-[4.25rem]">
              <p className="text-sm text-[rgb(var(--text-secondary))] leading-relaxed mb-4 max-w-3xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono bg-[rgb(var(--bg-primary))] border border-[rgb(var(--border-color))] rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {links.length > 0 && (
                <div className="flex flex-wrap gap-x-4 gap-y-2 mb-3">
                  {links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-dark transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {link.label || linkLabel}
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              )}

              {project.linkNote && (
                <p className="text-xs text-[rgb(var(--text-secondary))]/80 italic">
                  Note: {project.linkNote}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

function Pagination({
  pageStart,
  pageSize,
  total,
  currentPage,
  totalPages,
  onPageChange,
  placement = "top",
}: {
  pageStart: number;
  pageSize: number;
  total: number;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  placement?: "top" | "bottom";
}) {
  if (total <= pageSize) return null;

  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${
        placement === "bottom" ? "mt-6" : "mb-4"
      }`}
    >
      <p className="text-sm text-[rgb(var(--text-secondary))]">
        Showing {pageStart + 1}–{Math.min(pageStart + pageSize, total)} of{" "}
        {total}
      </p>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className="px-3 py-2 text-sm font-medium rounded-lg border border-[rgb(var(--border-color))] bg-[rgb(var(--bg-secondary))] disabled:opacity-40 disabled:cursor-not-allowed hover:enabled:border-accent/50 transition-colors"
          aria-label="Previous page"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              type="button"
              onClick={() => onPageChange(pageNumber)}
              aria-current={pageNumber === currentPage ? "page" : undefined}
              className={`min-w-[2.25rem] px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pageNumber === currentPage
                  ? "bg-accent text-white"
                  : "border border-[rgb(var(--border-color))] bg-[rgb(var(--bg-secondary))] hover:border-accent/50"
              }`}
            >
              {pageNumber}
            </button>
          )
        )}

        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="px-3 py-2 text-sm font-medium rounded-lg border border-[rgb(var(--border-color))] bg-[rgb(var(--bg-secondary))] disabled:opacity-40 disabled:cursor-not-allowed hover:enabled:border-accent/50 transition-colors"
          aria-label="Next page"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<
    ProjectCategory | "all"
  >("shopify");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const isShopifyTab = activeCategory === "shopify";
  const PAGE_SIZE = isShopifyTab ? 6 : 5;

  const activeMeta =
    categories.find((c) => c.id === activeCategory) ?? categories[0];

  const filtered = visibleProjects.filter((project) => {
    if (activeCategory === "all") return true;
    return project.category === activeCategory;
  });

  const sorted = [...filtered].sort((a, b) =>
    a.title.localeCompare(b.title, undefined, { sensitivity: "base" })
  );

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageStart = (currentPage - 1) * PAGE_SIZE;
  const paginated = sorted.slice(pageStart, pageStart + PAGE_SIZE);

  const goToPage = (nextPage: number) => {
    setPage(nextPage);
    setExpandedId(null);
  };

  return (
    <div className="section-panel">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading-lead">Projects</h2>
        <p className="section-lead max-w-3xl">
          Shopify client stores first — screenshot cards with live links. Full
          stack, theme, and backend work lives in the other tabs.
        </p>

        <div
          className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-[rgb(var(--border-color))]"
          role="tablist"
          aria-label="Project categories"
        >
          {categories.map((category) => {
            const count =
              category.id === "all"
                ? visibleProjects.length
                : visibleProjects.filter((p) => p.category === category.id)
                    .length;
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setActiveCategory(category.id);
                  setExpandedId(null);
                  setPage(1);
                }}
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? "bg-accent text-white"
                    : "bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border-color))] text-[rgb(var(--text-secondary))] hover:border-accent/50 hover:text-[rgb(var(--text-primary))]"
                }`}
              >
                {category.label}
                <span
                  className={`ml-1.5 text-xs ${
                    isActive
                      ? "text-white/80"
                      : "text-[rgb(var(--text-secondary))]/70"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {!isShopifyTab && (
          <Pagination
            pageStart={pageStart}
            pageSize={PAGE_SIZE}
            total={sorted.length}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={goToPage}
            placement="top"
          />
        )}

        <AnimatePresence mode="wait">
          {isShopifyTab ? (
            <motion.div
              key={`shopify-${currentPage}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {paginated.map((project) => (
                <ShopifyCard
                  key={project.id}
                  project={project}
                  linkLabel={activeMeta.linkLabel}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={`${activeCategory}-${currentPage}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl border border-[rgb(var(--border-color))] bg-[rgb(var(--bg-secondary))] overflow-hidden"
              onMouseLeave={() => setExpandedId(null)}
            >
              <ul>
                {paginated.length === 0 ? (
                  <li className="px-5 py-10 text-center text-sm text-[rgb(var(--text-secondary))]">
                    No projects in this category yet.
                  </li>
                ) : (
                  paginated.map((project, index) => (
                    <ProjectListItem
                      key={project.id}
                      project={project}
                      index={pageStart + index}
                      linkLabel={activeMeta.linkLabel}
                      isExpanded={expandedId === project.id}
                      onHover={() => setExpandedId(project.id)}
                      onToggle={() =>
                        setExpandedId((current) =>
                          current === project.id ? null : project.id
                        )
                      }
                    />
                  ))
                )}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {isShopifyTab && (
          <Pagination
            pageStart={pageStart}
            pageSize={PAGE_SIZE}
            total={sorted.length}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={goToPage}
            placement="bottom"
          />
        )}
      </motion.div>
    </div>
  );
}
