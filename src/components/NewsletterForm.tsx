"use client";

import { Send } from "lucide-react";

function NewsletterForm() {
  return (
    <form
      className="mt-4 flex items-center gap-2 rounded-md bg-[#1f1f1f] px-4 py-3"
      onSubmit={(event) => event.preventDefault()}
    >
      <input
        type="email"
        required
        placeholder="Enter email"
        aria-label="Email address"
        className="w-full min-w-0 bg-transparent text-xs text-white placeholder:text-gray-500 outline-none"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="shrink-0 text-gray-300 transition-colors hover:text-white"
      >
        <Send className="size-4" />
      </button>
    </form>
  );
}

export default NewsletterForm;
