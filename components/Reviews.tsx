"use client";

import { motion } from "framer-motion";
import { reviews } from "@/data/portfolio";

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }, (_, i) => {
        const filled = i < rating;
        return (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={`size-5 ${filled ? "text-accent" : "text-[rgb(var(--border-color))]"}`}
            fill={filled ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        );
      })}
    </div>
  );
}

export default function Reviews() {
  return (
    <div className="section-panel">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading-lead">Client Reviews</h2>
        <p className="section-lead max-w-2xl">
          Feedback from partners I&apos;ve worked with on live projects.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((review, index) => (
            <motion.article
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border-color))] flex flex-col gap-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold">{review.company}</h3>
                  <p className="text-sm text-[rgb(var(--text-secondary))] mt-1">
                    {review.reviewer}
                    {review.date ? ` · ${review.date}` : null}
                  </p>
                </div>
                <StarRating rating={review.rating} />
              </div>

              <blockquote className="text-[rgb(var(--text-primary))] leading-relaxed border-l-2 border-accent pl-4 italic">
                &ldquo;{review.quote}&rdquo;
              </blockquote>

              <p className="text-sm text-[rgb(var(--text-secondary))] leading-relaxed">
                {review.summary}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
