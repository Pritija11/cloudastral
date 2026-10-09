"use client";

import { useEffect, useRef, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    formRef.current?.reset();
    setSubmitted(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setSubmitted(false), 2000);
  }

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label="Name" htmlFor="name">
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full rounded-md border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-2.5 text-sm text-[var(--fg)] outline-none placeholder:text-[var(--fg-faint)] focus:border-[var(--primary)]"
            />
          </Field>
          <Field label="Email" htmlFor="email">
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-md border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-2.5 text-sm text-[var(--fg)] outline-none placeholder:text-[var(--fg-faint)] focus:border-[var(--primary)]"
            />
          </Field>
        </div>

        <Field label="Company (optional)" htmlFor="company">
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Where you work"
            className="w-full rounded-md border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-2.5 text-sm text-[var(--fg)] outline-none placeholder:text-[var(--fg-faint)] focus:border-[var(--primary)]"
          />
        </Field>

        <Field label="Message" htmlFor="message">
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us what you're running and what you need."
            className="w-full resize-none rounded-md border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-2.5 text-sm text-[var(--fg)] outline-none placeholder:text-[var(--fg-faint)] focus:border-[var(--primary)]"
          />
        </Field>

        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center rounded-md bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-[var(--on-primary)] shadow-sm shadow-[var(--primary)]/20 transition-colors hover:bg-[var(--primary-dark)]"
        >
          Send message
        </button>
      </form>

      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-none fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 transition-all duration-300 ${
          submitted
            ? "translate-y-0 opacity-100"
            : "translate-y-2 opacity-0"
        }`}
      >
        <span className="rounded-md border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium text-[var(--success)] shadow-lg shadow-black/10">
          Message sent — we&apos;ll get back to you soon.
        </span>
      </div>
    </>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="text-sm text-[var(--fg-muted)]">{label}</span>
      {children}
    </label>
  );
}
