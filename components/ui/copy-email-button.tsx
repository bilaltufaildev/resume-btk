"use client";

import { useEffect, useRef, useState } from "react";
import { CopyStatus } from "@/enums/copy-status";
import type { CopyEmailButtonProps } from "@/types/site-header";

export function CopyEmailButton({ email, labels }: CopyEmailButtonProps) {
  const [status, setStatus] = useState(CopyStatus.Idle);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  async function copyEmail() {
    if (resetTimer.current) clearTimeout(resetTimer.current);

    try {
      await navigator.clipboard.writeText(email);
      setStatus(CopyStatus.Copied);
    } catch {
      setStatus(CopyStatus.Failed);
    }

    resetTimer.current = setTimeout(() => setStatus(CopyStatus.Idle), 2000);
  }

  const label = labels[status];

  return (
    <button
      type="button"
      onClick={copyEmail}
      className={`relative inline-flex h-8 shrink-0 items-center justify-center rounded-full px-3 text-copy font-semibold text-ink transition-colors duration-150 before:absolute before:-inset-y-1 before:inset-x-0 hover:bg-surface-soft-active focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink motion-reduce:transition-none ${status === CopyStatus.Copied ? "bg-surface-soft-active" : "bg-surface-soft"}`}
    >
      <span aria-live="polite">{label}</span>
    </button>
  );
}
