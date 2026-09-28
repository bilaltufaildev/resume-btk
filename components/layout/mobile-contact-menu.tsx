"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CopyEmailButton } from "@/components/ui/copy-email-button";
import { ResumeDownloadLink } from "@/components/ui/resume-download-link";
import type { MobileContactMenuProps } from "@/types/site-header";

const menuTransition = { duration: 0.3, ease: "easeInOut" } as const;

export function MobileContactMenu({ content }: MobileContactMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion ? { duration: 0 } : menuTransition;
  const { name, descriptor, email, copyLabels } = content;

  return (
    <div className="tablet:hidden">
      <div className="flex min-h-14 items-center justify-between">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="font-heading text-header-name font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          {name}<span aria-hidden="true">_</span>
        </Link>
        <button
          type="button"
          aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
          aria-controls="mobile-contact-menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="flex size-10 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          <span aria-hidden="true" className="relative block size-6">
            <motion.span
              className="absolute top-1 left-0 h-0.5 w-6 rounded-full bg-ink"
              animate={{ y: isOpen ? 8 : 0, rotate: isOpen ? 45 : 0 }}
              transition={transition}
            />
            <motion.span
              className="absolute top-3 left-0 h-0.5 w-6 rounded-full bg-ink"
              animate={{ opacity: isOpen ? 0 : 1 }}
              transition={transition}
            />
            <motion.span
              className="absolute top-5 left-0 h-0.5 w-6 rounded-full bg-ink"
              animate={{ y: isOpen ? -8 : 0, rotate: isOpen ? -45 : 0 }}
              transition={transition}
            />
          </span>
        </button>
      </div>
      <motion.div
        id="mobile-contact-menu"
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={transition}
        aria-hidden={!isOpen}
        inert={!isOpen}
        className="overflow-hidden"
      >
        <div className="pb-3">
          <p className="pb-5 text-header-meta text-muted">{descriptor}</p>
          <div className="flex items-center gap-3 border-t border-hairline pt-3">
            <a
              href={`mailto:${email}`}
              className="min-w-0 break-words text-header-email font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {email}
            </a>
            <CopyEmailButton email={email} labels={copyLabels} />
          </div>
          <div className="mt-4">
            <ResumeDownloadLink />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
