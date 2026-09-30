"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { personalInfo, socialLinks } from "@/data/portfolio";
import ProfileImageFrame from "@/components/ProfileImageFrame";
import { openCalendlyPopup } from "@/lib/calendly";

type FormStatus = "idle" | "loading" | "success" | "error";

const contactSocials = socialLinks.filter(
  (link) => link.platform === "LinkedIn" || link.platform === "WhatsApp"
);

function SocialIcon({ platform }: { platform: string }) {
  if (platform === "LinkedIn") {
    return <FaLinkedinIn className="text-base" aria-hidden />;
  }
  if (platform === "WhatsApp") {
    return <FaWhatsapp className="text-base" aria-hidden />;
  }
  return null;
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [botcheck, setBotcheck] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const calendlyUrl = personalInfo.calendlyUrl?.trim() ?? "";
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ?? "";

  const handleBookMeeting = () => {
    if (calendlyUrl) {
      void openCalendlyPopup(calendlyUrl);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "Contact form is not configured. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env.local and restart."
      );
      return;
    }

    // Honeypot — pretend success for bots
    if (botcheck.trim() !== "") {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          subject: `Portfolio message from ${name.trim()}`,
          from_name: "Portfolio Contact",
        }),
      });

      let data: { success?: boolean; message?: string } = {};
      try {
        data = (await response.json()) as {
          success?: boolean;
          message?: string;
        };
      } catch {
        setStatus("error");
        setErrorMessage("Unexpected response from email service. Please try again.");
        return;
      }

      if (!response.ok || !data.success) {
        setStatus("error");
        setErrorMessage(
          data.message?.trim() ||
            "Failed to send message. Check your Web3Forms access key."
        );
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border-color))] text-[rgb(var(--text-primary))] placeholder:text-[rgb(var(--text-secondary))]/60 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors";

  return (
    <div className="section-panel">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-full mx-auto"
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          <div className="order-2 lg:order-1 w-full max-w-[260px] sm:max-w-[35%] mx-auto lg:mx-0 shrink-0">
            <ProfileImageFrame
              src={personalInfo.contactImage}
              alt="Abstract illustration representing connection and collaboration"
              className="max-w-none rounded-lg border border-[rgb(var(--border-color))]"
              imageClassName="object-cover object-center"
            />
          </div>

          <div className="order-1 lg:order-2 min-w-0 flex-1 max-w-full">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">
              Contact
            </p>
            <h2 className="section-heading-lead leading-tight">
              Let&apos;s create something
            </h2>
            <p className="text-[rgb(var(--text-secondary))] leading-relaxed mb-4">
              {personalInfo.availability}. Whether you need Shopify theme work,
              checkout customization, or a full store build — I&apos;d love to hear
              about your project.
            </p>
            <p className="text-sm text-[rgb(var(--text-secondary))] mb-8">
              Use the form below, email{" "}
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-accent hover:underline font-medium"
              >
                {personalInfo.email}
              </a>
              , message me on{" "}
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium"
              >
                WhatsApp
              </a>
              {calendlyUrl ? (
                <>
                  , or{" "}
                  <button
                    type="button"
                    onClick={handleBookMeeting}
                    className="text-accent hover:underline font-medium bg-transparent border-0 p-0 cursor-pointer inline"
                  >
                    book a meeting
                  </button>
                </>
              ) : null}
              .
            </p>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="hidden" aria-hidden="true">
                <label htmlFor="contact-botcheck">Leave blank</label>
                <input
                  id="contact-botcheck"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={botcheck}
                  onChange={(e) => setBotcheck(e.target.value)}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                  disabled={status === "loading"}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                  disabled={status === "loading"}
                />
              </div>

              <textarea
                name="message"
                placeholder="Message"
                required
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${inputClass} resize-y min-h-[140px]`}
                disabled={status === "loading"}
              />

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent hover:bg-accent-dark text-white font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending…" : "Let's Chat"}
                </button>

                {status === "success" ? (
                  <p className="text-sm text-accent" role="status">
                    Message sent — I&apos;ll get back to you soon.
                  </p>
                ) : null}
                {status === "error" ? (
                  <p className="text-sm text-red-400" role="alert">
                    {errorMessage}
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[rgb(var(--border-color))]">
          <p className="text-sm text-[rgb(var(--text-secondary))] mb-4">
            Or connect elsewhere
          </p>
          <div className="flex flex-wrap gap-3">
            {contactSocials.map((link, index) => (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.platform}
                title={link.platform}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="inline-flex items-center justify-center size-11 bg-[rgb(var(--bg-secondary))] hover:bg-accent/10 border border-[rgb(var(--border-color))] hover:border-accent/50 hover:text-accent rounded-lg transition-all"
              >
                <SocialIcon platform={link.platform} />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
